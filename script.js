function goToProg() {
    document.getElementById("prog").scrollIntoView({ behavior: "smooth" });
}
function goToCris() {
    document.getElementById("cris").scrollIntoView({ behavior: "smooth" });
}
document.addEventListener('scroll', function () {
    const boxes = document.querySelectorAll('.lang');
  
    boxes.forEach(function (box) {
      const boxPosition = box.getBoundingClientRect().top;
      const screenPosition = window.innerHeight;
  
      if (boxPosition < screenPosition) {
        box.classList.add('visible');
      } else {
        box.classList.remove('visible');
      }
    });
  });
  