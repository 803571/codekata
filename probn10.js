// 10번 문제
// 문제 설명
// 정수 배열 numbers가 매개변수로 주어집니다. numbers의 원소의 평균값을 return하도록 solution 함수를 완성해주세요.

// 제한사항
// 0 ≤ numbers의 원소 ≤ 1,000
// 1 ≤ numbers의 길이 ≤ 100
// 정답의 소수 부분이 .0 또는 .5인 경우만 입력으로 주어집니다.

function solution(numbers) {
    let answer = 0;
    for (let i = 0; i < numbers.length; i++) {
        answer += numbers[i];
    }
    let average = answer / numbers.length;
    return average;
}

console.log(solution(numbers));

// numbers 배열 [1, 2, 3, 4, 5, 6]뭐 이런식일테니까
// 포문 열어서 배열을 다 더한 뒤 아니시비ㅏㄹ 배열개수를 모르잖아 그럼
// 아니지 i만큼 증가하니까  [i]만큼 나누면 되겠네

// [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] 이걸 예로

/////////////////////////////////////////////////
// reduce를 해보자고

function solution(numbers) {
    return answer = numbers.reduce((a,b) => a+b, 0) / numbers.length;
    
}

// numbers배열의 (누적값, 요소값) => 누적값과 요소값을 더한다.