import{c as J,r as h,j as e,f as Q,h as W}from"./index-BIGkaRfw.js";import{S as X}from"./SortControl-D5Ms1y4G.js";import{s as Y}from"./listSorting-LfQlvrHZ.js";import{A as Z}from"./AdminPageHeader-B-bL0bNt.js";import{A as ee}from"./AdminSelect-UZQ6YQFu.js";import{A as te}from"./AdminConfirmDialog-MeCZKEvp.js";import{s as P}from"./ShopPageParts-D-AMckV_.js";import{u as se}from"./useVehicleData-07R84FhC.js";import{a as E}from"./adminApi-x3uxJtd4.js";import{i as ne,e as K,a as $,d as q,t as M,m as D}from"./invoiceContracts-CLksN1aa.js";/* empty css                    */import{M as ie}from"./mail-C0FIO7Lt.js";import"./arrow-left-DQgNZVBi.js";import"./chevron-down-BeWnbkYk.js";import"./check-H0t5OetM.js";import"./listbox-DPA2-jRT.js";import"./floating-Xx2Yk8m4.js";import"./index-B9ygI19o.js";/**
 * @license lucide-react v0.484.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ae=[["path",{d:"M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2",key:"143wyd"}],["path",{d:"M6 9V3a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v6",key:"1itne7"}],["rect",{x:"6",y:"14",width:"12",height:"8",rx:"1",key:"1ue0tg"}]],re=J("printer",ae);async function oe({search:a,status:n,month:o},i){return ne((await E.get("/api/invoices/admin/list",{params:{search:a,status:n,...o?{month:o}:{}},signal:i,timeout:9e4})).data,o)}async function le(a){try{return K(a,(await E.post("/api/email/send-email",{invoices:a},{timeout:9e4})).data)}catch{return K(a,null)}}const de=[["Rent","rent_amount"],["Operation fee","operation_fee"],["VAT","vat_amount"],["Previous balance","previous_balance"],["Fines","fines"],["Previous fines","previous_fines"],["Arrears","total_arrears"],["Previous invoice amount","previous_invoice_total_amount"]];function ce({rows:a,selected:n,setSelected:o,busy:i}){const[b,d]=h.useState([]),x=h.useRef(null),g=a,p=g.map(t=>$(t.invoice_id)),f=p.filter(t=>n.includes(t)).length;h.useEffect(()=>{x.current&&(x.current.indeterminate=f>0&&f<p.length)},[f,p.length]);function v(t){o(r=>r.includes(t)?r.filter(l=>l!==t):[...r,t])}return e.jsxs("div",{className:"overflow-hidden rounded-2xl border border-slate-200 bg-white",children:[e.jsx("div",{className:"max-h-[68vh] overflow-auto",role:"region","aria-label":"Invoice records",tabIndex:0,children:e.jsxs("table",{className:"w-full min-w-[1100px] text-left text-base",children:[e.jsx("thead",{className:"sticky top-0 z-10 bg-slate-100 text-sm text-slate-800",children:e.jsxs("tr",{children:[e.jsx("th",{scope:"col",className:"p-3",children:e.jsx("input",{ref:x,type:"checkbox",className:"h-5 w-5 cursor-pointer rounded accent-emerald-800 disabled:cursor-not-allowed focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-700","aria-label":"Select all matching invoices",disabled:i||!p.length,checked:!!p.length&&f===p.length,onChange:t=>o(r=>t.target.checked?[...new Set([...r,...p])]:r.filter(l=>!p.includes(l)))})}),["Invoice / month","Shop / tenant","Total (LKR)","Payments in invoice month (LKR)","Status","Details"].map(t=>e.jsx("th",{scope:"col",className:"whitespace-nowrap p-3",children:t},t))]})}),e.jsxs("tbody",{children:[g.map(t=>{var A,w,S,N,_,T,c,R,I;const r=$(t.invoice_id),l=b.includes(r);return e.jsxs(h.Fragment,{children:[e.jsxs("tr",{className:"invoice-status-row border-t border-slate-200","data-status":t.status,"data-selected":n.includes(r),"aria-selected":n.includes(r),children:[e.jsx("td",{className:"p-3",children:e.jsx("input",{type:"checkbox",className:"h-5 w-5 cursor-pointer rounded accent-emerald-800 disabled:cursor-not-allowed focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-700","aria-label":"Select invoice "+r,disabled:i,checked:n.includes(r),onChange:()=>v(r)})}),e.jsxs("th",{scope:"row",className:"p-3 font-semibold",children:[e.jsx("p",{children:r}),e.jsx("p",{className:"mt-1 whitespace-nowrap text-sm font-normal text-slate-600",children:q(t.month_year,!0)})]}),e.jsxs("td",{className:"max-w-56 p-3",children:[e.jsx(Q,{to:"/shop-summary/"+encodeURIComponent(M(t.shop_id)),className:"font-medium text-emerald-800 underline",children:M(t.shop_id)||"Unknown shop"}),e.jsx("p",{title:((w=(A=t.Shop)==null?void 0:A.Tenant)==null?void 0:w.name)||"Tenant unavailable",className:"mt-1 line-clamp-2 w-48 break-words text-sm text-slate-600",children:((N=(S=t.Shop)==null?void 0:S.Tenant)==null?void 0:N.name)||"Tenant unavailable"})]}),e.jsx("td",{className:"p-3 tabular-nums",children:D(t.total_amount)}),e.jsx("td",{className:"p-3 tabular-nums",children:D(t.total_paid)}),e.jsxs("td",{className:"p-3",children:[e.jsx("span",{className:"whitespace-nowrap rounded-full px-3 py-1 text-sm font-semibold "+(t.status==="Paid"?"bg-emerald-50 text-emerald-800":t.status==="Arrears"?"bg-red-50 text-red-800":t.status==="Partially Paid"?"bg-amber-50 text-amber-900":"bg-slate-100 text-slate-700"),children:t.status||"Unknown"}),e.jsxs("p",{className:"mt-2 whitespace-nowrap text-sm text-slate-600",children:["Print requests: ",t.printedtime==null?"Unknown":M(t.printedtime)]})]}),e.jsx("td",{className:"p-3",children:e.jsx("button",{"aria-expanded":l,"aria-controls":"invoice-details-"+r,"aria-label":(l?"Hide":"View")+" details for invoice "+r,className:P,onClick:()=>d(C=>l?C.filter(y=>y!==r):[...C,r]),children:l?"Hide":"View"})})]}),l&&e.jsx("tr",{id:"invoice-details-"+r,className:"border-t border-slate-100 bg-slate-50",children:e.jsx("td",{colSpan:7,className:"p-4",children:e.jsxs("dl",{className:"grid gap-4 sm:grid-cols-3 lg:grid-cols-4",children:[de.map(([C,y])=>e.jsxs("div",{children:[e.jsxs("dt",{className:"text-sm text-slate-600",children:[C," (LKR)"]}),e.jsx("dd",{className:"mt-1",children:D(t[y])})]},y)),e.jsxs("div",{children:[e.jsx("dt",{className:"text-sm text-slate-600",children:"Previous period payments (LKR)"}),e.jsx("dd",{children:D((_=t.previous_payment_summary)==null?void 0:_.total_paid)})]}),e.jsxs("div",{children:[e.jsx("dt",{className:"text-sm text-slate-600",children:"Previous payment date"}),e.jsx("dd",{children:q((T=t.previous_payment_summary)==null?void 0:T.last_payment_date)})]}),e.jsxs("div",{children:[e.jsx("dt",{className:"text-sm text-slate-600",children:"Created"}),e.jsx("dd",{children:q(t.createdAt)})]}),e.jsxs("div",{className:"min-w-0 break-words",children:[e.jsx("dt",{className:"text-sm text-slate-600",children:"Tenant"}),e.jsx("dd",{children:((R=(c=t.Shop)==null?void 0:c.Tenant)==null?void 0:R.name)||"—"})]}),e.jsxs("div",{children:[e.jsx("dt",{className:"text-sm text-slate-600",children:"Shop name"}),e.jsx("dd",{children:((I=t.Shop)==null?void 0:I.shop_name)||"—"})]})]})})})]},r)}),!a.length&&e.jsx("tr",{children:e.jsx("td",{colSpan:7,className:"p-8 text-center text-slate-500",children:"No invoices match these filters."})})]})]})}),e.jsxs("footer",{className:"border-t border-slate-200 bg-slate-50/70 px-4 py-3 text-sm text-slate-600",children:[a.length," matching invoices · all shown"]})]})}function u(a){return String(a??"—").replace(/[&<>"']/g,n=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[n])}function pe(a){return`
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
                ${a.map(o=>{var d,x,g,p,f;const i={...o,Shop:{...o.Shop,Tenant:{...(d=o.Shop)==null?void 0:d.Tenant,name:((g=(x=o.Shop)==null?void 0:x.Tenant)==null?void 0:g.name)??"—"}}},b=`
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
    <span style="font-weight: normal; text-transform: none;">කඩ අංකය</span>: <span style="font-size: 15px;font-weight: bold;">${u(i.shop_id)}
  </span>
  </span>
  </div>

  <div style=" text-transform: uppercase; letter-spacing: 0.5px;">
    <strong>Invoice Month</strong><br/>
    <span style="font-weight: normal; text-transform: none;">බිල්පත් මාසය</span>:<span style="font-size: 15px;font-weight: bold;"> ${u(new Date(i.month_year).toLocaleDateString("en-US",{month:"long",year:"numeric"}))}
  </span></div>

  <div style=" text-transform: uppercase; letter-spacing: 0.5px;">
    <strong>Accounting Date</strong><br/>
    <span style="font-weight: normal; text-transform: none;">ගිණුම් කල දිනය</span>:<span style="font-size: 15px;font-weight: bold;"> ${u(new Date(i.createdAt).toLocaleDateString())}
  </span></div>
  <div style=" text-transform: uppercase; letter-spacing: 0.5px;">
    <strong>Invoice No</strong><br/>
    <span style="font-weight: normal; text-transform: none;">බිල්පත් අංකය</span>: <span style="font-size: 15px;font-weight: bold;">${u(i.invoice_id)}</span>
  </div>

</div>

      <div style="display: flex; justify-content: space-between; padding: 5px; background-color: #d0e7f9; font-size: 12px; font-family: Arial, sans-serif;">
  <div style=" text-transform: uppercase; letter-spacing: 0.5px;">
    <span style="font-weight: normal; text-transform: none;">බදුකරුගේ නම</span>: <span style="font-size: 15px;font-weight: bold;">${u(i.Shop.Tenant.name)}</span>
  </div>
</div>

          <div style="display: flex; justify-content: space-between; margin-top: 10px; gap: 10px;">
            <div style="background-color: #f4d3a1; border: 1px solid #000; padding: 10px; width: 60%;">
              <h3 style="text-align: center; margin: 0 0 8px;">Statement of Account / ගිණුම් ප්‍රකාශය
</h3>
              <table style="width: 100%; border-collapse: collapse; font-size: 13px;">
                <tr><td>Monthly Rent / මාසික කුලිය</td><td style="text-align: right;">Rs ${u(i.rent_amount)}</td></tr>
                <tr><td>Operation Fee / මෙහෙයුම් ගාස්තුව
</td><td style="text-align: right;">Rs ${u(i.operation_fee)}</td></tr>
                <tr><td>VAT / එකතු කල අගය මත බද්ද
 </td><td style="text-align: right;">Rs ${u(i.vat_amount)}</td></tr>
                <tr><td>Previous Balance / ශේෂය
</td><td style="text-align: right;">Rs ${u(i.previous_balance)}</td></tr>
                <tr><td>Total Fines / සියලු දඩ</td><td style="text-align: right;">Rs ${u(i.fines)}</td></tr>
                <tr><td>Total Arrears / හිඟ බදු කුලිය
</td><td style="text-align: right;">Rs ${u(i.total_arrears)}</td></tr>
                <tr style="border-top: 1px solid #000;"><td><strong>Total Amount / අය විය යුතු මුලු මුදල
</strong></td><td style="text-align: right;"><strong>Rs ${u(i.total_amount)}</strong></td></tr>
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
          ${u((p=i.previous_payment_summary)!=null&&p.last_payment_date?new Date(i.previous_payment_summary.last_payment_date).toLocaleDateString():"N/A")}
        </span>
      </div>

      <div>
        පසුගිය මස ගෙවීමට තිබූ මුලු මුදල :
        <span>
          Rs ${u(i.previous_invoice_total_amount?parseFloat(i.previous_invoice_total_amount).toFixed(2):"0.00")}
        </span>
      </div>

      <div>
        පසුගිය මස ගෙවූ මුදල : <br/>
        <span>
          Rs ${u(parseFloat(((f=i.previous_payment_summary)==null?void 0:f.total_paid)||0).toFixed(2))}
        </span>
      </div>
       <div>
        පසුගිය මසට දඩ : <br/>
        <span>
          Rs ${u(parseFloat(i.previous_fines||0).toFixed(2))}
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

  ${b}
  </div>
</div>
        <hr style="margin: 10px 0; border: 1px dashed #aaa;" />
       <div class="half-page">
  <div class="scale-content">
        <p style="text-align: right; font-size: 12px; font-weight: bold; margin-top: 1px; margin-bottom: 1px; padding-top: 1px; padding-bottom: 1px;"> Office Copy </p>
    ${b}
  </div>
</div>
      </div>

    `}).join("")}
            </body>
        </html>
    `}async function me(a,n=8e3){var b;let o;const i=[...a.querySelectorAll("img")].map(d=>d.complete?Promise.resolve():new Promise(x=>{d.addEventListener("load",x,{once:!0}),d.addEventListener("error",x,{once:!0})}));try{return await Promise.race([Promise.all([...i,Promise.resolve((b=a.fonts)==null?void 0:b.ready)]).then(()=>!0),new Promise(d=>{o=setTimeout(()=>d(!1),n)})])}finally{clearTimeout(o)}}async function ue(a){if(!a.length)return{opened:!1,message:"No invoices selected.",results:[]};const n=window.open("","_blank");if(!n)return{opened:!1,message:"Popup blocked. Allow popups and try printing again. No counter requests were sent.",results:[]};let o=[];try{n.opener=null;const i=pe(a);n.document.write("<!doctype html><title>Preparing invoices</title><p>Preparing invoices. Please keep this window open.</p>"),n.document.close();let b=0;const d=new Array(a.length);async function x(){var p,f;for(;b<a.length;){const v=b++,t=a[v];try{const r=await E.patch("/api/invoices/"+encodeURIComponent(t.invoice_id)+"/print",{printed:!0}),l=Number((p=r.data)==null?void 0:p.printedtime);d[v]={invoice_id:String(t.invoice_id),status:Number.isSafeInteger(l)&&l>=0?"recorded":"unknown"}}catch(r){d[v]={invoice_id:String(t.invoice_id),status:[400,401,403,404,422].includes((f=r.response)==null?void 0:f.status)?"failed":"unknown"}}}}if(await Promise.all(Array.from({length:Math.min(4,a.length)},()=>x())),o=d,o.some(p=>p.status!=="recorded"))return n.closed||n.close(),{opened:!1,results:o,message:"Printing stopped because some counter requests failed or have an unknown result. Some counters may already have increased. Check the results before trying again."};if(n.closed)return{opened:!1,results:o,message:"The print window was closed. Counter requests were recorded; physical printing is not confirmed."};n.document.open(),n.document.write(i),n.document.close();const g=await me(n.document);return n.closed?{opened:!1,results:o,message:"The print window was closed. Counter requests were recorded; physical printing is not confirmed."}:(n.focus(),n.print(),{opened:!0,results:o,message:"Print dialog requested. Physical printing is not confirmed."+(g?"":" Some images or fonts did not finish loading; check the preview before printing.")})}catch{return n.closed||n.close(),{opened:!1,results:o,message:"Unable to prepare the print preview. Check counter results before trying again."}}}const he=[{value:"all",label:"All statuses"},...["Paid","Arrears","Partially Paid","Unpaid"].map(a=>({value:a,label:a})),{value:"unprinted",label:"No recorded print requests"}];function ze(){var V,B,H;const{role:a}=W(),[n,o]=h.useState(""),[i,b]=h.useState("shop_id:ASC"),[d,x]=h.useState(""),[g,p]=h.useState("all"),[f,v]=h.useState({}),[t,r]=h.useState(null),[l,A]=h.useState(""),[w,S]=h.useState(null),N=h.useRef(!1),_=h.useRef(!0);h.useEffect(()=>(_.current=!0,()=>{_.current=!1}),[]);const T=h.useCallback(s=>oe({search:d,status:g,month:n},s),[d,g,n]),c=se(JSON.stringify([d,g,n]),T,250),R=Y(((V=c.data)==null?void 0:V.invoices)||[],i,["total_amount","total_paid"]),I=((B=c.data)==null?void 0:B.totalItems)||0,C=Object.keys(f),y=Object.values(f),O=["admin","superadmin"].includes(a);function L(s){v(m=>{const F=typeof s=="function"?s(Object.keys(m)):s,k=new Map([...Object.entries(m),...R.map(j=>[$(j.invoice_id),j])]);return Object.fromEntries(F.filter(j=>k.has(j)).map(j=>[j,structuredClone(k.get(j))]))})}function z(s,m){s(m),v({})}function U(s){N.current||!c.data||!y.length||s==="print"&&!O||r({kind:s,rows:structuredClone(y)})}async function G(){const s=t;if(!(N.current||!s)&&!(s.kind==="print"&&!O)){N.current=!0,A(s.kind),S(null);try{if(s.kind==="print"){const m=await ue(s.rows);_.current&&(S({kind:"print",message:m.message,rows:m.results}),m.results.length&&(v({}),c.retry()))}else{const m=await le(s.rows);if(_.current){S({kind:"email",message:"Email request results. Sent means the server reported sending; recipient delivery is not confirmed. Unknown results may already have been sent. Check before sending again.",rows:m});const F=new Set(m.filter(k=>k.status==="sent").map(k=>k.invoice_id));v(k=>Object.fromEntries(Object.entries(k).filter(([j])=>!F.has(j))))}}}catch{_.current&&S({kind:s.kind,message:"The action could not be completed. Check its outcome before trying again.",rows:[]})}finally{N.current=!1,_.current&&(A(""),r(null))}}}return e.jsx("div",{children:e.jsxs("div",{className:"w-full",children:[e.jsx(Z,{title:"Invoices",description:"View and manage all invoices, payments and tenant billing information.",backTo:"/admin-dashboard",backLabel:"Back to dashboard"}),e.jsxs("div",{className:"mb-3 flex flex-wrap items-end gap-3 rounded-2xl border border-slate-200 bg-white p-3",children:[e.jsxs("label",{className:"grid w-full min-w-0 gap-2 text-sm font-semibold text-slate-700 sm:w-auto sm:flex-1",children:["Search invoices",e.jsx("input",{type:"search",value:d,disabled:!!l,onChange:s=>z(x,s.target.value),placeholder:"Shop ID, invoice ID, month, shop or tenant name",className:"min-h-12 min-w-0 rounded-xl border border-slate-300 bg-white px-3 text-base"})]}),e.jsx("fieldset",{disabled:!!l,className:"[&_button]:min-h-12 [&_button]:text-base "+(l?"opacity-60":""),children:e.jsx(ee,{label:"Invoice filter",value:g,onChange:s=>{N.current||z(p,s)},options:he})}),e.jsx(X,{value:i,onChange:s=>z(b,s),disabled:!!l,fields:[["shop_id","Shop ID"],["invoice_id","Invoice ID"],["Shop.Tenant.name","Tenant name"],["total_amount","Total amount",!0],["total_paid","Payments",!0],["status","Status"]]}),e.jsxs("label",{className:"grid gap-2 text-sm font-semibold text-slate-700",children:["Invoice month",e.jsx("input",{type:"month","aria-label":"Invoice month",value:n||((H=c.data)==null?void 0:H.month)||"",disabled:!!l,onChange:s=>z(o,s.target.value),className:"min-h-12 rounded-xl border border-slate-300 bg-white px-3 text-base"})]}),e.jsx("button",{disabled:!!l||c.loading,className:P,onClick:()=>{o(""),v({}),c.retry()},children:"Latest month"}),e.jsx("button",{disabled:!!l||c.loading,onClick:()=>{L([]),c.retry()},className:P,children:"Refresh"})]}),w&&e.jsxs("section",{role:"status","aria-label":"Action results",className:"mb-4 rounded-xl border border-slate-200 bg-white p-4 text-sm",children:[e.jsx("p",{children:w.message}),w.rows.length>0&&e.jsxs(e.Fragment,{children:[e.jsx("p",{className:"mt-2 font-medium",children:Object.entries(w.rows.reduce((s,m)=>({...s,[m.status]:(s[m.status]||0)+1}),{})).map(([s,m])=>s+": "+m).join(" · ")}),e.jsx("div",{className:"mt-3 max-h-48 overflow-auto",tabIndex:0,role:"region","aria-label":"Per-invoice action results",children:e.jsxs("table",{className:"w-full text-left text-xs",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{scope:"col",className:"p-2",children:"Invoice"}),e.jsx("th",{scope:"col",className:"p-2",children:"Result"}),e.jsx("th",{scope:"col",className:"p-2",children:"Details"})]})}),e.jsx("tbody",{children:w.rows.map(s=>e.jsxs("tr",{children:[e.jsx("th",{scope:"row",className:"p-2",children:s.invoice_id}),e.jsx("td",{className:"p-2",children:s.status}),e.jsx("td",{className:"p-2",children:s.message||(s.status==="recorded"?"Counter request recorded; physical printing not confirmed.":"Check counter status before another print request.")})]},s.invoice_id))})]})})]})]}),c.loading&&e.jsx("p",{role:"status",className:"rounded-xl bg-white p-6 text-sm",children:"Loading invoices…"}),c.error&&e.jsxs("div",{role:"alert",className:"rounded-xl bg-red-50 p-4",children:[e.jsx("p",{children:c.error}),e.jsx("p",{className:"mt-1 text-sm",children:"Invoice data could not be refreshed. Any action results above remain valid."}),e.jsx("button",{className:P+" mt-3",onClick:c.retry,children:"Try again"})]}),c.data&&e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"mb-3 flex flex-wrap items-center justify-between gap-3 rounded-xl border border-emerald-200 bg-emerald-50 px-4 py-3",children:[e.jsxs("p",{className:"text-base font-semibold text-emerald-950",children:[y.length," selected · ",I," matching invoices",c.data.month?" · "+c.data.month:""]}),e.jsxs("div",{className:"flex flex-wrap gap-2",children:[e.jsx("button",{disabled:!!l||!C.length,className:P,onClick:()=>L([]),children:"Clear selection"}),O&&e.jsxs("button",{disabled:!!l||!y.length,className:P+" border-emerald-800! bg-emerald-800! text-white! hover:bg-emerald-900!",onClick:()=>U("print"),children:[e.jsx(re,{size:16,"aria-hidden":"true"}),"Print selected"]}),e.jsxs("button",{disabled:!!l||!y.length,className:P+" border-blue-200! text-blue-900!",onClick:()=>U("email"),children:[e.jsx(ie,{size:16,"aria-hidden":"true"}),"Email selected"]})]})]}),e.jsx(ce,{rows:R,selected:C,setSelected:L,busy:!!l},d+"|"+g+"|"+(c.data.month||"empty"))]}),e.jsx(te,{open:!!t,title:(t==null?void 0:t.kind)==="print"?"Print selected invoices":"Email selected invoices",confirmText:(t==null?void 0:t.kind)==="print"?"Prepare print":"Send email",busy:!!l,onClose:()=>r(null),onConfirm:G,children:t&&e.jsxs(e.Fragment,{children:[e.jsxs("p",{children:[t.rows.length," selected invoice(s)"]}),e.jsx("p",{className:"mt-2 max-h-40 overflow-auto break-words",tabIndex:0,"aria-label":"Selected invoice IDs",children:t.rows.map(s=>$(s.invoice_id)).join(", ")}),e.jsx("p",{className:"mt-2",children:t.kind==="print"?"Customer and Office copies will be prepared. Counter requests can increase even if you cancel the print dialog.":"This sends emails using the current server service. Check previous results before sending again; duplicate delivery protection is not available."})]})})]})})}export{ze as default};
