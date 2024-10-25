import process from 'node:process'
import { loadEnv } from 'vite'
import { wrapperEnv } from './utils'

interface EnvConfig {
    viteEnv: ViteEnv
}

const env = loadEnv(process.env.NODE_ENV ?? 'production', process.cwd())
const viteEnv = wrapperEnv(env)

export function useEnv(): EnvConfig {
    return {
        viteEnv
    }
}
