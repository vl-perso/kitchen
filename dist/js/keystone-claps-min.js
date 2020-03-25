!function(n){var t={};function e(a){if(t[a])return t[a].exports;var r=t[a]={i:a,l:!1,exports:{}};return n[a].call(r.exports,r,r.exports,e),r.l=!0,r.exports}e.m=n,e.c=t,e.d=function(n,t,a){e.o(n,t)||Object.defineProperty(n,t,{enumerable:!0,get:a})},e.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},e.t=function(n,t){if(1&t&&(n=e(n)),8&t)return n;if(4&t&&"object"==typeof n&&n&&n.__esModule)return n;var a=Object.create(null);if(e.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:n}),2&t&&"string"!=typeof n)for(var r in n)e.d(a,r,function(t){return n[t]}.bind(null,r));return a},e.n=function(n){var t=n&&n.__esModule?function(){return n.default}:function(){return n};return e.d(t,"a",t),t},e.o=function(n,t){return Object.prototype.hasOwnProperty.call(n,t)},e.p="",e(e.s=9)}({0:function(n,t,e){"use strict";e.d(t,"c",(function(){return a})),e.d(t,"b",(function(){return r})),e.d(t,"d",(function(){return o})),e.d(t,"a",(function(){return i}));var a=function(n){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return fetch("https://keystone-blog-enrichment.herokuapp.com/admin/api",{method:"POST",headers:{"Content-Type":"application/json"},credentials:"include",body:JSON.stringify({variables:t,query:n})}).then((function(n){return n.json()})).catch((function(n){return console.log(n)}))},r=function(){return a("\n    {\n      authenticatedUser {\n        id\n        name\n        bookmarks {\n          id\n          path\n          name\n        }\n      }\n    }\n  ").then((function(n){return!(!n||!n.data)&&n.data.authenticatedUser}))},o=function(n){return n.every((function(n){return""!==n.value}))},i=function(n,t){return a(n,t).then((function(n){var t=n.data;return t?t.allPages?t.allPages[0]||{}:t.allComments?{comments:t.allComments}:t.addComment?t.addComment:t.clap?t.clap:t:{}}))}},2:function(n,t){n.exports='<svg focusable="false" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" style="max-width:200px" viewBox="0 0 64 64"><path d="M54.255 25.75c-2.854-1.952-4.644-4.562-6.075-8.581-.532-1.494-1.859-2.46-3.381-2.46-1.636 0-3.132 1.055-4.104 2.894a8.582 8.582 0 00-.986 3.28c-1.008-1.838-3.056-2.229-4.027-.922 0 0-7.986-6.071-10.71-8.004-3.62-2.566-8.415.276-8.295 3.211-4.571-2.478-9.589 1.897-8.043 6.482-1.768-.324-6.29 4.363-1.536 7.963-3.293.338-4.572 5.494-.745 7.841 0 0 .018.713.069 1.063-2.522.766-3.392 5.534-.953 7.039 0 0 17.59 11.232 23.645 14.611 3.29 1.836 8.955 2.557 14.002.918 4.901-.508 9.059-3.106 12.4-7.736 9.195-12.742 1.911-25.429-1.261-27.599m-1.077 26.357c-3.829 5.38-9.328 5.938-13.536 5.938-6.869 0-11.065-3.293-11.065-3.293L9.725 40.676c-3.569-2.464-1.42-6.39 1.084-6.318l14.997 10.219 1.846.115S14.257 35.076 9.92 31.691c-2.532-1.976-1.7-5.75 1.578-6.5l18.756 13.464 1.844.115-20.035-15.538c-4.233-3.094.015-8.928 4.119-5.957 4.733 3.426 18.972 14.285 18.972 14.285l1.846.116-18.745-15.527c-.162-2.396 3.025-4.479 5.573-2.573 5.124 3.833 20.504 15.32 20.504 15.32-.396-1.109-.594-1.943-.594-1.943s-2.922-4.858-1.339-8.395c1.39-3.102 4.202-2.598 4.769-.931 1.507 4.438 3.068 7.072 6.191 9.292 3.988 2.835 8.066 13.605-.181 25.188"></path><path d="M46.041 2.889L37.431 2l2.938 12.26zM53.165 5.264L48.79 15.457l10.205-2.734zM29.111 3.549l-6.21 5.133 8.944 5.828z"></path></svg>'},9:function(n,t,e){"use strict";e.r(t);var a=e(0),r=e(2),o=e.n(r),i=window.document.querySelector("#keystone-claps-form"),c=function(n){n.preventDefault();var t=n.target,e=document.title,r=t.elements.path;r&&Object(a.a)("\n  mutation Clap($path: String!, $pageTitle: String) {\n      clap(path: $path, pageTitle: $pageTitle) {\n        id,\n        claps\n    }\n  }",{path:r.value,pageTitle:e}).then((function(n){var t=n.claps;u(t)}))},u=function(n){document.getElementById("keystone-claps").innerHTML="<span>".concat(n||0,"</span>")};if(i){var l=window.location.pathname;Object(a.a)("\n  query GetClaps($path: String!) {\n    allPages (where: { path: $path  }) {\n      id, \n      claps,\n      path\n    }\n  }",{path:l}).then((function(n){var t=n.claps,e=document.createElement("form"),a=window.location.pathname;e.innerHTML='\n      <input type="hidden" name="path" value="'.concat(a,'"/>\n      <div class="show-some-love">\n        <button type="submit" class="clap-button">\n          <div class="heart heart-1"></div>\n          <div class="heart heart-2"></div>\n          <div class="heart heart-3"></div>\n          <div class="heart heart-4"></div>\n          <div class="heart heart-5"></div>\n          ').concat(o.a,'\n          <span id="keystone-claps">').concat(t||0,"</span>\n        </button>\n        <p>Show some love!</p>\n      </div>\n      "),e.classList.add("js-clap-form"),e.addEventListener("submit",c),i.appendChild(e)}))}}});
//# sourceMappingURL=keystone-claps.js.map