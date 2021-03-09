const links = document.querySelectorAll('.link');
links.forEach(link => {
  link.addEventListener('click', () => {
    document.querySelector('.link.active').classList.toggle('active');
    link.classList.toggle('active');
    if(link.getAttribute('name') === 'projects'){
      document.querySelector('.projects').style.display = '';
      document.querySelector('.about').style.display = 'none';
    } else {
      document.querySelector('.projects').style.display = 'none';
      document.querySelector('.about').style.display = '';
    }
  })
})