

const toggler = document.querySelector('.navbar-toggler');
const navbar = document.querySelector('#navbarNav');
const hamburgerIcon = toggler.querySelector('.navbar-toggler-icon');
const closeIcon = toggler.querySelector('.close-icon');

toggler.addEventListener('click', function () {
  setTimeout(() => {
    if (navbar.classList.contains('show')) {
      hamburgerIcon.classList.add('d-none');
      closeIcon.classList.remove('d-none');
    } else {
      hamburgerIcon.classList.remove('d-none');
      closeIcon.classList.add('d-none');
    }
  }, 200); // Wait for collapse animation
});

// Also auto-close on nav link click
document.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', function () {
    const bsCollapse = bootstrap.Collapse.getInstance(navbar);
    if (bsCollapse) {
      bsCollapse.hide();
      hamburgerIcon.classList.remove('d-none');
      closeIcon.classList.add('d-none');
    }
  });
});

