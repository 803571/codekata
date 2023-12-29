// 33번문제
// 문제 설명
// 두 정수 left와 right가 매개변수로 주어집니다. left부터 right까지의 모든 수들 중에서, 약수의 개수가 짝수인 수는 더하고, 약수의 개수가 홀수인 수는 뺀 수를 return 하도록 solution 함수를 완성해주세요.

// 제한사항
// 1 ≤ left ≤ right ≤ 1,000


function solution(left, right) {
    let answer = 0;
    for (let i = left; i <= right; i++) { //13부터 17까지 증가
        let sqrtNum = Math.sqrt(i); // sqrtNum은 13부터 17
        
        // 제곱근이 정수일 경우 약수의 개수는 홀수
        if (Number.isInteger(sqrtNum)) { // 주어진 값이 정수인지 판단해서 참 거짓으로 반환
            answer -= i; // 약수의 개수가 홀수라면 빼고
        } else {
            answer += i; // 약수의 개수가 짝수라면 더한다
        }
    }    
    
    return answer;
}

let left = 13;
let right = 17;
console.log(solution(left, right));
// 13부터 17까지에서 약수의 개수가 짝수인 수는 서로 더한다
//  13은 1,13 2개 짝 +
//  14는 1,2,7,14 4개 짝 +
//  15는 1, 3, 5, 15 4개 짝 +
//  16은 1,2,4,8,17 5개 홀 -
//  17은 1, 17 2개 짝 +

// 약수의 개수가 짝수인지, 홀수인지 보려면
// 어떤 수의 약수는 항상 1과 자기자신 쌍으로 나타나므로
// 해당 수의 제곱근까지 약수개수를 세보면 된다.
// 만일 어떤 수의 제곱근이 정수라면 그 수는 약수의 개수가 홀수