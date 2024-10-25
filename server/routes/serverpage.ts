// server/routes/sitemap.xml.ts
export default defineEventHandler((event) => {
  return `<!DOCTYPE html>
    <html lang="en">

    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Document</title>
      <style>
        @media (prefers-reduced-motion:no-preference) {
          [letter-animation=hover]:hover>span {
            transform: scale(.75) perspective(1px)
          }

          [letter-animation=hover]>span {
            transition: transform .3s ease;
            cursor: pointer;
            will-change: transform
          }

          [letter-animation=hover]>span:hover {
            color: red;
            transform: scale(1.25) perspective(1px)
          }
        }

        div {
          width: 200px;
          height: 200px;
          border: 1px solid red;
          resize: both;
          overflow: hidden;
        }
      </style>
    </head>

    <body>
      <h1 split-by="letter" letter-animation="hover">
        服务器路由：悬停字母
      </h1>

      </div>
      <script>

        const span = (text, index) => {
          const node = document.createElement('span')

          node.textContent = text
          node.style.setProperty('--index', index)

          return node
        }

        const byLetter = text =>
          [...text].map(span)

        const { matches: motionOK } = window.matchMedia(
          '(prefers-reduced-motion: no-preference)'
        )

        if (motionOK) {
          const splitTargets = document.querySelectorAll('[split-by]')

          splitTargets.forEach(node => {
            let nodes = byLetter(node.innerText)

            if (nodes)
              node.firstChild.replaceWith(...nodes)
          })
        }
      </script>
    </body>

    </html>`
})
