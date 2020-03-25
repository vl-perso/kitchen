!function(n){var e={};function t(a){if(e[a])return e[a].exports;var r=e[a]={i:a,l:!1,exports:{}};return n[a].call(r.exports,r,r.exports,t),r.l=!0,r.exports}t.m=n,t.c=e,t.d=function(n,e,a){t.o(n,e)||Object.defineProperty(n,e,{enumerable:!0,get:a})},t.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},t.t=function(n,e){if(1&e&&(n=t(n)),8&e)return n;if(4&e&&"object"==typeof n&&n&&n.__esModule)return n;var a=Object.create(null);if(t.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:n}),2&e&&"string"!=typeof n)for(var r in n)t.d(a,r,function(e){return n[e]}.bind(null,r));return a},t.n=function(n){var e=n&&n.__esModule?function(){return n.default}:function(){return n};return t.d(e,"a",e),e},t.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)},t.p="",t(t.s=13)}({0:function(n,e,t){"use strict";t.d(e,"c",(function(){return a})),t.d(e,"b",(function(){return r})),t.d(e,"d",(function(){return o})),t.d(e,"a",(function(){return c}));var a=function(n){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return fetch("https://keystone-blog-enrichment.herokuapp.com/admin/api",{method:"POST",headers:{"Content-Type":"application/json"},credentials:"include",body:JSON.stringify({variables:e,query:n})}).then((function(n){return n.json()})).catch((function(n){return console.log(n)}))},r=function(){return a("\n    {\n      authenticatedUser {\n        id\n        name\n        bookmarks {\n          id\n          path\n          name\n        }\n      }\n    }\n  ").then((function(n){return!(!n||!n.data)&&n.data.authenticatedUser}))},o=function(n){return n.every((function(n){return""!==n.value}))},c=function(n,e){return a(n,e).then((function(n){var e=n.data;return e?e.allPages?e.allPages[0]||{}:e.allComments?{comments:e.allComments}:e.addComment?e.addComment:e.clap?e.clap:e:{}}))}},13:function(n,e,t){"use strict";t.r(e);var a=t(0),r={"":["<em>","</em>"],_:["<strong>","</strong>"],"\n":["<br />"]," ":["<br />"],"-":["<hr />"]};function o(n){return n.replace(RegExp("^"+(n.match(/^(\t| )+/)||"")[0],"gm"),"")}function c(n){return(n+"").replace(/"/g,"&quot;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}var i=function n(e){var t,a,i,l,u,m=/((?:^|\n+)(?:\n---+|\* \*(?: \*)+)\n)|(?:^```(\w*)\n([\s\S]*?)\n```$)|((?:(?:^|\n+)(?:\t|  {2,}).+)+\n*)|((?:(?:^|\n)([>*+-]|\d+\.)\s+.*)+)|(?:\!\[([^\]]*?)\]\(([^\)]+?)\))|(\[)|(\](?:\(([^\)]+?)\))?)|(?:(?:^|\n+)([^\s].*)\n(\-{3,}|={3,})(?:\n+|$))|(?:(?:^|\n+)(#{1,3})\s*(.+)(?:\n+|$))|(?:`([^`].*?)`)|(  \n\n*|\n{2,}|__|\*\*|[_*])/gm,s=[],d="",p=0,f={};function h(n){var e=r[n.replace(/\*/g,"_")[1]||""],t=s[s.length-1]==n;return e?e[1]?(s[t?"pop":"push"](n),e[0|t]):e[0]:n}function g(){for(var n="";s.length;)n+=h(s[s.length-1]);return n}for(e=e.replace(/^\[(.+?)\]:\s*(.+)$/gm,(function(n,e,t){return f[e.toLowerCase()]=t,""})).replace(/^\n+|\n+$/g,"");i=m.exec(e);)a=e.substring(p,i.index),p=m.lastIndex,t=i[0],a.match(/[^\\](\\\\)*\\$/)||(i[3]||i[4]?t='<pre class="code '+(i[4]?"poetry":i[2].toLowerCase())+'">'+o(c(i[3]||i[4]).replace(/^\n+|\n+$/g,""))+"</pre>":i[6]?((u=i[6]).match(/\./)&&(i[5]=i[5].replace(/^\d+/gm,"")),l=n(o(i[5].replace(/^\s*[>*+.-]/gm,""))),">"===u?u="blockquote":(u=u.match(/\./)?"ol":"ul",l=l.replace(/^(.*)(\n|$)/gm,"<li>$1</li>")),t="<"+u+">"+l+"</"+u+">"):i[8]?t='<img src="'+c(i[8])+'" alt="'+c(i[7])+'">':i[10]?(d=d.replace("<a>",'<a href="'+c(i[11]||f[a.toLowerCase()])+'">'),t=g()+"</a>"):i[9]?t="<a>":i[12]||i[14]?t="<"+(u="h"+(i[14]?i[14].length:"="===i[13][0]?1:2))+">"+n(i[12]||i[15])+"</"+u+">":i[16]?t="<code>"+c(i[16])+"</code>":(i[17]||i[1])&&(t=h(i[17]||"--"))),d+=a,d+=t;return(d+e.substring(p)+g()).trim()},l=function(n){n.preventDefault();var e=n.target,t=document.title,r=e.elements,o=r.path,c=r.name,i=r.body,l=r.email;Object(a.d)([o,c,i,l])?Object(a.a)("\n  mutation AddComment($path: String!, $pageTitle: String, $comment: CommentCreateInput!) {\n    addComment(path:$path, pageTitle: $pageTitle, comment: $comment ){\n      comments {\n        id\n        name\n        body\n        date\n      }\n    }\n  }",{path:o.value,pageTitle:t,comment:{body:i.value,name:c.value,email:l.value}}).then((function(n){return alert("Thank you, all comments are moderated before publishing."),e.reset(),n})).then(u).catch((function(n){alert("Sorry, there was an error sending this comment.")})):alert("All fields are required")},u=function(n){var e=n.comments;document.getElementById("keystone-comments").innerHTML="\n  <h2>Comments</h2>\n  ".concat(e?'<ul class="keystone-comments">'.concat(e.map((function(n){return'\n          <li class="keystone-comment">\n            <div class="l-stack">\n              <div class="l-comment-name">\n                <img src="https://api.adorable.io/avatars/64/'.concat(n.name,'.png">\n                <div class="l-comment-meta">\n                  <span>').concat(n.name,'</span>\n                  <span class="comment-date">').concat(new Date(n.date).toLocaleDateString(void 0,{year:"numeric",month:"short",day:"numeric",hour:"2-digit",minute:"2-digit"}),'</span>\n                </div>\n              </div>\n              <div class="l-stack">').concat(i(n.body),"</div>\n            </div>\n          </li>")})).join("\n"),"</ul>"):"")},m=window.location.pathname;Object(a.a)("\nquery Comments ($path: String!) {\n  allComments (where: {page: { path: $path } }) {\n    id, \n    name, \n    body, \n    date\n  }\n}\n",{path:m}).then(u).then((function(){var n=window.location.pathname,e=document.createElement("form");e.innerHTML='\n      <h3>Join the discussion</h3>\n      <input type="hidden" name="path" value="'.concat(n,'"/>\n      <div class="l-form-row">\n        <label>Name</label>\n        <input type="text" name="name" class="input" />\n      </div>\n      <div class="l-form-row">\n        <label>Email</label>\n        <input type="text" name="email" class="input"/>\n      </div>\n      <div class="l-form-row">\n        <label>Comment</label>\n        <textarea name="body" class="textarea"></textarea>\n      </div>\n      <div class="l-form-row">\n      <button type="submit" class="button">\n        Share opinion\n      </button>\n      </div>\n      '),e.classList.add("js-keystone-comment-form"),e.addEventListener("submit",l),window.document.querySelector("#keystone-comments-form").appendChild(e)}))}});
//# sourceMappingURL=keystone-comments.js.map