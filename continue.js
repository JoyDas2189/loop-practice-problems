var numbers = [10, 40, 23, 74, 25, 120, 532, 20];
for (var i = 0; i < numbers.length; i++) {
    var number = numbers[i];
    if (number > 100){
        continue;
        }
    console.log(number);
}