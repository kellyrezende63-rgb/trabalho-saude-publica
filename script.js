// Configurações Globais de Cores (Cores da Bandeira)
const cores = {
    brasil: '#009c3b', // Verde
    comparacao1: '#002776', // Azul
    comparacao2: '#ffdf00', // Amarelo
};

// 1. Gráfico de Expectativa de Vida
new Chart(document.getElementById('chartExpectativa'), {
    type: 'bar',
    data: {
        labels: ['Brasil', 'EUA', 'Cuba'],
        datasets: [{
            label: 'Anos de Vida',
            data: , // Valores aproximados para fins de exemplo acadêmico
            backgroundColor: [cores.brasil, cores.comparacao1, cores.comparacao2]
        }]
    }
});

// 2. Gráfico de Médicos por Habitante
new Chart(document.getElementById('chartMedicos'), {
    type: 'bar',
    data: {
        labels: ['Brasil', 'Cuba', 'EUA'],
        datasets: [{
            label: 'Médicos por 1.000 hab.',
            data: [2.3, 8.4, 2.6], // Cuba citada como referência de alta densidade [7]
            backgroundColor: [cores.brasil, cores.comparacao2, cores.comparacao1]
        }]
    }
});

// 3. Gráfico de Mortalidade Infantil
new Chart(document.getElementById('chartMortalidade'), {
    type: 'line',
    data: {
        labels: ['Brasil', 'Cuba', 'EUA'],
        datasets: [{
            label: 'Mortes por 1.000 nascidos',
            data: [6, 7, 11],
            borderColor: cores.azul-brasil,
            fill: false
        }]
    }
});

// 4. Gráfico de Investimento % PIB
new Chart(document.getElementById('chartPIB'), {
    type: 'doughnut',
    data: {
        labels: ['Brasil', 'EUA', 'Outros'],
        datasets: [{
            data: [9.5, 17, 73.5], // EUA citado como o que mais gasta [7]
            backgroundColor: [cores.brasil, cores.comparacao1, '#ddd']
        }]
    }
});
