const menu = () => {
    const body = document.querySelector('body');
    const menu = document.querySelector('menu');
    const arrowDown = document.querySelector('main>a');
    const arrowDownImg = document.querySelector('main>a>img');

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

    body.addEventListener('click', (e) => {
       if (e.target.closest('.menu')) {
            handleMenu();
        } else if (e.target === arrowDownImg) {
            e.preventDefault();
            scroll(arrowDown)
        } else if (e.target.matches('menu>ul>li>a')) {
           let link = e.target.closest('a');
           e.preventDefault();
           scroll(link);
           handleMenu();
        } else if (e.target.closest('.close-btn')) {
           e.preventDefault();
           handleMenu();
        } else if (!e.target.closest('menu') && menu.classList.contains('active-menu')) {
            menu.classList.remove('active-menu');
        }
    })
}

export default menu