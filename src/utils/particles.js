const particlesOptions = {
  background: {
    color: {
      value: "#1d1d1d",
    },
  },
  fpsLimit: 60,
  interactivity: {
    events: {
      onClick: { enable: true, mode: "push" },
      onHover: { enable: true, mode: "repulse" },
      resize: true,
    },
    modes: {
      push: { quantity: 4 },
      repulse: { distance: 100, duration: 0.4 },
    },
  },
  particles: {
    color: { value: "#FFD700" },
    links: {
      color: "#FFD700",
      distance: 150,
      enable: true,
      opacity: 0.5,
      width: 1,
    },
    collisions: { enable: false },
    move: {
      direction: "none",
      enable: true,
      outModes: { default: "bounce" },
      speed: 2,
    },
    number: {
      value: 80,
      density: { enable: true, area: 800 },
    },
    opacity: { value: 0.5 },
    shape: { type: "circle" },
    size: { value: { min: 1, max: 5 } },
  },
  detectRetina: true,
};

export default particlesOptions;
