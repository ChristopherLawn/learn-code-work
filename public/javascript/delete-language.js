async function deleteBtnHandler(event) {
    event.preventDefault();
  
    const oldName = document.querySelector('#name').placeholder.trim();
    const response = await fetch(`/api/languages/${oldName}`, {
        method: 'DELETE'
    });
    // check the response status
    if (response.ok) {
        alert(`successfully edited ${oldName}`);
        document.location.replace('/');
    } else {
        alert(response.statusText);
    }
}
  
document.querySelector('.delete-language-btn').addEventListener('click', deleteBtnHandler);