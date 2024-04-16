interface PostListParams {
  _start?: number
  _limit?: number
}

// 获取文章列表
export const getPostList = (params: PostListParams) => {
  return useHttp.get(`https://jsonplaceholder.typicode.com/posts/1`, params)
}
