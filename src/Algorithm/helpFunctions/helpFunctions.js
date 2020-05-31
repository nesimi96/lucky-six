import { itemData } from '../../Components/data/itemData';


export const mixInputNumbers = (numbers) => {
      const newNumbers = [];
      for(let i = 0; numbers.length > 0; i++){
          const random = Math.floor(Math.random() * 6);
          const spliced = numbers.splice(random, 1);
          if(spliced[0]){
              newNumbers.push(spliced[0]);
          }
      }

      return newNumbers

}


export const isolateNumbers = (numbers, allNumbers) => {

    for(const num of numbers){
        allNumbers.forEach((cur, ind) => {
            if(num === cur){
                allNumbers.splice(ind, 1);
            }
        })
    }

}


export const mixRestNumbers = (allNumbers) => {

            let mixedRestNumbers = [];
            for(var i = 0; i < 1000; i++){
            const random = Math.floor(Math.random() * 49);

            if(allNumbers){
                allNumbers.forEach((cur, ind) => {
                    if(random === cur){
                        const spliced = allNumbers.splice(ind, 1)
                        mixedRestNumbers.push(spliced[0])
                    }
                })
            }
    }

    return mixedRestNumbers
}


const lastNum = (nextWinMoney, itemData, moneyInvested) => {

   const winMoney = Math.floor((nextWinMoney) / 3);
   let data = [];

   itemData.forEach((cur, ind) => {
    const diffrence = (a, b) => Math.abs((+cur.moneyNum * moneyInvested) - winMoney);
    data.push({diff: diffrence(), num: cur, ind: ind})
   })

   const sorted = data.sort((a, b) => a.diff - b.diff)

   console.log(itemData);
   let last = sorted[0].ind;

   return last;
}


export const findRandomNumberForReplacment = (newSlicedRestNumbers, nextWin, moneyInvested) => {

    
    let last = lastNum(nextWin, itemData(), moneyInvested)
    last = last + 5;
    
    let copiedNewSlicedRestNumbers = [...newSlicedRestNumbers];

    // Finding 6 places for replacment
    const newNums = [];
    const replacmentNumbers = [];
    
    let counter = 0;
    for(var i = 0; i < last; i++){
    newNums.push(counter++)
    }

    for(var i = 0; replacmentNumbers.length < 6; i++){
        const random = Math.floor(Math.random() * newNums.length);
        const spliced = newNums.splice(random, 1);
        replacmentNumbers.push(spliced[0])
    }


    replacmentNumbers.sort((a, b) => a - b);
    replacmentNumbers[5] = last

    return replacmentNumbers
}

export const countWinningNumbers = (newSlicedRestNumbers, newNumbers) => {
    let counter = 0;
    newSlicedRestNumbers.forEach(cur => {
        for(const el of newNumbers){
            if(cur === el){
                counter++
            }
        }

    })

     return counter
}