// 36번문제
// 문제 설명
// 문자열 s의 길이가 4 혹은 6이고, 숫자로만 구성돼있는지 확인해주는 함수, solution을 완성하세요. 예를 들어 s가 "a234"이면 False를 리턴하고 "1234"라면 True를 리턴하면 됩니다.

// 제한 사항
// s는 길이 1 이상, 길이 8 이하인 문자열입니다.
// s는 영문 알파벳 대소문자 또는 0부터 9까지 숫자로 이루어져 있습니다.

// function solution(s) {
//     let answer;
//     if (s.length === 4 || s.length === 6){ // s길이가 4거나 6이면 참
//         if(isNaN(s)) { // s가 정수가 아니라면, 즉 Not a Number
//             answer  = false;
//         } else {
//             answer = true;
//         }
//     } else {
//         answer = false; // s길이가 4 또는 6이 아니라면
//     }
//     return answer;
// }

// let s = "a234";
// console.log(solution(s));

// s의 길이가 4혹은 6인가? 그리고 숫자로만 이루어져있나? 그럼 true
// 삼항연산자쓰면되나?

// 똑같이 생각한 사람의 풀이가 있는데 이 풀이가 틀려서 이 사람이 새로 쓴 풀이 발췌

function solution(s) {

    if(s.length === 4 || s.length === 6){
        return s.split("").every(c => !isNaN(c)) // 모든 요소가 number이면 true리턴
    } else {
        return false;
    }
}

console.log(solution(s));

///////////////////////

function solution(s) {
    // 문자열 길이가 4 또는 6이고, 숫자로만 구성되었는지 확인
    return /^(?=.*\d)[\d]{4,6}$/.test(s);
}

let s = "a234";
console.log(solution(s)); // False

s = "1234";
console.log(solution(s)); // True

// GPT, 그리고 프로그래머스 답안 중 정규식을 이용하는 풀이가 있어 첨부함

//  ^와 $는 문자열의 시작과 끝을 알림
//  (?=.*\d) 는 적어도 하나의 숫자가 포함되어야 함을 나타내고
//  [\d]{4,6} 는 숫자 \d가 연속해서 4~6개가 있는지 확인