// var i = 0
// while (i <= 20) {
//     if (i % 2 === 0){
//         console.log(i)
//     }
//    i++
// }

var summ = 0
do {
    var number = +prompt("Введите число")
    if (number >= 0 ){
        summ += number

    }


} while (number >= 0)

console.log(summ)