!function(){function n(n){return"[object Function]"===Object.prototype.toString.call(n)}function o(o,e,t){if(r[o])throw new Error("Module "+o+" has been defined already.");n(e)&&(t=e),r[o]={factory:t,inited:!1,exports:null}}function e(o){var e,l,a,c;if(e=r[o],l={},a={exports:{}},!n(e.factory))throw new Error("Module "+o+" has no factory.");if(c=e.factory.call(void 0,t,l,a),void 0!==c)e.exports=c;else if(a.hasOwnProperty("exports")&&"object"==typeof a.exports&&a.exports instanceof Object==!0){var u,i=!1;for(u in a.exports)a.exports.hasOwnProperty(u)&&(i=!0);i===!1?e.exports=l:e.exports=a.exports}else e.exports=a.exports;e.inited=!0}function t(n){var o;if(o=r[n],!o)throw new Error("Module "+n+" is not defined.");return o.inited===!1&&e(n),o.exports}var r={};o("C:/Users/Yaodoggy/Documents/Program Files/Wamp/wamp/www-mdevp/mdevp/cache/www/longloop/longloop.js",function(n,o,e){!function(){var n=function(){var n=function(n){function o(n){var o=e(),a=null,f=n.timeout,d=function(e){n.onsuccess&&n.onsuccess(e),t(a),r(o)},x=function(e){n.onfail&&n.onfail(e),t(a),r(o)};n.url+="&"+s+"="+o;var p=l(n,o);u[o]=c[o]=function(){d.apply(null,arguments)},i[o]=function(){x.apply(null,arguments)},f&&(a=setTimeout(function(){a=null,clearTimeout(a),p.abort(),x.call(null)},f)),p.send()}function e(){var n="cxxxxxxx_xxxx_4xxx_yxxx_xxxxxxxxxxxx";return n.replace(/[xy]/g,function(n){var o=16*Math.random()|0,e="x"==n?o:3&o|8;return e.toString(16)})}function t(n){n&&(clearTimeout(n),n=null)}function r(n){try{u[n]=null,delete u[n],delete c[n]}catch(o){c[n]=void 0}}function l(n,o){var e,t=a.head||a.getElementsByTagName("head")[0]||a.body;return{send:function(){e=a.createElement("script"),e.async=!0,e.charset=f,e.src=n.url,e.id=o,e.onload=e.onreadystatechange=function(n){(n||!e.readyState||/loaded|complete/.test(e.readyState))&&(e.onload=e.onreadystatechange=null,e.parentNode&&e.parentNode.removeChild(e),e=null,n&&r(o))},e.onerror=function(){e.parentNode&&e.parentNode.removeChild(e),i[o]&&i[o].call(null),e=null},t.insertBefore(e,t.firstChild)},abort:function(){e&&e.onload(!0)}}}var a=document,c=window,u={},i={},s="callback",f="UTF-8";return{request:o}},o=!0;return{connect:function(e,t,r,l){var a=null,c=n(),u=12e4,i=function(){t.apply(this,arguments),d(),l&&f()},s=function(){o&&f()},f=function(){var n={url:e,timeout:0,onsuccess:i,onfail:s};c.request(n)},d=function(){a=null,clearTimeout(a),o=!1};u&&(a=setTimeout(function(){d(),r.call(null)},u)),f()},abort:function(){o=!1}}}();window.longPull=n}()}),e("C:/Users/Yaodoggy/Documents/Program Files/Wamp/wamp/www-mdevp/mdevp/cache/www/longloop/longloop.js")}();