/* eslint-disable */
// const getLanguage = () => navigator.userLanguage || (navigator.languages && navigator.languages.length && navigator.languages[0]) || navigator.language || navigator.browserLanguage || navigator.systemLanguage || 'en';
// alert(getLanguage());

var css = function(url, integrity, crossOrigin, callback) {
  var head = document.getElementsByTagName('head')[0];
  var cssNode = document.createElement('link');

  cssNode.type = 'text/css';
  cssNode.rel = 'stylesheet';
  cssNode.href = url;
  cssNode.integrity = integrity;
  cssNode.crossOrigin = crossOrigin;

  cssNode.onreadystatechange = callback;
  cssNode.onload = callback;

  head.appendChild(cssNode);
};

var supportsES6 = function() {
  try {
    new Function("(a = 0) => a");
    return true;
  }
  catch (err) {
    return false;
  }
}();

var show = function(elemId) {
  var element = document.getElementById(elemId);
  if (element) {
    element.style.display = 'block';
  }
}

var hide = function(elemId) {
  var element = document.getElementById(elemId);
  if (element) {
    element.style.display = 'none';
  }
}

var unsupportedBrowserAlert = document.getElementById('unsupported-browser-alert');
var unsupportedBrowserErrorMsg = document.getElementById('unsupported-error-message');
hide('unsupported-browser-alert');

if (supportsES6 === false) {
  css('https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css',
    'sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm',
    'anonymous', function() {
      show('unsupported-browser-alert')
      unsupportedBrowserErrorMsg.innerHTML = 'This browser is not supported by KFC App. Please download these browsers to use this app:';
    });
}
