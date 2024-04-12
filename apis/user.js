// 登陆
export const userLogin = async (params) => {
  return useHttp.post(`/user/login`, params)
}

// 获取用户信息
export const getUserCenter = async () => {
  return useHttp.post(`/user/center`)
}
