let str = "";
let boxes = document.querySelectorAll(".box"),
  result = document.querySelector(".result-container");

Array.from(boxes).forEach(function (box) {
  box.addEventListener("click", function (e) {
    if (e.target.innerHTML == "AC") {
      str = "";
      result.value = str;
    } else if (e.target.innerHTML == "C") {
      str = str.substring(0, str.length - 1);
      result.value = str;
    } else if (e.target.innerHTML == "=") {
      str = eval(str);
      result.value = str;
    } else {
      str = str + e.target.innerHTML;
      result.value = str;
    }
  });
});
