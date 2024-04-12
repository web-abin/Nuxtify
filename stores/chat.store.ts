import { defineStore } from 'pinia'
import { Message } from '@arco-design/web-vue'
import { postSendMessage } from '~/apis/chat'

function storeSetup() {
  const chatState = reactive({
    page: 1,
    pagesize: 10,
    // 是否正在发送
    isSending: false,
    // 加载更多历史记录
    isLoadingMore: false,
    // 聊天列表
    chatList: [
      { id: 1 },
      { id: 2 },
      { id: 3 },
    ],
    // 消息总数
    messageCount: 10,
    // 正在聊天的对象
    activeChat: {
      id: '234'
    },
    // 正在聊天的人的个人主页信息
    activeUserInfo: {
      imgs: [
        ' https://t11.baidu.com/it/u=3783470805,211060689&fm=30&app=106&f=JPEG?w=640&h=800&s=9D14C315440BED4D5C8521CB0300F0B2',
        ' https://t11.baidu.com/it/u=3783470805,211060689&fm=30&app=106&f=JPEG?w=640&h=800&s=9D14C315440BED4D5C8521CB0300F0B2',
        ' https://t11.baidu.com/it/u=3783470805,211060689&fm=30&app=106&f=JPEG?w=640&h=800&s=9D14C315440BED4D5C8521CB0300F0B2'
      ]
    },
    // 聊天记录
    chatHistory: [
      {
        role: 'assistent',
        context: 'Hi babe, you crossed my mind today. ❤️ Hi today. ❤️ Hi babe'
      },
      {
        role: 'assistent',
        context:
          'https://file.ccmapp.cn/group1/M00/16/64/rApntl7CSdeAbpYqABArOjGaasg001.jpg',
        dataType: 'img'
      },
      {
        role: 'user',
        context:
          'My day was good, I can’t believe you’re starting your junior year of high school.My day was good, I can’t believe you’re starting your junior year of high school.My day was good, I can’t believe you’re starting your junior year of high school.'
      },
      {
        role: 'assistent',
        context:
          'crossedcrossedcrossedcrossedcrossedcrossedMy day was good, I can’t believe you’re starting your junior year of high school.My day was good, I can’t believe you’re starting your junior year of high school.My day was good, I can’t believe you’re starting your junior year of high school.'
      },
      {
        role: 'assistent',
        context:
          'https://img0.baidu.com/it/u=1962807659,305906573&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=1083',
        dataType: 'img'
      }
    ],
    // 显示下载app
    showDownload: false
  })

  // 获取聊天记录
  const fetchChatHistory = () => {
    chatState.isLoadingMore = true
    setTimeout(() => {
      chatState.isLoadingMore = false
    }, 1500)
  }

  // 发送消息
  const handleSendMessage = async () => {
    try {
      const params = {}
      const res = await postSendMessage(params)
    } catch (error) {
      Message.error('发送失败')
    }
    chatState.isSending = true
    setTimeout(() => {
      chatState.isSending = false
    }, 1500)
  }

  return {
    ...toRefs(chatState),
    handleSendMessage,
    fetchChatHistory
  }
}
export const useChatStore = defineStore('app-chat', storeSetup, {
  persist: false
})
