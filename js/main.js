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
