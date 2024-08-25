//selectin side navbar

var sidenav=document.getElementById("sidenav")
var menuicon=document.getElementById("menuicon")

menuicon.addEventListener("click", function() {
  sidenav.style.right = '0';
});

closeNav.addEventListener("click", function() {
  sidenav.style.right = '-100%';
});
