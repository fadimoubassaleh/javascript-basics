
var stringSize = function (text) {
    return text.length;
}
var replaceCharacterE = function (text) {
    return text.replace('e', ' ');
}
var concatString = function (text1, text2) {
    return text1 = text1.concat(text2);
}
var showChar5 = function (text) {
    return text.charAt(4)
}
var showChar9 = function (text) {
    return text.substring(0,9)
}
var toCapitals = function (text) {
    return text.toUpperCase();
}
var toLowerCase = function (text) {
    return text.toLowerCase();
}
var removeSpaces = function (text) {
    return text.trim();
}
var IsString = function (text) {
    var test = typeof(text);
    if(test == "string"){
        return true;
    }else{
        return false;
    }
}

var getExtension = function (text) {
    var test = text.split('.')
    return test[(test.length - 1)]
}
var countSpaces = function (text) {
    var test = text.match(/ /g);
    return test.length;
}
var InverseString = function (text) {
    var test = text.split("");
    test = test.reverse();
    console.log(test)
    var test1 = "";
    for (i = 0;i < test.length;i++){
        if(test[i] == "'"){
            test[i] = "\\'"
        }
    }
    test2 = test[0]
    test[0] = "'";
    test[0] += test2;

    test[test.length - 1] += "'"

    for (i = 0;i < test.length;i++){
        test1 = test1 + test[i]
        console.log(test1);
    }
    console.log(test1);
}

var power = function (x, y) {
    return Math.pow(x, y)
}
var absoluteValue = function (num) {

}
var absoluteValueArray = function (array) {

}
var circleSurface = function (radius) {

}
var hypothenuse = function (ab, ac) {

}
var BMI = function (weight, height) {

}

var createLanguagesArray = function () {

}

var createNumbersArray = function () {

}

var replaceElement = function (languages) {

}

var addElement = function (languages) {

}

var addNumberElement = function (numbers) {

}

var removeFirst = function (languages) {

}

var removeLast = function (languages) {

}

var convertStrToArr = function (social_arr) {

}

var convertArrToStr = function (languages) {

}

var sortArr = function (social_arr) {

}

var invertArr = function (social_arr){

}
