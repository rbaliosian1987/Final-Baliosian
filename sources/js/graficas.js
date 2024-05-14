function crearGrafica(idCaja, type = 'bar', labels = ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'], title = '# of Votes', data = [12, 19, 3, 5, 2, 3], border = 1) {
    const ctx = document.getElementById(idCaja);
    var colors = ["#01ab6786", "#0060f179", "#f39e0186", "#e813007a"];

    new Chart(ctx, {
        type: type,
        data: {
            labels: labels,
            datasets: [{
                label: title,
                data: data,
                backgroundColor: colors,
                borderWidth: border,
                fill: true,

            }]
        },
        options: {
            animations: {
                tension: {
                    duration: 1000,
                    easing: 'easeInCubic',
                    from: .1,
                    to: 0,
                    loop: true
                }
            },
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
}