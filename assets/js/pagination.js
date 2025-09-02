// pagination.js
        document.addEventListener('DOMContentLoaded', function() {
            // Get the pagination elements
            const prevPagination = document.querySelector('.projectc-details__pagination-single');
            const nextPagination = document.querySelector('.projectc-details__pagination-single-two');
            
            // Project data for all 11 pages
            const projects = [
                { 
                    title: "Customized Corporate Diaries, Soft Leatherette", 
                    url: "project-details.html",
                    image: "assets/images/project/project-3-1.jpg",
                    category: "Diaries",
                    description: "Premium customized corporate diaries with soft leatherette covers, perfect for executive gifting and brand promotion. These diaries feature high-quality paper, custom branding, and elegant finishes."
                },
                { 
                    title: "Calendars", 
                    url: "project-details-2.html",
                    image: "assets/images/project/project-3-2.jpg",
                    category: "Calendars",
                    description: "Beautifully designed calendars for corporate promotions or personal use. Available in wall, desk, and custom formats with high-quality printing and finishing options."
                },
                { 
                    title: "Printed & Laminated Diaries, Analog Precision, Digital Agility", 
                    url: "project-details-3.html",
                    image: "assets/images/project/project-3-3.jpg",
                    category: "Diaries",
                    description: "Combining traditional craftsmanship with modern design, these diaries feature precision printing and durable lamination for long-lasting use."
                },
                { 
                    title: "Filofax/ Executive Diary Organizers", 
                    url: "project-details-4.html",
                    image: "assets/images/project/project-3-1.jpg",
                    category: "Diaries",
                    description: "Luxury executive organizers with refillable diary inserts, premium covers, and organizational sections for the discerning professional."
                },
                { 
                    title: "Custom Branded Paper Bags", 
                    url: "project-details-5.html",
                    image: "assets/images/project/project-3-2.jpg",
                    category: "Bags",
                    description: "Eco-friendly custom branded paper bags for retail, events, and corporate gifting. Available in various sizes, handles, and finishing options."
                },
                { 
                    title: "Lever Arch Files", 
                    url: "project-details-6.html",
                    image: "assets/images/project/project-3-3.jpg",
                    category: "Files",
                    description: "Durable lever arch files with custom printing for document organization and storage. Perfect for offices, archives, and presentations."
                },
                { 
                    title: "Register Books", 
                    url: "project-details-7.html",
                    image: "assets/images/project/project-3-1.jpg",
                    category: "Books",
                    description: "High-quality register books for record keeping, available in various sizes and page counts with custom cover printing options."
                },
                { 
                    title: "Photo Albums", 
                    url: "project-details-8.html",
                    image: "assets/images/project/project-3-2.jpg",
                    category: "Photo",
                    description: "Premium photo albums with acid-free pages, protective sleeves, and customizable covers to preserve your precious memories."
                },
                { 
                    title: "NCR (Self Carbonating)", 
                    url: "project-details-9.html",
                    image: "assets/images/project/project-3-3.jpg",
                    category: "Receipts",
                    description: "No Carbon Required forms in duplicate, triplicate, or quadruplicate sets for invoices, receipts, and other business forms."
                },
                { 
                    title: "Customized School Notebooks & Student Communication Diary", 
                    url: "project-details-10.html",
                    image: "assets/images/project/project-3-3.jpg",
                    category: "Books",
                    description: "Customized notebooks and student diaries for educational institutions with branded covers and specialized interior layouts."
                },
                { 
                    title: "Customized Corporate Diaries & Journals", 
                    url: "project-details-11.html",
                    image: "assets/images/project/project-3-3.jpg",
                    category: "Diaries",
                    description: "Elegant corporate diaries and journals featuring custom branding, premium materials, and a variety of interior layout options."
                }
            ];
            
            // Get current project index from URL parameter or default to 0
            const urlParams = new URLSearchParams(window.location.search);
            let currentIndex = parseInt(urlParams.get('project')) || 0;
            
            // Ensure the index is within bounds (for direct URL access)
            if (currentIndex >= projects.length) currentIndex = 0;
            if (currentIndex < 0) currentIndex = projects.length - 1;
            
            // Update page content with current project details
            function updateProjectDetails() {
                const project = projects[currentIndex];
                
                document.getElementById('project-title').textContent = project.title;
                document.getElementById('project-category').textContent = project.category;
                document.getElementById('project-image').src = project.image;
                document.getElementById('project-image').alt = project.title;
                document.getElementById('project-description').textContent = project.description;
                
                document.getElementById('current-index').textContent = currentIndex + 1;
                document.getElementById('total-projects').textContent = projects.length;
                
                // Update URL without reloading the page
                window.history.replaceState({}, '', `${window.location.pathname}?project=${currentIndex}`);
            }
            
            // Calculate previous and next indices with looping
            function getPrevIndex() {
                return currentIndex === 0 ? projects.length - 1 : currentIndex - 1;
            }
            
            function getNextIndex() {
                return currentIndex === projects.length - 1 ? 0 : currentIndex + 1;
            }
            
            // Update pagination buttons
            function updatePagination() {
                const prevIndex = getPrevIndex();
                const nextIndex = getNextIndex();
                
                document.getElementById('prev-title').textContent = projects[prevIndex].title;
                document.getElementById('next-title').textContent = projects[nextIndex].title;
                
                // Remove disabled states (since we're implementing continuous loop)
                prevPagination.classList.remove('disabled');
                nextPagination.classList.remove('disabled');
            }
            
            // Initialize page
            updateProjectDetails();
            updatePagination();
            
            // Add click handlers for pagination
            prevPagination.addEventListener('click', function() {
                currentIndex = getPrevIndex();
                updateProjectDetails();
                updatePagination();
            });
            
            nextPagination.addEventListener('click', function() {
                currentIndex = getNextIndex();
                updateProjectDetails();
                updatePagination();
            });
        });
