// Gráfico 1: Médicos por Habitante (Ref: Cuba vs Brasil vs EUA)
new Chart(document.getElementById('chartMedicos'), {
    type: 'bar',
    data: {
        labels: ['Brasil', 'Cuba', 'EUA'],
        datasets: [{
            label: 'Médicos por 1.000 habitantes',
            data: [2.3, 8.4, 2.6], // Cuba é referência em densidade [6]
            backgroundColor: ['#009c3b', '#ffdf00', '#002776']
        }]
    }
});

// Gráfico 2: Mortalidade Infantil (Ref: Sensibilidade do sistema)
new Chart(document.getElementById('chartMortalidade'), {
    type: 'bar',
    data: {
        labels: ['Brasil', 'Cuba', 'EUA'],
        datasets: [{
            label: 'Mortes por 1.000 nascidos vivos',
            data: [13, 4.5, 5.4], // Cuba tem indicadores comparáveis a países ricos [6]
            backgroundColor: ['#009c3b', '#ffdf00', '#002776']
        }]
    }
});
