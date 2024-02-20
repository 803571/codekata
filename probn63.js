// 63번 문제
// 문제 설명
// 두 정수 X, Y의 임의의 자리에서 공통으로 나타나는 정수 k(0 ≤ k ≤ 9)들을 이용하여 만들 수 있는 가장 큰 정수를 두 수의 짝꿍이라 합니다(단, 공통으로 나타나는 정수 중 서로 짝지을 수 있는 숫자만 사용합니다). X, Y의 짝꿍이 존재하지 않으면, 짝꿍은 -1입니다. X, Y의 짝꿍이 0으로만 구성되어 있다면, 짝꿍은 0입니다.

// 예를 들어, X = 3403이고 Y = 13203이라면, X와 Y의 짝꿍은 X와 Y에서 공통으로 나타나는 3, 0, 3으로 만들 수 있는 가장 큰 정수인 330입니다. 다른 예시로 X = 5525이고 Y = 1255이면 X와 Y의 짝꿍은 X와 Y에서 공통으로 나타나는 2, 5, 5로 만들 수 있는 가장 큰 정수인 552입니다(X에는 5가 3개, Y에는 5가 2개 나타나므로 남는 5 한 개는 짝 지을 수 없습니다.)
// 두 정수 X, Y가 주어졌을 때, X, Y의 짝꿍을 return하는 solution 함수를 완성해주세요.

// 제한사항
// 3 ≤ X, Y의 길이(자릿수) ≤ 3,000,000입니다.
// X, Y는 0으로 시작하지 않습니다.
// X, Y의 짝꿍은 상당히 큰 정수일 수 있으므로, 문자열로 반환합니다.

function solution(X, Y) {
    let answer = "";
    X = X.split('');
    Y = Y.split('');
    for(let i = 0; i < 10; i++) {
        let x_cnt = X.filter(x => Number(x) === i).length;
        let y_cnt = Y.filter(y => Number(y) === i).length;
        answer += i.toString().repeat(Math.min(x_cnt, y_cnt));
    }    
    
    if(answer === "") { 
        return "-1";
    }
    else if(answer.split('').filter(x => x === "0").length === answer.length) { 
        return "0";
    }
    else {
        return answer.split('').sort().reverse().join('');
    }
    
}

// x, y를 배열로 변환해 각 자리 숫자에 접근. 0~9까지의 숫자를 순회하기
// x, y에서 현재 i의 개수를 구함. filter 메소드로 x와 y에서 현 숫자와 동일한 요소만을 골라 개수를 세어줌
// x, y에서 현재 i의 개수중 더 작은 개수를 구함. Math.min을 통해 두 수중 작은 값 택
// 선택한 개수만큼 현재 숫자 i를 문자열로 반복하여 answer에 추가

// answer가 빈 문자열이라면 공통으로 나타나는 수가 없어서 짝궁은 없음. -1 반환
// answer가 0이 모두 포함됐다면 짝꿍으로 쓸 수 있는 수가 0이므로 0 반환
// 그외에는 answer를 배열로 변환하고 내림차순으로 정렬