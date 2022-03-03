import { animate } from './helpers'

const modal = () => {
   const buttons = document.querySelectorAll('.popup-btn');
   const modal = document.querySelector('.popup');
   const modalContent = document.querySelector('.popup-content')
   let widthScreen = window.screen.width;

   buttons.forEach(btn => {
       btn.addEventListener('click', () => {
           if(widthScreen < 768) {
              modal.style.display = 'block';
           } else {
              modal.style.display = 'block';
                 animate({
                  duration: 2000,
                  timing(timeFraction) {
                     return timeFraction;
                  },
                  draw(progress) {
                     modalContent.style.left = (40 * progress) + '%' 
                  }
               });
              }
       })
   })
   
   modal.addEventListener('click', (e) => {
      if(!e.target.closest('.popup-content') || e.target.classList.contains('popup-close')) {
         modal.style.display = 'none';
      }
   })
}

export default modal