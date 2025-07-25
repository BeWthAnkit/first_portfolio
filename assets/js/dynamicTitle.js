window.onload = function () {
  const favicon = document.getElementById('favicon')
  const pageTitle = document.title
  const attentionMessage = 'Ankit Kumar | Portfolio'

  document.addEventListener('visibilitychange', function (e) {
    const isPageActive = !document.hidden
    toggle(isPageActive)
  })

  function toggle(isPageActive) {
    if (isPageActive) {
      document.title = pageTitle
      favicon.href = './assets/images/dp_favicon.svg'
    } else {
      document.title = attentionMessage
      favicon.href = './assets/images/dp_favicon.svg'
    }
  }
}
