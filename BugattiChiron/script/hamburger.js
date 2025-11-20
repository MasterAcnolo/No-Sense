const hamburgerBtn = document.getElementById('hamburger-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    const closeBtn = document.getElementById('close-btn');
    const mobileLinks = mobileMenu.querySelectorAll('a');
    const logo = document.getElementById('LogoBugatti');

    function openMenu() {
    mobileMenu.classList.add('active');
    mobileMenu.setAttribute('aria-hidden', 'false');
    hamburgerBtn.classList.add('hidden');
    logo.classList.add('hidden');  // Logo part
    }

    function closeMenu() {
    mobileMenu.classList.remove('active');
    mobileMenu.setAttribute('aria-hidden', 'true');
    hamburgerBtn.classList.remove('hidden');
    logo.classList.remove('hidden');  // Logo revient
    }

    hamburgerBtn.addEventListener('click', openMenu);
    closeBtn.addEventListener('click', closeMenu);

    mobileLinks.forEach(link => {
    link.addEventListener('click', closeMenu);
    });
