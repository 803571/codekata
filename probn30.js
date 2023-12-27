// 30번문제
// 문제 설명
// 단어 s의 가운데 글자를 반환하는 함수, solution을 만들어 보세요. 단어의 길이가 짝수라면 가운데 두글자를 반환하면 됩니다.

// 재한사항
// s는 길이가 1 이상, 100이하인 스트링입니다.

function solution(s) {
    let answer = ''; // 반환할 가운데 글자
    if (s.length % 2 == 0) { // s의 길이가 짝수라면
        answer = s[s.length / 2 - 1] + s[s.length / 2];
        // 단어가 짝수라면 반환해야할 값도 2개라서 2로 나눈값
        // 만약 abcdefgh 라면 길이8을 2로 나눴을 때 4, 즉 e가 나오는데 가운데 두글자 반환이니까 -1인 d까지 같이 묶어서 반환해야하므로
    } else {
        answer = s[Math.floor(s.length / 2)]; // s의 길이가 홀수라면
        // 단어가 5글자로 홀수라면 2로 나눴을 때 2.5 소수점이 들어가므로
        // Math.floor로 반내림해서 2, abcde를 기준으로 s[2]면 0,1,2 c를 뜻한다.
        // abcdefghi 9자리면 4.5고 이를 floor로 반내림하면 4
        // s[4] 4번째 인덱스이자 배열의 가운데인 e를 반환하게 된다
    }
    return answer;
}

console.log(solution("abcde"));


// 단어 s는 "abcde" 가운데면 c, 짝수면 가운데 두글자 (qwer이면 we)
// 그냥 문자열을 뜻하고
// 주어진 문자열이 짝 홀인지부터 판단하고
// 짝이면 ~ 홀이면 ~
