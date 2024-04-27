const odd = "홀수입니다.";
const even = "짝수입니다.";

module.exports = {
  odd,
  even,
  );

// exports 선언, module.exports 새로운 객체 생성해서 넣으면 참조관계가 끊김
// 한번 require 하면 require 캐시에 저장
//module.exports === exports === {odd, even}
