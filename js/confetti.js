const defaults = {
  spread: 580,
  ticks: 50,
  gravity: 0,
  decay: .94,
  startVelocity: 60,
  shapes: ["star","circle","heart"],
  colors: [
      "#FFE400",
      "#FFBD00",
      "#E89400",
      "#FFCA6C",
      "#FDFFB8"
    ]
};

function shoot() {
  confetti({
    ...defaults,
    particleCount: 80,
    scalar: 1.2,
    shapes: ["star","circle","heart"],
  });
  confetti({
    ...defaults,
    particleCount: 40,
    scalar: .75,
    shapes: ["star","circle","heart"],
  });
}

function dropStars() {
    confetti({
      ...defaults,
      particleCount: 4, 
      scalar: 1.2,
      origin: { x: Math.random(), y: -0.1 } 
    });

    confetti({
      ...defaults,
      particleCount: 2,
      scalar: 0.75,
      origin: { x: Math.random(), y: -0.1 } 
    });
  }
