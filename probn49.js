// 49번 문제
// 문제 설명
// 정수 배열 numbers가 주어집니다. numbers에서 서로 다른 인덱스에 있는 두 개의 수를 뽑아 더해서 만들 수 있는 모든 수를 배열에 오름차순으로 담아 return 하도록 solution 함수를 완성해주세요.

// 제한사항
// numbers의 길이는 2 이상 100 이하입니다.
// numbers의 모든 수는 0 이상 100 이하입니다.

function solution(numbers) {
    let answer = [];
    for (let i = 0; i < numbers.length; i++) {
        for (let j = i + 1; j < numbers.length; j++ ) {
            let sum = numbers[i] + numbers[j];
            if ( answer.indexOf(sum) === -1 ){
                answer.push(sum);
            }
        }
    }
    answer.sort(function(a, b) {
        return a - b;
    })
    return answer;
}

// let numbers = [2, 1, 3, 4, 1]
// 인덱스를 더해서 나올 수 있는 수는 2 3 4 5 6 7
// 2+1 = 3, 2+3 = 5, 2+4 = 6, 2+1 = 3 (중복)
// 1+3 = 4, 1+4 = 5, 1+1= 2
// 3+4 = 7, 3+1 = 4
// 4+1 = 5
// 2 3 3 4 4 5 5 6 7
// 이걸 구현하려면 인덱스마다 돌면서 더해야하겠지? for문을 두번 돌려준다

// 근데 위에 설명했듯 중복된 숫자가 일부 존재하므로, 이를 걸러줘야 함
// 중간 if ( answer.indexOf(sum) === -1 ) 은 sum이 변수 answer 에 이미 존재하는지를 확인함. -1은 배열에 없음을 의미
// 즉, 너가 구한 sum 값이 변수 answer 안에 없을 경우  (중복값이 아닐경우) 해당 sum 값을 answer에 넣는다.

// 그렇게 넣어진 수들을 정렬 해야하므로, a - b 첫번째 원소와 두번째 원소를 비교해 작은 원소를 앞에다 배열한다.
// indexOf 메소드는 배열이나 문자열에서 특정 요소나 문자의 첫 번째 인덱스를 찾는 메소드인데
// answer.indexOf(sum)는 결국 answer 라는 변수 (answer는 []; 이므로 배열형태) 내에서 sum 값을 찾는다.
// 내가 넣으려는 sum값이 answer 안에 이미 존재한다면 === -1에 부합하지 않으므로 튕겨내고, answer 안에 값이 없다면 === -1에 부합하므로 집어넣는다.