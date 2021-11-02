const strLen =  require('./task1');
test('Check the string length', () => {
    //Arrange 
    const str = 'test';

    //Act 
    let len = strLen(str);

    //Assert 
    expect(len).toBe(4);
})

test('Throw errors string is longer than 10 char', ()=>{
     //Arrange 
     const str = 'testexercise';
  
     //Act  & Assert 
     expect(()=>strLen(str).toThrow(Error))
})