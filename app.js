const height = document.querySelector("#height");
const weight = document.querySelector("#weight");

const age = document.querySelector("#age");
const genderMale = document.querySelector("#male");
const genderFemale = document.querySelector("#female");

const result = document.querySelector("#result");
const buttonCalculate = document.querySelector("#calculate  ");
const buttonClear = document.querySelector("#clear  ");

buttonCalculate.addEventListener("click",() => {
 
    const bmi = Number(weight.value)/(Number(height.value)/100)**2;
    const roundedbmi = Math.round(bmi*100)/100;
    console.log(roundedbmi);

    let feedback = "";
    if(roundedbmi < 18.5){
        feedback = `Underweight:BMI ${roundedbmi}🟢`;
    }else if(roundedbmi >= 18.5 && roundedbmi <=24.9){
        feedback = `Normal weight : BMI ${roundedbmi}🟩`;
    }else if(roundedbmi >= 25 && roundedbmi <=29.9){
        feedback = `Over weight : BMI ${roundedbmi}🟡`;
    }else if (roundedbmi >=30){
        feedback = `Obese : BMI ${roundedbmi}🔴`;
    }else{
        feedback = "invalide. Please check your height and weight" ;
    }
    result.innerHTML = feedback;
});

buttonClear.addEventListener("click",() => {
    genderMale.checked = true;
    genderFemale.checked = false;
    age.value = 2;
    height.value = 180;
    weight.value = 65;
    result.innerHTML = "Result";
    // console.log("hello");
})
