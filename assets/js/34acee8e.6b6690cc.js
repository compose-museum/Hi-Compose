"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[7054],{3905:function(e,n,t){t.d(n,{Zo:function(){return i},kt:function(){return u}});var o=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function A(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?A(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):A(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,o,r=function(e,n){if(null==e)return{};var t,o,r={},A=Object.keys(e);for(o=0;o<A.length;o++)t=A[o],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var A=Object.getOwnPropertySymbols(e);for(o=0;o<A.length;o++)t=A[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=o.createContext({}),c=function(e){var n=o.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},i=function(e){var n=c(e.components);return o.createElement(l.Provider,{value:n},e.children)},B={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},g=o.forwardRef((function(e,n){var t=e.components,r=e.mdxType,A=e.originalType,l=e.parentName,i=p(e,["components","mdxType","originalType","parentName"]),g=c(t),u=r,s=g["".concat(l,".").concat(u)]||g[u]||B[u]||A;return t?o.createElement(s,a(a({ref:n},i),{},{components:t})):o.createElement(s,a({ref:n},i))}));function u(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var A=t.length,a=new Array(A);a[0]=g;var p={};for(var l in n)hasOwnProperty.call(n,l)&&(p[l]=n[l]);p.originalType=e,p.mdxType="string"==typeof e?e:r,a[1]=p;for(var c=2;c<A;c++)a[c]=t[c];return o.createElement.apply(null,a)}return o.createElement.apply(null,t)}g.displayName="MDXCreateElement"},9084:function(e,n,t){t.r(n),t.d(n,{assets:function(){return B},contentTitle:function(){return c},default:function(){return s},frontMatter:function(){return l},metadata:function(){return i},toc:function(){return g}});var o=t(7462),r=t(3366),A=(t(7294),t(3905)),a=t.p+"assets/images/demo-1924abf43df5d57afd1f1018588289e8.png",p=["components"],l={title:"TopAppBar"},c=void 0,i={unversionedId:"layout/topappbar",id:"layout/topappbar",title:"TopAppBar",description:"Jetpack Compose \u4e3a\u6211\u4eec\u51c6\u5907\u4e86\u57fa\u4e8e Material Design \u98ce\u683c\u8bbe\u8ba1\u7684 TopAppBar \u7ec4\u4ef6\u3002",source:"@site/docs/layout/topappbar.mdx",sourceDirName:"layout",slug:"/layout/topappbar",permalink:"/docs/layout/topappbar",draft:!1,editUrl:"https://github.com/compose-museum/jetpack-compose-book/tree/master/docs/layout/topappbar.mdx",tags:[],version:"current",frontMatter:{title:"TopAppBar"},sidebar:"docs",previous:{title:"Spacer",permalink:"/docs/layout/spacer"},next:{title:"\u81ea\u5b9a\u4e49\u5e03\u5c40",permalink:"/docs/layout/custom_layout"}},B={},g=[],u={toc:g};function s(e){var n=e.components,t=(0,r.Z)(e,p);return(0,A.kt)("wrapper",(0,o.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,A.kt)("pre",null,(0,A.kt)("code",{parentName:"pre",className:"language-kotlin"},"@Composable\nfun TopAppBar(\n    title: @Composable () -> Unit,\n    modifier: Modifier = Modifier,\n    navigationIcon: @Composable (() -> Unit)? = null,\n    actions: @Composable RowScope.() -> Unit = {},\n    backgroundColor: Color = MaterialTheme.colors.primarySurface,\n    contentColor: Color = contentColorFor(backgroundColor),\n    elevation: Dp = AppBarDefaults.TopAppBarElevation\n)\n")),(0,A.kt)("p",null,(0,A.kt)("inlineCode",{parentName:"p"},"Jetpack Compose")," \u4e3a\u6211\u4eec\u51c6\u5907\u4e86\u57fa\u4e8e ",(0,A.kt)("inlineCode",{parentName:"p"},"Material Design")," \u98ce\u683c\u8bbe\u8ba1\u7684 ",(0,A.kt)("inlineCode",{parentName:"p"},"TopAppBar")," \u7ec4\u4ef6\u3002"),(0,A.kt)("p",null,"\u63a5\u4e0b\u6765\u8ba9\u6211\u4eec\u770b\u770b\u600e\u4e48\u4f7f\u7528\u5427\uff01"),(0,A.kt)("pre",null,(0,A.kt)("code",{parentName:"pre",className:"language-kotlin"},'@Composable\nfun ScaffoldDemo(){\n    Scaffold(\n        topBar = {\n            TopAppBar(\n                title = {\n                    Text("\u4e3b\u9875")\n                },\n                navigationIcon = {\n                    IconButton(\n                        onClick = { }\n                    ) {\n                        Icon(Icons.Filled.ArrowBack, null)\n                    }\n                }\n            )\n        },\n    ) {\n\n    }\n}\n')),(0,A.kt)("img",{src:a}),(0,A.kt)("p",null,"\u8fd8\u53ef\u4ee5\u8bbe\u7f6e ",(0,A.kt)("inlineCode",{parentName:"p"},"TopAppBar")," \u4e2d\u7684 ",(0,A.kt)("inlineCode",{parentName:"p"},"actions")," \u53c2\u6570"),(0,A.kt)("pre",null,(0,A.kt)("code",{parentName:"pre",className:"language-kotlin"},'@Composable\nfun ScaffoldDemo(){\n    Scaffold(\n        topBar = {\n            TopAppBar(\n                title = {\n                    Text("\u4e3b\u9875")\n                },\n                navigationIcon = {\n                    IconButton(\n                        onClick = { } //do something\n                    ) {\n                        Icon(Icons.Filled.ArrowBack, null)\n                    }\n                },\n                actions = {\n                    IconButton(\n                        onClick = { } //do something\n                    ) {\n                        Icon(Icons.Filled.Search, null)\n                    }\n                    IconButton(\n                        onClick = { } //do something\n                    ) {\n                        Icon(Icons.Filled.MoreVert, null)\n                    }\n                }\n            )\n        },\n    ) {\n\n    }\n}\n')),(0,A.kt)("p",null,"\u5b83\u4f1a\u5c06\u91cc\u9762\u7684\u5185\u5bb9\u4ee5 ",(0,A.kt)("inlineCode",{parentName:"p"},"Row")," \u7684\u65b9\u5f0f\u6765\u6392\u5217"),(0,A.kt)("img",{src:"data:image/png;base64,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"}))}s.isMDXComponent=!0}}]);