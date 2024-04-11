const createFormHandler = async (event) => {
  event.preventDefault();

  const username = document.querySelector('#username-create').value.trim();
  const title = document.querySelector('#title-create').value.trim();
  const description = document.querySelector('#description-create').value.trim();
  const type = document.querySelector('#type-create').value.trim();
  const location = document.querySelector('#location-create').value.trim();
  const image = document.querySelector('#image-create');

  if (username && title && description && location && type && image) {
    const response = await fetch('/api/post', {
      method: 'POST',
      body: JSON.stringify({ username, title, description, type}),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      document.location.replace('/section/' + type);
    } else {
      alert('Failed to post listing');
    }
  }
};

// Don't forget the enctype="multipart/form-data" in your form.

// <form action="/profile" method="post" enctype="multipart/form-data">
//   <input type="file" name="avatar" />
// </form>



document
  .querySelector('.create-form')
  .addEventListener('submit', createFormHandler);

  // testing stuff no idea if works lol
  // const createFormHandler = async (event) => {
  //   event.preventDefault();
  
  //   const username = document.querySelector('#username-create').value.trim();
  //   const title = document.querySelector('#email-create').value.trim();
  //   const date = document.querySelector('#password-create').value.trim();
  //   const description = document.querySelector('#description-create').value.trim();
  //   const story = document.querySelector('#story-create').value.trim();
  //   const type = document.querySelector('#type-create').value.trim();
  //   const image = document.querySelector('#image-create').files[0]; // Get the selected file
  
  //   if (username && title && date && description && story && type && image) {
  //     const formData = new FormData(); // Create a new FormData object
  //     formData.append('username', username);
  //     formData.append('title', title);
  //     formData.append('date', date);
  //     formData.append('description', description);
  //     formData.append('story', story);
  //     formData.append('type', type);
  //     formData.append('image', image);
  
  //     const response = await fetch('/api/post', {
  //       method: 'POST',
  //       body: formData, // Use the FormData object as the request body
  //     });
  
  //     if (response.ok) {
  //       document.location.replace('/section/' + type);
  //     } else {
  //       alert('Failed to post listing');
  //     }
  //   }
  // };
 