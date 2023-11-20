function count(a,b) {
    let sum = 0;
    let display = '';
    for (let index = a; index <=b; index++){
    sum += index;
    display += `${index} `;
    }
    console.log(display);
console.log(`Sum: ${sum}`);
}
count(5,10);