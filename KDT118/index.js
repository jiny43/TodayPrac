console.log("Hello.World!");

const a = 10;
const b = 5;
const stringHello = "Hello";
const StringJS = "JavaScript";

function string() {
  return (`${stringHello},${StringJS}😆`);
} 

console.log(string());

function add() {
  return (a+b);
};

console.log(add());

let str = '';
for(let i=1; i < 11; i++){
str = str + i;
};
console.log(str);

if(a%2==0){
  console.log('짝수입니다');
}else(
  console.log('홀수입니다')
)