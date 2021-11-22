
// 2. створити функцію  яка приймає два масиви та скаладає значення елементів з однаковими індексами  та повертає новий результуючий масив.
//     EXAMPLE:
// [1,2,3,4]
//     [2,3,4,5]
// результат
//     [3,5,7,9]


    //     function bothArr (array1, array2) {
    //         let total = [];
    //         for (let i = 0; i < array1.length; i++) {
    //                 total.push(array1[i] + array2[i])
    //
    //             }
    //         return total;
    //
    //     }
    // document.write(bothArr([1,2,3,4],[2,3,4,5]))


//
// 3. Створити функцію яка приймає масив будь яких объектів, та повертає масив ключів всіх обєктів
// EXAMPLE:
//     [{name: 'Dima', age: 13}, {model: 'Camry'}]  ===> [ name, age, model ]



array = [{name: "Dima", age: 13}, {model: "Camry"}];
    function arr (any) {
        for (const user of any) {
            for (const userElement in user) {
                if(user.name === "Dima") {
                    any.push(user)
                }

            }
        }


    }
    console.log(arr.name)







