//CheckEmail EP
export const CheckEmailEP = 'http://localhost:8000/user/check'

//SignUp EP
export const SignUpEP = 'http://localhost:8000/user'

//Login EP
export const LoginEP = 'http://localhost:8000/auth/signin'

//SearchBall EP
export const SearchEP = (select) => {
  const endpoint = `http://localhost:8000/bowlingball?` +
    `company=${select.companies.join('&company=')}` +
    `&price=${select.price.join('&price=')}` +
    `&cover_stock=${select.cover_stock.join('&cover_stock=')}` +
    `&factory_finish=${select.factory_finish.join('&factory_finish=')}` +
    `&color=${select.color.join('&color=')}`;
    //수정해야 함, 나머지 조건들 나오면 수정.

  return endpoint;
}