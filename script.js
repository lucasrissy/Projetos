let num = document.getElementById('inputFirst');
let celsius= document.getElementById('celsiusFisrt');
let fahrenheit= document.getElementById('fahrenheitFirst');
let kelvin= document.getElementById('kelvinFirst');
let celsiusAnswer= document.getElementById('celsiusSecond');
let fahrenheitAnswer= document.getElementById('fahrenheitSecond');
let kelvinAnswer= document.getElementById('kelvinSecond');
let arrayConvert=[];

//criando um evento de click que vai chamar a função para submter as informações

document.getElementById('submit').addEventListener("click", validationForm);

function validationForm(){
    if(num.value == "" || (celsius.checked == false && fahrenheit.checked == false && kelvin.checked == false)){
        window.alert("Todos os campos devem ser preenchidos");
        document.getElementById('submit').removeEventListener('click',incrementArray )
    } else{
        incrementArray()
    }
}
function incrementArray(){
    let arrayConvert = [num.value]
    if(celsius.checked){
        arrayConvert.push('celsius');
    }else if(fahrenheit.checked){
        arrayConvert.push('fahrenheit');
    }else if(kelvin.checked){
        arrayConvert.push('kelvin');
    }   
    console.log(arrayConvert[1])
    if(celsiusAnswer.checked){
        arrayConvert.push('celsius');
    }else if (fahrenheitAnswer.checked){
        arrayConvert.push('fahrenheit');
    }else if (kelvinAnswer.checked){
        arrayConvert.push('kelvin')
    }
    console.log(arrayConvert[2])
    console.log(arrayConvert)
    secondValidationForm();
}  
function secondValidationForm(){

    if(arrayConvert[1] === arrayConvert[2]){
        window.alert("Não é possível converter para a mesma unidade");
        document.getElementById('submit').removeEventListener('click',incrementArray );
    }else{
        toConvert();
    }
             
}
    

function toConvert(){
    
    

    arrayConvert[1] == "celsius" && arrayConvert[2] == "kelvin" ? result = num + 273.15 :
    arrayConvert[1] == "kelvin" && arrayConvert[2] == "celsius" ? result = num - 273.15 :""
    
}