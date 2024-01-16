// 41번 문제
// 문제 설명
// 문자열 s는 한 개 이상의 단어로 구성되어 있습니다. 각 단어는 하나 이상의 공백문자로 구분되어 있습니다. 각 단어의 짝수번째 알파벳은 대문자로, 홀수번째 알파벳은 소문자로 바꾼 문자열을 리턴하는 함수, solution을 완성하세요.

// 제한 사항
// 문자열 전체의 짝/홀수 인덱스가 아니라, 단어(공백을 기준)별로 짝/홀수 인덱스를 판단해야합니다.
// 첫 번째 글자는 0번째 인덱스로 보아 짝수번째 알파벳으로 처리해야 합니다.

function solution(s) {
    let arr = s.split(" "); // s를 공백기준으로 나눈 배열
    let answer = '';
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[i].length; j++) {
            if (j % 2 !== 0) {
                answer = answer + arr[i][j].toLowerCase();
            }else{
                answer = answer + arr[i][j].toUpperCase();
            }
        }
        if (i < arr.length - 1) {
            answer = answer + " ";
        }
    }
    return answer;
}

console.log(solution("try hello world"));

// 공백을 기준으로 , 그럼 총 세 덩어리로 나눈다고 가정을 했을 때
// split으로 나눠주기?

// 모든 단어에 대해 동일한 길이를 반복 (전체 문자열 단어 수)
// 한번 할 때마다 단어마다 다시 규칙을 줘야 하므로 반복문 안에 반복문
