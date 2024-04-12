// 获取充值列表
export const fetchPriceList = () => {
  return useHttp.post(`pay/pay/price_list`, {})
}

// 创建订单
export const postCreateOrder = (params: any) => {
  return useHttp.post(`pay/pay/create_order`, params)
}

// 获取充值状态
export const fetchPayStatus = () => {
  return useHttp.post(`pay/pay`, {})
}

// 充值成功
export const postPaySuccess = (params: any) => {
  return useHttp.post(`h5/paypal/success`, params)
}

// 充值失败
export const postPayCancel = (params: any) => {
  return useHttp.post(`h5/paypal/cancel`, params)
}
