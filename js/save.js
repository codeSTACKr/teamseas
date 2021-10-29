// Countdown Timer

const timer_countdown = function (expires_datetime) {
  function getTimeRemaining(endtime) {
    let t = endtime - Date.parse(new Date());
    let seconds = Math.floor((t / 1000) % 60);
    let minutes = Math.floor((t / 1000 / 60) % 60);
    let hours = Math.floor((t / (1000 * 60 * 60)) % 24);
    let days = Math.floor(t / (1000 * 60 * 60 * 24));
    return {
      days: days < 10 ? "0" + days : days,
      hours: hours < 10 ? "0" + hours : hours,
      minutes: minutes < 10 ? "0" + minutes : minutes,
      seconds: seconds < 10 ? "0" + seconds : seconds,
      day_raw: days,
      hours_raw: hours,
      total: t,
    };
  }

  function initTimer(endtime) {
    let timeinterval = setInterval(function () {
      let t = getTimeRemaining(endtime);
      if (t.total <= 0) {
        clearInterval(timeinterval);
        whenTimerExpired();
        return false;
      }
      document.querySelectorAll(".timer-day").forEach(function (item) {
        item.innerHTML = t.days;
      });
      document.querySelectorAll(".timer-hour").forEach(function (item) {
        item.innerHTML = t.hours;
      });
      document.querySelectorAll(".timer-min").forEach(function (item) {
        item.innerHTML = t.minutes;
      });
      document.querySelectorAll(".timer-sec").forEach(function (item) {
        item.innerHTML = t.seconds;
      });
    }, 1000);
  }

  initTimer(expires_datetime);

  function whenTimerExpired() {
    document.querySelectorAll(".timer-container").forEach(function (item) {
      item.classList.add("d-none");
    });
  }
};

const timer_ends = Date.parse("2021-10-29T20:00:00.00-0000");
timer_countdown(timer_ends);
document.querySelectorAll(".timer-container").forEach(function (item) {
  item.classList.remove("d-none");
});

// ANIMATIONS

// WAVES

let wave1 = gsap.timeline({
  repeat: -1,
  defaults: { duration: 10, ease: "power1.inOut" },
});

wave1
  .to(".wave1__svg", {
    width: "120vw",
    x: "-10vw",
  })
  .to(
    ".wave1",
    {
      top: "8vh",
    },
    "<"
  )
  .to(".wave1__svg", {
    width: "100vw",
    x: 0,
  })
  .to(
    ".wave1",
    {
      top: "10vh",
    },
    "<"
  );

let wave2 = gsap.timeline({
  delay: 2,
  repeat: -1,
  yoyo: true,
  defaults: { duration: 15, ease: "power1.inOut" },
});

wave2.to(".wave2__svg", {
  width: "120vw",
});

let wave3 = gsap.timeline({
  delay: 3,
  repeat: -1,
  defaults: { duration: 10, ease: "power1.inOut" },
});

wave3
  .to(".wave3__svg", {
    width: "120vw",
  })
  .to(".wave3__svg", {
    width: "100vw",
  })
  .to(
    ".wave3__svg",
    {
      width: "120vw",
      x: "-20vw",
    },
    "<"
  )
  .to(".wave3__svg", {
    width: "100vw",
    x: 0,
  });

let wave4 = gsap.timeline({
  repeat: -1,
  defaults: { duration: 15, ease: "power1.inOut" },
});

wave4
  .to(".wave4__svg", {
    width: "120vw",
    x: "-20vw",
  })
  .to(".wave4__svg", {
    width: "100vw",
    x: 0,
  })
  .to(
    ".wave4__svg",
    {
      width: "120vw",
    },
    "-=50%"
  )
  .to(".wave4__svg", {
    width: "100vw",
  });

// CLOUDS

let cloud1 = gsap.timeline({
  repeat: -1,
  yoyo: true,
  defaults: { duration: 120, ease: "power1.inOut" },
});

cloud1.to(".cloud-1", {
  left: "100%",
});

let cloud2 = gsap.timeline({
  repeat: -1,
  yoyo: true,
  defaults: { duration: 180, ease: "power1.inOut" },
});

cloud2.to(".cloud-2", {
  left: "100%",
});

let cloud3 = gsap.timeline({
  repeat: -1,
  yoyo: true,
  defaults: { duration: 180, ease: "power1.inOut" },
});

cloud3.to(".cloud-3", {
  right: "100%",
});

// BIRDS

let bird1 = gsap.timeline({
  repeat: -1,
  defaults: { duration: 5, ease: "power1.inOut" },
});

bird1
  .to(".bird-1", {
    transform: "scale(1.5) rotate(45deg)",
    left: "10%",
    opacity: 1,
  })
  .to(".bird-1", {
    transform: "scale(2) rotate(0deg)",
    left: "5%",
  })
  .to(".bird-1", {
    transform: "scale(2.5) rotate(45deg)",
    left: "-15%",
  });

let bird2 = gsap.timeline({
  repeat: -1,
  defaults: { duration: 10, ease: "power1.inOut" },
});

bird2
  .to(".bird-2", {
    transform: "scale(1.5) rotate(45deg)",
    left: "20%",
    top: "50%",
  })
  .to(".bird-2", {
    transform: "scale(1) rotate(0deg)",
    left: "15%",
    top: "45%",
  })
  .to(".bird-2", {
    transform: "scale(2) rotate(-45deg)",
    left: "20%",
    top: "50%",
  })
  .to(".bird-2", {
    transform: "scale(1) rotate(0deg)",
    left: "25%",
    top: "55%",
  });

let bird3 = gsap.timeline({
  repeat: -1,
  defaults: { duration: 10, ease: "power1.inOut" },
});

bird3
  .to(".bird-3", {
    transform: "scale(0.5) rotate(45deg)",
    right: "30%",
    top: "10%",
    opacity: 1,
  })
  .to(".bird-3", {
    transform: "scale(1) rotate(0deg)",
    right: "35%",
    top: "-10%",
  })
  .to(".bird-3", {
    transform: "scale(2) rotate(45deg)",
    right: "40%",
    top: "-50%",
  });

let bird4 = gsap.timeline({
  repeat: -1,
  defaults: { duration: 10, ease: "power1.inOut" },
});

bird4
  .to(".bird-4", {
    transform: "scale(1.5) rotate(-45deg)",
    right: "20%",
    top: "80%",
  })
  .to(".bird-4", {
    transform: "scale(1) rotate(0deg)",
    right: "15%",
    top: "90%",
  })
  .to(".bird-4", {
    transform: "scale(2) rotate(-45deg)",
    right: "20%",
    top: "85%",
  })
  .to(".bird-4", {
    transform: "scale(1) rotate(0deg)",
    right: "25%",
    top: "75%",
  });

// FISH

let fish1 = gsap.timeline({
  repeat: -1,
  defaults: { duration: 2, ease: "none" },
});

fish1
  .to(".fish-1", {
    opacity: "1",
    top: "25vh",
    right: 0,
    transform: "rotate(-45deg)",
  })
  .to(".fish-1", {
    opacity: "0",
    top: "35vh",
    right: "20vw",
    transform: "rotate(-90deg)",
  })
  .to(".fish-1", {
    opacity: "0",
    top: "30vh",
    right: "40vw",
    transform: "rotate(0deg)",
  })
  .to(".fish-1", {
    opacity: "1",
    top: "20vh",
    right: "60vw",
    transform: "rotate(-45deg)",
  })
  .to(".fish-1", {
    opacity: "0",
    top: "35vh",
    right: "80vw",
    transform: "rotate(-90deg)",
  });

let fish2 = gsap.timeline({
  repeat: -1,
  repeatDelay: 3,
  defaults: { duration: 5, ease: "expo.inOut" },
});

fish2
  .to(".fish-2", {
    left: "10vw",
  })
  .to(".fish-2", {
    left: "30vw",
  })
  .to(".fish-2", {
    left: "50vw",
  })
  .to(".fish-2", {
    left: "100vw",
  });

// TURTLE

let turtle1 = gsap.timeline({
  delay: 5,
  repeat: -1,
  repeatDelay: 10,
  defaults: { duration: 3, ease: "expo.inOut" },
});

turtle1
  .to(".turtle-1", {
    opacity: 1,
  })
  .to(".turtle-1", {
    opacity: 0,
  });
