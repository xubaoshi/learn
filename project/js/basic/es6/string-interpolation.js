/**
 * Created by xu on 2016/3/2.
 */
// es6 字符串插值

// 多行字符串
// before es6
console.log("string text line 1 \n\
    string text line 2");
// es6
console.log(`string text line 1
    string text line 2`);

// 表达式差补
var a = 5;
var b = 10;
console.log("Fifteen is " + (a + b) + "and \nnot" + (2 * a + b) + ".");

var a = 5;
var b = 10;
console.log(`Fifteen is ${a + b} and \nnot ${a * 2 + 10}`);

// 带标签的模板字符串
var a = 5;
var b = 10;
function tag(strings, ...values) {
    console.log(strings[0]); // "Hello"
    console.log(strings[1]); // "world"
    console.log(values[0]);  //15
    console.log(values[1]);  //50
    return "Bazinga!";
}
tag`Hello ${a + b} world ${a * b}`;

// 原始字符串
function tag(strings, ...values) {
    console.log(strings.raw[0]);   // "string text line 1 \\n string text line 2"
}
tag `string text line 1 \n string text line 2`;

String.raw`Hi\n${2+3}!`; // "Hi\\n5!"

