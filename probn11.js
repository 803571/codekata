// 11번문제
// 문제 설명
// 정수 num이 짝수일 경우 "Even"을 반환하고 홀수인 경우 "Odd"를 반환하는 함수, solution을 완성해주세요.

// 제한 조건
// num은 int 범위의 정수입니다.
// 0은 짝수입니다.

function solution(num) {
    return (num%2 === 0?  'Even' : 'Odd');
}
console.log(solution(num));

// num이 3이면 3을 2로 나눠서 나머지가 0이냐? 맞으면 Even을 아니면 Odd를 출력

/////////////////////////////////////////////

function solution(num) {
    var answer = ''
    if(num%2 == 0){
        answer = "Even"
    }else{
        answer = "Odd"
    }    
    return answer;
}

// 이렇게 해도 되는데 이건 창 켰을때 있던 답이고

// 삼항연산자로도 될거 같은데