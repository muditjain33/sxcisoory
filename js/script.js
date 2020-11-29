document.addEventListener('DOMContentLoaded', function () {
    // GSAP 
    gsap.from(".box", { duration: 2, scale: 0.5, opacity: 0, delay: 0.5, stagger: 0.2, ease: "elastic", force3D: true });
    gsap.to(".heading", { duration: 2, x: 10, ease: "bounce" });
    gsap.from(".comp", { duration: 2, x: 20, opacity: 0, scale: 0.5 });
    gsap.from(".bear", { duration: 2, x: -20, opacity: 0, scale: 0.5 });
    // variables
    let user;
    let comp;
    let userScore = 0;
    let compScore = 0;
    let no = 0;
    //Single round running 
    function round(user){
        //Computer selecting its fav number using random number
        comp =Math.floor(Math.random()*3);
        //Displaying image of object selected by user
        if (user == 0) {
        document.getElementById("").src = "img/rock.svg";
        }
        else if (user == 1) {
        document.getElementById("").src = "img/paper.svg";
        }
        else {
        document.getElementById("").src = "img/scissors.svg";
        }
        //Displaying image of object selected by computer 
        if (comp == 0) {
        document.getElementById("").src = "img/rock.svg";
        }
        else if (comp == 1) {
        document.getElementById("").src = "img/paper.svg";
        }
        else {
        document.getElementById("").src = "img/scissors.svg";
        }
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
          //Displaying marks
          document.getElementById("").innerHTML = pointuser;
          document.getElementById("").innerHTML = pointcomp;
        check();
    }
    // check marks 
    function check() {
      if (no % 5 == 0) {
  
        if (pointuser >=20) {
          
        }
        if (pointcomp >=20) {
        }
        pointcomp = 0;
        pointuser = 0;
        document.getElementById("").innerHTML = pointuser;
        document.getElementById("").innerHTML = pointcomp;
      }
    }
    //reseting the score
    document.querySelector("").addEventListener("click", function () {
        pointcomp = 0;
        pointuser = 0;
        document.getElementById("").innerHTML = pointuser;
        document.getElementById("").innerHTML = pointcomp;
    })
    // User selects an option and initiates a round
    document.querySelector(".stone").addEventListener("click", function () {
      user = 0;
      round(user);
    })
    document.querySelector(".paper").addEventListener("click", function () {
      user = 1;
      round(user);      
    })
    document.querySelector(".scissors").addEventListener("click", function () {
      user = 2;
      round(user);
    })
  })