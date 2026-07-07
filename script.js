document.addEventListener('DOMContentLoaded', () => {
    // Configurações comuns dos gráficos para manter a consistência
    const commonOptions = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                display: false // Oculta a legenda já que o título descreve o gráfico
            },
            tooltip: {
                backgroundColor: 'rgba(15, 23, 42, 0.95)',
                titleFont: {
                    family: "'Inter', sans-serif",
                    size: 13,
                    weight: '600'
                },
                bodyFont: {
                    family: "'Inter', sans-serif",
                    size: 12
                },
                padding: 12,
                cornerRadius: 8,
                displayColors: false,
                callbacks: {
                    label: function(context) {
                        return ` ${context.dataset.label}: ${context.raw}`;
                    }
                }
            }
        },
        scales: {
            x: {
                grid: {
                    display: false
                },
                ticks: {
                    color: '#64748b',
                    font: {
                        family: "'Inter', sans-serif",
                        size: 12,
                        weight: '500'
                    }
                },
                border: {
                    display: false
                }
            },
            y: {
                grid: {
                    color: 'rgba(226, 232, 240, 0.6)',
                    drawBorder: false
                },
                ticks: {
                    color: '#64748b',
                    font: {
                        family: "'Inter', sans-serif",
                        size: 11
                    }
                },
                border: {
                    dash: [4, 4],
                    display: false
                }
            }
        },
        animation: {
            duration: 1800,
            easing: 'easeOutElastic',
            delay: (context) => context.dataIndex * 150 // Efeito cascata suave no carregamento
        },
        hover: {
            mode: 'nearest',
            intersect: true
        }
    };
    // 1. Gráfico de Médicos por 1.000 Hab.
    const canvasMedicos = document.getElementById('chartMedicos');
    if (canvasMedicos) {
        const ctx = canvasMedicos.getContext('2d');
        
        // Ajustando altura do container para melhor visualização responsiva
        canvasMedicos.parentNode.style.height = '300px';
        // Criação dos Gradientes Lineares
        const gradBrasil = ctx.createLinearGradient(0, 0, 0, 300);
        gradBrasil.addColorStop(0, '#4ade80'); // Verde menta vibrante pastel
        gradBrasil.addColorStop(1, '#059669'); // Verde esmeralda profundo
        const gradCuba = ctx.createLinearGradient(0, 0, 0, 300);
        gradCuba.addColorStop(0, '#fde047'); // Amarelo pastel suave
        gradCuba.addColorStop(1, '#d97706'); // Âmbar/Dourado
        const gradEua = ctx.createLinearGradient(0, 0, 0, 300);
        gradEua.addColorStop(0, '#60a5fa'); // Azul celeste pastel
        gradEua.addColorStop(1, '#2563eb'); // Azul royal elegante
        new Chart(ctx, {
            type: 'bar',
            data: {
                labels: ['Brasil', 'Cuba', 'EUA'],
                datasets: [{
                    label: 'Médicos/1.000 hab.',
                    data: [2.3, 8.4, 2.6],
                    backgroundColor: [gradBrasil, gradCuba, gradEua],
                    hoverBackgroundColor: [
                        '#059669', // Brasil hover (cor final do gradiente)
                        '#d97706', // Cuba hover
                        '#2563eb'  // EUA hover
                    ],
                    borderRadius: 8,
                    borderSkipped: false, // Mantém a base plana
                    maxBarThickness: 45
                }]
            },
            options: commonOptions
        });
    }
    // 2. Gráfico de Mortalidade Infantil
    const canvasMortalidade = document.getElementById('chartMortalidade');
    if (canvasMortalidade) {
        const ctx = canvasMortalidade.getContext('2d');
        
        // Ajustando altura do container para melhor visualização responsiva
        canvasMortalidade.parentNode.style.height = '300px';
        // Gradientes para Mortalidade (mesmo padrão para consistência institucional)
        const gradBrasil = ctx.createLinearGradient(0, 0, 0, 300);
        gradBrasil.addColorStop(0, '#4ade80');
        gradBrasil.addColorStop(1, '#059669');
        const gradCuba = ctx.createLinearGradient(0, 0, 0, 300);
        gradCuba.addColorStop(0, '#fde047');
        gradCuba.addColorStop(1, '#d97706');
        const gradEua = ctx.createLinearGradient(0, 0, 0, 300);
        gradEua.addColorStop(0, '#60a5fa');
        gradEua.addColorStop(1, '#2563eb');
        new Chart(ctx, {
            type: 'bar',
            data: {
                labels: ['Brasil', 'Cuba', 'EUA'],
                datasets: [{
                    label: 'Mortes/1.000 nascidos',
                    data: [13, 4.5, 5.4],
                    backgroundColor: [gradBrasil, gradCuba, gradEua],
                    hoverBackgroundColor: [
                        '#059669',
                        '#d97706',
                        '#2563eb'
                    ],
                    borderRadius: 8,
                    borderSkipped: false,
                    maxBarThickness: 45
                }]
            },
            options: commonOptions
        });
    }
});
