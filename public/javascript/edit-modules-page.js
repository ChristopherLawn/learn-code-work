const { redirect } = require("express/lib/response");

async function editLanFormHandler(event) {
    event.preventDefault();

    //gets name
    const name = document.querySelector('#name').value.trim();

    const response = await fetch(`/languages/edit-single-module`, {
        method: 'GET',
        body: JSON.stringify({
            name
        }),
        headers: { 'Content-Type': 'application/json' }
    });
    // check the response status
    if (response.ok) {
        alert(`success`);
        
    } else {
        alert(response.statusText);
    }
}


document.querySelector('.edit-module-button').addEventListener('submit', editLanFormHandler);