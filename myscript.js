window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    // document.getElementById("bookcover").style.display = "none";
    // document.getElementById("bookcover").style.opacity = "0";
    // document.getElementById("openbtn").style.display = "none";
    document.getElementById("banner").classList.add("tiny");
    document.getElementById("bookcover").classList.add("tiny");
    document.getElementById("flex-item2").classList.add("tiny");
    document.getElementById("bookname").classList.add("tiny");
    document.getElementById("booktype").style.display = "none";
    document.getElementById("date").classList.add("tiny");
    document.getElementById("flex-item3").classList.add("tiny");
  } else {
    // document.getElementById("bookcover").style.display = "block";
    // document.getElementById("bookcover").style.opacity = "1";
    // document.getElementById("openbtn").style.display = "inline-flex";
    document.getElementById("banner").classList.remove("tiny");
    document.getElementById("bookcover").classList.remove("tiny");
    document.getElementById("flex-item2").classList.remove("tiny");
    document.getElementById("bookname").classList.remove("tiny");
    document.getElementById("booktype").style.display = "block";
    document.getElementById("date").classList.remove("tiny");
    document.getElementById("flex-item3").classList.remove("tiny");
  }
}