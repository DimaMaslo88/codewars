function bmi(weight, height) {
    let index = (weight/height**2);
    if (index <=18.5){
        return ("Underweight");
    }else if(index <=25.0){
        return ("Normal");
    }else if(index <= 30.0){
        return ("Overweight");
    }else if(index > 30){
        return ("Obese");
    }
}