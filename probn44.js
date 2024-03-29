// 44번 문제
// 문제 설명
// 명함 지갑을 만드는 회사에서 지갑의 크기를 정하려고 합니다. 다양한 모양과 크기의 명함들을 모두 수납할 수 있으면서, 작아서 들고 다니기 편한 지갑을 만들어야 합니다. 이러한 요건을 만족하는 지갑을 만들기 위해 디자인팀은 모든 명함의 가로 길이와 세로 길이를 조사했습니다.

// 아래 표는 4가지 명함의 가로 길이와 세로 길이를 나타냅니다.

// 명함 번호	가로 길이	세로 길이
// 1	60	50
// 2	30	70
// 3	60	30
// 4	80	40
// 가장 긴 가로 길이와 세로 길이가 각각 80, 70이기 때문에 80(가로) x 70(세로) 크기의 지갑을 만들면 모든 명함들을 수납할 수 있습니다. 하지만 2번 명함을 가로로 눕혀 수납한다면 80(가로) x 50(세로) 크기의 지갑으로 모든 명함들을 수납할 수 있습니다. 이때의 지갑 크기는 4000(=80 x 50)입니다.

// 모든 명함의 가로 길이와 세로 길이를 나타내는 2차원 배열 sizes가 매개변수로 주어집니다. 모든 명함을 수납할 수 있는 가장 작은 지갑을 만들 때, 지갑의 크기를 return 하도록 solution 함수를 완성해주세요.

function solution(sizes) {
    let maxWidth = 0;
    let maxHeight = 0;

    // 각 명함의 가로 길이와 세로 길이를 비교하여 최대값을 구합니다.
    for (let i = 0; i < sizes.length; i++) {
        const [width, height] = sizes[i];

        maxWidth = Math.max(maxWidth, Math.max(width, height));
        maxHeight = Math.max(maxHeight, Math.min(width, height));
    }

    // 최종적으로 구한 최대 가로 길이와 세로 길이를 곱하여 지갑의 크기를 반환합니다.
    return maxWidth * maxHeight;
}

// 테스트
const sizes = [ [60, 50], [30, 70], [60, 30], [80, 40] ];
const result = solution(sizes);
console.log(result);

// sizes에 들어가는 각각 명함마다 길이를 구해야하고
// i번째 인덱스마다 가로세로 길이 들어감 변수i로 for문 열기
// Math.max(width, height)) 게중에 뭐가 더 큼? 더 큰값 골라주기
// 구해진 가로 길이중 가장 최대 길이를 고르면 그게 maxWidth
// 세로길이 똑같이 구함
// 곱하면 끝 ~

