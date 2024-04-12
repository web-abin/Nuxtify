// utils/facebook.js
export function initFacebookSdk() {
  // Load the Facebook SDK asynchronously
  (function (d, s, id) {
    var js,
      fjs = d.getElementsByTagName(s)[0]
    if (d.getElementById(id)) return
    js = d.createElement(s)
    js.id = id
    js.src = 'https://connect.facebook.net/en_US/sdk.js'
    fjs.parentNode.insertBefore(js, fjs)
  })(document, 'script', 'facebook-jssdk')

  return new Promise((resolve, reject) => {
    window.fbAsyncInit = function () {
      FB.init({
        appId: '431018072758947',
        cookie: true,
        xfbml: true,
        version: 'v16.0'
      })
      FB.AppEvents.logPageView()
      resolve()
    }
  })
}
