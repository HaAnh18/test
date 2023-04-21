document.addEventListener('mousemove' , (e) => (
    document.querySelectorAll('.book-bg').forEach(function(item) {
      const moving_value = item.getAttribute('data-value');
      const x = e.clientX * moving_value/250;
      const y = e.clientY * moving_value /250;
  
      item.style.transform = `translate(${x}px, ${y}px)`
    })
  ))

function dropCart() {
    document.querySelector("#user-cart").classList.toggle("show");
  }

let arrow = document.querySelectorAll(".arrow");
console.log(arrow);
arrow[0].addEventListener("click", (e) => {
  console.log(e);
  let arrowParent = e.target.parentElement.parentElement;
  console.log(arrowParent);
  arrowParent.classList.toggle("showMenu");
})

let sidebar = document.querySelector(".sidebar");
let sidebarBtn = document.querySelector(".fa-bars");
sidebarBtn.addEventListener("click", () => {
  sidebar.classList.toggle("close");
})

var icon = document.querySelector("#icon");

icon.addEventListener("click", () => {
  document.body.classList.toggle("dark-theme");
  if (document.body.classList.contains("dark-theme")) {
    icon.classList = "fa-solid fa-sun";
  } else {
    icon.classList = "fa-solid fa-moon";
  }
})

  

  
