// import http from './config';

export const TestService = async () => {
  const path = 'https://catfact.ninja/fact';
  // http.get(path).then((res) => {
  //   return res;
  // });
  const response = await fetch(path);
  return response.json();
};
