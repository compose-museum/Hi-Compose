"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[4189],{3905:(o,e,n)=>{n.d(e,{Zo:()=>p,kt:()=>u});var t=n(7294);function a(o,e,n){return e in o?Object.defineProperty(o,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):o[e]=n,o}function i(o,e){var n=Object.keys(o);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(o);e&&(t=t.filter((function(e){return Object.getOwnPropertyDescriptor(o,e).enumerable}))),n.push.apply(n,t)}return n}function l(o){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach((function(e){a(o,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(o,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){Object.defineProperty(o,e,Object.getOwnPropertyDescriptor(n,e))}))}return o}function r(o,e){if(null==o)return{};var n,t,a=function(o,e){if(null==o)return{};var n,t,a={},i=Object.keys(o);for(t=0;t<i.length;t++)n=i[t],e.indexOf(n)>=0||(a[n]=o[n]);return a}(o,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(o);for(t=0;t<i.length;t++)n=i[t],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(o,n)&&(a[n]=o[n])}return a}var c=t.createContext({}),s=function(o){var e=t.useContext(c),n=e;return o&&(n="function"==typeof o?o(e):l(l({},e),o)),n},p=function(o){var e=s(o.components);return t.createElement(c.Provider,{value:e},o.children)},m={inlineCode:"code",wrapper:function(o){var e=o.children;return t.createElement(t.Fragment,{},e)}},d=t.forwardRef((function(o,e){var n=o.components,a=o.mdxType,i=o.originalType,c=o.parentName,p=r(o,["components","mdxType","originalType","parentName"]),d=s(n),u=a,C=d["".concat(c,".").concat(u)]||d[u]||m[u]||i;return n?t.createElement(C,l(l({ref:e},p),{},{components:n})):t.createElement(C,l({ref:e},p))}));function u(o,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof o||a){var i=n.length,l=new Array(i);l[0]=d;var r={};for(var c in e)hasOwnProperty.call(e,c)&&(r[c]=e[c]);r.originalType=o,r.mdxType="string"==typeof o?o:a,l[1]=r;for(var s=2;s<i;s++)l[s]=n[s];return t.createElement.apply(null,l)}return t.createElement.apply(null,n)}d.displayName="MDXCreateElement"},4560:(o,e,n)=>{n.r(e),n.d(e,{assets:()=>d,contentTitle:()=>p,default:()=>g,frontMatter:()=>s,metadata:()=>m,toc:()=>u});var t=n(7462),a=(n(7294),n(3905));const i=n.p+"assets/images/carbon-990aea6206587bde39fb4b2fe91fc11b.png",l=n.p+"assets/images/demo1-176bea2d5394258bab0083798e3a99e8.png",r=n.p+"assets/images/static-20f8852168138d4256115acbcf2dbf30.gif",c=n.p+"assets/images/dynamic-50447222a3ea39d95f098181c0c9006f.gif",s={id:"understandingMaterialTheme",title:"\u6df1\u5165\u7406\u89e3 MaterialTheme \u4e0e CompositionLocal"},p=void 0,m={unversionedId:"design/theme/understandingMaterialTheme",id:"design/theme/understandingMaterialTheme",title:"\u6df1\u5165\u7406\u89e3 MaterialTheme \u4e0e CompositionLocal",description:"1. MaterialTheme \u662f\u600e\u4e48\u505a\u5230\u7684",source:"@site/docs/design/theme/understandingMaterialTheme.mdx",sourceDirName:"design/theme",slug:"/design/theme/understandingMaterialTheme",permalink:"/docs/design/theme/understandingMaterialTheme",draft:!1,editUrl:"https://github.com/compose-museum/jetpack-compose-book/tree/master/docs/design/theme/understandingMaterialTheme.mdx",tags:[],version:"current",frontMatter:{id:"understandingMaterialTheme",title:"\u6df1\u5165\u7406\u89e3 MaterialTheme \u4e0e CompositionLocal"},sidebar:"docs",previous:{title:"\u521d\u8bc6 MaterialTheme",permalink:"/docs/design/theme/meetMaterialTheme"},next:{title:"\u81ea\u5b9a\u4e49\u4f60\u7684\u4e3b\u9898\u65b9\u6848",permalink:"/docs/design/theme/customYourTheme"}},d={},u=[{value:"1. MaterialTheme \u662f\u600e\u4e48\u505a\u5230\u7684",id:"1-materialtheme-\u662f\u600e\u4e48\u505a\u5230\u7684",level:2},{value:"2. CompositionLocal\u4ecb\u7ecd",id:"2-compositionlocal\u4ecb\u7ecd",level:2},{value:"compositionLocalOf \u4e0e staticCompositionLocalOf \u533a\u522b",id:"compositionlocalof-\u4e0e-staticcompositionlocalof-\u533a\u522b",level:3}],C={toc:u};function g(o){let{components:e,...n}=o;return(0,a.kt)("wrapper",(0,t.Z)({},C,n,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"1-materialtheme-\u662f\u600e\u4e48\u505a\u5230\u7684"},"1. MaterialTheme \u662f\u600e\u4e48\u505a\u5230\u7684"),(0,a.kt)("p",null,"\u4e3a\u6df1\u5165\u7406\u89e3 MaterialTheme \u5de5\u4f5c\u539f\u7406\uff0c\u6211\u4eec\u9700\u8981\u8fdb\u5165\u6e90\u7801\u4e00\u63a2\u7a76\u7adf\u3002"),(0,a.kt)("img",{src:i,width:"90%",height:"50%"}),(0,a.kt)("p",null,"\u9700\u8981\u6ce8\u610f\u7684\u662f\uff0c\u6b64\u65f6\u4f20\u5165\u7684 content \u53c2\u6570\u5176\u5b9e\u662f\u58f0\u660e\u5728 Theme \u4e2d\u7684\u81ea\u5b9a\u4e49\u5e03\u5c40\u7cfb\u7edf\uff0c\u5176\u7c7b\u578b\u662f\u4e00\u4e2a\u5e26\u6709 Composable \u6ce8\u89e3\u7684 lambda (\u5bf9\u4e8e\u8fd9\u7c7b\u5e26\u6709 Composable \u7684 lambda \u7b80\u79f0\u4e3a composable )\u3002"),(0,a.kt)("p",null,"\u6211\u4eec\u6240\u5173\u6ce8\u7684 colors \u88ab remember \u4fee\u9970\u540e\u8d4b\u503c\u4e3a rememberedColors\u3002\u5982\u679c MaterialTheme \u8fd9\u4e2a composable \u53d1\u751f recompose \u65f6\u4fbf\u4f1a\u68c0\u67e5 colors \u662f\u5426\u53d1\u751f\u4e86\u6539\u53d8\u4ece\u800c\u51b3\u5b9a\u66f4\u65b0\u3002"),(0,a.kt)("p",null,"\u63a5\u4e0b\u6765\u4f7f\u7528 CompositionLocalProvider \u65b9\u6cd5\uff0c\u901a\u8fc7\u4e2d\u7f00 providers \u5c06 rememberedColors \u63d0\u4f9b\u7ed9\u4e86 LocalColors\u3002\u8ba9\u6211\u4eec\u56de\u5230\u81ea\u5b9a\u4e49\u89c6\u56fe\u4e2d\uff0c\u770b\u770b\u6211\u4eec\u662f\u5982\u4f55\u901a\u8fc7 MaterialTheme \u83b7\u53d6\u5230\u5f53\u524d\u4e3b\u9898\u914d\u8272\u7684\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-kotlin"},"object MaterialTheme {\n    val colors: Colors\n        @Composable\n        @ReadOnlyComposable\n        get() = LocalColors.current\n    val typography: Typography\n        @Composable\n        @ReadOnlyComposable\n        get() = LocalTypography.current\n    val shapes: Shapes\n        @Composable\n        @ReadOnlyComposable\n        get() = LocalShapes.current\n}\n")),(0,a.kt)("p",null,"\u53ef\u4ee5\u53d1\u73b0\u5728\u83b7\u53d6\u5230\u5f53\u524d\u4e3b\u9898\u914d\u8272\u65f6\u4f7f\u7528\u7684\u662f MaterialTheme \u7c7b\u5355\u4f8b\u7684 colors \u5c5e\u6027\uff0c\u95f4\u63a5\u4f7f\u7528\u4e86 LocalColors\u3002"),(0,a.kt)("p",null,"\u603b\u7ed3\u6765\u8bf4\uff0c\u6211\u4eec\u5728\u81ea\u5b9a\u4e49 Theme \u4f7f\u7528\u7684\u662f MaterialTheme \u51fd\u6570\u4e3a LocalColors \u8d4b\u503c\uff0c\u800c\u5728\u83b7\u53d6\u65f6\u4f7f\u7528\u7684\u662f MaterialTheme \u7c7b\u5355\u4f8b\uff0c\u95f4\u63a5\u4ece LocalColors \u4e2d\u83b7\u53d6\u5230\u503c\u3002\u6240\u4ee5 LocalColors \u5230\u5e95\u662f\u4f55\u65b9\u795e\u5723\u5462\uff1f"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-kotlin"},"internal val LocalColors = staticCompositionLocalOf { lightColors() }\n")),(0,a.kt)("p",null,"\u901a\u8fc7\u58f0\u660e\u53ef\u4ee5\u53d1\u73b0\u4ed6\u5b9e\u9645\u4e0a\u662f\u4e00\u4e2a CompositionLocal\uff0c\u5176\u521d\u59cb\u503c\u662f lightColors() \u8fd4\u56de\u7684 colors \u914d\u7f6e\u3002"),(0,a.kt)("p",null,"MaterialTheme \u65b9\u6cd5\u4e2d\u901a\u8fc7 CompositionLocalProvider \u65b9\u6cd5\u4e3a\u6211\u4eec\u7684\u81ea\u5b9a\u4e49\u89c6\u56fe composable \u63d0\u4f9b\u4e86\u4e00\u4e9b CompositionLocal\uff0c\u5305\u542b\u4e86\u6240\u6709\u7684\u4e3b\u9898\u914d\u7f6e\u4fe1\u606f\u3002"),(0,a.kt)("h2",{id:"2-compositionlocal\u4ecb\u7ecd"},"2. CompositionLocal\u4ecb\u7ecd"),(0,a.kt)("p",null,"\u5f88\u591a\u65f6\u5019\u6211\u4eec\u9700\u8981\u5728 composable \u6811\u4e2d\u5171\u4eab\u4e00\u4e9b\u6570\u636e\uff08\u4f8b\u5982\u4e3b\u9898\u914d\u7f6e\uff09\uff0c\u4e00\u79cd\u6709\u6548\u65b9\u5f0f\u5c31\u662f\u901a\u8fc7\u663e\u5f0f\u53c2\u6570\u4f20\u9012\u7684\u65b9\u5f0f\u8fdb\u884c\u5b9e\u73b0\uff0c\u5f53\u53c2\u6570\u8d8a\u6765\u8d8a\u591a\u65f6\uff0ccomposable \u53c2\u6570\u5217\u8868\u4f1a\u53d8\u5f97\u8d8a\u6765\u8d8a\u81c3\u80bf\uff0c\u96be\u4ee5\u8fdb\u884c\u7ef4\u62a4\u3002\u5f53 composable \u9700\u8981\u5f7c\u6b64\u95f4\u4f20\u9012\u6570\u636e\uff0c\u5e76\u4e14\u5b9e\u73b0\u5404\u81ea\u7684\u79c1\u6709\u6027\u65f6\uff0c\u5982\u679c\u4ecd\u91c7\u7528\u663e\u5f0f\u53c2\u6570\u4f20\u9012\u7684\u65b9\u5f0f\u5219\u53ef\u80fd\u4f1a\u4ea7\u751f\u610f\u6599\u4e4b\u5916\u7684\u9ebb\u70e6\u4e0e\u5d29\u6e83\u3002"),(0,a.kt)("p",null,"\u4e3a\u89e3\u51b3\u4e0a\u8ff0\u75db\u70b9\u95ee\u9898\uff0c Jetpack Compose \u63d0\u4f9b\u4e86 CompostionLocal \u7528\u6765\u5b8c\u6210 composable \u6811\u4e2d\u5171\u4eab\u6570\u636e\u65b9\u5f0f\u3002CompositionLocals \u662f\u5177\u6709\u5c42\u7ea7\u7684\uff0c\u53ef\u4ee5\u88ab\u9650\u5b9a\u5728\u4ee5\u67d0\u4e2a composable \u4f5c\u4e3a\u6839\u7ed3\u70b9\u7684\u5b50\u6811\u4e2d\uff0c\u5176\u9ed8\u8ba4\u4f1a\u5411\u4e0b\u4f20\u9012\u7684\uff0c\u5f53\u7136\u5f53\u524d\u5b50\u6811\u4e2d\u7684\u67d0\u4e2a composable \u53ef\u4ee5\u5bf9\u8be5 CompositionLocals \u8fdb\u884c\u8986\u76d6\uff0c\u4ece\u800c\u4f7f\u5f97\u65b0\u503c\u4f1a\u5728\u8fd9\u4e2a composable \u4e2d\u7ee7\u7eed\u5411\u4e0b\u4f20\u9012\u3002"),(0,a.kt)("p",null,"Jetpack Compose \u4e3a\u6211\u4eec\u63d0\u4f9b\u4e86compositionLocalOf \u65b9\u6cd5\u7528\u4e8e\u521b\u5efa\u4e00\u4e2a CompostionLocal \u5b9e\u4f8b\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-kotlin"},'import androidx.compose.runtime.compositionLocalOf\n\nvar LocalString = compositionLocalOf { "Jetpack Compose" }\n')),(0,a.kt)("p",null,"\u5728 composable \u6811\u7684\u67d0\u4e2a\u5730\u65b9\uff0c\u6211\u4eec\u53ef\u4ee5\u4f7f\u7528 CompositionLocalProvider \u65b9\u6cd5\u4e3a CompositionLocal \u63d0\u4f9b\u4e00\u4e2a\u503c\u3002\u901a\u5e38\u60c5\u51b5\u4e0b\u4f4d\u4e8e composable \u6811\u7684\u6839\u90e8\uff0c\u4f46\u4e5f\u53ef\u4ee5\u4f4d\u4e8e\u4efb\u4f55\u4f4d\u7f6e\uff0c\u8fd8\u53ef\u4ee5\u5728\u591a\u4e2a\u4f4d\u7f6e\u4f7f\u7528\uff0c\u4ee5\u8986\u76d6\u5b50\u6811\u80fd\u591f\u83b7\u53d6\u5230\u7684\u503c\u3002\u6211\u4eec\u7684\u793a\u4f8b\u9009\u62e9\u5728 Column \u6240\u5305\u542b\u7684 composable \u4e2d\u4f7f\u7528 CompositionLocalProvider\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-kotlin"},'import androidx.compose.runtime.CompositionLocalProvider\n\nsetContent {\n    CustomColorTheme(true) {\n        Column {\n            CompositionLocalProvider(\n                LocalString provides "Hello World"\n            ) {\n                Text(\n                    text = LocalString.current,\n                    color = Color.Green\n                )\n                CompositionLocalProvider(\n                    LocalString provides "Ruger McCarthy"\n                ) {\n                    Text(\n                        text = LocalString.current,\n                        color = Color.Blue\n                    )\n                }\n            }\n            Text(\n                text = LocalString.current,\n                color = Color.Red\n            )\n        }\n    }\n}\n')),(0,a.kt)("p",null,"\u5b9e\u9645\u6548\u679c\u53ef\u4ee5\u770b\u5230\uff0c\u867d\u7136\u6240\u6709 composable \u5747\u4f9d\u8d56\u7684\u662f\u540c\u4e00\u4e2a CompositionLocal\uff0c\u800c\u5176\u83b7\u5f97\u5230\u7684\u5b9e\u9645\u7684\u503c\u5374\u662f\u4e0d\u4e00\u6837\u7684\u3002"),(0,a.kt)("img",{src:l}),(0,a.kt)("h3",{id:"compositionlocalof-\u4e0e-staticcompositionlocalof-\u533a\u522b"},"compositionLocalOf \u4e0e staticCompositionLocalOf \u533a\u522b"),(0,a.kt)("p",null,"\u5f53\u6211\u4eec\u521b\u5efa  CompositionLocal \u65f6\uff0c\u901a\u5e38\u9700\u8981\u4f7f\u7528 ",(0,a.kt)("inlineCode",{parentName:"p"},"compositionLocalOf")," \u6216 ",(0,a.kt)("inlineCode",{parentName:"p"},"staticCompositionLocalOf")," \u65b9\u6cd5\u3002\u7136\u800c\u8fd9\u4e24\u8005\u7684\u533a\u522b\u662f\u4ec0\u4e48\u5462\uff1f\u5176\u5b9e",(0,a.kt)("inlineCode",{parentName:"p"},"staticCompositionLocalOf")," \u65b9\u6cd5\u58f0\u660e\u5904\u7684\u6ce8\u91ca\u6587\u6863\u4e2d\u8bf4\u660e\u4e86\u4e00\u5207\u3002"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Unlike compositionLocalOf, reads of a staticCompositionLocalOf are not tracked by the composer and changing the value provided in the CompositionLocalProvider call will cause the entirety of the content to be recomposed instead of just the places where in the composition the local value is used.")),(0,a.kt)("p",null,"\u7b80\u5355\u6982\u62ec\u5c31\u662f\uff0c\u5f53\u6211\u4eec\u9009\u62e9\u4f7f\u7528 ",(0,a.kt)("inlineCode",{parentName:"p"},"staticCompositionLocalOf")," \u65f6\uff0c\u5b9e\u9645\u4e0a\u521b\u5efa\u4e86\u4e2a",(0,a.kt)("inlineCode",{parentName:"p"},"StaticProvidableCompositionLocal")," \u5b9e\u4f8b\uff0c\u5f53\u5176\u6240\u63d0\u4f9b\u7684\u503c\u6539\u53d8\u65f6\uff0c\u4f1a\u5bfc\u81f4  CompositionLocalProvide \u5185\u90e8\u6240\u6709 composable \u89e6\u53d1\u91cd\u7ec4(recompose)\u3002"),(0,a.kt)("p",null,"\u5982\u679c\u6211\u4eec\u9009\u62e9\u4f7f\u7528 ",(0,a.kt)("inlineCode",{parentName:"p"},"compositionLocalOf"),"\uff0c\u5b9e\u9645\u4e0a\u521b\u5efa\u4e86\u4e2a ",(0,a.kt)("inlineCode",{parentName:"p"},"DynamicProvidableCompositionLocal")," \u5b9e\u4f8b\uff0c\u5f53\u5176\u6240\u63d0\u4f9b\u7684\u503c\u6539\u53d8\u65f6\uff0c\u4ec5\u4f1a\u5bfc\u81f4  CompositionLocalProvide \u5185\u90e8\u4f9d\u8d56\u5f53\u524d CompositionLocal \u7684 composable \u89e6\u53d1\u91cd\u7ec4(recompose)\u3002"),(0,a.kt)("p",null,"Talk is cheap\uff0cShow me the code~. \u63a5\u4e0b\u6765\u6211\u4eec\u8fdb\u884c\u5bf9\u7167\u793a\u4f8b\u5370\u8bc1\u3002"),(0,a.kt)("p",null,"\u65e2\u7136\u8981\u5bf9\u7167\uff0c\u6211\u4eec\u5c31\u5206\u522b\u4f7f\u7528 ",(0,a.kt)("inlineCode",{parentName:"p"},"staticCompositionLocalOf")," \u4e0e ",(0,a.kt)("inlineCode",{parentName:"p"},"compositionLocalOf")," \u521b\u5efa CompositionLocal\u3002\u6211\u4eec\u4f7f\u7528\u4e09\u5c42\u5d4c\u5957\u7684 Box \u8fdb\u884c\u4e3e\u4f8b\uff0c\u6211\u4eec\u5c06 CompositionLocalProvide \u5305\u88f9\u5728\u6700\u5916\u5c42\uff0c\u82e5\u67d0\u5c42 Box \u89e6\u53d1\u4e86\u91cd\u7ec4(recompose) \u4fbf\u4f1a\u66f4\u65b0\u8be5\u5c42\u7684\u6587\u672c\u4fe1\u606f\u3002\u6211\u4eec\u7684\u793a\u4f8b\u4e2d\u5904\u4e8e\u4e2d\u5c42 \u7684 Box \u4f9d\u8d56\u4e86 CompositionLocal\u3002"),(0,a.kt)("p",null,"\u5f53\u6211\u4eec\u4fee\u6539\u4e86 CompositionLocal \u6240\u63d0\u4f9b\u7684\u503c\u65f6\uff0c\u53ef\u4ee5\u53d1\u73b0 ",(0,a.kt)("inlineCode",{parentName:"p"},"staticCompositionLocalOf")," \u573a\u666f\u4e0b\uff0c\u6240\u6709 Box \u5747\u53d1\u751f\u4e86\u91cd\u7ec4\uff0c\u800c ",(0,a.kt)("inlineCode",{parentName:"p"},"DynamicCompositionLocal")," \u573a\u666f\u4e0b\uff0c\u4ec5\u4e2d\u5c42\u4f9d\u8d56\u4e86 CompositionLocal \u7684 Box \u89e6\u53d1\u4e86\u91cd\u7ec4\u3002\u6587\u7ae0\u7ed3\u5c3e\u5904\u63d0\u4f9b\u4e86\u5b9e\u4f8b\u4ee3\u7801\u3002"),(0,a.kt)("img",{src:r,width:"40%",height:"40%"}),(0,a.kt)("img",{src:c,width:"40%",height:"40%"}),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u793a\u4f8b\u4ee3\u7801")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-kotlin"},'var isStatic = false\nvar compositionLocalName = ""\nval currentLocalColor = if (isStatic) {\n    compositionLocalName = "StaticCompositionLocal \u573a\u666f"\n    staticCompositionLocalOf { Color.Black }\n} else {\n    compositionLocalName = "DynamicCompositionLocal \u573a\u666f"\n    compositionLocalOf { Color.Black }\n}\n\nvar recomposeFlag = "Init"\n@Preview\n@Composable\nfun CompositionLocalDemo(isStatic: Boolean = false) {\n    var color by remember{ mutableStateOf(Color.Green) }\n    Box(\n        modifier = Modifier.fillMaxSize(),\n        contentAlignment = Alignment.Center\n    ) {\n        Column(horizontalAlignment = Alignment.CenterHorizontally){\n            Text(text = "${compositionLocalName}")\n            Spacer (Modifier.height(20.dp))\n            CompositionLocalProvider(\n                currentLocalColor provides color\n            ) {\n                TaggedBox("Wrapper: ${recomposeFlag}", 400.dp,Color.Red) {\n                    TaggedBox("Middle: ${recomposeFlag}", 300.dp, currentLocalColor.current) {\n                        TaggedBox("Inner: ${recomposeFlag}", 200.dp, Color.Yellow)\n                    }\n                }\n            }\n            Spacer (Modifier.height(20.dp))\n            Button(\n                onClick = {\n                    color = Color.Blue\n                }\n            ) {\n                Text(text = "Change Theme")\n            }\n        }\n    }\n    recomposeFlag = "Recompose"\n}\n\n@Composable\nfun TaggedBox(tag:String, size: Dp, background: Color, content: @Composable () -> Unit = {}) {\n    Column(\n        modifier = Modifier\n            .size(size)\n            .background(background),\n        horizontalAlignment = Alignment.CenterHorizontally) {\n        Text(text = tag)\n        Box(\n            modifier = Modifier.fillMaxSize(),\n            contentAlignment = Alignment.Center\n        ) {\n            content()\n        }\n    }\n}\n')))}g.isMDXComponent=!0}}]);