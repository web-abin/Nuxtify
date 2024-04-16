import type { PluginOption } from 'vite'
import { createCompression } from './compression'
import { createComponents } from './components'
import { createIcons } from './icons'
import { createAutoImport } from './autoImport'

export function createVitePlugins(viteEnv: ViteEnv) {
  const vitePlugins: (PluginOption | PluginOption[])[] = [
    // 组件按需导入
    createComponents(),
    createIcons(),
    createAutoImport()
  ]
  // gzip压缩插件
  vitePlugins.push(...createCompression(viteEnv))
  return vitePlugins
}
