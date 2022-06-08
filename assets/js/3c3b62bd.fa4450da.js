"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[7659],{3905:function(e,n,t){t.d(n,{Zo:function(){return p},kt:function(){return f}});var r=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var c=r.createContext({}),u=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},p=function(e){var n=u(e.components);return r.createElement(c.Provider,{value:n},e.children)},s={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=u(t),f=o,m=d["".concat(c,".").concat(f)]||d[f]||s[f]||a;return t?r.createElement(m,i(i({ref:n},p),{},{components:t})):r.createElement(m,i({ref:n},p))}));function f(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=d;var l={};for(var c in n)hasOwnProperty.call(n,c)&&(l[c]=n[c]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var u=2;u<a;u++)i[u]=t[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},5355:function(e,n,t){t.r(n),t.d(n,{assets:function(){return d},contentTitle:function(){return p},default:function(){return y},frontMatter:function(){return u},metadata:function(){return s},toc:function(){return f}});var r=t(7462),o=t(3366),a=(t(7294),t(3905)),i=t.p+"assets/images/demo-dce9d649a23d5dbd25812795423cb578.png",l=t.p+"assets/images/demo2-af7c07390ecb8ee1704ab66908b51f3f.png",c=["components"],u={title:"Row"},p=void 0,s={unversionedId:"layout/row",id:"layout/row",title:"Row",description:"Row \u7ec4\u4ef6\u80fd\u591f\u5c06\u91cc\u9762\u7684\u5b50\u9879\u6309\u7167\u4ece\u5de6\u5230\u53f3\u7684\u65b9\u5411\u6c34\u5e73\u6392\u5217\u3002\u548c Column \u7ec4\u4ef6\u4e00\u8d77\u914d\u5408\uff0c\u6211\u4eec\u53ef\u4ee5\u6784\u5efa\u51fa\u5f88\u4e30\u5bcc\u7684\u754c\u9762\u3002",source:"@site/docs/layout/row.mdx",sourceDirName:"layout",slug:"/layout/row",permalink:"/docs/layout/row",draft:!1,editUrl:"https://github.com/compose-museum/jetpack-compose-book/tree/master/docs/layout/row.mdx",tags:[],version:"current",frontMatter:{title:"Row"},sidebar:"docs",previous:{title:"ModalBottomSheetLayout",permalink:"/docs/layout/modalbottomsheetlayout"},next:{title:"Scaffold",permalink:"/docs/layout/scaffold"}},d={},f=[],m={toc:f};function y(e){var n=e.components,t=(0,o.Z)(e,c);return(0,a.kt)("wrapper",(0,r.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-kotlin"},"@Composable\ninline fun Row(\n    modifier: Modifier? = Modifier,\n    horizontalArrangement: Arrangement.Horizontal? = Arrangement.Start,\n    verticalAlignment: Alignment.Vertical? = Alignment.Top,\n    content: (@Composable @ExtensionFunctionType RowScope.() -> Unit)?\n): Unit\n")),(0,a.kt)("p",null,"Row \u7ec4\u4ef6\u80fd\u591f\u5c06\u91cc\u9762\u7684\u5b50\u9879\u6309\u7167\u4ece\u5de6\u5230\u53f3\u7684\u65b9\u5411\u6c34\u5e73\u6392\u5217\u3002\u548c Column \u7ec4\u4ef6\u4e00\u8d77\u914d\u5408\uff0c\u6211\u4eec\u53ef\u4ee5\u6784\u5efa\u51fa\u5f88\u4e30\u5bcc\u7684\u754c\u9762\u3002"),(0,a.kt)("p",null,"\u6211\u4eec\u6765\u8bd5\u8bd5\u5236\u4f5c\u4e00\u4e2a\u7b80\u5355\u7684\u5e16\u5b50\u754c\u9762\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-kotlin"},' Surface(\n    shape = RoundedCornerShape(8.dp),\n    modifier = Modifier\n        .padding(horizontal = 12.dp) // \u8bbe\u7f6e Surface \u7684\u5916\u8fb9\u8ddd\n        .fillMaxWidth(),\n    elevation = 10.dp\n) {\n    Column(\n        modifier = Modifier.padding(12.dp) // \u91cc\u9762\u5185\u5bb9\u7684\u5916\u8fb9\u8ddd\n    ) {\n        Text(\n            text = "Jetpack Compose \u662f\u4ec0\u4e48\uff1f",\n            style = MaterialTheme.typography.h6\n        )\n        Spacer(Modifier.padding(vertical = 5.dp))\n        Text(\n            text = "Jetpack Compose \u662f\u7528\u4e8e\u6784\u5efa\u539f\u751f Android \u754c\u9762\u7684\u65b0\u5de5\u5177\u5305\u3002\u5b83\u53ef\u7b80\u5316\u5e76\u52a0\u5feb Android \u4e0a\u7684\u754c\u9762\u5f00\u53d1\uff0c\u4f7f\u7528\u66f4\u5c11\u7684\u4ee3\u7801\u3001\u5f3a\u5927\u7684\u5de5\u5177\u548c\u76f4\u89c2\u7684 Kotlin API\uff0c\u5feb\u901f\u8ba9\u5e94\u7528\u751f\u52a8\u800c\u7cbe\u5f69\u3002"\n        )\n        Row(\n            modifier = Modifier.fillMaxWidth(),\n            horizontalArrangement = Arrangement.SpaceBetween\n        ) {\n            IconButton(\n                onClick = { /*TODO*/ }\n            ) {\n                Icon(Icons.Filled.Favorite, null)\n            }\n            IconButton(\n                onClick = { /*TODO*/ },\n            ) {\n                Icon(painterResource(id = R.drawable.chat), null)\n            }\n            IconButton(\n                onClick = { /*TODO*/ },\n            ) {\n                Icon(Icons.Filled.Share, null)\n            }\n        }\n    }\n}\n')),(0,a.kt)("img",{src:i}),(0,a.kt)("p",null,"Row \u7ec4\u4ef6\u4e2d\u7684 horizontalArrangement \u53c2\u6570\u5e2e\u52a9\u6211\u4eec\u5408\u7406\u5730\u5206\u914d\u4e86\u6309\u94ae\u7684\u6c34\u5e73\u4f4d\u7f6e\uff0c\u53ef\u4ee5\u770b\u5230\uff0c\u559c\u6b22\u6309\u94ae\u548c\u5206\u4eab\u6309\u94ae\u88ab\u5206\u914d\u5728\u4e86\u5de6\u53f3\u4e24\u8fb9\uff0c\u4e8b\u5b9e\u4e0a\uff0cArrangment \u5c31\u662f\u6765\u5e2e\u52a9\u6211\u4eec\u5feb\u901f\u5b89\u6392\u597d\u5b50\u9879\u7684\u4f4d\u7f6e\uff0c\u9664\u4e86 Center\uff08\u5c45\u4e2d\uff09, Start\uff08\u6c34\u5e73\u9760\u5de6\uff09, End\uff08\u6c34\u5e73\u9760\u53f3\uff09 \u8fd9\u4e9b\u5e38\u89c1\u7684\u4f4d\u7f6e\uff0c\u8fd8\u6709\u4e00\u4e9b\u5728\u7279\u5b9a\u573a\u666f\u4e0b\u53ef\u80fd\u7528\u5230\u7684\u4f4d\u7f6e\u5206\u5e03\uff0c\u4f8b\u5982 Space Between, Space Evenly \u7b49\u7b49\u3002"),(0,a.kt)("img",{src:l}))}y.isMDXComponent=!0}}]);