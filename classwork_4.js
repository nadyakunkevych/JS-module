// 1. Створити функцію, яка приймає три числа та виводить найменьше. (Без Math.min!)
//     function minNumber (a, b, c) {
//         if (a < b && a < c) {
//             console.log(a)
//         } else if (b < a && b < c) {
//             console.log(b)
//         }
//            else {
//                console.log(c)
//         }
//
//             }
//
//  minNumber(1, 2, 3)

// 2- створити функцію, яка приймає три числа та виводить найбільше. (Без Math.max!)
//     function maxNumber (a, b, c) {
//     if(a > b && a > c) {
//         console.log(a)
//     }
//     else if( b > a && b > c) {
//         console.log(b)
//     }
//     else {
//         console.log(c)
//     }
//     }
//     maxNumber(150, 80, 200)

// 3. Cтворити функцію, яка повертає найбільше число з масиву

    // let numbers = [100, 500, 1000, 50, 200];
    // function arrayMax(arr) {
    //     let max = arr [0];
    //     for(const number of arr) {
    //         if(number > max) {
    //             max = number;
    //         }
    //     }
    //     return max;
    // }
    //
    // document.write(`<p> Maximun value of the analyzed array is <strong> ${arrayMax(numbers)} </strong></p>`)


//  4. створити функцію, яка повертає найменше число з масиву

//     let nums = [1000, 2000, 5000, 200, 500];
//     function array (minValue) {
//     let min = minValue [0];
//     for (const number of minValue) {
//         if(number < min) {
//             min = number;
//         }
//     }
//     return min;
//     }
// document.write(`<p> Minimun value of the analyzed array is <strong> ${array(nums)} </strong></p>`)
//

// 5. створити функцію, яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13

    // function arr (a, b, c) {
    // let sum = a + b + c;
    //     return sum;
    // }
    // console.log( arr(1, 2, 10))


// 6. створити функцію, яка приймає масив чисел та повертає середнє арифметичне його значень.
//     let arr = [1,2,3];
//     function arithmetic (array){
//     let sum = 0;
//     for (const number of array) {
//         sum = number + sum;
//     }
//     return sum/arr.length;
//     }
//     document.write(arithmetic(arr)
// )
//


// 7. створити функцію, яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше (Math використовувати заборонено);

    // let randomNums = [40, 60, 25, 100, 200]
    // function numbers (any) {
    // let min = [0];
    // for (const number of any) {
    //    if (min < number) {
    //        min = number
    //    }
    // }
    // return min;
    // }
    //
    // document.write(numbers(randomNums))


    // function value (number) {
    //     let min = nums [0];
    //     let max = nums[0];
    //     for (const element of nums) {
    //         if (element < min) {
    //             min = element;
    //         }
    //         if (element > max) {
    //             max = element;
    //         }
    //
    //     }
    //     return min;
    // }
    // document.write("Maximum value" + value (10, 50, 28)) - не зовсім зрозуміла, як тут правильно записати, щось не сходиться :(

// 8. створити функцію, яка заповнює масив рандомними числами
// (цей код генерує рандомні числа в діапазоні від 0 до 100 - Math.round(Math.random()*100)) та виводить його.
//
//     function randomNums (array){
//     for(let i = 0; i < 100; i++) {
//         array[i] = Math.round(Math.random()*100)
//     }
//     return array;
//     }
//     document.write(randomNums(50))


// 9. створити функцію яка заповнює масив рандомними числами в діапазоні від 0 до limit. limit - аргумент, який характеризує кінцеве значення діапазону.
//
// function randomLimit (array, limit){
//     for(let i = 0; i < 100; i++) {
//         array[i] = Math.round(Math.random()*limit)
//     }
//     return array;
//     }
//     document.write(randomLimit(20, 100))

// 10. Функція приймає масив та робить з нього новий масив в зворотньому порядку. [1,2,3] -> [3, 2, 1].
//     function backwards (arr) {
//     let val = [];
//         for (let i = arr.length - 1, ri = 0; i >= 0; i--, ri++) {
//
//             val[ri] = val[i];
//         }
//         return newArr;
//         } - під цим завдання ставлю жирний знак ? не зрозуміла взагалі