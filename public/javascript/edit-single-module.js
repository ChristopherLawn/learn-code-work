async function addLanFormHandler(event) {
    event.preventDefault();

    const oldName = document.querySelector('#name').placeholder.trim();

    const newName = document.querySelector('#name').value.trim();
    const description = document.querySelector('#description').value.trim();
    const major_organizations = document.querySelector('#organizations').value.trim();
    const developed_by = document.querySelector('#developer').value.trim();
    const year_created = document.querySelector('#year-created').value.trim();
    const version_number = document.querySelector('#version').value.trim();
    const filename_extension = document.querySelector('#ext').value.trim();
    const licensed_under = document.querySelector('#license-owner').value.trim();
    const website = document.querySelector('#website').value.trim();
    const language_type = document.querySelector('#language-type').value.trim();
    const icon_name = document.querySelector('#icon-name').value.trim();
    console.log(oldName);
    console.log(newName);
    console.log('heeeeeereeeeeeffdgddddddddee');
  if (newName && description && major_organizations && developed_by && year_created && version_number && filename_extension && licensed_under && website && language_type && icon_name) {
    const response = await fetch(`/languages/${oldName}`, {
      method: 'PUT',
      body: JSON.stringify({
        newName,
        description,
        major_organizations,
        developed_by,
        year_created,
        version_number,
        filename_extension,
        licensed_under,
        website,
        language_type,
        icon_name
      }),
      headers: { 'Content-Type': 'application/json' }
    });
      // check the response status
      if (response.ok) {
          alert(`successfully edited ${oldName}`);
          document.location.replace('/');
      } else {
          alert(response.statusText);
      }
  }
}

document.querySelector('.edit-language-form').addEventListener('submit', addLanFormHandler);