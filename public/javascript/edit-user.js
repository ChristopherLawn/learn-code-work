async function editUserFormHandler(event) {
    event.preventDefault();

    const changeAdmin = document.querySelector('#username').value.trim();

    const is_admin = true;

    if (changeAdmin) {
        const response = await fetch(`/api/admin/${changeAdmin}`, {
            method: 'PUT',
            body: {is_admin}
        });
        if (response.ok) {
            alert(`successfully edited user ${changeAdmin}`);
            document.location.replace('/');
          } else {
            alert(response.statusText);
          }
    }
}

document.querySelector('.add-admin-user').addEventListener('submit', editUserFormHandler);