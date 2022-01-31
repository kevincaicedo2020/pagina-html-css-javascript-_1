(function(){
    const sliders = [...document.querySelectorAll('.testimony_body')];
    const btnNext = document.querySelector('#after');
    const btnBefore = document.querySelector('#before');
    let value;

    btnBefore.addEventListener('click', ()=>{
        changePosition(1);
    });
    btnNext.addEventListener('click', ()=>{
        changePosition(-1);
    });

    const changePosition = (add)=>{
        const testimony_actual = document.querySelector('.testimony_body--show').dataset.id;
        value = Number(testimony_actual);
        value += add;
        sliders[Number(testimony_actual)-1].classList.remove('testimony_body--show');
        if(value === sliders.length+1 || value === 0){
            value = value === 0? sliders.length : 1;
        }
        sliders[value-1].classList.add('testimony_body--show');
    }; 


})();
