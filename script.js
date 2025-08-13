 // Navbar functionality
      const navbarToggle = document.getElementById('navbarToggle');
      const navbarMobile = document.getElementById('navbarMobile');
      
      navbarToggle.addEventListener('click', () => {
        if(!navbarMobile.hasAttribute("collapseNavbar")){
             navbarMobile.setAttribute("collapseNavbar", "true");
 navbarMobile.classList.add('active');
 navbarToggle.classList.add('active');
        }
        else{
            navbarMobile.removeAttribute("collapseNavbar");
             navbarMobile.classList.remove('active');
              navbarToggle.classList.remove('active');
              navbarMobile.classList.add('passive');
              setTimeout(() => {
               navbarMobile.classList.remove('passive'); 
              }, 300);
        }
       
      });
      
      // Close mobile menu when clicking on a link
      document.querySelectorAll('.navbar-mobile a').forEach(link => {
        link.addEventListener('click', () => {
            navbarMobile.removeAttribute("collapseNavbar");
             navbarMobile.classList.remove('active');
             navbarToggle.classList.remove('active');
              navbarMobile.classList.add('passive');
              setTimeout(() => {
               navbarMobile.classList.remove('passive'); 
              }, 300);
        });
      });
      
      // Demo navigation functionality
      let currentDemo = 0;
      const demoFeatures = [
        {
          title: "Natural Language Commands",
          description: "Just type or speak what you need. NeuraFlow understands context and executes complex workflows with simple commands.",
          command: "Create a new project called 'Mobile App Redesign' with Sarah, Mike, and Lisa"
        },
        {
          title: "AI Meeting Summary",
          description: "Automatically extract key decisions, action items, and next steps from any meeting. Never miss important details or forget follow-ups again.",
          command: "Meeting Summary: 3 decisions made, 7 action items assigned, next review on Friday"
        },
        {
          title: "Smart Task Automation",
          description: "Let AI handle routine work like status updates, follow-ups, and progress tracking. Focus on what matters most while NeuraFlow manages the details.",
          command: "Sending weekly progress report to stakeholders... Done!"
        },
        {
          title: "Predictive Insights",
          description: "Get ahead of bottlenecks with AI-powered project health monitoring. Receive proactive recommendations to keep your projects on track.",
          command: "Alert: Project may be delayed. Suggesting resource reallocation..."
        }
      ];
      
      const demoTitle = document.getElementById('demoTitle');
      const demoDescription = document.getElementById('demoDescription');
      const demoCommandText = document.querySelector('.demo-command-text');
      const demoPrev = document.getElementById('demoPrev');
      const demoNext = document.getElementById('demoNext');
      const demoIndicators = document.querySelectorAll('.demo-indicator');
      const demoFeatureCards = document.querySelectorAll('.demo-feature');
      
      function updateDemo(index) {
        currentDemo = index;
        const feature = demoFeatures[index];
        
        // Update content
        demoTitle.textContent = feature.title;
        demoDescription.textContent = feature.description;
        demoCommandText.textContent = feature.command;
        
        // Update indicators
        demoIndicators.forEach((indicator, i) => {
          indicator.classList.toggle('active', i === index);
        });
        
        // Update feature cards
        demoFeatureCards.forEach((card, i) => {
          card.classList.toggle('active', i === index);
        });
        
        // Update button states
        demoPrev.disabled = index === 0;
        demoNext.disabled = index === demoFeatures.length - 1;
      }
      
      // Arrow button functionality
      demoPrev.addEventListener('click', () => {
        if (currentDemo > 0) {
          updateDemo(currentDemo - 1);
        }
      });
      
      demoNext.addEventListener('click', () => {
        if (currentDemo < demoFeatures.length - 1) {
          updateDemo(currentDemo + 1);
        }
      });
      
      // Indicator functionality
      demoIndicators.forEach((indicator, index) => {
        indicator.addEventListener('click', () => {
          updateDemo(index);
        });
      });
      
      // Feature card functionality (existing)
      demoFeatureCards.forEach((feature, index) => {
        feature.addEventListener('click', () => {
          updateDemo(index);
        });
      });
      
      // Initialize demo
      updateDemo(0);

      // Email form handling
      const emailForm = document.getElementById('emailForm');
      const emailInput = document.getElementById('emailInput');
      
      emailForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const email = emailInput.value;
        
        // Replace form with success message
        emailForm.innerHTML = `
          <div style="text-align: center;">
            <div style="font-size: 2rem; margin-bottom: 16px;">🎉</div>
            <h3 style="color: white; margin-bottom: 8px;">Welcome to the Future!</h3>
            <p style="color: #ccc;">
              Thanks for joining! We'll notify you as soon as NeuraFlow is ready for beta testing.
            </p>
          </div>
        `;
      });

      // Smooth scrolling for anchor links
      document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
          e.preventDefault();
          const target = document.querySelector(this.getAttribute('href'));
          if (target) {
            target.scrollIntoView({
              behavior: 'smooth',
              block: 'start'
            });
          }
        });
      });

      // Add scroll-based animations
      const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
      };

      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
          }
        });
      }, observerOptions);

      // Observe elements for animations
      document.querySelectorAll('.card, .section-title, .section-subtitle').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
      });