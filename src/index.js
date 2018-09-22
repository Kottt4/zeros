module.exports = function getZerosCount(number) {
    var magicNumber = 1;
    var november = 0;
    var september = 0;
    
    while (magicNumber < number){
    magicNumber *= 5;
    september = Math.floor(number/magicNumber)
    november += september;
    };
    
    return november;
  };

