// 43번 문제
// 문제 설명
// 숫자로 이루어진 문자열 t와 p가 주어질 때, t에서 p와 길이가 같은 부분문자열 중에서, 이 부분문자열이 나타내는 수가 p가 나타내는 수보다 작거나 같은 것이 나오는 횟수를 return하는 함수 solution을 완성하세요.

// 예를 들어, t="3141592"이고 p="271" 인 경우, t의 길이가 3인 부분 문자열은 314, 141, 415, 159, 592입니다. 이 문자열이 나타내는 수 중 271보다 작거나 같은 수는 141, 159 2개 입니다.

// 제한사항
// 1 ≤ p의 길이 ≤ 18
// p의 길이 ≤ t의 길이 ≤ 10,000
// t와 p는 숫자로만 이루어진 문자열이며, 0으로 시작하지 않습니다.

function solution(t, p) {
    const tLength = t.length;
    const pLength = p.length;
    let count = 0;

    for (let i = 0; i <= tLength - pLength; i++) {
        const substring = t.substring(i, i + pLength);
        const substringNum = parseInt(substring);
        const pNum = parseInt(p);

        if (substringNum <= pNum) {
            count++;
        }
    }

    return count;
}

console.log(solution("3141592", "271"));

// t = 3141592 p = 271
// p 길이가 3이니까 t를 3길이로 순차적으로 끊었을때 나오는 수 314 141 등등 
// 걔네중에 271보다 작거나 같은 수가 몇번 나오는지?

// 길이를 재야하니까 t길이 p길이 변수 주고
// t길이서 p길이를 뺀 길이만큼 증가하고
// i가 0부터 4까지 늘어나니까, t (3141592)의 0번째 인덱스 3부터 3번째 인덱스 1 (이 부분은 포함되지 않는다.) 즉 그 전 인덱스까지 셈
// 314를 const substring에 할당하고 그 수를 정수화해준 뒤 해당 수가 p를 정수화했을 떄 해당 수보다 같거나 작으면 count에 누적