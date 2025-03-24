/**
 * Project data
 */
const projects = [
  {
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-3 w-3 text-white">
<rect width="14" height="20" x="5" y="2" rx="2" ry="2"></rect>
<path d="M12 18h.01"></path>
</svg>`,
    title: "Masafa",
    description: "Mobile application that links restaurants, delivery pilots, food delivery offices, and administrators, enhancing order management and tracking through a secure, API-powered system.",
    technologies: [
      "Python", "PostgreSQL", "Flutter", "RESTful API", "Docker", "Vercel",
      "alembic", "JWT", "Google Drive API", "Google Sheets API"
    ],
    details: "Masafa streamlines the food delivery process by connecting all stakeholders in a single platform. The app features real-time order tracking, secure payment processing, and an intuitive interface for both customers and delivery personnel.",
    freelance: true
  },
  {
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-3 w-3 text-white">
<circle cx="12" cy="12" r="10"></circle>
<path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path>
<path d="M12 17h.01"></path>
</svg>`,
    title: "Quizey",
    description: "Developed as a backend solution, this system transforms how educators manage exams. It enables teachers to create custom quizzes, share them via links, and track student performance all powered by a robust API.",
    technologies: [
      "Python", "MongoDB", "OAuth", "Docker", "Vercel", "RESTful API", "jWT", "OAuth2"
    ],
    details: "Quizey provides educators with powerful analytics to understand student performance patterns. The platform supports various question types, timed assessments, and automated grading to save teachers valuable time.",
    github: "https://github.com/aligomaa56/Quizey/tree/dev",
  },
  {
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-3 w-3 text-white">
<polyline points="4 17 10 11 4 5"></polyline>
<line x1="12" x2="20" y1="19" y2="19"></line>
</svg>`,
    title: "Simple Shell",
    description: "Developed in C, this simple shell replicates key Unix functionalities. It offers a minimalist command-line interface for executing commands, navigating directories, and interacting with the operating system.",
    technologies: [
      "C", "Bash", "Linux", "Memory Management", "Process Control", "File I/O",
      "System Calls", "Signal Handling", "Parsing"
    ],
    details: "This project demonstrates low-level system programming skills by implementing core shell functionalities like command execution, piping, redirection, and environment variable management from scratch.",
    github: "https://github.com/aligomaa56/simple_shell",
  }
];

document.addEventListener('DOMContentLoaded', function() {
    // Configuration constants
    const CONFIG = {
      typing: {
        speed: 50,
        eraseSpeed: 30,
        pauseDuration: 2000,
        text: "Hi, I'm Ali Gomaa a software engineer who focuses on backend development."
      },
      skills: {
        visibleCount: 6
      },
      animation: {
        threshold: 0.1
      }
    };
  
    // DOM element references
    const DOM = {
      theme: {
        toggle: document.getElementById('theme-toggle'),
        sunIcon: document.querySelector('.sun-icon'),
        moonIcon: document.querySelector('.moon-icon'),
        header: document.querySelector('header div:first-child')
      },
      typing: {
        textElement: document.querySelector('.typing-text'),
        cursor: document.querySelector('.typing-cursor')
      },
      projects: {
        container: document.getElementById('projects-container')
      },
      animation: {
        fadeElements: document.querySelectorAll('.fade-in')
      }
    };
  
    // Debugging
    console.log('DOM loaded');
    console.log('projects container:', DOM.projects.container);
  
    // Initialize theme functionality
    initializeThemeToggle();
    
    // Initialize typing animation
    initializeTypingEffect();
    
    // Initialize fade-in animations
    initializeFadeAnimations();
    
    // Initialize projects section
    console.log('Rendering projects...');
    renderProjects();
    
    // Make sure projects section is fully visible
    if (document.querySelector('#projects-container')) {
      document.querySelector('#projects-container').style.display = 'block';
      document.querySelector('#projects-container').style.opacity = '1';
    }
    
    // Setup scroll reveal for project items
    setTimeout(() => {
      setupScrollReveal();
    }, 500);
    
    // Initialize tooltips after everything is loaded
    setTimeout(() => {
      initializeTooltips();
    }, 1000);
    
    // Initialize direct tooltips early
    initializeDirectTooltips();
  
    /**
     * Theme toggle functionality
     */
    function initializeThemeToggle() {
      // Check for saved theme preference or use user's system preference
      const savedTheme = localStorage.getItem('theme');
      if (savedTheme) {
        document.body.classList.remove('dark', 'light');
        document.body.classList.add(savedTheme);
        if (savedTheme === 'light') {
          applyLightTheme();
        }
      } else if (window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches) {
        document.body.classList.remove('dark');
        document.body.classList.add('light');
        applyLightTheme();
      }
  
      DOM.theme.toggle.addEventListener('click', function() {
        const body = document.body;
        body.classList.toggle('dark');
        body.classList.toggle('light');
        
        if (body.classList.contains('dark')) {
          applyDarkTheme();
          localStorage.setItem('theme', 'dark');
        } else {
          applyLightTheme();
          localStorage.setItem('theme', 'light');
        }
        
        // Update tooltip styles when theme changes
        setTimeout(() => {
          // Update normal tooltips
          const inlineTooltips = document.querySelectorAll('.inline-tooltip');
          const iconTooltips = document.querySelectorAll('.icon-tooltip');
          
          if (body.classList.contains('dark')) {
            inlineTooltips.forEach(tooltip => {
              tooltip.style.backgroundColor = 'rgba(60, 60, 60, 0.95)';
              tooltip.style.border = '1px solid rgba(255, 255, 255, 0.25)';
            });
            
            iconTooltips.forEach(tooltip => {
              tooltip.style.backgroundColor = 'rgba(60, 60, 60, 0.95)';
              tooltip.style.border = '1px solid rgba(255, 255, 255, 0.25)';
            });
          } else {
            inlineTooltips.forEach(tooltip => {
              tooltip.style.backgroundColor = 'rgba(50, 50, 50, 0.95)';
              tooltip.style.border = '1px solid rgba(255, 255, 255, 0.15)';
            });
            
            iconTooltips.forEach(tooltip => {
              tooltip.style.backgroundColor = 'rgba(50, 50, 50, 0.95)';
              tooltip.style.border = '1px solid rgba(255, 255, 255, 0.15)';
            });
          }
          
          // Direct project icon tooltip update
          document.querySelectorAll('.project-github-icon, .project-demo-icon, .project-freelance-icon').forEach(icon => {
            const tooltip = icon.querySelector('.icon-tooltip');
            if (tooltip) {
              if (body.classList.contains('dark')) {
                tooltip.style.backgroundColor = 'rgba(60, 60, 60, 0.95)';
                tooltip.style.border = '1px solid rgba(255, 255, 255, 0.25)';
              } else {
                tooltip.style.backgroundColor = 'rgba(50, 50, 50, 0.95)';
                tooltip.style.border = '1px solid rgba(255, 255, 255, 0.15)';
              }
              
              // Force repaint
              tooltip.style.opacity = '0.01';
              setTimeout(() => {
                tooltip.style.opacity = '0';
              }, 10);
            }
          });
        }, 50);
      });
    }
  
    /**
     * Apply dark theme styles
     */
    function applyDarkTheme() {
      // Toggle icon visibility
      DOM.theme.sunIcon.classList.remove('hidden');
      DOM.theme.moonIcon.classList.add('hidden');
      
      // Update header styling
      DOM.theme.header.classList.remove('bg-black', 'bg-opacity-5');
      DOM.theme.header.classList.add('bg-white', 'bg-opacity-10');
      
      // Update project icon backgrounds
        document.querySelectorAll('.project-icon-bg').forEach(el => {
          el.classList.remove('bg-gray-800', 'bg-opacity-20', 'shadow-[0_0_10px_rgba(0,0,0,0.3)]');
          el.classList.add('bg-white', 'bg-opacity-10', 'shadow-[0_0_10px_rgba(255,255,255,0.5)]');
        });
      
      // Update button hover states
      document.querySelectorAll('a.rounded-full, button.rounded-full').forEach(el => {
        el.classList.remove('hover:bg-black', 'hover:bg-opacity-5');
        el.classList.add('hover:bg-white', 'hover:bg-opacity-10');
      });
      
      // Update body colors
      document.body.classList.remove('bg-white', 'text-gray-800');
      document.body.classList.add('bg-black', 'text-white');
    }
  
    /**
     * Apply light theme styles
     */
    function applyLightTheme() {
      // Toggle icon visibility
      DOM.theme.sunIcon.classList.add('hidden');
      DOM.theme.moonIcon.classList.remove('hidden');
      
      // Update header styling
      DOM.theme.header.classList.remove('bg-white', 'bg-opacity-10');
      DOM.theme.header.classList.add('bg-black', 'bg-opacity-5');
      
      // Update project icon backgrounds
        document.querySelectorAll('.project-icon-bg').forEach(el => {
          el.classList.remove('bg-white', 'bg-opacity-10', 'shadow-[0_0_10px_rgba(255,255,255,0.5)]');
          el.classList.add('bg-gray-800', 'bg-opacity-20', 'shadow-[0_0_10px_rgba(0,0,0,0.3)]');
        });
      
      // Update button hover states
      document.querySelectorAll('a.rounded-full, button.rounded-full').forEach(el => {
        el.classList.remove('hover:bg-white', 'hover:bg-opacity-10');
        el.classList.add('hover:bg-black', 'hover:bg-opacity-5');
      });
      
      // Update body colors
      document.body.classList.remove('bg-black', 'text-white');
      document.body.classList.add('bg-white', 'text-gray-800');
    }
  
    /**
     * Initialize the typing effect animation
     */
    function initializeTypingEffect() {
      const { text, speed, eraseSpeed, pauseDuration } = CONFIG.typing;
      let index = 0;
      let isTyping = true;
  
      function typeLoop() {
        // Typing phase
        if (isTyping) {
          if (index < text.length) {
            DOM.typing.textElement.textContent += text.charAt(index);
            index++;
            setTimeout(typeLoop, speed);
          } else {
            isTyping = false;
            setTimeout(typeLoop, pauseDuration); // Pause before erasing
          }
        } 
        // Erasing phase
        else {
          if (index > 0) {
            DOM.typing.textElement.textContent = text.substring(0, index - 1);
            index--;
            setTimeout(typeLoop, eraseSpeed);
      } else {
            isTyping = true;
            setTimeout(typeLoop, pauseDuration); // Pause before typing again
          }
        }
      }
  
      typeLoop(); // Start the typing animation loop
    }
  
    /**
     * Initialize fade-in animations for elements
     */
    function initializeFadeAnimations() {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fadeIn');
        }
      });
      }, { threshold: CONFIG.animation.threshold });
  
      DOM.animation.fadeElements.forEach(element => {
        observer.observe(element);
      });
    }
  
    /**
     * Render projects to the DOM
     */
    function renderProjects() {
      console.log('Starting to render projects');
      console.log('Projects array exists:', typeof projects !== 'undefined');
      console.log('Projects array length:', projects ? projects.length : 0);
      
      const fragment = document.createDocumentFragment(); // Use fragment for better performance
      console.log('Projects data:', projects);
    
      projects.forEach((project, index) => {
        console.log('Processing project:', index, project.title);
        const projectElement = document.createElement('div');
        projectElement.className = 'space-y-3 project-item';
        projectElement.dataset.index = index;
        
        // Calculate visible and hidden skills counts
        const visibleSkillsCount = CONFIG.skills.visibleCount;
        const hiddenSkillsCount = project.technologies.length - visibleSkillsCount;
        const showMoreText = hiddenSkillsCount > 0 ? `+${hiddenSkillsCount} more` : '';
        
        console.log(`Project ${project.title}: Creating HTML with ${visibleSkillsCount} visible skills and ${hiddenSkillsCount} hidden skills`);
        projectElement.innerHTML = createProjectHTML(project, visibleSkillsCount, showMoreText);
        fragment.appendChild(projectElement);
        console.log('Created project element for:', project.title);
      });
      
      if (DOM.projects.container) {
        DOM.projects.container.innerHTML = ''; // Clear any existing content first
        DOM.projects.container.appendChild(fragment);
        console.log('Projects appended to container:', DOM.projects.container.children.length, 'projects added');
        
        // Apply tooltip hover handlers immediately after DOM insertion
        console.log('Applying tooltip hover handlers');
        document.querySelectorAll('.project-github-icon, .project-demo-icon, .project-freelance-icon').forEach(icon => {
          const tooltip = icon.querySelector('.icon-tooltip');
          if (tooltip) {
            // Add hover event handlers
            icon.addEventListener('mouseenter', function() {
              tooltip.style.opacity = '1';
              tooltip.style.visibility = 'visible';
              tooltip.style.transform = 'translateX(-50%) translateY(0)';
            });
            
            icon.addEventListener('mouseleave', function() {
              tooltip.style.opacity = '0';
              tooltip.style.visibility = 'hidden';
              tooltip.style.transform = 'translateX(-50%) translateY(10px)';
            });
            
            // Apply correct theme
            if (document.body.classList.contains('dark')) {
              tooltip.style.backgroundColor = 'rgba(60, 60, 60, 0.95)';
              tooltip.style.border = '1px solid rgba(255, 255, 255, 0.25)';
            } else {
              tooltip.style.backgroundColor = 'rgba(50, 50, 50, 0.95)';
              tooltip.style.border = '1px solid rgba(255, 255, 255, 0.15)';
            }
          }
        });
      } else {
        console.error('Projects container not found!');
      }
  
      // Initialize event listeners after rendering
      initializeProjectInteractions();
    }
  
    /**
     * Create HTML for a project
     */
    function createProjectHTML(project, visibleSkillsCount, showMoreText) {
      // Create project icon element 
      const projectIconHTML = `
        <div class="mr-2">
          <span class="project-icon-bg flex justify-center items-center w-5 h-5 bg-white bg-opacity-10 rounded-full shadow-[0_0_10px_rgba(255,255,255,0.5)]">
            ${project.icon}
          </span>
        </div>
      `;

      // Create links for GitHub, demo and freelance badge if available
      const linksHTML = `
        <div class="flex items-center gap-0.5 ml-1">
          ${project.github ? `
            <a href="${project.github}" target="_blank" rel="noopener noreferrer" class="p-0.5 rounded-full hover:bg-white hover:bg-opacity-10 transition-colors project-icon project-github-icon" aria-label="View Source Code" style="position:relative">
              <img src="public/icons/github.svg" alt="GitHub" class="h-3.5 w-3.5" width="14" height="14">
              <div class="icon-tooltip" style="position:absolute;bottom:135%;left:50%;transform:translateX(-50%) translateY(10px);background-color:rgba(50,50,50,0.95);color:white;padding:5px 9px;border-radius:6px;font-size:11px;white-space:nowrap;opacity:0;visibility:hidden;z-index:9999;pointer-events:none;transition:all 0.2s ease;text-align:center;border:1px solid rgba(255,255,255,0.15);">View Source Code</div>
            </a>
          ` : ''}
          ${project.demo ? `
            <a href="${project.demo}" target="_blank" rel="noopener noreferrer" class="p-0.5 rounded-full hover:bg-white hover:bg-opacity-10 transition-colors project-icon project-demo-icon" aria-label="View Live Demo" style="position:relative">
              <img src="public/icons/link.svg" alt="Demo Link" class="h-3 w-3" width="12" height="12">
              <div class="icon-tooltip" style="position:absolute;bottom:135%;left:50%;transform:translateX(-50%) translateY(10px);background-color:rgba(50,50,50,0.95);color:white;padding:5px 9px;border-radius:6px;font-size:11px;white-space:nowrap;opacity:0;visibility:hidden;z-index:9999;pointer-events:none;transition:all 0.2s ease;text-align:center;border:1px solid rgba(255,255,255,0.15);">View Live Demo</div>
            </a>
          ` : ''}
          ${project.freelance ? `
            <span class="p-0.5 rounded-full hover:bg-white hover:bg-opacity-10 transition-colors project-icon project-freelance-icon" aria-label="Freelance Project" style="position:relative">
              <img src="public/icons/freelance.svg" alt="Freelance Project" class="h-3.5 w-3.5" width="14" height="14">
              <div class="icon-tooltip" style="position:absolute;bottom:135%;left:50%;transform:translateX(-50%) translateY(10px);background-color:rgba(50,50,50,0.95);color:white;padding:5px 9px;border-radius:6px;font-size:11px;white-space:nowrap;opacity:0;visibility:hidden;z-index:9999;pointer-events:none;transition:all 0.2s ease;text-align:center;border:1px solid rgba(255,255,255,0.15);">Freelance Project</div>
            </span>
          ` : ''}
        </div>
      `;

      return `
        <h3 class="text-base sm:text-lg font-medium flex items-center cursor-pointer project-title">
          ${projectIconHTML}
          <span>${project.title}</span>
          ${linksHTML}
        </h3>
        <div class="pl-2 sm:pl-4">
          <p class="text-xs sm:text-sm project-description cursor-pointer" data-tooltip="Expand for more info">
            ${project.description}
          </p>
          
          <div class="project-details mt-3 text-xs sm:text-sm">
            <p class="mb-3 text-gray-300">${project.details}</p>
          </div>
  
          <div class="flex flex-wrap gap-1.5 sm:gap-2 mt-3">
            ${project.technologies.slice(0, visibleSkillsCount).map(tech => `
              <span class="bg-white bg-opacity-10 text-white text-[10px] sm:text-xs px-2 sm:px-3 py-0.5 sm:py-1 rounded-full transition-transform duration-200 hover:scale-105">
                ${tech}
              </span>
            `).join('')}
            ${showMoreText ? `
              <button class="skills-toggle bg-white bg-opacity-15 text-white text-[10px] sm:text-xs px-2 sm:px-3 py-0.5 sm:py-1 rounded-full transition-all duration-200 hover:bg-opacity-20 hover:scale-105 font-medium">
                ${showMoreText}
              </button>
            ` : ''}
          </div>
          <div class="hidden-skills flex flex-wrap gap-1.5 sm:gap-2 mt-1.5 sm:mt-2 hidden">
            ${project.technologies.slice(visibleSkillsCount).map(tech => `
              <span class="bg-white bg-opacity-10 text-white text-[10px] sm:text-xs px-2 sm:px-3 py-0.5 sm:py-1 rounded-full transition-transform duration-200 hover:scale-105">
                ${tech}
              </span>
            `).join('')}
          </div>
        </div>
      `;
    }
  
    /**
     * Initialize event listeners for project interactions
     */
    function initializeProjectInteractions() {
      // Set up skills toggle buttons
      initializeSkillsToggle();
      
      // Set up project detail toggles
      initializeProjectDetailToggle();
      
      // Add hover behavior for inline tooltips (this is more performant than using ::after pseudo-elements)
      document.querySelectorAll('.project-icon').forEach(icon => {
        const inlineTooltip = icon.querySelector('.inline-tooltip');
        
        if (inlineTooltip) {
          // Set initial positioning
          icon.style.position = 'relative';
          
          // Show tooltip on hover
          icon.addEventListener('mouseenter', function() {
            inlineTooltip.style.opacity = '1';
            inlineTooltip.style.visibility = 'visible';
            inlineTooltip.style.transform = 'translateX(-50%) translateY(0)';
          });
          
          // Hide tooltip when not hovering
          icon.addEventListener('mouseleave', function() {
            inlineTooltip.style.opacity = '0';
            inlineTooltip.style.visibility = 'hidden';
            inlineTooltip.style.transform = 'translateX(-50%) translateY(10px)';
          });
        }
        
        // Handle direct icon tooltips
        const iconTooltip = icon.querySelector('.icon-tooltip');
        if (iconTooltip) {
          // Ensure positioning is correct
          icon.style.position = 'relative';
          
          // Handle hover behavior
          icon.addEventListener('mouseenter', function() {
            iconTooltip.style.opacity = '1';
            iconTooltip.style.visibility = 'visible';
            iconTooltip.style.transform = 'translateX(-50%) translateY(0)';
          });
          
          icon.addEventListener('mouseleave', function() {
            iconTooltip.style.opacity = '0';
            iconTooltip.style.visibility = 'hidden';
            iconTooltip.style.transform = 'translateX(-50%) translateY(10px)';
          });
        }
        
        // Fall back to CSS-based tooltips for elements without inline tooltips
        else if (icon.getAttribute('data-tooltip') && !icon.classList.contains('tooltip-container')) {
          icon.classList.add('tooltip-container');
        }
        
        // Ensure position is set for tooltip positioning
        icon.style.position = 'relative';
        
        // Add hover effect
        icon.addEventListener('mouseenter', function() {
          this.style.position = 'relative';
          this.style.zIndex = '1001';
          
          // Force recalculation
          const tooltip = this.getAttribute('data-tooltip');
          if (tooltip) {
            this.style.setProperty('--tooltip-text', '"' + tooltip + '"', 'important');
          }
        });
      });
      
      // Prevent link clicks from toggling project
      document.querySelectorAll('.project-item a').forEach(link => {
        link.addEventListener('click', function(e) {
          e.stopPropagation();
        });
      });
    }
  
    /**
     * Initialize skills toggle button functionality
     */
    function initializeSkillsToggle() {
      document.querySelectorAll('.skills-toggle').forEach(button => {
        button.addEventListener('click', function(e) {
          // Stop event propagation to prevent project toggling
          e.stopPropagation();
          e.preventDefault();
          
          const hiddenSkills = this.closest('.pl-2, .pl-4').querySelector('.hidden-skills');
          const projectIndex = this.closest('.project-item').dataset.index;
          const project = projects[projectIndex];
          const hiddenSkillsCount = project.technologies.length - CONFIG.skills.visibleCount;
          
          // Toggle with smooth transitions
          if (hiddenSkills.classList.contains('hidden')) {
            // Expand with animation
            requestAnimationFrame(() => {
              hiddenSkills.classList.remove('hidden');
              this.textContent = 'Show less';
            });
          } else {
            // Collapse with animation
            requestAnimationFrame(() => {
              hiddenSkills.classList.add('hidden');
              this.textContent = `+${hiddenSkillsCount} more`;
            });
          }
        });
      });
    }
  
    /**
     * Initialize project detail toggle functionality
     */
    function initializeProjectDetailToggle() {
      const projectTitles = document.querySelectorAll('.project-title');
      const projectDescriptions = document.querySelectorAll('.project-description');
      
      // Toggle project details when clicking on title or description
      [...projectTitles, ...projectDescriptions].forEach(element => {
        element.addEventListener('click', function(e) {
          e.stopPropagation();
          
          const projectItem = this.closest('.project-item');
          const details = projectItem.querySelector('.project-details');
          const hiddenSkills = projectItem.querySelector('.hidden-skills');
          const skillsToggle = projectItem.querySelector('.skills-toggle');
          const projectIndex = projectItem.dataset.index;
          const project = projects[projectIndex];
          const hiddenSkillsCount = project.technologies.length - CONFIG.skills.visibleCount;
          
          // Toggle project details
          const isActive = details.classList.contains('active');
          
          // If already active, close this project
          if (isActive) {
          details.classList.remove('active');
            projectItem.classList.remove('active');
            
            if (hiddenSkills && !hiddenSkills.classList.contains('hidden')) {
              hiddenSkills.classList.add('hidden');
              if (skillsToggle && hiddenSkillsCount > 0) {
                skillsToggle.textContent = `+${hiddenSkillsCount} more`;
              }
            }
            return;
          }
          
          // Close all other projects first
          document.querySelectorAll('.project-details.active').forEach(d => {
            d.classList.remove('active');
          });
          
          document.querySelectorAll('.project-item.active').forEach(item => {
            item.classList.remove('active');
            
            // Hide all other hidden skills
            const skills = item.querySelector('.hidden-skills');
            const toggle = item.querySelector('.skills-toggle');
            
            if (skills && !skills.classList.contains('hidden')) {
              skills.classList.add('hidden');
              
              if (toggle) {
                const idx = item.dataset.index;
                const proj = projects[idx];
                const count = proj.technologies.length - CONFIG.skills.visibleCount;
                if (count > 0) {
                  toggle.textContent = `+${count} more`;
                }
              }
            }
          });
          
          // Open this project
          details.classList.add('active');
          projectItem.classList.add('active');
          
          // Show hidden skills too
          if (hiddenSkills && hiddenSkillsCount > 0) {
            hiddenSkills.classList.remove('hidden');
            if (skillsToggle) {
              skillsToggle.textContent = 'Show less';
            }
        }
      });
    });
    }
  
    /**
     * Initialize direct tooltips for project icons early
     * This provides a more reliable way to make tooltips work in production
     */
    function initializeDirectTooltips() {
      // Force create all project icon tooltips on page load
      document.querySelectorAll('.project-icon').forEach(icon => {
        // Mark as initialized to avoid re-processing
        if (!icon.hasAttribute('data-tooltip-initialized')) {
          icon.setAttribute('data-tooltip-initialized', 'true');
          
          // Ensure position is set properly
          icon.style.position = 'relative';
          icon.style.zIndex = '1';
          
          // Get tooltip content
          let tooltipText;
          if (icon.classList.contains('project-github-icon')) {
            tooltipText = 'View Source Code';
          } else if (icon.classList.contains('project-demo-icon')) {
            tooltipText = 'View Live Demo';
          } else if (icon.classList.contains('project-freelance-icon')) {
            tooltipText = 'Freelance Project';
          } else {
            tooltipText = icon.getAttribute('aria-label') || icon.getAttribute('data-tooltip') || 'Info';
          }
          
          // Get or create icon tooltip
          let iconTooltip = icon.querySelector('.icon-tooltip');
          if (!iconTooltip) {
            iconTooltip = document.createElement('div');
            iconTooltip.className = 'icon-tooltip';
            iconTooltip.textContent = tooltipText;
            icon.appendChild(iconTooltip);
          }
          
          // Set correct styles based on theme
          if (document.body.classList.contains('dark')) {
            iconTooltip.style.backgroundColor = 'rgba(60, 60, 60, 0.95)';
            iconTooltip.style.border = '1px solid rgba(255, 255, 255, 0.25)';
          } else {
            iconTooltip.style.backgroundColor = 'rgba(50, 50, 50, 0.95)';
            iconTooltip.style.border = '1px solid rgba(255, 255, 255, 0.15)';
          }
          
          // Add direct event handlers
          icon.addEventListener('mouseenter', function() {
            iconTooltip.style.opacity = '1';
            iconTooltip.style.visibility = 'visible';
            iconTooltip.style.transform = 'translateX(-50%) translateY(0)';
            icon.style.zIndex = '1001';
          });
          
          icon.addEventListener('mouseleave', function() {
            iconTooltip.style.opacity = '0';
            iconTooltip.style.visibility = 'hidden';
            iconTooltip.style.transform = 'translateX(-50%) translateY(10px)';
            icon.style.zIndex = '1';
          });
        }
      });
      
      // Run again after a delay to catch elements added after initial load
      setTimeout(() => {
        document.querySelectorAll('.project-icon:not([data-tooltip-initialized])').forEach(icon => {
          icon.click(); // Force a layout recalculation with a harmless click
          icon.setAttribute('data-tooltip-initialized', 'true');
        });
      }, 1000);
    }
  
    /**
     * Set up scroll reveal animations for project items
     */
    function setupScrollReveal() {
      const projectItems = document.querySelectorAll('.project-item');
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fadeIn');
            observer.unobserve(entry.target);
          }
        });
      }, {
        threshold: CONFIG.animation.threshold,
        rootMargin: '0px 0px -50px 0px'
      });
  
      projectItems.forEach(item => {
        // Make sure project items are visible even without animation
        item.style.opacity = '1'; 
        observer.observe(item);
      });
    }
  
    // Initialize tooltips
    const tooltipElements = document.querySelectorAll('[data-tooltip]');
    
    tooltipElements.forEach(element => {
      // Refresh tooltip visibility
      element.addEventListener('mouseenter', function() {
        this.style.position = 'relative';
      });
    });
    
    // Fix freelance icon in light mode
    if (document.body.classList.contains('light')) {
      const freelanceIcons = document.querySelectorAll('img[src*="freelance"]');
      freelanceIcons.forEach(icon => {
        icon.style.filter = 'brightness(0.2)';
      });
    }
    
    // Apply theme change listener for icons
    document.getElementById('theme-toggle').addEventListener('click', function() {
      setTimeout(() => {
        const freelanceIcons = document.querySelectorAll('img[src*="freelance"]');
        if (document.body.classList.contains('light')) {
          freelanceIcons.forEach(icon => {
            icon.style.filter = 'brightness(0.2)';
          });
        } else {
          freelanceIcons.forEach(icon => {
            icon.style.filter = 'none';
          });
        }
      }, 50);
    });
    
    /**
     * Initialize tooltips with greater compatibility for production
     */
    function initializeTooltips() {
      // Find all elements with data-tooltip attribute
      const tooltipElements = document.querySelectorAll('[data-tooltip]');
      
      tooltipElements.forEach(element => {
        // Make sure position is relative for tooltip positioning
        element.style.position = 'relative';
        
        // Add tooltip-container class if it doesn't have it
        if (!element.classList.contains('tooltip-container')) {
          element.classList.add('tooltip-container');
        }
        
        // Create a stronger interaction
        element.addEventListener('mouseenter', function() {
          // Force a style recalculation to ensure tooltip appears
          this.style.position = 'relative';
          if (this.getAttribute('data-tooltip') && !this.querySelector('.force-tooltip')) {
            const tooltipText = this.getAttribute('data-tooltip');
            
            // Add inline style for critical properties
            this.style.setProperty('--tooltip-text', '"' + tooltipText + '"');
            this.style.setProperty('z-index', '1000', 'important');
          }
        });
      });
      
      // Special handling for project icons with enhanced performance
      const projectIcons = document.querySelectorAll('.project-icon');
      console.log('Found project icons:', projectIcons.length);
      
      projectIcons.forEach(icon => {
        if (icon.getAttribute('data-tooltip')) {
          // Ensure tooltip-container class is present
          if (!icon.classList.contains('tooltip-container')) {
            icon.classList.add('tooltip-container');
          }
          
          // Set essential inline styles for tooltip positioning
          icon.style.position = 'relative';
          
          // Create inline tooltip element for maximum compatibility
          const tooltipText = icon.getAttribute('data-tooltip');
          icon.setAttribute('title', tooltipText); // Fallback for browsers
          
          // Use data attributes to store tooltip position values
          icon.setAttribute('data-tooltip-active', 'false');
          
          // Add stronger hover effect with performance optimization
          icon.addEventListener('mouseenter', function() {
            // Only force recalculation if needed (throttling)
            if (this.getAttribute('data-tooltip-active') !== 'true') {
              this.style.position = 'relative';
              this.style.zIndex = '1001';
              this.setAttribute('data-tooltip-active', 'true');
              
              // Force tooltip text to be defined
              this.style.setProperty('--tooltip-text', '"' + tooltipText + '"', 'important');
            }
          });
          
          icon.addEventListener('mouseleave', function() {
            this.setAttribute('data-tooltip-active', 'false');
            this.style.zIndex = '';
          });
        }
      });
      
      console.log('Initialized tooltips for', tooltipElements.length, 'elements');
    }
  });