if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let s=Promise.resolve();return a[e]||(s=new Promise((async s=>{if("document"in self){const a=document.createElement("script");a.src=e,document.head.appendChild(a),a.onload=s}else importScripts(e),s()}))),s.then((()=>{if(!a[e])throw new Error(`Module ${e} didn’t register its module`);return a[e]}))},s=(s,a)=>{Promise.all(s.map(e)).then((e=>a(1===e.length?e[0]:e)))},a={require:Promise.resolve(s)};self.define=(s,f,d)=>{a[s]||(a[s]=Promise.resolve().then((()=>{let a={};const i={uri:location.origin+s.slice(1)};return Promise.all(f.map((s=>{switch(s){case"exports":return a;case"module":return i;default:return e(s)}}))).then((e=>{const s=d(...e);return a.default||(a.default=s),a}))})))}}define("./service-worker.js",["./workbox-3774b91f"],(function(e){"use strict";e.setCacheNameDetails({prefix:"mr-hope"}),self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.clientsClaim(),e.precacheAndRoute([{url:"assets/css/0.styles.a46dd816.css",revision:"e62b50d268671e70405e5638c1a9f611"},{url:"assets/img/danger-dark.5fb01a54.svg",revision:"5fb01a54b1893112ce78f6bf6fe7b9b6"},{url:"assets/img/danger.6e8b05e0.svg",revision:"6e8b05e040e31db4b52092926ac89628"},{url:"assets/img/default-skin.b257fa9c.svg",revision:"b257fa9c5ac8c515ac4d77a667ce2943"},{url:"assets/img/info-dark.9cb8f08f.svg",revision:"9cb8f08f92e9e47faf596484d9af636a"},{url:"assets/img/info.b3407763.svg",revision:"b3407763d94949efc3654309e9a2202f"},{url:"assets/img/search.83621669.svg",revision:"83621669651b9a3d4bf64d1a670ad856"},{url:"assets/img/tip-dark.36f60759.svg",revision:"36f607593c4f5274775cb24f1edf4389"},{url:"assets/img/tip.fa255ccc.svg",revision:"fa255cccbbef66519a1bb90a5bed6f24"},{url:"assets/img/warning-dark.34208d06.svg",revision:"34208d0652668027b5e1797bdafd2da9"},{url:"assets/img/warning.950d1128.svg",revision:"950d1128cc862f2b631f5d54c3458174"},{url:"assets/js/17.2d3a661d.js",revision:"cd3966256808721be330345a93d9d9a9"},{url:"assets/js/18.242a0632.js",revision:"743d6c68d8f075b2467bb39c2331e643"},{url:"assets/js/19.78db903d.js",revision:"f825a921a270e5d4bf36d729910e4b26"},{url:"assets/js/20.859d577e.js",revision:"7889c9b12b72f03e4fd3cfe9cda9e628"},{url:"assets/js/21.cf7c0383.js",revision:"64a236253666cd75656b0040c1e2ddf1"},{url:"assets/js/app.08d18ee7.js",revision:"bde5a18cd9a3ec51d5102e8e150f981c"},{url:"assets/js/layout-Blog.0aebf7af.js",revision:"b6b8286ca0466e63a793560707014bf8"},{url:"assets/js/layout-Layout.fbaaa524.js",revision:"0004e3f484f516c2456fe2493a00c0d9"},{url:"assets/js/layout-NotFound.3667bb23.js",revision:"201998441f8dee61ed3f2ec0a35e6da2"},{url:"assets/js/layout-Slide.5fb72637.js",revision:"999dca53b1726022dafe328e6c4bfc3a"},{url:"assets/js/page-下載.47d7b8ba.js",revision:"13bf79c17feb8be7b01cb6c01897e6ed"},{url:"assets/js/page-安裝說明.24a93600.js",revision:"98870f30b5dbba64791b3b095f71a91c"},{url:"assets/js/page-更新內容.731082f0.js",revision:"719a29c10334fef88e896964356edd6d"},{url:"assets/js/page-首頁.a6baa2d9.js",revision:"ce94690461314a9c16759c43f69fb771"},{url:"assets/js/page-黑色沙漠中文化工具.3f3fafdc.js",revision:"c53593c7fa858ce9ab74ef2d24ce1f90"},{url:"assets/js/vendors~flowchart.493542dc.js",revision:"3b6d2f1397afabd05394fedc07dded03"},{url:"assets/js/vendors~layout-Blog~layout-Layout.0f535c11.js",revision:"34f9f30a75dfd626437d878e1dfbe07c"},{url:"assets/js/vendors~layout-Blog~layout-Layout~layout-NotFound.073410d2.js",revision:"5c23ea829ddf26815138f9948b208daa"},{url:"assets/js/vendors~layout-Blog~layout-Layout~layout-NotFound~layout-Slide.b2afdd7d.js",revision:"cc41863ae79296499fbf98cc08acb1b2"},{url:"assets/js/vendors~photo-swipe.704a0094.js",revision:"334a345f10be9d0b444d67a84b5f6f6d"},{url:"assets/js/vendors~reveal.15fb0296.js",revision:"c75ce6a6049b76c738f26389bb4c0a79"},{url:"assets/fonts/KaTeX_AMS-Regular.2dbe16b4.ttf",revision:"2dbe16b4f4662798159f8d62c8d2509d"},{url:"assets/fonts/KaTeX_AMS-Regular.38a68f7d.woff2",revision:"38a68f7d18d292349a6e802a66136eae"},{url:"assets/fonts/KaTeX_AMS-Regular.7d307e83.woff",revision:"7d307e8337b9559e4040c5fb76819789"},{url:"assets/fonts/KaTeX_Caligraphic-Bold.33d26881.ttf",revision:"33d26881e4dd89321525c43b993f136c"},{url:"assets/fonts/KaTeX_Caligraphic-Regular.5e7940b4.ttf",revision:"5e7940b4ed250e98a512f520e39c867d"},{url:"assets/fonts/KaTeX_Fraktur-Bold.4de87d40.woff",revision:"4de87d40f0389255d975c69d45a0a7e7"},{url:"assets/fonts/KaTeX_Fraktur-Bold.7a3757c0.woff2",revision:"7a3757c0bfc580d91012d092ec8f06cb"},{url:"assets/fonts/KaTeX_Fraktur-Bold.ed330126.ttf",revision:"ed330126290a846bf0bb78f61aa6a080"},{url:"assets/fonts/KaTeX_Fraktur-Regular.450cc4d9.woff2",revision:"450cc4d9319c4a438dd00514efac941b"},{url:"assets/fonts/KaTeX_Fraktur-Regular.82d05fe2.ttf",revision:"82d05fe2abb0da9d1077110efada0f6e"},{url:"assets/fonts/KaTeX_Fraktur-Regular.dc4e330b.woff",revision:"dc4e330b6334767a16619c60d9ebce8c"},{url:"assets/fonts/KaTeX_Main-Bold.2e1915b1.ttf",revision:"2e1915b1a2f33c8ca9d1534193e934d7"},{url:"assets/fonts/KaTeX_Main-Bold.62c69756.woff",revision:"62c69756b3f1ca7b52fea2bea1030cd2"},{url:"assets/fonts/KaTeX_Main-Bold.78b0124f.woff2",revision:"78b0124fc13059862cfbe4c95ff68583"},{url:"assets/fonts/KaTeX_Main-BoldItalic.0d817b48.ttf",revision:"0d817b487b7fc993bda7dddba745d497"},{url:"assets/fonts/KaTeX_Main-BoldItalic.a2e3dcd2.woff",revision:"a2e3dcd2316f5002ee2b5f35614849a8"},{url:"assets/fonts/KaTeX_Main-BoldItalic.c7213ceb.woff2",revision:"c7213ceb79250c2ca46cc34ff3b1aa49"},{url:"assets/fonts/KaTeX_Main-Italic.081073fd.woff",revision:"081073fd6a7c66073ad231db887de944"},{url:"assets/fonts/KaTeX_Main-Italic.767e06e1.ttf",revision:"767e06e1df6abd16e092684bffa71c38"},{url:"assets/fonts/KaTeX_Main-Italic.eea32672.woff2",revision:"eea32672f64250e9d1dfb68177c20a26"},{url:"assets/fonts/KaTeX_Main-Regular.689bbe6b.ttf",revision:"689bbe6b67f22ffb51b15cc6cfa8facf"},{url:"assets/fonts/KaTeX_Main-Regular.756fad0d.woff",revision:"756fad0d6f3dff1062cfa951751d744c"},{url:"assets/fonts/KaTeX_Main-Regular.f30e3b21.woff2",revision:"f30e3b213e9a74cf7563b0c3ee878436"},{url:"assets/fonts/KaTeX_Math-BoldItalic.753ca3df.woff2",revision:"753ca3dfa44302604bec8e08412ad1c1"},{url:"assets/fonts/KaTeX_Math-BoldItalic.b3e80ff3.woff",revision:"b3e80ff3816595ffb07082257d30b24f"},{url:"assets/fonts/KaTeX_Math-BoldItalic.d9377b53.ttf",revision:"d9377b53f267ef7669fbcce45a74d4c7"},{url:"assets/fonts/KaTeX_Math-Italic.0343f93e.ttf",revision:"0343f93ed09558b81aaca43fc4386462"},{url:"assets/fonts/KaTeX_Math-Italic.2a39f382.woff2",revision:"2a39f3827133ad0aeb2087d10411cbf2"},{url:"assets/fonts/KaTeX_Math-Italic.67710bb2.woff",revision:"67710bb2357b8ee5c04d169dc440c69d"},{url:"assets/fonts/KaTeX_SansSerif-Bold.59b37733.woff2",revision:"59b3773389adfb2b21238892c08322ca"},{url:"assets/fonts/KaTeX_SansSerif-Bold.dfcc59ad.ttf",revision:"dfcc59ad994a0513b07ef3309b8b5159"},{url:"assets/fonts/KaTeX_SansSerif-Bold.f28c4fa2.woff",revision:"f28c4fa28f596796702fea3716d82052"},{url:"assets/fonts/KaTeX_SansSerif-Italic.3ab5188c.ttf",revision:"3ab5188c9aadedf425ea63c6b6568df7"},{url:"assets/fonts/KaTeX_SansSerif-Italic.99ad93a4.woff2",revision:"99ad93a4600c7b00b961d70943259032"},{url:"assets/fonts/KaTeX_SansSerif-Italic.9d0fdf5d.woff",revision:"9d0fdf5d7d27b0e3bdc740d90b40ec57"},{url:"assets/fonts/KaTeX_SansSerif-Regular.6c3bd5b5.woff",revision:"6c3bd5b57f7eba215a2d37e2e28077f1"},{url:"assets/fonts/KaTeX_SansSerif-Regular.badf3598.woff2",revision:"badf3598c22478fd9155a49391ecd396"},{url:"assets/fonts/KaTeX_SansSerif-Regular.d511ebce.ttf",revision:"d511ebcef253ab53775576f28315f350"},{url:"assets/fonts/KaTeX_Script-Regular.082640ca.ttf",revision:"082640ca4242bb2aade86855e4d7d5f6"},{url:"assets/fonts/KaTeX_Script-Regular.4edf4e0f.woff",revision:"4edf4e0fd49c8a5680dd541c05f16a4c"},{url:"assets/fonts/KaTeX_Script-Regular.af7bc98b.woff2",revision:"af7bc98b2200573686405dc784f53cf2"},{url:"assets/fonts/KaTeX_Size1-Regular.2c2dc3b0.ttf",revision:"2c2dc3b057bb48b80bc785ac3d87ecf8"},{url:"assets/fonts/KaTeX_Size2-Regular.114ad198.ttf",revision:"114ad19833311359052ad1a174159262"},{url:"assets/fonts/KaTeX_Size4-Regular.70174da7.ttf",revision:"70174da79d1707501c10e07872e84667"},{url:"assets/fonts/KaTeX_Typewriter-Regular.35fe2cce.ttf",revision:"35fe2cce0791c276b8e919decd873f5b"},{url:"assets/fonts/KaTeX_Typewriter-Regular.53dcf861.woff",revision:"53dcf861876aae6f3a6a6004dc3bc758"},{url:"assets/fonts/KaTeX_Typewriter-Regular.641339e2.woff2",revision:"641339e2cd86c7816bfb8028ee7f86e0"},{url:"404.html",revision:"bb99ba17e86aaf8b0cc6554cf8bb1788"},{url:"article/index.html",revision:"b0720f6d6c6ae5abffe2b4cdbc7f78fb"},{url:"BDLangTools/download/index.html",revision:"09d2a9fa22395b802be8372bfa5d415f"},{url:"BDLangTools/index.html",revision:"f209183f9a96fa038f40ac6fe5afee53"},{url:"BDLangTools/install/index.html",revision:"a7b929aa94103041e794f1cb18ac3324"},{url:"BDLangTools/updata/index.html",revision:"d1616cdf3ce7518ef76e09f88021bdd7"},{url:"category/index.html",revision:"740a5dd4a9d8df92e2dbd27ce5df6fa4"},{url:"encrypt/index.html",revision:"70b82850b5ff352b4b8d10f02dd62cf0"},{url:"index.html",revision:"36bb13016d02b4c0bf832e1e621fa5e2"},{url:"slide/index.html",revision:"5158abbdbb21d90e21c145d3280d8589"},{url:"tag/中文化/index.html",revision:"58f8a9055ecefa72fac7aa3e851fde99"},{url:"tag/中文化下載/index.html",revision:"99ea452b1b32d99ce107cef5f4ae71ad"},{url:"tag/中文化安裝說明/index.html",revision:"d442054eb042efc5430b4cb002476f85"},{url:"tag/中文化更新內容/index.html",revision:"2e8cdb79ce3ace932dd7aba12605f6d1"},{url:"tag/美服/index.html",revision:"eee018b17cff373e2d310d38ce28019b"},{url:"tag/黑色沙漠/index.html",revision:"c5948872ecd76e0b543d77d8bc009689"},{url:"tag/關於/index.html",revision:"4034e56cd92716d3b11297a6df9de3ce"},{url:"tag/index.html",revision:"2b61828d3d3b877aa2ca812a25e0e5ad"},{url:"timeline/index.html",revision:"b34ba1d4a94e22edbf0f60e82a7035c7"}],{}),e.cleanupOutdatedCaches()}));
//# sourceMappingURL=service-worker.js.map
addEventListener("message", (event) => {
  const replyPort = event.ports[0];
  const message = event.data;
  if (replyPort && message && message.type === "skip-waiting")
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        (error) => replyPort.postMessage({ error })
      )
    );
});
