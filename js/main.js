/* ===============================
   FADE-IN ANIMATION
================================ */
document.addEventListener('DOMContentLoaded', () => {
  const faders = document.querySelectorAll('.fade');

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('show');
        observer.unobserve(entry.target); // run once
      }
    });
  }, { threshold: 0.2 });

  faders.forEach(el => observer.observe(el));
});

/* ===============================
   LANGUAGE TOGGLE
================================ */
function toggleLang() {
  document.querySelectorAll('.en').forEach(e => {
    e.style.display = e.style.display === 'none' ? 'block' : 'none';
  });

  document.querySelectorAll('.hi').forEach(e => {
    e.style.display = e.style.display === 'none' ? 'block' : 'none';
  });
}

/* ===============================
   MOBILE MENU TOGGLE
================================ */
function toggleMenu() {
  const nav = document.getElementById('main-nav');
  if (nav) {
    nav.classList.toggle('show');
  }
}

/* ===============================
   GLOBAL LIGHTBOX (NEW ✅)
================================ */
document.addEventListener('click', e => {
  if (e.target.tagName === 'IMG' && e.target.closest('.gallery')) {
    openLightbox(e.target.src);
  }
});
// Close lightbox on ESC key
document.addEventListener('keydown', e => {
  if (e.key === 'Escape') {
    const box = document.getElementById('lightbox');
    if (box) box.style.display = 'none';
  }
});

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
