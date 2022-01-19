//Create a function that reverse a string:
//'Hi My Name is Navnath' should be htanvaN si emaN yM iH'
function reverse(str) {
    // check input
    if (!str || str.length < 2 || typeof str !== 'string') {
        return 'hmm That is not good';
    }
    const backwards = [];
    const totalItems = str.length - 1;
    console.log(totalItems);
    for (let i = totalItems; i >= 0; i--) {
        backwards.push(str[i]);
    }
    console.log(backwards.join(''));
    return backwards.join('');
}
// Using inbuilt function 
function reverse2(str) {
    const reversestr = str.split('').reverse().join('');
    console.log(reversestr);
    return reversestr;
}

reverse2('Hi My Name is Navnath')
