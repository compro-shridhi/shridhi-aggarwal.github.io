window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    document.getElementById("bookcover").style.display = "none";
    document.getElementById("bookcover").style.opacity = "0";
    document.getElementById("bookname").style.fontsize = "3rem";
    document.getElementById("booktype").style.display = "none";
    document.getElementById("date").style.display = "none";
    // document.getElementById("openbtn").style.display = "none";
    document.getElementById("flex-item2").style.paddingTop = "0px";
    document.querySelector(".flex-item3").classList.add("flex-item3-shrink");
  } else {
    document.getElementById("bookcover").style.display = "block";
    document.getElementById("bookcover").style.opacity = "1";
    document.getElementById("bookname").style.fontsize = "2rem";
    document.getElementById("booktype").style.display = "block";
    document.getElementById("date").style.display = "inline-flex";
    // document.getElementById("openbtn").style.display = "inline-flex";
    document.getElementById("flex-item2").style.paddingTop = "80px";
    document.querySelector(".flex-item3").classList.remove("flex-item3-shrink");
  }
}