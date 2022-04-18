// 아이디 형식: 최소 6자 이상, 알파벳 소문자(a~z), 숫자(0~9)를 포함
export const userIdCHK = (userId) => {
  let _reg = /^(?!(?:[0-9]+)$)([a-zA-Z]|[0-9a-zA-Z]){6,}$/;
  return _reg.test(userId);
};

//비번: 10자 이상, 최소 하나의 문자, 하나의 숫자 및 하나의 특수 문자
export const passwordCHK = (password) => {
  let _reg =
    /^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%*#?&])[A-Za-z\d$@$!%*#?&]{10,}$/;

  return _reg.test(password);
};

// 닉네임(이름) 형식: 한글 또는 알파벳 대소문자(a~z, A~Z)
export const usernameCHK = (username) => {
  let _reg = /^[가-힣a-zA-Z]+$/;
  return _reg.test(username);
};
