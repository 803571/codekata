// 18번 문제
// 문제 설명
// 문자열 s를 숫자로 변환한 결과를 반환하는 함수, solution을 완성하세요.

// 제한 조건
// s의 길이는 1 이상 5이하입니다.
// s의 맨앞에는 부호(+, -)가 올 수 있습니다.
// s는 부호와 숫자로만 이루어져있습니다.
// s는 "0"으로 시작하지 않습니다.

// function solution(s) {
//     // 맨 앞의 부호를 저장할 변수
//     let sign = 1;

//     // 맨 앞이 부호인 경우 처리
//     if (s[0] === '-') {
//         sign = -1;
//         s = s.slice(1); // 부호를 제외한 나머지 문자열로 업데이트
//     } else if (s[0] === '+') {
//         s = s.slice(1); // 부호를 제외한 나머지 문자열로 업데이트
//     }

//     // 문자열을 숫자로 변환
//     const result = sign * Number(s);

//     return result;
// }


//  ["1234"] -> 1234

function solution(s) {
    return s / 1
}

console.log(solution("1234"));