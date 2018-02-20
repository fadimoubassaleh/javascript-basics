var first = document.getElementById('first_number')
var second = document.getElementById('second_number')
var Button = document.getElementById('validate')


Button.addEventListener('click', getResult)

function getResult(){
    var result = first.value % second.value;

    alert(result)
    
}