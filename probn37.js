// 37번문제
// 문제 설명
// 행렬의 덧셈은 행과 열의 크기가 같은 두 행렬의 같은 행, 같은 열의 값을 서로 더한 결과가 됩니다. 2개의 행렬 arr1과 arr2를 입력받아, 행렬 덧셈의 결과를 반환하는 함수, solution을 완성해주세요.

// 제한 조건
// 행렬 arr1, arr2의 행과 열의 길이는 500을 넘지 않습니다.

function solution(arr1, arr2) {
    //행렬 arr1와 arr2가 주어진다.
    let answer = [];
    //answer 이라는 배열을 선언한다.

    for (let i = 0; i < arr1.length; i++) {
        //arr1 의 마지막까지 반복한다
        let sum = [];
        //sum이라는 배열을 선언한다.
        for (let j = 0; j < arr1[i].length; j++) {
            //
            sum.push(arr1[i][j] + arr2[i][j])
            // .push 로 sum 배열의 끝에 값을 하나씩 더해준다.
        }
        answer.push(sum)
        // answer 배열에 sum의 값을 모두 넣어준다.
    }
    return answer;
    // answer값을 리턴해주며 마무리.
}
console.log(solution([[1,2], [3,4]], [[3,4], [5,6]]));

// arr1 = [[1,2], [3,4]]
// arr2 = [[3,4], [5,6]]