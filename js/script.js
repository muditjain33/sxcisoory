document.addEventListener('DOMContentLoaded', function () {
  // GSAP 
  gsap.from(".box", { duration: 2, scale: 0.5, opacity: 0, delay: 0.5, stagger: 0.2, ease: "elastic", force3D: true });
  gsap.from(".heading", {duration: 3, x: 300, opacity: 0, scale: 0.5});
  // variables
  let user;
  let comp;
  var pointuser=0;
  var pointcomp=0;
  let no = 0;
  //Single round running 
  function round(user) {
    //Computer selecting its fav number using random number
    comp = Math.floor(Math.random() * 3);
    //Displaying image of object selected by user
    if (user == 0) {
      document.getElementById("player_img").src = "img/rock.svg";
    }
    else if (user == 1) {
      document.getElementById("player_img").src = "img/paper.svg";
    }
    else {
      document.getElementById("player_img").src = "img/scissor.svg";
    }
    // Displaying image of object selected by computer 
    if (comp == 0) {
      document.getElementById("comp_img").src = "img/rock.svg";
    }
    else if (comp == 1) {
      document.getElementById("comp_img").src = "img/paper.svg";
    }
    else {
      document.getElementById("comp_img").src = "img/scissor.svg";
    }
    gsap.to("#player_img", {duration: 2, x: 100, ease: "bounce"});
    gsap.to("#comp_img", {duration: 2, x: 100, ease: "bounce"});
    //Calculating each round marks
    if (user == 0 && comp == 2) {
      pointuser += 5;
    }
    else if (user == 0 && comp == 1) {
      pointcomp += 10;
    }
    else if (user == 1 && comp == 2) {
      pointcomp += 10;
    }
    else if (user == 1 && comp == 0) {
      pointuser += 5;
    }
    else if (user == 2 && comp == 0) {
      pointcomp += 10;
    }
    else if (user == 2 && comp == 1) {
      pointuser += 5;
    }
    
    console.log(pointcomp, pointuser)
    //Displaying marks
    document.getElementById("player_mark").innerHTML = pointuser;
    document.getElementById("comp_mark").innerHTML = pointcomp;
    setTimeout(check, 1000)
  }
  // check marks 
  function check() {
    if (pointuser >= 20) {
      document.getElementById("main").className += "hide";
      document.getElementById("win").classList.remove("hide");
      // document.getElementById("win").className += "show";
      // alert("User wins!!");
      pointcomp = 0;
      pointuser = 0;
      document.getElementById("player_mark").innerHTML = pointuser;
      document.getElementById("comp_mark").innerHTML = pointcomp;
    }
    if (pointcomp >= 20) {
      document.getElementById("main").className += "hide";
      document.getElementById("lose").classList.remove("hide");
      // alert("User loses!!");
      pointcomp = 0;
      pointuser = 0;
      document.getElementById("player_mark").innerHTML = pointuser;
      document.getElementById("comp_mark").innerHTML = pointcomp;
    }
  }
  //reseting the score
  document.querySelector(".reset").addEventListener("click", function () {
    pointcomp = 0;
    pointuser = 0;
    document.getElementById("player_mark").innerHTML = pointuser;
    document.getElementById("comp_mark").innerHTML = pointcomp;
  })
  // User selects an option and initiates a round
  document.querySelector("#rock").addEventListener("click", function () {
    user = 0;
    round(user);
  })
  document.querySelector("#paper").addEventListener("click", function () {
    user = 1;
    round(user);
  })
  document.querySelector("#scissors").addEventListener("click", function () {
    user = 2;
    round(user);
  })
  document.querySelector("#win").addEventListener("click", function () {
    document.getElementById("win").classList.remove("show");
    document.getElementById("win").className += "hide";
    document.getElementById("main").classList.remove("hide");
    document.getElementById("main").clascName += "show"
  })
  document.querySelector("#lose").addEventListener("click", function () {
    document.getElementById("lose").classList.remove("show");
    document.getElementById("lose").className += "hide";
    document.getElementById("main").classList.remove("hide");
    document.getElementById("main").clascName += "show"
  })
})