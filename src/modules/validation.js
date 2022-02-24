const validation = () => {
    const calcItemsNumber = document.querySelectorAll('input.calc-item');
    const inputsText = document.querySelectorAll('input[id*=name], input.mess');
    const emails = document.querySelectorAll('input[type="email"]');
    const tels = document.querySelectorAll('input[type="tel"]');

    calcItemsNumber.forEach(item => {
        item.addEventListener('input', function(e) {
            e.target.value = e.target.value.replace(/\D/g, ''); 
        });
    });

    inputsText.forEach(item => {
        item.addEventListener('input', function(e) {
            e.target.value = e.target.value.replace(/[^а-яА-я\s\-]/g, '');   
        })
    })

    emails.forEach(item => {
        item.addEventListener('input', function(e) {
            e.target.value = e.target.value.replace(/[^a-zA-Z0-9\@\-\_\.\!\~\*\']/g, '');
        })
    })

    tels.forEach(item => {
        item.addEventListener('input', function(e) {
            e.target.value = e.target.value.replace(/[^0-9\(\)\-]/g, '');
        })
    })
}

export default validation;