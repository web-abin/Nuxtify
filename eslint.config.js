import process from 'node:process'
import antfu from '@antfu/eslint-config'
import unocss from '@unocss/eslint-config/flat'

process.env.ESLINT_TSCONFIG = 'tsconfig.json'
export default {
    ...antfu,
    ...unocss,
    rules: {
        ...antfu.rules,
        ...unocss.rules,
        'vue/script-setup-uses-vars': 'off'
    }
}
