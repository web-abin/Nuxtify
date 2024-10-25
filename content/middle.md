# 中间件

> 中间件可以理解为我们常说的路由守卫，在 middleware 文件夹下创建中间件

## 一、本项目中的中间件案例

-   **/middleware/auth.ts**：命名路由中间件，在需要的页面中通过 **definePageMeta({ middleware: 'auth' })** 引入使用；
-   **/middleware/title.global.ts**：全局路由中间件，只要文件名带有 **.global** ，即可注册为全局中间件，在每次路由更改时运行；

除此以外，可以在页面中设置内联中间件：

```
definePageMeta({
  middleware: [
    function (to, from) {
      // Custom inline middleware
    },
    'auth'
  ],
})
```

## 二、额外说明

### 1.**defineNuxtRouteMiddleware**导出路由守卫：

```
export default defineNuxtRouteMiddleware((to, from) => {
 // do something
 return navigateTo('/')
})
```

### 2. 构建时批量设置具名中间件

```
// nuxt.config.ts
import type { NuxtPage } from 'nuxt/schema'

export default defineNuxtConfig({
  hooks: {
    'pages:extend' (pages) {
      function setMiddleware (pages: NuxtPage[]) {
        for (const page of pages) {
          if (/* some condition */ true) {
            page.meta ||= {}
            // Note that this will override any middleware set in `definePageMeta` in the page
            page.meta.middleware = ['named']
          }
          if (page.children) {
            setMiddleware(page.children)
          }
        }
      }
      setMiddleware(pages)
    }
  }
})

```

### 3. 路由守卫可能的返回值：

-   无（简单 return 或根本不返回）- 不会阻止导航，并将移动到下一个中 ​​ 间件功能（如果有），或完成路线导航
-   return navigateTo('/')- 重定向到给定路径，如果重定向发生在服务器端，则将重定向代码设置为“已找到”302
-   return navigateTo('/', { redirectCode: 301 })- 重定向到给定路径，如果重定向发生在服务器端，则将重定向代码设置为永久移动 301
-   return abortNavigation()- 停止当前导航
-   return abortNavigation(error)- 拒绝当前导航并出现错误

### 4. 动态添加中间件

如果需要动态添加中间件，例如在插件中添加，可以使用**addRouteMiddleware()**辅助函数：

```
export default defineNuxtPlugin(() => {
  addRouteMiddleware('global-test', () => {
    console.log('this global middleware was added in a plugin and will be run on every route change')
  }, { global: true })

  addRouteMiddleware('named-test', () => {
    console.log('this named middleware was added in a plugin and would override any existing middleware of the same name')
  })
})

```

```
import type { NuxtPage } from 'nuxt/schema'

export default defineNuxtConfig({
  hooks: {
    'pages:extend' (pages) {
      function setMiddleware (pages: NuxtPage[]) {
        for (const page of pages) {
          if (/* some condition */ true) {
            page.meta ||= {}
            // Note that this will override any middleware set in `definePageMeta` in the page
            page.meta.middleware = ['named']
          }
          if (page.children) {
            setMiddleware(page.children)
          }
        }
      }
      setMiddleware(pages)
    }
  }
})
```
