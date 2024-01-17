// 38번문제
// 문제 설명
// 이 문제에는 표준 입력으로 두 개의 정수 n과 m이 주어집니다.
// 별(*) 문자를 이용해 가로의 길이가 n, 세로의 길이가 m인 직사각형 형태를 출력해보세요.

// 제한 조건
// n과 m은 각각 1000 이하인 자연수입니다.

process.stdin.setEncoding('utf8');
process.stdin.on('data', data => { // 데이터 수신을 위해 호출되는 이벤트 리스너 라고 하네요~ 'data'는 수신받은 데이터를 담고있는 buffer 객체
    const n = data.split(" ");
    const a = Number(n[0]), b = Number(n[1]);
    let answer = "";
    for(let i = 0; i < b; i++){
        for(let j = 0; j < a; j++) {
            answer += "*";
        }
        answer += "\n"; // <b>였나? 사전주차때 했던 줄바꿈 생각남
    }
    // console.log(a);
    // console.log(b);
});

console.log(solution());

// 왜 오류가 나지? output size differs가 뭔가 . 사이즈 벗어나서 그런건데
// a랑 b위치를 바꾸면 해결됨

// 뭐임????? 처음 봄 
// utf8이 뭔가? 유니코드...뭐뭐
// 어렵게 생각안하고 맨위에는 그냥 유니코드8로 진행한다~ 의 뜻으로 둘때
// 10번째줄은 평소대로 function solution 뭐뭐뭐

// n은 주어진 데이터를 각각의 원소로 나누어주고
// a는 나누어진 n의 0번째 인덱스를 숫자화, b는 n의 1번째 인덱스를 숫자화

// 두 개의 정수 n , m 가로가 n이고 세로가 m인 직사각형 각각 5와 3
// 처음보는 형태여서 약간의 검색을 통해 알은 바로는, 이게 결국 가로세로길이 = n*m형태의 .. 
// 이게맞나, 아무튼 가5세3라면 data에 53이라는 숫자가 들어가게 됨
// data가 53이니 const n 에 의해 53을 ["5", "3"]으로 나누게 되는데
// a는 n의 0번째 5, b는 n의 1번째 3을 가지게 된다. 그럼 최초 주어진 정수 n, m처럼 a와 b가 가로세로의 길이

// 가로길이만큼 *을 늘리고, 세로길이만큼 또 *을 늘리고?
// 형태를 출력해줄 (사각형을 만들어줄) 변수를 선언하고 let answer = ''
// 가로길이만큼 늘어난다~ 하려면 일단 이런건 포문부터 열고 봐야한다
// for (let i = 0; i <a; i++) {} 이러면 a의 길이만큼 늘어날거고
// 첫 포문 {안에 } for문을 하나 더 열어서 for (let j = 0; j < b; i++) {} 이러면 b의 길이만큼 늘어나는데