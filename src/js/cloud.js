var cloud = function () {
  var obj = document.getElementById("cloud");
  var obj1 = document.getElementById("cloud1");
  var x = obj.offsetLeft;
  var x1 = obj1.offsetLeft;
  var sx = 0;
  var sx1 = 0;
  console.log(x);
  setInterval(function () {
    if (sx == 0) {
      obj.style.left = x++ + "px";
    } else if (sx == 1) {
      obj.style.left = x-- + "px";
    }
    if (x <= 10) {
      sx = 0;
    } else if (x >= 250) {
      sx = 1;
    }
    if (sx1 == 0) {
      obj1.style.left = x1++ + "px";
    } else if (sx1 == 1) {
      obj1.style.left = x1-- + "px";
    }
    if (x1 <= 100) {
      sx1 = 0;
    } else if (x1 >= 300) {
      sx1 = 1;
    }
  }, 50);
}


export {
  cloud
}