// 40번 문제
// 문제 설명
// 자연수 n이 매개변수로 주어집니다. n을 3진법 상에서 앞뒤로 뒤집은 후, 이를 다시 10진법으로 표현한 수를 return 하도록 solution 함수를 완성해주세요.

// 제한사항
// n은 1 이상 100,000,000 이하인 자연수입니다.

// function solution(n) {
//     let answer = 0;
//     return answer;
// }

// console.log(solution(n));


// 10진법을 3진법으로 바꾸는 힘!...
// let decimal = 45
// console.log(decimal.toString(3));
// 이러면 매개변수 45를 3진법으로 나타내는거니까

// function solution(n) {
//     return n.toString(3).split("").reverse().join();
    
// }

// console.log(solution(45));

// 를 하면 0,0,2,1이 나옴

// 이 수를 도로 10진수로 나타내려면?
// 뒤에 toString을 한번 더 붙히는건 작동을 안하니까 한줄요약을 하지말고 다시

function solution(n) {
    const aA = n.toString(3).split("").reverse().join(""); 
    const decimal = parseInt(aA, 3); 
    return decimal;
    
}

console.log(solution(45)); 

// 1. 변수 aA는 주어진 n을 3진수로 바꿈. toString(3)은 해당 수를 3진수로 표현하는 문자열이 된다.
// 1-2. 45.toString(3);은 1200이 된다.
// 2. .split("") 으로 3진수로 변환된 문자열을 각각 자릿수별로 분할, ["1", "2", "0", "0"]
// 3. .reverse()로  뒤집어서 ["0", "0", "2" ,"1"]
// 4. .join("")을 하면 뒤집어진 배열을 다시 문자열로 결합해서 "0021"
// 5. parseInt를 써서 3진수 문자열 "0021"을 10진수로 바꾸는데 (바꿀 수, 이 수가 표현된 진법유형) 으로 나타냄. 3진수 aA를 바꾸는거니까 뒤에 3이 붙는다.
// 6. 호출 시 10진수로 변환하면서 7이 나옴.