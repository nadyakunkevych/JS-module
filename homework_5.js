
// 1. Створити функцію яка обчислює та повертає площу прямокутника висотою

// let rectangle = (a, b) => a * b;
// console.log(rectangle(4, 6))

// 2. Створити функцію яка обчислює та повертає площу кола

// let s = (Pi, r) => Math.PI*Math.pow(r,2);
//
// console.log(s(3.14, 4))

// 3. Створити функцію яка обчислює та повертає площу циліндра
//
// let s = (r, h) => 2*Math.PI*r*h;
// console.log(s(4, 6))

// 4. створити функцію яка приймає масив та виводить кожен його елемент

let elements = [{country: "Ukraine", capital: "Kyiv", area: 604}]

for (const element of elements) {
    if(element.country === "Ukraine" && element.capital === "Kyiv" && element.area === 604) {
       elements.push(element)
    }
}
console.log(elements)
