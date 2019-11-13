(function() {
  'use strict';

  function start() {
    var root = document.getElementById('scorecard-root');
    var content = document.createElement('div');
    content.innerHTML = "Hello world";
    root.appendChild(content);
  }

  document.addEventListener('DOMContentLoaded', start);
})()
