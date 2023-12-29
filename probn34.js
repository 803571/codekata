// 34번문제
// 문제 설명
// 문자열 s에 나타나는 문자를 큰것부터 작은 순으로 정렬해 새로운 문자열을 리턴하는 함수, solution을 완성해주세요.
// s는 영문 대소문자로만 구성되어 있으며, 대문자는 소문자보다 작은 것으로 간주합니다.

// 제한 사항
// str은 길이 1 이상인 문자열입니다.

function solution(s) {
    return s.split('').sort((a, b) => a < b ? 1 : -1).join('');
}

console.log(solution("Zbcdefg"));

// function solution(n) {
//     return parseInt((n+ '').split('').sort().reverse().join(''));
// }

// n의 자릿수를 큰것부터 작은 순으로 정렬했던 함수 참고하면



// function solution(s) {
//     return s
//         .split("")
//         .sort()
//         .reverse()
//         .join("");
// }

//  이거 다른풀이니까 시간날때 공부