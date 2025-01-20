//console.log('Hello Word')
//prompt('What is your name')
// string . Number , Boolean , Oject , Array
// string - ตัวอังษร
//let firstname = 'john';
//const idcard = '110370'
// Number - ตัวเลข
//let age = 30;
//let height = 180.5;

// Boolean - ค่าที่เป็นจริงหรือเท็จ
//let isSingle = true;

//firstname = 'Jane'
//idcard = '3214'
//console.log('Name', firstname, 'Age', age,);

/*
+ บวก
- ลบ 
* คูณ
/ หาร 
% หารเอาเศษ (MOD)
== เท่ากับ
!= ไม่เท่ากับ
> มากกว่า
< น้อยกว่า
>= น้อยกว่าหรือเท่ากับ
<= มากกว่าหรือเท่ากับ
*/

/*
let number1 = 3
let number2 = 5

//let result = number1 >= number2 //Boolean ค่าที่ได้จะเป็น true หรือ false
//console.log('new number',result)

//if - else condition
if (number1 != number2) {
          console.log('this is else')  
} else if (number1 == number2) {
          console.log('this is else if')            
} else {
          console.log('this is else')      
}
*/          
/*
Grade
>=80 A
>=70 B
>=60 C
>=50 D


let score = prompt("Enter your score: ");
console.log('you have score',score);

if (score >= 80) {// falst
          console.log("Garde A");
}else if (score >= 70) {// falst
          console.log("Garde B");
}else if (score >= 60) {
          console.log("Garde C");
}else if (score >= 50) {
          console.log("Garde D");
}else {
          console.log("Garde F");
}
*/

/*
&& เเละ
|| หรือ 
! not หรือ ไม่

let number1 =5
let number2 =8
// true || flase = !(true) = flase
let condition = !(number1>= 3 || number2 >=10)
console.log('result of condition', condition)

let age = 30
let gender = 'male'
// true && true = true
if (age >= 20 && gender == 'male') {
          console.log('you are male adult')
}

let number = 20
if (!(number % 2 == 0)) {
          console.log('you number is even')
}*/

/*
while
for
*/

/*let counter = 0;

while (counter < 10) { //true -> falsr
          console.log('Hello');
          counter = counter + 1
          counter += 1;
          counter++;
}

for (let counter = 0; counter <10; counter = counter +1) {
          console.log('Hello')
}*/

/*
array
*/

/*let agr1 = 18;
let agr2 = 19;
let agr3 = 20;
console.log(age1, agr2, agr3);

let ages = [18, 19, 20];
console.log('age is ',ages[2]);
console.log('age is ',ages);

//1 เเทนที่
ages = [21, 22, 23];
console.log('new age is',ages);

//2 ต่อ array
ages.push(23);
console.log(' age list',ages);

agrs.pop()
console.log('pop age list',ages);
*/

/*let ages = [18, 13, 20];
console.log('age is',ages);                                     
ages.sort();
console.log('age is',ages);

let name_list = ['John', 'Bob', 'Alice'];
name_list.push('David');
console.log('name_list is ',name_list.length);
console.log('name_list is ',name_list[0]);
console.log('name_list is ',name_list[1]);
console.log('name_list is ',name_list[2]);
console.log('name_list is ',name_list[3]);

for (let index = 0; index < name_list.length; index++) {
          console.log('for name_list is', name_list[index]);
}*/

/*
object 
*/

/*let student = [{
          age : 30,
          name : 'John',
          grade : 'A'
},{
          age : 25,
          name : 'Jane',
          grade : 'B'
}];
student.push()

console.log(student);

for (let index = 0; index < student.length; index++) {
          console.log(student[index].name);
          console.log(student[index].agee);
          console.log(student[index].grade);
}*/

/*
let score1 = 50 
let score2 = 60 
let grade =''
// ประกาศ Function ชื่อ calculateGrade ที่รับค่า scores เป็น parameter

function calculateGrade(score) {
if (score >= 80) {
          grade = 'A'
} else if (score >= 70){
          grade = 'B'
} else if (score >= 60){
          grade = 'C'
} else if (score >= 50){
          grade = 'D'
} else{
          grade = 'f'
}
return grade
}
// เรียกใช้ Function โดยส่งค่า scores1 เเละ scores2 เข้าไป
let grade1 = calculateGrade(score1)
let grade2 = calculateGrade(score2)
// เเสดงผลลัพธ์
console.log('grade1:', grade1)
console.log('grade2:', grade2)*/

/*
array
*/

/*let score = [10, 20, 30, 40, 50];

for (let index = 0; index < score.length; index++) {
          console.log(score[index]);
}*/

/*
score[0] = score[0] *2;
score[1] = score[1] *2;
score[2] = score[2] *2;
score[3] = score[3] *2;
score[4] = score[4] *2;
*/
/*score=score.map((s) => {
          return s *2;
})
score.forEach((s) => {
          console.log('new score',s);
});*/

/*let score = [10, 20, 30, 40];
for (let index = 0; index < score.length; index++) {
          console.log('score'[index]);
          
}
let newScore = score.filter((s) => {
          return s >= 30;
})
newScore.forEach((ns) => {
          console.log('new score: ',ns)
});*/

/*
object function 
*/

let student = [ 
          {
                    name: 'John',
                    score: 90,
                    grade: 'A'
          },{
                    name: 'Jane',
                    score: 95,
                    grade: 'A'
          },
]

let students = student.find((s) => {
          if (s.name == 'John') {
                    return true;
          }
});

let doublescore = student.map((s) => {
          score = s.score *2 
          return s
});
console.log('student', student);
console.log('dodble score', doublescore);