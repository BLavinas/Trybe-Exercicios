let numbers = [5, 9, 3, 19, 70, 8, 1, 2, 35, 27];

let minNumbers = numbers[0]

for (index = 0; index < numbers.length; index +=1) {
    if (minNumbers > numbers[index]){
        minNumbers = numbers[index] 
    }
}
console.log(minNumbers);