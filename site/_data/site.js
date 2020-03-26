module.exports = {
  name: "VL Kitchen",
  shortDesc:
    "Des recettes en direct de la cuisine",
  url: "https://vl-kitchen.netlify.com/",
  authorEmail: "vl@vlapierre.fr",
  authorHandle: "",
  authorName: "VL",
  postsPerPage: 4,

  theme: {
    background: "black",
    text: "white"
  },

  keystone: {
    comments: true,
    bookmarks: true,
    claps: true,
    login: true
  },
  // Critical CSS results in much slower build times and uses a lot of system resources
  // See `site/transforms/critical-css-transform.js` for more details
  criticalCSS: false
};
