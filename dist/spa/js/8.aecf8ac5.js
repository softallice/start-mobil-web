(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[8],{"04ee":function(e,s,t){var o={"./icons/apple-icon-120x120.png":"3d3c","./icons/apple-icon-152x152.png":"2a86","./icons/apple-icon-167x167.png":"c5e6","./icons/apple-icon-180x180.png":"8c98","./icons/favicon-16x16.png":"dbd8","./icons/favicon-32x32.png":"2106","./icons/favicon-96x96.png":"092e","./icons/favicon.ico":"2661","./icons/icon-128x128.png":"a0de","./icons/icon-192x192.png":"1b1c","./icons/icon-256x256.png":"2a48","./icons/icon-384x384.png":"31f3","./icons/icon-512x512.png":"2e0d","./icons/ms-icon-144x144.png":"e1e8","./icons/safari-pinned-tab.svg":"0b0e","./posts/2020/04/08/books.jpg":"99e9","./posts/2020/04/08/build-blog-using-quasar.md":"1a09","./posts/2020/04/15/beverage.png":"abd3","./posts/2020/04/15/diet-coffee.md":"22fb","./posts/2020/04/21/diet-food.md":"ca7e","./posts/2020/04/21/vegetables.jpg":"9421","./posts/2020/05/10/bathroom-scale.jpg":"8196","./posts/2020/05/10/daily-diet.md":"8732","./resources/design-small.jpg":"b2b3","./resources/design.jpg":"d8b0","./resources/design/design.md":"d6bc","./resources/design/design_header.jpg":"7663","./resources/design/design_header_small.jpg":"d2be","./resources/development.png":"9421e","./resources/development/development.md":"8da8","./resources/development/development.png":"dc4a","./resources/development/my-setup/latitude7390.png":"55a2","./resources/development/my-setup/mysetup.md":"516d","./resources/header-coffee-c.jpg":"2638","./resources/header-coffee.jpg":"0c99","./resources/header.jpg":"fc96","./resources/header2.jpg":"d7c5"};function n(e){var s=a(e);return t(s)}function a(e){if(!t.o(o,e)){var s=new Error("Cannot find module '"+e+"'");throw s.code="MODULE_NOT_FOUND",s}return o[e]}n.keys=function(){return Object.keys(o)},n.resolve=a,e.exports=n,n.id="04ee"},5155:function(e,s,t){"use strict";t("9592")},9592:function(e,s,t){},b524:function(e,s,t){"use strict";t.r(s);var o=function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("q-page",{staticClass:"page-with-transparent-header"},[t("q-parallax",{attrs:{src:e.headerImage}},[t("div",{staticClass:"header-image-content post-header-image-content row"},[t("div",{staticClass:"q-px-md text-white"},[t("div",{staticClass:"text-h2 text-bold q-pa-md"},[e._v(e._s(e.post.attributes.title))]),t("div",{staticClass:"text-h3"},[e._v(" "+e._s(e.post.attributes.description))]),t("div",{staticClass:"text-subtitle"},[e._v(e._s(e.publishedDate(e.post.attributes.publishDate)))])])])]),t("div",{staticClass:"row justify-center"},[t("div",{staticClass:"post-container q-pa-lg bg-white",domProps:{innerHTML:e._s(e.post.html)}})])],1)},n=[],a=t("bd4c"),i={name:"PostShow",data(){return{post:{},headerImage:""}},methods:{getPost(){const e=this.$route.fullPath.split("/");e.shift();const s=e.pop()+".md",o=e.join("/");console.log("filenam",s),console.log("folderPath",o),this.post=t("04ee")(`./${o}/${s}`),console.log(this.post.attributes.headerImage),console.log(this.post.attributes.headerImage),this.headerImage=t("04ee")(`./${o}/${this.post.attributes.headerImage}`)},publishedDate(e){return a["b"].formatDate(new Date(e+"T00:00:00"),"MMMM Do, YYYY")}},created(){this.getPost()}},c=i,r=(t("5155"),t("2877")),p=t("9989"),d=t("639d"),l=t("eebe"),g=t.n(l),u=Object(r["a"])(c,o,n,!1,null,null,null);s["default"]=u.exports;g()(u,"components",{QPage:p["a"],QParallax:d["a"]})}}]);