/*
    TASK 1

    Вывести в консоль с помощью цикла  WHILE, все нечетные числа от 30 до 40

*/
let numb = 30;
while (numb < 40){
  if(numb % 2 !==0) {
      console.log(numb);
      numb++;
}
}
console.log('task2');


/*
    TASK 2

    Вывести в консоль с помощью цикла FOR, все четные числа от 70 до 40.
    Первым четным числом должно быть 70. 
    
*/
for (let i = 70; i >= 40; i--) {
    if (i % 2 === 0) {
      console.log(i);
    }
  }
console.log('task3');
/*
    TASK 3

    Переведите цикл FOR из задания 2, в цикл WHILE.  
    
*/
let b = 70;
while (b >= 40) { 
    if (b % 2 === 0) {
  console.log(b);
  b++;
    }
}
console.log('task4')

/*
    TASK 4

    С помощью любого известного Вам цикла из JavaScript, 
    найдите сумму чисел от 1 до 100, и выведите результат в консоль.   
    
*/
let sum = 0;
     for (var s = 0; s <= 100; s++) {
         sum += s;
      }
     console.log(sum); //5050

/*
    TASK 5

    Вывести 10 строчек со смайликом : ':)'. 
    На первой строчке один смайлик, на второй два,и так далее. 
    На последней должно быть 10 смайликов.   
    
*/
let linesNum=10;
let line= ':)';
let subpower=1;
while (subpower<=linesNum) {line+=':)';document.write(line+ ':)' );subpower++;}

/*
    TASK 6

    Напишите программу, которая выводит на экран числа от 1 до 50. 
    При этом вместо чисел, кратных трем, программа должна выводить слово «Java»,
    а вместо чисел, кратных пяти — слово «Script». 
    Если число кратно и 3, и 5, то программа должна выводить слово «JavaScript»   
    
*/
      for(c = 1; c <= 50; c++){
         if (c % 3 == 0 && c % 5 == 0 ? "JavaScript" : c % 3 == 0 ? "Java" : c % 5 == 0 ? "Script" : c) {
            console.log(c); 
         }
      }

/* 
    TASK 7
    У нас есть число 1000
    Делите его на 2 столько раз, пока результат деления не станет меньше 50.
    Посчитайте количество итераций необходимых для выхода из цикла 
    и выведите результат в консоль

*/
for (let n = 1000, num = 0; n > 50; num++) 
        {
        n /= 2;
        console.log(n);
        }
/*
    TASK 8
    Напишите программу, которая используя цикл while 
    выведет все числа от 45 до 170, кратные 10.

*/

let i = 45;
while (i++ <170 ) {
    i % 10 || document.write(`${i}<br>`);
};


