import{c as d,u as s,j as e,H as m}from"./index-D5y5xhBX.js";import{P as c,N as x,F as h}from"./Navbar-sIkjFTv6.js";import{C as p}from"./ContactCallButton-CjNExPlw.js";import{M as u}from"./mail-Bg3oK1t7.js";import{C as f}from"./clock-3-D-FA5049.js";/**
 * @license lucide-react v0.484.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const g=[["path",{d:"M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",key:"1r0f0z"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}]],b=d("map-pin",g),j=()=>{const{t:a}=s(),o=[{name:a("footer.thambuththegama",{defaultValue:"Thambuththegama"}),phone:"0252 275 171"},{name:a("footer.nuwaraEliya",{defaultValue:"Nuwara Eliya Dedicated Economic Center"}),phone:"0522 223 176"},{name:a("footer.narahenpita",{defaultValue:"Narahenpita Dedicated Economic Center"}),phone:"0112 369 626"},{name:a("footer.welisara",{defaultValue:"Welisara Dedicated Economic Center"}),phone:"0112 981 896"},{name:a("footer.veyangoda",{defaultValue:"Veyangoda Dedicated Economic Center"}),phone:"0332 296 914"}],n=[{name:a("footer.ratmalana",{defaultValue:"Ratmalana Dedicated Economic Center"}),phone:"0112 709 800"},{name:a("footer.meegoda",{defaultValue:"Meegoda Dedicated Economic Center"}),phone:"0112 830 816"},{name:a("footer.kandeketiya",{defaultValue:"Kandehandiya Dedicated Economic Center"}),phone:"0717 453 193"},{name:a("footer.kepptipola",{defaultValue:"Keppetipola Economic Center"}),phone:"0572 280 208"}],r=({title:l,centers:i})=>e.jsxs("section",{children:[e.jsx("h2",{className:`\r
                        bg-[#0b8135]\r
                        px-5 py-3\r
                        text-[17px] font-bold\r
                        text-white\r
                    `,children:l}),e.jsx("div",{className:"px-3 py-4 sm:px-4",children:e.jsx("ul",{className:"space-y-3",children:i.map(t=>e.jsxs("li",{className:`\r
                                    flex flex-col gap-1\r
                                    text-[14px]\r
                                    sm:flex-row\r
                                    sm:items-center\r
                                    sm:justify-between\r
                                    sm:gap-5\r
                                `,children:[e.jsx("span",{className:"leading-relaxed text-[#333333]",children:t.name}),e.jsxs("a",{href:`tel:${t.phone.replace(/\s/g,"")}`,className:`\r
                                        inline-flex shrink-0\r
                                        items-center gap-1.5\r
                                        font-bold\r
                                        text-[#078637]\r
                                        transition-colors\r
                                        hover:text-[#056629]\r
                                    `,children:[e.jsx(c,{size:14,className:"sm:hidden"}),t.phone]})]},`${t.name}-${t.phone}`))})})]});return e.jsx("section",{className:"border-t border-gray-100 bg-white px-4 pb-16 pt-4 sm:px-6 lg:pb-20",children:e.jsxs("div",{className:`\r
                    mx-auto grid w-full\r
                    max-w-[1320px]\r
                    grid-cols-1 gap-10\r
                    lg:grid-cols-2\r
                    lg:gap-14\r
                `,children:[e.jsx(r,{title:a("footer.mainCenters",{defaultValue:"Main Centers"}),centers:o}),e.jsx(r,{title:a("footer.regionalCenters",{defaultValue:"Regional Centers"}),centers:n})]})})},w=()=>{const{t:a}=s(),o=[{id:"location",icon:b,title:a("contact.locationTitle",{defaultValue:"Our Location"}),content:a("contact.location",{defaultValue:"Kandy - Jaffna Highway, Dambulla, Sri Lanka"})},{id:"phone",icon:c,title:a("contact.phone",{defaultValue:"Phone"}),content:"066 2285181",href:"tel:0662285181"},{id:"email",icon:u,title:a("contact.email",{defaultValue:"Email"}),content:"dambulladec@gmail.com",href:"mailto:dambulladec@gmail.com"},{id:"hours",icon:f,title:a("contact.workingHours",{defaultValue:"Working Hours"}),content:a("contact.openingTime",{defaultValue:"4.30 A.M onwards"})}];return e.jsx("section",{className:"bg-white px-4 pb-12 sm:px-6 lg:pb-16",children:e.jsxs("div",{className:`\r
                    mx-auto grid w-full max-w-[1320px]\r
                    grid-cols-1 gap-6\r
                    lg:grid-cols-[360px_minmax(0,1fr)]\r
                `,children:[e.jsx("div",{className:"space-y-3",children:o.map(n=>{const r=n.icon,l=n.href?e.jsx("a",{href:n.href,className:`\r
                                    break-words text-[14px]\r
                                    text-[#666666]\r
                                    transition-colors\r
                                    hover:text-[#08772f]\r
                                `,children:n.content}):e.jsx("p",{className:"text-[14px] leading-relaxed text-[#666666]",children:n.content});return e.jsxs("article",{className:`\r
                                    flex min-h-[100px]\r
                                    items-center\r
                                    rounded-[8px]\r
                                    border border-[#dce9df]\r
                                    bg-white\r
                                    px-4 py-3\r
                                    shadow-[0_2px_8px_rgba(0,0,0,0.05)]\r
                                    transition-all duration-200\r
                                    hover:-translate-y-0.5\r
                                    hover:border-green-300\r
                                    hover:shadow-md\r
                                `,children:[e.jsx("div",{className:`\r
                                        flex h-[58px] w-[58px]\r
                                        shrink-0 items-center\r
                                        justify-center\r
                                        rounded-full\r
                                        bg-[#edf7ea]\r
                                        text-[#08772f]\r
                                    `,children:e.jsx(r,{size:29,strokeWidth:1.9})}),e.jsx("div",{className:"mx-4 h-[62px] w-px shrink-0 bg-[#e4e4e4]"}),e.jsxs("div",{className:"min-w-0",children:[e.jsx("h2",{className:"mb-2 text-[16px] font-bold text-[#08772f]",children:n.title}),l]})]},n.id)})}),e.jsx("div",{className:`\r
                        min-h-[410px] overflow-hidden\r
                        rounded-[8px]\r
                        border border-[#dce9df]\r
                        bg-white p-3\r
                        shadow-[0_2px_8px_rgba(0,0,0,0.05)]\r
                    `,children:e.jsx("iframe",{src:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3952.277423359984!2d80.64919217568517!3d7.8660103061068485!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3afca5432c8b3317%3A0x7def86b17389191e!2sDambulla%20Dedicated%20Economic%20Center!5e0!3m2!1sen!2slk!4v1745987171143!5m2!1sen!2slk",title:a("contact.mapTitle",{defaultValue:"Dambulla Dedicated Economic Center Map"}),width:"100%",height:"100%",allowFullScreen:!0,loading:"lazy",referrerPolicy:"no-referrer-when-downgrade",className:"h-[410px] w-full rounded-[6px] border-0"})})]})})},v=()=>{const{t:a}=s();return e.jsxs("div",{className:"flex min-h-screen flex-col bg-white",children:[e.jsxs(m,{children:[e.jsx("title",{children:a("contact.pageTitle",{defaultValue:"Contact Us | Dambulla Dedicated Economic Center"})}),e.jsx("meta",{name:"description",content:a("contact.metaDescription",{defaultValue:"Contact the Dambulla Dedicated Economic Center for general inquiries, location details, phone numbers and working hours."})})]}),e.jsx(x,{}),e.jsxs("main",{id:"public-main",tabIndex:-1,className:"flex-1",children:[e.jsx("section",{className:"bg-white px-4 pb-8 pt-14 sm:px-6 lg:pt-16",children:e.jsxs("div",{className:"mx-auto max-w-[1280px] text-center",children:[e.jsxs("h1",{className:"text-[38px] font-extrabold leading-tight text-black sm:text-[48px]",children:[a("contact.headingFirst",{defaultValue:"Contact"})," ",e.jsx("span",{className:"text-[#08772f]",children:a("contact.headingSecond",{defaultValue:"Us"})})]}),e.jsx("p",{className:"mx-auto mt-4 max-w-[900px] text-[15px] leading-relaxed text-[#7b7b7b] sm:text-[17px]",children:a("contact.description",{defaultValue:"We're here to help you connect with the Dambulla Dedicated Economic Center. Whether you have inquiries, feedback, or need market information, our team is ready to assist."})})]})}),e.jsx(w,{}),e.jsx(j,{})]}),e.jsx(p,{}),e.jsx(h,{})]})};export{v as default};
