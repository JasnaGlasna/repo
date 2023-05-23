fetch('https://jsonplaceholder.typicode.com/photos')
  .then((response) => response.json())
  .then((data) => {
    const first100Entries = data.slice(0, 100);

    first100Entries.forEach((entry) => {
      const thumbnailUrl = entry.thumbnailUrl;

      const img = document.createElement('img');
      img.src = thumbnailUrl;
      document.body.appendChild(img);

      img.addEventListener('click', () => {
        img.src = entry.url;
      });
    });
  })
  .catch((error) => {
    console.error(error);
  });
