document.addEventListener("DOMContentLoaded", function () {
  fetch("header.html")
    .then((response) => response.text())
    .then((data) => {
      document.getElementById("header-container").innerHTML = data;

      const drawerBtnElement = document.getElementById("drawer-btn");
      const sideDrawerElement = document.getElementById("side-drawer");

      if (drawerBtnElement && sideDrawerElement) {
        function toggleDrawer(event) {
          event.preventDefault();
          sideDrawerElement.classList.toggle("open");
        }

        drawerBtnElement.addEventListener("click", toggleDrawer);
      }

      // Now that the header is loaded, you can interact with its elements
      setActivePage();
    })
    .catch((error) => console.error("Error loading header:", error));
});

function setActivePage() {
  const currentPage = window.location.pathname;
  const navLinks = document.querySelectorAll('#header-container nav a');

  navLinks.forEach(link => {
    if (link.href.includes(currentPage)) {
      link.classList.add('active');
    }
  });
}



