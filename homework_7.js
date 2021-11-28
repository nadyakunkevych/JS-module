// 1. Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
// створити пустий масив, наповнити його 10 об'єктами new User(....)

//     function User(id, name, surname, email, phone) {
//     this.id = id,
//     this.name = name,
//     this.surname = surname,
//     this.email = email,
//     this.phone = phone
//
// }
//
//     let array = [
//     new User(1, "Nadya", "Kunkevych", "nadyakunkevych@gmail.com", 981002900),
//     new User ("2", "Nancy", "Macdonald", "nancy12@yahoo.com", 98188820),
//     new User("3", "Steve", "Finsterle", "steve1220@icloud.com", 990287620),
//     new User("4", "Mary", "Lee", "mary0@ukr.net", 990287620),
//         new User("5", "Nicole", "Harrison", "nicole.harr@gmail.com", 990976299),
//         new User("6", "Stephen", "Johns", "steven.j@gmail.com", 6544946299),
//         new User("7", "Nicholas", "Sparks", "nicholaaas@yahoo.com", 7754373299),
//         new User("8", "Jane", "London", "janelondon@gmail.com", 1092736299),
//         new User("9", "Chris", "Rogers", "christyro@gmail.com", 7765401290),
//         new User("10", "Linda", "Haskins", "linda.hasss@gmail.com", 8753596299),
//
// ]
// console.log(array)


//
// 2. Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)


//
//     function User(id, name, surname, email, phone) {
//     this.id = id,
//     this.name = name,
//     this.surname = surname,
//     this.email = email,
//     this.phone = phone
//
// }
// let array = [
//     new User(1, "Nadya", "Kunkevych", "nadyakunkevych@gmail.com", 981002900),
//     new User (2, "Nancy", "Macdonald", "nancy12@yahoo.com", 98188820),
//     new User(3, "Steve", "Finsterle", "steve1220@icloud.com", 990287620),
//     new User(4, "Mary", "Lee", "mary0@ukr.net", 990287620),
//         new User(5, "Nicole", "Harrison", "nicole.harr@gmail.com", 990976299),
//         new User(6, "Stephen", "Johns", "steven.j@gmail.com", 6544946299),
//         new User(7, "Nicholas", "Sparks", "nicholaaas@yahoo.com", 7754373299),
//         new User(8, "Jane", "London", "janelondon@gmail.com", 1092736299),
//         new User(9, "Chris", "Rogers", "christyro@gmail.com", 7765401290),
//         new User(10, "Linda", "Haskins", "linda.hasss@gmail.com", 8753596299),
// ]
//
// let filter = array.filter((value) => {
//     if(value.id % 2 === 0) {
//         return value.id
//     }
// })
// console.log(filter)
//




// 3. Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)

//
//     function User(id, name, surname, email, phone) {
//     this.id = id,
//     this.name = name,
//     this.surname = surname,
//     this.email = email,
//     this.phone = phone
//
// }
// let array = [
//     new User(1, "Nadya", "Kunkevych", "nadyakunkevych@gmail.com", 981002900),
//     new User (2, "Nancy", "Macdonald", "nancy12@yahoo.com", 98188820),
//     new User(3, "Steve", "Finsterle", "steve1220@icloud.com", 990287620),
//     new User(4, "Mary", "Lee", "mary0@ukr.net", 990287620),
//         new User(5, "Nicole", "Harrison", "nicole.harr@gmail.com", 990976299),
//         new User(6, "Stephen", "Johns", "steven.j@gmail.com", 6544946299),
//         new User(7, "Nicholas", "Sparks", "nicholaaas@yahoo.com", 7754373299),
//         new User(8, "Jane", "London", "janelondon@gmail.com", 1092736299),
//         new User(9, "Chris", "Rogers", "christyro@gmail.com", 7765401290),
//         new User(10, "Linda", "Haskins", "linda.hasss@gmail.com", 8753596299),
// ]
//
//    let sort = array.sort((u1, u2) => (u1.id - u2.id));
//     console.log(sort)


// 4. створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
//
//     class Client {
//         constructor(id, name, surname, email, phone, order) {
//                 this.id = id;
//                 this.name = name;
//                 this.surname = surname;
//                 this.email = email;
//                 this.phone = phone;
//                 this.order = order;
//
//         }
//     }
// // створити пустий масив, наповнити його 10 об'єктами Client
//
// let arr = [
//         new Client (1, "Nadya", "Kunkevych", "nadyakunkevych@gmail.com", 981002900, 8),
//         new Client (2, "Nancy", "Macdonald", "nancy12@yahoo.com", 98188820, 2),
//         new Client(3, "Steve", "Finsterle", "steve1220@icloud.com", 990287620, 6),
//         new Client(4, "Mary", "Lee", "mary0@ukr.net", 990287620, 10),
//         new Client(5, "Nicole", "Harrison", "nicole.harr@gmail.com", 990976299, 5),
//         new Client (6, "Stephen", "Johns", "steven.j@gmail.com", 6544946299, 3),
//         new Client (7, "Nicholas", "Sparks", "nicholaaas@yahoo.com", 7754373299, 1),
//         new Client (8, "Jane", "London", "janelondon@gmail.com", 1092736299, 4),
//         new Client (9, "Chris", "Rogers", "christyro@gmail.com", 7765401290, 7),
//         new Client (10, "Linda", "Haskins", "linda.hasss@gmail.com", 8753596299, 9)
//     ]
//
// console.log(arr)
//
//
// // 5. Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)
//
//     let sort = arr.sort((a, b) => (a.order - b.order));
//     console.log(sort)
