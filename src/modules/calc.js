const calc = (price = 100) => {
    const calcBlock = document.querySelector('.calc-block');
    const calcType = document.querySelector('.calc-type');
    const calcSquare= document.querySelector('.calc-square');
    const calcCount = document.querySelector('.calc-count');
    const calcDay = document.querySelector('.calc-day');
    const total = document.querySelector('#total');

    const countCalc = () => {
        const calcTypeValue = +calcType.options[calcType.selectedIndex].value;
        const calcSquareValue = calcSquare.value;

        let totalValue = 0;
        let calcCountValue = 1;
        let calcDayValue = 1;

        if (calcCount.value > 1) {
            calcCountValue +=  +calcCount.value / 10
        }

        if (calcDay.value && calcDay.value < 5) {
            calcDayValue = 2;
        } else if (calcDay.value && calcDay.value < 10) {
            calcDayValue = 1.5;
        }
        
        if(calcTypeValue && calcSquareValue) {
            totalValue = price * calcTypeValue * calcSquareValue * calcCountValue * calcDayValue;
        } else {
            totalValue = 0;
        }
    
        const animateNumbers = (result) => {
            let timer;
            if(timer) {
                clearInterval(timer);
                animateNumbers(result)
            } else {
                if (result === 0) return;
                let start = +total.textContent;
                let increment;
                if (result > start) {
                    increment = 1 
                } else if (result < start) {
                    increment = -1
                } else if (result === start) {
                    return
                }
        
                let current = start;
                timer  = setInterval(function() {
                current += increment;
                total.textContent = current;
                    if (current === result) {
                        clearInterval(timer);
                    }
                }, 0.0001)
            }    
        }

        animateNumbers(totalValue)
    }

    calcBlock.addEventListener('change', (e) => {
        if (e.target === calcType || e.target === calcSquare ||
            e.target === calcCount || e.target === calcDay) {
                countCalc();
            }
    })
}

export default calc