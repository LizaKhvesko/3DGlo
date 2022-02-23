const modal = () => {
   const buttons = document.querySelectorAll('.popup-btn');
   const modal = document.querySelector('.popup');
   const closeBtn = modal.querySelector('.popup-close');
   const modalContent = document.querySelector('.popup-content')
   let animation;
   let count = -70;
   let widthScreen = window.screen.width;

   function appear () {
        count++
        animation = requestAnimationFrame(appear);
        if (count > 20) {
        cancelAnimationFrame(animation)
      } else {
        modalContent.style.top= count * 6 + 'px'
      }  
   }

   buttons.forEach(btn => {
       btn.addEventListener('click', () => {
           if(widthScreen < 768) {
              modal.style.display = 'block';
           } else {
              modal.style.display = 'block';
              appear();
           }
       })
   })
   
   closeBtn.addEventListener('click', () => {
       modal.style.display = 'none';
       count = -70;
   })
}

export default modal