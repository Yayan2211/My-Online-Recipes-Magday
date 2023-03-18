function scrollToSearch() {
    const searchContainer = document.getElementById("search-container");
    searchContainer.scrollIntoView({ behavior: "smooth" });
  }

  function scrollToAbout() {
    const searchContainer = document.getElementById("about-container");
    searchContainer.scrollIntoView({ behavior: "smooth" });
  }

  const stars = document.querySelectorAll('.star');
  const rating = document.querySelector('.rating');

  rating.addEventListener('click', function(e) {
    if (e.target.matches('.star')) {
      const clickedValue = e.target.getAttribute('data-value');
      for (let i = 0; i < stars.length; i++) {
        if (i < clickedValue) {
          stars[i].classList.add('highlight');
        } else {
          stars[i].classList.remove('highlight');
        }
      }
    }
  });
  