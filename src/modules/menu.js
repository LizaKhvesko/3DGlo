const menu = () => {
    const menuBtn = document.querySelector('.menu');
    const menu = document.querySelector('menu');
    const closeBtn = menu.querySelector('.close-btn');
    const menuItems = menu.querySelectorAll('ul>li>a');
    const hashLinks = menu.querySelectorAll('a[href^="#"]');
    const arrowDown = document.querySelector('main>a');

    const handleMenu = () => {
        menu.classList.toggle('active-menu');
    }

    const scroll = (element) => {
        const id = element.getAttribute('href');

        document.querySelector(id).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        }   );
    }

    for (let i = 1; i < hashLinks.length; i++) {
        hashLinks[i].addEventListener('click', function (e) {
            e.preventDefault();
            scroll(hashLinks[i])
        });
    }

    menuBtn.addEventListener('click', handleMenu);
    closeBtn.addEventListener('click', handleMenu);
    menuItems.forEach(elem => elem.addEventListener('click', handleMenu));
    arrowDown.addEventListener('click', function(e) {
        e.preventDefault();
        scroll(arrowDown) 
    })
}

export default menu