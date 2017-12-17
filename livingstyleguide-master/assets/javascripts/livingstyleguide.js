;(function(win) {

  getCookie = function(name) {
    var regexp = new RegExp('(?:^|;)\\s*' + name + '\\s*=(.+?)(?:;|$)'),
        match  = document.cookie.match(regexp);
    if (match) {
      return escape(match[1]);
    }
  }

  setCookie = function(name, value, expireDays) {
    var cookie = name + '=' + escape(value);
    if (expireDays) {
      var expireDate = new Date();
      expireDate.setDate(expireDate.getDate() + expireDays);
      cookie += '; expires=' + expireDate.toUTCString();
    }
    document.cookie = cookie;
  }

  getClasses = function(el) {
    return el.className.split(/\s+/g);
  };

  addClass = function(el, name) {
    var classList = getClasses(el);
    if (classList.indexOf(name) == -1) {
      classList.push(name);
      el.className = classList.join(' ');
    }
  };

  removeClass = function(el, name) {
    var classList = getClasses(el);
    classList[classList.indexOf(name)] = null;
    el.className = classList.join(' ');
  };

  toggleClass = function(el, name) {
    var classList = getClasses(el);
    if (classList.indexOf(name) == -1) {
      addClass(el, name);
      return true;
    }
    else {
      removeClass(el, name);
      return false;
    }
  };

  var html = document.getElementsByTagName('HTML')[0];

  // Hide/show code

  var codeOpenedClass = 'show-code';

  if (getCookie(codeOpenedClass) != 'false') {
    addClass(html, codeOpenedClass);
  }

  function toggleCode(event) {
    event.preventDefault();
    showCode = toggleClass(html, codeOpenedClass);
    setCookie(codeOpenedClass, showCode, 365);
  }

  document.addEventListener('DOMContentLoaded', function() {
    var switches = document.getElementsByClassName('livingstyleguide--code-switch');
    for (var i = 0; i < switches.length; i++) {
      switches[i].addEventListener('click', toggleCode);
    }
  });

})(window);

