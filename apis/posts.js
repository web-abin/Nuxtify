// 获取文章列表
export const getPostList = (params) => {
  return useHttp.get(`https://jsonplaceholder.typicode.com/posts/1`, params)
}
