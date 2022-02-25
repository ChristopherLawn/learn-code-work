getData();

function dynamicColors() {
    var r = Math.floor(Math.random() * 255);
    var g = Math.floor(Math.random() * 255);
    var b = Math.floor(Math.random() * 255);
    return "rgba(" + r + "," + g + "," + b + ", 0.5)";
}

function poolColors(a) {
    var pool = [];
    for (i = 0; i < a; i++) {
        pool.push(dynamicColors());
    }
    return pool;
}

async function getData() {
    const response = await fetch(
        '/api/languages');
    console.log(response);
    const data = await response.json();
    console.log('Languges Data:', data);
    length = data.length;
    console.log(length);

    labels = [];
    values = [];
    for (i = 0; i < length; i++) {
        labels.push(data[i].name);
        values.push(data[i].comments.length);
    }
    console.log(labels)
    console.log(values)

    new Chart(document.getElementById("langCmmtChart"), {
        type: 'bar',
        data: {
            labels: labels,
            datasets: [
                {
                    label: "Number of Comments",
                    backgroundColor: poolColors(values.length),
                    data: values
                }
            ]
        },
        options: {
            legend: { display: false },
            title: {
                display: true,
                text: 'Comments Per Language'
            }
        }
    });
}