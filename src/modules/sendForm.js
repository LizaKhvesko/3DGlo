const sendForm = ({ formId, someElem = [] }) => {
    const form = document.getElementById(formId);
    const statusBlock = document.createElement('div');
    statusBlock.classList.add('status')
    const errorText = 'Ошибка...';
    const successText = 'Спасибо, наш менеджер с Вами свяжется!';
    const formElements = form.querySelectorAll('input');
        
    formElements.forEach(form => {
        form.required = true;
    })

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
        const inputs = Array.from(form.querySelectorAll('input'));
        if (inputs.every(input => input.style.border !== '3px solid red')) {
            const formData = new FormData(form);
            const formBody = {};

            form.append(statusBlock);

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

                    setTimeout(() => statusBlock.remove(), 4000);

                    formElements.forEach(input => {
                        input.value = ''
                    })
                })
                .catch(error => {
                    statusBlock.classList.remove('sk-rotating-plane');
                    statusBlock.textContent = errorText;
                    setTimeout(() => statusBlock.remove(), 4000);
                })
        } else {
            return
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