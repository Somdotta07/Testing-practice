const reverseStr = require('./task2');
test ('String is reversed', () => {
    //Arrange 
    const str = 'test';

      //Act 
      let newStr = reverseStr(str);
    //Assert 
    expect(newStr).toBe('tset');
})