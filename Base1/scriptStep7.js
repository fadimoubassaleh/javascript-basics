var Shoe = document.getElementById('shoe_size')
var Year = document.getElementById('year')
var Button = document.getElementById('validate')

function getMath(){
    // var result = (((Shoe.value * 2) + 5) * 50) - Year.value + 1766;
    
    var result = Shoe.value * 2
    console.log(result)
    result += 5
    console.log(result)
    result *= 50
    console.log(result)
    result -= Year.value
    console.log(result)
    result += 1766
    console.log(result)
    alert(result)
}

Button.addEventListener('click', getMath)