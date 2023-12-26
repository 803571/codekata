// 27번문제
// 문제 설명
// 프로그래머스 모바일은 개인정보 보호를 위해 고지서를 보낼 때 고객들의 전화번호의 일부를 가립니다.
// 전화번호가 문자열 phone_number로 주어졌을 때, 전화번호의 뒷 4자리를 제외한 나머지 숫자를 전부 *으로 가린 문자열을 리턴하는 함수, solution을 완성해주세요.

// 제한 조건
// phone_number는 길이 4 이상, 20이하인 문자열입니다.

function solution(phone_number) {
    // 전화번호의 길이를 구합니다.
    let len = phone_number.length;

    // 뒷 4자리를 제외한 나머지 부분을 '*'로 채웁니다.
    let maskedNumber = '*'.repeat(len - 4) + phone_number.slice(-4);
    // 11자리 번호에서 0103333에 해당하는 7자리를 *로 만들어야하니
    // 번호길이에서 4만큼 길이를 줄여서 7자리를 *화 시킴
    // 문자열의 끝에서 역으로 4자리를 추출, 이건 4444에 해당함

    return maskedNumber;
}

console.log(solution("01033334444"));