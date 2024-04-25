"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[8401],{4439:(e,t,a)=>{a.r(t),a.d(t,{default:()=>me});var n=a(6540),l=a(9817),r=a(2439),o=n.createContext(null);function i(e){var t=e.children,a=function(e){return(0,n.useMemo)((function(){return{metadata:e.metadata,frontMatter:e.frontMatter,assets:e.assets,contentTitle:e.contentTitle,toc:e.toc}}),[e])}(e.content);return n.createElement(o.Provider,{value:a},t)}function s(){var e=(0,n.useContext)(o);if(null===e)throw new r.dV("DocProvider");return e}function c(){var e,t=s(),a=t.metadata,r=t.frontMatter,o=t.assets;return n.createElement(l.be,{title:a.title,description:a.description,keywords:r.keywords,image:null!=(e=o.image)?e:r.image})}var d=a(53),m=a(2216),u=a(8168),v=a(3230),b=a(3555);function p(e){var t=e.previous,a=e.next;return n.createElement("nav",{className:"pagination-nav docusaurus-mt-lg","aria-label":(0,v.T)({id:"theme.docs.paginator.navAriaLabel",message:"Docs pages",description:"The ARIA label for the docs pagination"})},t&&n.createElement(b.A,(0,u.A)({},t,{subLabel:n.createElement(v.A,{id:"theme.docs.paginator.previous",description:"The label used to navigate to the previous doc"},"Previous")})),a&&n.createElement(b.A,(0,u.A)({},a,{subLabel:n.createElement(v.A,{id:"theme.docs.paginator.next",description:"The label used to navigate to the next doc"},"Next"),isNext:!0})))}function f(){var e=s().metadata;return n.createElement(p,{previous:e.previous,next:e.next})}var h=a(7639),E=a(5358),g=a(4721),A=a(8630),L=a(2780),C=a(3403);var N={unreleased:function(e){var t=e.siteTitle,a=e.versionMetadata;return n.createElement(v.A,{id:"theme.docs.versions.unreleasedVersionLabel",description:"The label used to tell the user that he's browsing an unreleased doc version",values:{siteTitle:t,versionLabel:n.createElement("b",null,a.label)}},"This is unreleased documentation for {siteTitle} {versionLabel} version.")},unmaintained:function(e){var t=e.siteTitle,a=e.versionMetadata;return n.createElement(v.A,{id:"theme.docs.versions.unmaintainedVersionLabel",description:"The label used to tell the user that he's browsing an unmaintained doc version",values:{siteTitle:t,versionLabel:n.createElement("b",null,a.label)}},"This is documentation for {siteTitle} {versionLabel}, which is no longer actively maintained.")}};function _(e){var t=N[e.versionMetadata.banner];return n.createElement(t,e)}function x(e){var t=e.versionLabel,a=e.to,l=e.onClick;return n.createElement(v.A,{id:"theme.docs.versions.latestVersionSuggestionLabel",description:"The label used to tell the user to check the latest version",values:{versionLabel:t,latestVersionLink:n.createElement("b",null,n.createElement(E.A,{to:a,onClick:l},n.createElement(v.A,{id:"theme.docs.versions.latestVersionLinkLabel",description:"The label used for the latest version suggestion link label"},"latest version")))}},"For up-to-date documentation, see the {latestVersionLink} ({versionLabel}).")}function T(e){var t,a=e.className,l=e.versionMetadata,r=(0,h.A)().siteConfig.title,o=(0,g.vT)({failfast:!0}).pluginId,i=(0,L.g1)(o).savePreferredVersionName,s=(0,g.HW)(o),c=s.latestDocSuggestion,m=s.latestVersionSuggestion,u=null!=c?c:(t=m).docs.find((function(e){return e.id===t.mainDocId}));return n.createElement("div",{className:(0,d.A)(a,A.G.docs.docVersionBanner,"alert alert--warning margin-bottom--md"),role:"alert"},n.createElement("div",null,n.createElement(_,{siteTitle:r,versionMetadata:l})),n.createElement("div",{className:"margin-top--md"},n.createElement(x,{versionLabel:m.label,to:u.path,onClick:function(){return i(m.name)}})))}function k(e){var t=e.className,a=(0,C.r)();return a.banner?n.createElement(T,{className:t,versionMetadata:a}):null}function H(e){var t=e.className,a=(0,C.r)();return a.badge?n.createElement("span",{className:(0,d.A)(t,A.G.docs.docVersionBadge,"badge badge--secondary")},n.createElement(v.A,{id:"theme.docs.versionBadge.label",values:{versionLabel:a.label}},"Version: {versionLabel}")):null}function U(e){var t=e.lastUpdatedAt,a=e.formattedLastUpdatedAt;return n.createElement(v.A,{id:"theme.lastUpdated.atDate",description:"The words used to describe on which date a page has been last updated",values:{date:n.createElement("b",null,n.createElement("time",{dateTime:new Date(1e3*t).toISOString()},a))}}," on {date}")}function y(e){var t=e.lastUpdatedBy;return n.createElement(v.A,{id:"theme.lastUpdated.byUser",description:"The words used to describe by who the page has been last updated",values:{user:n.createElement("b",null,t)}}," by {user}")}function w(e){var t=e.lastUpdatedAt,a=e.formattedLastUpdatedAt,l=e.lastUpdatedBy;return n.createElement("span",{className:A.G.common.lastUpdated},n.createElement(v.A,{id:"theme.lastUpdated.lastUpdatedAtBy",description:"The sentence used to display when a page has been last updated, and by who",values:{atDate:t&&a?n.createElement(U,{lastUpdatedAt:t,formattedLastUpdatedAt:a}):"",byUser:l?n.createElement(y,{lastUpdatedBy:l}):""}},"Last updated{atDate}{byUser}"),!1)}var M=a(5911),I=a(3722);const B={lastUpdated:"lastUpdated_vwxv"};function O(e){return n.createElement("div",{className:(0,d.A)(A.G.docs.docFooterTagsRow,"row margin-bottom--sm")},n.createElement("div",{className:"col"},n.createElement(I.A,e)))}function V(e){var t=e.editUrl,a=e.lastUpdatedAt,l=e.lastUpdatedBy,r=e.formattedLastUpdatedAt;return n.createElement("div",{className:(0,d.A)(A.G.docs.docFooterEditMetaRow,"row")},n.createElement("div",{className:"col"},t&&n.createElement(M.A,{editUrl:t})),n.createElement("div",{className:(0,d.A)("col",B.lastUpdated)},(a||l)&&n.createElement(w,{lastUpdatedAt:a,formattedLastUpdatedAt:r,lastUpdatedBy:l})))}function P(){var e=s().metadata,t=e.editUrl,a=e.lastUpdatedAt,l=e.formattedLastUpdatedAt,r=e.lastUpdatedBy,o=e.tags,i=o.length>0,c=!!(t||a||r);return i||c?n.createElement("footer",{className:(0,d.A)(A.G.docs.docFooter,"docusaurus-mt-lg")},i&&n.createElement(O,{tags:o}),c&&n.createElement(V,{editUrl:t,lastUpdatedAt:a,lastUpdatedBy:r,formattedLastUpdatedAt:l})):null}var S=a(4549),D=a(1507),G=a(8587);const R={tocCollapsibleButton:"tocCollapsibleButton_TO0P",tocCollapsibleButtonExpanded:"tocCollapsibleButtonExpanded_MG3E"};var F=["collapsed"];function j(e){var t=e.collapsed,a=(0,G.A)(e,F);return n.createElement("button",(0,u.A)({type:"button"},a,{className:(0,d.A)("clean-btn",R.tocCollapsibleButton,!t&&R.tocCollapsibleButtonExpanded,a.className)}),n.createElement(v.A,{id:"theme.TOCCollapsible.toggleButtonLabel",description:"The label used by the button on the collapsible TOC component"},"On this page"))}const z={tocCollapsible:"tocCollapsible_ETCw",tocCollapsibleContent:"tocCollapsibleContent_vkbj",tocCollapsibleExpanded:"tocCollapsibleExpanded_sAul"};function q(e){var t=e.toc,a=e.className,l=e.minHeadingLevel,r=e.maxHeadingLevel,o=(0,S.u)({initialState:!0}),i=o.collapsed,s=o.toggleCollapsed;return n.createElement("div",{className:(0,d.A)(z.tocCollapsible,!i&&z.tocCollapsibleExpanded,a)},n.createElement(j,{collapsed:i,onClick:s}),n.createElement(S.N,{lazy:!0,className:z.tocCollapsibleContent,collapsed:i},n.createElement(D.A,{toc:t,minHeadingLevel:l,maxHeadingLevel:r})))}const W={tocMobile:"tocMobile_ITEo"};function Y(){var e=s(),t=e.toc,a=e.frontMatter;return n.createElement(q,{toc:t,minHeadingLevel:a.toc_min_heading_level,maxHeadingLevel:a.toc_max_heading_level,className:(0,d.A)(A.G.docs.docTocMobile,W.tocMobile)})}var Z=a(8793);function J(){var e=s(),t=e.toc,a=e.frontMatter;return n.createElement(Z.A,{toc:t,minHeadingLevel:a.toc_min_heading_level,maxHeadingLevel:a.toc_max_heading_level,className:A.G.docs.docTocDesktop})}var K=a(5225),Q=a(3903);function X(e){var t,a,l,r,o=e.children,i=(t=s(),a=t.metadata,l=t.frontMatter,r=t.contentTitle,l.hide_title||void 0!==r?null:a.title);return n.createElement("div",{className:(0,d.A)(A.G.docs.docMarkdown,"markdown")},i&&n.createElement("header",null,n.createElement(K.A,{as:"h1"},i)),n.createElement(Q.A,null,o))}var $=a(229),ee=a(260),te=a(8180);function ae(e){return n.createElement("svg",(0,u.A)({viewBox:"0 0 24 24"},e),n.createElement("path",{d:"M10 19v-5h4v5c0 .55.45 1 1 1h3c.55 0 1-.45 1-1v-7h1.7c.46 0 .68-.57.33-.87L12.67 3.6c-.38-.34-.96-.34-1.34 0l-8.36 7.53c-.34.3-.13.87.33.87H5v7c0 .55.45 1 1 1h3c.55 0 1-.45 1-1z",fill:"currentColor"}))}const ne={breadcrumbHomeIcon:"breadcrumbHomeIcon_YNFT"};function le(){var e=(0,te.A)("/");return n.createElement("li",{className:"breadcrumbs__item"},n.createElement(E.A,{"aria-label":(0,v.T)({id:"theme.docs.breadcrumbs.home",message:"Home page",description:"The ARIA label for the home page in the breadcrumbs"}),className:"breadcrumbs__link",href:e},n.createElement(ae,{className:ne.breadcrumbHomeIcon})))}const re={breadcrumbsContainer:"breadcrumbsContainer_Z_bl"};function oe(e){var t=e.children,a=e.href,l="breadcrumbs__link";return e.isLast?n.createElement("span",{className:l,itemProp:"name"},t):a?n.createElement(E.A,{className:l,href:a,itemProp:"item"},n.createElement("span",{itemProp:"name"},t)):n.createElement("span",{className:l},t)}function ie(e){var t=e.children,a=e.active,l=e.index,r=e.addMicrodata;return n.createElement("li",(0,u.A)({},r&&{itemScope:!0,itemProp:"itemListElement",itemType:"https://schema.org/ListItem"},{className:(0,d.A)("breadcrumbs__item",{"breadcrumbs__item--active":a})}),t,n.createElement("meta",{itemProp:"position",content:String(l+1)}))}function se(){var e=(0,$.OF)(),t=(0,ee.Dt)();return e?n.createElement("nav",{className:(0,d.A)(A.G.docs.docBreadcrumbs,re.breadcrumbsContainer),"aria-label":(0,v.T)({id:"theme.docs.breadcrumbs.navAriaLabel",message:"Breadcrumbs",description:"The ARIA label for the breadcrumbs"})},n.createElement("ul",{className:"breadcrumbs",itemScope:!0,itemType:"https://schema.org/BreadcrumbList"},t&&n.createElement(le,null),e.map((function(t,a){var l=a===e.length-1;return n.createElement(ie,{key:a,active:l,index:a,addMicrodata:!!t.href},n.createElement(oe,{href:t.href,isLast:l},t.label))})))):null}const ce={docItemContainer:"docItemContainer_Djhp",docItemCol:"docItemCol_VOVn"};function de(e){var t,a,l,r,o,i,c=e.children,u=(t=s(),a=t.frontMatter,l=t.toc,r=(0,m.l)(),o=a.hide_table_of_contents,i=!o&&l.length>0,{hidden:o,mobile:i?n.createElement(Y,null):void 0,desktop:!i||"desktop"!==r&&"ssr"!==r?void 0:n.createElement(J,null)});return n.createElement("div",{className:"row"},n.createElement("div",{className:(0,d.A)("col",!u.hidden&&ce.docItemCol)},n.createElement(k,null),n.createElement("div",{className:ce.docItemContainer},n.createElement("article",null,n.createElement(se,null),n.createElement(H,null),u.mobile,n.createElement(X,null,c),n.createElement(P,null)),n.createElement(f,null))),u.desktop&&n.createElement("div",{className:"col col--3"},u.desktop))}function me(e){var t="docs-doc-id-"+e.content.metadata.unversionedId,a=e.content;return n.createElement(i,{content:e.content},n.createElement(l.e3,{className:t},n.createElement(c,null),n.createElement(de,null,n.createElement(a,null))))}},8793:(e,t,a)=>{a.d(t,{A:()=>u});var n=a(8168),l=a(8587),r=a(6540),o=a(53),i=a(1507);const s={tableOfContents:"tableOfContents_bqdL",docItemContainer:"docItemContainer_F8PC"};var c=["className"],d="table-of-contents__link toc-highlight",m="table-of-contents__link--active";function u(e){var t=e.className,a=(0,l.A)(e,c);return r.createElement("div",{className:(0,o.A)(s.tableOfContents,"thin-scrollbar",t)},r.createElement(i.A,(0,n.A)({},a,{linkClassName:d,linkActiveClassName:m})))}},1507:(e,t,a)=>{a.d(t,{A:()=>h});var n=a(8168),l=a(8587),r=a(6540),o=a(6957),i=["parentIndex"];function s(e){var t=e.map((function(e){return Object.assign({},e,{parentIndex:-1,children:[]})})),a=Array(7).fill(-1);t.forEach((function(e,t){var n=a.slice(2,e.level);e.parentIndex=Math.max.apply(Math,n),a[e.level]=t}));var n=[];return t.forEach((function(e){var a=e.parentIndex,r=(0,l.A)(e,i);a>=0?t[a].children.push(r):n.push(r)})),n}function c(e){var t=e.toc,a=e.minHeadingLevel,n=e.maxHeadingLevel;return t.flatMap((function(e){var t=c({toc:e.children,minHeadingLevel:a,maxHeadingLevel:n});return function(e){return e.level>=a&&e.level<=n}(e)?[Object.assign({},e,{children:t})]:t}))}function d(e){var t=e.getBoundingClientRect();return t.top===t.bottom?d(e.parentNode):t}function m(e,t){var a,n,l=t.anchorTopOffset,r=e.find((function(e){return d(e).top>=l}));return r?function(e){return e.top>0&&e.bottom<window.innerHeight/2}(d(r))?r:null!=(n=e[e.indexOf(r)-1])?n:null:null!=(a=e[e.length-1])?a:null}function u(){var e=(0,r.useRef)(0),t=(0,o.p)().navbar.hideOnScroll;return(0,r.useEffect)((function(){e.current=t?0:document.querySelector(".navbar").clientHeight}),[t]),e}function v(e){var t=(0,r.useRef)(void 0),a=u();(0,r.useEffect)((function(){if(!e)return function(){};var n=e.linkClassName,l=e.linkActiveClassName,r=e.minHeadingLevel,o=e.maxHeadingLevel;function i(){var e=function(e){return Array.from(document.getElementsByClassName(e))}(n),i=function(e){for(var t=e.minHeadingLevel,a=e.maxHeadingLevel,n=[],l=t;l<=a;l+=1)n.push("h"+l+".anchor");return Array.from(document.querySelectorAll(n.join()))}({minHeadingLevel:r,maxHeadingLevel:o}),s=m(i,{anchorTopOffset:a.current}),c=e.find((function(e){return s&&s.id===function(e){return decodeURIComponent(e.href.substring(e.href.indexOf("#")+1))}(e)}));e.forEach((function(e){!function(e,a){a?(t.current&&t.current!==e&&t.current.classList.remove(l),e.classList.add(l),t.current=e):e.classList.remove(l)}(e,e===c)}))}return document.addEventListener("scroll",i),document.addEventListener("resize",i),i(),function(){document.removeEventListener("scroll",i),document.removeEventListener("resize",i)}}),[e,a])}function b(e){var t=e.toc,a=e.className,n=e.linkClassName,l=e.isChild;return t.length?r.createElement("ul",{className:l?void 0:a},t.map((function(e){return r.createElement("li",{key:e.id},r.createElement("a",{href:"#"+e.id,className:null!=n?n:void 0,dangerouslySetInnerHTML:{__html:e.value}}),r.createElement(b,{isChild:!0,toc:e.children,className:a,linkClassName:n}))}))):null}const p=r.memo(b);var f=["toc","className","linkClassName","linkActiveClassName","minHeadingLevel","maxHeadingLevel"];function h(e){var t=e.toc,a=e.className,i=void 0===a?"table-of-contents table-of-contents__left-border":a,d=e.linkClassName,m=void 0===d?"table-of-contents__link":d,u=e.linkActiveClassName,b=void 0===u?void 0:u,h=e.minHeadingLevel,E=e.maxHeadingLevel,g=(0,l.A)(e,f),A=(0,o.p)(),L=null!=h?h:A.tableOfContents.minHeadingLevel,C=null!=E?E:A.tableOfContents.maxHeadingLevel,N=function(e){var t=e.toc,a=e.minHeadingLevel,n=e.maxHeadingLevel;return(0,r.useMemo)((function(){return c({toc:s(t),minHeadingLevel:a,maxHeadingLevel:n})}),[t,a,n])}({toc:t,minHeadingLevel:L,maxHeadingLevel:C});return v((0,r.useMemo)((function(){if(m&&b)return{linkClassName:m,linkActiveClassName:b,minHeadingLevel:L,maxHeadingLevel:C}}),[m,b,L,C])),r.createElement(p,(0,n.A)({toc:N,className:i,linkClassName:m},g))}},3403:(e,t,a)=>{a.d(t,{n:()=>o,r:()=>i});var n=a(6540),l=a(2439),r=n.createContext(null);function o(e){var t=e.children,a=e.version;return n.createElement(r.Provider,{value:a},t)}function i(){var e=(0,n.useContext)(r);if(null===e)throw new l.dV("DocsVersionProvider");return e}}}]);