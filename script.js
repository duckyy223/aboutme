document.querySelectorAll('nav a').forEach(a => {
    a.addEventListener('click', (e) => {
        e.preventDefault();
        const target = document.querySelector(a.getAttribute('href'));
        if (target) target.scrollIntoView({ behavior: 'smooth' });
    });
});

const projects = {
    'guess-the-geometry': {
        title: 'Guess The Geometry Song!',
        desc: 'You get the first second of the song from a popular Geometry Dash level, and you have to guess the level.',
        url: 'https://guessthegdsong.xo.je/'
    }
};

function openProject(id) {
    const proj = projects[id];
    if (!proj) return;
    document.getElementById('modalTitle').textContent = proj.title;
    document.getElementById('modalDesc').textContent = proj.desc;
    const btn = document.getElementById('modalBtn');
    btn.href = proj.url;
    btn.innerHTML = 'Open Project &rarr;';
    document.getElementById('modalOverlay').classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeProject() {
    document.getElementById('modalOverlay').classList.remove('active');
    document.body.style.overflow = '';
}

document.getElementById('modalOverlay').addEventListener('click', function(e) {
    if (e.target === this) closeProject();
});

document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeProject();
});
