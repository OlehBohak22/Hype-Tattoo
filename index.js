import"./assets/main-Cmyoo3Ii.js";import e,{useState as n,useEffect as m}from"https://cdn.skypack.dev/react";import{render as d}from"https://cdn.skypack.dev/react-dom";import"./assets/vendor-C1LSAVFF.js";const t="ラドクリフマラソンわたしワタシんょンョたばこタバコとうきょうトウキョウ0123456789±!@#$%^&*()_+ABCDEFGHIJKLMNOPQRSTUVWXYZ",p=({srOnlyTextProp:a})=>{const[r,u]=n(a),[c,E]=n(.15),[o,f]=n(!1);return m(()=>{document.body.dataset.explode=o},[o]),e.createElement(e.Fragment,null,e.createElement("button",{className:"join-link",style:{"--speed":c}},r.split("").map((s,l)=>e.createElement("span",{key:l,"data-char":s,style:{"--index":l,"--char-1":`"${t[Math.floor(Math.random()*t.length)]}"`,"--char-2":`"${t[Math.floor(Math.random()*t.length)]}"`,"--char-3":`"${t[Math.floor(Math.random()*t.length)]}"`}},s)),e.createElement("span",{className:"sr-only"},a)),e.createElement("button",{className:"dummy"},r))},h=document.querySelectorAll("[data-sr-text]");h.forEach(a=>{const r=a.getAttribute("data-sr-text");d(e.createElement(p,{srOnlyTextProp:r}),a)});
//# sourceMappingURL=index.js.map
