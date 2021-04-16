
const arr = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,415];

for(let i = 0; i< arr.length; i++) {
    console.log(arr[i])
}

for(const item of arr){
    console.log(item)
}


for(const item in arr){
    console.log(item)
}


arr.forEach(item=> console.log(item))

arr.map(item=>{ 
    console.log(item)
return item})
