"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[1340],{3905:(e,n,o)=>{o.d(n,{Zo:()=>p,kt:()=>u});var t=o(7294);function i(e,n,o){return n in e?Object.defineProperty(e,n,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[n]=o,e}function r(e,n){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),o.push.apply(o,t)}return o}function a(e){for(var n=1;n<arguments.length;n++){var o=null!=arguments[n]?arguments[n]:{};n%2?r(Object(o),!0).forEach((function(n){i(e,n,o[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):r(Object(o)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(o,n))}))}return e}function c(e,n){if(null==e)return{};var o,t,i=function(e,n){if(null==e)return{};var o,t,i={},r=Object.keys(e);for(t=0;t<r.length;t++)o=r[t],n.indexOf(o)>=0||(i[o]=e[o]);return i}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(t=0;t<r.length;t++)o=r[t],n.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(i[o]=e[o])}return i}var l=t.createContext({}),m=function(e){var n=t.useContext(l),o=n;return e&&(o="function"==typeof e?e(n):a(a({},n),e)),o},p=function(e){var n=m(e.components);return t.createElement(l.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},s=t.forwardRef((function(e,n){var o=e.components,i=e.mdxType,r=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),s=m(o),u=i,f=s["".concat(l,".").concat(u)]||s[u]||d[u]||r;return o?t.createElement(f,a(a({ref:n},p),{},{components:o})):t.createElement(f,a({ref:n},p))}));function u(e,n){var o=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var r=o.length,a=new Array(r);a[0]=s;var c={};for(var l in n)hasOwnProperty.call(n,l)&&(c[l]=n[l]);c.originalType=e,c.mdxType="string"==typeof e?e:i,a[1]=c;for(var m=2;m<r;m++)a[m]=o[m];return t.createElement.apply(null,a)}return t.createElement.apply(null,o)}s.displayName="MDXCreateElement"},1284:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>l,contentTitle:()=>a,default:()=>d,frontMatter:()=>r,metadata:()=>c,toc:()=>m});var t=o(7462),i=(o(7294),o(3905));const r={},a=void 0,c={unversionedId:"code/layout/bottomNavigation/bottomNavigation",id:"code/layout/bottomNavigation/bottomNavigation",title:"bottomNavigation",description:"",source:"@site/docs/code/layout/bottomNavigation/bottomNavigation.md",sourceDirName:"code/layout/bottomNavigation",slug:"/code/layout/bottomNavigation/",permalink:"/docs/code/layout/bottomNavigation/",draft:!1,editUrl:"https://github.com/compose-museum/jetpack-compose-book/tree/master/docs/code/layout/bottomNavigation/bottomNavigation.md",tags:[],version:"current",frontMatter:{}},l={},m=[],p={toc:m};function d(e){let{components:n,...o}=e;return(0,i.kt)("wrapper",(0,t.Z)({},p,o,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-kotlin"},"import androidx.compose.animation.AnimatedVisibility\nimport androidx.compose.animation.ExperimentalAnimationApi\nimport androidx.compose.foundation.clickable\nimport androidx.compose.foundation.interaction.MutableInteractionSource\nimport androidx.compose.foundation.layout.*\nimport androidx.compose.foundation.shape.CircleShape\nimport androidx.compose.material.*\nimport androidx.compose.material.icons.Icons\nimport androidx.compose.material.icons.filled.Home\nimport androidx.compose.material.icons.filled.Settings\nimport androidx.compose.runtime.Composable\nimport androidx.compose.runtime.CompositionLocalProvider\nimport androidx.compose.ui.Alignment\nimport androidx.compose.ui.Modifier\nimport androidx.compose.ui.graphics.Color\nimport androidx.compose.ui.res.painterResource\nimport androidx.compose.ui.unit.dp\n\n@ExperimentalAnimationApi\n@Composable\nfun MyBottomNavigation() {\n\n    var selectedItem by remember{ mutableStateOf(0) }\n\n    BottomNavigation(\n        backgroundColor = Color.White\n    ) {\n        for(index in 0..2 ) {\n            Column(\n                modifier = Modifier\n                    .fillMaxHeight()\n                    .weight(1f)\n                    .clickable(\n                        onClick = {\n                            selectedItem = index\n                        },\n                        indication = null,\n                        interactionSource = MutableInteractionSource()\n                    ),\n                verticalArrangement = Arrangement.Center,\n                horizontalAlignment = Alignment.CenterHorizontally\n            ) {\n                NavigationIcon(index, selectedItem)\n                Spacer(Modifier.padding(top = 2.dp))\n                AnimatedVisibility(visible = index == selectedItem) {\n                    Surface(shape = CircleShape, modifier = Modifier.size(5.dp),color = Color(0xFF252527)) { }\n                }\n            }\n        }\n    }\n}\n\n@Composable\nfun NavigationIcon(\n    index:Int,\n    selectedItem:Int\n){\n    val alpha = if (selectedItem != index ) 0.5f else 1f\n\n    CompositionLocalProvider(LocalContentAlpha provides alpha) {\n        when(index){\n            0 -> Icon(Icons.Filled.Home, contentDescription = null)\n            1 -> Icon(painterResource(R.drawable.musicnote), contentDescription = null)\n            else -> Icon(Icons.Filled.Settings, contentDescription = null)\n        }\n    }\n}\n")))}d.isMDXComponent=!0}}]);