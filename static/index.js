document.addEventListener("DOMContentLoaded", () => {
  console.log("loaded");
  if (document.querySelector("#add_new")) {
    document.querySelector("#add_new").onclick = function () {
      console.log("clicked");
      document.querySelector("#topdiv3").style.display = "none";
      document.querySelector("#topdiv2").style.display = "block";
    };
  }
  if (document.querySelector("#edit")) {
    document.querySelector("#edit").onclick = function () {
      console.log("clicked");
      document.querySelector("#topdiv2").style.display = "none";
      document.querySelector("#topdiv3").style.display = "block";
    };
  }
});


// var noti = document.querySelector("h1");

// var button = document.getElementsByTagName("button");
// for (but of button) {
//   but.addEventListener("click", (e) => {
//     var add = Number(noti.getAttribute("data-count"));
//     console.log(add);
//     noti.setAttribute("data-count", add + 1);
//     noti.classList.add("zero");
//   });
// }
