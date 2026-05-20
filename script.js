// Gráfico de Médicos por 1.000 Hab.
new Chart(document.getElementById('chartMedicos'), {
    type: 'bar',
    data: {
        labels: ['Brasil', 'Cuba', 'EUA'],
        datasets: [{
            label: 'Médicos/1.000 hab.',
            data: [2.3, 8.4, 2.6],
            backgroundColor: ['#009c3b', '#ffdf00', '#002776']
        }]
    }
});

// Gráfico de Mortalidade Infantil
new Chart(document.getElementById('chartMortalidade'), {
    type: 'bar',
    data: {
        labels: ['Brasil', 'Cuba', 'EUA'],
        datasets: [{
            label: 'Mortes/1.000 nascidos',
            data: [13, 4.5, 5.4],
            backgroundColor: ['#009c3b', '#ffdf00', '#002776']
        }]
    }
});
