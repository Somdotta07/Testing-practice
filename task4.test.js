const capitalizeStr = require('./task4');

test('The first character should be capitalized',()=>{
    // Arrange 
    const newStr = 'capital';

    //Act 
    let result = capitalizeStr(newStr);

    //Assert 
    expect(result).toBe('Capital');
})