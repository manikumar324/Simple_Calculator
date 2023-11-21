let buttons=document.getElementsByTagName("button")

let result=document.getElementById("result")

for(i=0;i<buttons.length;i++){
    buttons[i].onclick=function(){
        let input=this.innerText;
        resultDisplay(input)
    }
}

function resultDisplay(input){
    let currentValue=result.innerText;
    if(currentValue == "0"){
        if(input!="AC" && input!="="){
            result.innerText=""
            result.innerText=input;
        }
    }
    else{

        if(input == "AC"){
            result.innerText=""
        }
        if(input!="AC" && input!="="){
            result.innerText=result.innerText+input;
        }
        if(input == "="){
            let display=result.innerText;
            result.innerText=eval(display)
        }
    }
}