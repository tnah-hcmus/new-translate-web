(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{"/KaX":function(e,t,r){"use strict";r.d(t,"c",function(){return l}),r.d(t,"b",function(){return s}),r.d(t,"a",function(){return c});var o=r("VgLe"),l=function(e){return{type:o.c,payload:e}},s=function(e){return{type:o.b,payload:e}},c=function(){return{type:o.a}}},Nq2C:function(e,t,r){"use strict";r.r(t);var o=r("J4zp"),l=r.n(o),s=r("q1tI"),c=r.n(s),y=r("/MKj");var n={setMode:r("/KaX").c};t.default=Object(y.b)(function(e){return{mode:e.theme.mode,color:e.theme.color}},n)(function(r){var e=Object(s.useState)(r.mode),t=l()(e,2),o=(t[0],t[1]);Object(s.useEffect)(function(){"dark"===r.mode&&document.getElementsByClassName("toggle-dark-mode")[0].click()},[]);return c.a.createElement("input",{className:"toggle-dark-mode",type:"checkbox",onClick:function(e){var t=document.documentElement;e.target.checked?(r.setMode("dark"),o("dark"),t.style.setProperty("--main-color","#1e1e1e"),t.style.setProperty("--bg-color","--color-accent"),t.style.setProperty("--font-color","white"),t.style.setProperty("--link-color","#ffffff"),t.style.setProperty("--border-color","hsl(0,0%,35%)"),t.style.setProperty("--title-color","#f2f3f5"),t.style.setProperty("--text","#f2f3f5"),t.style.setProperty("--bg-input-color","#3d4247"),t.style.setProperty("--nav-hover","hsla(0,0%,22%,.9)"),t.style.setProperty("--overlay","rgba(64, 61, 61, 0.75)"),t.style.setProperty("--alert-overlay","rgba(0, 0, 0, 0.9)"),""===r.color&&(t.style.setProperty("--color-accent","#7b8ed8"),t.style.setProperty("--em-font-color","#7b8ed8"))):(r.setMode("light"),o("light"),t.style.setProperty("--main-color","#ffffff"),t.style.setProperty("--bg-color","hsl(0,0%,96%)"),t.style.setProperty("--font-color","hsl(0,0%,22%)"),t.style.setProperty("--link-color","hsl(0,0%,22%)"),t.style.setProperty("--border-color","hsl(0,0%,88%)"),t.style.setProperty("--title-color","hsl(0,0%,44%)"),t.style.setProperty("--text","hsl(0,0%,11%)"),t.style.setProperty("--bg-input-color","hsl(0,0%,96%)"),t.style.setProperty("--nav-hover","hsla(0,0%,0%,.1)"),t.style.setProperty("--overlay","rgba(255, 255, 255, 0.75)"),t.style.setProperty("--alert-overlay","rgba(255, 255, 255, 0.9)"),""===r.color&&(t.style.setProperty("--color-accent","hsl(222, 53%, 50%)"),t.style.setProperty("--em-font-color","hsl(222, 53%, 50%)")))}})})}}]);