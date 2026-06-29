const reveals = document.querySelectorAll(
  ".overview, .about-team, .drivers, .car-section, .records, .timeline, .gallery, .facts, .related",
);

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      }
    });
  },

  {
    threshold: 0.15,
  },
);

reveals.forEach((section) => {
  section.classList.add("hidden");

  observer.observe(section);
});

const counters = document.querySelectorAll(".counter");

const speed = 120;

counters.forEach((counter) => {
  const animate = () => {
    const target = +counter.dataset.target;

    const count = +counter.innerText;

    const increment = Math.ceil(target / speed);

    if (count < target) {
      counter.innerText = count + increment;

      requestAnimationFrame(animate);
    } else {
      counter.innerText = target.toLocaleString();
    }
  };

  const counterObserver = new IntersectionObserver((entries) => {
    if (entries[0].isIntersecting) {
      animate();

      counterObserver.disconnect();
    }
  });

  counterObserver.observe(counter);
});
