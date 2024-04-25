"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[624],{5680:(e,t,n)=>{n.d(t,{xA:()=>u,yg:()=>y});var o=n(6540);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var g=o.createContext({}),s=function(e){var t=o.useContext(g),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=s(e.components);return o.createElement(g.Provider,{value:t},e.children)},c="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},f=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,g=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=s(n),f=r,y=c["".concat(g,".").concat(f)]||c[f]||p[f]||i;return n?o.createElement(y,a(a({ref:t},u),{},{components:n})):o.createElement(y,a({ref:t},u))}));function y(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,a=new Array(i);a[0]=f;var l={};for(var g in t)hasOwnProperty.call(t,g)&&(l[g]=t[g]);l.originalType=e,l[c]="string"==typeof e?e:r,a[1]=l;for(var s=2;s<i;s++)a[s]=n[s];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}f.displayName="MDXCreateElement"},8715:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>g,default:()=>y,frontMatter:()=>l,metadata:()=>s,toc:()=>c});var o=n(8168),r=n(8587),i=(n(6540),n(5680)),a=["components"],l={id:"tofu.logging.recipes",title:"Recipe list"},g="Recipes",s={unversionedId:"tofu.logging.recipes",id:"tofu.logging.recipes",title:"Recipe list",description:"Here is the list of ways how one can use tofu.logging",source:"@site/../docs/tofu.logging.recipes.md",sourceDirName:".",slug:"/tofu.logging.recipes",permalink:"/tofu/docs/tofu.logging.recipes",draft:!1,tags:[],version:"current",lastUpdatedBy:"\u0410\u043d\u0442\u043e\u043d \u0412\u043e\u0438\u0306\u0446\u0438\u0448\u0435\u0432\u0441\u043a\u0438\u0438\u0306",lastUpdatedAt:1631546433,formattedLastUpdatedAt:"Sep 13, 2021",frontMatter:{id:"tofu.logging.recipes",title:"Recipe list"},sidebar:"docs",previous:{title:"LogAnnotation",permalink:"/tofu/docs/tofu.logging.annotation"},next:{title:"The simplest form",permalink:"/tofu/docs/tofu.logging.recipes.simple"}},u={},c=[],p={toc:c},f="wrapper";function y(e){var t=e.components,n=(0,r.A)(e,a);return(0,i.yg)(f,(0,o.A)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.yg)("h1",{id:"recipes"},"Recipes"),(0,i.yg)("p",null,"Here is the list of ways how one can use ",(0,i.yg)("inlineCode",{parentName:"p"},"tofu.logging")),(0,i.yg)("p",null,"For any of the recipes you are going to need three things:"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"ensure all the data types which you want to log have instances\nof ",(0,i.yg)("a",{parentName:"li",href:"/tofu/docs/tofu.logging.main.entities#typeclass-loggablea"},"Loggable typeclass"),";"),(0,i.yg)("li",{parentName:"ul"},"import syntax: ",(0,i.yg)("inlineCode",{parentName:"li"},"import tofu.syntax.logging._")),(0,i.yg)("li",{parentName:"ul"},"provide correct logback configuration (except when you are using ",(0,i.yg)("inlineCode",{parentName:"li"},"tofu.logging")," with your own implementation) \u2014 you\ncan find the description ",(0,i.yg)("a",{parentName:"li",href:"/tofu/docs/tofu.logging.layouts"},"here")," and the\nexample ",(0,i.yg)("a",{parentName:"li",href:"https://github.com/tofu-tf/tofu/tree/examples/src/main/resources/logback.groovy"},"here"),".")),(0,i.yg)("p",null,"Recipes are:"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("a",{parentName:"li",href:"/tofu/docs/tofu.logging.recipes.simple"},"Simple logging")," \u2014 when you just need to make the task done"),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("a",{parentName:"li",href:"/tofu/docs/tofu.logging.recipes.service"},"Service logging")," \u2014 same as latter but with a bit less code to write"),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("a",{parentName:"li",href:"/tofu/docs/tofu.logging.recipes.auto"},"Automatic logging")," derivation \u2014 when you don't even want to write log messages and your apps' modularization\nrocks"),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("a",{parentName:"li",href:"/tofu/docs/tofu.logging.recipes.custom"},"Custom logs")," \u2014 when you need to do something else when you log")),(0,i.yg)("p",null,"And of course you can mix and match all of these to build what you want."))}y.isMDXComponent=!0}}]);