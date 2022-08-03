"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[796],{3905:(e,n,l)=>{l.d(n,{Zo:()=>u,kt:()=>p});var t=l(7294);function r(e,n,l){return n in e?Object.defineProperty(e,n,{value:l,enumerable:!0,configurable:!0,writable:!0}):e[n]=l,e}function i(e,n){var l=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),l.push.apply(l,t)}return l}function o(e){for(var n=1;n<arguments.length;n++){var l=null!=arguments[n]?arguments[n]:{};n%2?i(Object(l),!0).forEach((function(n){r(e,n,l[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(l)):i(Object(l)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(l,n))}))}return e}function a(e,n){if(null==e)return{};var l,t,r=function(e,n){if(null==e)return{};var l,t,r={},i=Object.keys(e);for(t=0;t<i.length;t++)l=i[t],n.indexOf(l)>=0||(r[l]=e[l]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)l=i[t],n.indexOf(l)>=0||Object.prototype.propertyIsEnumerable.call(e,l)&&(r[l]=e[l])}return r}var c=t.createContext({}),b=function(e){var n=t.useContext(c),l=n;return e&&(l="function"==typeof e?e(n):o(o({},n),e)),l},u=function(e){var n=b(e.components);return t.createElement(c.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},s=t.forwardRef((function(e,n){var l=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,u=a(e,["components","mdxType","originalType","parentName"]),s=b(l),p=r,m=s["".concat(c,".").concat(p)]||s[p]||d[p]||i;return l?t.createElement(m,o(o({ref:n},u),{},{components:l})):t.createElement(m,o({ref:n},u))}));function p(e,n){var l=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=l.length,o=new Array(i);o[0]=s;var a={};for(var c in n)hasOwnProperty.call(n,c)&&(a[c]=n[c]);a.originalType=e,a.mdxType="string"==typeof e?e:r,o[1]=a;for(var b=2;b<i;b++)o[b]=l[b];return t.createElement.apply(null,o)}return t.createElement.apply(null,l)}s.displayName="MDXCreateElement"},6675:(e,n,l)=>{l.r(n),l.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>a,toc:()=>b});var t=l(7462),r=(l(7294),l(3905));const i={id:"clickable&combinedClickable",title:"\u70b9\u51fb\uff08Clickable & CombinedClickable\uff09"},o=void 0,a={unversionedId:"design/gesture/clickable&combinedClickable",id:"design/gesture/clickable&combinedClickable",title:"\u70b9\u51fb\uff08Clickable & CombinedClickable\uff09",description:"1. Clickable \u70b9\u51fb",source:"@site/docs/design/gesture/clickable&combinedClickable.mdx",sourceDirName:"design/gesture",slug:"/design/gesture/clickable&combinedClickable",permalink:"/docs/design/gesture/clickable&combinedClickable",draft:!1,editUrl:"https://github.com/compose-museum/jetpack-compose-book/tree/master/docs/design/gesture/clickable&combinedClickable.mdx",tags:[],version:"current",frontMatter:{id:"clickable&combinedClickable",title:"\u70b9\u51fb\uff08Clickable & CombinedClickable\uff09"},sidebar:"docs",previous:{title:"\u6982\u8ff0",permalink:"/docs/design/gesture/overview"},next:{title:"\u62d6\u52a8\uff08Draggable\uff09",permalink:"/docs/design/gesture/draggable"}},c={},b=[{value:"1. Clickable \u70b9\u51fb",id:"1-clickable-\u70b9\u51fb",level:2},{value:"2. CombinedClickable \u590d\u5408\u70b9\u51fb",id:"2-combinedclickable-\u590d\u5408\u70b9\u51fb",level:2}],u={toc:b};function d(e){let{components:n,...l}=e;return(0,r.kt)("wrapper",(0,t.Z)({},u,l,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"1-clickable-\u70b9\u51fb"},"1. Clickable \u70b9\u51fb"),(0,r.kt)("p",null,"Clickable \u4fee\u9970\u7b26\u7528\u6765\u76d1\u542c\u7ec4\u4ef6\u7684\u70b9\u51fb\u64cd\u4f5c\uff0c\u5e76\u4e14\u5f53\u70b9\u51fb\u4e8b\u4ef6\u53d1\u751f\u65f6\u4f1a\u4e3a\u88ab\u70b9\u51fb\u7684\u7ec4\u4ef6\u65bd\u52a0\u4e00\u4e2a\u6ce2\u7eb9\u6d9f\u6f2a\u6548\u679c\u52a8\u753b\u7684\u8499\u5c42\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-Kotlin"},"fun Modifier.clickable(\n  enabled: Boolean = true,\n  onClickLabel: String? = null,\n  role: Role? = null,\n  onClick: () -> Unit\n)\n")),(0,r.kt)("p",null,"Clickable \u4fee\u9970\u7b26\u4f7f\u7528\u8d77\u6765\u975e\u5e38\u7b80\u5355\uff0c\u5728\u7edd\u5927\u591a\u6570\u573a\u666f\u4e0b\u6211\u4eec\u53ea\u9700\u8981\u4f20\u5165 onClick \u56de\u8c03\u5373\u53ef\uff0c\u7528\u4e8e\u5904\u7406\u70b9\u51fb\u4e8b\u4ef6\u3002\u5f53\u7136\u4f60\u4e5f\u53ef\u4ee5\u4e3a enable \u53c2\u6570\u8bbe\u7f6e\u4e3a\u4e00\u4e2a\u53ef\u53d8\u72b6\u6001\uff0c\u901a\u8fc7\u72b6\u6001\u6765\u52a8\u6001\u63a7\u5236\u542f\u7528\u70b9\u51fb\u76d1\u542c\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-Kotlin"},'@Composable\nfun ClickDemo() {\n  var enableState by remember {\n    mutableStateOf<Boolean>(true)\n  }\n  Box(modifier = Modifier\n      .size(200.dp)\n      .background(Color.Green)\n      .clickable(enabled = enableState) {\n        Log.d(TAG, "\u53d1\u751f\u5355\u51fb\u64cd\u4f5c\u4e86\uff5e")\n      }\n  )\n}\n')),(0,r.kt)("h2",{id:"2-combinedclickable-\u590d\u5408\u70b9\u51fb"},"2. CombinedClickable \u590d\u5408\u70b9\u51fb"),(0,r.kt)("p",null,"\u5bf9\u4e8e\u957f\u6309\u70b9\u51fb\u3001\u53cc\u51fb\u7b49\u590d\u5408\u7c7b\u70b9\u51fb\u624b\u52bf\uff0c\u6211\u4eec\u53ef\u4ee5\u4f7f\u7528 CombinedClickable \u4fee\u9970\u7b26\u6765\u5b9e\u73b0\u624b\u52bf\u76d1\u542c\u3002\u4e0e Clickable \u4fee\u9970\u7b26\u4e00\u6837\uff0c\u4ed6\u540c\u6837\u4e5f\u53ef\u4ee5\u76d1\u542c\u5355\u51fb\u624b\u52bf\uff0c\u5e76\u4e14\u4e5f\u4f1a\u4e3a\u88ab\u70b9\u51fb\u7684\u7ec4\u4ef6\u65bd\u52a0\u4e00\u4e2a\u6ce2\u7eb9\u6d9f\u6f2a\u6548\u679c\u52a8\u753b\u7684\u8499\u5c42\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-Kotlin"},"fun Modifier.combinedClickable(\n  enabled: Boolean = true,\n  onClickLabel: String? = null,\n  role: Role? = null,\n  onLongClickLabel: String? = null,\n  onLongClick: (() -> Unit)? = null,\n  onDoubleClick: (() -> Unit)? = null,\n  onClick: () -> Unit\n)\n")),(0,r.kt)("p",null,"\u4f7f\u7528\u8d77\u6765\u4e5f\u5f88\u7b80\u5355\uff0c\u6211\u4eec\u4e3a\u9700\u8981\u76d1\u542c\u7684\u70b9\u51fb\u4e8b\u4ef6\u8bbe\u7f6e\u76d1\u542c\u56de\u8c03\u5c31\u53ef\u4ee5\u4e86\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-Kotlin"},'@Composable\nfun CombinedClickDemo() {\n  var enableState by remember {\n    mutableStateOf<Boolean>(true)\n  }\n  Box(modifier = Modifier\n    .size(200.dp)\n    .background(Color.Green)\n    .combinedClickable(\n      enabled = enableState,\n      onLongClick = {\n        Log.d(TAG, "\u53d1\u751f\u957f\u6309\u70b9\u51fb\u64cd\u4f5c\u4e86\uff5e")\n      },\n      onDoubleClick = {\n        Log.d(TAG, "\u53d1\u751f\u53cc\u51fb\u64cd\u4f5c\u4e86\uff5e")\n      },\n      onClick = {\n        Log.d(TAG, "\u53d1\u751f\u5355\u51fb\u64cd\u4f5c\u4e86\uff5e")\n      }\n    )\n  )\n}\n')))}d.isMDXComponent=!0}}]);