function solve(n,m) {
    if(m > 15){
        m = 15;

    } 
    let num = n.toFixed(m);
    console.log(parseFloat(num));

}
solve(3.1415926535897932384626433832795,2);