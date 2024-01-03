export interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  phone: string;
  role: string;
  created_at: Date;
  modify_date: Date;
}

//로그인 요청
export interface ILoginData {
  email: string;
  password: string;
  rememberMe: boolean;
}

//회원가입 요청
export interface ISignUpData {
  nickname: string;
  password: string;
  email: string;
  posture: string;
  is_right_handed: boolean | undefined;
}