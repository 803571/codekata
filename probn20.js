// 20번문제
// 문제 설명
// 함수 solution은 정수 n을 매개변수로 입력받습니다. n의 각 자릿수를 큰것부터 작은 순으로 정렬한 새로운 정수를 리턴해주세요. 예를들어 n이 118372면 873211을 리턴하면 됩니다.

// 제한 조건
// n은 1이상 8000000000 이하인 자연수입니다.

// function solution(n) {
//     return parseInt((n+ '').split('').sort().reverse().join(''));
// }
// console.log(solution(118372));

// 근데 바꿔쓸수도 있음

// function solution(n) {
//     return parseInt(n.toString().split('').sort().reverse().join(''));
// }
// console.log(solution(118372));

function solution(n) {
    return n.toString().split('').sort().reverse().map(Number).join('');
}
console.log(solution(118372));

//118372 -> "118372" -> ["1","1","8","3","7","2"] -> ["1","1","2","3","7","8"]
// ["8","7","3","2","1","1"] -> [8,7,3,2,1,1] -> 873211
