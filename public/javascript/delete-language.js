async function deleteBtnHandler(event) {
    event.preventDefault();
  
    const oldName = document.querySelector('#name').placeholder.trim();
    const response = await fetch(`/api/delete/${oldName}`, {
        method: 'DELETE'
    });
    // check the response status
    if (response.ok) {
        alert(`successfully DELETED ${oldName}`);
        document.location.replace('/');
    } else {
        alert(response.statusText);
    }
}
  
document.querySelector('.delete-language-btn').addEventListener('click', deleteBtnHandler);