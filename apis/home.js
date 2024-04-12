// 获取用户ai列表
export const getIndexList = (params) => {
  return useHttp.post(`index/home`, params)
}

export const testapi = (params) => {
  return useHttp.post(`https://ug.baidu.com/mcp/pc/pcsearch`, params)
}
