
//Exercice1
const array = [500, 200, 100, 50, 20, 10, 5, 3, 0.5];
const Max = 123.5;
function exercice1(List, Number) {
    let reste = Number;
    let count = 0;  
    for(const element of List){
        if(reste - element >= 0){
        reste -= element;
        count++;
        }
    }
    if(reste > 0){
        retrun -1;
    }
    else{
        return count;
    }
}
exercice1(array, Max)

// Exercice 2
const N = 65535;
function exercice2(number){
    const arrayBinary = [];
    let quotient = number;
    while(quotient > 0){
        arrayBinary.push(quotient % 2); 
        quotient = Math.floor(quotient / 2);
    }
    const arrayBinaryInverse = arrayBinary.reverse();
    let maxChain = 0;
    let currentMax = 0;
    for(const element of arrayBinaryInverse){
        if(element === 0){
        maxChain++;
        currentMax = Math.max(currentMax, maxChain);
        }else{
        maxChain = 0;
        }
    }
    return maxChain
}
exercice2(N);


// Exercice 3 
const H = 3
const L = 3
E = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 0, 9]
]
function getM(height, lenght){
    let position = {y:0, x:0}
    let sommes = []
    // SOMME DE LA LIGNE
    let arraySommes = []
    let index = 0 
    for(const item of E){
        let somme = 0;
        // let sommeVertical = 0;
        const sumWithInitial = item.reduce(
        (previousValue, currentValue) => previousValue + currentValue,
        somme
        );

        // sommeVertical = item[index] + sommeVertical
        // arraySommes.push(sommeVertical)
        sommes.push(sumWithInitial)
        index ++
    };

    console.log(arraySommes)
    console.log(sommes)
    // let test = arraySommes.reduce((a, b) => {
    //   return a+b
    // })
    // console.log(test)
        // for(let i=0; i<height; i++){
    //   console.log("og");
    // }

    // let test = item.map((a,b) => {
        //   return a+b
        //  })
        //  console.log(test)
    let M = 0
    return M    
}
getM(H,L)






