const createFormHandler = async (event) => {
    event.preventDefault();
  
    const username = document.querySelector('#username-create').value.trim();
    const title = document.querySelector('#email-create').value.trim();
    const date = document.querySelector('#password-create').value.trim();
    const description = document.querySelector('#description-create').value.trim();
    const story = document.querySelector('#story-create').value.trim();
    const type = document.querySelector('#type-create').value.trim();
    const image = document.querySelector('#image-create').value.trim();
  
    if (username && title && date && description && story && type && image) {
      const response = await fetch('/api/create', {
        method: 'POST',
        body: JSON.stringify({ username, title, date, description, story, type, image}),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        document.location.replace('/section/' + type);
      } else {
        alert('Failed to sign up.');
      }
    }
  };


  
  
  document
    .querySelector('.create-form')
    .addEventListener('submit', createFormHandler);