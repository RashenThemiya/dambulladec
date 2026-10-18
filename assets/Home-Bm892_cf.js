import{c as F,r as l,j as e,u as R,X as B,N as Y,U as ge,e as ae,H as ce,a as be,C as fe,f as ne,b as we,m as V,B as ye,F as H,d as je}from"./index-BIGkaRfw.js";import{a as W,b as ee,P as ve,N as Ne,F as ke}from"./Navbar-C-GZVyzB.js";import{p as $,b as de,i as O,a as Ce}from"./contracts-BwPmnuvB.js";import{C as K}from"./calendar-days-POrOadlC.js";import{C as Pe}from"./ContactCallButton-DhTCfRxn.js";import{S as J}from"./sprout-D86wrvPs.js";import{A as T}from"./arrow-right-BfX_eAxs.js";import{m as De,i as Ee,b as Se}from"./publicFormatting-bEo-rgSF.js";import{L as Le}from"./loader-circle-CBybkwjH.js";import{R as ze}from"./refresh-cw-s3Dx4FTZ.js";import{A as Ve}from"./index-CDk7PPEG.js";import{S as Re}from"./shield-check-BZ5XRj24.js";import{E as re}from"./external-link-CHslJufl.js";import{D as Ue}from"./download-C0w3HrnW.js";import"./mail-C0FIO7Lt.js";import"./clock-3-BnjuVrdR.js";import"./chevron-down-BeWnbkYk.js";import"./search-Da3dlbPa.js";import"./index-B9ygI19o.js";/**
 * @license lucide-react v0.484.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ie=[["path",{d:"M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z",key:"3c2336"}],["path",{d:"M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8",key:"1h4pet"}],["path",{d:"M12 18V6",key:"zqpxq5"}]],_e=F("badge-dollar-sign",Ie);/**
 * @license lucide-react v0.484.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ae=[["path",{d:"M10.268 21a2 2 0 0 0 3.464 0",key:"vwvbt9"}],["path",{d:"M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326",key:"11g9vi"}]],X=F("bell",Ae);/**
 * @license lucide-react v0.484.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Me=[["rect",{width:"7",height:"7",x:"3",y:"3",rx:"1",key:"1g98yp"}],["rect",{width:"7",height:"7",x:"14",y:"3",rx:"1",key:"6d4xhi"}],["rect",{width:"7",height:"7",x:"14",y:"14",rx:"1",key:"nxv5o0"}],["rect",{width:"7",height:"7",x:"3",y:"14",rx:"1",key:"1bb6yr"}]],We=F("layout-grid",Me);/**
 * @license lucide-react v0.484.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $e=[["rect",{x:"14",y:"4",width:"4",height:"16",rx:"1",key:"zuxfzm"}],["rect",{x:"6",y:"4",width:"4",height:"16",rx:"1",key:"1okwgv"}]],Oe=F("pause",$e);/**
 * @license lucide-react v0.484.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Te=[["polygon",{points:"6 3 20 12 6 21 6 3",key:"1oa8hb"}]],Fe=F("play",Te),I=new Map;function xe(t){if(t.imageUrl&&!/^\/api\/publications\/[1-9]\d*\/image(?:\?v=[^#]*)?$/.test(t.imageUrl))throw new Error("Invalid publication image URL");const a=typeof window>"u"?"http://localhost":window.location.origin;return{...t,image:t.imageUrl?new URL(t.imageUrl,new URL($.defaults.baseURL||"/",a)).href:null}}function Ke(t,a){return a?new Promise((c,i)=>{const x=()=>i(new DOMException("Request cancelled","AbortError"));if(a.aborted){x();return}a.addEventListener("abort",x,{once:!0}),t.then(d=>{a.removeEventListener("abort",x),a.aborted||c(d)},d=>{a.removeEventListener("abort",x),a.aborted||i(d)})}):t}function me(t,a=!1,{page:c=1,limit:i=6,type:x="all"}={}){if(t!=null&&t.aborted)return Promise.reject(new DOMException("Request cancelled","AbortError"));const d=JSON.stringify([c,i,x]);let p=I.get(d);if(a||!p||p.expires<Date.now()){const h={expires:Date.now()+3e4};h.promise=$.get("/api/publications/browse",{params:{page:c,limit:i,...x!=="all"?{type:x}:{}}}).then(u=>{var m,o;const w=de((m=u.data)==null?void 0:m.data),r=(o=u.data)==null?void 0:o.pagination;if(!r||r.currentPage!==c||r.pageSize!==i||!Number.isInteger(r.totalItems)||r.totalItems<0||r.totalPages!==Math.ceil(r.totalItems/i)||w.length>i)throw new Error("Invalid publication pagination");return{data:w.map(xe),pagination:r}}).catch(u=>{throw I.get(d)===h&&I.delete(d),u}),I.set(d,h),p=h,I.size>20&&I.delete(I.keys().next().value)}return Ke(p.promise,t)}const Ge=(t,a=!1)=>me(t,a).then(c=>c.data);async function ue(t,a){const c=await $.get("/api/publications/details/"+encodeURIComponent(t),{signal:a}),[i]=de([c.data]);return xe(i)}function pe({children:t,onClose:a,className:c="",...i}){const x=l.useRef(null),d=l.useRef(a);return d.current=a,l.useEffect(()=>{const p=document.activeElement,h=document.body.style.overflow;document.body.style.overflow="hidden";const u=x.current,w=()=>[...u.querySelectorAll('button:not([disabled]),a[href],input:not([disabled]),select,textarea,[tabindex="0"]')].filter(o=>o.getClientRects().length);(w()[0]||u).focus();const r=o=>{if(o.key==="Escape"&&(o.preventDefault(),o.stopPropagation(),d.current()),o.key==="Tab"){const N=w(),D=N[0]||u,k=N.at(-1)||u;o.shiftKey&&(document.activeElement===D||!u.contains(document.activeElement))?(o.preventDefault(),k.focus()):!o.shiftKey&&(document.activeElement===k||!u.contains(document.activeElement))&&(o.preventDefault(),D.focus())}},m=o=>{u.contains(o.target)||(w()[0]||u).focus()};return document.addEventListener("keydown",r,!0),document.addEventListener("focusin",m),()=>{document.body.style.overflow=h,document.removeEventListener("keydown",r,!0),document.removeEventListener("focusin",m),p!=null&&p.isConnected&&p.focus()}},[]),e.jsx("div",{className:"fixed inset-0 z-[120] flex items-center justify-center bg-black/60 p-4 backdrop-blur-sm",onMouseDown:p=>{p.target===p.currentTarget&&a()},children:e.jsx("article",{...i,ref:x,role:"dialog","aria-modal":"true",tabIndex:-1,className:c,children:t})})}const ie={notice:{icon:ee,styles:"border-amber-200 bg-amber-50 text-amber-700"},announcement:{icon:X,styles:"border-[#cde0d8] bg-[#f4f6f8] text-[#004225]"},news:{icon:Y,styles:"border-blue-200 bg-blue-50 text-blue-700"},event:{icon:K,styles:"border-purple-200 bg-purple-50 text-purple-700"}},le=t=>{if(!t)return null;const a=/(https?:\/\/[^\s]+)/g;return t.split(a).map((c,i)=>/^https?:\/\/[^\s]+$/.test(c)?e.jsx("a",{href:c,target:"_blank",rel:"noopener noreferrer",className:"break-all text-blue-600 underline underline-offset-2 hover:text-blue-800",children:c},`${c}-${i}`):e.jsx("span",{children:c},i))},Be=()=>{var P;const{t,i18n:a}=R(),[c,i]=l.useState(!1),[x,d]=l.useState(!1),[p,h]=l.useState(0),[u,w]=l.useState([]),[r,m]=l.useState(!1),[o,N]=l.useState(null),[D,k]=l.useState(!1),[L,U]=l.useState(!0),[S,z]=l.useState("");l.useEffect(()=>{const s=new AbortController;return(async()=>{try{U(!0),z("");const f=await Ge(s.signal);s.signal.aborted||w(f.slice(0,5))}catch(f){if(s.signal.aborted||O(f))return;console.error("Failed to load news widget:",f),z("newsWidget.loadError")}finally{s.signal.aborted||U(!1)}})(),()=>s.abort()},[]),l.useEffect(()=>{const s=g=>{if(g.key==="Escape"){if(o){N(null),k(!1);return}m(!1)}};return window.addEventListener("keydown",s),()=>{window.removeEventListener("keydown",s)}},[o]);const E=o==null?void 0:o.id;l.useEffect(()=>{if(!E)return;const s=new AbortController;return i(!0),d(!1),ue(E,s.signal).then(g=>{s.signal.aborted||N(f=>(f==null?void 0:f.id)===E?{...f,...g}:f)}).catch(g=>{!s.signal.aborted&&!O(g)&&d(!0)}).finally(()=>{s.signal.aborted||i(!1)}),()=>s.abort()},[E,p]);const _=s=>{var M;if(!s)return"";const g=new Date(s);if(Number.isNaN(g.getTime()))return s;const f=((M=a.language)==null?void 0:M.split("-")[0])||"en",A={en:"en-LK",si:"si-LK",ta:"ta-LK"};return new Intl.DateTimeFormat(A[f]||"en-LK",{year:"numeric",month:"short",day:"2-digit"}).format(g)},n=s=>ie[s]||ie.news,y=s=>{N(s),k(!1)},j=()=>{N(null),k(!1)},v=((P=o==null?void 0:o.description)==null?void 0:P.length)>300;return e.jsxs(e.Fragment,{children:[e.jsxs("button",{type:"button",onClick:()=>m(s=>!s),"aria-label":t("newsWidget.title",{defaultValue:"Latest Updates"}),"aria-expanded":r,className:`\r
          fixed bottom-5 left-4 z-[90]\r
          flex h-12 w-12 items-center justify-center\r
          rounded-full bg-[#004225] text-white\r
          shadow-lg transition-colors duration-200\r
          hover:bg-[#004225]\r
          focus:outline-none focus-visible:ring-4\r
          focus-visible:ring-[#cde0d8]\r
          sm:bottom-6 sm:left-6\r
        `,children:[r?e.jsx(B,{size:21}):e.jsx(X,{size:21}),!r&&u.length>0&&e.jsx("span",{className:`\r
              absolute -right-1 -top-1\r
              flex h-5 min-w-5 items-center justify-center\r
              rounded-full border-2 border-white\r
              bg-red-500 px-1\r
              text-[10px] font-bold text-white\r
            `,children:u.length})]}),r&&e.jsxs("div",{className:`
          fixed bottom-[82px] left-4 z-[80]
          w-[calc(100%-2rem)] max-w-[380px]
          origin-bottom-left
          rounded-2xl border border-gray-200
          bg-white shadow-2xl
          transition-all duration-200
          sm:bottom-[88px] sm:left-6 sm:w-[380px]
          ${r?"visible translate-y-0 scale-100 opacity-100":"invisible translate-y-3 scale-95 opacity-0"}
        `,children:[e.jsxs("div",{className:`\r
            flex items-center justify-between\r
            rounded-t-2xl bg-[#004225]\r
            px-5 py-4 text-white\r
          `,children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:`\r
                flex h-9 w-9 items-center justify-center\r
                rounded-full bg-white/15\r
              `,children:e.jsx(X,{size:18})}),e.jsxs("div",{children:[e.jsx("h3",{className:"font-bold",children:t("newsWidget.title",{defaultValue:"Latest Updates"})}),e.jsx("p",{className:"mt-0.5 text-xs text-white/75",children:t("newsWidget.subtitle",{defaultValue:"Recent notices, announcements, news and events."})})]})]}),e.jsx("button",{type:"button",onClick:()=>m(!1),"aria-label":t("newsWidget.closeWidget",{defaultValue:"Close latest updates"}),className:`\r
              flex h-8 w-8 items-center justify-center\r
              rounded-full text-white/80\r
              transition hover:bg-white/15 hover:text-white\r
            `,children:e.jsx(B,{size:18})})]}),e.jsxs("div",{className:"p-3",children:[L&&e.jsx("div",{className:"space-y-3",children:Array.from({length:3}).map((s,g)=>e.jsxs("div",{className:`\r
                    flex animate-pulse gap-3\r
                    rounded-xl border border-gray-100 p-3\r
                  `,children:[e.jsx("div",{className:"h-16 w-16 shrink-0 rounded-lg bg-gray-200"}),e.jsxs("div",{className:"flex-1 space-y-2",children:[e.jsx("div",{className:"h-3 w-24 rounded bg-gray-200"}),e.jsx("div",{className:"h-4 w-full rounded bg-gray-200"}),e.jsx("div",{className:"h-3 w-4/5 rounded bg-gray-200"})]})]},g))}),!L&&S&&e.jsx("div",{className:`\r
                rounded-xl border border-red-200\r
                bg-red-50 px-4 py-8\r
                text-center text-sm text-red-700\r
              `,children:t(S)}),!L&&!S&&u.length===0&&e.jsx("div",{className:`\r
                rounded-xl border border-dashed border-gray-300\r
                bg-gray-50 px-4 py-8\r
                text-center text-sm text-gray-500\r
              `,children:t("newsWidget.noNews",{defaultValue:"No recent news."})}),!L&&!S&&u.length>0&&e.jsx("ul",{className:"max-h-[410px] space-y-2 overflow-y-auto pr-1",children:u.map(s=>{const g=n(s.type),f=g.icon;return e.jsx("li",{children:e.jsxs("button",{type:"button",onClick:()=>y(s),className:`\r
                        group flex w-full items-start gap-3\r
                        rounded-xl border border-transparent\r
                        p-3 text-left\r
                        transition-colors duration-200\r
                        hover:border-[#e2eee8]\r
                        hover:bg-[#f4f6f8]/70\r
                      `,children:[s.image?e.jsx(W,{src:s.image,alt:s.topic||"News",className:`\r
                            h-[72px] w-[72px] shrink-0\r
                            rounded-lg object-cover\r
                          `}):e.jsx("div",{className:`\r
                            flex h-[72px] w-[72px] shrink-0\r
                            items-center justify-center\r
                            rounded-lg bg-gray-100\r
                            text-[11px] text-gray-400\r
                          `,children:t("newsWidget.noImage",{defaultValue:"No image"})}),e.jsxs("div",{className:"min-w-0 flex-1",children:[e.jsxs("div",{className:"flex flex-wrap items-center gap-2",children:[e.jsxs("span",{className:`
                              inline-flex items-center gap-1
                              rounded-full border
                              px-2 py-1 text-[10px] font-semibold
                              ${g.styles}
                            `,children:[e.jsx(f,{size:12}),t(`news.categories.${s.type||"news"}`,{defaultValue:s.type||"News"})]}),(s.date||s.createdAt)&&e.jsx("span",{className:"text-[10px] text-gray-400",children:_(s.date||s.createdAt)})]}),e.jsx("h4",{className:`\r
                            mt-2 line-clamp-2\r
                            text-sm font-semibold leading-snug\r
                            text-[#222222]\r
                            group-hover:text-[#004225]\r
                          `,children:s.topic}),e.jsx("p",{className:`\r
                            mt-1 line-clamp-2\r
                            text-xs leading-relaxed text-gray-500\r
                          `,children:s.description})]})]})},s.id||s._id)})})]})]}),o&&e.jsxs(pe,{onClose:j,"aria-labelledby":"news-details-title",className:`\r
              relative max-h-[90vh] w-full max-w-2xl\r
              overflow-y-auto rounded-2xl\r
              bg-white shadow-2xl\r
            `,children:["            ",c&&e.jsx("p",{role:"status",className:"p-4",children:t("publicUi.loadingDetails")}),x&&e.jsxs("p",{role:"alert",className:"p-4 text-red-700",children:[t("newsWidget.loadError")," ",e.jsx("button",{type:"button",className:"underline",onClick:()=>h(s=>s+1),children:t("publicUi.retry")})]}),e.jsx("button",{type:"button",onClick:j,"aria-label":t("newsWidget.close",{defaultValue:"Close news details"}),className:`\r
                absolute right-4 top-4 z-10\r
                flex h-9 w-9 items-center justify-center\r
                rounded-full bg-black/55 text-white\r
                transition hover:bg-black/75\r
              `,children:e.jsx(B,{size:20})}),o.image?e.jsx(W,{src:o.image,alt:o.topic||t("newsWidget.title"),className:`\r
                  h-[230px] w-full rounded-t-2xl\r
                  object-cover sm:h-[340px]\r
                `}):e.jsx("div",{className:`\r
                  flex h-[230px] items-center justify-center\r
                  rounded-t-2xl bg-gray-100\r
                  text-gray-400 sm:h-[340px]\r
                `,children:t("newsWidget.noImage",{defaultValue:"No image"})}),e.jsxs("div",{className:"p-5 sm:p-7",children:[(()=>{const s=n(o.type),g=s.icon;return e.jsxs("div",{className:"flex flex-wrap items-center justify-between gap-3",children:[e.jsxs("span",{className:`
                        inline-flex items-center gap-2
                        rounded-full border px-3 py-1.5
                        text-xs font-semibold
                        ${s.styles}
                      `,children:[e.jsx(g,{size:15}),t(`news.categories.${o.type||"news"}`,{defaultValue:o.type||"News"})]}),(o.date||o.createdAt)&&e.jsx("span",{className:"text-sm text-gray-500",children:_(o.date||o.createdAt)})]})})(),e.jsx("h2",{id:"news-details-title",className:"mt-4 text-2xl font-bold leading-tight text-[#222222]",children:o.topic}),e.jsx("div",{className:"mt-4 whitespace-pre-wrap text-sm leading-7 text-gray-700",children:le(D||!v?o.description:`${o.description.slice(0,300)}...`)}),v&&e.jsx("div",{className:"mt-4 text-right",children:e.jsx("button",{type:"button",onClick:()=>k(s=>!s),className:`\r
                      text-sm font-semibold text-[#004225]\r
                      hover:underline\r
                    `,children:D?t("newsWidget.showLess",{defaultValue:"Show less"}):t("newsWidget.readMore",{defaultValue:"Read more"})})})]})]})]})},qe=()=>{const{t}=R(),[a,c]=l.useState(0),[i,x]=l.useState(!1),[d,p]=l.useState(!1),h=[{src:"/images/welcome-hero.png",key:"landmark"},{src:"/images/MarketOperations_Grid_left.jpg",key:"entrance"},{src:"/images/MarketOperations_Backgroung.png",key:"market"}];l.useEffect(()=>{const r=window.matchMedia("(prefers-reduced-motion: reduce)"),m=()=>p(r.matches);return m(),r.addEventListener("change",m),()=>r.removeEventListener("change",m)},[]),l.useEffect(()=>{if(i||d)return;const r=window.setInterval(()=>{document.hidden||c(m=>(m+1)%3)},5e3);return()=>window.clearInterval(r)},[i,d,a]);const u=r=>{c((r+h.length)%h.length)},w=[{value:t("featureCards.tradersValue"),label:t("featureCards.tradersLabel"),icon:ge},{value:t("featureCards.vegetablesValue"),label:t("featureCards.vegetablesLabel"),icon:J},{value:t("featureCards.marketShareValue"),label:t("featureCards.marketShareLabel"),icon:ae}];return e.jsxs(e.Fragment,{children:[e.jsxs(ce,{children:[e.jsx("title",{children:t("publicUi.siteTitle")}),e.jsx("meta",{name:"description",content:t("publicUi.description")}),e.jsx("meta",{name:"keywords",content:"Dambulla Economic Center, daily vegetable prices, Sri Lanka vegetables, wholesale market, farmers market"}),e.jsx("link",{rel:"canonical",href:"https://dambulladec.com/"}),e.jsx("meta",{property:"og:title",content:t("publicUi.siteTitle")}),e.jsx("meta",{property:"og:description",content:t("publicUi.description")}),e.jsx("meta",{property:"og:image",content:"https://dambulladec.com/images/welcome-hero.png"}),e.jsx("meta",{property:"og:url",content:"https://dambulladec.com/"}),e.jsx("meta",{name:"twitter:card",content:"summary_large_image"})]}),e.jsxs("section",{id:"welcome",className:"welcome-hero","aria-label":t("home.welcomePrefix"),children:[e.jsxs("div",{className:"welcome-gallery",role:"region","aria-label":t("homeGallery.label"),children:[e.jsx("div",{className:"welcome-slides",children:h.map((r,m)=>e.jsx("div",{className:"welcome-slide "+(m===a?"is-visible ":"")+"welcome-slide-"+r.key,"aria-hidden":m!==a,children:e.jsx("img",{src:r.src,alt:t("homeGallery."+r.key),fetchPriority:m===0?"high":"low",decoding:"async"})},r.key))}),e.jsx("div",{className:"welcome-gallery-fade","aria-hidden":"true"}),e.jsxs("div",{className:"welcome-gallery-controls",children:[e.jsx("button",{type:"button","aria-label":t("homeGallery.previous"),onClick:()=>u(a-1),children:e.jsx(be,{size:18})}),e.jsx("div",{className:"welcome-gallery-dots",children:h.map((r,m)=>e.jsx("button",{type:"button","aria-label":t("homeGallery."+r.key),"aria-pressed":a===m,onClick:()=>u(m)},r.key))}),e.jsx("button",{type:"button","aria-label":t("homeGallery.next"),onClick:()=>u(a+1),children:e.jsx(fe,{size:18})}),!d&&e.jsx("button",{type:"button","aria-label":t(i?"homeGallery.play":"homeGallery.pause"),onClick:()=>x(!i),children:i?e.jsx(Fe,{size:16}):e.jsx(Oe,{size:16})})]})]}),e.jsxs("div",{className:"welcome-copy",children:[e.jsx("p",{className:"welcome-eyebrow",children:t("home.welcomePrefix")}),e.jsxs("h1",{children:[e.jsx("span",{children:t("home.titlePrimary")}),e.jsx("span",{children:t("home.titleSecondary")})]}),e.jsx("div",{className:"welcome-title-rule","aria-hidden":"true"}),e.jsx("p",{className:"welcome-description",children:t("home.description")}),e.jsxs("div",{className:"welcome-actions",children:[e.jsxs(ne,{to:"/home-dailyprice",className:"welcome-primary",children:[e.jsx(ae,{size:19}),e.jsx("span",{children:t("navbar.dailyPrice")}),e.jsx(T,{size:17})]}),e.jsxs(ne,{to:"/contact",className:"welcome-secondary",children:[e.jsx(ve,{size:18}),e.jsx("span",{children:t("navbar.contact")}),e.jsx(T,{size:17})]})]})]})]}),e.jsx("section",{className:"welcome-statistics","aria-label":t("homeGallery.statistics"),children:e.jsx("div",{className:"welcome-stats-card",children:w.map(r=>{const m=r.icon;return e.jsxs("div",{className:"welcome-stat",children:[e.jsx("div",{className:"welcome-stat-icon",children:e.jsx(m,{size:28,strokeWidth:2})}),e.jsxs("div",{className:"welcome-stat-copy",children:[e.jsx("p",{className:"welcome-stat-value",children:r.value}),e.jsx("p",{className:"welcome-stat-label",children:r.label})]})]},r.label)})})})]})},oe=6,He=()=>{const{t,i18n:a}=R(),c=we(),i=l.useRef(null),[x,d]=l.useState([]),[p,h]=l.useState(""),[u,w]=l.useState(!0),[r,m]=l.useState(""),o=n=>De(n),N=l.useCallback(async(n,y)=>{const j=await $.get("/api/prices/by-date/"+n,{signal:y,params:{page:1,limit:oe}});return Ce(j.data,{page:1,limit:oe})},[]),D=l.useCallback(async()=>{var y,j;(y=i.current)==null||y.abort();const n=new AbortController;i.current=n,w(!0),m(""),d([]),h("");try{const v=o(new Date),s=(j=(await $.get("/api/prices/latest-date",{signal:n.signal,params:{notAfter:v}})).data)==null?void 0:j.date;if(s!==null&&(!Ee(s)||s>v))throw new Error("Invalid latest date response");const g=s?await N(s,n.signal):{data:[]};if(n.signal.aborted)return;const f=g.data;d(f),h(s||"")}catch(v){if(n.signal.aborted||O(v))return;console.error("Failed to load latest prices:",v),m("dailyPrices.loadError"),d([]),h("")}finally{n.signal.aborted||w(!1)}},[N]);l.useEffect(()=>(D(),()=>{var n;return(n=i.current)==null?void 0:n.abort()}),[D]);const k=n=>n?t(n,{defaultValue:n}):"-",L=n=>n?t(`types.${n}`,{defaultValue:n}):t("types.Uncategorized",{defaultValue:"Uncategorized"}),U=n=>Se(n,a.resolvedLanguage),S=(n,y)=>`${U(n)} - ${U(y)}`,z=n=>{var P;if(!n)return"-";const y=((P=a.resolvedLanguage)==null?void 0:P.split("-")[0])||"en",j={en:"en-LK",si:"si-LK",ta:"ta-LK"},v=new Date(`${n}T00:00:00`);return Number.isNaN(v.getTime())?n:new Intl.DateTimeFormat(j[y]||"en-LK",{year:"numeric",month:"2-digit",day:"2-digit"}).format(v)},E=n=>{n&&c(`/product/${n}/chart`)},_=()=>{c("/home-dailyprice")};return e.jsx("section",{id:"daily-prices",className:"bg-white px-4 py-9 sm:px-6 lg:px-8",children:e.jsxs("div",{className:"mx-auto w-full max-w-[1320px]",children:[e.jsxs("div",{className:"mb-8 text-center",children:[e.jsx("h2",{className:"text-4xl font-extrabold tracking-tight text-[#222222] sm:text-5xl",children:t("dailyPrices.previewTitle",{defaultValue:"Daily Prices"})}),p&&e.jsxs("div",{className:"mt-3 flex items-center justify-center gap-2 text-sm text-gray-500",children:[e.jsx(K,{size:16}),e.jsxs("span",{children:[t("dailyPrices.latestDate",{defaultValue:"Latest prices:"})," ",z(p)]})]})]}),u&&e.jsx("div",{className:"flex min-h-[260px] items-center justify-center",children:e.jsxs("div",{className:"flex items-center gap-3 text-[#004225]",children:[e.jsx(Le,{size:30,className:"animate-spin"}),e.jsx("span",{className:"font-semibold",children:t("dailyPrices.loading",{defaultValue:"Loading daily prices..."})})]})}),!u&&r&&e.jsxs("div",{className:"rounded-lg border border-red-200 bg-red-50 p-8 text-center",children:[e.jsx("p",{className:"font-medium text-red-700",children:t(r)}),e.jsxs("button",{type:"button",onClick:D,className:"mt-4 inline-flex items-center gap-2 rounded-md bg-red-600 px-5 py-2.5 font-semibold text-white transition-colors hover:bg-red-700",children:[e.jsx(ze,{size:17}),t("dailyPrices.retry",{defaultValue:"Retry"})]})]}),!u&&!r&&x.length===0&&e.jsxs("div",{className:"rounded-lg border border-gray-200 bg-gray-50 px-6 py-14 text-center",children:[e.jsx("p",{className:"font-semibold text-[#333333]",children:t("dailyPrices.noDatal1",{defaultValue:"Daily price information is being updated."})}),e.jsx("p",{className:"mt-2 text-sm text-gray-500",children:t("dailyPrices.noDatal2",{defaultValue:"The information will be available once the update is complete."})})]}),!u&&!r&&x.length>0&&e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"hidden overflow-hidden rounded-lg border border-gray-200 md:block",children:e.jsxs("table",{className:"w-full border-collapse",children:[e.jsx("thead",{children:e.jsxs("tr",{className:"bg-[#004225] text-white",children:[e.jsx("th",{className:"px-6 py-4 text-left text-sm font-semibold",children:t("dailyPrices.category",{defaultValue:"Category"})}),e.jsx("th",{className:"px-6 py-4 text-center text-sm font-semibold",children:t("dailyPrices.name",{defaultValue:"Name"})}),e.jsx("th",{className:"px-6 py-4 text-center text-sm font-semibold",children:t("dailyPrices.priceRange",{defaultValue:"Price Range (LKR)"})}),e.jsx("th",{className:"px-6 py-4 text-center text-sm font-semibold",children:t("dailyPrices.date",{defaultValue:"Date"})}),e.jsx("th",{className:"px-6 py-4 text-center text-sm font-semibold",children:t("dailyPrices.action",{defaultValue:"Action"})})]})}),e.jsx("tbody",{children:x.map(n=>{var y,j,v,P,s;return e.jsxs("tr",{className:"border-b border-[#cde0d8] transition-colors last:border-b-0 hover:bg-[#f4f6f8]",children:[e.jsx("td",{className:"px-6 py-4 font-semibold text-gray-700",children:L((y=n.product)==null?void 0:y.type)}),e.jsx("td",{className:"px-6 py-4 text-center font-semibold text-[#222222]",children:e.jsxs("div",{className:"mx-auto flex max-w-64 items-center gap-3 text-left",children:[e.jsx(W,{src:(j=n.product)==null?void 0:j.image,alt:k((v=n.product)==null?void 0:v.name),width:40,height:40,className:"h-10 w-10 shrink-0 rounded-lg border border-gray-100 object-cover text-[9px]!"}),e.jsx("span",{className:"min-w-0 break-words",children:k((P=n.product)==null?void 0:P.name)})]})}),e.jsxs("td",{className:"px-6 py-4 text-center font-semibold text-[#222222]",children:["Rs."," ",S(n.min_price,n.max_price)]}),e.jsx("td",{className:"px-6 py-4 text-center font-semibold text-gray-700",children:z(n.date)}),e.jsx("td",{className:"px-6 py-4 text-center",children:e.jsx("button",{type:"button",onClick:()=>{var g;return E((g=n.product)==null?void 0:g.id)},disabled:!((s=n.product)!=null&&s.id),className:"cursor-pointer font-medium text-[#004225] underline decoration-1 underline-offset-4 transition-colors hover:text-[#004225] disabled:cursor-not-allowed disabled:opacity-50",children:t("dailyPrices.viewHistory",{defaultValue:"View Price History"})})})]},n.id)})})]})}),e.jsx("div",{className:"space-y-4 md:hidden",children:x.map(n=>{var y,j,v;return e.jsxs("article",{className:"rounded-lg border border-gray-200 bg-white p-5 shadow-sm",children:[e.jsxs("div",{className:"flex items-start justify-between gap-4",children:[e.jsxs("div",{children:[e.jsx("p",{className:"text-xs font-bold uppercase tracking-wide text-[#004225]",children:L((y=n.product)==null?void 0:y.type)}),e.jsx("h3",{className:"mt-1 text-lg font-bold text-[#222222]",children:k((j=n.product)==null?void 0:j.name)})]}),e.jsxs("p",{className:"whitespace-nowrap text-lg font-bold text-[#004225]",children:["Rs."," ",S(n.min_price,n.max_price)]})]}),e.jsxs("div",{className:"mt-4 flex items-center justify-between border-t border-gray-100 pt-4",children:[e.jsx("span",{className:"text-sm text-gray-500",children:z(n.date)}),e.jsxs("button",{type:"button",onClick:()=>{var P;return E((P=n.product)==null?void 0:P.id)},disabled:!((v=n.product)!=null&&v.id),className:"inline-flex items-center gap-1 font-semibold text-[#004225] disabled:cursor-not-allowed disabled:opacity-50",children:[t("dailyPrices.viewHistory",{defaultValue:"View History"}),e.jsx(T,{size:16})]})]})]},n.id)})}),e.jsx("div",{className:"mt-10 text-center",children:e.jsxs("button",{type:"button",onClick:_,className:"inline-flex cursor-pointer items-center gap-2 text-lg font-semibold text-blue-600 underline decoration-2 underline-offset-4 transition-colors hover:text-blue-800",children:[t("dailyPrices.seeAllPrices",{defaultValue:"See All Prices ..."}),e.jsx(T,{size:19})]})})]})]})})},Ze=()=>{const{t}=R(),[a,c]=l.useState(0),i=l.useMemo(()=>[t("mission.1"),t("mission.2"),t("mission.3"),t("mission.4"),t("mission.5"),t("mission.6")],[t]);return l.useEffect(()=>{const x=window.setInterval(()=>{c(d=>(d+1)%i.length)},5e3);return()=>window.clearInterval(x)},[i.length]),e.jsxs("section",{id:"vision-mission",className:`\r
        relative\r
        min-h-[520px]\r
        overflow-hidden\r
        bg-cover\r
        bg-center\r
        bg-no-repeat\r
        py-20\r
        text-white\r
        sm:min-h-[680px]\r
        lg:min-h-[560px]\r
    `,style:{backgroundImage:"url('/images/vissionmisson.png')"},children:[e.jsx("div",{className:"absolute inset-0 bg-[#004225]/80"}),e.jsxs("div",{className:"relative z-10 mx-auto max-w-7xl px-5 sm:px-8",children:[e.jsxs("div",{className:"text-center",children:[e.jsx("h2",{className:"text-4xl font-extrabold tracking-tight sm:text-4xl lg:text-5xl",children:t("visionMission.title")}),e.jsx("p",{className:"mt-3 text-base text-[#e2eee8] sm:text-xl",children:t("visionMission.subtitle")})]}),e.jsxs("div",{className:"mt-14 grid items-center gap-10 lg:grid-cols-3 lg:gap-12",children:[e.jsxs(V.div,{initial:{opacity:0,x:-30},whileInView:{opacity:1,x:0},viewport:{once:!0,amount:.3},transition:{duration:.6},className:"text-center",children:[e.jsx("h3",{className:"text-4xl font-bold sm:text-4xl",children:t("vision.title")}),e.jsx("p",{className:"mx-auto mt-6 max-w-md text-lg leading-relaxed text-[#f4f6f8] sm:text-xl",children:t("vision.text")})]}),e.jsx(V.div,{initial:{opacity:0,scale:.85},whileInView:{opacity:1,scale:1},viewport:{once:!0,amount:.3},transition:{duration:.6},className:"flex justify-center",children:e.jsx(W,{src:"/images/dmbulla_logo.svg",alt:t("publicUi.centerLogo"),className:`\r
                                h-48 w-48 object-contain\r
                                sm:h-66 sm:w-66\r
                                lg:h-84 lg:w-84\r
                            `})}),e.jsxs("div",{className:"flex flex-col text-center",children:[e.jsx("h3",{className:"text-4xl font-bold sm:text-4xl",children:t("mission.title")}),e.jsx("div",{className:"mt-6 flex min-h-[190px] items-center justify-center sm:min-h-[170px]",children:e.jsx(Ve,{mode:"wait",children:e.jsx(V.p,{initial:{opacity:0,x:35},animate:{opacity:1,x:0},exit:{opacity:0,x:-35},transition:{duration:.45,ease:"easeInOut"},className:"mx-auto max-w-md text-lg leading-relaxed text-[#f4f6f8] sm:text-xl",children:i[a]},a)})}),e.jsx("div",{className:"mt-4 flex items-center justify-center gap-2",children:i.map((x,d)=>e.jsx("button",{type:"button",onClick:()=>c(d),"aria-label":t("publicUi.mission",{number:d+1}),"aria-current":a===d?"true":void 0,className:`
                                        h-3 rounded-full
                                        transition-all duration-300
                                        ${a===d?"w-7 bg-[#2b6e55]":"w-3 bg-white/80 hover:bg-white"}
                                    `},d))})]})]})]})]})},Je=()=>{const{t}=R(),a=t("ServiceSection.services",{returnObjects:!0})||[],c=[_e,J,ye,Re],i=Array.isArray(a)?a.map((x,d)=>({...x,icon:c[d]||J})):[];return e.jsx("section",{id:"services",className:"border-y-2 border-[#004225] bg-white",children:e.jsxs("div",{className:"mx-auto w-full max-w-[1280px] px-5 py-20 sm:px-8 lg:px-10 xl:px-12",children:[e.jsxs("div",{className:"mx-auto max-w-[1150px] text-center",children:[e.jsx("h2",{className:`\r
                            text-[42px]\r
                            font-extrabold\r
                            leading-tight\r
                            text-[#004225]\r
                            sm:text-[68px]\r
                        `,children:t("ServiceSection.sectionTitle")}),e.jsx("p",{className:`\r
                            mx-auto\r
                            mt-6\r
                            max-w-[1050px]\r
                            text-center\r
                            text-[18px]\r
                            leading-normal\r
                            text-[#7B7B7B]\r
                            sm:text-[20px]\r
                            lg:text-[24px]\r
                        `,children:t("ServiceSection.sectionDescription")})]}),i.length>0?e.jsx("div",{className:`\r
                            mx-auto\r
                            mt-16\r
                            grid\r
                            w-full\r
                            max-w-[1325px]\r
                            grid-cols-1\r
                            gap-7\r
                            xl:grid-cols-2\r
                        `,children:i.map((x,d)=>{const p=x.icon;return e.jsxs("article",{className:`\r
                                        flex\r
                                        w-full\r
                                        items-start\r
                                        gap-5\r
                                        rounded-xl\r
                                        border\r
                                        border-[#cde0d8]\r
                                        bg-white\r
                                        p-5\r
                                        shadow-sm\r
                                        transition-all\r
                                        duration-300\r
                                        hover:-translate-y-1\r
                                        hover:shadow-lg\r
                                    `,children:[e.jsx("div",{className:`\r
                                            flex\r
                                            h-[92px]\r
                                            w-[92px]\r
                                            shrink-0\r
                                            items-center\r
                                            justify-center\r
                                            rounded-lg\r
                                            bg-[#f4f6f8]\r
                                            text-[#004225]\r
                                        `,children:e.jsx(p,{size:42,strokeWidth:1.8})}),e.jsx("div",{className:"hidden h-[92px] w-px bg-[#E4E4E4] lg:block"}),e.jsxs("div",{className:"flex-1",children:[e.jsx("h3",{className:`\r
                                                text-[22px]\r
                                                font-bold\r
                                                text-[#004225]\r
                                            `,children:x.title}),e.jsx("p",{className:`\r
                                                mt-3\r
                                                text-[16px]\r
                                                leading-[1.45]\r
                                                text-[#333333]\r
                                            `,children:x.description})]})]},d)})}):e.jsx("div",{className:"mt-14 rounded-xl border border-gray-200 bg-gray-50 p-10 text-center text-gray-500",children:t("ServiceSection.noServices")})]})})},Xe="/images/MarketOperations_Backgroung.png",Qe="/images/MarketOperations_Grid_left.jpg",Ye="/images/MarketOperations_Grid_right.png",et="/images/MarketOperations_Grid_Bottom.png",tt=()=>{const{t}=R();return e.jsxs("section",{id:"market-operations",className:`\r
                relative overflow-hidden\r
                bg-cover bg-center bg-no-repeat\r
                px-5 py-10 text-white\r
                sm:px-8\r
                lg:min-h-[560px]\r
                lg:px-12 lg:py-9\r
            `,style:{backgroundImage:`url(${Xe})`},children:[e.jsx("div",{className:"absolute inset-0 bg-[#004225]/90"}),e.jsx("div",{className:"absolute inset-0 bg-black/10"}),e.jsxs("div",{className:"relative z-10 mx-auto max-w-[1380px]",children:[e.jsx(V.div,{initial:{opacity:0,y:-20},whileInView:{opacity:1,y:0},viewport:{once:!0,amount:.3},transition:{duration:.6},className:"text-center",children:e.jsx("h2",{className:`\r
                            text-4xl font-extrabold\r
                            tracking-tight text-white\r
                            sm:text-4xl\r
                            lg:text-5xl\r
                        `,children:t("marketOperations.title")})}),e.jsxs("div",{className:`\r
                        mt-12 grid grid-cols-1\r
                        items-center gap-12\r
                        lg:mt-16\r
                        lg:grid-cols-[1.05fr_0.95fr]\r
                        lg:gap-14\r
                    `,children:[e.jsx(V.div,{initial:{opacity:0,x:-35},whileInView:{opacity:1,x:0},viewport:{once:!0,amount:.2},transition:{duration:.7},className:"max-w-[690px]",children:[1,2,3,4].map(a=>e.jsx("p",{className:`\r
                                    mb-6\r
                                    whitespace-pre-line\r
                                    text-left\r
                                    text-lg\r
                                    leading-[1.35]\r
                                    text-white\r
                                    sm:text-xl\r
                                    lg:text-[22px]\r
                                `,children:t(`marketOperations.para${a}`)},a))}),e.jsxs(V.div,{initial:{opacity:0,x:35},whileInView:{opacity:1,x:0},viewport:{once:!0,amount:.2},transition:{duration:.7,delay:.1},className:`\r
                            relative mx-auto\r
                            h-[430px] w-full\r
                            max-w-[590px]\r
                            sm:h-[500px]\r
                            lg:h-[540px]\r
                        `,children:[e.jsx(V.img,{src:Qe,alt:t("marketOperations.imageAlt",{defaultValue:"Vegetable trading at Dambulla Economic Center"}),initial:{opacity:0,scale:.92},whileInView:{opacity:1,scale:1},viewport:{once:!0},transition:{duration:.6,delay:.2},className:`\r
                                absolute left-[5%] top-[5%]\r
                                z-20\r
                                h-[180px] w-[230px]\r
                                rounded-[14px]\r
                                object-cover\r
                                shadow-xl\r
                                sm:h-[220px] sm:w-[280px]\r
                            `}),e.jsx(V.img,{src:Ye,alt:t("marketOperations.imageAlt",{defaultValue:"Wholesale produce market"}),initial:{opacity:0,scale:.92},whileInView:{opacity:1,scale:1},viewport:{once:!0},transition:{duration:.6,delay:.3},className:`\r
                                absolute right-[3%] top-0\r
                                z-30\r
                                h-[145px] w-[170px]\r
                                rounded-[14px]\r
                                object-cover\r
                                shadow-xl\r
                                sm:h-[175px] sm:w-[195px]\r
                            `}),e.jsx(V.img,{src:et,alt:t("marketOperations.imageAlt",{defaultValue:"Dambulla wholesale market operations"}),initial:{opacity:0,y:25},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{duration:.7,delay:.35},className:`\r
                                absolute bottom-[2%] right-[3%]\r
                                z-20\r
                                h-[265px] w-[67%]\r
                                rounded-[14px]\r
                                object-cover\r
                                shadow-2xl\r
                                sm:h-[330px]\r
                            `})]})]})]})]})};function q(t){if(typeof t!="string"||!t.trim())return"";try{const a=new URL(t.trim());return["https:","http:"].includes(a.protocol)&&!a.username&&!a.password?a.href:""}catch{return""}}const st=t=>{var x;const a=q(t);if(!a)return"";const c=new URL(a);if(c.hostname!=="drive.google.com")return a;const i=((x=c.pathname.match(/^\/file\/d\/([a-zA-Z0-9_-]+)/))==null?void 0:x[1])||c.searchParams.get("id");return i&&/^[a-zA-Z0-9_-]+$/.test(i)?"https://drive.google.com/uc?export=download&id="+encodeURIComponent(i):a},Z={notice:H,announcement:ee,event:K,news:Y};function at({item:t,featured:a=!1,onView:c}){var o,N;const{t:i,i18n:x}=R(),[d,p]=l.useState(null),h=!!(t.image&&d!==t.image),u=Z[(o=t.type)==null?void 0:o.toLowerCase()]?t.type.toLowerCase():"news",w=t.date||t.createdAt||t.created_at,r=w?new Date(w):null,m=r&&!Number.isNaN(r.getTime())?new Intl.DateTimeFormat({en:"en-LK",si:"si-LK",ta:"ta-LK"}[(N=x.language)==null?void 0:N.split("-")[0]]||"en-LK",{year:"numeric",month:"short",day:"2-digit"}).format(r):"";return e.jsxs("article",{className:"publication-card is-featured notice-overlay-card"+(h?"":" has-no-image"),children:[e.jsx("div",{className:"publication-card-image",children:h?e.jsx("img",{src:t.image,alt:t.topic||i("news.cardImageAlt"),className:"publication-photo",loading:"lazy",onError:()=>p(t.image)}):e.jsx("div",{className:"publication-artwork","aria-hidden":"true",children:l.createElement(Z[u],{size:74,strokeWidth:1.2})})}),a&&e.jsx("span",{className:"publication-featured-label",children:i("noticeDesign.featured")}),m&&e.jsxs("span",{className:"publication-card-date",children:[e.jsx(K,{size:13}),e.jsx("time",{dateTime:r.toISOString(),children:m})]}),e.jsxs("div",{className:"publication-card-content",children:[e.jsxs("span",{className:"publication-card-category category-"+u,children:[l.createElement(Z[u],{size:13}),i("news.categories."+u)]}),e.jsx("h3",{children:t.topic}),e.jsx("p",{className:"publication-card-description",children:t.description}),e.jsxs("button",{type:"button",className:"publication-card-view",onClick:()=>c(t),"aria-label":i("noticeDesign.viewDetails")+": "+t.topic,children:[e.jsx("span",{children:i("noticeDesign.viewDetails")}),e.jsx(T,{size:16})]})]})]})}const Q=[["all",We],["notice",H],["announcement",ee],["event",K],["news",Y]],nt=t=>Q.some(([a])=>a===t)?t:"all";function rt(){const{t}=R(),[a]=je(),c=nt(a.get("publication")),[i,x]=l.useState(c),[d,p]=l.useState(1),[h,u]=l.useState(null),[w,r]=l.useState([]),[m,o]=l.useState(!0),[N,D]=l.useState(!1),[k,L]=l.useState(null),[U,S]=l.useState(null),[z,E]=l.useState(!1),[_,n]=l.useState(0),y=l.useRef(null);l.useEffect(()=>{x(c),p(1)},[c]);const j=l.useCallback(async(b=!1)=>{var se;(se=y.current)==null||se.abort();const C=new AbortController;y.current=C,o(!0),D(!1);try{const G=await me(C.signal,b===!0,{page:d,limit:6,type:i});C.signal.aborted||(r(G.data),u(G.pagination))}catch(G){!C.signal.aborted&&!O(G)&&(D(!0),r([]))}finally{C.signal.aborted||o(!1)}},[d,i]);l.useEffect(()=>(j(),()=>{var b;return(b=y.current)==null?void 0:b.abort()}),[j]),l.useEffect(()=>{if(!k)return;const b=new AbortController;return ue(k.id,b.signal).then(C=>{b.signal.aborted||S(C)}).catch(C=>{!b.signal.aborted&&!O(C)&&E(!0)}),()=>b.abort()},[k,_]);const v=b=>{L(b),S(null),E(!1)},P=()=>{L(null),S(null),E(!1)},s=U||k,g=q(s==null?void 0:s.fileUrl),f=q(s==null?void 0:s.image),A=(s==null?void 0:s.description)||"",M=A.trim().match(/^(?:link\s*[-:]?\s*)?(https?:\/\/\/?.+)$/i),he=A&&!(M&&q(M[1])===g),te=Q.some(([b])=>{var C;return b===((C=s==null?void 0:s.type)==null?void 0:C.toLowerCase())})?s.type.toLowerCase():"news";return e.jsxs("section",{id:"publications",tabIndex:-1,className:"public-notices",children:[e.jsxs("div",{className:"public-notices-inner",children:[e.jsxs("div",{className:"public-notices-heading",children:[e.jsx("h2",{children:t("news.title")}),e.jsx("p",{children:t("news.subtitle")})]}),e.jsx("div",{className:"public-notices-tabs",role:"group","aria-label":t("navbar.publications"),children:Q.map(([b,C])=>e.jsxs("button",{type:"button","aria-pressed":i===b,onClick:()=>{x(b),p(1)},children:[l.createElement(C,{size:18,"aria-hidden":!0}),e.jsx("span",{children:t("news.categories."+b)})]},b))}),m&&e.jsx("p",{className:"public-notices-status",role:"status",children:t("news.loading")}),!m&&N&&e.jsxs("div",{className:"public-notices-status",role:"alert",children:[e.jsx("p",{children:t("news.loadFailed")}),e.jsx("button",{type:"button",onClick:()=>j(!0),children:t("news.retry")})]}),!m&&!N&&!w.length&&e.jsx("p",{className:"public-notices-status",children:t("news.noPublications")}),!m&&!N&&w.length>0&&e.jsx(e.Fragment,{children:e.jsx("div",{className:"public-notices-grid",children:w.map((b,C)=>e.jsx(at,{item:b,featured:C===0,onView:v},b.id))})}),!m&&!N&&(h==null?void 0:h.totalPages)>1&&e.jsxs("nav",{"aria-label":t("publicUi.pagination"),className:"public-notices-pagination",children:[e.jsx("button",{type:"button",disabled:!h.hasPreviousPage,onClick:()=>p(b=>b-1),children:t("publicUi.previousPage")}),e.jsx("span",{role:"status",children:t("publicUi.page",{page:h.currentPage})}),e.jsx("button",{type:"button",disabled:!h.hasNextPage,onClick:()=>p(b=>b+1),children:t("publicUi.nextPage")})]})]}),k&&e.jsxs(pe,{onClose:P,"aria-labelledby":"notice-detail-title",className:"notice-detail-dialog",children:[e.jsxs("div",{className:"notice-detail-toolbar",children:[e.jsxs("span",{children:[e.jsx(H,{size:17}),t("noticeDesign.viewDetails")]}),e.jsx("button",{type:"button",className:"notice-detail-close",onClick:P,"aria-label":t("newsWidget.close"),children:e.jsx(B,{size:20})})]}),e.jsxs("div",{className:"notice-detail-layout"+(f?"":" without-preview"),children:[f&&e.jsxs("div",{className:"notice-document-pane",children:[e.jsx("a",{className:"notice-document-preview",href:f,target:"_blank",rel:"noopener noreferrer","aria-label":t("news.view")+": "+s.topic,children:e.jsx(W,{src:f,alt:s.topic,className:"notice-detail-image"})}),e.jsxs("a",{className:"notice-preview-open",href:f,target:"_blank",rel:"noopener noreferrer",children:[e.jsx(re,{size:14}),t("news.view")]})]}),e.jsxs("div",{className:"notice-detail-content",children:[e.jsx("span",{className:"publication-card-category category-"+te,children:t("news.categories."+te)}),e.jsx("h2",{id:"notice-detail-title",children:s.topic}),!U&&!z&&e.jsx("p",{className:"notice-detail-loading",role:"status",children:t("news.loading")}),z&&e.jsxs("div",{className:"notice-detail-error",role:"alert",children:[e.jsx("p",{children:t("news.loadFailed")}),e.jsx("button",{type:"button",onClick:()=>{E(!1),n(b=>b+1)},children:t("news.retry")})]}),he&&e.jsx("p",{className:"notice-detail-description",children:A}),g&&e.jsxs("div",{className:"notice-attachment",children:[e.jsxs("div",{className:"notice-attachment-label",children:[e.jsx(H,{size:23}),e.jsxs("span",{children:[t("noticeDesign.attachment"),e.jsx("small",{children:new URL(g).hostname})]})]}),e.jsxs("div",{className:"notice-detail-links",children:[e.jsxs("a",{href:g,target:"_blank",rel:"noopener noreferrer",children:[e.jsx(re,{size:16}),t("news.view")]}),e.jsxs("a",{href:st(g),target:"_blank",rel:"noopener noreferrer",children:[e.jsx(Ue,{size:16}),t("news.download")]})]})]})]})]})]})]})}const Ct=()=>{const{t}=R();return e.jsxs(e.Fragment,{children:[e.jsxs(ce,{children:[e.jsx("title",{children:t("publicUi.siteTitle")}),e.jsx("meta",{name:"description",content:t("publicUi.description")}),e.jsx("meta",{name:"keywords",content:"Dambulla, Economic Center, Market Operations, Daily Prices"}),e.jsx("meta",{property:"og:title",content:t("publicUi.siteTitle")}),e.jsx("meta",{property:"og:description",content:t("publicUi.description")}),e.jsx("meta",{property:"og:type",content:"website"})]}),e.jsx(Ne,{}),e.jsxs("main",{id:"public-main",tabIndex:-1,className:"public-home",children:[e.jsx(qe,{}),e.jsx(He,{}),e.jsx(Ze,{}),e.jsx(Je,{}),e.jsx(tt,{}),e.jsx(rt,{})]}),e.jsx(ke,{}),e.jsx(Be,{}),e.jsx(Pe,{})]})};export{Ct as default};
