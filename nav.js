 
        
 const menuToggle = document.getElementById('menuToggle');
const navLinks = document.getElementById('navLinks');

menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    });
       
window.onload = () => {
    const image = document.getElementById("personalImage");
    const name = document.getElementById("nameReveal");

    // Wait for image to load and animate
    setTimeout(() => {
      name.classList.remove("hidden");
      name.classList.add("visible");
    }, 2000); 
  };

    // resume
window.onload = () => {
  const image = document.getElementById("personalImage");
  const name = document.getElementById("nameReveal");
  const resume = document.getElementById("resumeSection");

  // Reveal name after image
  setTimeout(() => {
    name.classList.remove("hidden");
    name.classList.add("visible");
  }, 2000);


  const observer = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          resume.classList.add("visible");
        }
      });
    },
    { threshold: 0.5 }
  );

  observer.observe(name);
};



//skills
const skills = document.getElementById("skillsSection");

const skillsObserver = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        skills.classList.add("visible");
      }
    });
  },
  { threshold: 0.5 }
);

skillsObserver.observe(skills);

//education

    window.addEventListener("load", () => {
    setTimeout(() => {
      const content = document.querySelector(".education-content");
      content.style.display = "block"; // Make it visible
      content.style.opacity = "1";     // Fade in directly
    }, 1200); // Adjust this to match the end of your typing animation
  });


