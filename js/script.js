document.addEventListener('DOMContentLoaded', () => {
  // Typing effect
  const textElement = document.querySelector('.typing-effect');
  const texts = [
    'A Junior Full Stack Developer',
    'A Junior Web Developer',
    'A Passionate Learner',
    'An Aspiring Developer'
  ];
  let index = 0;
  let charIndex = 0;

  // Function to type each character
  function type() {
    if (charIndex < texts[index].length) {
      textElement.textContent += texts[index].charAt(charIndex);
      charIndex++;
      setTimeout(type, 100);
    } else {
      setTimeout(deleteText, 1000); // Wait before starting to delete
    }
  }

  // Function to delete characters
  function deleteText() {
    if (charIndex > 0) {
      textElement.textContent = texts[index].substring(0, charIndex - 1);
      charIndex--;
      setTimeout(deleteText, 50); // Faster deleting effect
    } else {
      index = (index + 1) % texts.length; // Move to next text
      setTimeout(type, 500); // Wait before typing the next text
    }
  }

  type(); // Start typing effect

  // Modal for projects
  const modal = document.getElementById('project-modal');
  const modalTitle = document.querySelector('.modal-title');
  const modalDescription = document.querySelector('.modal-description');
  const githubLink = document.getElementById('github-link');
  const siteLink = document.getElementById('site-link');
  const closeModal = document.querySelector('.modal-close');

  // Project data array
  const projectData = [
    {
      title: 'Pokedex',
      description: 'A simple Pokédex using JavaScript and PokeAPI to retrieve Pokémon data.',
      languages: ['HTML', 'CSS', 'JavaScript'],
      github: 'https://github.com/LeonardoCigalotti/pokedex',
      website: 'https://leonardocigalotti.github.io/pokedex/'
    },
    {
      title: 'Hangman',
      description: 'A Hangman game built with Vue.js 3 using Vite for fast and smooth performance.',
      languages: ['Vue.js'],
      github: 'https://github.com/LeonardoCigalotti/hangman',
      website: 'https://leonardocigalotti.github.io/hangman/'
    }
  ];

  // Function to open modal
  function openModal(projectIndex) {
    const project = projectData[projectIndex];
    const modalLanguages = document.querySelector('.modal-languages');
    
    modalTitle.textContent = project.title;
    modalDescription.textContent = project.description;
    modalLanguages.innerHTML = `<strong>Tech Stack:</strong> ${project.languages.join(', ')}`;
    githubLink.href = project.github;

    // Show website link only if it exists
    if (project.website) {
      siteLink.href = project.website;
      siteLink.style.display = 'inline-block'; 
    } else {
      siteLink.style.display = 'none';
    }

    modal.style.display = 'flex'; // Show the modal
  }

  // Close modal when the 'X' is clicked
  closeModal.onclick = function() {
    modal.style.display = 'none';
  };

  // Close modal when clicking outside of it
  window.onclick = function(event) {
    if (event.target === modal) {
      modal.style.display = 'none';
    }
  };

  // Event listener for each project card to open modal
  const projectCards = document.querySelectorAll('.project-card');
  projectCards.forEach((card, index) => {
    card.addEventListener('click', () => openModal(index));
  });

  // Function to filter projects
  function filterProjects(filter) {
    const projectCards = document.querySelectorAll('.project-card');
  
    projectCards.forEach(card => {
      const projectTitle = card.querySelector('.project-title').textContent;
      const project = projectData.find(p => p.title === projectTitle);
      
      const matchesFilter = filter === 'all' || (filter === 'web' && project.website) || (filter === 'projects' && !project.website);
  
      if (matchesFilter) {
        card.classList.remove('hide');
      } else {
        card.classList.add('hide');
      }
    });
  }
  
  // Add click events to filter buttons
  const filterButtons = document.querySelectorAll('.filter-button');
  filterButtons.forEach(button => {
    button.addEventListener('click', () => {
      const filter = button.getAttribute('data-filter');
      filterProjects(filter); // Call filter function
    });
  });

  // Navigation links and section highlighting
  const navLinks = document.querySelectorAll('.nav-links a');
  const sections = document.querySelectorAll('div.section'); 

  function updateActiveNavLink() {
    let currentSection = '';

    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.clientHeight;

      if (window.pageYOffset >= sectionTop - sectionHeight / 3) {
        currentSection = section.getAttribute('id'); 
      }
    });

    // Add 'active' class to the nav link matching the current section
    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${currentSection}`) {
        link.classList.add('active');
      }
    });
  }

  // Update active link when scrolling
  window.addEventListener('scroll', updateActiveNavLink);

  // Smooth scroll behavior for nav links
  navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault(); 

      // Remove 'active' class from all nav links
      navLinks.forEach(navLink => navLink.classList.remove('active'));

      // Add 'active' class to the clicked link
      this.classList.add('active');

      // Smooth scroll to the target section
      const targetId = this.getAttribute('href');
      const targetSection = document.querySelector(targetId);
      targetSection.scrollIntoView({ behavior: 'smooth' });
    });
  });

  // Navbar toggle logic
  const navToggle = document.getElementById('navToggle');
  const navbar = document.getElementById('navbar');

  navToggle.addEventListener('click', () => {
    navbar.classList.toggle('hidden');
  });

  // Close navbar when clicking outside of it
  document.addEventListener('click', (e) => {
    if (!navToggle.contains(e.target) && !navbar.contains(e.target)) {
      navbar.classList.add('hidden');
    }
  });
});

// Dark/Light mode toggle function
function buttonMode() {
  const html = document.documentElement;
  const switchElement = document.getElementById('switch');

  html.classList.toggle('dark');
  switchElement.classList.toggle('dark-mode');

  const blackIcons = document.querySelectorAll('.black-icon');
  const whiteIcons = document.querySelectorAll('.white-icon');

  // Switch icon visibility based on theme
  blackIcons.forEach(icon => {
    icon.style.opacity = html.classList.contains('dark') ? '0' : '1'; 
  });

  whiteIcons.forEach(icon => {
    icon.style.opacity = html.classList.contains('dark') ? '1' : '0'; 
  });
}

// Add click event to theme switch button
document.getElementById('switch').addEventListener('click', buttonMode);
