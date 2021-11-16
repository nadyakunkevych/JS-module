// 1. створити масив з:
//     - з 5 числових значень
// - з 5 стічкових значень
// - з 5 значень стрічкового, числового та булевого типу
// - та вивести його в консоль

    // let number = [5, 7, 10, 17, 23];
    // console.log(number);
    //
    // let strings = ["item1", "item2", "item3", "item4", "item5"];
    // console.log(strings);
    //
    // let all = ["currency", 100, 200, 200 < 100, 100 < 300];
    // console.log(all)
    //

    // 2. -- Створити пустий масив. Наповнити його будь-якими значеннями звертаючись до конкретного індексу. Вивести в консоль
//
//     let holidays = [];
//     holidays[0] = "Christmas";
//     holidays[1] = "New Year";
//     holidays[2] = "Easter";
//     holidays[3] = "St. Nicholas' Day";
//     holidays[4] = "Thanksgiving"
//     console.log(holidays)

    // let holidays = ["Christmas", "New Year", "Easter", "Thanksgiving", "Halloween"]
    // console.log(holidays[1])

// 3.- За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом всередині
// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом і індексом всередині
// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом всередині.
// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом і індексом всередині.

    // for(let i = 0; i < 10; i++)
    //     document.write("<div>November 17th</div>")
    // }
    // for(let i = 1; i <= 10; i++) {
    //     document.write(`<div> week ${i} </div>`)
    // }

    //
    // let i = 1;
    // while(i <= 20) {
    //     document.write(`<h1> Happy International Students' Day on November 17th! </h1>`)
    //     i++;
    // }

    // let i = 1;
    // while(i <= 20) {
    //     document.write(`<h1> celebration ${i}</h1>`)
    //     i++;
    // }

// 4.- Створити масив з 10 числових елементів. Вивести в консоль всі його елементи в циклі.
// - Створити масив з 10 строкрових елементів. Вивести в консоль всі його елементи в циклі.
// - Створити масив з 10 елементів будь-якого типу. Вивести в консоль всі його елементи в циклі.
// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки булеві елементи
// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки числові елементи
// - Створити масив з 10 елементів числового, стрічкового і булевого типу. За допомогою if та typeof вивести тільки рядкові елементи


    // let num = [3, 7, 5, 4, 9, 10, 11, 20, 25, 30];
    // for(let i = 0; i < 10; i++) {
    // console.log(num[i])
    // }
    //
    // let months = ["June", "July", "August", "September", "October", "November", "December", "January", "February", "April"]
    // for(let i = 0; i < 10; i++) {
    // console.log(months[i])
    // }
    //
    // let booleans = [1<2, 1===0, 2>1, 2===4, 3>2, 10<5, 5===5, 6<3, 3===3, 1<0];
    // for(let i = 0; i < 10; i++) {
    //     console.log(booleans[i])
    // }
    //

//     let all = [1, 2, 3, "text1", "text2", "text3", 5===5, 10<5, 1===1, 3<2];
//     for (let i = 0; i < all.length; i++) {
//         if (typeof all[i] === "boolean") {
//             console.log(all[i]);
//         }
//
//
// // }
//
//     let all = [1, 2, 3, "text1", "text2", "text3", 5===5, 10<5, 1===1, 3<2];
//     for(let i = 0; i < 10; i++)  {
//         if(typeof all[i] === "number") {
//             console.log(all[i])
//         }
//
//     }

    // let all = [1, 2, 3, "text1", "text2", "text3", 5===5, 10<5, 1===1, 3<2];
    // for(let i = 0; i < all.length; i++) {
    //     if(typeof all[i] === "string") {
    //         console.log(all[i])
    //     }
    // }

//
// 5.- Створити порожній масив. Наповнити його 10 елементами (різними за типами) через звернення до конкретних індексів. Вивести в консоль всі його елементи в циклі.
// - Створити цикл for на 10  ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
// - Створити цикл for на 100 ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
// - Створити цикл for на 100 ітерацій з кроком 2. Вивести поточний номер кроку через console.log та document.write
// - Створити цикл for на 100 ітерацій. Вивести тільки парні кроки. через console.log + document.write
// - Створити цикл for на 100 ітерацій. Вивести тільки непарні кроки. через console.log + document.write

    // let empty = [];
    // empty [0] = -10;
    // empty [1] = 2;
    // empty [2] = -1;
    // empty [3] = "text1"
    // empty [4] = "text2"
    // empty [5] = "text3"
    // empty [6] = 10 === 10;
    // empty [7] = 10 < 5;
    // empty [8] = 5 !== 10;
    // empty [9] = 17;
    //
    // for(let i = 0; i < empty.length; i++) {
    //     console.log(empty[i])
    // }
    //
//
// for (let i = 1; i <= 10; i++) {
//     console.log("current cycle number : " + i + " ");
//     document.write("current cycle number : " + i + " ")
//
// // }
//     for (let i = 1; i <= 100; i++) {
//     console.log("cycle : " + i + " ");
//     document.write("cycle : " + i + " ")
//
// }

    // for (let i = 1; i <= 100; i+=2) {
    // console.log("cycle : " + i + " ");
    //     document.write("cycle : " + i + " ")
    //
    // }
    //

    // for (let i = 1; i <= 100; i++) {
    //     if (i % 2 === 0) {
    //         console.log("cycle : " + i + " ");
    //         document.write("cycle : " + i + " ")
    //
    //     }
    // }

    for(let i = 1; i<= 100; i++) {
        if(i % 2 !== 0) {
            console.log("cycle : " + i + " ")
            document.write("cycle : + i + " )
        }
    }