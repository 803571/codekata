// 26번 문제
// 문제 설명
// 어떤 정수들이 있습니다. 이 정수들의 절댓값을 차례대로 담은 정수 배열 absolutes와 이 정수들의 부호를 차례대로 담은 불리언 배열 signs가 매개변수로 주어집니다. 실제 정수들의 합을 구하여 return 하도록 solution 함수를 완성해주세요.

// 제한사항
// absolutes의 길이는 1 이상 1,000 이하입니다.
// absolutes의 모든 수는 각각 1 이상 1,000 이하입니다.
// signs의 길이는 absolutes의 길이와 같습니다.
// signs[i] 가 참이면 absolutes[i] 의 실제 정수가 양수임을, 그렇지 않으면 음수임을 의미합니다.

function solution(absolutes, signs) {
    // return 해야하는 answer 생성
    let answer = 0;

    // 두 배열을 비교해 가며 값을 더하거나 차감
    // 두 배열은 크기가 같다.
    for (let i = 0; i < absolutes.length; i++) {
        // -, +에 따른 처리
        if (signs[i] === true) {
            // 값이 참인 경우 (양수)
            answer = answer + absolutes[i];
        } else if (signs[i] === false) {
            // 값이 거짓인 경우 (음수)
            answer = answer - absolutes[i];
        }
    }
    // 출력
    return answer;
}

let absolutes = [4, 7, 12];
let signs = [true, false, true];

let absolutes2 = [1, 2, 3];
let signs2 = [false, false, true];

console.log(solution(absolutes, signs));
console.log(solution(absolutes2, signs2));
