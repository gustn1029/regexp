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

// console.log(
//     str.match(/d$/gm)
// );

// console.log(
//     str.match(/[0-9]/g)
// )

// console.log(
//     str.match(/\w/g)
// )

// console.log(
//     str.match(/\bf\w{1,}/g)
// );

// console.log(
//     str.match(/\d{1,}/g)
// )

const h1 = `  the hello  world   !`

console.log(
    h1.replace(/\s/g, '')
)

console.log(
    str.match(/.{1,}(?=\@)/g)
)

console.log(
    str.match(/(?<=@).{1,}/g)
)