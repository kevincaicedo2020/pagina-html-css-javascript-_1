(function(){
    const titleQuestions = [...document.querySelectorAll('.question_title')];

    titleQuestions.forEach(questions=>{
        questions.addEventListener('click', ()=>{
            let heigth = 0;
            let answer = questions.nextElementSibling;
            let addpading = questions.parentElement.parentElement;
            addpading.classList.toggle('question_padding--add');
            questions.children[0].classList.toggle('questions_arrow-rotate');
            if(answer.clientHeight === 0)
            {
                heigth = answer.scrollHeight;
            }
            answer.style.height = `${heigth}px`

        });

    });
})();