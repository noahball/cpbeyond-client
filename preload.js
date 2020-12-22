/*// All of the Node.js APIs are available in the preload process.
// It has the same sandbox as a Chrome extension.
window.addEventListener('DOMContentLoaded', () => {
  const replaceText = (selector, text) => {
    const element = document.getElementById(selector)
    if (element) element.innerText = text
  }

  for (const type of ['chrome', 'node', 'electron']) {
    replaceText(`${type}-version`, process.versions[type])
  }
})
*/

function redirect(){window.location.href = 'https://play.cpbeyond.com/desktop';}
window.addEventListener('DOMContentLoaded', () => {
  var url = window.location.href;
    if(url.includes('play.cpbeyond.com') == false && url.includes('app/index.html') == false && url.includes('altodev') == false && url.includes('cpbeyond') == false){redirect();}
  });