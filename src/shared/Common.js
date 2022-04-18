// 아이디 형식: 최소 6자 이상, 알파벳 소문자(a~z), 숫자(0~9)를 포함
export const userIdCHK = (userId) => {
  let _reg = /^(?!(?:[0-9]+)$)([a-zA-Z]|[0-9a-zA-Z]){6,}$/;
  return _reg.test(userId);
};

//비번: 10자 이상, 영문/숫자/특수문자(공백제외)만 허용. 2개이상의 조합, 동일한 숫자 3개이상 연속 사용 불가
export const passwordCHK = (password) => {
  const _reg = /^(?=.*[a-zA-Z])((?=.*\d)|(?=.*\W)).{10,}$/;
  return _reg.test(password) && password.search(/\s/) == -1 ? true : false;

  //현재님이 주신 정규식코드(자바)
  // ^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{10,}$|^(?=.*\d)(?=.*[$@$!%*#?&])[\d$@$!%*#?&]{10,}$|^(?=.*[$@$!%*#?&])(?=.*[A-Za-z])[A-Za-z$@$!%*#?&]{10,}$|^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%*#?&])[A-Za-z\d$@$!%*#?&]{10,}$
  // (\w)\1\1
};

// 닉네임(이름) 형식: 한글 또는 알파벳 대소문자(a~z, A~Z)
export const usernameCHK = (username) => {
  let _reg = /^[가-힣a-zA-Z]+$/;
  return _reg.test(username);
};
