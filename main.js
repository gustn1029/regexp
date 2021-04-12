let str = `
010-1234-5678
gustn1029@gmail.com
https://www.omdbapi.com/?apikey=7035c60c&s=frozen
The quick brown fox jumps over the lazy dog.
aabbccddee
d`;

// const regexp = new RegExp('the','gi');
const regexp = /the/gi;
// console.log(str.match(regexp));
// console.log(regexp.test(str));
// str = str.replace(regexp, 'AAA')
// console.log(str);

// console.log(str.match(/\.$/gim));

console.log(str.match(regexp));

console.log(
    str.match(/d$/gm)
);