(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{"/KaX":function(e,t,o){"use strict";o.d(t,"c",function(){return l}),o.d(t,"b",function(){return s}),o.d(t,"a",function(){return c});var r=o("VgLe"),l=function(e){return{type:r.c,payload:e}},s=function(e){return{type:r.b,payload:e}},c=function(){return{type:r.a}}},Nq2C:function(e,t,o){"use strict";o.r(t);var r=o("J4zp"),l=o.n(r),s=o("q1tI"),c=o.n(s),n=o("/MKj");var y={setMode:o("/KaX").c};t.default=Object(n.b)(function(e){return{mode:e.theme.mode,color:e.theme.color}},y)(function(o){var e=Object(s.useState)(o.mode),t=l()(e,2),r=(t[0],t[1]);Object(s.useEffect)(function(){"dark"===o.mode&&document.getElementsByClassName("toggle-dark-mode")[0].click()},[]);return c.a.createElement("input",{className:"toggle-dark-mode",type:"checkbox",onClick:function(e){var t=document.documentElement;e.target.checked?(o.setMode("dark"),r("dark"),t.style.setProperty("--main-color","#1e1e1e"),t.style.setProperty("--bg-color","--color-accent"),t.style.setProperty("--font-color","white"),t.style.setProperty("--link-color","#ffffff"),t.style.setProperty("--border-color","hsl(0,0%,35%)"),t.style.setProperty("--title-color","#f2f3f5"),t.style.setProperty("--text","#f2f3f5"),t.style.setProperty("--bg-input-color","#3d4247"),t.style.setProperty("--nav-hover","hsla(0,0%,22%,.9)"),""===o.color&&(t.style.setProperty("--color-accent","#7b8ed8"),t.style.setProperty("--em-font-color","#7b8ed8"))):(o.setMode("light"),r("light"),t.style.setProperty("--main-color","#ffffff"),t.style.setProperty("--bg-color","hsl(0,0%,96%)"),t.style.setProperty("--font-color","hsl(0,0%,22%)"),t.style.setProperty("--link-color","hsl(0,0%,22%)"),t.style.setProperty("--border-color","hsl(0,0%,88%)"),t.style.setProperty("--title-color","hsl(0,0%,44%)"),t.style.setProperty("--text","hsl(0,0%,11%)"),t.style.setProperty("--bg-input-color","hsl(0,0%,96%)"),t.style.setProperty("--nav-hover","hsla(0,0%,0%,.1)"),""===o.color&&(t.style.setProperty("--color-accent","hsl(222, 53%, 50%)"),t.style.setProperty("--em-font-color","hsl(222, 53%, 50%)")))}})})}}]);