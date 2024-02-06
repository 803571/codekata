// 55번 문제
// 문제 설명
// 코니는 영어 단어가 적힌 카드 뭉치 두 개를 선물로 받았습니다. 코니는 다음과 같은 규칙으로 카드에 적힌 단어들을 사용해 원하는 순서의 단어 배열을 만들 수 있는지 알고 싶습니다.

// 원하는 카드 뭉치에서 카드를 순서대로 한 장씩 사용합니다.
// 한 번 사용한 카드는 다시 사용할 수 없습니다.
// 카드를 사용하지 않고 다음 카드로 넘어갈 수 없습니다.
// 기존에 주어진 카드 뭉치의 단어 순서는 바꿀 수 없습니다.
// 예를 들어 첫 번째 카드 뭉치에 순서대로 ["i", "drink", "water"], 두 번째 카드 뭉치에 순서대로 ["want", "to"]가 적혀있을 때 ["i", "want", "to", "drink", "water"] 순서의 단어 배열을 만들려고 한다면 첫 번째 카드 뭉치에서 "i"를 사용한 후 두 번째 카드 뭉치에서 "want"와 "to"를 사용하고 첫 번째 카드뭉치에 "drink"와 "water"를 차례대로 사용하면 원하는 순서의 단어 배열을 만들 수 있습니다.

// 문자열로 이루어진 배열 cards1, cards2와 원하는 단어 배열 goal이 매개변수로 주어질 때, cards1과 cards2에 적힌 단어들로 goal를 만들 있다면 "Yes"를, 만들 수 없다면 "No"를 return하는 solution 함수를 완성해주세요.

function solution(cards1, cards2, goal) {
    let answer = '';
    return answer;
}


function solution(cards1, cards2, goal) {
    /*
    1. 찾을 단어와 카드 뭉치의 제일 앞에 있는 것과 비교해서 찾은 단어라면 소멸
    2. 두 뭉치를 전부 썼으면 조합 가능
    3. goal 외의 글자를 카드 뭉치들이 가졌을 경우가 있으므로 Count를 통해 goal 길이만큼 삭제했는지 확인
    */

    let count = 0; // 얼마나 많은 단어가 찾아졌는지를 기록합니다.

    for (let i = 0; i < goal.length; i += 1) { // goal의 길이보다 작을때까지 증가. i++ 나 i += 1 이나 서로 같음
        const findWord = goal[i]; // findword = 현재 단어 가 goal의 i번째 인덱스 단어와 일치하는지 확인

        if (cards1[0] === findWord) { // cards1 첫 번째 덱의 0번째 인덱스가 현재 단어와 같다면
            cards1.shift(); // shift메소드로 제거
            count++; // 그리고 count를 1씩 증가
        } else if (cards2[0] === findWord) { // 만일 cards2 두 번째 덱의 0번째 인덱스가 현재 단어와 같다면
            cards2.shift(); // shift메소드로 제거
            count++;
        } else {
            return "No" // 어디에도 속하지 않는 경우라면, "No"를 반환
        }
    }

    return goal.length === count ? "Yes" : "No" // goal의 길이가 count와 일치하나요? 일치하면 Yes를, 그렇지 않다면  No 반환
}

solution(["i", "drink", "water"],["want", "to"], ["i", "want", "to", "drink", "water"])