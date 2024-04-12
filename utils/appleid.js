// https://developer.apple.com/help/account/
// https://developer.apple.com/account/resources/identifiers/list
// https://appstoreconnect.apple.com/apps/6480452580/distribution/info
export function initAppleID(successCallback, failCallback) {
  const {
    public: { env, origin: locationOrigin }
  } = useRuntimeConfig()

  // console.log('AppleID初始化')
  AppleID.auth.init({
    clientId: 'xmate.com',
    scope: 'name',
    redirectURI:
      env === 'development' ? 'https://test-xmate.ai' : locationOrigin,
    // state: '[STATE]',
    // nonce: '[NONCE]',
    usePopup: true
  })
  document.addEventListener('AppleIDSignInOnSuccess', (event) => {
    // Handle successful response.
    console.log(event.detail.data)
    successCallback()
  })

  // Listen for authorization failures.
  document.addEventListener('AppleIDSignInOnFailure', (event) => {
    // Handle error.
    console.log(event.detail.error)
    failCallback()
  })
}
