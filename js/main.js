/* ===============================
   LOAD TESTIMONIES (HOME PAGE)
================================ */
fetch('data/testimonies.json')
  .then(res => res.json())
  .then(data => {
    const container = document.getElementById('testimony-container');
    if (!container) return; // page-safe

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
  })
  .catch(err => console.error('Testimony load error:', err));


/* ===============================
   GALLERY FILTER
================================ */
function filterGallery(category) {
  const items = document.querySelectorAll('.gallery-item');

  items.forEach(item => {
    if (category === 'all' || item.classList.contains(category)) {
      item.style.display = 'block';
    } else {
      item.style.display = 'none';
    }
  });
}


/* ===============================
   LOAD SCHEDULE (CAMPS PAGE)
================================ */
fetch('data/schedule.json')
  .then(res => res.json())
  .then(events => {
    const container = document.getElementById('schedule-container');
    if (!container) return; // page-safe

    events.forEach(e => {
      const div = document.createElement('div');
      div.className = 'event';
      div.innerHTML = `
        <h3>${e.title}</h3>
        <p><strong>Date:</strong> ${e.date}</p>
        <p><strong>Time:</strong> ${e.time}</p>
        <p><strong>Location:</strong> ${e.location}</p>
      `;
      container.appendChild(div);
    });
  })
  .catch(err => console.error('Schedule load error:', err));
