import timer from './modules/timer';
import menu from './modules/menu';
import modal from './modules/modal';
import validation from './modules/validation';
import tabs from './modules/tabs';
import slider from './modules/slider';
import calc from './modules/calc';
import sendForm from './modules/sendForm';

timer('25 march 2022');
menu();
modal();
validation();
tabs();
slider('.portfolio-content', '.portfolio-item');
calc(100);
sendForm({ 
    formId: 'form1', 
    someElem: [
        {
           type: 'block',
           id: 'total' 
        }
    ] })
sendForm({formId: 'form2'})
sendForm({formId: 'form3'})
