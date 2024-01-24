// 47번 문제
// 문제 설명
// 문자열로 구성된 리스트 strings와, 정수 n이 주어졌을 때, 각 문자열의 인덱스 n번째 글자를 기준으로 오름차순 정렬하려 합니다. 예를 들어 strings가 ["sun", "bed", "car"]이고 n이 1이면 각 단어의 인덱스 1의 문자 "u", "e", "a"로 strings를 정렬합니다.

// 제한 조건
// strings는 길이 1 이상, 50이하인 배열입니다.
// strings의 원소는 소문자 알파벳으로 이루어져 있습니다.
// strings의 원소는 길이 1 이상, 100이하인 문자열입니다.
// 모든 strings의 원소의 길이는 n보다 큽니다.
// 인덱스 1의 문자가 같은 문자열이 여럿 일 경우, 사전순으로 앞선 문자열이 앞쪽에 위치합니다.

function solution(strings, n) {
    var answer = [];

    // 1. 문자열 가장 앞 글자를 붙인 배열 만들기
    for (var i = 0; i < strings.length; i++) { //i를 0번째부터 strings 길이보다 작을때까지 돌리기
        strings[i] = strings[i][n] + strings[i]; // 접근하려는 strings[1]은 sun이 된다. 의 n번째 요소.
        // sun으로 접근하면 sun -> n에 1이 들어가면 0, 1, 2번째에 의해 u
        // 그 후 strings[i] 를 붙히면 u + sun이 되는거임. usun.


    }

    // console.log(strings);

    // 2. 해당 배열을 사전 순으로 정렬 (sort)
    strings.sort(); // 아래 solution 호출하고, for문 실행하고 나온 값들을 사전 순으로 정렬
    // console.log(strings); // 그리고 정렬된 strings를 호출

    // 3. 앞 글자 제거 후 return
    for (var j = 0; j < strings.length; j++) {//j를 0번째부터 strings 길이보다 작을때까지 돌리기
        strings[j] = strings[j].replace(strings[j][0], ""); // 바꿀 값을 "" 으로 둠으로써 제거함
        answer.push(strings[j]);
    }

    // console.log("answer : ", answer);
    return answer;
}

// solution(["sun", "bed", "car"], 1); // solution 이라는 func 호출, strings에 해당 내용을, n에 1 할당

/////////////////////
// 답 부분
function solution(strings, n) {
    strings.sort((a,b)=>{
        if(a[n] > b[n]) return 1;
        if(b[n] > a[n]) return -1;

        // 만약 n번째 문자가 서로 같다면 전체 문자열에 대해 사전순으로 정렬
        if(a > b) return 1;
        if(b > a) return -1;

        return 0;
    });
    return strings;
}

console.log(solution(["sun", "bed", "car"], 1));

// 처음에 for문 열고, let i는 ... 이런식으로 작성했었는데 깔끔하게 정리된 풀이가 있어서 배워보고자 한다.
// 주어진 배열에서 각각의 문자열을 a, b에 집어넣고, n번째 인덱스를 집어넣는데, 이게 무슨 뜻이냐
// sort((a, b) => {}); 이건 곧 sort((next, prev) => {}); 이 된다.
// 몰랐던 부분인데 sort 메서드의 경우 비교함수를 작성해야 하는데, 1, 0, -1 총 3가지 경우의 수가 있다.
//  1. 1:0 보다 클 경우? // a가 먼저
//  2, 0:0 인 경우? // 그대로
//  3. -1:0 보다 작을 경우? // b가 먼저

// 즉 a에 sun, b에 bed를 넣고 n번째 인덱스 즉 1번째 인덱스를 넣어 u와 e를 비교
// 이때 '숫자도 아니고 알파벳끼리인데 크기비교가 어떻게 됨?' = 사전 순으로 문자열이 위치하게 됨

// 인자끼리 계산해서 a인자에 "sun", b인자에 "bed"를 주고 1번째 인덱스를 서로 비교할 때 u와 e를 비교하게 되는데
// e가 먼저이므로, b[n] > a[n]이 되서 -1을 반환, 이때는 b가 먼저가 된다. (a[n] > b[n]이 성립되서 1을 반환하면 a가 먼저 오게 된다.)
// 이렇게 배열 내 요소들을 각각 비교해서 오름차순으로 정렬하면 된다.

// for문을 열었을 때 보다 훨씬 간편하게 줄어들어 이 식을 가지고 온다.