const main = document.querySelector("#main");
const qna = document.querySelector("#qna");
const result = document.querySelector("#result");

const anForm = document.querySelector(".answerForm");
const anInput = anForm.querySelector(".answerInput");
const passBtn = document.querySelector(".passBtn");

const qCount = 10;
let qIdx = 0;
let correctAnswer = ["치킨","라면","족발","비빔밥","백숙","잡채","간장게장","조개","닭발","장어"];
let userAnswer = [];
let corCount=0;


function goResult(){

    const resultName = document.querySelector(".resultName");
    const resultDescBox = document.querySelector(".resultDesc");
    const resultCount = resultDescBox.querySelector(".count");
    const resultDesc = resultDescBox.querySelector("p");

    for(let i=0; i<correctAnswer.length; i++){
        if(correctAnswer[i] == userAnswer[i]){
            corCount++;
        }
    }
    resultCount.innerHTML = `${corCount} / ${qCount}`;

    if(corCount>= 0 && corCount <= 2){
        resultName.innerHTML = infoList[0].name;
        resultDesc.innerHTML = infoList[0].desc;
    }else if(corCount== 3 || corCount == 4){
        resultName.innerHTML = infoList[1].name;
        resultDesc.innerHTML = infoList[1].desc;
    }else if(corCount== 5 || corCount == 6){
        resultName.innerHTML = infoList[2].name;
        resultDesc.innerHTML = infoList[2].desc;
    }else if(corCount== 7 || corCount == 8){
        resultName.innerHTML = infoList[3].name;
        resultDesc.innerHTML = infoList[3].desc;
    }else if(corCount== 9 || corCount == 10){
        resultName.innerHTML = infoList[4].name;
        resultDesc.innerHTML = infoList[4].desc;
    }

    qna.style.WebkitAnimation = "fadeOut 1s";
    qna.style.Animation = "fadeOut 1s";
    setTimeout(()=>{
        result.style.WebkitAnimation = "fadeIn 0.5s";
        result.style.Animation = "fadeIn 0.5s";
        setTimeout(()=>{
            qna.style.display="none";
            result.style.display="block";
        }, 450);
    }, 450)
}


function handleSubmit(event){
    event.preventDefault();
    if(anInput.value == ""){
        alert("답을 입력해주세요");
    }else{
        userAnswer.push(anInput.value)
        anInput.value="";
        goNext(++qIdx);
    }
}

function handlePassBtn(){
    userAnswer.push("");
    anInput.value="";
    goNext(++qIdx);
}

function goNext(qIdx){
    if(qIdx === qCount){
        goResult();
        return;
    }
    let q = document.querySelector(".qBox");
    let qImg = q.querySelector("img");
    q.classList.remove("rightIn");
    anForm.classList.remove("rightIn");
    passBtn.classList.remove("rightIn");
    setTimeout(() => {
        q.classList.add("rightIn");
        anForm.classList.add("rightIn");
        passBtn.classList.add("rightIn");
        qImg.src=`./img/q-img-${qIdx}.jpg`;
    }, 100);

    anForm.addEventListener("submit", handleSubmit);
    passBtn.addEventListener("click", handlePassBtn);

    let status = document.querySelector(".statusBar");
    let statusNum = status.querySelector("span");
    statusNum.innerText=qIdx+1;
    status.style.left= (95/qCount) * (qIdx+1) + "%";
}


function begin(){
    main.style.WebkitAnimation = "fadeOut 1s";
    main.style.Animation = "fadeOut 1s";
    setTimeout(()=>{
        qna.style.WebkitAnimation = "fadeIn 0.5s";
        qna.style.Animation = "fadeIn 0.5s";
        setTimeout(()=>{
            main.style.display="none";
            qna.style.display="block";
        }, 450);
        let qIdx = 0;
        goNext(qIdx);
    }, 450)

}

