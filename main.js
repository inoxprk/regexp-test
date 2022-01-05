const str = `
010-1234-5678
inho0819@gmail.com
https://www.omdbapi.com/?apikey=7035c60c&s=frozen
The quick brown fox jumps over the lazy dog.
abbcccdddd
ttp://localhost:1234 
`

const regexp = /the/gi
const regexp2 = new RegExp('the', 'gi')

console.log(/the/gi.test(str))
console.log(str.match(/the/gi))
console.log(str.replace(/fox/gi, 'cat'))

console.log(str.match(/\.$/gim))//'.'을 패턴이 아닌 문자로 인식하며(\.), 줄 끝에 있는 '.'을 찾는다($)
console.log(str.match(/d$/gm)) //줄 끝에 있는 d와 일치
console.log(str.match(/^t/gim)) //줄 시작에 있는 t와 일치
console.log(str.match(/./g)) //모든 임의의 한 문자와 일치해서 배열로 반환
console.log(str.match(/b...n/g)) //b와 n 사이의 임의의 문자
console.log(str.match(/fox|dog/g)) // fox 또는 dog가 포함되어 있으면 일치 
console.log(str.match(/h?ttp/g)) //h가 포함되든 말든 일치
console.log(str.match(/d{2}/g))  //d가 2개 연속으로 일치
console.log(str.match(/\b\w{2,3}\b/g)) // 아무 문자(\w) 중 알파벳 또는 숫자 외의 문자 (띄어쓰기, 특수 기호)사이에 있으면(\b) 2이상 3이하 연속으로 일치. 
console.log(str.match(/.+(?=@)/g)) //@앞쪽 일치, 1개 이상 임의의 문자
console.log(str.match(/.{1,}(?=@)/g)) //@앞쪽 일치, 1개 이상 임의의 문자
console.log(str.match(/(?<=@).{1,}/g)) //@뒷쪽 일치, 1개 이상 임의의 문자