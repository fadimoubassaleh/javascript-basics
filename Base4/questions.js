
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
    // for (i = 0;i < test.length;i++){
    //     if(test[i] == "'"){
    //         test[i] = "\\'"
    //     }
    // }
    // test2 = test[0]
    // test[0] = "'";
    // test[0] += test2;

    // test[test.length - 1] += "'"

    for (i = 0;i < test.length;i++){
        test1 = test1 + test[i]
        console.log(test1);
    }
    return(test1);
}

var power = function (x, y) {
    return Math.pow(x, y)
}
var absoluteValue = function (num) {
    if(num < 0){
        return num * -1;
    }else{
        return num
    }
}
var absoluteValueArray = function (array) {
    for(i = 0;i < array.length;i++){
        if(array[i] < 0){
            array[i] *= -1;
        }
    }
    return array;
}
var circleSurface = function (radius) {
    var test = radius / 2;
    test *= test
    test *= 3.14
    test *= 4
    test = Math.round(test)
    console.log(test)
    return Math.round(test)
}
var hypothenuse = function (ab, ac) {
    var test = (ab * ab) + (ac * ac)
    return Math.sqrt(test)
    console.log(test)

}
var BMI = function (weight, height) {
    var test = (weight / (height * height)).toFixed(2)
    return(parseFloat(test))
}

var createLanguagesArray = function () {
    return ["Html","CSS","Java","PHP"]
}
var createNumbersArray = function () {
    return [0,1,2,3,4,5]
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
