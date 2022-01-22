let navigationItem = document.querySelectorAll('.navigation__block');


const link__min = document.getElementById("btn__minimal")
const link__stan = document.getElementById("btn__standart")
const link__vip = document.getElementById("btn__vip")

    navigationItem.forEach((item,i) => {
    item.addEventListener('click', function () {

        if(item.classList.contains('navigation__block-month')){
            //////////minimal///////////////////
            document.querySelector('.subscription__price--minimal').textContent = '5 $';
            document.querySelector('.blue__minimal').textContent = '';
            document.querySelector('.total__price--minimal').textContent = '205 $';
            //////////standart///////////////////
            document.querySelector('.subscription__price--standart').textContent = '10 $';
            document.querySelector('.blue__standart').textContent = '';
            document.querySelector('.total__price--standart').textContent = '260 $';
            //////////vip///////////////////
            document.querySelector('.subscription__price--vip').textContent = '20 $';
            document.querySelector('.blue__vip').textContent = '';
            document.querySelector('.total__price--vip').textContent = '270 $';
            document.querySelector('.discount__price--vip').textContent = '0';
            document.querySelector('.discount__price--standart').textContent = '0';
            document.querySelector('.discount__price--minimal').textContent = '0';

            link__min.href = 'https://secure.wayforpay.com/button/b0219fcb62865'
            link__stan.href = 'https://secure.wayforpay.com/button/b9162d6536840'
            link__vip.href = 'https://secure.wayforpay.com/button/bcc85742109ab'


        }
        else if(item.classList.contains('navigation__block-month-select')) {
            //////////minimal by select///////////////////
            document.querySelector('.subscription__price--minimal').textContent = '5 $';
            document.querySelector('.blue__minimal').textContent = '';
            document.querySelector('.total__price--minimal').textContent = '205 $';
            document.querySelector('.discount__price--vip').textContent = '0';
            document.querySelector('.discount__price--standart').textContent = '0';
            document.querySelector('.discount__price--minimal').textContent = '0';
            link__min.href = 'https://secure.wayforpay.com/button/b0219fcb62865'
            link__stan.href = 'https://secure.wayforpay.com/button/b9162d6536840'
            link__vip.href = 'https://secure.wayforpay.com/button/bcc85742109ab'
        }
        else if(item.classList.contains('navigation__block-years')){
            //////////minimal///////////////////
            document.querySelector('.subscription__price--minimal').textContent = '4.25 $';
            document.querySelector('.blue__minimal').textContent = '5 $';
            document.querySelector('.total__price--minimal').textContent = '251 $';
            //////////standart///////////////////
            document.querySelector('.subscription__price--standart').textContent = '8.50 $';
            document.querySelector('.blue__standart').textContent = '10 $';
            document.querySelector('.total__price--standart').textContent = '352 $';
            //////////vip///////////////////
            document.querySelector('.subscription__price--vip').textContent = '17 $';
            document.querySelector('.blue__vip').textContent = '20 $';
            document.querySelector('.total__price--vip').textContent = '454 $';
            document.querySelector('.discount__price--vip').textContent = '3 $';
            document.querySelector('.discount__price--standart').textContent = '1,5 $';
            document.querySelector('.discount__price--minimal').textContent = '0,75 $';
            link__min.href = 'https://secure.wayforpay.com/button/be876b918d414'
            link__stan.href = 'https://secure.wayforpay.com/button/ba95b7bfe5e7b'
            link__vip.href = 'https://secure.wayforpay.com/button/badab653b96a9'



        }
        else if(item.classList.contains('navigation__block-two-years')) {
            //////////minimal///////////////////
            document.querySelector('.subscription__price--minimal').textContent = '3.75 $';
            document.querySelector('.blue__minimal').textContent = '5 $';
            document.querySelector('.total__price--minimal').textContent = '290 $';
            //////////standart///////////////////
            document.querySelector('.subscription__price--standart').textContent = '7.50 $';
            document.querySelector('.blue__standart').textContent = '10 $';
            document.querySelector('.total__price--standart').textContent = '430 $';
            //////////vip///////////////////
            document.querySelector('.subscription__price--vip').textContent = '15 $';
            document.querySelector('.blue__vip').textContent = '20 $';
            document.querySelector('.total__price--vip').textContent = '610 $';
            document.querySelector('.discount__price--vip').textContent = '5 $';
            document.querySelector('.discount__price--standart').textContent = '2,5 $';
            document.querySelector('.discount__price--minimal').textContent = '1,25 $';
            link__min.href = 'https://secure.wayforpay.com/button/bf0027f51d0a8'
            link__stan.href = 'https://secure.wayforpay.com/button/be166d92f73d0'
            link__vip.href = 'https://secure.wayforpay.com/button/b0244b4100877'

        }
        else if(item.classList.contains('navigation__block-three-years')) {
            //////////minimal///////////////////
            document.querySelector('.subscription__price--minimal').textContent = '3.25 $';
            document.querySelector('.blue__minimal').textContent = '5 $';
            document.querySelector('.total__price--minimal').textContent = '317 $';
            //////////standart///////////////////
            document.querySelector('.subscription__price--standart').textContent = '6.50 $';
            document.querySelector('.blue__standart').textContent = '10 $';
            document.querySelector('.total__price--standart').textContent = '484 $';
            //////////vip///////////////////
            document.querySelector('.subscription__price--vip').textContent = '13 $';
            document.querySelector('.blue__vip').textContent = '20 $';
            document.querySelector('.total__price--vip').textContent = '718 $';
            document.querySelector('.discount__price--vip').textContent = '7 $';
            document.querySelector('.discount__price--standart').textContent = '3,5 $';
            document.querySelector('.discount__price--minimal').textContent = '1,75 $';
            link__min.href = 'https://secure.wayforpay.com/button/b619b74428f7c'
            link__stan.href = 'https://secure.wayforpay.com/button/b06618abd62de'
            link__vip.href = 'https://secure.wayforpay.com/button/bdc9ef2d67194'

        }
        else if(item.classList.contains('navigation__block-four-years')) {
            //////////minimal///////////////////
            document.querySelector('.subscription__price--minimal').textContent = '2.50 $';
            document.querySelector('.blue__minimal').textContent = '5 $';
            document.querySelector('.total__price--minimal').textContent = '320 $';
            //////////standart///////////////////
            document.querySelector('.subscription__price--standart').textContent = '5 $';
            document.querySelector('.blue__standart').textContent = '10 $';
            document.querySelector('.total__price--standart').textContent = '490 $';
            //////////vip///////////////////
            document.querySelector('.subscription__price--vip').textContent = '10 $';
            document.querySelector('.blue__vip').textContent = '20 $';
            document.querySelector('.total__price--vip').textContent = '730 $';
            document.querySelector('.discount__price--vip').textContent = '10 $';
            document.querySelector('.discount__price--standart').textContent = '5 $';
            document.querySelector('.discount__price--minimal').textContent = '2,5 $';
            link__min.href = 'https://secure.wayforpay.com/button/bd1b2c989587e'
            link__stan.href = 'https://secure.wayforpay.com/button/bf90ceeb48aef'
            link__vip.href = 'https://secure.wayforpay.com/button/beb1fee5cde0f'
        }


    })
})