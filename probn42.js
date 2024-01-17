// 42번 문제
// 문제 설명
// 한국중학교에 다니는 학생들은 각자 정수 번호를 갖고 있습니다. 이 학교 학생 3명의 정수 번호를 더했을 때 0이 되면 3명의 학생은 삼총사라고 합니다. 예를 들어, 5명의 학생이 있고, 각각의 정수 번호가 순서대로 -2, 3, 0, 2, -5일 때, 첫 번째, 세 번째, 네 번째 학생의 정수 번호를 더하면 0이므로 세 학생은 삼총사입니다. 또한, 두 번째, 네 번째, 다섯 번째 학생의 정수 번호를 더해도 0이므로 세 학생도 삼총사입니다. 따라서 이 경우 한국중학교에서는 두 가지 방법으로 삼총사를 만들 수 있습니다.

// 한국중학교 학생들의 번호를 나타내는 정수 배열 number가 매개변수로 주어질 때, 학생들 중 삼총사를 만들 수 있는 방법의 수를 return 하도록 solution 함수를 완성하세요.

// 제한사항
// 3 ≤ number의 길이 ≤ 13
// -1,000 ≤ number의 각 원소 ≤ 1,000
// 서로 다른 학생의 정수 번호가 같을 수 있습니다.

function solution(number) {
    let count = 0;
    const length = number.length;
    for (let i = 0; i < length -2; i++) {
        for (let j = i + 1; j < length - 1; j++) {
            for (let k = j + 1; k < length; k++) {
                if (number[i] + number[j] + number[k] === 0) {
                    count++;
                }
            }
        }
    }
    return count;
}

console.log(solution([-2, 3, 0, 2, -5]));

// 주어진 수 중 3개 골라서 합한게 0이되면 통과되는 조건
// 배열 number의 길이만큼 i가 증가해서 i의 n번째 인덱스를 어떤 조건에 따라 
// answer라는 변수안에 집어넣어 합산하는 방식인가?
// 주어진 배열에서 3개의 수를 골라 합산했을때 0이 되는 가짓수가 몇개인지 찾아야하니
// 가짓수 count를 먼저 선언
// 배열 안에서 3개를 골라야하니까 반복문 3개. 즉 배열을 3번 돈다. for문 3번
// i는 배열 길이보다 2만큼 작은 길이보다 작을때까지 증가하는데 이는 다른 두 명의 학생이 들어갈 공간을 남겨야하기때문
// j는 두번째 학생인데 i의 다음위치에서 시작하므로 i +1, 최소 한명의 학생을 위한 공간을 남겨야 하므로 배열 길이보다 1작은 길이보다 작을때까지 증가
// k는 세번쨰 학생이므로 j다음 위치에서 시작하여 배열의 끝까지 이동

// i가 배열의 길이보다 2만큼 작아야 하는 이유는 3명의 학생을 더해 0이 되는 경우를 찾아야 하니까
// i가 첫번째 학생이면 남은 두 학생을 찾아야 하기 때문이다.

// 즉 i는 주어진 배열 기준으로 -2만큼의 인덱스까지만 이동이 가능하니 5-2 =3
// -2, 3, 0, 2 까지
// j는 -1만큼의 인덱스까지만 이동이 가능하니 5-1 = 4, 단 시작점은 i보다 +1
// 3, 0, 2, -5 까지
// k는 남은 인덱스까지 모두 이동이 가능하니 5, 단 시작점은 j보다 +1
// 0, 2, -5 까지
// 배열의 i번째 인덱스 , j, k 번째 인덱스의 합의 경우의 수 중 0이 되는 가짓수만 count에 합산