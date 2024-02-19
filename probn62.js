// 62번 문제
// 문제 설명
// 머쓱이는 태어난 지 11개월 된 조카를 돌보고 있습니다. 조카는 아직 "aya", "ye", "woo", "ma" 네 가지 발음과 네 가지 발음을 조합해서 만들 수 있는 발음밖에 하지 못하고 연속해서 같은 발음을 하는 것을 어려워합니다. 문자열 배열 babbling이 매개변수로 주어질 때, 머쓱이의 조카가 발음할 수 있는 단어의 개수를 return하도록 solution 함수를 완성해주세요.

// 제한사항
// 1 ≤ babbling의 길이 ≤ 100
// 1 ≤ babbling[i]의 길이 ≤ 30
// 문자열은 알파벳 소문자로만 이루어져 있습니다.

function solution(babbling) {
    const can = ['aya','ye','woo','ma'];
    let count = 0;
    
    for(let i = 0; i < babbling.length; i++){
        let babble = babbling[i];
        
        for(let j = 0; j < can.length; j++){
            if(babble.includes(can[j].repeat(2))){
                break;
            }
            
            babble = babble.split(can[j]).join(" ");
        }
        
        if(babble.split(" ").join("").length === 0){
            count += 1;
        }
    }
    
    return count;
}


// babbling에는 "aya", "yee", "u", "maa" // ??? : "yee~"
// 두번 연속 시전할 수 없습니다.
// 그래서 중간에 if문과 break를 넣습니다. 두번 연속 사용할 경우 캍ㅌ
// 두번 연속 시전하지 않는다면 배열 can 원소를 합칩니다 (split 진행)
// 합쳐줄 때 ("")로 묶을 경우 새로 조합된 단어에 can 원소에 해당하는 문자열이 들어가므로 (" ")으로 묶어줍니다.
// 전자의 경우 ye, 후자의 경우 y,e 이므로 전자는 배열 can에 속하고 후자는 배열 can에 속하지 않게 됩니다.
// 이렇게 연산을 모두 마친 babble은 공백문자로 나뉘어져 있으므로 공백을 제거하여 재조합을 하는데, 재조합한 문자 길이가 0이 아니라면 can 의 원소 외 다른 문자가 포함되어있는 거니까
// 발음할 수 없는 단어이므로 연산하지 않습니다.
// 즉 재조합한 문자열은 ""이어야 발음할 수 있으므로 문자열의 길이가 0이라면 count를 증가시킵니다.