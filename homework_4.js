// 1. Створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
//
//     function s (a, b) {
//     return a * b;
//     }
//     console.log(s(4, 6));  - цей запис вірний? Моя первісна думка була, що так має бути
//
// or:
//
//     function rectangle (a, b) {
//     let s = a * b;
//     return s;
//     }
//     console.log(rectangle(4, 6))


   // 2. Створити функцію яка обчислює та повертає площу кола з радіусом r

    // function s (Pi, r) {
    //     return Math.PI*Math.pow(r,2);
    // }
    // console.log(s(3.14,4));

 // or:

    // function s (Pi, r) {
    // let circle = Math.PI*Math.pow(r,2);
    // return circle;
    // }
    // console.log(s(3.14, 4))
    //
    //

// 3. Створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r

    // function  s (r, h) {
    //     return 2*Math.PI*r*h;
    // }
    // console.log(s(4, 6))

// or:

    // function s (r, h) {
    // let cylinder = 2*Math.PI*r*h;
    // return cylinder;
    // }
    // console.log(s(4, 6))

// 4. Створити функцію яка приймає масив та виводить кожен його елемент

    // let array = ["Ukraine", "Turkey", "France", "Germany"];
    // function arr (array) {
    //     for (let i = 0; i < array.length; i++) {
    //
    //     }
    // }
    // console.log(array[0]);
    // console.log(array[1]);
    // console.log(array[2]);
    // console.log(array[3])

// 5. Створити функцію яка створює параграф з текстом. Текст задати через аргумент


//     function paragraph (text) {
//     document.write(`<p>${text}</p>`);
//
// }
//     paragraph("Welcome to Okten :)");


// 6. Створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
//         function ul (days) {
//         document.write(`<ul>`)
//             document.write(`<li> ${days} </li>`);
//             document.write(`<li> ${days} </li>`);
//             document.write(`<li>${days}</li>`);
// }
//         document.write(`</ul>`);
//
//         ul("Homework")
//
//     function ul (days) {
//         document.write(`<li> ${days} </li>`);
//             document.write(`<li> ${days} </li>`);
//             document.write(`<li>${days}</li>`);
//     }
//
//         ul("Homework") - а такий запис прийнятний?

// 7. Створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)

    //
    // function ul (text, number) {
    //     document.write(`<ul>`)
    //     for (let i = 0; i < number; i++) {
    //         document.write(`<li>${text}</li>`)
    //     }
    //     document.write(`</ul>`)
    //
    //         }
    //  ul("classwork", 3)
    //
    //


// 8. Створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список

    // let arr = [3, "text", true];
    // function elements (array) {
    // document.write(`<ul>`)
    //     document.write(`<li>${array}</li>`);
    //     document.write(`<li>${array}</li>`);
    //     document.write(`<li>${array}</li>`);
    // }
    // document.write(`</ul>`)
    // elements(arr)

// 9. Створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ.
// Для кожного об'єкту окремий блок.


    // let array = [
    //     {id: 1, name: "Nancy", age: 25 },
    //     {id: 2, name: "Christopher", age: 20 },
    //     {id: 3, name: "Tom", age: 35 },
    //     {id: 4, name: "Dan", age: 40 } ]
    //
    // function elements (arr) {
    //     for (const arrayObject of arr) {
    //         document.write(`<div>${arrayObject.id}. ${arrayObject.name} - ${arrayObject.age}</div>`)
    //
    //     }
    // }
    // elements(array)
