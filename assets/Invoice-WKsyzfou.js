import{c as G,r as h,j as e,h as H,f as J}from"./index-C2HWosKe.js";import{A as Q}from"./AdminSelect-DVve9Zqv.js";import{A as W}from"./AdminConfirmDialog-BDJ5awZh.js";import{s as C}from"./ShopPageParts-N3pTwK33.js";import{u as X}from"./useVehicleData-Bd0z8hMT.js";import{a as q}from"./adminApi-x3uxJtd4.js";import{i as Y,e as B,a as D,d as L,t as F,m as I}from"./invoiceContracts-CLksN1aa.js";import{A as Z}from"./arrow-left-TqdigNxF.js";import{M as ee}from"./mail-BYM4NFC4.js";import"./floating-CQPb28PA.js";import"./check-Bx0SO3VT.js";import"./listbox-CANcRpl7.js";import"./index-B9ygI19o.js";/**
 * @license lucide-react v0.484.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const te=[["path",{d:"M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2",key:"143wyd"}],["path",{d:"M6 9V3a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v6",key:"1itne7"}],["rect",{x:"6",y:"14",width:"12",height:"8",rx:"1",key:"1ue0tg"}]],se=G("printer",te);async function ne({search:a,status:i,month:o},n){return Y((await q.get("/api/invoices/admin/list",{params:{search:a,status:i,...o?{month:o}:{}},signal:n,timeout:9e4})).data,o)}async function ie(a){try{return B(a,(await q.post("/api/email/send-email",{invoices:a},{timeout:9e4})).data)}catch{return B(a,null)}}const ae=[["Rent","rent_amount"],["Operation fee","operation_fee"],["VAT","vat_amount"],["Previous balance","previous_balance"],["Fines","fines"],["Previous fines","previous_fines"],["Arrears","total_arrears"],["Previous invoice amount","previous_invoice_total_amount"]];function re({rows:a,selected:i,setSelected:o,busy:n}){const[f,c]=h.useState([]),g=h.useRef(null),b=a,d=b.map(t=>D(t.invoice_id)),l=d.filter(t=>i.includes(t)).length;h.useEffect(()=>{g.current&&(g.current.indeterminate=l>0&&l<d.length)},[l,d.length]);function v(t){o(r=>r.includes(t)?r.filter(m=>m!==t):[...r,t])}return e.jsxs("div",{className:"overflow-hidden rounded-2xl border border-slate-200 bg-white",children:[e.jsx("div",{className:"max-h-[68vh] overflow-auto",role:"region","aria-label":"Invoice records",tabIndex:0,children:e.jsxs("table",{className:"w-full min-w-[1100px] text-left text-base",children:[e.jsx("thead",{className:"sticky top-0 z-10 bg-slate-100 text-sm text-slate-800",children:e.jsxs("tr",{children:[e.jsx("th",{scope:"col",className:"p-3",children:e.jsx("input",{ref:g,type:"checkbox",className:"h-5 w-5 cursor-pointer rounded accent-emerald-800 disabled:cursor-not-allowed focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-700","aria-label":"Select all matching invoices",disabled:n||!d.length,checked:!!d.length&&l===d.length,onChange:t=>o(r=>t.target.checked?[...new Set([...r,...d])]:r.filter(m=>!d.includes(m)))})}),["Invoice / month","Shop / tenant","Total (LKR)","Payments in invoice month (LKR)","Status","Details"].map(t=>e.jsx("th",{scope:"col",className:"whitespace-nowrap p-3",children:t},t))]})}),e.jsxs("tbody",{children:[b.map(t=>{var P,j,y,z,p,A,T,R,w;const r=D(t.invoice_id),m=f.includes(r);return e.jsxs(h.Fragment,{children:[e.jsxs("tr",{className:"border-t border-slate-200 "+(i.includes(r)?"bg-emerald-50":"even:bg-slate-50 hover:bg-emerald-50/60"),children:[e.jsx("td",{className:"p-3",children:e.jsx("input",{type:"checkbox",className:"h-5 w-5 cursor-pointer rounded accent-emerald-800 disabled:cursor-not-allowed focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-700","aria-label":"Select invoice "+r,disabled:n,checked:i.includes(r),onChange:()=>v(r)})}),e.jsxs("th",{scope:"row",className:"p-3 font-semibold",children:[e.jsx("p",{children:r}),e.jsx("p",{className:"mt-1 whitespace-nowrap text-sm font-normal text-slate-600",children:L(t.month_year,!0)})]}),e.jsxs("td",{className:"max-w-56 p-3",children:[e.jsx(H,{to:"/shop-summary/"+encodeURIComponent(F(t.shop_id)),className:"font-medium text-emerald-800 underline",children:F(t.shop_id)||"Unknown shop"}),e.jsx("p",{title:((j=(P=t.Shop)==null?void 0:P.Tenant)==null?void 0:j.name)||"Tenant unavailable",className:"mt-1 line-clamp-2 w-48 break-words text-sm text-slate-600",children:((z=(y=t.Shop)==null?void 0:y.Tenant)==null?void 0:z.name)||"Tenant unavailable"})]}),e.jsx("td",{className:"p-3 tabular-nums",children:I(t.total_amount)}),e.jsx("td",{className:"p-3 tabular-nums",children:I(t.total_paid)}),e.jsxs("td",{className:"p-3",children:[e.jsx("span",{className:"whitespace-nowrap rounded-full px-3 py-1 text-sm font-semibold "+(t.status==="Paid"?"bg-emerald-50 text-emerald-800":t.status==="Arrears"?"bg-red-50 text-red-800":t.status==="Partially Paid"?"bg-amber-50 text-amber-900":"bg-slate-100 text-slate-700"),children:t.status||"Unknown"}),e.jsxs("p",{className:"mt-2 whitespace-nowrap text-sm text-slate-600",children:["Print requests: ",t.printedtime==null?"Unknown":F(t.printedtime)]})]}),e.jsx("td",{className:"p-3",children:e.jsx("button",{"aria-expanded":m,"aria-controls":"invoice-details-"+r,"aria-label":(m?"Hide":"View")+" details for invoice "+r,className:C,onClick:()=>c(N=>m?N.filter(k=>k!==r):[...N,r]),children:m?"Hide":"View"})})]}),m&&e.jsx("tr",{id:"invoice-details-"+r,className:"border-t border-slate-100 bg-slate-50",children:e.jsx("td",{colSpan:7,className:"p-4",children:e.jsxs("dl",{className:"grid gap-4 sm:grid-cols-3 lg:grid-cols-4",children:[ae.map(([N,k])=>e.jsxs("div",{children:[e.jsxs("dt",{className:"text-sm text-slate-600",children:[N," (LKR)"]}),e.jsx("dd",{className:"mt-1",children:I(t[k])})]},k)),e.jsxs("div",{children:[e.jsx("dt",{className:"text-sm text-slate-600",children:"Previous period payments (LKR)"}),e.jsx("dd",{children:I((p=t.previous_payment_summary)==null?void 0:p.total_paid)})]}),e.jsxs("div",{children:[e.jsx("dt",{className:"text-sm text-slate-600",children:"Previous payment date"}),e.jsx("dd",{children:L((A=t.previous_payment_summary)==null?void 0:A.last_payment_date)})]}),e.jsxs("div",{children:[e.jsx("dt",{className:"text-sm text-slate-600",children:"Created"}),e.jsx("dd",{children:L(t.createdAt)})]}),e.jsxs("div",{className:"min-w-0 break-words",children:[e.jsx("dt",{className:"text-sm text-slate-600",children:"Tenant"}),e.jsx("dd",{children:((R=(T=t.Shop)==null?void 0:T.Tenant)==null?void 0:R.name)||"—"})]}),e.jsxs("div",{children:[e.jsx("dt",{className:"text-sm text-slate-600",children:"Shop name"}),e.jsx("dd",{children:((w=t.Shop)==null?void 0:w.shop_name)||"—"})]})]})})})]},r)}),!a.length&&e.jsx("tr",{children:e.jsx("td",{colSpan:7,className:"p-8 text-center text-slate-500",children:"No invoices match these filters."})})]})]})}),e.jsxs("footer",{className:"border-t border-slate-200 bg-slate-50/70 px-4 py-3 text-sm text-slate-600",children:[a.length," matching invoices · all shown"]})]})}function x(a){return String(a??"—").replace(/[&<>"']/g,i=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[i])}function oe(a){return`
 <html>
<head>
  <title>Print Invoices</title>
        <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+Sinhala&display=swap" rel="stylesheet">


 <style>
  @page {
    size: A4 portrait;
    margin: 4mm;
  }

  body {
    font-family: 'Noto Sans Sinhala',Arial, sans-serif;
    margin: 0;
    padding: 0;
  }

  .invoice-copy {
    break-after: page;
    margin-bottom: 0;
  }

  .invoice-copy:last-child { break-after: auto; }
  td, span, p { overflow-wrap: anywhere; }
  img { max-width: 100%; }
  .half-page {
    box-sizing: border-box;
    padding: 1mm;
    min-height: 130mm;
    height: auto;
    overflow: visible;
    break-inside: avoid;
  }

  .scale-content {
    zoom: 0.88; /* zoom works better for print scaling than transform */
  }

  .page-break {
    page-break-after: always;
  }

  @media print {
    .page-break {
      display: block;
    }

    .invoice-copy {
      page-break-inside: avoid;
    }

    body {
      margin: 0;
      padding: 0;
    }
  }
</style>

</head>
<body>
                ${a.map(o=>{var c,g,b,d,l;const n={...o,Shop:{...o.Shop,Tenant:{...(c=o.Shop)==null?void 0:c.Tenant,name:((b=(g=o.Shop)==null?void 0:g.Tenant)==null?void 0:b.name)??"—"}}},f=`
        <div style="padding: 0px; font-size: 11px; font-family:  'Noto Sans Sinhala', Arial, sans-serif;">
          <div style="display: flex; align-items: center; justify-content: center; gap: 30px; background-color: #f0f0f0; border: 1px solid #000; padding: 5px; margin-bottom: 5px;">
                <img src="/images/Gov.jpg" alt="Logo" style="height: 60px;"/>
            <div style="text-align: center;">
              <h2 style="margin: 0; font-size: 15px;">දඹුල්ල විශේෂිත ආර්ථික මධ්‍යස්ථාන කළමනාකරණ භාරය</h2>
                    
          

              
              <h4 style="margin-top: 5px; font-size: 15px;">Monthly Rent Notice / මාසික බදු කුලිය අය කිරීමේ බිල්පත්‍රය</h4>
            </div>
              <img src="/images/logo.jpg" alt="Logo" style="height: 60px;" />
          </div>




      <div style="display: flex; justify-content: space-between; padding: 5px; background-color: #d0e7f9; font-size: 12px; font-family: Arial, sans-serif;">


  <div style=" text-transform: uppercase; letter-spacing: 0.5px;">
    <strong>Shop Detils</strong><br/>
    <span style="font-weight: normal; text-transform: none;">කඩ අංකය</span>: <span style="font-size: 15px;font-weight: bold;">${x(n.shop_id)}
  </span>
  </span>
  </div>

  <div style=" text-transform: uppercase; letter-spacing: 0.5px;">
    <strong>Invoice Month</strong><br/>
    <span style="font-weight: normal; text-transform: none;">බිල්පත් මාසය</span>:<span style="font-size: 15px;font-weight: bold;"> ${x(new Date(n.month_year).toLocaleDateString("en-US",{month:"long",year:"numeric"}))}
  </span></div>

  <div style=" text-transform: uppercase; letter-spacing: 0.5px;">
    <strong>Accounting Date</strong><br/>
    <span style="font-weight: normal; text-transform: none;">ගිණුම් කල දිනය</span>:<span style="font-size: 15px;font-weight: bold;"> ${x(new Date(n.createdAt).toLocaleDateString())}
  </span></div>
  <div style=" text-transform: uppercase; letter-spacing: 0.5px;">
    <strong>Invoice No</strong><br/>
    <span style="font-weight: normal; text-transform: none;">බිල්පත් අංකය</span>: <span style="font-size: 15px;font-weight: bold;">${x(n.invoice_id)}</span>
  </div>

</div>

      <div style="display: flex; justify-content: space-between; padding: 5px; background-color: #d0e7f9; font-size: 12px; font-family: Arial, sans-serif;">
  <div style=" text-transform: uppercase; letter-spacing: 0.5px;">
    <span style="font-weight: normal; text-transform: none;">බදුකරුගේ නම</span>: <span style="font-size: 15px;font-weight: bold;">${x(n.Shop.Tenant.name)}</span>
  </div>
</div>

          <div style="display: flex; justify-content: space-between; margin-top: 10px; gap: 10px;">
            <div style="background-color: #f4d3a1; border: 1px solid #000; padding: 10px; width: 60%;">
              <h3 style="text-align: center; margin: 0 0 8px;">Statement of Account / ගිණුම් ප්‍රකාශය
</h3>
              <table style="width: 100%; border-collapse: collapse; font-size: 13px;">
                <tr><td>Monthly Rent / මාසික කුලිය</td><td style="text-align: right;">Rs ${x(n.rent_amount)}</td></tr>
                <tr><td>Operation Fee / මෙහෙයුම් ගාස්තුව
</td><td style="text-align: right;">Rs ${x(n.operation_fee)}</td></tr>
                <tr><td>VAT / එකතු කල අගය මත බද්ද
 </td><td style="text-align: right;">Rs ${x(n.vat_amount)}</td></tr>
                <tr><td>Previous Balance / ශේෂය
</td><td style="text-align: right;">Rs ${x(n.previous_balance)}</td></tr>
                <tr><td>Total Fines / සියලු දඩ</td><td style="text-align: right;">Rs ${x(n.fines)}</td></tr>
                <tr><td>Total Arrears / හිඟ බදු කුලිය
</td><td style="text-align: right;">Rs ${x(n.total_arrears)}</td></tr>
                <tr style="border-top: 1px solid #000;"><td><strong>Total Amount / අය විය යුතු මුලු මුදල
</strong></td><td style="text-align: right;"><strong>Rs ${x(n.total_amount)}</strong></td></tr>
              </table>
            </div>

<div style="display: flex; flex-direction: column; width: 20%;">
  <!-- Previous Month Payment Details -->
  <div style="background-color: #f4d3a1; border: 1px solid #000; padding: 5px;">
    <h4 style="text-align: center; margin-bottom: 8px;">පසුගිය මස ගෙවීම් විස්තර</h4>
    <div style="font-size: 10px;">
      <div>
        අවසන් වරට මුදල් ගෙවූ දිනය :
        <span>
          ${x((d=n.previous_payment_summary)!=null&&d.last_payment_date?new Date(n.previous_payment_summary.last_payment_date).toLocaleDateString():"N/A")}
        </span>
      </div>

      <div>
        පසුගිය මස ගෙවීමට තිබූ මුලු මුදල :
        <span>
          Rs ${x(n.previous_invoice_total_amount?parseFloat(n.previous_invoice_total_amount).toFixed(2):"0.00")}
        </span>
      </div>

      <div>
        පසුගිය මස ගෙවූ මුදල : <br/>
        <span>
          Rs ${x(parseFloat(((l=n.previous_payment_summary)==null?void 0:l.total_paid)||0).toFixed(2))}
        </span>
      </div>
       <div>
        පසුගිය මසට දඩ : <br/>
        <span>
          Rs ${x(parseFloat(n.previous_fines||0).toFixed(2))}
        </span>
      </div>
    </div>

    <div style="border-top: 1px solid black; margin: 8px 0;"></div>
  </div>

  <!-- VAT Info -->
  <div style="background-color: #e7f3d4; border: 1px solid #000; padding: 10px; font-size: 9px; margin-top: 10px;">
    <div style="height: 30px;">
<p style="margin: 0; text-align: center; font-size: 11px; word-wrap: break-word; white-space: normal;">
  VAT Registration No: 409238270/7000
</p>
    </div>
  </div>
</div>


      
            <div style="background-color: #e7f3d4; border: 1px solid #000; padding: 10px; width: 20%; font-size: 10px;">
          
              <h4 style="color: red; margin: 0 0 5px; border-bottom: 1px solid black;">
මෙම බිල්පතේ අයවිය යුතු මාසික කුලි මුදල් මෙම මස 15 වන දිනට පෙර ගෙවිය යුතුය. එසේ නොමැති වුවහොත් 30% ක දඩයක් අය කරනු ලැබේ.</h4>

              <div style="text-align: center;">
  <p style="margin: 0;">
    දඹුල්ල විශේෂිත ආර්ථික මධ්‍යස්ථාන<br/>
    කළමනාකරණ භාරය <br/>
    නමට ලංකා බැංකු ජංගම ගිණුම් අංක 2603285 දරණ ගිණුමට ඔබ විසින් මුදල් <br/>
    ගෙවීම් කළ යුතු අතර ඒ සඳහා මෙම බිල්පත අනිවාර්යයෙන්ම භාවිතා කල යුතුය
  </p>
</div>

            </div>
          </div>


     <div style="background-color: #fff3cd; border: 1px solid #000; padding-top: 2px; padding-right: 2px; padding-bottom: 1px; padding-left: 2px; margin-top: 4px;margin-bottom: 0px; font-size: 10px;overflow: visible;">
  <div style="display: flex; justify-content: space-between; align-items: stretch; text-align: left;">
    
    <!-- Section 1: Contacts -->
    <div style="flex: 1; padding-right: 10px; border-right: 1px solid #000; display: flex; flex-direction: column; justify-content: space-between;">
      <div>
        <p style="margin: 0;text-align: center;"><strong>විමසීම්
</strong></p>
        <p style="margin: 5px 0 0;">Manager<br/>Management Office<br/>Dedicated Economic Center<br/>Dambulla<br/>Tel: 066-2285181 / 066-2285448<br/>Email: dambulladec@gmail.com</p>
      </div>
    </div>


    <!-- Section 2: for market office -->
    <div style="flex: 1; padding-left: 10px; display: flex; flex-direction: column; justify-content: space-between;border-right: 1px solid #000;">
      <div>
        <p style="margin: 0;text-align: center;font-size: 13px;"><strong>For Trust Office Use</strong></p>
        
      </div>
      <div style="text-align: center; margin-top: auto;">
        <p style="margin: 0;">_________________<br/><span style="font-size: 11px;">Official Seal</span></p>
      </div>
    </div>
    <!-- Section 2: For Renter -->
    <div style="flex: 1.5; padding: 0 10px; border-right: 1px solid #000; display: flex; flex-direction: column; justify-content: space-between;">
      <div>
        <p style="margin: 0;text-align: center;"><strong>බදුකරුගේ ප්‍රයෝජනය සඳහා
</strong></p>
  <p style="margin: 5px 0;">
  බැංකුවට ගෙවූ මුදල: 
  <span style="display: inline-block; width: 165px; border: 1px solid #000; height: 20px; padding: 0 5px;">
    රු.
  </span>
</p>

      </div>
      <div style="text-align: center; margin-top: auto;">
        <p style="margin: 0;">_______________________<br/><span style="font-size: 11px;">බදුකරුගේ අත්සන
 </span></p>
      </div>
    </div>

 <!-- Section 3: Bank Cashier -->
    <div style="flex: 1.5; padding-left: 10px; display: flex; flex-direction: column; justify-content: space-between; ">
      <div>
        <p style="margin: 0;text-align: center;font-size: 13px;"><strong>Bank Use Only</strong></p>
          <p style="margin: 5px 0;font-size: 12px;">
  Amount Received: 
  <span style="display: inline-block; width: 165px; border: 1px solid #000; height: 20px; padding: 0 5px;">
    Rs.
  </span>
</p>
      </div>


      <div style="text-align: center; margin-top: auto;">
        <p style="margin: 0;">_______________________<br/><span style="font-size: 11px;">Signature of Bank Cashier</span></p>
      </div>
    </div>



   



   

  </div>
</div>






        </div>
      `;return`
      <div class="invoice-copy">
        <div class="half-page">
  <div class="scale-content">
<p style="text-align: right; font-size: 12px; font-weight: bold; margin-top: 1px; margin-bottom: 1px; padding-top: 1px; padding-bottom: 1px;">
  Customer Copy
</p>

  ${f}
  </div>
</div>
        <hr style="margin: 10px 0; border: 1px dashed #aaa;" />
       <div class="half-page">
  <div class="scale-content">
        <p style="text-align: right; font-size: 12px; font-weight: bold; margin-top: 1px; margin-bottom: 1px; padding-top: 1px; padding-bottom: 1px;"> Office Copy </p>
    ${f}
  </div>
</div>
      </div>

    `}).join("")}
            </body>
        </html>
    `}async function le(a,i=8e3){var f;let o;const n=[...a.querySelectorAll("img")].map(c=>c.complete?Promise.resolve():new Promise(g=>{c.addEventListener("load",g,{once:!0}),c.addEventListener("error",g,{once:!0})}));try{return await Promise.race([Promise.all([...n,Promise.resolve((f=a.fonts)==null?void 0:f.ready)]).then(()=>!0),new Promise(c=>{o=setTimeout(()=>c(!1),i)})])}finally{clearTimeout(o)}}async function de(a){if(!a.length)return{opened:!1,message:"No invoices selected.",results:[]};const i=window.open("","_blank");if(!i)return{opened:!1,message:"Popup blocked. Allow popups and try printing again. No counter requests were sent.",results:[]};let o=[];try{i.opener=null;const n=oe(a);i.document.write("<!doctype html><title>Preparing invoices</title><p>Preparing invoices. Please keep this window open.</p>"),i.document.close();let f=0;const c=new Array(a.length);async function g(){var d,l;for(;f<a.length;){const v=f++,t=a[v];try{const r=await q.patch("/api/invoices/"+encodeURIComponent(t.invoice_id)+"/print",{printed:!0}),m=Number((d=r.data)==null?void 0:d.printedtime);c[v]={invoice_id:String(t.invoice_id),status:Number.isSafeInteger(m)&&m>=0?"recorded":"unknown"}}catch(r){c[v]={invoice_id:String(t.invoice_id),status:[400,401,403,404,422].includes((l=r.response)==null?void 0:l.status)?"failed":"unknown"}}}}if(await Promise.all(Array.from({length:Math.min(4,a.length)},()=>g())),o=c,o.some(d=>d.status!=="recorded"))return i.closed||i.close(),{opened:!1,results:o,message:"Printing stopped because some counter requests failed or have an unknown result. Some counters may already have increased. Check the results before trying again."};if(i.closed)return{opened:!1,results:o,message:"The print window was closed. Counter requests were recorded; physical printing is not confirmed."};i.document.open(),i.document.write(n),i.document.close();const b=await le(i.document);return i.closed?{opened:!1,results:o,message:"The print window was closed. Counter requests were recorded; physical printing is not confirmed."}:(i.focus(),i.print(),{opened:!0,results:o,message:"Print dialog requested. Physical printing is not confirmed."+(b?"":" Some images or fonts did not finish loading; check the preview before printing.")})}catch{return i.closed||i.close(),{opened:!1,results:o,message:"Unable to prepare the print preview. Check counter results before trying again."}}}const ce=[{value:"all",label:"All statuses"},...["Paid","Arrears","Partially Paid","Unpaid"].map(a=>({value:a,label:a})),{value:"unprinted",label:"No recorded print requests"}];function Ne(){var E,U,V;const{role:a}=J(),[i,o]=h.useState(""),[n,f]=h.useState(""),[c,g]=h.useState("all"),[b,d]=h.useState({}),[l,v]=h.useState(null),[t,r]=h.useState(""),[m,P]=h.useState(null),j=h.useRef(!1),y=h.useRef(!0);h.useEffect(()=>(y.current=!0,()=>{y.current=!1}),[]);const z=h.useCallback(s=>ne({search:n,status:c,month:i},s),[n,c,i]),p=X(JSON.stringify([n,c,i]),z,250),A=((E=p.data)==null?void 0:E.invoices)||[],T=((U=p.data)==null?void 0:U.totalItems)||0,R=Object.keys(b),w=Object.values(b),N=["admin","superadmin"].includes(a);function k(s){d(u=>{const O=typeof s=="function"?s(Object.keys(u)):s,S=new Map([...Object.entries(u),...A.map(_=>[D(_.invoice_id),_])]);return Object.fromEntries(O.filter(_=>S.has(_)).map(_=>[_,structuredClone(S.get(_))]))})}function $(s,u){s(u),d({})}function M(s){j.current||!p.data||!w.length||s==="print"&&!N||v({kind:s,rows:structuredClone(w)})}async function K(){const s=l;if(!(j.current||!s)&&!(s.kind==="print"&&!N)){j.current=!0,r(s.kind),P(null);try{if(s.kind==="print"){const u=await de(s.rows);y.current&&(P({kind:"print",message:u.message,rows:u.results}),u.results.length&&(d({}),p.retry()))}else{const u=await ie(s.rows);if(y.current){P({kind:"email",message:"Email request results. Sent means the server reported sending; recipient delivery is not confirmed. Unknown results may already have been sent. Check before sending again.",rows:u});const O=new Set(u.filter(S=>S.status==="sent").map(S=>S.invoice_id));d(S=>Object.fromEntries(Object.entries(S).filter(([_])=>!O.has(_))))}}}catch{y.current&&P({kind:s.kind,message:"The action could not be completed. Check its outcome before trying again.",rows:[]})}finally{j.current=!1,y.current&&(r(""),v(null))}}}return e.jsx("div",{children:e.jsxs("div",{className:"w-full",children:[e.jsxs("header",{className:"mb-3 flex flex-wrap items-center gap-3 rounded-2xl border border-emerald-200 bg-gradient-to-br from-emerald-50 via-white to-teal-50 p-3",children:[e.jsxs(H,{className:C+" min-h-11! text-sm! px-3!",to:"/admin-dashboard",children:[e.jsx(Z,{size:16,"aria-hidden":"true"}),"Back to dashboard"]}),e.jsx("h1",{className:"text-3xl font-bold tracking-tight text-[#103e30]",children:"Invoices"})]}),e.jsxs("div",{className:"mb-3 flex flex-wrap items-end gap-3 rounded-2xl border border-slate-200 bg-white p-3",children:[e.jsxs("label",{className:"grid w-full min-w-0 gap-2 text-sm font-semibold text-slate-700 sm:w-auto sm:flex-1",children:["Search invoices",e.jsx("input",{type:"search",value:n,disabled:!!t,onChange:s=>$(f,s.target.value),placeholder:"Shop ID, invoice ID, month, shop or tenant name",className:"min-h-12 min-w-0 rounded-xl border border-slate-300 bg-white px-3 text-base"})]}),e.jsx("fieldset",{disabled:!!t,className:"[&_button]:min-h-12 [&_button]:text-base "+(t?"opacity-60":""),children:e.jsx(Q,{label:"Invoice filter",value:c,onChange:s=>{j.current||$(g,s)},options:ce})}),e.jsxs("label",{className:"grid gap-2 text-sm font-semibold text-slate-700",children:["Invoice month",e.jsx("input",{type:"month","aria-label":"Invoice month",value:i||((V=p.data)==null?void 0:V.month)||"",disabled:!!t,onChange:s=>$(o,s.target.value),className:"min-h-12 rounded-xl border border-slate-300 bg-white px-3 text-base"})]}),e.jsx("button",{disabled:!!t||p.loading,className:C,onClick:()=>{o(""),d({}),p.retry()},children:"Latest month"}),e.jsx("button",{disabled:!!t||p.loading,onClick:()=>{k([]),p.retry()},className:C,children:"Refresh"})]}),m&&e.jsxs("section",{role:"status","aria-label":"Action results",className:"mb-4 rounded-xl border border-slate-200 bg-white p-4 text-sm",children:[e.jsx("p",{children:m.message}),m.rows.length>0&&e.jsxs(e.Fragment,{children:[e.jsx("p",{className:"mt-2 font-medium",children:Object.entries(m.rows.reduce((s,u)=>({...s,[u.status]:(s[u.status]||0)+1}),{})).map(([s,u])=>s+": "+u).join(" · ")}),e.jsx("div",{className:"mt-3 max-h-48 overflow-auto",tabIndex:0,role:"region","aria-label":"Per-invoice action results",children:e.jsxs("table",{className:"w-full text-left text-xs",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{scope:"col",className:"p-2",children:"Invoice"}),e.jsx("th",{scope:"col",className:"p-2",children:"Result"}),e.jsx("th",{scope:"col",className:"p-2",children:"Details"})]})}),e.jsx("tbody",{children:m.rows.map(s=>e.jsxs("tr",{children:[e.jsx("th",{scope:"row",className:"p-2",children:s.invoice_id}),e.jsx("td",{className:"p-2",children:s.status}),e.jsx("td",{className:"p-2",children:s.message||(s.status==="recorded"?"Counter request recorded; physical printing not confirmed.":"Check counter status before another print request.")})]},s.invoice_id))})]})})]})]}),p.loading&&e.jsx("p",{role:"status",className:"rounded-xl bg-white p-6 text-sm",children:"Loading invoices…"}),p.error&&e.jsxs("div",{role:"alert",className:"rounded-xl bg-red-50 p-4",children:[e.jsx("p",{children:p.error}),e.jsx("p",{className:"mt-1 text-sm",children:"Invoice data could not be refreshed. Any action results above remain valid."}),e.jsx("button",{className:C+" mt-3",onClick:p.retry,children:"Try again"})]}),p.data&&e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"mb-3 flex flex-wrap items-center justify-between gap-3 rounded-xl border border-emerald-200 bg-emerald-50 px-4 py-3",children:[e.jsxs("p",{className:"text-base font-semibold text-emerald-950",children:[w.length," selected · ",T," matching invoices",p.data.month?" · "+p.data.month:""]}),e.jsxs("div",{className:"flex flex-wrap gap-2",children:[e.jsx("button",{disabled:!!t||!R.length,className:C,onClick:()=>k([]),children:"Clear selection"}),N&&e.jsxs("button",{disabled:!!t||!w.length,className:C+" border-emerald-800! bg-emerald-800! text-white! hover:bg-emerald-900!",onClick:()=>M("print"),children:[e.jsx(se,{size:16,"aria-hidden":"true"}),"Print selected"]}),e.jsxs("button",{disabled:!!t||!w.length,className:C+" border-blue-200! text-blue-900!",onClick:()=>M("email"),children:[e.jsx(ee,{size:16,"aria-hidden":"true"}),"Email selected"]})]})]}),e.jsx(re,{rows:A,selected:R,setSelected:k,busy:!!t},n+"|"+c+"|"+(p.data.month||"empty"))]}),e.jsx(W,{open:!!l,title:(l==null?void 0:l.kind)==="print"?"Print selected invoices":"Email selected invoices",confirmText:(l==null?void 0:l.kind)==="print"?"Prepare print":"Send email",busy:!!t,onClose:()=>v(null),onConfirm:K,children:l&&e.jsxs(e.Fragment,{children:[e.jsxs("p",{children:[l.rows.length," selected invoice(s)"]}),e.jsx("p",{className:"mt-2 max-h-40 overflow-auto break-words",tabIndex:0,"aria-label":"Selected invoice IDs",children:l.rows.map(s=>D(s.invoice_id)).join(", ")}),e.jsx("p",{className:"mt-2",children:l.kind==="print"?"Customer and Office copies will be prepared. Counter requests can increase even if you cancel the print dialog.":"This sends emails using the current server service. Check previous results before sending again; duplicate delivery protection is not available."})]})})]})})}export{Ne as default};
