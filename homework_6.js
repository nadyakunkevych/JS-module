// 1. Знайти та вивести довижину настипних стрінгових значень
// 'hello world', 'lorem ipsum', 'javascript is cool'

    // let str = "hello world";
    // for(const strElement of str) {
    //     console.log(strElement)
    // }

    // let str = "lorem ipsum";
    // for(const strElement of str) {
    //     console.log(strElement)
    // }

    // let str = "java script is cool";
    // for(const strElements of str) {
    //     console.log(strElements)
    // }

// 2. - Перевести до великого регістру наступні стрінгові значення
// 'hello world', 'lorem ipsum', 'javascript is cool'


    // let str = "hello world";
    // let toUpperCase = str.toUpperCase();
    // console.log(toUpperCase);

    // let str = "lorem ipsum";
    // let toUpperCase = str.toUpperCase();
    // console.log(toUpperCase);

    // let str = "javascript is cool";
    // let toUpperCase = str.toUpperCase();
    // console.log(toUpperCase);

// 3. Перевести до нижнього регістру настипні стрінгові значення
// 'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'
//
//     let str = "HELLO WORLD";
//     let toLowerCase = str.toLowerCase();
//     console.log(toLowerCase)

        // let str = "LOREM IPSUM";
        // let toLowerCase = str.toLowerCase();
        // console.log(toLowerCase);
        //
        // let str = "JAVA SCRIPT IS COOL";
        // let toLowerCase = str.toLowerCase();
        // console.log(toLowerCase)

//  4. Є "брудна" стрінга let str = ' dirty string   '.
//  Почистити її від зайвих пробілів.

    // let str = ' dirty string   ';
    // let trim = str.trim();
    // console.log(trim)

// 5.- Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
//     let str = 'Каждый охотник желает знать';
// let arr = stringToarray(str);
// document.writeln(arr); // ['Каждый', 'охотник', 'желает', 'знать']



    // let stringToarray = (str) => {
    //     return str.split("  ");
    // }
    // let str = 'Каждый охотник желает знать';
    // let arr = stringToarray(str);
    // console.log(arr);
    //
    // document.writeln(arr);

//     6.- Напишіть функцію delete_characters(str, length), яка повертає підрядок, що складається із зазначеної кількості символів.
//     let str = 'Каждый охотник желает знать';
// document.writeln(delete_characters(str, 7)); // Каждый

//     let str = 'Каждый охотник желает знать';
//     let delete_characters = str.slice (0, 7);
//     console.log(delete_characters)
// //

// 7. Напишіть функцію insert_dash(str), яка приймає рядок str як аргумент і вставляє тире (-) між словами. При цьому всі символи рядка необхідно перевести у верхній регістр.
//     let str = "HTML JavaScript PHP";
// document.writeln(insert_dash(str)); // 'HTML-JAVASCRIPT-PHP'

    // let str = "HTML JavaScript PHP";
    // let insert_dash = str.substr(0, 4) + "-" + str.substr(5,10) +"-" + str.substr(15, 10)
    // console.log(insert_dash)

//
// 8.Напишіть функцію, яка приймає рядок як аргумент і перетворює регістр першого символу рядка з нижнього регістру у верхній.
//
//
//
// 9. Напишіть функцію capitalize(str), яка повертає рядок, у якому кожне слово починається з великої літери.