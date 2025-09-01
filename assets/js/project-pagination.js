// assets/js/project-pagination.js
document.addEventListener('DOMContentLoaded', function() {
    // Get the pagination elements
    const prevPagination = document.querySelector('.projectc-details__pagination-single:first-child');
    const nextPagination = document.querySelector('.projectc-details__pagination-single-two');
    
    if (prevPagination && nextPagination) {
        const prevLink = prevPagination.querySelector('a');
        const nextLink = nextPagination.querySelector('a');
        
        // Project data for all 11 pages
        const projects = [
            { 
                title: "Customized Corporate Diaries, Soft Leatherette  ", 
                url: "project-details.html",
                image: "assets/images/project/project-3-1.jpg",
                category: "Diaries"
            },
            { 
                title: "Calendars", 
                url: "project-details-2.html",
                image: "assets/images/project/project-3-2.jpg",
                category: "Calendars"
            },
            { 
                title: "Printed & Laminated Diaries, Analog Precision, Digital Agility", 
                url: "project-details-3.html",
                image: "assets/images/project/project-3-3.jpg",
                category: "Diaries"
            },
            { 
                title: "Filofax/ Executive Diary Organizers", 
                url: "project-details-4.html",
                image: "assets/images/project/project-3-1.jpg",
                category: "Diaries"
            },
            { 
                title: "Custom Branded Paper Bags", 
                url: "project-details-5.html",
                image: "assets/images/project/project-3-2.jpg",
                category: "Wall Protection"
            },
            { 
                title: "Lever Arch Files", 
                url: "project-details-6.html",
                image: "assets/images/project/project-3-3.jpg",
                category: "Files"
            },
            { 
                title: "Room Wallpapers", 
                url: "project-details-7.html",
                image: "assets/images/project/project-3-1.jpg",
                category: "Room Wallsheet"
            },
            { 
                title: "Interior Wall Designing", 
                url: "project-details-8.html",
                image: "assets/images/project/project-3-2.jpg",
                category: "Wall Protection"
            },
            { 
                title: "Exterior Design", 
                url: "project-details-9.html",
                image: "assets/images/project/project-3-3.jpg",
                category: "Room Wallsheet"
            },
            { 
                title: "Exterior Design", 
                url: "project-details-10.html",
                image: "assets/images/project/project-3-3.jpg",
                category: "Room Wallsheet"
            },
            { 
                title: "Exterior Design", 
                url: "project-details-11.html",
                image: "assets/images/project/project-3-3.jpg",
                category: "Room Wallsheet"
            }
        ];
        
        // Get current project index from URL or default to 0
        let currentIndex = 0;
        const currentUrl = window.location.pathname;
        const currentPage = currentUrl.split('/').pop();
        
        // Determine current project index based on URL
        projects.forEach((project, index) => {
            // Check if current page matches project URL or if it's the main project-details.html
            if (currentPage === project.url || (currentPage === "project-details.html" && index === 0)) {
                currentIndex = index;
            }
        });
        
        // Set up previous project link
        if (currentIndex > 0) {
            const prevProject = projects[currentIndex - 1];
            prevLink.href = prevProject.url;
            prevPagination.querySelector('.projectc-details__pagination-content p').textContent = prevProject.title;
        } else {
            // If first project, disable previous link
            prevLink.removeAttribute('href');
            prevPagination.classList.add('disabled');
            prevLink.style.cursor = 'not-allowed';
            prevLink.style.opacity = '0.5';
        }
        
        // Set up next project link
        if (currentIndex < projects.length - 1) {
            const nextProject = projects[currentIndex + 1];
            nextLink.href = nextProject.url;
            nextPagination.querySelector('.projectc-details__pagination-content p').textContent = nextProject.title;
        } else {
            // If last project, disable next link
            nextLink.removeAttribute('href');
            nextPagination.classList.add('disabled');
            nextLink.style.cursor = 'not-allowed';
            nextLink.style.opacity = '0.5';
        }
        
        // Add click handlers to prevent default if disabled
        prevLink.addEventListener('click', function(e) {
            if (!this.href) {
                e.preventDefault();
            }
        });
        
        nextLink.addEventListener('click', function(e) {
            if (!this.href) {
                e.preventDefault();
            }
        });
    }
});