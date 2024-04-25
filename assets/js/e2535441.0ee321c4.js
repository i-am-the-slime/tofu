"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[9488],{5680:(e,t,n)=>{n.d(t,{xA:()=>g,yg:()=>f});var o=n(6540);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=o.createContext({}),s=function(e){var t=o.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},g=function(e){var t=s(e.components);return o.createElement(c.Provider,{value:t},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,g=a(e,["components","mdxType","originalType","parentName"]),u=s(n),m=r,f=u["".concat(c,".").concat(m)]||u[m]||p[m]||i;return n?o.createElement(f,l(l({ref:t},g),{},{components:n})):o.createElement(f,l({ref:t},g))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=m;var a={};for(var c in t)hasOwnProperty.call(t,c)&&(a[c]=t[c]);a.originalType=e,a[u]="string"==typeof e?e:r,l[1]=a;for(var s=2;s<i;s++)l[s]=n[s];return o.createElement.apply(null,l)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},6578:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>g,contentTitle:()=>c,default:()=>f,frontMatter:()=>a,metadata:()=>s,toc:()=>u});var o=n(8168),r=n(8587),i=(n(6540),n(5680)),l=["components"],a={id:"tofu.logging.recipes.custom",title:"Custom Logging implementation"},c=void 0,s={unversionedId:"tofu.logging.recipes.custom",id:"tofu.logging.recipes.custom",title:"Custom Logging implementation",description:"TODO yet to be implemented",source:"@site/../docs/tofu.logging.recipes.custom.md",sourceDirName:".",slug:"/tofu.logging.recipes.custom",permalink:"/tofu/docs/tofu.logging.recipes.custom",draft:!1,tags:[],version:"current",lastUpdatedBy:"\u0410\u043d\u0442\u043e\u043d \u0412\u043e\u0438\u0306\u0446\u0438\u0448\u0435\u0432\u0441\u043a\u0438\u0438\u0306",lastUpdatedAt:1631546433,formattedLastUpdatedAt:"Sep 13, 2021",frontMatter:{id:"tofu.logging.recipes.custom",title:"Custom Logging implementation"}},g={},u=[{value:"TODO yet to be implemented",id:"todo-yet-to-be-implemented",level:2},{value:"Your own specific logs",id:"your-own-specific-logs",level:2}],p={toc:u},m="wrapper";function f(e){var t=e.components,n=(0,r.A)(e,l);return(0,i.yg)(m,(0,o.A)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.yg)("h2",{id:"todo-yet-to-be-implemented"},"TODO yet to be implemented"),(0,i.yg)("h2",{id:"your-own-specific-logs"},"Your own specific logs"),(0,i.yg)("p",null,"As Logs & Logging are just an interfaces, tofu.logging allows you to use your own backend for logs, e.g. to send them to Clickhouse. To do this you'll need to\nimplement ",(0,i.yg)("inlineCode",{parentName:"p"},"Logs")," trait. The rest is still handled by tofu."),(0,i.yg)("p",null,"Let's say you have this clickhouse client:"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-scala"},"trait ClickhouseClient[F[_]] {\n  def send[A](data: A): F[Unit]\n\n  def initTable(name: String): F[Unit]\n}\n\n")),(0,i.yg)("p",null,"You'll need to implement only one method to create Logs:"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-scala"},'def clickhouseLogs[F[_]](client: ClickhouseClient[F])(logs: Logs[F, F]) =\n  new Logs[F, F] {\n    def byName(name: String): F[Logging[F]] =\n      for {\n        _ <- client.initTable("logs")\n        logging = logs.byName(name)\n      } yield logging //todo how tf to implement this nicely?\n  }\n')))}f.isMDXComponent=!0}}]);