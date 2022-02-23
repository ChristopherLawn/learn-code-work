async function addLanFormHandler(event) {
    event.preventDefault();

    const name = document.querySelector('#name').value.trim();
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
    console.log("i was herreeeeeee");
  if (name && description && major_organizations && developed_by && year_created && version_number && filename_extension && licensed_under && website && language_type && icon_name) {
    const response = await fetch('languages', {
      method: 'post',
      body: JSON.stringify({
        name,
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
          alert(`successfully added ${name}`);
          document.location.replace('/');
      } else {
          alert(response.statusText);
      }
  }
}

document.querySelector('.add-language-form').addEventListener('submit', addLanFormHandler);