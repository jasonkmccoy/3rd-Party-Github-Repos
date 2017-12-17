// classie.js
// A library agnostic extensible DOM utility. Nothing else.
// This piece of JavaScript just adds/removes classnames
// https://github.com/ded/bonzo
!function(a){"use strict";function b(a){return new RegExp("(^|\\s+)"+a+"(\\s+|$)")}function f(a,b){var f=c(a,b)?e:d;f(a,b)}var c,d,e;"classList"in document.documentElement?(c=function(a,b){return a.classList.contains(b)},d=function(a,b){a.classList.add(b)},e=function(a,b){a.classList.remove(b)}):(c=function(a,c){return b(c).test(a.className)},d=function(a,b){c(a,b)||(a.className=a.className+" "+b)},e=function(a,c){a.className=a.className.replace(b(c)," ")});var g={hasClass:c,addClass:d,removeClass:e,toggleClass:f,has:c,add:d,remove:e,toggle:f};"function"==typeof define&&define.amd?define(g):a.classie=g}(window);

// modalEffects.js v1.0.0
// http://tympanus.net/codrops/2013/06/25/nifty-modal-window-effects/
var ModalEffects = (function() {
    function init() {
        var overlay = document.querySelector('.md-overlay');
        [].slice.call(document.querySelectorAll('.md-trigger')).forEach(function(el, i) {
            var modal = document.querySelector('#' + el.getAttribute('data-modal')),
                close = modal.querySelector('.md-close');
            function removeModal(hasPerspective) {
                classie.remove(modal, 'md-show');
                if (hasPerspective) {
                    classie.remove(document.documentElement, 'md-perspective');
                }
            }
            function removeModalHandler() {
                removeModal(classie.has(el, 'md-setperspective'));
            }
            el.addEventListener('click', function(ev) {
                classie.add(modal, 'md-show');
                overlay.removeEventListener('click', removeModalHandler);
                overlay.addEventListener('click', removeModalHandler);
                if (classie.has(el, 'md-setperspective')) {
                    setTimeout(function() {
                        classie.add(document.documentElement, 'md-perspective');
                    }, 25);
                }
            });
            close.addEventListener('click', function(ev) {
                ev.stopPropagation();
                removeModalHandler();
            });
        });
    }
    init();
})();

