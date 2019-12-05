//video buttons
aboutVid = document.querySelector('.demoReel'),
play = document.querySelector(".play"),
stop = document.querySelector(".stop"),
rewind = document.querySelector(".rewind");


 //video buttons
 function playVid(){
    aboutVid.play();
      }

      function stopVid(){
    aboutVid.pause();
      }

      function rewindVid(){
    aboutVid.load();
      }


//video execute
play.addEventListener("click", playVid);
stop.addEventListener("click", stopVid);
rewind.addEventListener("click", rewindVid);