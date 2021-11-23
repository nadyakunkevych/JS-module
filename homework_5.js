
// 1. Створити функцію яка обчислює та повертає площу прямокутника висотою

// let rectangle = (a, b) => a * b;
// console.log(rectangle(4, 6))

// 2. Створити функцію яка обчислює та повертає площу кола

// let s = (Pi, r) => Math.PI*Math.pow(r,2);
//
// console.log(s(3.14, 4))

// 3. Створити функцію яка обчислює та повертає площу циліндра
// //
// let s = (r, h) => 2*Math.PI*r*h;
// console.log(s(4, 6))

// 4. створити функцію яка приймає масив та виводить кожен його елемент

//
//
// let elements = ["Ukraine", "Turkey", "France", "Germany"];
//
// let acceptElements = (array) => {
//     for(let i = 0; i < array.length; i++) {
//         console.log(array[i])
//     }
// }
//
// acceptElements(elements)

// 5. створити функцію яка  створює параграф з текстом. Текст задати через аргумент

// let paragraph = (text) => {
//    document.write((`<p>${text}</p>`))
// }
//
// paragraph("Hey, you! Welcome to Okten :)")

// 6. створити функцію яка  створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий

    // let elements = (list) => {
    // document.write(`<ul>`)
    //     document.write(`<li>${list}</li>`)
    //     document.write(`<li>${list}</li>`)
    //     document.write(`<li>${list}</li>`)
    //     document.write(`</ul>`)
    // }
    // elements("days")

// 7. створити функцію яка  створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
// //
//     let elements = (list) => {
//     for(let i = 0; i < 10; i++) {
//         document.write(`<ul>`)
//         document.write(`<li>${list}</li>`)
//         document.write(`</ul>`)
//     }
// }
//     elements("days")

// 8.створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список

//     let array = [2, "text", true]
//
//     let elements = (arr) => {
//     for (let i = 0; i < arr.length; i++) {
//             document.write(`<ul>`)
//             document.write(`<li>${arr[i]}</li>`)
//             document.write(`</ul>`)
//         }
//
//
// }
// elements(array)
//




// 9.створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.
//
//     let array = [
//     {id: 1, name: "Nancy", age: 25 },
//     {id: 2, name: "Christopher", age: 20 },
//     {id: 3, name: "Tom", age: 35 },
//     {id: 4, name: "Dan", age: 40 } ]
//
//     let acceptArray = (elements) => {
//     for(const element of elements) {
//         document.write(`<div>${element.id}.  ${element.name} - ${element.age} </div>`)
//     }
//     }
//     acceptArray(array)