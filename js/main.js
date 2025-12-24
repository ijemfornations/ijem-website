fetch('data/testimonies.json')
  .then(res => res.json())
  .then(data => {
    const container = document.getElementById('testimony-container');
    if (!container) return;

    data.forEach(t => {
      const div = document.createElement('div');
      div.className = 'testimony';
      div.innerHTML = `
        <p>"${t.message}"</p>
        <strong>– ${t.name}</strong><br>
        <small>${t.location}</small>
      `;
      container.appendChild(div);
    });
  });
function filterGallery(category) {
  const items = document.querySelectorAll('.gallery-item');

  items.forEach(item => {
    if (category === 'all') {
      item.style.display = 'block';
    } else {
      if (item.classList.contains(category)) {
        item.style.display = 'block';
      } else {
        item.style.display = 'none';
      }
    }
  });
}
