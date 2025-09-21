// Team data for each department
const teamData = {
    technical: {
        title: "Technical Team",
        description: "Our technical wizards who bring ideas to life through code and innovation.",
        members: [
            {
                name: "Sarah Smith",
                role: "Technical Lead",
                description: "Full-stack developer with expertise in AI/ML implementation and mentoring.",
                skills: ["React", "Node.js", "Python", "TensorFlow"],
                social: { linkedin: "#", github: "#", twitter: "#" },
                avatar: "fas fa-code"
            },
            {
                name: "Alex Johnson",
                role: "Senior Developer",
                description: "Backend specialist focused on scalable architecture and database design.",
                skills: ["Python", "Django", "PostgreSQL", "AWS"],
                social: { linkedin: "#", github: "#" },
                avatar: "fas fa-server"
            },
            {
                name: "Maria Garcia",
                role: "Frontend Developer",
                description: "UI/UX enthusiast creating beautiful and intuitive user experiences.",
                skills: ["React", "Vue.js", "CSS3", "Figma"],
                social: { linkedin: "#", github: "#", instagram: "#" },
                avatar: "fas fa-paint-brush"
            }
        ]
    },
    management: {
        title: "Management Team",
        description: "Strategic leaders who guide the club's vision and ensure smooth operations.",
        members: [
            {
                name: "John Doe",
                role: "President",
                description: "Visionary leader with 3+ years of experience in AI/ML and event organization.",
                skills: ["Leadership", "Strategy", "Python", "Project Management"],
                social: { linkedin: "#", github: "#", twitter: "#" },
                avatar: "fas fa-crown"
            },
            {
                name: "Mike Johnson",
                role: "Vice President",
                description: "Operations specialist coordinating events and managing club communications.",
                skills: ["Operations", "Communication", "Data Analysis", "Event Planning"],
                social: { linkedin: "#", github: "#", facebook: "#" },
                avatar: "fas fa-users-cog"
            },
            {
                name: "Lisa Chen",
                role: "Treasurer",
                description: "Financial management expert ensuring sustainable club operations.",
                skills: ["Finance", "Budgeting", "Analytics", "Excel"],
                social: { linkedin: "#", twitter: "#" },
                avatar: "fas fa-chart-line"
            }
        ]
    },
    social: {
        title: "Social Media Team",
        description: "Digital storytellers who amplify our club's presence across all platforms.",
        members: [
            {
                name: "Emma Wilson",
                role: "Social Media Lead",
                description: "Creative content creator and social media strategist.",
                skills: ["Content Creation", "Social Media", "Design", "Analytics"],
                social: { instagram: "#", twitter: "#", linkedin: "#" },
                avatar: "fas fa-share-alt"
            },
            {
                name: "David Kim",
                role: "Content Creator",
                description: "Visual storyteller specializing in video and graphic content.",
                skills: ["Video Editing", "Photoshop", "After Effects", "Photography"],
                social: { instagram: "#", youtube: "#", behance: "#" },
                avatar: "fas fa-video"
            }
        ]
    },
    pr: {
        title: "Public Relations Team",
        description: "Brand ambassadors who build relationships and manage our public image.",
        members: [
            {
                name: "Rachel Brown",
                role: "PR Lead",
                description: "Communication expert managing external relationships and media outreach.",
                skills: ["Public Relations", "Communication", "Event Planning", "Writing"],
                social: { linkedin: "#", twitter: "#" },
                avatar: "fas fa-bullhorn"
            },
            {
                name: "Tom Anderson",
                role: "Media Coordinator",
                description: "Event coordinator and media liaison for club activities.",
                skills: ["Event Management", "Media Relations", "Coordination", "Networking"],
                social: { linkedin: "#", facebook: "#" },
                avatar: "fas fa-microphone"
            }
        ]
    },
    dam: {
        title: "Data & Analytics Team",
        description: "Data scientists who turn information into actionable insights.",
        members: [
            {
                name: "Emily Chen",
                role: "Data Lead",
                description: "Research enthusiast with publications in AI journals and data science expertise.",
                skills: ["Data Science", "Python", "R", "Machine Learning"],
                social: { linkedin: "#", github: "#", twitter: "#" },
                avatar: "fas fa-database"
            },
            {
                name: "James Wilson",
                role: "Analytics Specialist",
                description: "Business intelligence expert focused on data visualization and insights.",
                skills: ["Tableau", "Power BI", "SQL", "Statistics"],
                social: { linkedin: "#", github: "#" },
                avatar: "fas fa-chart-bar"
            }
        ]
    },
    editorial: {
        title: "Editorial Team",
        description: "Creative minds who craft compelling content and maintain our brand identity.",
        members: [
            {
                name: "Sophie Martinez",
                role: "Editorial Lead",
                description: "Content strategist and writer creating engaging narratives for our community.",
                skills: ["Writing", "Content Strategy", "Editing", "Branding"],
                social: { linkedin: "#", twitter: "#", medium: "#" },
                avatar: "fas fa-edit"
            },
            {
                name: "Kevin Lee",
                role: "Design Lead",
                description: "Visual designer creating stunning graphics and maintaining brand consistency.",
                skills: ["Graphic Design", "Illustrator", "Photoshop", "Branding"],
                social: { behance: "#", instagram: "#", dribbble: "#" },
                avatar: "fas fa-palette"
            }
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
});

// Navigation functionality
function initializeNavigation() {
    const menuToggle = document.querySelector('.menu-toggle');
    const nav = document.querySelector('nav');

    if (menuToggle && nav) {
        // Mobile menu toggle
        menuToggle.addEventListener('click', function() {
            nav.classList.toggle('active');
            menuToggle.classList.toggle('active');
        });

        // Close menu when clicking on a link
        document.querySelectorAll('nav a').forEach(link => {
            link.addEventListener('click', () => {
                nav.classList.remove('active');
                menuToggle.classList.remove('active');
            });
        });
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
        const bookContent = `
            <div class="book-spine"></div>
            <div class="book-page left">
                <h2 class="team-section-title">${team.title}</h2>
                <p style="color: #d0d0d0; margin-bottom: 2rem; text-align: center;">${team.description}</p>
                ${team.members.slice(0, Math.ceil(team.members.length / 2)).map(member => createMemberCard(member)).join('')}
            </div>
            <div class="book-page right">
                ${team.members.slice(Math.ceil(team.members.length / 2)).map(member => createMemberCard(member)).join('')}
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
    
    if (cards.length === 0) return;

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
 