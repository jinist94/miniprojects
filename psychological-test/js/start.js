const main = document.querySelector("#main");
const qna = document.querySelector("#qna");
const result = document.querySelector("#result");
const qCount = 12;
let select = [0,0,0,0,0,0,0,0,0,0,0,0];



function calResult(){
    const resultValue = select.indexOf(Math.max(...select));
    return resultValue;
}

function setResult(){
    const resultValue = calResult();
    const resultName = document.querySelector(".resultName");
    resultName.innerHTML = infoList[resultValue].name;
    const resultDesc = document.querySelector(".resultDesc");
    resultDesc.innerHTML = infoList[resultValue].desc;
    const imgDiv = document.querySelector("#resultImg");
    const resultImg = document.createElement("img");
    const imgUrl = `./img/image-${resultValue}.png`;
    resultImg.src= imgUrl;
    imgDiv.appendChild(resultImg);
}

function goResult(){
    qna.style.WebkitAnimation = "fadeOut 1s";
    qna.style.Animation = "fadeOut 1s";
    setTimeout(()=>{
        result.style.WebkitAnimation = "fadeIn 1s";
        result.style.Animation = "fadeIn 1s";
        setTimeout(()=>{
            qna.style.display ="none";
            result.style.display ="block";
            result.classList.remove("fixed");
        }, 450);
    },450)
    setResult();
}

function addAnswer(answerText, qIdx, aIdx){
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

            let target = qnaList[qIdx].a[aIdx].type;
            for(let i=0; i<target.length; i++){
                select[target[i]] += 1;
            }

            for(let i = 0; i< child.length; i++){
                child[i].style.display = "none";
            }
            goNext(++qIdx);
        },450);
        
    });
}

function goNext(qIdx){
    if(qIdx === qCount){
        goResult();
        return;
    }
    let q = document.querySelector(".qBox");
    let qn = document.querySelector(".qNumber");
    qn.innerHTML = `Q${qIdx+1}.`;
    q.innerHTML = qnaList[qIdx].q;
    for(let i in qnaList[qIdx].a){
        addAnswer(qnaList[qIdx].a[i].answer, qIdx, i);
    }
    let status = document.querySelector(".statusBar");
    status.style.width= (100/qCount) * (qIdx+1) + "%";
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

