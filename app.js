const cursor = document.querySelector('.cursor');
const allLinks = document.querySelectorAll('.item-nav');

document.addEventListener('mousemove', (e) => {
  cursor.style.top = `${e.pageY - 30}px`;
  cursor.style.left = `${e.pageX - 30}px`;
});

allLinks.forEach((link) => {
  const location = link.getAttribute('data-loc');

  link.addEventListener('mouseenter', () => {
    cursor.classList.add('hovered');
    cursor.style.backgroundImage = `url(ressources/${location}.jpg)`;
  });

  link.addEventListener('mouseout', () => {
    cursor.classList.remove('hovered');
    cursor.style.backgroundImage = `none`;
  });
});
