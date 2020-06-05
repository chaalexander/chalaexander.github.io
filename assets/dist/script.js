document.addEventListener("DOMContentLoaded", function () {
  var a = Array.prototype.slice.call(
    document.querySelectorAll(".navbar-burger"),
    0
  );
  0 < a.length &&
    a.forEach(function (a) {
      a.addEventListener("click", function () {
        var b = a.dataset.target,
          c = document.getElementById(b);
        a.classList.toggle("is-active"), c.classList.toggle("is-active");
      });
    });
}),
  $(document).on("click", 'a[href^="#"]', function (a) {
    a.preventDefault(),
      $("html, body").animate(
        { scrollTop: $($.attr(this, "href")).offset().top },
        500
      );
  });
function scrollFunction() {
  document.getElementById("toTop").style.display =
    20 < document.body.scrollTop || 20 < document.documentElement.scrollTop
      ? "block"
      : "none";
}
$(document).ready(function (a) {
  a(".preloader-wrapper").fadeOut(), a("body").removeClass("preloader-site");
}),
  $(window).load(function () {
    var a = $("body");
    a.addClass("preloader-site");
  });
