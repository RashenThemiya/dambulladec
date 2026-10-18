import{c as Oe,r as L,j as t,u as re,X as Pe,N as Dt,a as lt,U as Lt,d as Xe,H as ct,m as Q,B as Ct,e as Pt,C as It}from"./index-D5y5xhBX.js";import{a as de,P as At,N as Tt,F as Vt}from"./Navbar-sIkjFTv6.js";import{p as ge,b as dt,i as ve,a as Ot}from"./contracts-BMXew3N5.js";import{C as Me}from"./calendar-days-Hy1QoJ3N.js";import{C as Mt}from"./ContactCallButton-CjNExPlw.js";import{S as Ie}from"./sprout-Bsh8KH70.js";import{S as zt}from"./search-BZhxox9T.js";import{m as Ft,i as Ut,a as Rt}from"./publicFormatting-CoVRIYG7.js";import{L as _t}from"./loader-circle-BSBW1fId.js";import{R as $t}from"./refresh-cw-zsYG97oO.js";import{A as Ye}from"./arrow-right-Dyrgel6x.js";import{A as Bt}from"./index-DE3EANXx.js";import{S as Ht}from"./shield-check-Bnhq9gAz.js";import{E as Wt}from"./eye-H7Hkprdz.js";import{D as Kt}from"./download-D4SvWS1Y.js";import"./mail-Bg3oK1t7.js";import"./index-B9ygI19o.js";/**
 * @license lucide-react v0.484.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qt=[["path",{d:"M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z",key:"3c2336"}],["path",{d:"M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8",key:"1h4pet"}],["path",{d:"M12 18V6",key:"zqpxq5"}]],Gt=Oe("badge-dollar-sign",qt);/**
 * @license lucide-react v0.484.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zt=[["path",{d:"M10.268 21a2 2 0 0 0 3.464 0",key:"vwvbt9"}],["path",{d:"M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326",key:"11g9vi"}]],Ae=Oe("bell",Zt);/**
 * @license lucide-react v0.484.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jt=[["path",{d:"m3 11 18-5v12L3 14v-3z",key:"n962bs"}],["path",{d:"M11.6 16.8a3 3 0 1 1-5.8-1.6",key:"1yl0tm"}]],Qt=Oe("megaphone",Jt),ae=new Map;function ut(e){if(e.imageUrl&&!/^\/api\/publications\/[1-9]\d*\/image(?:\?v=[^#]*)?$/.test(e.imageUrl))throw new Error("Invalid publication image URL");const n=typeof window>"u"?"http://localhost":window.location.origin;return{...e,image:e.imageUrl?new URL(e.imageUrl,new URL(ge.defaults.baseURL||"/",n)).href:null}}function Xt(e,n){return n?new Promise((r,s)=>{const a=()=>s(new DOMException("Request cancelled","AbortError"));if(n.aborted){a();return}n.addEventListener("abort",a,{once:!0}),e.then(o=>{n.removeEventListener("abort",a),n.aborted||r(o)},o=>{n.removeEventListener("abort",a),n.aborted||s(o)})}):e}function ft(e,n=!1,{page:r=1,limit:s=6,type:a="all"}={}){if(e!=null&&e.aborted)return Promise.reject(new DOMException("Request cancelled","AbortError"));const o=JSON.stringify([r,s,a]);let i=ae.get(o);if(n||!i||i.expires<Date.now()){const c={expires:Date.now()+3e4};c.promise=ge.get("/api/publications/browse",{params:{page:r,limit:s,...a!=="all"?{type:a}:{}}}).then(l=>{var m,d;const u=dt((m=l.data)==null?void 0:m.data),f=(d=l.data)==null?void 0:d.pagination;if(!f||f.currentPage!==r||f.pageSize!==s||!Number.isInteger(f.totalItems)||f.totalItems<0||f.totalPages!==Math.ceil(f.totalItems/s)||u.length>s)throw new Error("Invalid publication pagination");return{data:u.map(ut),pagination:f}}).catch(l=>{throw ae.get(o)===c&&ae.delete(o),l}),ae.set(o,c),i=c,ae.size>20&&ae.delete(ae.keys().next().value)}return Xt(i.promise,e)}const Yt=(e,n=!1)=>ft(e,n).then(r=>r.data);async function en(e,n){const r=await ge.get("/api/publications/details/"+encodeURIComponent(e),{signal:n}),[s]=dt([r.data]);return ut(s)}function tn({children:e,onClose:n,className:r="",...s}){const a=L.useRef(null),o=L.useRef(n);return o.current=n,L.useEffect(()=>{const i=document.activeElement,c=document.body.style.overflow;document.body.style.overflow="hidden";const l=a.current,u=()=>[...l.querySelectorAll('button:not([disabled]),a[href],input:not([disabled]),select,textarea,[tabindex="0"]')].filter(d=>d.getClientRects().length);(u()[0]||l).focus();const f=d=>{if(d.key==="Escape"&&(d.preventDefault(),d.stopPropagation(),o.current()),d.key==="Tab"){const j=u(),p=j[0]||l,g=j.at(-1)||l;d.shiftKey&&(document.activeElement===p||!l.contains(document.activeElement))?(d.preventDefault(),g.focus()):!d.shiftKey&&(document.activeElement===g||!l.contains(document.activeElement))&&(d.preventDefault(),p.focus())}},m=d=>{l.contains(d.target)||(u()[0]||l).focus()};return document.addEventListener("keydown",f,!0),document.addEventListener("focusin",m),()=>{document.body.style.overflow=c,document.removeEventListener("keydown",f,!0),document.removeEventListener("focusin",m),i!=null&&i.isConnected&&i.focus()}},[]),t.jsx("div",{className:"fixed inset-0 z-[120] flex items-center justify-center bg-black/60 p-4 backdrop-blur-sm",onMouseDown:i=>{i.target===i.currentTarget&&n()},children:t.jsx("article",{...s,ref:a,role:"dialog","aria-modal":"true",tabIndex:-1,className:r,children:e})})}const et={notice:{icon:Qt,styles:"border-amber-200 bg-amber-50 text-amber-700"},announcement:{icon:Ae,styles:"border-emerald-200 bg-emerald-50 text-emerald-700"},news:{icon:Dt,styles:"border-blue-200 bg-blue-50 text-blue-700"},event:{icon:Me,styles:"border-purple-200 bg-purple-50 text-purple-700"}},tt=e=>{if(!e)return null;const n=/(https?:\/\/[^\s]+)/g;return e.split(n).map((r,s)=>/^https?:\/\/[^\s]+$/.test(r)?t.jsx("a",{href:r,target:"_blank",rel:"noopener noreferrer",className:"break-all text-blue-600 underline underline-offset-2 hover:text-blue-800",children:r},`${r}-${s}`):t.jsx("span",{children:r},s))},nn=()=>{var T;const{t:e,i18n:n}=re(),[r,s]=L.useState(!1),[a,o]=L.useState(!1),[i,c]=L.useState(0),[l,u]=L.useState([]),[f,m]=L.useState(!1),[d,j]=L.useState(null),[p,g]=L.useState(!1),[y,x]=L.useState(!0),[w,v]=L.useState("");L.useEffect(()=>{const b=new AbortController;return(async()=>{try{x(!0),v("");const C=await Yt(b.signal);b.signal.aborted||u(C.slice(0,5))}catch(C){if(b.signal.aborted||ve(C))return;console.error("Failed to load news widget:",C),v("newsWidget.loadError")}finally{b.signal.aborted||x(!1)}})(),()=>b.abort()},[]),L.useEffect(()=>{const b=A=>{if(A.key==="Escape"){if(d){j(null),g(!1);return}m(!1)}};return window.addEventListener("keydown",b),()=>{window.removeEventListener("keydown",b)}},[d]);const P=d==null?void 0:d.id;L.useEffect(()=>{if(!P)return;const b=new AbortController;return s(!0),o(!1),en(P,b.signal).then(A=>{b.signal.aborted||j(C=>(C==null?void 0:C.id)===P?{...C,...A}:C)}).catch(A=>{!b.signal.aborted&&!ve(A)&&o(!0)}).finally(()=>{b.signal.aborted||s(!1)}),()=>b.abort()},[P,i]);const S=b=>{var z;if(!b)return"";const A=new Date(b);if(Number.isNaN(A.getTime()))return b;const C=((z=n.language)==null?void 0:z.split("-")[0])||"en",I={en:"en-LK",si:"si-LK",ta:"ta-LK"};return new Intl.DateTimeFormat(I[C]||"en-LK",{year:"numeric",month:"short",day:"2-digit"}).format(A)},h=b=>et[b]||et.news,N=b=>{j(b),g(!1)},D=()=>{j(null),g(!1)},E=((T=d==null?void 0:d.description)==null?void 0:T.length)>300;return t.jsxs(t.Fragment,{children:[t.jsxs("button",{type:"button",onClick:()=>m(b=>!b),"aria-label":e("newsWidget.title",{defaultValue:"Latest Updates"}),"aria-expanded":f,className:`\r
          fixed bottom-5 left-4 z-[90]\r
          flex h-12 w-12 items-center justify-center\r
          rounded-full bg-[#087b36] text-white\r
          shadow-lg transition-colors duration-200\r
          hover:bg-[#06652d]\r
          focus:outline-none focus-visible:ring-4\r
          focus-visible:ring-green-300\r
          sm:bottom-6 sm:left-6\r
        `,children:[f?t.jsx(Pe,{size:21}):t.jsx(Ae,{size:21}),!f&&l.length>0&&t.jsx("span",{className:`\r
              absolute -right-1 -top-1\r
              flex h-5 min-w-5 items-center justify-center\r
              rounded-full border-2 border-white\r
              bg-red-500 px-1\r
              text-[10px] font-bold text-white\r
            `,children:l.length})]}),f&&t.jsxs("div",{className:`
          fixed bottom-[82px] left-4 z-[80]
          w-[calc(100%-2rem)] max-w-[380px]
          origin-bottom-left
          rounded-2xl border border-gray-200
          bg-white shadow-2xl
          transition-all duration-200
          sm:bottom-[88px] sm:left-6 sm:w-[380px]
          ${f?"visible translate-y-0 scale-100 opacity-100":"invisible translate-y-3 scale-95 opacity-0"}
        `,children:[t.jsxs("div",{className:`\r
            flex items-center justify-between\r
            rounded-t-2xl bg-[#087b36]\r
            px-5 py-4 text-white\r
          `,children:[t.jsxs("div",{className:"flex items-center gap-3",children:[t.jsx("span",{className:`\r
                flex h-9 w-9 items-center justify-center\r
                rounded-full bg-white/15\r
              `,children:t.jsx(Ae,{size:18})}),t.jsxs("div",{children:[t.jsx("h3",{className:"font-bold",children:e("newsWidget.title",{defaultValue:"Latest Updates"})}),t.jsx("p",{className:"mt-0.5 text-xs text-white/75",children:e("newsWidget.subtitle",{defaultValue:"Recent notices, announcements, news and events."})})]})]}),t.jsx("button",{type:"button",onClick:()=>m(!1),"aria-label":e("newsWidget.closeWidget",{defaultValue:"Close latest updates"}),className:`\r
              flex h-8 w-8 items-center justify-center\r
              rounded-full text-white/80\r
              transition hover:bg-white/15 hover:text-white\r
            `,children:t.jsx(Pe,{size:18})})]}),t.jsxs("div",{className:"p-3",children:[y&&t.jsx("div",{className:"space-y-3",children:Array.from({length:3}).map((b,A)=>t.jsxs("div",{className:`\r
                    flex animate-pulse gap-3\r
                    rounded-xl border border-gray-100 p-3\r
                  `,children:[t.jsx("div",{className:"h-16 w-16 shrink-0 rounded-lg bg-gray-200"}),t.jsxs("div",{className:"flex-1 space-y-2",children:[t.jsx("div",{className:"h-3 w-24 rounded bg-gray-200"}),t.jsx("div",{className:"h-4 w-full rounded bg-gray-200"}),t.jsx("div",{className:"h-3 w-4/5 rounded bg-gray-200"})]})]},A))}),!y&&w&&t.jsx("div",{className:`\r
                rounded-xl border border-red-200\r
                bg-red-50 px-4 py-8\r
                text-center text-sm text-red-700\r
              `,children:e(w)}),!y&&!w&&l.length===0&&t.jsx("div",{className:`\r
                rounded-xl border border-dashed border-gray-300\r
                bg-gray-50 px-4 py-8\r
                text-center text-sm text-gray-500\r
              `,children:e("newsWidget.noNews",{defaultValue:"No recent news."})}),!y&&!w&&l.length>0&&t.jsx("ul",{className:"max-h-[410px] space-y-2 overflow-y-auto pr-1",children:l.map(b=>{const A=h(b.type),C=A.icon;return t.jsx("li",{children:t.jsxs("button",{type:"button",onClick:()=>N(b),className:`\r
                        group flex w-full items-start gap-3\r
                        rounded-xl border border-transparent\r
                        p-3 text-left\r
                        transition-colors duration-200\r
                        hover:border-green-100\r
                        hover:bg-green-50/70\r
                      `,children:[b.image?t.jsx(de,{src:b.image,alt:b.topic||"News",className:`\r
                            h-[72px] w-[72px] shrink-0\r
                            rounded-lg object-cover\r
                          `}):t.jsx("div",{className:`\r
                            flex h-[72px] w-[72px] shrink-0\r
                            items-center justify-center\r
                            rounded-lg bg-gray-100\r
                            text-[11px] text-gray-400\r
                          `,children:e("newsWidget.noImage",{defaultValue:"No image"})}),t.jsxs("div",{className:"min-w-0 flex-1",children:[t.jsxs("div",{className:"flex flex-wrap items-center gap-2",children:[t.jsxs("span",{className:`
                              inline-flex items-center gap-1
                              rounded-full border
                              px-2 py-1 text-[10px] font-semibold
                              ${A.styles}
                            `,children:[t.jsx(C,{size:12}),e(`news.categories.${b.type||"news"}`,{defaultValue:b.type||"News"})]}),(b.date||b.createdAt)&&t.jsx("span",{className:"text-[10px] text-gray-400",children:S(b.date||b.createdAt)})]}),t.jsx("h4",{className:`\r
                            mt-2 line-clamp-2\r
                            text-sm font-semibold leading-snug\r
                            text-gray-900\r
                            group-hover:text-[#087b36]\r
                          `,children:b.topic}),t.jsx("p",{className:`\r
                            mt-1 line-clamp-2\r
                            text-xs leading-relaxed text-gray-500\r
                          `,children:b.description})]})]})},b.id||b._id)})})]})]}),d&&t.jsxs(tn,{onClose:D,"aria-labelledby":"news-details-title",className:`\r
              relative max-h-[90vh] w-full max-w-2xl\r
              overflow-y-auto rounded-2xl\r
              bg-white shadow-2xl\r
            `,children:["            ",r&&t.jsx("p",{role:"status",className:"p-4",children:e("publicUi.loadingDetails")}),a&&t.jsxs("p",{role:"alert",className:"p-4 text-red-700",children:[e("newsWidget.loadError")," ",t.jsx("button",{type:"button",className:"underline",onClick:()=>c(b=>b+1),children:e("publicUi.retry")})]}),t.jsx("button",{type:"button",onClick:D,"aria-label":e("newsWidget.close",{defaultValue:"Close news details"}),className:`\r
                absolute right-4 top-4 z-10\r
                flex h-9 w-9 items-center justify-center\r
                rounded-full bg-black/55 text-white\r
                transition hover:bg-black/75\r
              `,children:t.jsx(Pe,{size:20})}),d.image?t.jsx(de,{src:d.image,alt:d.topic||e("newsWidget.title"),className:`\r
                  h-[230px] w-full rounded-t-2xl\r
                  object-cover sm:h-[340px]\r
                `}):t.jsx("div",{className:`\r
                  flex h-[230px] items-center justify-center\r
                  rounded-t-2xl bg-gray-100\r
                  text-gray-400 sm:h-[340px]\r
                `,children:e("newsWidget.noImage",{defaultValue:"No image"})}),t.jsxs("div",{className:"p-5 sm:p-7",children:[(()=>{const b=h(d.type),A=b.icon;return t.jsxs("div",{className:"flex flex-wrap items-center justify-between gap-3",children:[t.jsxs("span",{className:`
                        inline-flex items-center gap-2
                        rounded-full border px-3 py-1.5
                        text-xs font-semibold
                        ${b.styles}
                      `,children:[t.jsx(A,{size:15}),e(`news.categories.${d.type||"news"}`,{defaultValue:d.type||"News"})]}),(d.date||d.createdAt)&&t.jsx("span",{className:"text-sm text-gray-500",children:S(d.date||d.createdAt)})]})})(),t.jsx("h2",{id:"news-details-title",className:"mt-4 text-2xl font-bold leading-tight text-gray-900",children:d.topic}),t.jsx("div",{className:"mt-4 whitespace-pre-wrap text-sm leading-7 text-gray-700",children:tt(p||!E?d.description:`${d.description.slice(0,300)}...`)}),E&&t.jsx("div",{className:"mt-4 text-right",children:t.jsx("button",{type:"button",onClick:()=>g(b=>!b),className:`\r
                      text-sm font-semibold text-[#087b36]\r
                      hover:underline\r
                    `,children:p?e("newsWidget.showLess",{defaultValue:"Show less"}):e("newsWidget.readMore",{defaultValue:"Read more"})})})]})]})]})},rn="data:image/svg+xml,%3csvg%20width='50'%20height='50'%20viewBox='0%200%2050%2050'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M24.9792%204.66667C36.2241%204.66667%2045.3335%2013.7763%2045.3336%2024.9997C45.3336%2036.2232%2036.2242%2045.3337%2024.9792%2045.3337C13.7559%2045.3337%204.66666%2036.2242%204.66666%2024.9997C4.66683%2013.7753%2013.7561%204.66667%2024.9792%204.66667ZM24.9997%207.83366C15.5154%207.83384%207.83383%2015.5155%207.83365%2024.9997C7.83365%2034.484%2015.5153%2042.1665%2024.9997%2042.1667C34.4841%2042.1667%2042.1667%2034.4842%2042.1667%2024.9997C42.1665%2015.5154%2034.484%207.83366%2024.9997%207.83366ZM25.5417%2015.0837V25.8053L25.7868%2025.9509L34.7262%2031.2546L33.6852%2032.9616L23.4167%2026.8005V15.0837H25.5417Z'%20fill='%23009D31'%20stroke='%23009D31'/%3e%3c/svg%3e",sn=()=>{const{t:e}=re(),n=lt(),[r,s]=L.useState(""),a=i=>{i.preventDefault();const c=r.trim();if(!c){n("/home-dailyprice");return}n(`/home-dailyprice?search=${encodeURIComponent(c)}`)},o=[{value:e("featureCards.tradersValue"),label:e("featureCards.tradersLabel"),icon:Lt},{value:e("featureCards.vegetablesValue"),label:e("featureCards.vegetablesLabel"),icon:Ie},{value:e("featureCards.marketShareValue"),label:e("featureCards.marketShareLabel"),icon:Xe}];return t.jsxs(t.Fragment,{children:[t.jsxs(ct,{children:[t.jsx("title",{children:e("publicUi.siteTitle")}),t.jsx("meta",{name:"description",content:e("publicUi.description")}),t.jsx("meta",{name:"keywords",content:"Dambulla Economic Center, daily vegetable prices, Sri Lanka vegetables, wholesale market, farmers market"}),t.jsx("link",{rel:"canonical",href:"https://dambulladec.com/"}),t.jsx("meta",{property:"og:title",content:e("publicUi.siteTitle")}),t.jsx("meta",{property:"og:description",content:e("publicUi.description")}),t.jsx("meta",{property:"og:image",content:"https://dambulladec.com/images/welcome-hero.png"}),t.jsx("meta",{property:"og:url",content:"https://dambulladec.com/"}),t.jsx("meta",{name:"twitter:card",content:"summary_large_image"})]}),t.jsxs("section",{className:"relative overflow-hidden bg-white",children:[t.jsx("div",{className:`\r
                        absolute inset-0\r
                        bg-[url('/images/welcome-hero.png')]\r
                        bg-cover bg-center bg-no-repeat\r
                        max-lg:bg-[position:58%_center]\r
                        max-md:bg-[position:64%_center]\r
                    `}),t.jsx("div",{className:`\r
                        absolute inset-0\r
                        bg-gradient-to-r\r
                        from-white\r
                        via-white/95\r
                        to-white/10\r
                        lg:via-white/80\r
                        lg:to-transparent\r
                    `}),t.jsxs("div",{className:`\r
        public-hero-content relative z-10\r
        mx-auto w-full\r
        px-3 pb-10 pt-6\r
        sm:px-4\r
        md:px-6 md:pb-12\r
        lg:min-h-[480px]\r
        lg:px-8 lg:pb-14 lg:pt-5\r
    `,children:[t.jsx("div",{className:"flex justify-center mb-8",children:t.jsxs("div",{className:`\r
            inline-flex\r
            items-center\r
            gap-3\r
            rounded-full\r
            border\r
            border-[#D9D9D9]\r
            bg-white\r
            px-5\r
            py-2\r
            shadow-[0_4px_14px_rgba(0,0,0,0.12)]\r
        `,children:[t.jsx(de,{src:rn,alt:e("publicUi.openTime"),className:"w-10 h-10"}),t.jsxs("p",{className:"text-[18px] font-medium text-[#4A4A4A]",children:[e("featureCards.openDaily")," ",t.jsx("span",{className:"font-bold text-[#08772F]",children:e("featureCards.openTime")})]})]})}),t.jsxs("div",{className:`\r
                            grid grid-cols-1\r
                            lg:grid-cols-2\r
                            lg:items-center\r
                        `,children:[t.jsxs("div",{className:`\r
                                max-w-[650px]\r
                                pt-10\r
                                sm:pt-14\r
                                lg:pt-8\r
                            `,children:[t.jsx("p",{className:`\r
        mb-3 text-base\r
        font-semibold text-[#075f2a]\r
        sm:text-lg\r
    `,children:e("home.welcomePrefix")}),t.jsxs("h1",{className:`\r
        text-[38px] font-extrabold\r
        leading-[1.08] tracking-tight\r
        text-black\r
        sm:text-[50px]\r
        lg:text-[58px]\r
        xl:text-[64px]\r
    `,children:[t.jsx("span",{className:"block",children:e("home.titlePrimary")}),t.jsx("span",{className:"mt-1 block text-[#007f32]",children:e("home.titleSecondary")})]}),t.jsx("div",{className:`\r
                                    mt-4 h-[4px] w-14\r
                                    rounded-full bg-[#00a63d]\r
                                `}),t.jsx("p",{className:`\r
                                    mt-6 max-w-[610px]\r
                                    text-sm leading-[1.45]\r
                                    text-gray-600\r
                                    sm:text-base\r
                                    lg:max-w-[560px]\r
                                `,children:e("home.description")}),t.jsxs("form",{onSubmit:a,className:`\r
        mt-7 flex max-w-[570px]\r
        items-center gap-2\r
        rounded-lg border\r
        border-[#cfe4d5]\r
        bg-white p-1.5\r
        shadow-sm\r
        transition\r
        focus-within:border-[#008738]\r
        focus-within:ring-2\r
        focus-within:ring-green-100\r
    `,children:[t.jsx(zt,{size:18,className:"ml-2 shrink-0 text-[#008738]"}),t.jsx("input",{type:"search",value:r,onChange:i=>s(i.target.value),placeholder:e("dailyPrices.searchPlaceholder",{defaultValue:"Search Products"}),"aria-label":e("dailyPrices.searchPlaceholder",{defaultValue:"Search Products"}),className:`\r
            min-w-0 flex-1\r
            bg-transparent px-2 py-2.5\r
            text-sm text-gray-700\r
            outline-none\r
            placeholder:text-gray-400\r
        `}),r&&t.jsx("button",{type:"button",onClick:()=>s(""),"aria-label":e("dailyPrices.clearSearch",{defaultValue:"Clear search"}),className:`\r
                shrink-0 rounded-md\r
                px-2 py-2\r
                text-gray-400\r
                transition-colors\r
                hover:bg-gray-100\r
                hover:text-gray-700\r
            `,children:"×"}),t.jsx("button",{type:"submit",className:`\r
            shrink-0 rounded-md\r
            bg-[#007f32]\r
            px-5 py-3\r
            text-xs font-semibold\r
            text-white\r
            transition-colors\r
            hover:bg-[#006627]\r
            sm:px-6\r
        `,children:e("dailyPrices.searchButton",{defaultValue:"Search"})})]}),t.jsxs("div",{className:`\r
                                    mt-5 flex flex-wrap\r
                                    items-center gap-4\r
                                `,children:[t.jsxs("button",{type:"button",onClick:()=>n("/home-dailyprice"),className:`\r
                                        inline-flex items-center gap-2\r
                                        rounded-md bg-[#007f32]\r
                                        px-5 py-3\r
                                        font-semibold text-white\r
                                        shadow-sm\r
                                        transition-all duration-200\r
                                        hover:bg-[#006627]\r
                                        hover:shadow-md\r
                                    `,children:[t.jsx(Xe,{size:18}),t.jsx("span",{children:e("navbar.dailyPrice","Daily Price")})]}),t.jsxs("button",{type:"button",onClick:()=>n("/contact"),className:`\r
                                        inline-flex items-center gap-2\r
                                        rounded-md border\r
                                        border-[#008738]\r
                                        bg-white/80 px-5 py-3\r
                                        font-semibold text-[#007f32]\r
                                        backdrop-blur-sm\r
                                        transition-all duration-200\r
                                        hover:bg-green-50\r
                                    `,children:[t.jsx(At,{size:18}),t.jsx("span",{children:e("navbar.contact","Contact")})]})]})]}),t.jsx("div",{className:`\r
                                hidden min-h-[430px]\r
                                lg:block\r
                            `,"aria-hidden":"true"})]})]})]}),t.jsx("section",{className:"relative z-20 bg-white px-3 py-6 sm:px-5 lg:py-7",children:t.jsx("div",{className:"public-hero-content mx-auto w-full",children:t.jsx("div",{className:`\r
                grid grid-cols-1\r
                overflow-hidden rounded-lg\r
                border border-gray-200\r
                bg-white shadow-md\r
                sm:grid-cols-3\r
            `,children:o.map((i,c)=>{const l=i.icon;return t.jsxs("div",{className:`
                            flex min-h-[82px]
                            items-center gap-4
                            px-6 py-4
                            ${c!==o.length-1?"border-b border-gray-200 sm:border-b-0 sm:border-r":""}
                        `,children:[t.jsx("div",{className:`\r
                                flex h-12 w-12 shrink-0\r
                                items-center justify-center\r
                                rounded-full bg-[#f0f9f2]\r
                                text-[#008738]\r
                            `,children:t.jsx(l,{size:21,strokeWidth:1.9})}),t.jsxs("div",{className:"min-w-0",children:[t.jsx("p",{className:"whitespace-nowrap text-2xl font-bold text-[#007f32]",children:i.value}),t.jsx("p",{className:"mt-1 text-xs leading-tight text-gray-500",children:i.label})]})]},i.label)})})})})]})},nt=6,on=()=>{const{t:e,i18n:n}=re(),r=lt(),s=L.useRef(null),[a,o]=L.useState([]),[i,c]=L.useState(""),[l,u]=L.useState(!0),[f,m]=L.useState(""),d=h=>Ft(h),j=L.useCallback(async(h,N)=>{const D=await ge.get("/api/prices/by-date/"+h,{signal:N,params:{page:1,limit:nt}});return Ot(D.data,{page:1,limit:nt})},[]),p=L.useCallback(async()=>{var N,D;(N=s.current)==null||N.abort();const h=new AbortController;s.current=h,u(!0),m(""),o([]),c("");try{const E=d(new Date),b=(D=(await ge.get("/api/prices/latest-date",{signal:h.signal,params:{notAfter:E}})).data)==null?void 0:D.date;if(b!==null&&(!Ut(b)||b>E))throw new Error("Invalid latest date response");const A=b?await j(b,h.signal):{data:[]};if(h.signal.aborted)return;const C=A.data;o(C),c(b||"")}catch(E){if(h.signal.aborted||ve(E))return;console.error("Failed to load latest prices:",E),m("dailyPrices.loadError"),o([]),c("")}finally{h.signal.aborted||u(!1)}},[j]);L.useEffect(()=>(p(),()=>{var h;return(h=s.current)==null?void 0:h.abort()}),[p]);const g=h=>h?e(h,{defaultValue:h}):"-",y=h=>h?e(`types.${h}`,{defaultValue:h}):e("types.Uncategorized",{defaultValue:"Uncategorized"}),x=h=>Rt(h,n.resolvedLanguage),w=(h,N)=>`${x(h)} - ${x(N)}`,v=h=>{var T;if(!h)return"-";const N=((T=n.resolvedLanguage)==null?void 0:T.split("-")[0])||"en",D={en:"en-LK",si:"si-LK",ta:"ta-LK"},E=new Date(`${h}T00:00:00`);return Number.isNaN(E.getTime())?h:new Intl.DateTimeFormat(D[N]||"en-LK",{year:"numeric",month:"2-digit",day:"2-digit"}).format(E)},P=h=>{h&&r(`/product/${h}/chart`)},S=()=>{r("/home-dailyprice")};return t.jsx("section",{className:"bg-white px-4 py-9 sm:px-6 lg:px-8",children:t.jsxs("div",{className:"mx-auto w-full max-w-[1320px]",children:[t.jsxs("div",{className:"mb-8 text-center",children:[t.jsx("h2",{className:"text-4xl font-extrabold tracking-tight text-black sm:text-4xl",children:e("dailyPrices.previewTitle",{defaultValue:"Daily Prices"})}),i&&t.jsxs("div",{className:"mt-3 flex items-center justify-center gap-2 text-sm text-gray-500",children:[t.jsx(Me,{size:16}),t.jsxs("span",{children:[e("dailyPrices.latestDate",{defaultValue:"Latest prices:"})," ",v(i)]})]})]}),l&&t.jsx("div",{className:"flex min-h-[260px] items-center justify-center",children:t.jsxs("div",{className:"flex items-center gap-3 text-[#087d35]",children:[t.jsx(_t,{size:30,className:"animate-spin"}),t.jsx("span",{className:"font-semibold",children:e("dailyPrices.loading",{defaultValue:"Loading daily prices..."})})]})}),!l&&f&&t.jsxs("div",{className:"rounded-lg border border-red-200 bg-red-50 p-8 text-center",children:[t.jsx("p",{className:"font-medium text-red-700",children:e(f)}),t.jsxs("button",{type:"button",onClick:p,className:"mt-4 inline-flex items-center gap-2 rounded-md bg-red-600 px-5 py-2.5 font-semibold text-white transition-colors hover:bg-red-700",children:[t.jsx($t,{size:17}),e("dailyPrices.retry",{defaultValue:"Retry"})]})]}),!l&&!f&&a.length===0&&t.jsxs("div",{className:"rounded-lg border border-gray-200 bg-gray-50 px-6 py-14 text-center",children:[t.jsx("p",{className:"font-semibold text-gray-600",children:e("dailyPrices.noDatal1",{defaultValue:"Daily price information is being updated."})}),t.jsx("p",{className:"mt-2 text-sm text-gray-500",children:e("dailyPrices.noDatal2",{defaultValue:"The information will be available once the update is complete."})})]}),!l&&!f&&a.length>0&&t.jsxs(t.Fragment,{children:[t.jsx("div",{className:"hidden overflow-hidden rounded-lg border border-gray-200 md:block",children:t.jsxs("table",{className:"w-full border-collapse",children:[t.jsx("thead",{children:t.jsxs("tr",{className:"bg-[#128238] text-white",children:[t.jsx("th",{className:"px-6 py-4 text-left text-sm font-semibold",children:e("dailyPrices.category",{defaultValue:"Category"})}),t.jsx("th",{className:"px-6 py-4 text-center text-sm font-semibold",children:e("dailyPrices.name",{defaultValue:"Name"})}),t.jsx("th",{className:"px-6 py-4 text-center text-sm font-semibold",children:e("dailyPrices.priceRange",{defaultValue:"Price Range (LKR)"})}),t.jsx("th",{className:"px-6 py-4 text-center text-sm font-semibold",children:e("dailyPrices.date",{defaultValue:"Date"})}),t.jsx("th",{className:"px-6 py-4 text-center text-sm font-semibold",children:e("dailyPrices.action",{defaultValue:"Action"})})]})}),t.jsx("tbody",{children:a.map(h=>{var N,D,E,T,b;return t.jsxs("tr",{className:"border-b border-emerald-200 transition-colors last:border-b-0 hover:bg-green-50",children:[t.jsx("td",{className:"px-6 py-4 font-semibold text-gray-700",children:y((N=h.product)==null?void 0:N.type)}),t.jsx("td",{className:"px-6 py-4 text-center font-semibold text-gray-800",children:t.jsxs("div",{className:"mx-auto flex max-w-64 items-center gap-3 text-left",children:[t.jsx(de,{src:(D=h.product)==null?void 0:D.image,alt:g((E=h.product)==null?void 0:E.name),width:40,height:40,className:"h-10 w-10 shrink-0 rounded-lg border border-gray-100 object-cover text-[9px]!"}),t.jsx("span",{className:"min-w-0 break-words",children:g((T=h.product)==null?void 0:T.name)})]})}),t.jsxs("td",{className:"px-6 py-4 text-center font-semibold text-gray-800",children:["Rs."," ",w(h.min_price,h.max_price)]}),t.jsx("td",{className:"px-6 py-4 text-center font-semibold text-gray-700",children:v(h.date)}),t.jsx("td",{className:"px-6 py-4 text-center",children:t.jsx("button",{type:"button",onClick:()=>{var A;return P((A=h.product)==null?void 0:A.id)},disabled:!((b=h.product)!=null&&b.id),className:"cursor-pointer font-medium text-[#008a3b] underline decoration-1 underline-offset-4 transition-colors hover:text-[#00662b] disabled:cursor-not-allowed disabled:opacity-50",children:e("dailyPrices.viewHistory",{defaultValue:"View Price History"})})})]},h.id)})})]})}),t.jsx("div",{className:"space-y-4 md:hidden",children:a.map(h=>{var N,D,E;return t.jsxs("article",{className:"rounded-lg border border-gray-200 bg-white p-5 shadow-sm",children:[t.jsxs("div",{className:"flex items-start justify-between gap-4",children:[t.jsxs("div",{children:[t.jsx("p",{className:"text-xs font-bold uppercase tracking-wide text-[#008a3b]",children:y((N=h.product)==null?void 0:N.type)}),t.jsx("h3",{className:"mt-1 text-lg font-bold text-gray-900",children:g((D=h.product)==null?void 0:D.name)})]}),t.jsxs("p",{className:"whitespace-nowrap text-lg font-bold text-[#087d35]",children:["Rs."," ",w(h.min_price,h.max_price)]})]}),t.jsxs("div",{className:"mt-4 flex items-center justify-between border-t border-gray-100 pt-4",children:[t.jsx("span",{className:"text-sm text-gray-500",children:v(h.date)}),t.jsxs("button",{type:"button",onClick:()=>{var T;return P((T=h.product)==null?void 0:T.id)},disabled:!((E=h.product)!=null&&E.id),className:"inline-flex items-center gap-1 font-semibold text-[#008a3b] disabled:cursor-not-allowed disabled:opacity-50",children:[e("dailyPrices.viewHistory",{defaultValue:"View History"}),t.jsx(Ye,{size:16})]})]})]},h.id)})}),t.jsx("div",{className:"mt-10 text-center",children:t.jsxs("button",{type:"button",onClick:S,className:"inline-flex cursor-pointer items-center gap-2 text-lg font-semibold text-blue-600 underline decoration-2 underline-offset-4 transition-colors hover:text-blue-800",children:[e("dailyPrices.seeAllPrices",{defaultValue:"See All Prices ..."}),t.jsx(Ye,{size:19})]})})]})]})})},an=()=>{const{t:e}=re(),[n,r]=L.useState(0),s=L.useMemo(()=>[e("mission.1"),e("mission.2"),e("mission.3"),e("mission.4"),e("mission.5"),e("mission.6")],[e]);return L.useEffect(()=>{const a=window.setInterval(()=>{r(o=>(o+1)%s.length)},5e3);return()=>window.clearInterval(a)},[s.length]),t.jsxs("section",{className:`\r
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
    `,style:{backgroundImage:"url('/images/vissionmisson.png')"},children:[t.jsx("div",{className:"absolute inset-0 bg-[#075d2d]/80"}),t.jsxs("div",{className:"relative z-10 mx-auto max-w-7xl px-5 sm:px-8",children:[t.jsxs("div",{className:"text-center",children:[t.jsx("h2",{className:"text-4xl font-extrabold tracking-tight sm:text-4xl lg:text-5xl",children:e("visionMission.title")}),t.jsx("p",{className:"mt-3 text-base text-green-100 sm:text-xl",children:e("visionMission.subtitle")})]}),t.jsxs("div",{className:"mt-14 grid items-center gap-10 lg:grid-cols-3 lg:gap-12",children:[t.jsxs(Q.div,{initial:{opacity:0,x:-30},whileInView:{opacity:1,x:0},viewport:{once:!0,amount:.3},transition:{duration:.6},className:"text-center",children:[t.jsx("h3",{className:"text-4xl font-bold sm:text-4xl",children:e("vision.title")}),t.jsx("p",{className:"mx-auto mt-6 max-w-md text-lg leading-relaxed text-green-50 sm:text-xl",children:e("vision.text")})]}),t.jsx(Q.div,{initial:{opacity:0,scale:.85},whileInView:{opacity:1,scale:1},viewport:{once:!0,amount:.3},transition:{duration:.6},className:"flex justify-center",children:t.jsx(de,{src:"/images/dmbulla_logo.svg",alt:e("publicUi.centerLogo"),className:`\r
                                h-48 w-48 object-contain\r
                                sm:h-66 sm:w-66\r
                                lg:h-84 lg:w-84\r
                            `})}),t.jsxs("div",{className:"flex flex-col text-center",children:[t.jsx("h3",{className:"text-4xl font-bold sm:text-4xl",children:e("mission.title")}),t.jsx("div",{className:"mt-6 flex min-h-[190px] items-center justify-center sm:min-h-[170px]",children:t.jsx(Bt,{mode:"wait",children:t.jsx(Q.p,{initial:{opacity:0,x:35},animate:{opacity:1,x:0},exit:{opacity:0,x:-35},transition:{duration:.45,ease:"easeInOut"},className:"mx-auto max-w-md text-lg leading-relaxed text-green-50 sm:text-xl",children:s[n]},n)})}),t.jsx("div",{className:"mt-4 flex items-center justify-center gap-2",children:s.map((a,o)=>t.jsx("button",{type:"button",onClick:()=>r(o),"aria-label":e("publicUi.mission",{number:o+1}),"aria-current":n===o?"true":void 0,className:`
                                        h-3 rounded-full
                                        transition-all duration-300
                                        ${n===o?"w-7 bg-emerald-400":"w-3 bg-white/80 hover:bg-white"}
                                    `},o))})]})]})]})]})},ln=()=>{const{t:e}=re(),n=e("ServiceSection.services",{returnObjects:!0})||[],r=[Gt,Ie,Ct,Ht],s=Array.isArray(n)?n.map((a,o)=>({...a,icon:r[o]||Ie})):[];return t.jsx("section",{className:"border-y-2 border-[#0A6F32] bg-white",children:t.jsxs("div",{className:"mx-auto w-full max-w-[1280px] px-5 py-20 sm:px-8 lg:px-10 xl:px-12",children:[t.jsxs("div",{className:"mx-auto max-w-[1150px] text-center",children:[t.jsx("h2",{className:`\r
                            text-[42px]\r
                            font-extrabold\r
                            leading-tight\r
                            text-[#08772F]\r
                            sm:text-[68px]\r
                        `,children:e("ServiceSection.sectionTitle")}),t.jsx("p",{className:`\r
                            mx-auto\r
                            mt-6\r
                            max-w-[1050px]\r
                            text-center\r
                            text-[18px]\r
                            leading-normal\r
                            text-[#7B7B7B]\r
                            sm:text-[20px]\r
                            lg:text-[24px]\r
                        `,children:e("ServiceSection.sectionDescription")})]}),s.length>0?t.jsx("div",{className:`\r
                            mx-auto\r
                            mt-16\r
                            grid\r
                            w-full\r
                            max-w-[1325px]\r
                            grid-cols-1\r
                            gap-7\r
                            xl:grid-cols-2\r
                        `,children:s.map((a,o)=>{const i=a.icon;return t.jsxs("article",{className:`\r
                                        flex\r
                                        w-full\r
                                        items-start\r
                                        gap-5\r
                                        rounded-xl\r
                                        border\r
                                        border-[#DDEBDD]\r
                                        bg-white\r
                                        p-5\r
                                        shadow-sm\r
                                        transition-all\r
                                        duration-300\r
                                        hover:-translate-y-1\r
                                        hover:shadow-lg\r
                                    `,children:[t.jsx("div",{className:`\r
                                            flex\r
                                            h-[92px]\r
                                            w-[92px]\r
                                            shrink-0\r
                                            items-center\r
                                            justify-center\r
                                            rounded-lg\r
                                            bg-[#EDF7EA]\r
                                            text-[#08772F]\r
                                        `,children:t.jsx(i,{size:42,strokeWidth:1.8})}),t.jsx("div",{className:"hidden h-[92px] w-px bg-[#E4E4E4] lg:block"}),t.jsxs("div",{className:"flex-1",children:[t.jsx("h3",{className:`\r
                                                text-[22px]\r
                                                font-bold\r
                                                text-[#08772F]\r
                                            `,children:a.title}),t.jsx("p",{className:`\r
                                                mt-3\r
                                                text-[16px]\r
                                                leading-[1.45]\r
                                                text-[#666666]\r
                                            `,children:a.description})]})]},o)})}):t.jsx("div",{className:"mt-14 rounded-xl border border-gray-200 bg-gray-50 p-10 text-center text-gray-500",children:e("ServiceSection.noServices")})]})})},cn="/images/MarketOperations_Backgroung.png",dn="/images/MarketOperations_Grid_left.jpg",un="/images/MarketOperations_Grid_right.png",fn="/images/MarketOperations_Grid_Bottom.png",mn=()=>{const{t:e}=re();return t.jsxs("section",{className:`\r
                relative overflow-hidden\r
                bg-cover bg-center bg-no-repeat\r
                px-5 py-10 text-white\r
                sm:px-8\r
                lg:min-h-[560px]\r
                lg:px-12 lg:py-9\r
            `,style:{backgroundImage:`url(${cn})`},children:[t.jsx("div",{className:"absolute inset-0 bg-[#005f2b]/90"}),t.jsx("div",{className:"absolute inset-0 bg-black/10"}),t.jsxs("div",{className:"relative z-10 mx-auto max-w-[1380px]",children:[t.jsx(Q.div,{initial:{opacity:0,y:-20},whileInView:{opacity:1,y:0},viewport:{once:!0,amount:.3},transition:{duration:.6},className:"text-center",children:t.jsx("h2",{className:`\r
                            text-4xl font-extrabold\r
                            tracking-tight text-white\r
                            sm:text-4xl\r
                            lg:text-5xl\r
                        `,children:e("marketOperations.title")})}),t.jsxs("div",{className:`\r
                        mt-12 grid grid-cols-1\r
                        items-center gap-12\r
                        lg:mt-16\r
                        lg:grid-cols-[1.05fr_0.95fr]\r
                        lg:gap-14\r
                    `,children:[t.jsx(Q.div,{initial:{opacity:0,x:-35},whileInView:{opacity:1,x:0},viewport:{once:!0,amount:.2},transition:{duration:.7},className:"max-w-[690px]",children:[1,2,3,4].map(n=>t.jsx("p",{className:`\r
                                    mb-6\r
                                    whitespace-pre-line\r
                                    text-left\r
                                    text-lg\r
                                    leading-[1.35]\r
                                    text-white\r
                                    sm:text-xl\r
                                    lg:text-[22px]\r
                                `,children:e(`marketOperations.para${n}`)},n))}),t.jsxs(Q.div,{initial:{opacity:0,x:35},whileInView:{opacity:1,x:0},viewport:{once:!0,amount:.2},transition:{duration:.7,delay:.1},className:`\r
                            relative mx-auto\r
                            h-[430px] w-full\r
                            max-w-[590px]\r
                            sm:h-[500px]\r
                            lg:h-[540px]\r
                        `,children:[t.jsx(Q.img,{src:dn,alt:e("marketOperations.imageAlt",{defaultValue:"Vegetable trading at Dambulla Economic Center"}),initial:{opacity:0,scale:.92},whileInView:{opacity:1,scale:1},viewport:{once:!0},transition:{duration:.6,delay:.2},className:`\r
                                absolute left-[5%] top-[5%]\r
                                z-20\r
                                h-[180px] w-[230px]\r
                                rounded-[14px]\r
                                object-cover\r
                                shadow-xl\r
                                sm:h-[220px] sm:w-[280px]\r
                            `}),t.jsx(Q.img,{src:un,alt:e("marketOperations.imageAlt",{defaultValue:"Wholesale produce market"}),initial:{opacity:0,scale:.92},whileInView:{opacity:1,scale:1},viewport:{once:!0},transition:{duration:.6,delay:.3},className:`\r
                                absolute right-[3%] top-0\r
                                z-30\r
                                h-[145px] w-[170px]\r
                                rounded-[14px]\r
                                object-cover\r
                                shadow-xl\r
                                sm:h-[175px] sm:w-[195px]\r
                            `}),t.jsx(Q.img,{src:fn,alt:e("marketOperations.imageAlt",{defaultValue:"Dambulla wholesale market operations"}),initial:{opacity:0,y:25},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{duration:.7,delay:.35},className:`\r
                                absolute bottom-[2%] right-[3%]\r
                                z-20\r
                                h-[265px] w-[67%]\r
                                rounded-[14px]\r
                                object-cover\r
                                shadow-2xl\r
                                sm:h-[330px]\r
                            `})]})]})]})]})},pn={active:!0,breakpoints:{},delay:4e3,jump:!1,playOnInit:!0,stopOnFocusIn:!0,stopOnInteraction:!0,stopOnMouseEnter:!1,stopOnLastSnap:!1,rootNode:null};function xn(e,n){const r=e.scrollSnapList();return typeof n=="number"?r.map(()=>n):n(r,e)}function gn(e,n){const r=e.rootNode();return n&&n(r)||r}function ze(e={}){let n,r,s,a,o=null,i=0,c=!1,l=!1,u=!1,f=!1;function m(I,z){r=I;const{mergeOptions:U,optionsAtMedia:B}=z,K=U(pn,ze.globalOptions),q=U(K,e);if(n=B(q),r.scrollSnapList().length<=1)return;f=n.jump,s=!1,a=xn(r,n.delay);const{eventStore:Z,ownerDocument:H}=r.internalEngine(),X=!!r.internalEngine().options.watchDrag,Y=gn(r,n.rootNode);Z.add(H,"visibilitychange",x),X&&r.on("pointerDown",v),X&&!n.stopOnInteraction&&r.on("pointerUp",P),n.stopOnMouseEnter&&Z.add(Y,"mouseenter",S),n.stopOnMouseEnter&&!n.stopOnInteraction&&Z.add(Y,"mouseleave",h),n.stopOnFocusIn&&r.on("slideFocusStart",y),n.stopOnFocusIn&&!n.stopOnInteraction&&Z.add(r.containerNode(),"focusout",g),n.playOnInit&&g()}function d(){r.off("pointerDown",v).off("pointerUp",P).off("slideFocusStart",y),y(),s=!0,c=!1}function j(){const{ownerWindow:I}=r.internalEngine();I.clearTimeout(i),i=I.setTimeout(b,a[r.selectedScrollSnap()]),o=new Date().getTime(),r.emit("autoplay:timerset")}function p(){const{ownerWindow:I}=r.internalEngine();I.clearTimeout(i),i=0,o=null,r.emit("autoplay:timerstopped")}function g(){if(!s){if(w()){u=!0;return}c||r.emit("autoplay:play"),j(),c=!0}}function y(){s||(c&&r.emit("autoplay:stop"),p(),c=!1)}function x(){if(w())return u=c,y();u&&g()}function w(){const{ownerDocument:I}=r.internalEngine();return I.visibilityState==="hidden"}function v(){l||y()}function P(){l||g()}function S(){l=!0,y()}function h(){l=!1,g()}function N(I){typeof I<"u"&&(f=I),g()}function D(){c&&y()}function E(){c&&g()}function T(){return c}function b(){const{index:I}=r.internalEngine(),z=I.clone().add(1).get(),U=r.scrollSnapList().length-1,B=n.stopOnLastSnap&&z===U;if(r.canScrollNext()?r.scrollNext(f):r.scrollTo(0,f),r.emit("autoplay:select"),B)return y();g()}function A(){if(!o)return null;const I=a[r.selectedScrollSnap()],z=new Date().getTime()-o;return I-z}return{name:"autoplay",options:e,init:m,destroy:d,play:N,stop:D,reset:E,isPlaying:T,timeUntilNext:A}}ze.globalOptions=void 0;function hn(e){return Object.prototype.toString.call(e)==="[object Object]"}function rt(e){return hn(e)||Array.isArray(e)}function bn(){return!!(typeof window<"u"&&window.document&&window.document.createElement)}function Fe(e,n){const r=Object.keys(e),s=Object.keys(n);if(r.length!==s.length)return!1;const a=JSON.stringify(Object.keys(e.breakpoints||{})),o=JSON.stringify(Object.keys(n.breakpoints||{}));return a!==o?!1:r.every(i=>{const c=e[i],l=n[i];return typeof c=="function"?`${c}`==`${l}`:!rt(c)||!rt(l)?c===l:Fe(c,l)})}function st(e){return e.concat().sort((n,r)=>n.name>r.name?1:-1).map(n=>n.options)}function yn(e,n){if(e.length!==n.length)return!1;const r=st(e),s=st(n);return r.every((a,o)=>{const i=s[o];return Fe(a,i)})}function Ue(e){return typeof e=="number"}function Te(e){return typeof e=="string"}function Se(e){return typeof e=="boolean"}function it(e){return Object.prototype.toString.call(e)==="[object Object]"}function M(e){return Math.abs(e)}function Re(e){return Math.sign(e)}function xe(e,n){return M(e-n)}function wn(e,n){if(e===0||n===0||M(e)<=M(n))return 0;const r=xe(M(e),M(n));return M(r/e)}function jn(e){return Math.round(e*100)/100}function he(e){return be(e).map(Number)}function G(e){return e[we(e)]}function we(e){return Math.max(0,e.length-1)}function _e(e,n){return n===we(e)}function ot(e,n=0){return Array.from(Array(e),(r,s)=>n+s)}function be(e){return Object.keys(e)}function mt(e,n){return[e,n].reduce((r,s)=>(be(s).forEach(a=>{const o=r[a],i=s[a],c=it(o)&&it(i);r[a]=c?mt(o,i):i}),r),{})}function Ve(e,n){return typeof n.MouseEvent<"u"&&e instanceof n.MouseEvent}function vn(e,n){const r={start:s,center:a,end:o};function s(){return 0}function a(l){return o(l)/2}function o(l){return n-l}function i(l,u){return Te(e)?r[e](l):e(n,l,u)}return{measure:i}}function ye(){let e=[];function n(a,o,i,c={passive:!0}){let l;if("addEventListener"in a)a.addEventListener(o,i,c),l=()=>a.removeEventListener(o,i,c);else{const u=a;u.addListener(i),l=()=>u.removeListener(i)}return e.push(l),s}function r(){e=e.filter(a=>a())}const s={add:n,clear:r};return s}function Nn(e,n,r,s){const a=ye(),o=1e3/60;let i=null,c=0,l=0;function u(){a.add(e,"visibilitychange",()=>{e.hidden&&p()})}function f(){j(),a.clear()}function m(y){if(!l)return;i||(i=y,r(),r());const x=y-i;for(i=y,c+=x;c>=o;)r(),c-=o;const w=c/o;s(w),l&&(l=n.requestAnimationFrame(m))}function d(){l||(l=n.requestAnimationFrame(m))}function j(){n.cancelAnimationFrame(l),i=null,c=0,l=0}function p(){i=null,c=0}return{init:u,destroy:f,start:d,stop:j,update:r,render:s}}function Sn(e,n){const r=n==="rtl",s=e==="y",a=s?"y":"x",o=s?"x":"y",i=!s&&r?-1:1,c=f(),l=m();function u(p){const{height:g,width:y}=p;return s?g:y}function f(){return s?"top":r?"right":"left"}function m(){return s?"bottom":r?"left":"right"}function d(p){return p*i}return{scroll:a,cross:o,startEdge:c,endEdge:l,measureSize:u,direction:d}}function le(e=0,n=0){const r=M(e-n);function s(u){return u<e}function a(u){return u>n}function o(u){return s(u)||a(u)}function i(u){return o(u)?s(u)?e:n:u}function c(u){return r?u-r*Math.ceil((u-n)/r):u}return{length:r,max:n,min:e,constrain:i,reachedAny:o,reachedMax:a,reachedMin:s,removeOffset:c}}function pt(e,n,r){const{constrain:s}=le(0,e),a=e+1;let o=i(n);function i(d){return r?M((a+d)%a):s(d)}function c(){return o}function l(d){return o=i(d),m}function u(d){return f().set(c()+d)}function f(){return pt(e,c(),r)}const m={get:c,set:l,add:u,clone:f};return m}function kn(e,n,r,s,a,o,i,c,l,u,f,m,d,j,p,g,y,x,w){const{cross:v,direction:P}=e,S=["INPUT","SELECT","TEXTAREA"],h={passive:!1},N=ye(),D=ye(),E=le(50,225).constrain(j.measure(20)),T={mouse:300,touch:400},b={mouse:500,touch:600},A=p?43:25;let C=!1,I=0,z=0,U=!1,B=!1,K=!1,q=!1;function Z(k){if(!w)return;function V(_){(Se(w)||w(k,_))&&fe(_)}const F=n;N.add(F,"dragstart",_=>_.preventDefault(),h).add(F,"touchmove",()=>{},h).add(F,"touchend",()=>{}).add(F,"touchstart",V).add(F,"mousedown",V).add(F,"touchcancel",R).add(F,"contextmenu",R).add(F,"click",te,!0)}function H(){N.clear(),D.clear()}function X(){const k=q?r:n;D.add(k,"touchmove",$,h).add(k,"touchend",R).add(k,"mousemove",$,h).add(k,"mouseup",R)}function Y(k){const V=k.nodeName||"";return S.includes(V)}function ee(){return(p?b:T)[q?"mouse":"touch"]}function ue(k,V){const F=m.add(Re(k)*-1),_=f.byDistance(k,!p).distance;return p||M(k)<E?_:y&&V?_*.5:f.byIndex(F.get(),0).distance}function fe(k){const V=Ve(k,s);q=V,K=p&&V&&!k.buttons&&C,C=xe(a.get(),i.get())>=2,!(V&&k.button!==0)&&(Y(k.target)||(U=!0,o.pointerDown(k),u.useFriction(0).useDuration(0),a.set(i),X(),I=o.readPoint(k),z=o.readPoint(k,v),d.emit("pointerDown")))}function $(k){if(!Ve(k,s)&&k.touches.length>=2)return R(k);const F=o.readPoint(k),_=o.readPoint(k,v),J=xe(F,I),ne=xe(_,z);if(!B&&!q&&(!k.cancelable||(B=J>ne,!B)))return R(k);const ie=o.pointerMove(k);J>g&&(K=!0),u.useFriction(.3).useDuration(.75),c.start(),a.add(P(ie)),k.preventDefault()}function R(k){const F=f.byDistance(0,!1).index!==m.get(),_=o.pointerUp(k)*ee(),J=ue(P(_),F),ne=wn(_,J),ie=A-10*ne,se=x+ne/50;B=!1,U=!1,D.clear(),u.useDuration(ie).useFriction(se),l.distance(J,!p),q=!1,d.emit("pointerUp")}function te(k){K&&(k.stopPropagation(),k.preventDefault(),K=!1)}function W(){return U}return{init:Z,destroy:H,pointerDown:W}}function En(e,n){let s,a;function o(m){return m.timeStamp}function i(m,d){const p=`client${(d||e.scroll)==="x"?"X":"Y"}`;return(Ve(m,n)?m:m.touches[0])[p]}function c(m){return s=m,a=m,i(m)}function l(m){const d=i(m)-i(a),j=o(m)-o(s)>170;return a=m,j&&(s=m),d}function u(m){if(!s||!a)return 0;const d=i(a)-i(s),j=o(m)-o(s),p=o(m)-o(a)>170,g=d/j;return j&&!p&&M(g)>.1?g:0}return{pointerDown:c,pointerMove:l,pointerUp:u,readPoint:i}}function Dn(){function e(r){const{offsetTop:s,offsetLeft:a,offsetWidth:o,offsetHeight:i}=r;return{top:s,right:a+o,bottom:s+i,left:a,width:o,height:i}}return{measure:e}}function Ln(e){function n(s){return e*(s/100)}return{measure:n}}function Cn(e,n,r,s,a,o,i){const c=[e].concat(s);let l,u,f=[],m=!1;function d(y){return a.measureSize(i.measure(y))}function j(y){if(!o)return;u=d(e),f=s.map(d);function x(w){for(const v of w){if(m)return;const P=v.target===e,S=s.indexOf(v.target),h=P?u:f[S],N=d(P?e:s[S]);if(M(N-h)>=.5){y.reInit(),n.emit("resize");break}}}l=new ResizeObserver(w=>{(Se(o)||o(y,w))&&x(w)}),r.requestAnimationFrame(()=>{c.forEach(w=>l.observe(w))})}function p(){m=!0,l&&l.disconnect()}return{init:j,destroy:p}}function Pn(e,n,r,s,a,o){let i=0,c=0,l=a,u=o,f=e.get(),m=0;function d(){const h=s.get()-e.get(),N=!l;let D=0;return N?(i=0,r.set(s),e.set(s),D=h):(r.set(e),i+=h/l,i*=u,f+=i,e.add(i),D=f-m),c=Re(D),m=f,S}function j(){const h=s.get()-n.get();return M(h)<.001}function p(){return l}function g(){return c}function y(){return i}function x(){return v(a)}function w(){return P(o)}function v(h){return l=h,S}function P(h){return u=h,S}const S={direction:g,duration:p,velocity:y,seek:d,settled:j,useBaseFriction:w,useBaseDuration:x,useFriction:P,useDuration:v};return S}function In(e,n,r,s,a){const o=a.measure(10),i=a.measure(50),c=le(.1,.99);let l=!1;function u(){return!(l||!e.reachedAny(r.get())||!e.reachedAny(n.get()))}function f(j){if(!u())return;const p=e.reachedMin(n.get())?"min":"max",g=M(e[p]-n.get()),y=r.get()-n.get(),x=c.constrain(g/i);r.subtract(y*x),!j&&M(y)<o&&(r.set(e.constrain(r.get())),s.useDuration(25).useBaseFriction())}function m(j){l=!j}return{shouldConstrain:u,constrain:f,toggleActive:m}}function An(e,n,r,s,a){const o=le(-n+e,0),i=m(),c=f(),l=d();function u(p,g){return xe(p,g)<=1}function f(){const p=i[0],g=G(i),y=i.lastIndexOf(p),x=i.indexOf(g)+1;return le(y,x)}function m(){return r.map((p,g)=>{const{min:y,max:x}=o,w=o.constrain(p),v=!g,P=_e(r,g);return v?x:P||u(y,w)?y:u(x,w)?x:w}).map(p=>parseFloat(p.toFixed(3)))}function d(){if(n<=e+a)return[o.max];if(s==="keepSnaps")return i;const{min:p,max:g}=c;return i.slice(p,g)}return{snapsContained:l,scrollContainLimit:c}}function Tn(e,n,r){const s=n[0],a=r?s-e:G(n);return{limit:le(a,s)}}function Vn(e,n,r,s){const o=n.min+.1,i=n.max+.1,{reachedMin:c,reachedMax:l}=le(o,i);function u(d){return d===1?l(r.get()):d===-1?c(r.get()):!1}function f(d){if(!u(d))return;const j=e*(d*-1);s.forEach(p=>p.add(j))}return{loop:f}}function On(e){const{max:n,length:r}=e;function s(o){const i=o-n;return r?i/-r:0}return{get:s}}function Mn(e,n,r,s,a){const{startEdge:o,endEdge:i}=e,{groupSlides:c}=a,l=m().map(n.measure),u=d(),f=j();function m(){return c(s).map(g=>G(g)[i]-g[0][o]).map(M)}function d(){return s.map(g=>r[o]-g[o]).map(g=>-M(g))}function j(){return c(u).map(g=>g[0]).map((g,y)=>g+l[y])}return{snaps:u,snapsAligned:f}}function zn(e,n,r,s,a,o){const{groupSlides:i}=a,{min:c,max:l}=s,u=f();function f(){const d=i(o),j=!e||n==="keepSnaps";return r.length===1?[o]:j?d:d.slice(c,l).map((p,g,y)=>{const x=!g,w=_e(y,g);if(x){const v=G(y[0])+1;return ot(v)}if(w){const v=we(o)-G(y)[0]+1;return ot(v,G(y)[0])}return p})}return{slideRegistry:u}}function Fn(e,n,r,s,a){const{reachedAny:o,removeOffset:i,constrain:c}=s;function l(p){return p.concat().sort((g,y)=>M(g)-M(y))[0]}function u(p){const g=e?i(p):c(p),y=n.map((w,v)=>({diff:f(w-g,0),index:v})).sort((w,v)=>M(w.diff)-M(v.diff)),{index:x}=y[0];return{index:x,distance:g}}function f(p,g){const y=[p,p+r,p-r];if(!e)return p;if(!g)return l(y);const x=y.filter(w=>Re(w)===g);return x.length?l(x):G(y)-r}function m(p,g){const y=n[p]-a.get(),x=f(y,g);return{index:p,distance:x}}function d(p,g){const y=a.get()+p,{index:x,distance:w}=u(y),v=!e&&o(y);if(!g||v)return{index:x,distance:p};const P=n[x]-w,S=p+f(P,0);return{index:x,distance:S}}return{byDistance:d,byIndex:m,shortcut:f}}function Un(e,n,r,s,a,o,i){function c(m){const d=m.distance,j=m.index!==n.get();o.add(d),d&&(s.duration()?e.start():(e.update(),e.render(1),e.update())),j&&(r.set(n.get()),n.set(m.index),i.emit("select"))}function l(m,d){const j=a.byDistance(m,d);c(j)}function u(m,d){const j=n.clone().set(m),p=a.byIndex(j.get(),d);c(p)}return{distance:l,index:u}}function Rn(e,n,r,s,a,o,i,c){const l={passive:!0,capture:!0};let u=0;function f(j){if(!c)return;function p(g){if(new Date().getTime()-u>10)return;i.emit("slideFocusStart"),e.scrollLeft=0;const w=r.findIndex(v=>v.includes(g));Ue(w)&&(a.useDuration(0),s.index(w,0),i.emit("slideFocus"))}o.add(document,"keydown",m,!1),n.forEach((g,y)=>{o.add(g,"focus",x=>{(Se(c)||c(j,x))&&p(y)},l)})}function m(j){j.code==="Tab"&&(u=new Date().getTime())}return{init:f}}function pe(e){let n=e;function r(){return n}function s(l){n=i(l)}function a(l){n+=i(l)}function o(l){n-=i(l)}function i(l){return Ue(l)?l:l.get()}return{get:r,set:s,add:a,subtract:o}}function xt(e,n){const r=e.scroll==="x"?i:c,s=n.style;let a=null,o=!1;function i(d){return`translate3d(${d}px,0px,0px)`}function c(d){return`translate3d(0px,${d}px,0px)`}function l(d){if(o)return;const j=jn(e.direction(d));j!==a&&(s.transform=r(j),a=j)}function u(d){o=!d}function f(){o||(s.transform="",n.getAttribute("style")||n.removeAttribute("style"))}return{clear:f,to:l,toggleActive:u}}function _n(e,n,r,s,a,o,i,c,l){const f=he(a),m=he(a).reverse(),d=x().concat(w());function j(N,D){return N.reduce((E,T)=>E-a[T],D)}function p(N,D){return N.reduce((E,T)=>j(E,D)>0?E.concat([T]):E,[])}function g(N){return o.map((D,E)=>({start:D-s[E]+.5+N,end:D+n-.5+N}))}function y(N,D,E){const T=g(D);return N.map(b=>{const A=E?0:-r,C=E?r:0,I=E?"end":"start",z=T[b][I];return{index:b,loopPoint:z,slideLocation:pe(-1),translate:xt(e,l[b]),target:()=>c.get()>z?A:C}})}function x(){const N=i[0],D=p(m,N);return y(D,r,!1)}function w(){const N=n-i[0]-1,D=p(f,N);return y(D,-r,!0)}function v(){return d.every(({index:N})=>{const D=f.filter(E=>E!==N);return j(D,n)<=.1})}function P(){d.forEach(N=>{const{target:D,translate:E,slideLocation:T}=N,b=D();b!==T.get()&&(E.to(b),T.set(b))})}function S(){d.forEach(N=>N.translate.clear())}return{canLoop:v,clear:S,loop:P,loopPoints:d}}function $n(e,n,r){let s,a=!1;function o(l){if(!r)return;function u(f){for(const m of f)if(m.type==="childList"){l.reInit(),n.emit("slidesChanged");break}}s=new MutationObserver(f=>{a||(Se(r)||r(l,f))&&u(f)}),s.observe(e,{childList:!0})}function i(){s&&s.disconnect(),a=!0}return{init:o,destroy:i}}function Bn(e,n,r,s){const a={};let o=null,i=null,c,l=!1;function u(){c=new IntersectionObserver(p=>{l||(p.forEach(g=>{const y=n.indexOf(g.target);a[y]=g}),o=null,i=null,r.emit("slidesInView"))},{root:e.parentElement,threshold:s}),n.forEach(p=>c.observe(p))}function f(){c&&c.disconnect(),l=!0}function m(p){return be(a).reduce((g,y)=>{const x=parseInt(y),{isIntersecting:w}=a[x];return(p&&w||!p&&!w)&&g.push(x),g},[])}function d(p=!0){if(p&&o)return o;if(!p&&i)return i;const g=m(p);return p&&(o=g),p||(i=g),g}return{init:u,destroy:f,get:d}}function Hn(e,n,r,s,a,o){const{measureSize:i,startEdge:c,endEdge:l}=e,u=r[0]&&a,f=p(),m=g(),d=r.map(i),j=y();function p(){if(!u)return 0;const w=r[0];return M(n[c]-w[c])}function g(){if(!u)return 0;const w=o.getComputedStyle(G(s));return parseFloat(w.getPropertyValue(`margin-${l}`))}function y(){return r.map((w,v,P)=>{const S=!v,h=_e(P,v);return S?d[v]+f:h?d[v]+m:P[v+1][c]-w[c]}).map(M)}return{slideSizes:d,slideSizesWithGaps:j,startGap:f,endGap:m}}function Wn(e,n,r,s,a,o,i,c,l){const{startEdge:u,endEdge:f,direction:m}=e,d=Ue(r);function j(x,w){return he(x).filter(v=>v%w===0).map(v=>x.slice(v,v+w))}function p(x){return x.length?he(x).reduce((w,v,P)=>{const S=G(w)||0,h=S===0,N=v===we(x),D=a[u]-o[S][u],E=a[u]-o[v][f],T=!s&&h?m(i):0,b=!s&&N?m(c):0,A=M(E-b-(D+T));return P&&A>n+l&&w.push(v),N&&w.push(x.length),w},[]).map((w,v,P)=>{const S=Math.max(P[v-1]||0);return x.slice(S,w)}):[]}function g(x){return d?j(x,r):p(x)}return{groupSlides:g}}function Kn(e,n,r,s,a,o,i){const{align:c,axis:l,direction:u,startIndex:f,loop:m,duration:d,dragFree:j,dragThreshold:p,inViewThreshold:g,slidesToScroll:y,skipSnaps:x,containScroll:w,watchResize:v,watchSlides:P,watchDrag:S,watchFocus:h}=o,N=2,D=Dn(),E=D.measure(n),T=r.map(D.measure),b=Sn(l,u),A=b.measureSize(E),C=Ln(A),I=vn(c,A),z=!m&&!!w,U=m||!!w,{slideSizes:B,slideSizesWithGaps:K,startGap:q,endGap:Z}=Hn(b,E,T,r,U,a),H=Wn(b,A,y,m,E,T,q,Z,N),{snaps:X,snapsAligned:Y}=Mn(b,I,E,T,H),ee=-G(X)+G(K),{snapsContained:ue,scrollContainLimit:fe}=An(A,ee,Y,w,N),$=z?ue:Y,{limit:R}=Tn(ee,$,m),te=pt(we($),f,m),W=te.clone(),O=he(r),k=({dragHandler:ce,scrollBody:Le,scrollBounds:Ce,options:{loop:je}})=>{je||Ce.constrain(ce.pointerDown()),Le.seek()},V=({scrollBody:ce,translate:Le,location:Ce,offsetLocation:je,previousLocation:yt,scrollLooper:wt,slideLooper:jt,dragHandler:vt,animation:Nt,eventHandler:Ke,scrollBounds:St,options:{loop:qe}},Ge)=>{const Ze=ce.settled(),kt=!St.shouldConstrain(),Je=qe?Ze:Ze&&kt,Qe=Je&&!vt.pointerDown();Qe&&Nt.stop();const Et=Ce.get()*Ge+yt.get()*(1-Ge);je.set(Et),qe&&(wt.loop(ce.direction()),jt.loop()),Le.to(je.get()),Qe&&Ke.emit("settle"),Je||Ke.emit("scroll")},F=Nn(s,a,()=>k(De),ce=>V(De,ce)),_=.68,J=$[te.get()],ne=pe(J),ie=pe(J),se=pe(J),oe=pe(J),me=Pn(ne,se,ie,oe,d,_),ke=Fn(m,$,ee,R,oe),Ee=Un(F,te,W,me,ke,oe,i),Be=On(R),He=ye(),ht=Bn(n,r,i,g),{slideRegistry:We}=zn(z,w,$,fe,H,O),bt=Rn(e,r,We,Ee,me,He,i,h),De={ownerDocument:s,ownerWindow:a,eventHandler:i,containerRect:E,slideRects:T,animation:F,axis:b,dragHandler:kn(b,e,s,a,oe,En(b,a),ne,F,Ee,me,ke,te,i,C,j,p,x,_,S),eventStore:He,percentOfView:C,index:te,indexPrevious:W,limit:R,location:ne,offsetLocation:se,previousLocation:ie,options:o,resizeHandler:Cn(n,i,a,r,b,v,D),scrollBody:me,scrollBounds:In(R,se,oe,me,C),scrollLooper:Vn(ee,R,se,[ne,se,ie,oe]),scrollProgress:Be,scrollSnapList:$.map(Be.get),scrollSnaps:$,scrollTarget:ke,scrollTo:Ee,slideLooper:_n(b,A,ee,B,K,X,$,se,r),slideFocus:bt,slidesHandler:$n(n,i,P),slidesInView:ht,slideIndexes:O,slideRegistry:We,slidesToScroll:H,target:oe,translate:xt(b,n)};return De}function qn(){let e={},n;function r(u){n=u}function s(u){return e[u]||[]}function a(u){return s(u).forEach(f=>f(n,u)),l}function o(u,f){return e[u]=s(u).concat([f]),l}function i(u,f){return e[u]=s(u).filter(m=>m!==f),l}function c(){e={}}const l={init:r,emit:a,off:i,on:o,clear:c};return l}const Gn={align:"center",axis:"x",container:null,slides:null,containScroll:"trimSnaps",direction:"ltr",slidesToScroll:1,inViewThreshold:0,breakpoints:{},dragFree:!1,dragThreshold:10,loop:!1,skipSnaps:!1,duration:25,startIndex:0,active:!0,watchDrag:!0,watchResize:!0,watchSlides:!0,watchFocus:!0};function Zn(e){function n(o,i){return mt(o,i||{})}function r(o){const i=o.breakpoints||{},c=be(i).filter(l=>e.matchMedia(l).matches).map(l=>i[l]).reduce((l,u)=>n(l,u),{});return n(o,c)}function s(o){return o.map(i=>be(i.breakpoints||{})).reduce((i,c)=>i.concat(c),[]).map(e.matchMedia)}return{mergeOptions:n,optionsAtMedia:r,optionsMediaQueries:s}}function Jn(e){let n=[];function r(o,i){return n=i.filter(({options:c})=>e.optionsAtMedia(c).active!==!1),n.forEach(c=>c.init(o,e)),i.reduce((c,l)=>Object.assign(c,{[l.name]:l}),{})}function s(){n=n.filter(o=>o.destroy())}return{init:r,destroy:s}}function Ne(e,n,r){const s=e.ownerDocument,a=s.defaultView,o=Zn(a),i=Jn(o),c=ye(),l=qn(),{mergeOptions:u,optionsAtMedia:f,optionsMediaQueries:m}=o,{on:d,off:j,emit:p}=l,g=b;let y=!1,x,w=u(Gn,Ne.globalOptions),v=u(w),P=[],S,h,N;function D(){const{container:O,slides:k}=v;h=(Te(O)?e.querySelector(O):O)||e.children[0];const F=Te(k)?h.querySelectorAll(k):k;N=[].slice.call(F||h.children)}function E(O){const k=Kn(e,h,N,s,a,O,l);if(O.loop&&!k.slideLooper.canLoop()){const V=Object.assign({},O,{loop:!1});return E(V)}return k}function T(O,k){y||(w=u(w,O),v=f(w),P=k||P,D(),x=E(v),m([w,...P.map(({options:V})=>V)]).forEach(V=>c.add(V,"change",b)),v.active&&(x.translate.to(x.location.get()),x.animation.init(),x.slidesInView.init(),x.slideFocus.init(W),x.eventHandler.init(W),x.resizeHandler.init(W),x.slidesHandler.init(W),x.options.loop&&x.slideLooper.loop(),h.offsetParent&&N.length&&x.dragHandler.init(W),S=i.init(W,P)))}function b(O,k){const V=H();A(),T(u({startIndex:V},O),k),l.emit("reInit")}function A(){x.dragHandler.destroy(),x.eventStore.clear(),x.translate.clear(),x.slideLooper.clear(),x.resizeHandler.destroy(),x.slidesHandler.destroy(),x.slidesInView.destroy(),x.animation.destroy(),i.destroy(),c.clear()}function C(){y||(y=!0,c.clear(),A(),l.emit("destroy"),l.clear())}function I(O,k,V){!v.active||y||(x.scrollBody.useBaseFriction().useDuration(k===!0?0:v.duration),x.scrollTo.index(O,V||0))}function z(O){const k=x.index.add(1).get();I(k,O,-1)}function U(O){const k=x.index.add(-1).get();I(k,O,1)}function B(){return x.index.add(1).get()!==H()}function K(){return x.index.add(-1).get()!==H()}function q(){return x.scrollSnapList}function Z(){return x.scrollProgress.get(x.offsetLocation.get())}function H(){return x.index.get()}function X(){return x.indexPrevious.get()}function Y(){return x.slidesInView.get()}function ee(){return x.slidesInView.get(!1)}function ue(){return S}function fe(){return x}function $(){return e}function R(){return h}function te(){return N}const W={canScrollNext:B,canScrollPrev:K,containerNode:R,internalEngine:fe,destroy:C,off:j,on:d,emit:p,plugins:ue,previousScrollSnap:X,reInit:g,rootNode:$,scrollNext:z,scrollPrev:U,scrollProgress:Z,scrollSnapList:q,scrollTo:I,selectedScrollSnap:H,slideNodes:te,slidesInView:Y,slidesNotInView:ee};return T(n,r),setTimeout(()=>l.emit("init"),0),W}Ne.globalOptions=void 0;function $e(e={},n=[]){const r=L.useRef(e),s=L.useRef(n),[a,o]=L.useState(),[i,c]=L.useState(),l=L.useCallback(()=>{a&&a.reInit(r.current,s.current)},[a]);return L.useEffect(()=>{Fe(r.current,e)||(r.current=e,l())},[e,l]),L.useEffect(()=>{yn(s.current,n)||(s.current=n,l())},[n,l]),L.useEffect(()=>{if(bn()&&i){Ne.globalOptions=$e.globalOptions;const u=Ne(i,r.current,s.current);return o(u),()=>u.destroy()}else o(void 0)},[i,o]),[c,a]}$e.globalOptions=void 0;function gt(e){if(typeof e!="string"||!e.trim())return"";try{const n=new URL(e.trim());return["https:","http:"].includes(n.protocol)&&!n.username&&!n.password?n.href:""}catch{return""}}const Qn=e=>{var a;const n=gt(e);if(!n)return"";const r=new URL(n);if(r.hostname!=="drive.google.com")return n;const s=((a=r.pathname.match(/^\/file\/d\/([a-zA-Z0-9_-]+)/))==null?void 0:a[1])||r.searchParams.get("id");return s&&/^[a-zA-Z0-9_-]+$/.test(s)?"https://drive.google.com/uc?export=download&id="+encodeURIComponent(s):n},at={notice:"border-[#B78300] bg-[#FFF1BE] text-[#8A6500]",announcement:"border-blue-500 bg-blue-50 text-blue-700",news:"border-green-500 bg-green-50 text-green-700",event:"border-purple-500 bg-purple-50 text-purple-700"},Xn=({item:e})=>{var l;const{t:n,i18n:r}=re(),s=gt(e.fileUrl),a=((l=e.type)==null?void 0:l.toLowerCase())||"news",o={en:"en-LK",si:"si-LK",ta:"ta-LK"},i=u=>{var d;if(!u)return"-";const f=new Date(u);if(Number.isNaN(f.getTime()))return u;const m=((d=r.language)==null?void 0:d.split("-")[0])||"en";return new Intl.DateTimeFormat(o[m]||"en-LK",{year:"numeric",month:"short",day:"2-digit"}).format(f)},c=()=>{s&&window.open(s,"_blank","noopener,noreferrer")};return t.jsxs(Q.article,{whileHover:{y:-4},transition:{duration:.2},className:`\r
                flex h-full min-h-[348px] w-full flex-col\r
                rounded-[8px] border border-green-100\r
                bg-white p-3\r
                shadow-[0_6px_22px_rgba(0,90,35,0.10)]\r
                transition-shadow duration-300\r
                hover:shadow-[0_10px_28px_rgba(0,90,35,0.16)]\r
            `,children:[t.jsx("div",{className:"h-[132px] overflow-hidden rounded-[7px] border border-green-300 bg-gray-100",children:t.jsx(de,{src:e.image,alt:e.topic||n("news.cardImageAlt",{defaultValue:"Publication image"}),className:"h-full w-full object-cover"})}),t.jsxs("div",{className:"flex flex-1 flex-col pt-3",children:[e.topic&&t.jsx("h3",{className:"text-[16px] font-semibold leading-snug text-gray-800",children:e.topic}),t.jsx("p",{className:"mt-2 line-clamp-5 text-[14px] leading-[1.2] text-[#5f5f5f]",children:e.description}),t.jsxs("div",{className:"mt-auto flex items-center justify-between gap-3 border-y border-gray-200 py-3",children:[t.jsxs("div",{className:"flex min-w-0 items-center gap-2 text-[12px] text-gray-700",children:[t.jsx(Me,{size:15,strokeWidth:2,className:"shrink-0 text-[#00843d]"}),t.jsx("span",{className:"truncate font-medium",children:i(e.date||e.createdAt||e.created_at)})]}),t.jsx("span",{className:`
                            shrink-0 rounded-full border
                            px-3 py-1 text-[12px] font-medium
                            ${at[a]||at.news}
                        `,children:n(`news.categories.${a}`,{defaultValue:a})})]}),t.jsxs("div",{className:"mt-3 grid grid-cols-2 gap-3",children:[t.jsxs("button",{type:"button",onClick:c,disabled:!s,className:`\r
                            inline-flex items-center justify-center gap-2\r
                            rounded-[7px] border-2 border-[#087b36]\r
                            bg-white px-3 py-2.5\r
                            text-sm font-semibold text-[#087b36]\r
                            transition-colors duration-200\r
                            hover:bg-green-50\r
                            disabled:cursor-not-allowed\r
                            disabled:opacity-50\r
                        `,children:[t.jsx(Wt,{size:20,strokeWidth:2.2}),n("news.view",{defaultValue:"View"})]}),t.jsxs("a",{href:s?Qn(s):void 0,target:"_blank",rel:"noopener noreferrer",className:`
                            inline-flex items-center justify-center gap-2
                            rounded-[7px] bg-[#087b36]
                            px-3 py-2.5
                            text-sm font-semibold text-white
                            transition-colors duration-200
                            hover:bg-[#06672d]
                            ${s?"":"pointer-events-none opacity-50"}
                        `,children:[t.jsx(Kt,{size:20,strokeWidth:2.2}),n("news.download",{defaultValue:"Download"})]})]})]})]})},Yn=()=>{const{t:e}=re(),n=L.useRef(null),[r,s]=L.useState(1),[a,o]=L.useState(null),[i,c]=L.useState([]),[l,u]=L.useState("all"),[f,m]=L.useState(!0),[d,j]=L.useState(""),[p,g]=L.useState(0),[y,x]=L.useState([]),w=[{key:"all",label:e("news.categories.all")},{key:"notice",label:e("news.categories.notice")},{key:"announcement",label:e("news.categories.announcement")},{key:"event",label:e("news.categories.event")},{key:"news",label:e("news.categories.news")}],v=L.useMemo(()=>ze({delay:4500,stopOnInteraction:!0,stopOnMouseEnter:!0}),[]),[P,S]=$e({align:"start",loop:!1,containScroll:"trimSnaps"},[v]),h=L.useCallback(async(C=!1)=>{var z;(z=n.current)==null||z.abort();const I=new AbortController;n.current=I,m(!0),j("");try{const U=await ft(I.signal,C===!0,{page:r,limit:6,type:l});I.signal.aborted||(c(U.data),o(U.pagination))}catch(U){if(I.signal.aborted||ve(U))return;console.error("Failed to load publications:",U),j("loadFailed"),c([])}finally{I.signal.aborted||m(!1)}},[r,l]);L.useEffect(()=>(h(),()=>{var C;return(C=n.current)==null?void 0:C.abort()}),[h]);const N=i,D=C=>{u(C),s(1)},E=L.useCallback(()=>{S&&(g(S.selectedScrollSnap()),x(S.scrollSnapList()))},[S]);L.useEffect(()=>{if(S)return E(),S.on("select",E),S.on("reInit",E),()=>{S.off("select",E),S.off("reInit",E)}},[S,E]),L.useEffect(()=>{S&&(S.reInit(),S.scrollTo(0),g(0))},[l,S,N.length]);const T=L.useCallback(()=>{S==null||S.scrollPrev()},[S]),b=L.useCallback(()=>{S==null||S.scrollNext()},[S]),A=L.useCallback(C=>{S==null||S.scrollTo(C)},[S]);return t.jsx("section",{id:"publications",tabIndex:-1,style:{scrollMarginTop:120},className:"border-t-2 border-[#087b36] bg-white px-4 py-10 sm:px-6 lg:py-9",children:t.jsxs("div",{className:"mx-auto max-w-[1320px]",children:[t.jsxs("div",{className:"mx-auto max-w-[900px] text-center",children:[t.jsx("h2",{className:"text-4xl font-extrabold tracking-tight text-[#087b36] sm:text-4xl lg:text-[40px]",children:e("news.title")}),t.jsx("p",{className:"mt-4 text-lg text-[#7b7b7b] sm:text-xl",children:e("news.subtitle")})]}),t.jsx("div",{className:"mt-10 flex flex-wrap items-center justify-center gap-3",children:w.map(C=>{const I=l===C.key;return t.jsx("button",{type:"button",onClick:()=>D(C.key),className:`
                                    min-w-[88px] rounded-full
                                    border px-6 py-2
                                    text-sm font-medium
                                    transition-all duration-200
                                    ${I?"border-green-100 bg-[#edf7e9] text-[#087b36] shadow-sm":"border-gray-200 bg-white text-gray-600 shadow-sm hover:bg-green-50 hover:text-[#087b36]"}
                                `,children:C.label},C.key)})}),f&&t.jsx("div",{className:"flex min-h-[390px] items-center justify-center",children:t.jsx("p",{className:"text-gray-500",children:e("news.loading")})}),!f&&d&&t.jsxs("div",{className:"mt-12 rounded-lg border border-red-200 bg-red-50 p-8 text-center",children:[t.jsx("p",{className:"text-red-700",children:e(`news.${d}`)}),t.jsx("button",{type:"button",onClick:()=>h(!0),className:"mt-4 rounded-md bg-red-600 px-5 py-2.5 font-semibold text-white hover:bg-red-700",children:e("news.retry")})]}),!f&&!d&&N.length===0&&t.jsx("div",{className:"mt-12 rounded-lg border border-gray-200 bg-gray-50 p-12 text-center text-gray-500",children:e("news.noPublications")}),!f&&!d&&N.length>0&&t.jsxs(t.Fragment,{children:[t.jsxs("div",{className:"relative mt-8 px-0 sm:px-14",children:[t.jsx("button",{type:"button",onClick:T,"aria-label":e("news.previous"),className:`\r
                                        absolute left-0 top-1/2 z-20\r
                                        hidden h-11 w-11\r
                                        -translate-y-1/2\r
                                        items-center justify-center\r
                                        rounded-full bg-[#e4e4e4]\r
                                        text-[#087b36]\r
                                        transition-colors\r
                                        hover:bg-green-100\r
                                        sm:flex\r
                                    `,children:t.jsx(Pt,{size:28,strokeWidth:2})}),t.jsx("button",{type:"button",onClick:b,"aria-label":e("news.next"),className:`\r
                                        absolute right-0 top-1/2 z-20\r
                                        hidden h-11 w-11\r
                                        -translate-y-1/2\r
                                        items-center justify-center\r
                                        rounded-full bg-[#e4e4e4]\r
                                        text-[#087b36]\r
                                        transition-colors\r
                                        hover:bg-green-100\r
                                        sm:flex\r
                                    `,children:t.jsx(It,{size:28,strokeWidth:2})}),t.jsx("div",{ref:P,className:"overflow-hidden",children:t.jsx("div",{className:"-ml-4 flex touch-pan-y",children:N.map(C=>t.jsx("div",{className:`\r
                                                        min-w-0 flex-[0_0_100%]\r
                                                        pl-4\r
                                                        sm:flex-[0_0_50%]\r
                                                        lg:flex-[0_0_33.333333%]\r
                                                    `,children:t.jsx(Xn,{item:C})},C._id||C.id))})})]}),y.length>1&&t.jsx("div",{className:"mt-7 flex items-center justify-center gap-2",children:y.map((C,I)=>t.jsx("button",{type:"button",onClick:()=>A(I),"aria-label":e("news.goToSlide",{number:I+1}),className:`
                                                    rounded-full
                                                    transition-all duration-200
                                                    ${p===I?"h-3 w-3 bg-[#087b36]":"h-2.5 w-2.5 bg-gray-300 hover:bg-gray-400"}
                                                `},I))})]}),!f&&!d&&(a==null?void 0:a.totalPages)>1&&t.jsxs("nav",{"aria-label":e("publicUi.pagination"),className:"mt-6 flex items-center justify-center gap-4",children:[t.jsx("button",{type:"button",disabled:!a.hasPreviousPage,onClick:()=>s(C=>C-1),className:"rounded border px-4 py-2 disabled:opacity-40",children:e("publicUi.previousPage")}),t.jsx("span",{role:"status",children:e("publicUi.page",{page:a.currentPage})}),t.jsx("button",{type:"button",disabled:!a.hasNextPage,onClick:()=>s(C=>C+1),className:"rounded border px-4 py-2 disabled:opacity-40",children:e("publicUi.nextPage")})]})]})})},hr=()=>{const{t:e}=re();return t.jsxs(t.Fragment,{children:[t.jsxs(ct,{children:[t.jsx("title",{children:e("publicUi.siteTitle")}),t.jsx("meta",{name:"description",content:e("publicUi.description")}),t.jsx("meta",{name:"keywords",content:"Dambulla, Economic Center, Market Operations, Daily Prices"}),t.jsx("meta",{property:"og:title",content:e("publicUi.siteTitle")}),t.jsx("meta",{property:"og:description",content:e("publicUi.description")}),t.jsx("meta",{property:"og:type",content:"website"})]}),t.jsx(Tt,{}),t.jsxs("main",{id:"public-main",tabIndex:-1,className:"public-home",children:[t.jsx(sn,{}),t.jsx(on,{}),t.jsx(an,{}),t.jsx(ln,{}),t.jsx(mn,{}),t.jsx(Yn,{})]}),t.jsx(Vt,{}),t.jsx(nn,{}),t.jsx(Mt,{})]})};export{hr as default};
