export interface PostLoginParams {
  email: string
  passward: string
}
// 登陆
export const postLogin = async (params: PostLoginParams) => {
  return useHttp.post(`/user/login`, params)
}

// 获取用户信息
export const getUserCenter = async () => {
  return useHttp.get(`https://jsonplaceholder.typicode.com/users/4`)
}
