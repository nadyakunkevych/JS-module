// 1. Знайти та вивести довижину настипних стрінгових значень
// 'hello world', 'lorem ipsum', 'javascript is cool'

    let str1 = "hello world";
        console.log(str1.length);

    let str2 = "lorem ipsum";
        console.log(str2.length)

    let str3 = "java script is cool";
    console.log(str3.length)



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

// 7. Напишіть функцію insert_dash(str), яка приймає рядок str як аргумент і вставляє тире (-) між словами.
// При цьому всі символи рядка необхідно перевести у верхній регістр.
//     let str = "HTML JavaScript PHP";
//     document.writeln(insert_dash(str)); // 'HTML-JAVASCRIPT-PHP'

    // let str = "HTML JavaScript PHP";
    // let insert_dash = str.substr(0, 4) + "-" + str.substr(5,10) +"-" + str.substr(15, 10)
    //

    let insert_dash = (str) => {
    let addDash = str.split(" ").join("-").toUpperCase();
     return addDash;
}
    let str = "HTML JavaScript PHP";
    console.log(insert_dash(str));



//
// 8.Напишіть функцію, яка приймає рядок як аргумент і перетворює регістр першого символу рядка з нижнього регістру у верхній.
// //
//     let acceptStr = (str) => {
//     return str[0].toUpperCase() + str.slice(1)
//     }
//     console.log(acceptStr("lecture 6 is dedicated to string and array methods"))


// 9. Напишіть функцію capitalize(str), яка повертає рядок, у якому кожне слово починається з великої літери.
//
    let capitalize = (str) => {
    return str.split(" ").map(word => word.charAt(0).toUpperCase()+word.slice(1)).join(" ");
    }
    console.log(capitalize("happy thanksgiving to you and your loved ones!"))

