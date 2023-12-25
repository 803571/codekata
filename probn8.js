// 8번문제
// 문제 설명
// 각에서 0도 초과 90도 미만은 예각, 90도는 직각, 90도 초과 180도 미만은 둔각 180도는 평각으로 분류합니다. 각 angle이 매개변수로 주어질 때 예각일 때 1, 직각일 때 2, 둔각일 때 3, 평각일 때 4를 return하도록 solution 함수를 완성해주세요.

// 예각 : 0 < angle < 90 , 리턴값 1
// 직각 : angle = 90 , 리턴값 2
// 둔각 : 90 < angle < 180 , 리턴값 3
// 평각 : angle = 180 , 리턴값 4

// 제한사항
// 0 < angle ≤ 180
// angle은 정수입니다.

function solution(angle) {
    if (0 < angle && angle < 90) {
        return 1; // 예각
    } else if (angle === 90) {
        return 2; // 직각
    } else if (angle > 90 && angle < 180) {
        return 3; // 둔각
    } else if (angle === 180) {
        return 4; // 평각
    } else {
        // 잘못된 각도가 주어진 경우 예외 처리
        console.error("잘못된 각도입니다. 0 < angle ≤ 180을 만족해야 합니다.");
        return -1; // 예외 처리를 나타내는 값을 반환
    }
}
// console.log(solution(50));

///////////////////////////////////////

function solution(angle) {
    return [0, 90, 91, 180].filter(x => angle>=x).length;
}

console.log(solution(191));

// 다른사람풀이인데 191도는 답이 안나와야하는거아닌가?
// 주어진 조건을 만족했기 때문에 오류가 안나나?