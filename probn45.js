// 45번 문제
// 문제 설명
// 어떤 문장의 각 알파벳을 일정한 거리만큼 밀어서 다른 알파벳으로 바꾸는 암호화 방식을 시저 암호라고 합니다. 예를 들어 "AB"는 1만큼 밀면 "BC"가 되고, 3만큼 밀면 "DE"가 됩니다. "z"는 1만큼 밀면 "a"가 됩니다. 문자열 s와 거리 n을 입력받아 s를 n만큼 민 암호문을 만드는 함수, solution을 완성해 보세요.

// 제한 조건
// 공백은 아무리 밀어도 공백입니다.
// s는 알파벳 소문자, 대문자, 공백으로만 이루어져 있습니다.
// s의 길이는 8000이하입니다.
// n은 1 이상, 25이하인 자연수입니다.

// function solution(s, n) {
//     let answer = '';
//     for (let i = 0; i < s; i++) { // s.split('') 을 하면 s="AB" 를 ["A", "B"]로 만들어줌
//         s.split('')
//     }
//     return answer;
// }

// 이게 풀다보니 원리는 내가 생각한게 맞는데, 풀어낸 배열을 n만큼 증가시키는걸 어떻게 해야할지 몰라서 검색해보니까 아스키코드를 이용해야함
// 이를 응용하면..

// function solution(s, n) {
//     return s.split('').map(char=> {
//         let code = char.charCodeAt(0); // 각 문자의 아스키 코드 값을 얻습니다.
//         code += n; // 코드에 n을 더합니다.
//         return String.fromCharCode(code); // 새로운 문자로 변환합니다.
//     }).join('');
// }

// console.log(solution("AB", 1));
// console.log(solution("z", 1));
// console.log(solution("aBz", 4));

// 1번예시는 제대로 나오는데 2,3번 예시는 아예 다른값이 나온다. ("BC", "{", "eF~")
// 이런 경우 아스키코드의 범위를 고려해야한다고 함.
// 코드를 수정해보면

function solution(s, n) {
    return s.split('').map(char=> {
        let code = char.charCodeAt(0); // 각 문자의 아스키 코드 값을 얻습니다.
        
        // 대문자의 경우?
        if (char >= 'A' && char <= 'Z') {
            code = (code - 'A'.charCodeAt(0) + n) % 26 + 'A'.charCodeAt(0);
        }

        // 소문자의 경우?
        else if (char >= 'a' && char <= 'z') {
            code = (code - 'a'.charCodeAt(0) + n) % 26 + 'a'.charCodeAt(0);
        }
        
        return String.fromCharCode(code); // 새로운 문자로 변환합니다.
    }).join('');
}

console.log(solution("AB", 1));
console.log(solution("z", 1));
console.log(solution("aBz", 4));


// =예시답안
// s가 AB n이 1인 경우 BC
// s가 z n이 1인 경우 a
// s가 aBz n이 4인 경우 eFd

// =문제의 첫 이해
// n만큼 주어진 암호를 민다
// 예시대로 이해를 해보면 s가 AB 고 n이 1일때 BC가 된다는 점에서 밀리기 시작하는건 첫번째 자리부터
// aBz 를 4만큼 밀면 abcd'e', BCDE'F', zabc'd' 가되니까
// s가 문자열이니, 이를 각각의 인덱스화 시킨 뒤 각 인덱스+n만큼해서 나온 알파벳을 answer 변수에 집어넣으면 될듯 