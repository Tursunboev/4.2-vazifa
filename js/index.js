1 - misol;
let number = +prompt("son kiriting");
if (number > 0) {
  console.log(number + 1);
} else {
  console.log(number);
}

2 - misol;
let number = +prompt("son kiriting");
if (number > 0) {
  console.log(number + 1);
} else {
  console.log(number - 2);
}

3 - misol;
let number = +prompt("son kiriting");
if (number > 0) {
  console.log(number + 1);
} else if (number == 0) {
  console.log(number + 10);
} else {
  console.log(number - 2);
}

4 - misol;
let number = prompt("son kiriting");
let number2 = prompt("son kiriting");
let number3 = prompt("son kiriting");
let count = 0;
if (number > 0) {
  count++;
}
if (number2 > 0) {
  count++;
}
if (number3 > 0) {
  count++;
}
console.log(count);

5 - misol;
let number = prompt("son kiriting");
let number2 = prompt("son kiriting");
let number3 = prompt("son kiriting");
let count = 0;
let count2 = 0;
if (number > 0) {
  count++;
}
if (number2 > 0) {
  count++;
}
if (number3 > 0) {
  count++;
}
console.log(count);
if (number < 0) {
  count2++;
}
if (number2 < 0) {
  count2++;
}
if (number3 < 0) {
  count2++;
}
console.log(count2);

6 - misol;
let number = prompt("son kiriting");
let number2 = prompt("son kiriting");
if (number > number2) {
  console.log(number);
}
if (number < number2) {
  console.log(number2);
}

7 - misol;
let number = prompt("son kiriting");
let number2 = prompt("son kiriting");
let first = number;
let second = number2;
if (number > number2) {
  console.log(number2);
}
if (number < number2) {
  console.log(number);
}

8 - misol;
let number = prompt("son kiriting");
let number2 = prompt("son kiriting");

if (number > number2) {
  console.log(number, number2);
}
if (number < number2) {
  console.log(number2, number);
}

9 - misol;
let number = prompt("son kiriting");
let number2 = prompt("son kiriting");
let first = 0;
let second = 0;
if (second < first) {
  console.log(number);
}
if (first < second) {
  console.log(number2);
}

10 - misol;
let num1 = Number(prompt("Son kiriting"));
let num2 = Number(prompt("Son kiriting"));

if (num1 != num2) {
  console.log(`a=${num1 + num2}`);
} else num1 == num2;
{
  console.log(`0 `);
}

11 - misol;
let num1 = Number(prompt("Son kiriting"));
let num2 = Number(prompt("Son kiriting"));
let a = num1;
let b = num2;

if (num1 != num2) {
  console.log(`b=${a < b}`);
}
if (num1 != num2) {
  console.log((a = a > b));
} else num1 == num2;
{
  console.log(`0 `);
}

12 - misol;
let num1 = Number(prompt("Son kiriting"));
let num2 = Number(prompt("Son kiriting"));
let num3 = Number(prompt("Son kiriting"));
if (num1 <= num2 && num1 <= num3) {
  console.log(num1);
} else if (num2 <= num3 && num2 <= num1) {
  console.log(num2);
} else if (num3 <= num2 && num3 <= num1) {
  console.log(num3);
} else {
  console.log("hello");
}

13 - misol;
let num1 = Number(prompt("Son kiriting"));
let num2 = Number(prompt("Son kiriting"));
let num3 = Number(prompt("Son kiriting"));
if (num1 <= num2 && num1 >= num3) {
  console.log(num1);
} else if (num2 <= num3 && num2 >= num1) {
  console.log(num2);
} else if (num3 <= num2 && num3 >= num1) {
  console.log(num3);
} else {
  console.log("hello");
}

14 - misol;
let num1 = Number(prompt("Son kiriting"));
let num2 = Number(prompt("Son kiriting"));
let num3 = Number(prompt("Son kiriting"));
if (num1 <= num2 && num1 <= num3 && num3 <= num2 && num1 <= num2) {
  console.log(num1, num2);
} else if (num2 <= num3 && num2 <= num1 && num1 <= num3 && num2 <= num3) {
  console.log(num2, num3);
} else if (num3 <= num2 && num3 <= num1 && num3 <= num1 && num2 <= num1) {
  console.log(num3, num1);
}

15 - misol;
let num1 = Number(prompt("Son kiriting"));
let num2 = Number(prompt("Son kiriting"));
let num3 = Number(prompt("Son kiriting"));
let a = num1 <= num2 && num1 + num2;
let b = num1 <= num3 && num1 + num3;
let c = num2 <= num1 && num2 + num1;
let d = num2 <= num3 && num2 + num3;
let g = num3 <= num2 && num3 + num2;
let f = num3 <= num1 && num3 + num1;
if (num1 <= num2) {
  console.log(a);
}
if (num1 <= num3) {
  console.log(b);
}
if (num2 <= num1) {
  console.log(c);
}
if (num2 <= num3) {
  console.log(d);
}
if (num3 <= num2) {
  console.log(g);
}
if (num3 <= num1) {
  console.log(f);
}
