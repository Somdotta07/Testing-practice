const Calculator = require('./task3');

describe('Calculator is performing well', () =>{
    //Arrange
    let calculation = new Calculator();
    test('Sum is ', () => {
       
        //Act & Assert
        expect(calculation.add(2,3)).toBe(5);
        expect(calculation.add(9,3)).toBe(12);
        expect(calculation.add(2,8)).toBe(10);
      });
      test('Result is ', () => {
       
        //Act & Assert
        expect(calculation.mul(2,3)).toBe(6);
        expect(calculation.mul(9,3)).toBe(27);
        expect(calculation.mul(2,8)).toBe(16);
      });
      test('Anssub is ', () => {
       
        //Act & Assert
        expect(calculation.sub(2,3)).toBe(-1);
        expect(calculation.sub(9,3)).toBe(6);
        expect(calculation.sub(2,8)).toBe(-6);
      });
      test('Answer is ', () => {
       
        //Act & Assert
        expect(calculation.div(15,3)).toBe(5);
        expect(calculation.div(48,4)).toBe(12);
        expect(calculation.div(80,8)).toBe(10);
      });
      
     
})