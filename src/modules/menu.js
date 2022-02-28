const menu = () => {
    const main = document.querySelector('main');
    const menu = document.querySelector('menu');
    const arrowDown = document.querySelector('main>a');

    const handleMenu = () => {
        menu.classList.toggle('active-menu');
    }

    const scroll = (element) => {
        const id = element.getAttribute('href');
        document.querySelector(id).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    }

    main.addEventListener('click', (e) => {
        if (e.target.closest('.menu')) {
            handleMenu();
        } else if (e.target.closest('a')) {
            e.preventDefault();
            scroll(arrowDown) 
        }
    });

    menu.addEventListener('click', (e) => {
        if(e.target.matches('ul>li>a')) {
           let link = e.target.closest('a');
           e.preventDefault();
           scroll(link);
           handleMenu();
        } else if (e.target.closest('.close-btn')) {
            e.preventDefault();
            handleMenu();
        }
    });
}

export default menu