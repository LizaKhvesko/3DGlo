const sendForm = ({ formId, someElem = [] }) => {
    const form = document.getElementById(formId);
    const statusBlock = document.createElement('div');
    statusBlock.classList.add('status')
    const errorText = 'Ошибка...';
    const successText = 'Спасибо, наш менеджер с Вами свяжется!';
    const emptyText = 'Заполните все поля!'

    const sendData = (data) => {
       return fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
               "Content-Type": "application/json" 
            }
       }).then(res => res.json())
    }

    const submitForm = () => {
        const formElements = form.querySelectorAll('input');
        const email = form.querySelector('input[type="email"]');
        const formData = new FormData(form);
        const formBody = {};

        form.append(statusBlock);
        
        if (email.value === '') {
           statusBlock.textContent =  emptyText;
        } else {
            statusBlock.textContent = ''
            statusBlock.classList.add('sk-rotating-plane');

            formData.forEach((val, key) => {
                formBody[key] = val;
            })

            someElem.forEach(elem => {
                const element = document.getElementById(elem.id);
                if (elem.type === 'block') {
                    formBody[elem.id] = element.textContent;
                } else if (elem.type === 'input'){
                    formBody[elem.id] = element.value;  
                }
            })

            sendData(formBody)
                .then(data => {
                    statusBlock.classList.remove('sk-rotating-plane');
                    statusBlock.textContent = successText;

                    formElements.forEach(input => {
                        input.value = ''
                    })
                })
                .catch(error => {
                statusBlock.classList.remove('sk-rotating-plane');
                statusBlock.textContent = errorText; 
                })
        }

        
    }

   try {
        if (!form) {
            throw new Error('Верните форму на место, пожаааалуйста!')
        }

        form.addEventListener('submit', (e) => {
            e.preventDefault();

            submitForm()
        })
   } catch (error) {
       console.log(error.message)
   }
} 

export default sendForm;