if(!self.define){let i,o={};const l=(l,e)=>(l=new URL(l+".js",e).href,o[l]||new Promise((o=>{if("document"in self){const i=document.createElement("script");i.src=l,i.onload=o,document.head.appendChild(i)}else i=l,importScripts(l),o()})).then((()=>{let i=o[l];if(!i)throw new Error(`Module ${l} didn’t register its module`);return i})));self.define=(e,n)=>{const r=i||("document"in self?document.currentScript.src:"")||location.href;if(o[r])return;let s={};const u=i=>l(i,r),m={module:{uri:r},exports:s,require:u};o[r]=Promise.all(e.map((i=>m[i]||u(i)))).then((i=>(n(...i),s)))}}define(["./workbox-6567b62a"],(function(i){"use strict";i.setCacheNameDetails({prefix:"test-working"}),self.addEventListener("message",(i=>{i.data&&"SKIP_WAITING"===i.data.type&&self.skipWaiting()})),i.precacheAndRoute([{url:"/ymko/css/app.fa173c6d.css",revision:null},{url:"/ymko/fonts/Montserrat-Bold.539516e6.woff2",revision:null},{url:"/ymko/fonts/Montserrat-Bold.591064f2.woff",revision:null},{url:"/ymko/fonts/Montserrat-Medium.17613827.woff",revision:null},{url:"/ymko/fonts/Montserrat-Medium.a60fb77e.woff2",revision:null},{url:"/ymko/fonts/Montserrat-Regular.c320ea18.woff2",revision:null},{url:"/ymko/fonts/Montserrat-Regular.e709b3e2.woff",revision:null},{url:"/ymko/fonts/Montserrat-SemiBold.bdc92123.woff2",revision:null},{url:"/ymko/fonts/Montserrat-SemiBold.d6397601.woff",revision:null},{url:"/ymko/fonts/PlovdivDisplay-Regular.a2b8eb3e.woff2",revision:null},{url:"/ymko/fonts/PlovdivDisplay-Regular.b6593a61.woff",revision:null},{url:"/ymko/img/arrow.ef98a4c0.svg",revision:null},{url:"/ymko/img/arrow_hover.3eb8ef9e.svg",revision:null},{url:"/ymko/img/arrow_input.139f4144.svg",revision:null},{url:"/ymko/img/bg__tile.2dfeb022.png",revision:null},{url:"/ymko/img/bg__tile_left.031ac5cc.png",revision:null},{url:"/ymko/img/bg__tile_right.dac66c6d.png",revision:null},{url:"/ymko/img/bg_tile_630.4664d826.png",revision:null},{url:"/ymko/img/bg_tile_course.4664d826.png",revision:null},{url:"/ymko/img/bg_tile_left.f43e4e57.png",revision:null},{url:"/ymko/img/bg_tile_right.66c7edbf.png",revision:null},{url:"/ymko/img/button_bg_left.0d64576a.svg",revision:null},{url:"/ymko/img/button_bg_right.5780aa05.svg",revision:null},{url:"/ymko/img/calendar.8b4b5392.svg",revision:null},{url:"/ymko/img/document.a41a1d77.svg",revision:null},{url:"/ymko/img/house.74403fe2.svg",revision:null},{url:"/ymko/img/img3.7ca43a9e.png",revision:null},{url:"/ymko/img/img5.a64e0a52.png",revision:null},{url:"/ymko/img/img8.439ee834.png",revision:null},{url:"/ymko/img/img9.b7f4a609.png",revision:null},{url:"/ymko/img/logo_footer.70f6159d.svg",revision:null},{url:"/ymko/img/main-image.3ef1b1ae.png",revision:null},{url:"/ymko/img/money.701a7d7f.svg",revision:null},{url:"/ymko/img/reaiting.26fb610b.svg",revision:null},{url:"/ymko/img/rhombus.a61db78b.svg",revision:null},{url:"/ymko/img/search.62feaf30.svg",revision:null},{url:"/ymko/img/telegram.0d2ac6bd.svg",revision:null},{url:"/ymko/img/vk.ee2e4598.svg",revision:null},{url:"/ymko/img/ymko-question.a82b70f3.png",revision:null},{url:"/ymko/img/ymko.9502cc3d.png",revision:null},{url:"/ymko/img/youtibe.cc882c85.svg",revision:null},{url:"/ymko/index.html",revision:"d17f1c020aaf6e371b4d3947fbb7262b"},{url:"/ymko/js/app.67a045e4.js",revision:null},{url:"/ymko/js/chunk-vendors.ddb143df.js",revision:null},{url:"/ymko/manifest.json",revision:"7ee1c707b83ac717bb7bf0f081c43741"},{url:"/ymko/robots.txt",revision:"b6216d61c03e6ce0c9aea6ca7808f7ca"}],{})}));
//# sourceMappingURL=service-worker.js.map