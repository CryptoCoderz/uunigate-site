document.addEventListener("DOMContentLoaded", function() {
  "use strict"
  var style = ""
    + "<style>" + ".filter .hidden {" + "opacity: 0;" + "}" + 
    ".filter > * {" + "position: absolute;" + 
    "transition: .5s ease-in-out;"  +  "}" + "</style>";
  document.head.insertAdjacentHTML("beforeend", style);

  var list = document.querySelectorAll(".filter > *");
  var h = list[0].offsetHeight, arr = [], i = -1, l = list.length;
  var anim = "transform" in document.body.style ? "transform" : "webkitTransform";

  while (++i < l) {
    arr.push(list[i].textContent.trim());
    list[i].style[anim] = "translateY(" + i*h +"px)";
  }

    document.querySelector("input.filter").addEventListener("input", function() {
      var rgx = new RegExp(this.value, "i");
        arr.forEach(function(el, idx) {
          if (rgx.test(el)) list[idx].classList.remove("hidden");
          else list[idx].classList.add("hidden");
          var i = -1;
          var p = 0;
          while (++i < l) {
            if (list[i].className != "hidden")
            list[i].style[anim] = "translateY(" + p++ * h + "px)";
          }
      })
    })

  setTimeout(function() {
    $(".box").animate({
      'opacity': '0'
    }, 700);
  }, 2000);
  setTimeout(function() {
    $(".box").css({
      'display': 'none'
    });
  }, 3000);
})