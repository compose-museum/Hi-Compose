"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[9053],{3905:(e,n,t)=>{t.d(n,{Zo:()=>d,kt:()=>u});var r=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var c=r.createContext({}),p=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},d=function(e){var n=p(e.components);return r.createElement(c.Provider,{value:n},e.children)},s={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),m=p(t),u=o,f=m["".concat(c,".").concat(u)]||m[u]||s[u]||a;return t?r.createElement(f,i(i({ref:n},d),{},{components:t})):r.createElement(f,i({ref:n},d))}));function u(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=m;var l={};for(var c in n)hasOwnProperty.call(n,c)&&(l[c]=n[c]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var p=2;p<a;p++)i[p]=t[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},3900:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>l,default:()=>m,frontMatter:()=>i,metadata:()=>c,toc:()=>d});var r=t(7462),o=(t(7294),t(3905));const a=t.p+"assets/images/card1-3ccb4474aef938e5ed911463e64eb247.png",i={title:"Card"},l=void 0,c={unversionedId:"elements/card",id:"elements/card",title:"Card",description:"Card \u662f Compose \u4e2d\u4e00\u4e2a\u5e03\u5c40\u7ec4\u4ef6\uff0c\u6211\u4eec\u7528\u5b83\u53ef\u4ee5\u6765\u521b\u9020\u51fa\u4e00\u4e9b\u7c7b\u4f3c\u4e8e\u5361\u7247\u754c\u9762",source:"@site/docs/elements/card.mdx",sourceDirName:"elements",slug:"/elements/card",permalink:"/docs/elements/card",draft:!1,editUrl:"https://github.com/compose-museum/jetpack-compose-book/tree/master/docs/elements/card.mdx",tags:[],version:"current",frontMatter:{title:"Card"},sidebar:"docs",previous:{title:"Button",permalink:"/docs/elements/button"},next:{title:"FloatingActionButton",permalink:"/docs/elements/floatingactionbutton"}},p={},d=[{value:"\u66f4\u591a",id:"\u66f4\u591a",level:2}],s={toc:d};function m(e){let{components:n,...t}=e;return(0,o.kt)("wrapper",(0,r.Z)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-kotlin"},"@Composable\nfun Card(\n    modifier: Modifier = Modifier,\n    shape: Shape = MaterialTheme.shapes.medium,\n    backgroundColor: Color = MaterialTheme.colors.surface,\n    contentColor: Color = contentColorFor(backgroundColor),\n    border: BorderStroke? = null,\n    elevation: Dp = 1.dp,\n    content: @Composable () -> Unit\n)\n")),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"Card")," \u662f Compose \u4e2d\u4e00\u4e2a\u5e03\u5c40\u7ec4\u4ef6\uff0c\u6211\u4eec\u7528\u5b83\u53ef\u4ee5\u6765\u521b\u9020\u51fa\u4e00\u4e9b\u7c7b\u4f3c\u4e8e\u5361\u7247\u754c\u9762"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-kotlin"},'@Composable\nfun CardDemo() {\n    Card(\n        modifier = Modifier\n            .fillMaxWidth()\n            .padding(15.dp) // \u5916\u8fb9\u8ddd\n            .clickable{ },  \n\n            // \u8bbe\u7f6e\u70b9\u51fb\u6ce2\u7eb9\u6548\u679c\uff0c\u6ce8\u610f\u5982\u679c CardDemo() \u51fd\u6570\u4e0d\u5728 MaterialTheme \u4e0b\u8c03\u7528\n            // \u5c06\u65e0\u6cd5\u663e\u793a\u6ce2\u7eb9\u6548\u679c\n\n        elevation = 10.dp // \u8bbe\u7f6e\u9634\u5f71\n    ) {\n        Column(\n            modifier = Modifier.padding(15.dp) // \u5185\u8fb9\u8ddd\n        ) {\n            Text(\n                buildAnnotatedString {\n                    append("\u6b22\u8fce\u6765\u5230 ")\n                    withStyle(style = SpanStyle(fontWeight = FontWeight.W900, color = Color(0xFF4552B8))\n                    ) {\n                        append("Jetpack Compose \u535a\u7269\u9986")\n                    }\n                }\n            )\n            Text(\n                buildAnnotatedString {\n                    append("\u4f60\u73b0\u5728\u89c2\u770b\u7684\u7ae0\u8282\u662f ")\n                    withStyle(style = SpanStyle(fontWeight = FontWeight.W900)) {\n                        append("Card")\n                    }\n                }\n            )\n        }\n    }\n}\n')),(0,o.kt)("img",{src:a}),(0,o.kt)("h2",{id:"\u66f4\u591a"},"\u66f4\u591a"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://developer.android.com/reference/kotlin/androidx/compose/material/package-summary#card"},"Card \u53c2\u6570\u8be6\u60c5")))}m.isMDXComponent=!0}}]);