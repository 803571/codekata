// 35번문제
// 문제 설명
// 새로 생긴 놀이기구는 인기가 매우 많아 줄이 끊이질 않습니다. 이 놀이기구의 원래 이용료는 price원 인데, 놀이기구를 N 번 째 이용한다면 원래 이용료의 N배를 받기로 하였습니다. 즉, 처음 이용료가 100이었다면 2번째에는 200, 3번째에는 300으로 요금이 인상됩니다.
// 놀이기구를 count번 타게 되면 현재 자신이 가지고 있는 금액에서 얼마가 모자라는지를 return 하도록 solution 함수를 완성하세요.
// 단, 금액이 부족하지 않으면 0을 return 하세요.

// 제한사항
// 놀이기구의 이용료 price : 1 ≤ price ≤ 2,500, price는 자연수
// 처음 가지고 있던 금액 money : 1 ≤ money ≤ 1,000,000,000, money는 자연수
// 놀이기구의 이용 횟수 count : 1 ≤ count ≤ 2,500, count는 자연수

function solution(price, money, count) {
    let answer = 0;
    for (let i = 1; i <= count; i++) { //  i가 타는 횟수에 맞게 증가하면
        answer += price * i; // 탄 횟수 * 금액을 더함
        // 3, 6, 9, 12 = 30원
    }

    return money > answer? 0 : answer - money; // 가진 돈이 answer보다 크면 안모자라니 0반환
}

console.log(solution(3, 20, 4));

// price = 기구금액
// money = 내가 가진 돈
// count = 내가 이만큼 타게되면 ~ 탄 횟수 = n

// 3원짜리 기구고 price
// 4번 타게되면 count, 그럼 n번째 탔을때 *n 즉 12원
// 아니지
// 처음이용할때 3원, 2번째에는 6원, 3번째에는 9원, 4번째에 12원
// 30원이 필요한데 내가 20원있으니 10원을 리턴해야지

