let arr = new Array(5000);

for(let i = 0;i < 5000; i++ ){
    arr[i] = Math.floor(Math.random()*5000);
}

//for normal

let max = 0;
console.time('for');
const numero =arr.length;
for(let i = 0;i < numero; i++ ){
    if(arr[i]>max){
        max = arr[i];
    }
}
console.timeEnd('for');

// console.log('********************');
// console.log('test 1:',max);
// console.log('********************');

//fot -in
max = 0;
console.time('for-in');
for(let a in arr){
    if(arr[a] > max){
        max = arr[a];
    }
}
console.timeEnd('for-in');

// console.log('********************');
// console.log('test 2:',max);
// console.log('********************');


max = 0;
console.time('for-of');
for(let x of arr){
    if(arr[x] > max){
        max = arr[x];
    }
}
console.timeEnd('for-of');

// console.log('********************');
// console.log('test 3:',max);
// console.log('********************');

console.time('forEach');
arr.forEach((z)=>{
    if (z > max){
        max = z;
    }
});
console.timeEnd('forEach');

// console.log('********************');
// console.log('test 4:',max);
// console.log('********************');

