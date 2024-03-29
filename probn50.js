// 50번 문제
// 문제 설명
// 문자열 s가 주어졌을 때, s의 각 위치마다 자신보다 앞에 나왔으면서, 자신과 가장 가까운 곳에 있는 같은 글자가 어디 있는지 알고 싶습니다.
// 예를 들어, s="banana"라고 할 때,  각 글자들을 왼쪽부터 오른쪽으로 읽어 나가면서 다음과 같이 진행할 수 있습니다.

// b는 처음 나왔기 때문에 자신의 앞에 같은 글자가 없습니다. 이는 -1로 표현합니다.
// a는 처음 나왔기 때문에 자신의 앞에 같은 글자가 없습니다. 이는 -1로 표현합니다.
// n은 처음 나왔기 때문에 자신의 앞에 같은 글자가 없습니다. 이는 -1로 표현합니다.
// a는 자신보다 두 칸 앞에 a가 있습니다. 이는 2로 표현합니다.
// n도 자신보다 두 칸 앞에 n이 있습니다. 이는 2로 표현합니다.
// a는 자신보다 두 칸, 네 칸 앞에 a가 있습니다. 이 중 가까운 것은 두 칸 앞이고, 이는 2로 표현합니다.
// 따라서 최종 결과물은 [-1, -1, -1, 2, 2, 2]가 됩니다.

// 문자열 s이 주어질 때, 위와 같이 정의된 연산을 수행하는 함수 solution을 완성해주세요.

// 제한사항
// 1 ≤ s의 길이 ≤ 10,000
// s은 영어 소문자로만 이루어져 있습니다.

function solution(s) {
    let answer = [];
    return answer;
}

// s = "banana" 반환값은 [-1, -1, -1, 2, 2, 2]
// s = "foobar" 반환값은 [-1, -1, 1, -1, -1, -1]

function solution(s) {
    let ret = [];
    
    for(let i =0 ; i< s.length ; i++){
        let before = s.slice(0,i)
        ret.push(before.lastIndexOf(s[i])===-1 ? -1 : i-before.lastIndexOf(s[i]))
    }
    
    return ret;
}

//  0부터 i까지 복사한 값을 담는 새 배열  before (문자열의 길이만큼 증가, 이때 0부터 5까지)
// 배열에서 문자열의 i번쨰 인덱스 가 -1인가? 맞다면 -1을 넣고 그렇지 않다면 i에서 해당 인덱스를 뺀 값을 넣는다.

// 다른 해설은 봐도 바로 이해를 못했는데 이번 식은 보고서 눈에 바로 들어와서 이해하기 쉬웠다.
// 문제가 어떤식으로 할거다~ (누구는 -1, 누구는 몇칸 앞에 있으므로 2 등등) 라고 적어준 걸 먼저 읽었을 때는 무슨 문제인지 알겠는데 문제에서 설명해주는 건 뭔소린지 바로 이해를 못해서 더 어려웠던 것 같다.
