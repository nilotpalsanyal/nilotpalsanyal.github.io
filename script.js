document.addEventListener('DOMContentLoaded', function() {
  const links = document.querySelectorAll('.sidebarL a');
  const contents = document.querySelectorAll('.tabcontent');

  links.forEach(function(link) {
    link.addEventListener('click', function(e) {
      e.preventDefault();

      const target = document.querySelector(link.getAttribute('href'));

      contents.forEach(function(content) {
        content.style.display = 'none';
      });

      target.style.display = 'block';

      links.forEach(function(link) {
        link.classList.remove('active');
      });

      link.classList.add('active');
    });
  });
});


document.addEventListener('DOMContentLoaded', function() {
  const links = document.querySelectorAll('.sidebarR a');
  const contents = document.querySelectorAll('.tabcontent');

  links.forEach(function(link) {
    link.addEventListener('click', function(e) {
      e.preventDefault();

      const target = document.querySelector(link.getAttribute('href'));

      contents.forEach(function(content) {
        content.style.display = 'none';
      });

      target.style.display = 'block';

      links.forEach(function(link) {
        link.classList.remove('active');
      });

      link.classList.add('active');
    });
  });
});
