declare module '#app' {
  interface PageMeta {
    title: string
    sort?: number
  }

  interface NuxtApp {
    $sensors: any
  }
}
// It is always important to ensure you import/export something when augmenting a type
export {}
