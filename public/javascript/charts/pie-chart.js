getData();
  
async function getData() {
    const response = await fetch('/api/languages');
    console.log(response);
    const data = await response.json();
    console.log('Languges Data:', data);
    length = data.length;

    const yearsObj = {}
     for(let i = 0; i < length; i++) {
        if(yearsObj[data[i].year_created]) {
            yearsObj[data[i].year_created]++;
        } else {
            yearsObj[data[i].year_created] = 1;
        };
    }
    console.log(yearsObj);

    new Chart(document.getElementById("pie-chart"), {
        type: 'pie',
        data: {
            labels: Object.keys(yearsObj),
            datasets: [
                {
                    label: "Population (millions)",
                    backgroundColor: poolColors(values.length),
                    data: Object.values(yearsObj)
                }
            ]
        },
        options: {
            legend: { display: true },
            title: {
                display: true,
                text: 'Year created'
            }
        }
    });
}