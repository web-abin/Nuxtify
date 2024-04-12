// 发送消息
export const postSendMessage = (params: any) => {
  return useHttp.post(`chat/chat/init_chat`, params)
}

// 初始化
export const initChat = (params: any) => {
  return useHttp.post(`chat/chat/init_chat`, params)
}

export const initUser = () => {
  return useHttp.post(`user/init/im_user`)
}

export const chatV3 = (params: any) => {
  return useHttp.post(`chat/chat/v3`, params)
}

export const chatLike = (params: any) => {
  return useHttp.post(`chat/chat/like`, params)
}

export const unlockImage = (params: any) => {
  return useHttp.post(`chat/chat/unlock_image`, params)
}
export const sendSelfie = (params: any) => {
  return useHttp.post(`chat/chat/send_selfie`, params)
}
