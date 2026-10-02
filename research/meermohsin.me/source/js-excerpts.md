# JS／CSS 原始碼摘錄（H- 證據，E2：設定值，不是實測）

來源：`curl https://www.meermohsin.me/assets/index-BXnpqJiu.js`（834,827 bytes，Vite 打包、已壓縮）與 `index-CLJlWOw8.css`（54,041 bytes），2026-10-02 下載，原檔存於 `source/assets/`。
變數名稱是壓縮後的名字；`$` = gsap，`Ye` = ScrollTrigger，`Jt` = SplitType，`TS` = Lenis，`ci` = Lenis 實例。
以下數字都是**程式碼裡的設定值**；實際播放時間取決於裝置效能（見 observations.md X-03）。

## H-js-firstvisit：預載只在「第一次造訪」播放
```js
const EP=performance.getEntriesByType("navigation")[0],
  ir=EP?.type==="reload"||performance.navigation?.type===1,
  MP=sessionStorage.getItem("loaderPlayed")==="true",
  ta=!ir&&!MP;
```
`ta` 為真（不是重新整理、這個分頁還沒看過）才播預載；否則預載直接 `display:none`。WebGL 轉場開始時寫入 `sessionStorage.loaderPlayed="true"`。

## H-js-preloader：預載計數與轉場
```js
// 計數 000→100
$.to(m_,{value:100,duration:3.5,ease:"power2.inOut",onUpdate(){ul.textContent=Math.floor(m_.value).toString().padStart(3,"0")},
  onComplete(){ r.to(ul,{opacity:0,duration:1.45,ease:"power3.out"}),
                r.to(".site-pre-loader",{duration:2.85,ease:"power3.out"}),
                r.to(".site-pre-loader",{autoAlpha:0,duration:.5,ease:"power3.out"}) }})
// WebGL（three.js ShaderMaterial，uBorderColor #990000）轉場
setTimeout(()=>{_()},2900)   // _(): $.to(uTransition,{value:1,duration:3,ease:"power2.inOut"})
```

## H-js-herodelay：首屏內容的延遲
第一次造訪 `delay: 8.5`（名字逐字、導覽文字、介紹段落、跑馬燈 h4、選單按鈕、logo）、`delay: 9`（`.face-image` 3.5s 由暗轉亮並放大到 1、`.plus-rotate`、右下 `.cta-connect`）；重新整理時全部改為 `delay: .1`。例：
```js
$.to(Lv.chars,{yPercent:0,opacity:1,stagger:.03,duration:.8,ease:"power3.out",delay:ir?.1:8.5})   // .Name-plus 逐字
$.to(".face-image",{y:0,duration:3.5,filter:"brightness(1)",scale:1,delay:ir?.1:9})
$.to(Iv.lines,{yPercent:0,opacity:1,stagger:.01,duration:1.5,ease:"power3.out",delay:ta?8.5:.1,filter:"blur(0px)"}) // .para-introduce-hero 逐行去模糊
```

## H-js-lenis：平滑捲動與捲動鎖
```js
const ci=new TS({duration:1.2,smoothWheel:!0,syncTouch:!0,touchMultiplier:1,wheelMultiplier:1,easing:r=>Math.min(1,1.001-Math.pow(2,-10*r)), ...});
ci.stop(); gb ? (ci.scrollTo(0,{immediate:!0,force:!0}),ci.start()) : setTimeout(()=>{ci.start()},6e3);
// 導覽連結：ci.scrollTo(target,{duration: 手機<768 ? 1.5 : 2.5, easing: s=>1-Math.pow(1-s,4)})
```
非重新整理時，捲動被鎖 6 秒。開啟聯絡表單、部落格側欄時 `ci.stop()`，關閉時 `ci.start()`。

## H-js-sound：背景音樂與「CLICK ANYWHERE」
```js
document.addEventListener("click",()=>{g_||(g_=!0,Nv())},{once:!0});   // 第一次點擊任意處：播放 #bgMusic，音量 1.5s 漸增到 0.5
// .sound-wave：40 條 bar，CSS animationDuration 隨機 0.2–0.7s；點它切換開關
$.fromTo(".sound-follow",{opacity:0},{opacity:1,duration:4,ease:"power1.inOut",repeat:-1,yoyo:!0})
```
預載上的「CLICK ANYWHERE TO ACTIVATE THE EXPERIENCE」只啟動音樂，不是進入內容的閘門。

## H-js-menu：全螢幕選單
```js
// 開：5 條 .bar-bgs scaleX 0→1，duration .8，stagger .06，ease power4.inOut（transformOrigin right），完成後播 bo
// bo：兩條線旋轉成 X（.35s power3.inOut）、logo brightness(0)、選單文字逐行 yPercent 100→0 + blur(4px)→0（.8s，stagger .03，power4.out）
// 關：bo.reverse()，0.45s 後 bar 以 left 為原點收回
```

## H-js-cta：右下「ONLINE / Let's Connect」
```js
Xa.addEventListener("mousemove",…$.to(Xa,{x:t*.2,y:n*.2,duration:.4,ease:"power3.out"}))   // 磁吸
Xa.addEventListener("mouseleave",()=>{$.to(Xa,{x:0,y:0,duration:.8,ease:"elastic.out(1, 0.4)"})})
click → window.open("https://wa.me/447405341759","_blank")
scroll：往下且 scrollY>100 → x:"300%"（滑出畫面），往上 → x:0，.5s power3.out
```

## H-js-navhide：左側直排導覽（.active-animate）
往下捲時逐字 `yPercent:100` 藏起（.35s），往上捲或停止 3 秒後回來；進入 `.footer-hit` 時改為完全顯示。

## H-js-pins：主要的釘選捲動段
- `.services-project`：`end:"+=690%"`，`scrub:.7`，`pin:true`（SVG 線條描繪 strokeDashoffset → 0、服務名稱逐字替換）
- `.container`（作品）：`end:"+="+Hs*100+"%"`，`scrub:.15`，`pin:true`（逐案切換標題與說明）
- `.regonizations`（獎項，three.js 模型）：`end:"+="+innerHeight*4.5`，`scrub:.4`，`pin:true`，相機位置隨捲動移動
- 其他 scrub 值：1、.8、2、true

## H-js-logo：3D logo
`.logo-card` rotationY +=360，8s，linear，無限重複；hover 時 timeScale 1→6（.4s），離開回 1（1.2s）。

## H-js-contact：聯絡表單
`#contactopen` 點擊 → 表單面板 clipPath `inset(100% 0 0 0)`→`inset(0)`，1.2s power4.inOut；送出到 web3forms，成功後關閉，失敗用 `alert()`。

## H-css-fonts：字型
```css
@font-face{font-family:light-font;src:url(./StackSansHeadline-ExtraLight-….woff2)}
@font-face{font-family:regular-font;src:url(./StackSansHeadline-Regular-….woff2)}
@font-face{font-family:ruthie;src:url(./ruthie-….woff2)}
```

## H-css-mq：斷點
`@media (max-width: 800px)` 131 次；768px、700px、720px 各 1–2 次；另有一個拼錯的 `@media (max-wdth: 800px)`（瀏覽器會忽略）。CSS 沒有 `:root` 變數。

## H-css-transition：CSS transition 設定值（出現次數）
`all .3s ease` ×5、`.5s ease` ×4、`.45s cubic-bezier(.23,1,.32,1)` ×3、`.3s` ×3、`.1s` ×3、`.5s` ×2、`transform .45s cubic-bezier(.22,1,.36,1)`、`height .35s ease, opacity .35s ease`、`border-color .35s ease`、`2s cubic-bezier(.075,.82,.165,1)`、`.8s ease`、`.35s ease`。

## H-rm：減少動態
整個 JS 與 CSS 搜尋 `prefers-reduced-motion`／`reduce`（媒體查詢用法）：0 次。
