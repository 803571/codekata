// 9번문제
// 문제 설명
// 정수 n이 주어질 때, n이하의 짝수를 모두 더한 값을 return 하도록 solution 함수를 작성해주세요.

// 제한사항
// 0 < n ≤ 1000

function solution(n) {
    let answer = 0;
    for (let i = 0; i <= n; i++) {
        if ((i % 2) === 0) {
            answer += i
        }
    }
    return answer;
}

console.log(solution(n));



// n이 50 이라고 가정했을 때
// i <= 50으로 잡아서 i를 50까지 키운다음에
// 늘어난 i를 %2 = 0인 값만 추려다가 answer에 더한 뒤 그값을 반환

// function solution(n) {
//     var half = Math.floor(n/2);
//     return half*(half+1);
// }
// 글쓴놈 천재냐