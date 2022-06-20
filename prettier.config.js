/**
 * prettier setting configuration
 * document URL: https://prettier.io/docs/en/options.html
 *
 * 주석 달기 편해서 js 파일로 함
 */

module.exports = {
  printWidth: 80, // edit code line 너비
  trailingComma: "es5",
  tabWidth: 2, // 탭 간격
  semi: true, // 코드 끝 자동 ; 붙이기
  singleQuote: false, // 외따옴표 허용 여부
  bracketSpacing: true, // 중괄호 내 자동 간격
  bracketSameLine: false, // > 닫는 태그 라인을 요소와 같은 라인으로 할지 여부
  arrowParens: "always", // always | avoid, 화살표 함수 인자값 부분 괄호 여부
};
