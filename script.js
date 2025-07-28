const menuToggle = document.getElementById('menuToggle');
const nav = document.getElementById('nav');

menuToggle.addEventListener('click', () => {
  nav.classList.toggle('active');
  menuToggle.innerHTML = nav.classList.contains('active')
    ? '<i class="fas fa-times"></i>'
    : '<i class="fas fa-bars"></i>';
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();

    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      window.scrollTo({
        top: target.offsetTop - 80,
        behavior: 'smooth'
      });

      if (nav.classList.contains('active')) {
        nav.classList.remove('active');
        menuToggle.innerHTML = '<i class="fas fa-bars"></i>';
      }
    }
  });
});

window.addEventListener('scroll', () => {
  const header = document.querySelector('header');
  if (window.scrollY > 100) {
    header.style.padding = '0.8rem 5%';
    header.style.boxShadow = '0 5px 20px rgba(2, 17, 36, 0.8)';
  } else {
    header.style.padding = '1.2rem 5%';
    header.style.boxShadow = '0 4px 20px rgba(84, 130, 180, 0.3)';
  }
});

const toggler = document.getElementById('goibot-toggler');
const closeBtn = document.getElementById('goibot-close');
const frame = document.getElementById('goibot-frame');

toggler.addEventListener('click', () => {
  frame.hidden = false;
  frame.classList.toggle('visible');
  toggler.classList.toggle('rotated');
  toggler.innerHTML = frame.classList.contains('visible')
    ? '<i class="fas fa-times"></i>'
    : '<i class="fas fa-comments"></i>';
});

closeBtn.addEventListener('click', () => {
  frame.classList.remove('visible');
  toggler.classList.remove('rotated');
  toggler.innerHTML = '<i class="fas fa-comments"></i>';

  setTimeout(() => {
    frame.hidden = true;
  }, 250);
});

document.addEventListener('click', (e) => {
  const isFrame = frame.contains(e.target);
  const isToggler = toggler.contains(e.target);

  if (!isFrame && !isToggler && frame.classList.contains('visible')) {
    frame.classList.remove('visible');
    toggler.classList.remove('rotated');
    toggler.innerHTML = '<i class="fas fa-comments"></i>';

    setTimeout(() => {
      frame.hidden = true;
    }, 250);
  }
});

setInterval(() => {
  if (!frame.classList.contains('visible')) {
    toggler.style.animation = 'float 2s ease-in-out';
    setTimeout(() => {
      toggler.style.animation = 'float 3s ease-in-out infinite';
    }, 2000);
  }
}, 30000);


document.addEventListener('DOMContentLoaded', function() {
  const dataSkillsSection = document.querySelector('.skills h2:first-of-type');
  const dataSkillsLogos = document.querySelector('.logos:first-of-type');
  const devSkillsSection = document.querySelector('.skills h2:nth-of-type(2)');
  const devSkillsLogos = document.querySelector('.logos:nth-of-type(2)');
  
  const devButton = document.getElementById('button-dev');
  const dataButton = document.getElementById('button-data');
  
  function showDevSkills() {
    dataSkillsSection.style.display = 'none';
    dataSkillsLogos.style.display = 'none';
    devSkillsSection.style.display = 'block';
    devSkillsLogos.style.display = 'flex';
    
    devButton.classList.add('active');
    dataButton.classList.remove('active');
  }
  
  function showDataSkills() {
    devSkillsSection.style.display = 'none';
    devSkillsLogos.style.display = 'none';
    dataSkillsSection.style.display = 'block';
    dataSkillsLogos.style.display = 'flex';
    
    dataButton.classList.add('active');
    devButton.classList.remove('active');
  }
  
  devButton.addEventListener('click', showDevSkills);
  dataButton.addEventListener('click', showDataSkills);
  
  showDevSkills();
  
  const style = document.createElement('style');
  style.textContent = `
    .btn2.active {
      background-color: transparent;
      color: var(--accent);
      border-color: var(--accent);
    }
  `;
  document.head.appendChild(style);
});