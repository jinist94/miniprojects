const main = document.querySelector("#main");
const qna = document.querySelector("#qna");


function addAnswer(answerText, qIdx){
    let a = document.querySelector(".answerBox");
    let answer = document.createElement("button");
    a.appendChild(answer);
    answer.innerHTML = answerText;
    answer.classList.add("answerList");
    answer.classList.add("fadeIn");

    answer.addEventListener("click",function(){
        let child = document.querySelectorAll(".answerList");
        for(let i = 0; i < child.length; i++){
            child[i].disabled = true;
            child[i].style.WebkitAnimation = "fadeOut 0.5s";
            child[i].style.Animation = "fadeOut 0.5s";
        }
        setTimeout(()=>{
            for(let i = 0; i< child.length; i++){
                child[i].style.display = "none";
            }
            goNext(++qIdx)
        },450);
        
    })
}

function goNext(qIdx){
    let q = document.querySelector(".qBox");
    let qn = document.querySelector(".qNumber");
    qn.innerHTML = `Q${qIdx+1}.`;
    q.innerHTML = qnaList[qIdx].q;
    for(let i in qnaList[qIdx].a){
        addAnswer(qnaList[qIdx].a[i].answer, qIdx);
    }
}


function begin(){
    main.style.WebkitAnimation = "fadeOut 1s";
    main.style.Animation = "fadeOut 1s";
    setTimeout(()=>{
        qna.style.WebkitAnimation = "fadeIn 1s";
        qna.style.Animation = "fadeIn 1s";
        setTimeout(()=>{
            main.style.display="none";
            qna.style.display="block";
        }, 450);
        let qIdx = 0;
        goNext(qIdx);
    }, 450)

}

