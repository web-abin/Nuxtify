import AutoImport from 'unplugin-auto-import/vite'

export function createAutoImport() {
    return AutoImport({
        imports: ['vue'],
        dts: './auto-import.d.ts'
    })
}
