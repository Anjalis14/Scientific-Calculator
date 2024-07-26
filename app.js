document.addEventListener('DOMContentLoaded', () => { 
    console.log("helloo")
    
    display =document.getElementById('calc-display');
    buttons = document.getElementsByClassName('btn');

    function evaluateResult(){
     console.log("currentValue:" , currentValue)
        const convertValue = currentValue
        .replace("×" , "*")
        .replace("÷" , "/")
        .replace("%" , "*0.01")
        .replace("Cos" , "Math.cos")
        .replace("ln" , "Math.log")
        .replace("π" , "Math.PI")
        .replace("log" , "Math.log10")
        .replace("e" , "Math.E")
        .replace("tan" , "Math.tan")
        .replace("√" , "Math.sqrt")  
        .replace("Sin" , "Math.sin");
        console.log("convertedValue:" , convertValue);

        const result = eval(convertValue);
        currentValue = result.toString();
        display.value = currentValue;
    }
  
    //when button is clicked//
    for(let i=0; i<buttons.length; i++){
        const button = buttons[i];
        button.addEventListener('click' , ()=>{
            const value=button.innerText;  //value inside the button//
           try {
             //operations//
             if(value =="AC"){
                currentValue = "";
                display.value= currentValue;
            } else if(value == "="){
                evaluateResult();
                
            } else if(value =="Mode"){
                currentValue= document.body.classList.add.toggle('dark-mode');
            
            }
            else if(value =="CE"){
                currentValue= currentValue.slice(0,-1);
                display.value=currentValue;
            } 
            else{
             currentValue += value;   //when btn is clicked we are additing it to curentvalue + next value + next ..//
             display.value = currentValue;  //setting value to display which will not change//
            }
           } catch(err){
            
            console.log(err);
            currentValue = "ERROR!"
            display.value= currentValue;
           }

          
        })
    }
 });