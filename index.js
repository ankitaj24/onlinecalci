let output=document.getElementById('output');
buttons=document.querySelectorAll('button');
let outputValue=' ';
for(item of buttons){
    item.addEventListener('click',(e)=>{
        buttonText=e.target.innerText;
        console.log('Button text is ',buttonText)
        if(buttonText=='X'){
            buttonText='*';
            outputValue += buttonText;
            output.value = outputValue;
        }        
        else if (buttonText=='C'){
            outputValue = "";
            output.value = outputValue;
        }
        else if (buttonText=='='){
            output.value=eval(outputValue);
        }
        else if(buttonText.localeCompare("del")==0)
        {
            output.value=outputValue.substr(0,outputValue.length-1);
            outputValue=output.value;
        }
        else if(buttonText=='%')
        {
            output.value = eval(outputValue+"/100");
        }
        else{
            outputValue += buttonText;
            output.value = outputValue;
        }
    })
}