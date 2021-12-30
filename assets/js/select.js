let select = function () {
        let selectHeader = document.querySelectorAll
        ('.navigation__header')
    let selectItem = document.querySelectorAll('.navigation');
    let selectBlock = document.querySelectorAll('.navigation__body .navigation');
    let row = document.querySelector('.row_nav')
    selectHeader.forEach(item => {
        item.addEventListener('click', function (){

            this.parentElement.classList.toggle('is-active')
        })})

    selectItem.forEach(item => {
        item.addEventListener('click', selectChoose)})



    const actives = document.getElementsByClassName('active__nav');
    for ( let i = 0; selectBlock.length > i; i++) {
        selectBlock[i].onclick = function() {
            const currentActive = actives[0];
            if (currentActive)
                currentActive.classList.remove("active__nav");

            if (currentActive !== this)
                this.classList.add("active__nav");
        };
    }
    // for (var i = 0; i < selectBlock.length; i++) {
    //     selectBlock[i].addEventListener("click", function() {
    //         var current = document.getElementsByClassName("active");
    //         current[0].className = current[0].className.replace(" active", "");
    //         this.className += " active";
    //     });
    // }

    function selectChoose() {
        let text = this.innerHTML;
        let currentText = this.closest('.row_nav')
        .querySelector('.navigation__select')
        currentText.focus();
        currentText.innerHTML = text;
        row.classList.remove('is-active')



        }




}
select();