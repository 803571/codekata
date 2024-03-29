// 73번 문제
// 문제 설명
// 지나다니는 길을 'O', 장애물을 'X'로 나타낸 직사각형 격자 모양의 공원에서 로봇 강아지가 산책을 하려합니다. 산책은 로봇 강아지에 미리 입력된 명령에 따라 진행하며, 명령은 다음과 같은 형식으로 주어집니다.

// ["방향 거리", "방향 거리" … ]
// 예를 들어 "E 5"는 로봇 강아지가 현재 위치에서 동쪽으로 5칸 이동했다는 의미입니다. 로봇 강아지는 명령을 수행하기 전에 다음 두 가지를 먼저 확인합니다.

// 주어진 방향으로 이동할 때 공원을 벗어나는지 확인합니다.
// 주어진 방향으로 이동 중 장애물을 만나는지 확인합니다.
// 위 두 가지중 어느 하나라도 해당된다면, 로봇 강아지는 해당 명령을 무시하고 다음 명령을 수행합니다.
// 공원의 가로 길이가 W, 세로 길이가 H라고 할 때, 공원의 좌측 상단의 좌표는 (0, 0), 우측 하단의 좌표는 (H - 1, W - 1) 입니다.

// image

// 공원을 나타내는 문자열 배열 park, 로봇 강아지가 수행할 명령이 담긴 문자열 배열 routes가 매개변수로 주어질 때, 로봇 강아지가 모든 명령을 수행 후 놓인 위치를 [세로 방향 좌표, 가로 방향 좌표] 순으로 배열에 담아 return 하도록 solution 함수를 완성해주세요.


function solution(park, routes) {
    const parkHigh = park.length;
    const parkWidth = park[0].length;

    // 시작지점 인덱스 찾기
    let start;
    for (let i = 0; i < parkHigh; i++) {
        if (park[i].indexOf("S") !== -1) {
            start = [i, park[i].indexOf("S")];
            break;
        }
    }

    // 인덱스가 공원 길이를 넘어가거나, "X" 장애물 만나는지 체크
    const isValid = (x, y) => {
        return (
            x < 0 || parkHigh <= x || y < 0 || parkWidth <= y || park[x][y] === "X"
        );
    };

    // 각 명령어로 이동할 방향
    const directions = {
        E: [0, 1],
        W: [0, -1],
        S: [1, 0],
        N: [-1, 0],
    };


    for (const route of routes) {
        const [dir, distanceStr] = route.split(" ");
        let distance = parseInt(distanceStr);
        let [x, y] = start;

        let step = 0;

        // 명령어에 적힌 distance만큼 모두 이동할 때까지 반복
        while (step < distance) {
            x += directions[dir][0];
            y += directions[dir][1];

            // 유효하지 않은 이동or 장애물 만나면 해당 명령 종료
            if (isValid(x, y)) break;
            step++;
        }
        if (step === distance) start = [x, y];
    }

    return start;
}