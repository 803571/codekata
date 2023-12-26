// 16번문제
// 문제 설명
// 함수 solution은 정수 x와 자연수 n을 입력 받아, x부터 시작해 x씩 증가하는 숫자를 n개 지니는 리스트를 리턴해야 합니다. 다음 제한 조건을 보고, 조건을 만족하는 함수, solution을 완성해주세요.

// 제한 조건
// x는 -10000000 이상, 10000000 이하인 정수입니다.
// n은 1000 이하인 자연수입니다.

function solution(x, n) {
    const result = [];
    
    for (let i = 0; i < n; i++) { //배열이 n개이므로 5개까지 증가하려면 0~4
        result.push(x + x * i); // 2 + 2*0부터 1,2,3,4.. 그럼 2,4,6,8,10
    }
    
    return result;
}
console.log(solution(x, n));

// x = 2, n = 5