import * as help from '../helpFunctions/helpFunctions';


export const lose = (numbers, nextWin, moneyInvested) => {
  
    const allNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
        21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48];

     if(numbers){
        numbers = numbers.map(cur =>  +cur);

        // we first isolate winning numbers
        help.isolateNumbers(numbers, allNumbers)
        
        // mix input numbers
       const newNumbers = help.mixInputNumbers(numbers);
    
        // mix rest numbers
        let mixedRestNumbers = help.mixRestNumbers(allNumbers); 
    
        // Finding places for replacment
        const replacmentNumbers = help.findRandomNumberForReplacment(mixedRestNumbers, nextWin.total, moneyInvested);

        const only = 5;
        let winNumbers = newNumbers.splice(0, only);

        // we insert our 2-3-4 or 5 winning numbers into rest numbers
        winNumbers.forEach((cur, ind) => {
            mixedRestNumbers[replacmentNumbers[ind]] = cur
        })

        let counter = help.countWinningNumbers(mixedRestNumbers, winNumbers)

        return mixedRestNumbers;

    }

}