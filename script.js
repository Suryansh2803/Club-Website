// Team data for each department
const teamData = {
    core: {
        title: "Core Team",
        description: "Executive leadership and faculty coordination.",
        members: [
            { name: "Riya Batra", role: "President", description: "", skills: [], social: {}, avatar: "fas fa-crown" },
            { name: "Kunal Rohilla", role: "Vice President", description: "", skills: [], social: {}, avatar: "fas fa-user-tie" },
            { name: "Palak Bansal", role: "Student Coordinator", description: "", skills: [], social: {}, avatar: "fas fa-user-check" },
            { name: "Jahan Aara", role: "Secretary", description: "", skills: [], social: {}, avatar: "fas fa-key" }
        ]
    },
    technical: {
        title: "Tech Team",
        description: "Developers and engineers driving technology initiatives.",
        members: [
            { name: "Shiven", role: "Lead", description: "", skills: [], social: {}, avatar: "fas fa-code" },
            { name: "Djvyam Srivastava", role: "Co-lead", description: "", skills: [], social: {}, avatar: "fas fa-code" },
            { name: "Satyam Varshney", role: "Member", description: "", skills: [], social: {}, avatar: "fas fa-code" },
            { name: "Manya Gupta", role: "Member", description: "", skills: [], social: {}, avatar: "fas fa-code" },
            { name: "Tanishk Rastogi", role: "Member", description: "", skills: [], social: {}, avatar: "fas fa-code" },
            { name: "Suryansh Yadav", role: "Member", description: "", skills: [], social: {}, avatar: "fas fa-code" },
            { name: "Himanshu Singh", role: "Member", description: "", skills: [], social: {}, avatar: "fas fa-code" },
            { name: "Arsh Murtaza", role: "Member", description: "", skills: [], social: {}, avatar: "fas fa-code" },
            { name: "Sameer Rathore", role: "Member", description: "", skills: [], social: {}, avatar: "fas fa-code" },
            { name: "Aman Singh", role: "Member", description: "", skills: [], social: {}, avatar: "fas fa-code" },
            { name: "Nikunj Goyal", role: "Member", description: "", skills: [], social: {}, avatar: "fas fa-code" }
        ]
    },
    management: {
        title: "Management Team",
        description: "Operations, planning, and coordination.",
        members: [
            { name: "Aditya Mani Tripathi", role: "Lead", description: "", skills: [], social: {}, avatar: "fas fa-users-cog" },
            { name: "Avnish Awasthi", role: "Co-lead", description: "", skills: [], social: {}, avatar: "fas fa-users-cog" },
            { name: "Upendra", role: "Member", description: "", skills: [], social: {}, avatar: "fas fa-users-cog" },
            { name: "Siddharth Singh", role: "Member", description: "", skills: [], social: {}, avatar: "fas fa-users-cog" },
            { name: "Palak Varshney", role: "Member", description: "", skills: [], social: {}, avatar: "fas fa-users-cog" },
            { name: "Divyansh Srivastav", role: "Member", description: "", skills: [], social: {}, avatar: "fas fa-users-cog" },
            { name: "Jai thawal", role: "Member", description: "", skills: [], social: {}, avatar: "fas fa-users-cog" },
            { name: "Unayan Varshney", role: "Member", description: "", skills: [], social: {}, avatar: "fas fa-users-cog" },
            { name: "Anushka Gupta", role: "Member", description: "", skills: [], social: {}, avatar: "fas fa-users-cog" },
            { name: "Kinjal Rajput", role: "Member", description: "", skills: [], social: {}, avatar: "fas fa-users-cog" },
            { name: "Aayush Chauhan", role: "Member", description: "", skills: [], social: {}, avatar: "fas fa-users-cog" }
        ]
    },
    social: {
        title: "Social Media Team",
        description: "Digital presence and community engagement.",
        members: [
            { name: "Rajeev Kushwaha", role: "Lead", description: "", skills: [], social: {}, avatar: "fas fa-share-alt" },
            { name: "Kriti Jadil", role: "Co-lead", description: "", skills: [], social: {}, avatar: "fas fa-share-alt" },
            { name: "Ananya Singhal", role: "Member", description: "", skills: [], social: {}, avatar: "fas fa-share-alt" },
            { name: "Anishkid", role: "Member", description: "", skills: [], social: {}, avatar: "fas fa-share-alt" },
            { name: "Shruti Kesrawani", role: "Member", description: "", skills: [], social: {}, avatar: "fas fa-share-alt" },
            { name: "Shreya Trivedi", role: "Member", description: "", skills: [], social: {}, avatar: "fas fa-share-alt" },
            { name: "Vasundhara Singh", role: "Member", description: "", skills: [], social: {}, avatar: "fas fa-share-alt" }
        ]
    },
    pr: {
        title: "PR Team",
        description: "Public relations and outreach.",
        members: [
            { name: "Hardik Varshney", role: "Lead", description: "", skills: [], social: {}, avatar: "fas fa-bullhorn" },
            { name: "Swasti Jaiswal", role: "Co-lead", description: "", skills: [], social: {}, avatar: "fas fa-bullhorn" },
            { name: "Yash Sharma", role: "Member", description: "", skills: [], social: {}, avatar: "fas fa-bullhorn" },
            { name: "Akshita Dhingra", role: "Member", description: "", skills: [], social: {}, avatar: "fas fa-bullhorn" },
            { name: "Nishit Tiwari", role: "Member", description: "", skills: [], social: {}, avatar: "fas fa-bullhorn" },
            { name: "Sakshi Sinha", role: "Member", description: "", skills: [], social: {}, avatar: "fas fa-bullhorn" },
            { name: "Akshay Bhati", role: "Member", description: "", skills: [], social: {}, avatar: "fas fa-bullhorn" },
            { name: "Namrata Singh", role: "Member", description: "", skills: [], social: {}, avatar: "fas fa-bullhorn" },
            { name: "Ishita Singh", role: "Member", description: "", skills: [], social: {}, avatar: "fas fa-bullhorn" },
            { name: "Archita Saxena", role: "Member", description: "", skills: [], social: {}, avatar: "fas fa-bullhorn" },
            { name: "Aditya Tiwari", role: "Member", description: "", skills: [], social: {}, avatar: "fas fa-bullhorn" }
        ]
    },
    creative: {
        title: "Creative Team",
        description: "Design, visuals, and creative concepts.",
        members: [
            { name: "Tarun Kaushik", role: "Lead", description: "", skills: [], social: {}, avatar: "fas fa-lightbulb" },
            { name: "Kartik Singhal", role: "Co-lead", description: "", skills: [], social: {}, avatar: "fas fa-lightbulb" },
            { name: "Siddharth Jha", role: "Member", description: "", skills: [], social: {}, avatar: "fas fa-lightbulb" },
            { name: "Sachin Yadav", role: "Member", description: "", skills: [], social: {}, avatar: "fas fa-lightbulb" },
            { name: "Avishk Singh Shishodia", role: "Member", description: "", skills: [], social: {}, avatar: "fas fa-lightbulb" },
            { name: "Sumit Yadav", role: "Member", description: "", skills: [], social: {}, avatar: "fas fa-lightbulb" }
        ]
    },
    dam: {
        title: "DAM Team",
        description: "Data acquisition and management.",
        members: [
            { name: "Lavanya Garg", role: "Lead", description: "", skills: [], social: {}, avatar: "fas fa-database" },
            { name: "Mayank Chaurasia", role: "Co-lead", description: "", skills: [], social: {}, avatar: "fas fa-database" },
            { name: "Rishi om Patidar", role: "Member", description: "", skills: [], social: {}, avatar: "fas fa-database" },
            { name: "Bhumi", role: "Member", description: "", skills: [], social: {}, avatar: "fas fa-database" },
            { name: "Manjari Singh", role: "Member", description: "", skills: [], social: {}, avatar: "fas fa-database" },
            { name: "Aditya Vaid", role: "Member", description: "", skills: [], social: {}, avatar: "fas fa-database" },
            { name: "Anuradha Sharma", role: "Member", description: "", skills: [], social: {}, avatar: "fas fa-database" },
            { name: "Alok Mishra", role: "Member", description: "", skills: [], social: {}, avatar: "fas fa-database" },
            { name: "Rishi Kumar", role: "Member", description: "", skills: [], social: {}, avatar: "fas fa-database" }
        ]
    },
    editorial: {
        title: "Editorial Team",
        description: "Content writing and editorial design.",
        members: [
            { name: "Kritika", role: "Lead", description: "", skills: [], social: {}, avatar: "fas fa-edit" },
            { name: "Avichal Pandey", role: "Co-lead", description: "", skills: [], social: {}, avatar: "fas fa-edit" },
            { name: "Daksh Bhasin", role: "Member", description: "", skills: [], social: {}, avatar: "fas fa-edit" },
            { name: "Vamika Jaiswal", role: "Member", description: "", skills: [], social: {}, avatar: "fas fa-edit" },
            { name: "Bhumik a Joshi", role: "Member", description: "", skills: [], social: {}, avatar: "fas fa-edit" },
            { name: "Ashi Shrivastava", role: "Member", description: "", skills: [], social: {}, avatar: "fas fa-edit" },
            { name: "Anvesha Pandey", role: "Member", description: "", skills: [], social: {}, avatar: "fas fa-edit" }
        ]
    }
};

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    initializeNavigation();
    initializeFlipCards();
    initializeTeamSlider();
    initializeNewsletter();
    initializeAnimations();
    initializeSparkleEffect();
    hydrateUpcomingFromEventsPage();
    initializeQuickNav();
    initializePageToggle();
});

// Navigation functionality
function initializeNavigation() {
    const menuToggle = document.querySelector('.menu-toggle');
    const nav = document.querySelector('nav');
    const body = document.body;

    if (menuToggle && nav) {
        // Create backdrop element if it doesn't exist
        let backdrop = document.querySelector('.nav-backdrop');
        if (!backdrop) {
            backdrop = document.createElement('div');
            backdrop.className = 'nav-backdrop';
            document.body.appendChild(backdrop);
        }

        // Mobile menu toggle
        menuToggle.addEventListener('click', function() {
            const isActive = nav.classList.contains('active');
            
            if (isActive) {
                closeMobileMenu();
            } else {
                openMobileMenu();
            }
        });

        // Close menu when clicking on backdrop
        backdrop.addEventListener('click', closeMobileMenu);

        // Close menu when clicking on a link
        document.querySelectorAll('nav a').forEach(link => {
            link.addEventListener('click', closeMobileMenu);
        });

        // Close menu on escape key
        document.addEventListener('keydown', function(e) {
            if (e.key === 'Escape' && nav.classList.contains('active')) {
                closeMobileMenu();
            }
        });

        // Close menu on window resize to desktop size
        window.addEventListener('resize', function() {
            if (window.innerWidth > 768 && nav.classList.contains('active')) {
                closeMobileMenu();
            }
        });

        function openMobileMenu() {
            nav.classList.add('active');
            menuToggle.classList.add('active');
            backdrop.classList.add('active');
            body.style.overflow = 'hidden';
        }

        function closeMobileMenu() {
            nav.classList.remove('active');
            menuToggle.classList.remove('active');
            backdrop.classList.remove('active');
            body.style.overflow = 'auto';
        }
    }
}

// Flip cards functionality
function initializeFlipCards() {
    const flipCard = document.querySelector('.flip-card');
    const prevBtn = document.getElementById('prev-btn');
    const nextBtn = document.getElementById('next-btn');
    const dots = document.querySelectorAll('.indicator-dot');
    
    if (!flipCard || !prevBtn || !nextBtn || !dots.length) return;
    
    let currentView = 'mission';
    
    // Function to update the card view
    function updateView(view) {
        if (view === 'mission') {
            flipCard.classList.remove('flipped');
            dots[0].classList.add('active');
            dots[1].classList.remove('active');
            currentView = 'mission';
        } else {
            flipCard.classList.add('flipped');
            dots[0].classList.remove('active');
            dots[1].classList.add('active');
            currentView = 'activities';
        }
    }
    
    // Event listeners for buttons
    prevBtn.addEventListener('click', function() {
        updateView('mission');
    });
    
    nextBtn.addEventListener('click', function() {
        updateView('activities');
    });
    
    // Event listeners for indicator dots
    dots.forEach(dot => {
        dot.addEventListener('click', function() {
            updateView(this.getAttribute('data-page'));
        });
    });
}

// Team slider functionality
function initializeTeamSlider() {
    const teamSlider = document.getElementById('teamSlider');
    const teamModal = document.getElementById('teamModal');
    const modalBackdrop = document.getElementById('modalBackdrop');
    const closeBtn = document.getElementById('closeBtn');
    const teamDetailBook = document.getElementById('teamDetailBook');

    if (!teamSlider || !teamModal) return;

    // Start animation immediately to avoid initial lag and pause on hover
    if (teamSlider) {
        teamSlider.style.animationDelay = '0s';
        // Force a reflow to ensure the animation starts without lag
        void teamSlider.offsetWidth;
    }

    // Pause rotation on hover
    teamSlider.addEventListener('mouseenter', function() {
        this.style.animationPlayState = 'paused';
    });

    teamSlider.addEventListener('mouseleave', function() {
        this.style.animationPlayState = 'running';
    });

    // Team card click handlers
    document.querySelectorAll('.team-card').forEach(card => {
        card.addEventListener('click', function() {
            const teamType = this.getAttribute('data-team');
            openTeamModal(teamType);
        });
    });

    // Close modal handlers
    if (closeBtn) {
        closeBtn.addEventListener('click', closeTeamModal);
    }
    if (modalBackdrop) {
        modalBackdrop.addEventListener('click', closeTeamModal);
    }

    // Escape key to close modal
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && teamModal.classList.contains('active')) {
            closeTeamModal();
        }
    });

    function openTeamModal(teamType) {
        const team = teamData[teamType];
        if (!team || !teamDetailBook) return;

        // Create book content
        const leads = team.members.filter(m => /lead/i.test(m.role));
        const others = team.members.filter(m => !/lead/i.test(m.role));

        const bookContent = `
            <div class="book-spine"></div>
            <div class="book-page left">
                <h2 class="team-section-title">${team.title}</h2>
                <p style="color: #d0d0d0; margin-bottom: 2rem; text-align: center;">${team.description}</p>
                ${leads.map(member => createMemberCard(member)).join('')}
            </div>
            <div class="book-page right">
                ${others.map(member => createMemberCard(member)).join('')}
            </div>
        `;

        teamDetailBook.innerHTML = bookContent;
        teamModal.classList.add('active');
        document.body.style.overflow = 'hidden';

        // Add animation to new member cards
        setTimeout(() => {
            const newMembers = teamDetailBook.querySelectorAll('.team-member');
            newMembers.forEach((member, index) => {
                member.style.opacity = '0';
                member.style.transform = 'translateY(30px)';
                setTimeout(() => {
                    member.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
                    member.style.opacity = '1';
                    member.style.transform = 'translateY(0)';
                }, index * 100);
            });
        }, 100);
    }

    function closeTeamModal() {
        teamModal.classList.remove('active');
        document.body.style.overflow = 'auto';
    }

    function createMemberCard(member) {
        const socialLinks = Object.entries(member.social).map(([platform, url]) => 
            `<a href="${url}" class="social-link"><i class="fab fa-${platform}"></i></a>`
        ).join('');

        return `
            <div class="team-member ${member.role.toLowerCase().includes('lead') ? 'lead' : 'member'}">
                <div class="member-avatar">
                    <i class="${member.avatar}"></i>
                </div>
                <h3 class="member-name">${member.name}</h3>
                <p class="member-role">${member.role}</p>
                <p class="member-description">${member.description}</p>
                <div class="member-skills">
                    ${member.skills.map(skill => `<span class="skill-tag">${skill}</span>`).join('')}
                </div>
                <div class="member-social">
                    ${socialLinks}
                </div>
            </div>
        `;
    }
}

// Newsletter functionality
function initializeNewsletter() {
    const newsletterForm = document.querySelector('.newsletter-form');
    if (!newsletterForm) return;

    newsletterForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const email = document.querySelector('.newsletter-input').value;
        if (email) {
            alert('Thank you for subscribing to our newsletter!');
            document.querySelector('.newsletter-input').value = '';
        }
    });
}

// Animation functionality
function initializeAnimations() {
    // Simple animation for cards when they come into view
    const cards = document.querySelectorAll('.content-card, .event-card');
    const aboutPoints = document.querySelectorAll('.about-point');
    
    if (cards.length === 0 && aboutPoints.length === 0) return;

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = 1;
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, { threshold: 0.1 });
    
    cards.forEach(card => {
        card.style.opacity = 0;
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        observer.observe(card);
    });

    // Staggered reveal for about points (Who we are, What we do, etc.)
    if (aboutPoints.length) {
        const aboutObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const items = Array.from(entry.target.querySelectorAll('.about-point'));
                    items.forEach((item, index) => {
                        // Ensure initial state before animating
                        item.style.opacity = '0';
                        item.style.transform = 'translateY(20px)';
                        item.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
                        setTimeout(() => {
                            item.style.opacity = '1';
                            item.style.transform = 'translateY(0)';
                        }, index * 120);
                    });
                    aboutObserver.unobserve(entry.target);
                }
            });
        }, { threshold: 0.15 });

        // Observe each grid container so we can stagger children on first reveal
        document.querySelectorAll('.about-grid').forEach(grid => {
            // Prepare children initial state
            grid.querySelectorAll('.about-point').forEach(item => {
                item.style.opacity = '0';
                item.style.transform = 'translateY(20px)';
            });
            aboutObserver.observe(grid);
        });
    }
}

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

// Add loading animation
window.addEventListener('load', function() {
    document.body.classList.add('loaded');
});

// Handle window resize for responsive adjustments
let resizeTimeout;
window.addEventListener('resize', function() {
    clearTimeout(resizeTimeout);
    resizeTimeout = setTimeout(function() {
        // Recalculate any size-dependent elements if needed
        const teamSlider = document.getElementById('teamSlider');
        if (teamSlider) {
            // Force reflow to ensure proper rendering
            teamSlider.style.animationPlayState = 'paused';
            setTimeout(() => {
                teamSlider.style.animationPlayState = 'running';
            }, 10);
        }
    }, 250);
});
// Quick navigation floating button for mobile
function initializeQuickNav() {
    const btn = document.getElementById('quickNavBtn');
    const menu = document.getElementById('quickNavMenu');
    if (!btn || !menu) return;

    const toggle = () => {
        const isOpen = menu.style.display === 'block';
        menu.style.display = isOpen ? 'none' : 'block';
    };
    btn.addEventListener('click', toggle);

    // Close when clicking outside
    document.addEventListener('click', (e) => {
        if (!menu.contains(e.target) && e.target !== btn) {
            menu.style.display = 'none';
        }
    });
}

// Floating Page Toggle (cycles through pages)
function initializePageToggle() {
    const btn = document.getElementById('pageToggleBtn');
    if (!btn) return;
    const pages = [
        'index.html',
        'about.html',
        'team.html',
        'event.html',
        'contactUs.html'
    ];
    // Normalize current location to one of the pages (basename)
    const path = window.location.pathname.replace(/\\/g, '/');
    const current = pages.findIndex(p => path.endsWith('/' + p) || path.endsWith(p));
    btn.addEventListener('click', () => {
        const next = (current >= 0 ? current + 1 : 1) % pages.length;
        window.location.href = pages[next];
    });
}

// Populate homepage footer upcoming events by scraping event cards on event.html
function hydrateUpcomingFromEventsPage() {
    const upList = document.getElementById('footer-upcoming-list');
    const onList = document.getElementById('footer-ongoing-list');
    if (!upList || !onList) return;

    fetch('event.html')
        .then(r => r.text())
        .then(html => {
            const parser = new DOMParser();
            const doc = parser.parseFromString(html, 'text/html');

            // Collect Upcoming and Ongoing event cards
            const upcoming = doc.querySelector('#upcoming-events');
            const ongoing = doc.querySelector('#ongoing-events');

            const itemsUpcoming = [];
            const itemsOngoing = [];
            function collect(container, bag) {
                if (!container) return;
                container.querySelectorAll('.event-card').forEach(card => {
                    const title = card.querySelector('.event-title')?.textContent?.trim();
                    const date = card.querySelector('.event-date')?.textContent?.trim();
                    if (title) bag.push(`${title}${date ? ' - ' + date : ''}`);
                });
            }
            collect(upcoming, itemsUpcoming);
            collect(ongoing, itemsOngoing);

            // Render lists
            function render(target, arr) {
                target.innerHTML = '';
                const toShow = arr.slice(0, 6);
                if (toShow.length === 0) {
                    target.innerHTML = '<li><a href="event.html">See all events</a></li>';
                    return;
                }
                toShow.forEach(text => {
                    const li = document.createElement('li');
                    li.innerHTML = `<a href="event.html">${text}</a>`;
                    target.appendChild(li);
                });
            }

            render(upList, itemsUpcoming);
            render(onList, itemsOngoing);
        })
        .catch(() => {
            if (upList) upList.innerHTML = '<li><a href="event.html">See all events</a></li>';
            if (onList) onList.innerHTML = '<li><a href="event.html">See all events</a></li>';
        });
}
// Tab functionality
        const tabBtns = document.querySelectorAll('.tab-btn');
        const upcomingEvents = document.getElementById('upcoming-events');
        const ongoingEvents = document.getElementById('ongoing-events');
        const pastEvents = document.getElementById('past-events');
        
        tabBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                // Remove active class from all buttons
                tabBtns.forEach(b => b.classList.remove('active'));
                // Add active class to clicked button
                btn.classList.add('active');
                
                // Show the corresponding events section
                const tab = btn.getAttribute('data-tab');
                
                upcomingEvents.style.display = 'none';
                ongoingEvents.style.display = 'none';
                pastEvents.style.display = 'none';
                
                if (tab === 'upcoming') {
                    upcomingEvents.style.display = 'grid';
                } else if (tab === 'ongoing') {
                    ongoingEvents.style.display = 'grid';
                } else if (tab === 'past') {
                    pastEvents.style.display = 'grid';
                }
            });
        });
        
        // Gallery modal functionality
        const galleryModal = document.getElementById('galleryModal');
        const closeModal = document.getElementById('closeModal');
        const modalTitle = document.getElementById('modalTitle');
        const galleryGrid = document.getElementById('galleryGrid');
        const registrationForm = document.getElementById('registrationForm');
        
        // Sample gallery images (in a real scenario, these would be specific to each event)
        const galleryImages = [
            'https://source.unsplash.com/random/600x400/?event,1',
            'https://source.unsplash.com/random/600x400/?event,2',
            'https://source.unsplash.com/random/600x400/?event,3',
            'https://source.unsplash.com/random/600x400/?event,4',
            'https://source.unsplash.com/random/600x400/?event,5',
            'https://source.unsplash.com/random/600x400/?event,6'
        ];
        
        // Function to open gallery
        function openGallery(eventTitle, isPastEvent) {
            modalTitle.textContent = `${eventTitle} - Gallery`;
            
            // Clear previous gallery images
            galleryGrid.innerHTML = '';
            
            // Add images to gallery
            galleryImages.forEach(imgSrc => {
                const galleryItem = document.createElement('div');
                galleryItem.className = 'gallery-item';
                galleryItem.innerHTML = `<img src="${imgSrc}" alt="${eventTitle}">`;
                galleryGrid.appendChild(galleryItem);
            });
            
            // Show/hide registration form based on whether event is past
            registrationForm.style.display = isPastEvent ? 'none' : 'block';
            
            // Show modal
            galleryModal.classList.add('active');
        }
        
        // Close modal
        closeModal.addEventListener('click', () => {
            galleryModal.classList.remove('active');
        });
        
        // Close modal when clicking outside
        galleryModal.addEventListener('click', (e) => {
            if (e.target === galleryModal) {
                galleryModal.classList.remove('active');
            }
        });
        
        // Add event listeners to gallery buttons
        document.querySelectorAll('.btn-view-gallery').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const eventCard = e.target.closest('.event-card');
                const eventTitle = eventCard.querySelector('.event-title').textContent;
                const isPastEvent = eventCard.querySelector('.event-status').classList.contains('status-past');
                openGallery(eventTitle, isPastEvent);
            });
        });
        
        // Add event listeners to register buttons
        document.querySelectorAll('.btn-register').forEach(btn => {
            if (!btn.disabled) {
                btn.addEventListener('click', (e) => {
                    const eventCard = e.target.closest('.event-card');
                    const eventTitle = eventCard.querySelector('.event-title').textContent;
                    modalTitle.textContent = `Register for ${eventTitle}`;
                    
                    // Clear gallery and hide it
                    galleryGrid.innerHTML = '';
                    galleryGrid.style.display = 'none';
                    
                    // Show registration form
                    registrationForm.style.display = 'block';
                    
                    // Show modal
                    galleryModal.classList.add('active');
                });
            }
        });

        // Form submission handling
        document.getElementById('contactForm').addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form values
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const subject = document.getElementById('subject').value;
            const message = document.getElementById('message').value;
            
            // In a real application, you would send this data to a server
            // For this example, we'll just show an alert
            alert(`Thank you, ${name}! Your message has been received. We will get back to you at ${email} soon.`);
            
            // Reset the form
            document.getElementById('contactForm').reset();
        });

        // Simple animation for elements when they come into view
        document.addEventListener('DOMContentLoaded', function() {
            const cards = document.querySelectorAll('.contact-card');
            
            cards.forEach(card => {
                card.style.opacity = '0';
                card.style.transform = 'translateY(20px)';
                card.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
            });
            
            setTimeout(() => {
                cards.forEach((card, index) => {
                    setTimeout(() => {
                        card.style.opacity = '1';
                        card.style.transform = 'translateY(0)';
                    }, 100 * index);
                });
            }, 500);
        });

// Sparkle cursor effect for hero section
function initializeSparkleEffect() {
    const heroSection = document.querySelector('.hero-section');
    if (!heroSection) return;

    let customCursor = null;
    let sparkleCount = 0;
    const maxSparkles = 50; // Limit number of sparkles for performance
    let isMouseMoving = false;
    let mouseMoveTimeout;

    // Create custom cursor
    function createCustomCursor() {
        customCursor = document.createElement('div');
        customCursor.className = 'custom-cursor';
        document.body.appendChild(customCursor);
    }

    // Create sparkle at cursor position
    function createSparkle(x, y, type = 'normal') {
        if (sparkleCount >= maxSparkles) return;

        const sparkle = document.createElement('div');
        sparkle.className = `sparkle ${type}`;
        
        // Randomize sparkle properties
        const size = Math.random() * 6 + 2; // 2-8px
        const delay = Math.random() * 0.3; // 0-0.3s delay
        const duration = type === 'burst' ? 1.2 : (Math.random() * 0.5 + 0.8); // 0.8-1.3s duration
        
        sparkle.style.left = x + 'px';
        sparkle.style.top = y + 'px';
        sparkle.style.width = size + 'px';
        sparkle.style.height = size + 'px';
        sparkle.style.animationDelay = delay + 's';
        sparkle.style.animationDuration = duration + 's';
        
        // Randomize colors
        const colors = [
            'radial-gradient(circle, #ffffff 0%, #2b8aef 50%, transparent 100%)',
            'radial-gradient(circle, #ffffff 0%, #ff6b6b 50%, transparent 100%)',
            'radial-gradient(circle, #ffffff 0%, #4ecdc4 50%, transparent 100%)',
            'radial-gradient(circle, #ffffff 0%, #ffd166 50%, transparent 100%)'
        ];
        sparkle.style.background = colors[Math.floor(Math.random() * colors.length)];
        
        heroSection.appendChild(sparkle);
        sparkleCount++;

        // Remove sparkle after animation
        setTimeout(() => {
            if (sparkle.parentNode) {
                sparkle.parentNode.removeChild(sparkle);
                sparkleCount--;
            }
        }, (duration + delay) * 1000);
    }

    // Create trail effect
    function createTrail(x, y) {
        const trail = document.createElement('div');
        trail.className = 'sparkle-trail';
        trail.style.left = x + 'px';
        trail.style.top = y + 'px';
        
        heroSection.appendChild(trail);
        
        setTimeout(() => {
            if (trail.parentNode) {
                trail.parentNode.removeChild(trail);
            }
        }, 500);
    }

    // Mouse move handler
    function handleMouseMove(e) {
        if (!isMouseMoving) {
            isMouseMoving = true;
            createCustomCursor();
        }

        // Update custom cursor position
        if (customCursor) {
            customCursor.style.left = e.clientX - 10 + 'px';
            customCursor.style.top = e.clientY - 10 + 'px';
        }

        // Create sparkles with some randomness
        if (Math.random() < 0.3) { // 30% chance to create sparkle
            const offsetX = (Math.random() - 0.5) * 20;
            const offsetY = (Math.random() - 0.5) * 20;
            createSparkle(e.clientX + offsetX, e.clientY + offsetY, 'trail');
        }

        // Create trail effect occasionally
        if (Math.random() < 0.1) { // 10% chance to create trail
            createTrail(e.clientX, e.clientY);
        }

        // Clear timeout and set new one
        clearTimeout(mouseMoveTimeout);
        mouseMoveTimeout = setTimeout(() => {
            isMouseMoving = false;
            if (customCursor && customCursor.parentNode) {
                customCursor.parentNode.removeChild(customCursor);
                customCursor = null;
            }
        }, 1000);
    }

    // Mouse enter handler
    function handleMouseEnter() {
        document.body.style.cursor = 'none';
    }

    // Mouse leave handler
    function handleMouseLeave() {
        document.body.style.cursor = 'auto';
        if (customCursor && customCursor.parentNode) {
            customCursor.parentNode.removeChild(customCursor);
            customCursor = null;
        }
        isMouseMoving = false;
    }

    // Click handler for burst effect
    function handleClick(e) {
        // Create a burst of sparkles on click
        for (let i = 0; i < 8; i++) {
            const angle = (i / 8) * Math.PI * 2;
            const distance = Math.random() * 30 + 20;
            const x = e.clientX + Math.cos(angle) * distance;
            const y = e.clientY + Math.sin(angle) * distance;
            createSparkle(x, y, 'burst');
        }
        
        // Create additional sparkles at click point
        for (let i = 0; i < 3; i++) {
            const offsetX = (Math.random() - 0.5) * 15;
            const offsetY = (Math.random() - 0.5) * 15;
            createSparkle(e.clientX + offsetX, e.clientY + offsetY, 'burst');
        }
    }

    // Add event listeners
    heroSection.addEventListener('mousemove', handleMouseMove);
    heroSection.addEventListener('mouseenter', handleMouseEnter);
    heroSection.addEventListener('mouseleave', handleMouseLeave);
    heroSection.addEventListener('click', handleClick);

    // Cleanup function
    function cleanup() {
        heroSection.removeEventListener('mousemove', handleMouseMove);
        heroSection.removeEventListener('mouseenter', handleMouseEnter);
        heroSection.removeEventListener('mouseleave', handleMouseLeave);
        heroSection.removeEventListener('click', handleClick);
        
        if (customCursor && customCursor.parentNode) {
            customCursor.parentNode.removeChild(customCursor);
        }
        
        // Remove all sparkles
        const sparkles = heroSection.querySelectorAll('.sparkle');
        sparkles.forEach(sparkle => {
            if (sparkle.parentNode) {
                sparkle.parentNode.removeChild(sparkle);
            }
        });
    }

    // Cleanup on page unload
    window.addEventListener('beforeunload', cleanup);
}