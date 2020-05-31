
 export const moneyConvert = (number) => {
    number = number.toString();
    let minus = null;
    if(number.includes('-')){
      number = number.split('');
      minus = number.splice(0, 1);
      number = number.join('');
    }
    if(number.length > 3){
       number = number.split('');
       const lasThreeNums = number.splice( number.length - 3, 3).join('');
       number = `${number.join('')}.${lasThreeNums}`;
   }
   
   return minus ? `$ -${number}` : `$ ${number}`;
   }
   