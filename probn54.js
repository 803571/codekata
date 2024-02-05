// 54번 문제
// 문제 설명
// 2016년 1월 1일은 금요일입니다. 2016년 a월 b일은 무슨 요일일까요? 두 수 a ,b를 입력받아 2016년 a월 b일이 무슨 요일인지 리턴하는 함수, solution을 완성하세요. 요일의 이름은 일요일부터 토요일까지 각각 SUN,MON,TUE,WED,THU,FRI,SAT

// 입니다. 예를 들어 a=5, b=24라면 5월 24일은 화요일이므로 문자열 "TUE"를 반환하세요.

// 제한 조건
// 2016년은 윤년입니다.
// 2016년 a월 b일은 실제로 있는 날입니다. (13월 26일이나 2월 45일같은 날짜는 주어지지 않습니다)

// function solution(a, b) {
//     let answer = '';
//     return answer;
// }

// a가 5월 b가 24일 2016년 5월 24일은 화요일 "TUE"를 반환하게끔 한다.

function solution(a, b) {
    // 각 달의 일수를 배열로 저장, 순차적으로 1~12월.
    const daysInMonth = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    
    // 2016년 1월 1일은 금요일이므로 금요일을 0번 인덱스로 설정. 이 변수는 일주일을 나타냅니다.
    const daysOfWeek = ["FRI", "SAT", "SUN", "MON", "TUE", "WED", "THU"];
    
    // 입력받은 월 이전까지의 일 수를 모두 더함
    let totalDays = 0;
    for (let i = 0; i < a - 1; i++) { // 입력받은 n월의 값이 a월-1보다 작을때까지. 5-1하는 이유는 0번째 인덱스가 1월이니까
        totalDays += daysInMonth[i]; // 1월부터 4월에 해당하는 일수를 totalDays 변수에 집어넣습니다.
    }
    
    // 입력받은 일 수를 더함
    totalDays += b - 1;
    // 날짜를 1부터 시작하는게 아니라 0부터 시작해서 세기 때문에 -1을 해줍니다.
    // 즉 1월 1일이 0으로 시작하기 때문
    
    // 총 일 수를 7로 나눈 나머지를 이용해 요일을 구함
    const dayOfWeekIndex = totalDays % 7;
    
    // 결과 반환
    return daysOfWeek[dayOfWeekIndex];
}

console.log(solution(5, 24));