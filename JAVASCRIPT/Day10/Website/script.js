document.addEventListener('DOMContentLoaded', () => {
    // 1. DOM Elements
    const sidebar = document.getElementById('sidebar');
    const openSidebarBtn = document.getElementById('openSidebar');
    const closeSidebarBtn = document.getElementById('closeSidebar');
    const navLinksContainer = document.getElementById('navLinks');
    const contentArea = document.getElementById('contentArea');
    const sections = Array.from(document.querySelectorAll('section'));
    const progressBar = document.getElementById('progressBar');
    const progressText = document.getElementById('progressText');
    const sectionsCount = document.getElementById('sectionsCount');
    const themeToggle = document.getElementById('themeToggle');
    const themeIcon = document.getElementById('themeIcon');
    const markAllBtn = document.getElementById('markAllComplete');

    // 2. Generate Sidebar Links dynamically from sections
    sections.forEach((section, index) => {
        section.id = `section-${index + 1}`;
        const rawTitle = section.querySelector('h2').textContent;
        // Clean title (remove emojis and numbers for a cleaner look in the sidebar, or keep them)
        const cleanTitle = rawTitle.replace(/^\d+\.\s*/, '');

        const link = document.createElement('a');
        link.href = `#${section.id}`;
        link.className = `block py-2.5 px-4 rounded-xl text-sm font-medium transition-all duration-300 text-gray-400 hover:text-white hover:bg-white/5 mb-1 flex items-center justify-between group nav-item-${index}`;

        link.innerHTML = `
            <span class="truncate pr-2">${cleanTitle}</span>
            <div class="w-5 h-5 rounded-full border border-gray-600 flex items-center justify-center opacity-50 group-hover:opacity-100 transition-opacity flex-shrink-0 status-icon">
                <i class="ph ph-check text-xs text-transparent transition-colors check-icon"></i>
            </div>
        `;

        // Smooth scroll implementation
        link.addEventListener('click', (e) => {
            e.preventDefault();
            // Close sidebar on mobile after clicking
            if (window.innerWidth < 1024) {
                sidebar.classList.remove('translate-x-0');
                sidebar.classList.add('-translate-x-full');
            }
            contentArea.scrollTo({
                top: section.offsetTop - 120, // Offset for header
                behavior: 'smooth'
            });
        });

        navLinksContainer.appendChild(link);
    });

    // 3. Scrollspy & Intersection Observer for animations
    const navItems = document.querySelectorAll('[class*="nav-item-"]');

    // Animation Observer

    // Animation Observer and Active Link Highlighting
    let activeSections = new Set();
    const animationObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            const index = parseInt(entry.target.id.split('-')[1]) - 1;
            if (entry.isIntersecting) {
                activeSections.add(index);
            } else {
                activeSections.delete(index);
            }
        });

        let targetIndex = activeSections.size > 0 ? Math.min(...Array.from(activeSections)) : -1;

        // Check if we are at the very bottom of the page
        if (contentArea.scrollHeight - contentArea.scrollTop - contentArea.clientHeight < 50) {
            targetIndex = sections.length - 1;
        }

        if (targetIndex !== -1 && navItems[targetIndex]) {
            navItems.forEach(item => {
                item.classList.remove('bg-white/10', 'text-white', 'border-l-2', 'border-orange-500');
                item.classList.add('text-gray-400', 'border-transparent');
            });
            navItems[targetIndex].classList.add('bg-white/10', 'text-white', 'border-l-2', 'border-orange-500');
            navItems[targetIndex].classList.remove('text-gray-400', 'border-transparent');
        }
    }, { root: contentArea, threshold: 0.1, rootMargin: "-50px 0px -50% 0px" });

    contentArea.addEventListener('scroll', () => {
        if (contentArea.scrollHeight - contentArea.scrollTop - contentArea.clientHeight < 50) {
            navItems.forEach(item => {
                item.classList.remove('bg-white/10', 'text-white', 'border-l-2', 'border-orange-500');
                item.classList.add('text-gray-400', 'border-transparent');
            });
            const last = sections.length - 1;
            navItems[last].classList.add('bg-white/10', 'text-white', 'border-l-2', 'border-orange-500');
            navItems[last].classList.remove('text-gray-400', 'border-transparent');
        }
    });

    sections.forEach(section => animationObserver.observe(section));

    // 4. Progress Tracking (Local Storage)
    let completedSections = JSON.parse(localStorage.getItem('jsMasteryProgress')) || [];

    const updateProgressUI = () => {
        const total = sections.length;
        const complete = completedSections.length;
        const percentage = total === 0 ? 0 : Math.round((complete / total) * 100);

        progressBar.style.width = `${percentage}%`;
        progressText.textContent = `${percentage}%`;
        sectionsCount.textContent = `${complete}/${total} Completed`;

        navItems.forEach((item, index) => {
            const iconDiv = item.querySelector('.status-icon');
            const checkIcon = item.querySelector('.check-icon');
            if (completedSections.includes(index)) {
                iconDiv.classList.add('bg-green-500/20', 'border-green-500/50');
                iconDiv.classList.remove('border-gray-600');
                checkIcon.classList.add('text-green-500');
                checkIcon.classList.remove('text-transparent');
            } else {
                iconDiv.classList.remove('bg-green-500/20', 'border-green-500/50');
                iconDiv.classList.add('border-gray-600');
                checkIcon.classList.remove('text-green-500');
                checkIcon.classList.add('text-transparent');
            }
        });
    };

    // Make sections markable via double click or a button
    sections.forEach((section, index) => {
        // Add a "Mark Complete" button to each section
        const btn = document.createElement('button');
        btn.className = "mt-8 px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 flex items-center gap-2 border bg-black/20 hover:bg-black/40";

        const updateBtnState = () => {
            if (completedSections.includes(index)) {
                btn.classList.add('border-green-500/30', 'text-green-400');
                btn.classList.remove('border-white/10', 'text-gray-400');
                btn.innerHTML = '<i class="ph-fill ph-check-circle text-lg"></i> Completed';
            } else {
                btn.classList.remove('border-green-500/30', 'text-green-400');
                btn.classList.add('border-white/10', 'text-gray-400');
                btn.innerHTML = '<i class="ph ph-circle text-lg"></i> Mark as Read';
            }
        };
        updateBtnState();

        btn.addEventListener('click', () => {
            if (completedSections.includes(index)) {
                completedSections = completedSections.filter(i => i !== index);
            } else {
                completedSections.push(index);
            }
            localStorage.setItem('jsMasteryProgress', JSON.stringify(completedSections));
            updateBtnState();
            updateProgressUI();
        });

        section.appendChild(btn);
    });

    markAllBtn.addEventListener('click', () => {
        if (completedSections.length === sections.length) {
            completedSections = []; // clear all
            markAllBtn.innerHTML = '<i class="ph ph-check-circle"></i> Mark All Complete';
        } else {
            completedSections = sections.map((_, i) => i); // mark all
            markAllBtn.innerHTML = '<i class="ph ph-x-circle cursor-pointer text-red-400"></i> Reset Progress';
        }
        localStorage.setItem('jsMasteryProgress', JSON.stringify(completedSections));
        sections.forEach((_, index) => {
            const btn = sections[index].querySelector('button');
            if (btn) {
                if (completedSections.includes(index)) {
                    btn.classList.add('border-green-500/30', 'text-green-400');
                    btn.classList.remove('border-white/10', 'text-gray-400');
                    btn.innerHTML = '<i class="ph-fill ph-check-circle text-lg"></i> Completed';
                } else {
                    btn.classList.remove('border-green-500/30', 'text-green-400');
                    btn.classList.add('border-white/10', 'text-gray-400');
                    btn.innerHTML = '<i class="ph ph-circle text-lg"></i> Mark as Read';
                }
            }
        });
        updateProgressUI();
    });

    if (completedSections.length === sections.length) {
        markAllBtn.innerHTML = '<i class="ph ph-x-circle text-red-400"></i> Reset Progress';
    }

    updateProgressUI();

    // 5. Theme Toggle
    const currentTheme = localStorage.getItem('theme') || 'dark';
    if (currentTheme === 'light') {
        document.documentElement.classList.add('light');
        themeIcon.classList.replace('ph-sun', 'ph-moon');
    }

    themeToggle.addEventListener('click', () => {
        document.documentElement.classList.toggle('light');
        if (document.documentElement.classList.contains('light')) {
            localStorage.setItem('theme', 'light');
            themeIcon.classList.replace('ph-sun', 'ph-moon');
        } else {
            localStorage.setItem('theme', 'dark');
            themeIcon.classList.replace('ph-moon', 'ph-sun');
        }
    });

    // 6. Mobile Sidebar Toggle
    openSidebarBtn.addEventListener('click', () => {
        sidebar.classList.remove('-translate-x-full');
        sidebar.classList.add('translate-x-0');
    });

    closeSidebarBtn.addEventListener('click', () => {
        sidebar.classList.remove('translate-x-0');
        sidebar.classList.add('-translate-x-full');
    });
});
