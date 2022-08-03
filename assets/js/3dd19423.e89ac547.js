"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[3897],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>f});var i=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,i,a=function(e,n){if(null==e)return{};var t,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)t=r[i],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)t=r[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=i.createContext({}),m=function(e){var n=i.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},p=function(e){var n=m(e.components);return i.createElement(s.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},c=i.forwardRef((function(e,n){var t=e.components,a=e.mdxType,r=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),c=m(t),f=a,u=c["".concat(s,".").concat(f)]||c[f]||d[f]||r;return t?i.createElement(u,o(o({ref:n},p),{},{components:t})):i.createElement(u,o({ref:n},p))}));function f(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var r=t.length,o=new Array(r);o[0]=c;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var m=2;m<r;m++)o[m]=t[m];return i.createElement.apply(null,o)}return i.createElement.apply(null,t)}c.displayName="MDXCreateElement"},5556:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>p,default:()=>y,frontMatter:()=>m,metadata:()=>d,toc:()=>f});var i=t(7462),a=(t(7294),t(3905));const r=t.p+"assets/images/carbon-a17c2703a3447f3435f7bf44a0a07b7f.png",o=t.p+"assets/images/demo-c3720e3d41c30705aff3ea1695ccb53f.gif",l=t.p+"assets/images/demo2-e634df4b178d1d41b8ff2f4c90330ff0.gif",s=t.p+"assets/images/demo3-aa1b399c155272868eef14d85dd3e456.gif",m={id:"animationVisibility",title:"AnimationVisibility\uff08\u5b9e\u9a8c\u6027\uff09"},p=void 0,d={unversionedId:"design/animation/animationVisibility",id:"design/animation/animationVisibility",title:"AnimationVisibility\uff08\u5b9e\u9a8c\u6027\uff09",description:"1. \u57fa\u7840\u7528\u6cd5",source:"@site/docs/design/animation/animationvisibility.mdx",sourceDirName:"design/animation",slug:"/design/animation/animationVisibility",permalink:"/docs/design/animation/animationVisibility",draft:!1,editUrl:"https://github.com/compose-museum/jetpack-compose-book/tree/master/docs/design/animation/animationvisibility.mdx",tags:[],version:"current",frontMatter:{id:"animationVisibility",title:"AnimationVisibility\uff08\u5b9e\u9a8c\u6027\uff09"},sidebar:"docs",previous:{title:"\u6982\u8ff0",permalink:"/docs/design/animation/overview"},next:{title:"Animate*AsState",permalink:"/docs/design/animation/animateAsState"}},c={},f=[{value:"1. \u57fa\u7840\u7528\u6cd5",id:"1-\u57fa\u7840\u7528\u6cd5",level:2},{value:"2. \u8fdb\u573a\u52a8\u753b",id:"2-\u8fdb\u573a\u52a8\u753b",level:2},{value:"3. \u66f4\u591a",id:"3-\u66f4\u591a",level:2}],u={toc:f};function y(e){let{components:n,...t}=e;return(0,a.kt)("wrapper",(0,i.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("img",{src:r,width:"90%",height:"50%"}),(0,a.kt)("h2",{id:"1-\u57fa\u7840\u7528\u6cd5"},"1. \u57fa\u7840\u7528\u6cd5"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-kotlin"},'\nvar state by remember{ mutableStateOf(true)}\n\nColumn(\n    modifier = Modifier\n        .fillMaxSize(),\n    horizontalAlignment = Alignment.CenterHorizontally,\n    verticalArrangement = Arrangement.Center\n){\n    AnimatedVisibility(visible = state) {\n        Text(\n            text = "\u8fd9\u662f\u4e00\u4e2a\u666e\u901a\u7684\u6b63\u6587",\n            fontWeight = FontWeight.W900,\n            style = MaterialTheme.typography.h5\n        )\n    }\n    Spacer(Modifier.padding(vertical = 50.dp))\n    Button(onClick = {state = !state}) {\n        Text(if(state) "\u9690\u85cf" else "\u663e\u793a")\n    }\n}\n\n')),(0,a.kt)("img",{src:o}),(0,a.kt)("h2",{id:"2-\u8fdb\u573a\u52a8\u753b"},"2. \u8fdb\u573a\u52a8\u753b"),(0,a.kt)("p",null,"\u8ba9\u6211\u4eec\u6765\u8bd5\u8bd5 ",(0,a.kt)("inlineCode",{parentName:"p"},"AnimatedVisibility")," \u4e2d\u7684 ",(0,a.kt)("inlineCode",{parentName:"p"},"Enter")," \u53c2\u6570\u7684\u7b80\u5355\u4f7f\u7528\u5427\uff01"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-kotlin"},'var state by remember{ mutableStateOf(true)}\nAnimatedVisibility(\n    visible = state,\n    enter = slideInVertically(\n        initialOffsetY = { - 1000 },\n        animationSpec = tween(durationMillis = 1200)\n    )\n) {\n    Text(\n        text = "\u8fd9\u662f\u4e00\u4e2a\u666e\u901a\u7684\u6b63\u6587",\n        fontWeight = FontWeight.W900,\n        style = MaterialTheme.typography.h5\n    )\n}\n')),(0,a.kt)("img",{src:l}),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-kotlin"},"enter:EnterTransition = fadeIn() + expandVertically()\n\nsealed class EnterTransition\n")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"EnterTransition")," \u5b9a\u4e49\u4e86\u5f53\u4e00\u4e2a ",(0,a.kt)("inlineCode",{parentName:"p"},"AnimatedVisibility")," ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("em",{parentName:"strong"},"Composable")),"  \u53d8\u5f97\u53ef\u89c1\u65f6\uff0c\u5b83\u662f\u5982\u4f55\u51fa\u73b0\u5728\u5c4f\u5e55\u4e0a\u7684"),(0,a.kt)("p",null,"\u73b0\u53ef\u7528\u7684 3 \u79cd ",(0,a.kt)("inlineCode",{parentName:"p"},"EnterTransition")," \u7684\u7c7b\u522b\u5206\u522b\u662f\uff1a"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"fade ",(0,a.kt)("inlineCode",{parentName:"li"},"fadeIn")),(0,a.kt)("li",{parentName:"ol"},"slide\uff1a",(0,a.kt)("inlineCode",{parentName:"li"},"slideIn"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"slideInHorizontally"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"slideInVertically")),(0,a.kt)("li",{parentName:"ol"},"expand\uff1a",(0,a.kt)("inlineCode",{parentName:"li"},"expandIn"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"expandHorizontally"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"expandVertically"))),(0,a.kt)("p",null,"\u5e76\u4e14\uff0c\u5b83\u4eec\u4e4b\u95f4\u80fd\u591f\u8fdb\u884c\u52a0\u6cd5\u8fd0\u7b97\uff0c\u4f8b\u5982\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-kotlin"},'var state by remember{ mutableStateOf(true)}\nAnimatedVisibility(\n    visible = state,\n    enter = slideInVertically(\n        initialOffsetY = { - 1000 },\n        animationSpec = tween(durationMillis = 1200)\n    ) + fadeIn(\n        animationSpec = tween(durationMillis = 1200)\n    )\n) {\n    Text(\n        text = "\u8fd9\u662f\u4e00\u4e2a\u666e\u901a\u7684\u6b63\u6587",\n        fontWeight = FontWeight.W900,\n        style = MaterialTheme.typography.h5\n    )\n}\n')),(0,a.kt)("img",{src:s}),(0,a.kt)("admonition",{title:"\u6ce8\u610f",type:"info"},(0,a.kt)("p",{parentName:"admonition"},(0,a.kt)("inlineCode",{parentName:"p"},"fadeIn")," \u548c ",(0,a.kt)("inlineCode",{parentName:"p"},"slideIn")," \u4e0d\u5f71\u54cd ",(0,a.kt)("inlineCode",{parentName:"p"},"AnimatedVisibility")," ",(0,a.kt)("strong",{parentName:"p"},"Composable"),"\u3002\u76f8\u6bd4\u4e4b\u4e0b\uff0c",(0,a.kt)("inlineCode",{parentName:"p"},"expandIn")," \u5c06\u6269\u5927\u526a\u8f91\u8303\u56f4\u4ee5\u663e\u793a\u6574\u4e2a\u5185\u5bb9\u3002\u8fd9\u5c06\u81ea\u52a8\u5730\u5c06\u5176\u4ed6\u7684\u5e03\u5c40\u52a8\u753b\u5316\uff0c\u975e\u5e38\u50cf ",(0,a.kt)("inlineCode",{parentName:"p"},"Modifier.animateContentSize"))),(0,a.kt)("h2",{id:"3-\u66f4\u591a"},"3. \u66f4\u591a"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://developer.android.com/reference/kotlin/androidx/compose/animation/package-summary#AnimatedVisibility(kotlin.Boolean,androidx.compose.ui.Modifier,androidx.compose.animation.EnterTransition,androidx.compose.animation.ExitTransition,kotlin.Boolean,kotlin.Function0)"},"AnimatedVisibility \u53c2\u6570\u8be6\u60c5")))}y.isMDXComponent=!0}}]);