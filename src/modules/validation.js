const validation = () => {
    const calcItemsNumber = document.querySelectorAll('input.calc-item');
    const inputsName = document.querySelectorAll('input[id*=name]');
    const inputMess = document.querySelector('.mess');
    const emails = document.querySelectorAll('input[type="email"]');
    const tels = document.querySelectorAll('input[type="tel"]');

    function noMoreSpace(expr) {
        let reg = /\s+/g;
        expr.value = expr.value.replace(reg, ' ');
        if (reg.test(expr.value[0]) || reg.test(expr.value[expr.value.length - 1])){
            expr.value = expr.value.trim();
        }
    }

    function noMoreHyphen(expr) {
        let reg = /\-+/g;
        expr.value = expr.value.replace(reg, '-');
        if(reg.test(expr.value[0]) || reg.test(expr.value[expr.value.length - 1])) {
           expr.value = expr.value.replace(reg, ''); 
        }
    }

    function letters(expr) {
        let regBig = /[А-Я]/;
        let regSmall = /[а-я]/;
        let arr = expr.value.split(' ');
        let result = [];
        arr.forEach(item => {
            if(regSmall.test(item[0])){
                item = item[0].toUpperCase() + item.slice(1).toLowerCase();
            } else {
                item = item;
            }

            if (regBig.test(item.slice(1))) {
                item = item[0].toUpperCase() + item.slice(1).toLowerCase();
            } else {
                item = item;
            }
            result.push(item);
            expr.value = result.join(' ');
        })
    }

    calcItemsNumber.forEach(item => {
        item.addEventListener('input', function(e) {
            e.target.value = e.target.value.replace(/\D/g, ''); 
        });
    });

    inputsName.forEach(item => {
        item.addEventListener('input', function(e) {
            e.target.value = e.target.value.replace(/[^а-яА-я\s]/g, '');
            if (e.target.value.length < 2) {
                item.style.border = '3px solid red'
            } else {
                item.style.border = ''
            }
        })
    })

    inputsName.forEach(item => {
        item.addEventListener('blur', function() {
            noMoreSpace(item);
            letters(item);
        })
    })

    inputMess.addEventListener('input', function(e) {
        e.target.value = e.target.value.replace(/[^а-яА-я0-9\s\.\,\:\-\?\!\;]/g, '');
    })

    inputMess.addEventListener('blur', function() {
        noMoreSpace(inputMess);
        noMoreHyphen(inputMess);

    })

    emails.forEach(item => {
        item.addEventListener('input', function(e) {
            e.target.value = e.target.value.replace(/[^a-zA-Z0-9\@\-\_\.\!\~\*\']/g, '');
            let email = item.value;
            let goodMail = /[a-zA-Z0-9\-\_\.\!\~\*\']+\@[a-z]+\.[a-z]+/g
        
            if (e.target.value.length < 5 || !goodMail.test(email)) {
                item.style.border = '3px solid red'
            } else {
                item.style.border = ''
            }
        })
    })

    emails.forEach(item => {
        item.addEventListener('blur', function() {
            noMoreHyphen(item);
        })
    })

    tels.forEach(item => {
        item.addEventListener('input', function(e) {
            e.target.value = e.target.value.replace(/[^0-9\(\)\-\+]/g, '');
            let number = item.value;
            let onlyNumbers = number.split('').filter(symbol => Number.isInteger(+symbol));
            if(onlyNumbers.length < 11) {
                item.style.border = '3px solid red'
            } else {
                item.style.border = ''
            }
        })
    })

    tels.forEach(item => {
        item.addEventListener('blur', function() {
           noMoreHyphen(item);
        })
    })
}

export default validation;