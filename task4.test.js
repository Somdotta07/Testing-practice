const capitalize= require('./task4');

test('The first character should be capitalized',()=>{
    // Arrange 
    const newStr = 'capital';

    //Act 
    let result = capitalize(newStr);

    //Assert 
    expect(result).toBe('Capital');
})