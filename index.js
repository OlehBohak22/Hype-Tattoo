import"./assets/main-1RKOlH-K.js";import e,{useState as n,useEffect as m}from"https://cdn.skypack.dev/react";import{render as p}from"https://cdn.skypack.dev/react-dom";import"./assets/vendor-C1LSAVFF.js";const t="ラドクリフマラソンわたしワタシんょンョたばこタバコとうきょうトウキョウ0123456789±!@#$%^&*()_+ABCDEFGHIJKLMNOPQRSTUVWXYZ",d=({srOnlyTextProp:a})=>{const[r,u]=n(a),[c,E]=n(.15),[o,f]=n(!1);return m(()=>{document.body.dataset.explode=o},[o]),e.createElement(e.Fragment,null,e.createElement("button",{className:"join-link",style:{"--speed":c}},r.split("").map((s,l)=>e.createElement("span",{key:l,"data-char":s,style:{"--index":l,"--char-1":`"${t[Math.floor(Math.random()*t.length)]}"`,"--char-2":`"${t[Math.floor(Math.random()*t.length)]}"`,"--char-3":`"${t[Math.floor(Math.random()*t.length)]}"`}},s)),e.createElement("span",{className:"sr-only"},a)),e.createElement("button",{className:"dummy"},r),e.createElement("span",{className:"corner-top-right"}),e.createElement("span",{className:"corner-bottom-left"}))},h=document.querySelectorAll("[data-sr-text]");h.forEach(a=>{const r=a.getAttribute("data-sr-text");p(e.createElement(d,{srOnlyTextProp:r}),a)});
//# sourceMappingURL=index.js.map
