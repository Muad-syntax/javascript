//fungsi biasa
function sayHello(hello){
    hello = "Hello World"
    return hello
}
document.writeln(sayHello())

// fungsi ekspresi
var sayHay = function(hay){
    hay = "Hello World"
    return hay
}
document.writeln("<br>",sayHay())

// arrow funtion
var fungsiPanah = (yoo) => {
    yoo = "Hello World"
    return yoo
}
document.writeln("<br>",fungsiPanah())
// atau
var oneLineArrowFuntion = () => document.writeln("<br>Hello World")
oneLineArrowFuntion()

// fungsi kontruksi (TIDAK DIREKOMENDASIKAN)
// var functionConstructor = new function("document.writeln('Hello World')")
// functionConstructor()