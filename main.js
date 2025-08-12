
console.log(navigator.userAgent);
document.getElementById('demo2').innerHTML=navigator.userAgent
let data = window.localStorage.getItem('salah2')
console.log(data);

if (!data) {
  window.localStorage.setItem('salah2','sssssssssssssssssssss')
}
data = window.localStorage.getItem('salah2')
document.getElementById('demo2').innerHTML=`${navigator.userAgent } - ${data}`

// window.localStorage.getItem

// const regex = /(lang=)(\w\w)/gm;

// // Alternative syntax using RegExp constructor
// // const regex = new RegExp('(lang=)(\\w\\w)', 'gm')

// const str = `'?lang=en%h=f'`;

// // Reset `lastIndex` if this regex is defined globally
// // regex.lastIndex = 0;

// // let m;
// // m = regex.exec(str)
// // console.log(m[0].replace('lang=',''));

// // window.localStorage.setItem('')
// // document.querySelector().click()

// const a = window.localStorage.getItem("s");
// const a2 = JSON.stringify();
// setTimeout(() => {});
// for (let index = 0; index < Array.from({ length: 3 }).length; index++) {
//   console.log("ssssssssssssssssssss");

//   // document.querySelector(`[section-id="${sliderId}"] .slick-next.slick-arrow`).
//   // document.getElementById().style()
//   Number.parseInt("");
// }

// // while ((m = regex.exec(str)) !== null) {
// //     // This is necessary to avoid infinite loops with zero-width matches
// //     if (m.index === regex.lastIndex) {
// //         regex.lastIndex++;
// //     }

// //     // The result can be accessed through the `m`-variable.
// //     m.forEach((match, groupIndex) => {
// //         console.log(`Found match, group ${groupIndex}: ${match}`);
// //     });
// // }

// // const productt = {
// //   id: "83e22d5b-c5c0-468d-af3d-6bad6c4de7fd",

// //   metafields: [
// //     {
// //       id: "1aa6ee67-942a-464b-b07a-676768a31185",
// //       name: {
// //         en: "",
// //         ar: "التايمر-النهاية y-M-d-h-m-s",
// //       },
// //       slug: "timer_end",
// //       data_type: "text",
// //       display_order: 10,
// //       value: {
// //         ar: "2025-8-8-20:30:1",
// //         en: null,
// //       },
// //     },
// //     {
// //       id: "86588cc8-1835-4231-b0d4-cae05b94765a",
// //       name: {
// //         en: "",
// //         ar: "التايمر-البداية y-M-d-h-m-s",
// //       },
// //       slug: "timer_start",
// //       data_type: "text",
// //       display_order: 9,
// //       value: {
// //         ar: "2025-8-7-15:30:1",
// //         en: null,
// //       },
// //     },
// //     {
// //       id: "da95d289-db43-40d0-9531-6c1691605201",
// //       name: {
// //         en: "",
// //         ar: "تايمر - نشط 1 | غير نشط 0",
// //       },
// //       slug: "timer_active",
// //       data_type: "number",
// //       display_order: 4,
// //       value: "1",
// //     },
// //     {
// //       id: "bf70d9b4-b1c6-466c-8ab0-e1a411f5adfb",
// //       name: {
// //         en: "",
// //         ar: "يمكن تقسيط المنتج على x شهور",
// //       },
// //       slug: "can_taqseet",
// //       data_type: "number",
// //       display_order: 1,
// //       value: "10",
// //     },
// //   ],
// //   meta: null,
// //   related_products_settings: "AUTO_GENERATED",
// //   related_products_title: null,
// //   badge: null,
// //   group_products: null,
// //   stocks: [
// //     {
// //       id: "6608388d-ca41-40a0-8103-9f746570f553",
// //       location: {
// //         id: "a43e026e-9a86-4922-b5c4-da76f8a57872",
// //         name: "الرئيسي",
// //         type: "PHYSICAL",
// //         full_address:
// //           "RQNB2688, 2688 Abdul Hamid At Tarabulsi, 7284، حي النسيم الغربي، Riyadh 14231, Saudi Arabia",
// //       },
// //       available_quantity: 100,
// //       is_infinite: false,
// //     },
// //   ],
// // };

// // if (condition) {

// // } else {

// // }

// // const a = document.querySelector(`[section_id="1"] [data-pid="1"]`)
// // console.log(a);
// // a.style.backgroundColor='red'

// // // a.forEach(e=>{
// // // })

// // // function doTimer() {
// // //   let x;

// // // //   const elements = document.querySelectorAll(`[data-pid]="${}"`)
// // //   function calTimer(endTimeString, id) {
// // //     x = setInterval(function () {
// // //       const now = new Date().getTime();
// // //       // Find the distance between now and the count down date
// // //       const countDownDate = new Date(endTimeString).getTime();
// // //       //   const id = "demo1";

// // //       const distance = countDownDate - now;

// // //       if (distance < 0 && x) {
// // //         clearInterval(x);
// // //         return;
// // //       }

// // //       // Time calculations for days, hours, minutes and seconds
// // //       const days = Math.floor(distance / (1000 * 60 * 60 * 24));
// // //       const hours = Math.floor(
// // //         (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
// // //       );
// // //       const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
// // //       const seconds = Math.floor((distance % (1000 * 60)) / 1000);
// // //       const element = document.getElementById(id);
// // //       element.style.display='none'

// // //       //   document.getElementById(id).innerHTML =

// // //       const text = `ينتهي ${days * 24 + hours}:${minutes}:${seconds} ` + "";
// // //       if (element) {
// // //         element.innerHTML = `
// // //           <div>${text}</div>
// // //           `;
// // //       }
// // //     }, 1000);
// // //   }
// // //   const product = productt;
// // //   //   const product = {{ product | json_encode() | raw }}
// // //   const isActive =
// // //     product.metafields.find((v) => v.slug == "timer_active")?.value == "1";
// // //   if (!isActive) {
// // //     return;
// // //   }

// // //   const stT = product.metafields.find((v) => v.slug == "timer_start");
// // //   if (stT) {
// // //     const now = new Date().getTime();
// // //     const startTime = new Date(stT.value.ar).getTime();
// // //     const distance = startTime - now;
// // //     if (distance < 0) {
// // //       const endT = product.metafields.find((v) => v.slug == "timer_end");
// // //       if (endT) {
// // //         const endTime = new Date(endT.value.ar).getTime();
// // //         const distance2 = endTime - now;
// // //         if (distance2 > 0) {
// // //           calTimer(endT.value.ar, "demo1");
// // //           //   console.log("sssssssssssssss", endTime);
// // //         }
// // //       }
// // //     }
// // //   }
// // // }
// // // doTimer();
