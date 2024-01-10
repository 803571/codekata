// 39번문제
// 두 수를 입력받아 두 수의 최대공약수와 최소공배수를 반환하는 함수,
// solution을 완성해 보세요. 배열의 맨 앞에 최대공약수, 
// 그다음 최소공배수를 넣어 반환하면 됩니다. 
// 예를 들어 두 수 3, 12의 최대공약수는 3, 최소공배수는 12이므로 
// solution(3, 12)는 [3, 12]를 반환해야 합니다.

// 제한 사항
// 두 수는 1이상 1000000이하의 자연수입니다.
// 입출력 예

function solution(n, m) {
    let gcd = (a, b) => a % b === 0? b : gcd(b, a % b);
    // a와 b를 나눈 나머지가 0일 경우 b를, 아니라면 최대공약수 (b와 a를 b로 나눈 나머지)
    let lcm = (a, b) => a * b / gcd(a, b);
    // a와 b를 곱한 값을 최대공약수 (a와 b)로 나누기
    return [gcd(n, m), lcm(n, m)];
}

console.log(solution(3, 12));

function solution(n, m) {
    let gcd = (n, m) => n % m === 0? m : gcd(m, n % m);
    // a와 b를 나눈 나머지가 0일 경우 b를, 아니라면 최대공약수 (b와 a를 b로 나눈 나머지)
    let lcm = (n, m) => n * m / gcd(n, m);
    // a와 b를 곱한 값을 최대공약수 (a와 b)로 나누기
    return [gcd(n, m), lcm(n, m)];
}

console.log(solution(3, 12));

// gcd 최대공약수, lcm 최소공배수


// n을 m으로 나눈 나머지 r
// 최대공약수 (n과 m) = 최대공약수 (m과 r)
// r이 0일경우 , 즉 여기서 3을 12으로 나눴을 경우 나머지=r이 0일경우
// 그때는 m이 최대공약수가 된다. (이 경우에는 해당하지 않음.)
// n과 m의 크기가 n < m인 경우 값이 자동으로 스왑되는데
// 최대공약수 (12, (3%12=3))

// 나는 이걸 검색하고서도 뭔소리야 했는데 초등학교문제였네.......


// 다른 풀이

function gcdlcm(a, b) {
    var r; //위에서 언급한 n과 m을 나눈 나머지
    for(var ab= a*b;r = a % b;a = b, b = r){}
    return [b, ab/b];
}