(self.webpackChunkcurrency=self.webpackChunkcurrency||[]).push([[413],{6413:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>s});var n=a(3038),c=a.n(n),r=a(7294),l=r.lazy((function(){return Promise.all([a.e(883),a.e(361)]).then(a.bind(a,8139))}));const s=function(e){var t,a=e.item,n=(0,r.useState)(30),s=c()(n,2),i=s[0],m=s[1];return r.createElement("div",{className:"Rates-item"},r.createElement("div",{className:"Rates-item-flag"},r.createElement("div",{className:"currency-flag currency-flag-xl currency-flag-".concat(a.code.toLowerCase()," shadow")}),r.createElement("div",{className:"Rates-item-desc"},r.createElement("p",{className:"Rates-full-name"},(t=a.currency).length>20?t.split("").slice(0,10).join("")+"...":t),r.createElement("p",{className:"Rates-rate"},"1 ",a.code," = ",a.mid.toFixed(4)," PLN"))),r.createElement("div",{className:"Rates-item-chart"},r.createElement("div",{className:"Rates-item-buttons"},r.createElement("button",{onClick:function(){return m(30)}},"30 dni"),r.createElement("button",{onClick:function(){return m(60)}},"60 dni"),r.createElement("button",{onClick:function(){return m(90)}},"90 dni")),r.createElement(r.Suspense,{fallback:r.createElement("div",null,"...")},r.createElement(l,{days:i,currency:a.code}))))}}}]);