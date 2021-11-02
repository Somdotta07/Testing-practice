function strLen(str){
    if(str.length < 1 || str.length > 10){
     throw new Error('Length is not between 1 and 10');
    }
    return str.length;
}

module.exports = strLen;