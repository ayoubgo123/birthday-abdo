(function () {
    const second = 1000,
          minute = second * 60,
          hour = minute * 60,
          day = hour * 24;
  
    let targetDate = "Dec 20, 2024 00:00:00",
        countDown = new Date(targetDate).getTime(),
        x = setInterval(function() {    
  
          let now = new Date().getTime(),
              distance = countDown - now;
  
          document.getElementById("days").innerText = Math.floor(distance / (day));
          document.getElementById("hours").innerText = Math.floor((distance % (day)) / (hour));
          document.getElementById("minutes").innerText = Math.floor((distance % (hour)) / (minute));
          document.getElementById("seconds").innerText = Math.floor((distance % (minute)) / second);
  
          if (distance < 0) {
            let countdown = document.getElementById("countdown"),
                videoBackground = document.getElementById("videoBackground"),
                playButton = document.getElementById("playButton");

            countdown.style.display = "none"; // إخفاء العدّاد
            videoBackground.style.display = "block"; // عرض الفيديو
            playButton.style.display ="block";

            clearInterval(x);
          }
        }, 1000);
        document.getElementById("playButton").addEventListener("click", function() {
            let videoBackground = document.getElementById("videoBackground");
            videoBackground.play();
            this.style.display = "none"; 
        });
    
}());