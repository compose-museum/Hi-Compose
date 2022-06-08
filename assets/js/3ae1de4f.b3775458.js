"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[8476],{3905:function(e,n,t){t.d(n,{Zo:function(){return m},kt:function(){return s}});var a=t(7294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,a,i=function(e,n){if(null==e)return{};var t,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var p=a.createContext({}),u=function(e){var n=a.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},m=function(e){var n=u(e.components);return a.createElement(p.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},c=a.forwardRef((function(e,n){var t=e.components,i=e.mdxType,r=e.originalType,p=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),c=u(t),s=i,k=c["".concat(p,".").concat(s)]||c[s]||d[s]||r;return t?a.createElement(k,l(l({ref:n},m),{},{components:t})):a.createElement(k,l({ref:n},m))}));function s(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var r=t.length,l=new Array(r);l[0]=c;var o={};for(var p in n)hasOwnProperty.call(n,p)&&(o[p]=n[p]);o.originalType=e,o.mdxType="string"==typeof e?e:i,l[1]=o;for(var u=2;u<r;u++)l[u]=t[u];return a.createElement.apply(null,l)}return a.createElement.apply(null,t)}c.displayName="MDXCreateElement"},8624:function(e,n,t){t.r(n),t.d(n,{assets:function(){return m},contentTitle:function(){return p},default:function(){return s},frontMatter:function(){return o},metadata:function(){return u},toc:function(){return d}});var a=t(7462),i=t(3366),r=(t(7294),t(3905)),l=["components"],o={title:"ParentData"},p=void 0,u={unversionedId:"layout/parent_data",id:"layout/parent_data",title:"ParentData",description:"\u4e00\u4e2a\u4f8b\u5b50",source:"@site/docs/layout/parent_data.mdx",sourceDirName:"layout",slug:"/layout/parent_data",permalink:"/docs/layout/parent_data",draft:!1,editUrl:"https://github.com/compose-museum/jetpack-compose-book/tree/master/docs/layout/parent_data.mdx",tags:[],version:"current",frontMatter:{title:"ParentData"},sidebar:"docs",previous:{title:"SubcomposeLayout",permalink:"/docs/layout/subcomposelayout"},next:{title:"\u8bbe\u8ba1",permalink:"/docs/category/\u8bbe\u8ba1"}},m={},d=[{value:"\u4e00\u4e2a\u4f8b\u5b50",id:"\u4e00\u4e2a\u4f8b\u5b50",level:4},{value:"\u6e90\u7801",id:"\u6e90\u7801",level:4},{value:"\u5c1d\u8bd5\u7528\u7528\uff1a\u54b8\u9c7c\u7684\u201c\u5730\u644a\u201d",id:"\u5c1d\u8bd5\u7528\u7528\u54b8\u9c7c\u7684\u5730\u644a",level:4},{value:"\u5c1d\u8bd5\u7528\u7528\uff1a\u5b9e\u73b0\u7b80\u6613\u7248weight",id:"\u5c1d\u8bd5\u7528\u7528\u5b9e\u73b0\u7b80\u6613\u7248weight",level:4},{value:"\u540e\u7eed",id:"\u540e\u7eed",level:3}],c={toc:d};function s(e){var n=e.components,t=(0,i.Z)(e,l);return(0,r.kt)("wrapper",(0,a.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h4",{id:"\u4e00\u4e2a\u4f8b\u5b50"},"\u4e00\u4e2a\u4f8b\u5b50"),(0,r.kt)("p",null,"\u5982\u679c\u4f60\u60f3\u5b9e\u73b0\u5982\u4e0b\u6548\u679c"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://web.funnysaltyfish.fun/temp_img/202202121752667.png",alt:"\u5de6\u4e0a\u89d2\u7684\u5706\u89d2\u662f\u5c4f\u5e55\u8fb9\u7f18"})),(0,r.kt)("p",null,"\u53ef\u4ee5\u4f7f\u7528\u8fd9\u6837\u4e00\u4e32\u4fee\u9970\u7b26\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-kotlin"},"Box(modifier = Modifier\n            .fillMaxSize()\n            .wrapContentSize(align = Alignment.Center)\n            .size(50.dp)\n            .background(Color.Blue))\n")),(0,r.kt)("p",null,"\u4e5f\u5c31\u662f\u8bf4\uff0c\u5b50\u5fae\u4ef6\u7684\u5c45\u4e2d\u662f\u5b83\u81ea\u5df1\u7684",(0,r.kt)("inlineCode",{parentName:"p"},"wrapContentSize(align = Alignment.Center)"),"\u8c03\u6574\u7684\u7ed3\u679c\u3002\u90a3\u4e48\uff0c\u5982\u679c\u6211\u4eec\u73b0\u5728\u77e5\u9053\u4e86\u5b50\u5fae\u4ef6\uff08\u5c0f\u7684\u84dd\u8272\u65b9\u5757\uff09\u88ab\u5305\u88f9\u5728\u53e6\u4e00\u4e2a\u65b9\u5757\uff08Box\uff09\u91cc\uff0c\u6211\u4eec\u80fd\u4e0d\u80fd\u8ba9\u7236\u5e03\u5c40\u5e2e\u5fd9\u786e\u5b9a\u5c45\u4e2d\u4f4d\u7f6e\u5462\uff1f"),(0,r.kt)("p",null,"\u7b54\u6848\u662f\u53ef\u4ee5\u7684\uff01",(0,r.kt)("inlineCode",{parentName:"p"},"Box")," \u5728\u5176 ",(0,r.kt)("inlineCode",{parentName:"p"},"content")," \u4f5c\u7528\u57df\u4e2d\u63d0\u4f9b\u4e86 ",(0,r.kt)("inlineCode",{parentName:"p"},"align")," \u65b9\u6cd5\uff0c\u8fd9\u53ef\u4ee5\u8ba9",(0,r.kt)("strong",{parentName:"p"},"\u5b50\u5fae\u4ef6\u81ea\u884c\u544a\u77e5\u7236\u5e03\u5c40\uff1a\u6211\u9700\u8981\u5c45\u4e2d")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-kotlin"},"@Composable\ninline fun Box(\n    modifier: Modifier = Modifier,\n    // content \u63d0\u4f9b\u4e86 BoxScope\n    content: @Composable BoxScope.() -> Unit\n) {\n    val measurePolicy = rememberBoxMeasurePolicy(contentAlignment, propagateMinConstraints)\n    Layout(\n        content = { BoxScopeInstance.content() },\n        measurePolicy = measurePolicy,\n        modifier = modifier\n    )\n}\n")),(0,r.kt)("p",null,"\u800c ",(0,r.kt)("inlineCode",{parentName:"p"},"BoxScope"),"\u7684\u6e90\u7801\u5982\u4e0b\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-kotlin"},"@Immutable\ninterface BoxScope {\n    @Stable\n    fun Modifier.align(alignment: Alignment): Modifier\n\n    @Stable\n    fun Modifier.matchParentSize(): Modifier\n}\n")),(0,r.kt)("p",null,"\u4f5c\u4e3a\u63a5\u53e3\uff0c\u5728\u6b64\u4f5c\u7528\u57df\u4e2d\uff0c\u5b50\u5fae\u4ef6\u5c31\u53ef\u4ee5\u8c03\u7528 ",(0,r.kt)("inlineCode",{parentName:"p"},"align")," \u544a\u8bc9\u7236\u5fae\u4ef6\u81ea\u5df1\u7684align\u65b9\u5f0f\u4e86"),(0,r.kt)("p",null,"\u6240\u4ee5\u4e0a\u9762\u7684\u6548\u679c\u8fd9\u53ef\u4ee5\u8fd9\u6837\u5b9e\u73b0\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-kotlin"},"@Composable\nfun ModifierSample2() {\n    // \u7236\u5143\u7d20\n    Box(modifier = Modifier\n        .width(200.dp)\n        .height(300.dp)\n        .background(Color.Yellow)){\n        // \u5b50\u5143\u7d20\n        Box(modifier = Modifier\n            .align(Alignment.Center)\n            .size(50.dp)\n            .background(Color.Blue))\n    }\n}\n")),(0,r.kt)("p",null,"\u6548\u679c\u662f\u4e00\u6837\u7684"),(0,r.kt)("p",null,"\u4e0d\u50cf\u6211\u4eec\u4e4b\u524d\u770b\u5230\u7684",(0,r.kt)("inlineCode",{parentName:"p"},"\u5e03\u5c40\u4fee\u9970\u7b26"),"\uff0calign\u662f",(0,r.kt)("inlineCode",{parentName:"p"},"\u7236\u7ea7\u6570\u636e\u4fee\u9970\u7b26"),"\u3002\u672c\u8d28\u4e0a\uff0c\u8fd9\u7c7b\u7531\u5b50\u5fae\u4ef6\u5411\u7236\u5e03\u5c40\u901a\u4fe1\u5c31\u662f\u7531 ",(0,r.kt)("inlineCode",{parentName:"p"},"parentData")," \u5b9e\u73b0\u7684\u3002\u5982\u4e0a\u9762\u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"align")," \u6700\u7ec8\u4f1a\u6d89\u53ca\u5230\u5982\u4e0b\u4ee3\u7801\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-kotlin"},"override val parentData: Any?\n        get() = with(modifier) {\n            /**\n             * ParentData provided through the parentData node will override the data provided\n             * through a modifier\n             */\n            layoutNode.measureScope.modifyParentData(wrapped.parentData)\n        }\n")),(0,r.kt)("h4",{id:"\u6e90\u7801"},"\u6e90\u7801"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"ParentDataModifier"),"\u6e90\u7801\u5982\u4e0b\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-kotlin"},"/**\n * \u4e00\u4e2a\u4fee\u9970\u7b26[Modifier]\uff0c\u4e3a\u7236\u5e03\u5c40[Layout]\u63d0\u4f9b\u6570\u636e. \n * \u53ef\u5728[Layout]\u7684 measurement \u548c positioning \u8fc7\u7a0b\u4e2d\u901a\u8fc7 [IntrinsicMeasurable.parentData] \u8bfb\u53d6\u5230.\n * parent data \u901a\u5e38\u88ab\u7528\u4e8e\u544a\u8bc9\u7236\u5e03\u5c40\uff1a\u5b50\u5fae\u4ef6\u5e94\u8be5\u5982\u4f55\u6d4b\u91cf\u548c\u5b9a\u4f4d\n */\ninterface ParentDataModifier : Modifier.Element {\n    /**\n     * Provides a parentData, given the [parentData] already provided through the modifier's chain.\n     */\n    fun Density.modifyParentData(parentData: Any?): Any?\n}\n")),(0,r.kt)("h4",{id:"\u5c1d\u8bd5\u7528\u7528\u54b8\u9c7c\u7684\u5730\u644a"},"\u5c1d\u8bd5\u7528\u7528\uff1a\u54b8\u9c7c\u7684\u201c\u5730\u644a\u201d"),(0,r.kt)("p",null,"\u63a5\u4e0b\u6765\u6211\u4eec\u5c1d\u8bd5\u7528\u7528\u5b83\u3002\u6211\u4eec\u6765\u5047\u60f3\u8fd9\u6837\u4e00\u4e2a\u5e03\u5c40\uff1a",(0,r.kt)("inlineCode",{parentName:"p"},"\u5c0f\u54b8\u9c7c\u7684\u5730\u644a")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u201c\u5730\u644a\u201d\u91cc\u9762\u6709\u4e00\u4e9b\u5fae\u4ef6\uff0c\u5b83\u4eec\u4e00\u4e2a\u4e00\u4e2a\u7eb5\u5411\u6392\u5217")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u6bcf\u4e2a\u5b50\u5fae\u4ef6\u90fd\u662f\u201c\u4ed8\u8d39\u201d\u7684\uff0c\u6bd4\u5982\u67d0\u4e00\u4e2a ",(0,r.kt)("inlineCode",{parentName:"p"},"Box")," \u201c\u552e\u4ef7\u201d100\uff0c\u53e6\u4e00\u4e2a ",(0,r.kt)("inlineCode",{parentName:"p"},"Box")," \u201c\u552e\u4ef7\u201d200\u2026\u2026\u4ee5\u6b64\u7c7b\u63a8")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u6bcf\u4e2a\u5b50\u5fae\u4ef6\u4f1a\u663e\u793a\u81ea\u5df1\u7684\u4ef7\u683c\uff0c\u800c\u201c\u5730\u644a\u201d\u4f1a\u663e\u793a\u603b\u4ef7\u94b1"))),(0,r.kt)("p",null,"\u4e0a\u8ff0\u63cf\u8ff0\u6362\u6210\u4ee3\u7801\u7684\u8bdd\u5c31\u662f\uff1a\u6bcf\u4e00\u4e2a\u5b50\u5fae\u4ef6\u901a\u8fc7\u81ea\u5b9a\u4e49\u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"Modifier")," \u5b9a\u4e49\u81ea\u8eab\u7684\u4ef7\u683c\uff0c\u5e76\u628a\u5b83\u4f20\u9012\u7ed9\u7236\u5e03\u5c40\uff0c\u7236\u5e03\u5c40\u8ba1\u7b97\u6240\u6709\u7684\u4ef7\u683c\u7d2f\u79ef\u5728\u4e00\u8d77\uff0c\u5e76\u663e\u793a\u51fa\u6765\u3002"),(0,r.kt)("p",null,"\u5f00\u59cb\u5199\u4ee3\u7801\u5427\u3002\u6211\u4eec\u5148\u5b9a\u4e49\u4e00\u4e2a\u7c7b\uff0c\u7ee7\u627f\u81ea ",(0,r.kt)("inlineCode",{parentName:"p"},"ParentDataModifier")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-kotlin"},"// \u4f5c\u8005 FunnySaltyFish (http://funnysaltyfish.fun)\nclass CountNumParentData(var countNum: Int) : ParentDataModifier {\n    override fun Density.modifyParentData(parentData: Any?) = this@CountNumParentData\n}\n")),(0,r.kt)("p",null,"\uff08\u4e3a\u4e86\u7b80\u5355\u8d77\u89c1\uff0c\u6211\u4eec\u5c06 ",(0,r.kt)("inlineCode",{parentName:"p"},"modifyParentData")," \u8fd9\u4e2a\u65b9\u6cd5\u76f4\u63a5\u8fd4\u56de\u81ea\u8eab\u4e86\u3002\u5728\u539f\u7248 ",(0,r.kt)("inlineCode",{parentName:"p"},"Column")," \u7684\u5b9e\u73b0\u4e2d\uff0c\u8fd9\u4e2a\u65b9\u6cd5\u5b9e\u9645\u7c7b\u4f3c\u8fd9\u6837\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-kotlin"},"override fun Density.modifyParentData(parentData: Any?) =\n    ((parentData as? RowColumnParentData) ?: RowColumnParentData()).also {\n        it.weight = weight\n        it.fill = fill\n    }\n")),(0,r.kt)("p",null,"\uff09"),(0,r.kt)("p",null,"\u7136\u540e\u6211\u4eec\u7f16\u5199\u4e00\u4e2a\u7b80\u5355\u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"Modifier"),"\uff0c\u8fd4\u56de\u4e00\u4e2a\u5b9e\u4f8b"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-kotlin"},"fun Modifier.count(num: Int) = this.then(\n        // \u8fd9\u90e8\u5206\u662f \u7236\u7ea7\u6570\u636e\u4fee\u9970\u7b26\n        CountNumParentData(num)\n    )\n")),(0,r.kt)("p",null,"\u63a5\u4e0b\u6765\u6211\u4eec\u590d\u7528\u4e00\u4e0b\u4e4b\u524d\u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"VerticalLayout"),"\uff0c\u53ea\u4e0d\u8fc7\u5728\u91cc\u9762\u8bfb\u53d6\u4e00\u4e0b ",(0,r.kt)("inlineCode",{parentName:"p"},"ParentData")," \u800c\u5df2\uff0c\u90e8\u5206\u4ee3\u7801\u5982\u4e0b"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-kotlin"},'var num = 0\nLayout(\n    modifier = modifier,\n    content = content\n) { measurables: List<Measurable>, constraints: Constraints ->\n    val placeables = measurables.map {\n        if (it.parentData is CountNumParentData) {\n            num += (it.parentData as CountNumParentData).countNum\n        }\n        it.measure(constraints)\n    }\n    // \u7701\u7565\u5e03\u5c40\u7684\u5176\u4ed6\u4ee3\u7801\n    Log.d(TAG, "CountChildrenNumber: \u603b\u4ef7\u683c\u662f\uff1a$num")\n}\n')),(0,r.kt)("p",null,"\u6700\u540e\u8fd0\u884c\u4e00\u4e0b\u8fd9\u4e2a\u4f8b\u5b50"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-kotlin"},"@Composable\nfun CountNumTest() {\n    CountChildrenNumber {\n        repeat(5) {\n            Box(\n                modifier = Modifier\n                    .size(40.dp)\n                    .background(randomColor())\n                    .count(Random.nextInt(30, 100))\n            )\n        }\n    }\n}\n")),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://web.funnysaltyfish.fun/temp_img/202203071601534.png",alt:"image-20220307160129098"})),(0,r.kt)("p",null,"\u5bf9\u5e94\u7684\u603b\u4ef7\u683c\u8f93\u51fa\u5982\u4e0b\uff1a"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://web.funnysaltyfish.fun/temp_img/202203071602599.png",alt:"image-20220307160211472"})),(0,r.kt)("p",null,"\u4f60\u53ef\u80fd\u6ce8\u610f\u5230\u4e86\uff0c\u4e0a\u9762\u7684Box\u91cc\u9762\u8fd8\u7528\u6587\u5b57\u6307\u660e\u4e86\u81ea\u5df1\u7684\u201c\u552e\u4ef7\u201d\uff0c\u4f46\u8c03\u7528\u7684\u4ee3\u7801\u5374\u6ca1\u7528\u5230",(0,r.kt)("inlineCode",{parentName:"p"},"Text"),"\u3002\u8fd9\u91cc\u7684\u6587\u672c\u53c8\u662f\u600e\u4e48\u753b\u7684\u5462\uff1f"),(0,r.kt)("p",null,"\u7b54\u6848\u5c31\u662f\u521a\u521a\u7684",(0,r.kt)("inlineCode",{parentName:"p"},"count"),"Modifier\uff0c\u9664\u4e86\u4f5c\u4e3a",(0,r.kt)("inlineCode",{parentName:"p"},"\u7236\u7ea7\u6570\u636e\u4fee\u9970\u7b26"),"\u5916\uff0c\u5b83\u8fd8\u53d1\u6325\u4e86\u4fee\u9970\u81ea\u8eab\u7684\u4f5c\u7528\u3002\u5b83\u7684\u4ee3\u7801\u5b8c\u6574\u5982\u4e0b\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-kotlin"},"fun Modifier.count(num: Int) = this.drawWithContent {\n        drawIntoCanvas { canvas ->\n            val paint = android.graphics\n                .Paint()\n                .apply {\n                    textSize = 40F\n                }\n            canvas.nativeCanvas.drawText(num.toString(), 0F, 40F, paint)\n        }\n        // \u7ed8\u5236 Box \u81ea\u8eab\u5185\u5bb9\n        drawContent()\n    }\n    .then(\n        // \u8fd9\u90e8\u5206\u662f \u7236\u7ea7\u6570\u636e\u4fee\u9970\u7b26\n        CountNumParentData(num)\n    )\n")),(0,r.kt)("p",null,"\u8fd9\u91cc\u7528\u5230\u4e86\u7ed8\u5236\u65f6\u7684\u90e8\u5206\u5185\u5bb9\uff0c\u5982\u679c\u4f60\u611f\u5174\u8da3\u7684\u8bdd\uff0c\u540e\u9762\u6211\u8fd8\u53ef\u80fd\u4ecb\u7ecd\u4e00\u4e0b\u81ea\u5b9a\u4e49\u7ed8\u5236\u3002\u55ef\uff0c\u6316\u4e86\u4e2a\u5751\uff0c\u4e4b\u540e\u518d\u586b\u5427~"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"ParentData"),"\u7684\u5b9e\u9645\u573a\u666f\u4e3b\u8981\u96c6\u4e2d\u5728\u7236\u5e03\u5c40\u5bf9\u5b50\u5fae\u4ef6\u7684\u7279\u6b8a\u4f4d\u7f6e\u548c\u5927\u5c0f\u7684\u63a7\u5236\u4e0a\uff0c\u6bd4\u5982",(0,r.kt)("inlineCode",{parentName:"p"},"Box"),"\u7684",(0,r.kt)("inlineCode",{parentName:"p"},"align"),"\uff0c",(0,r.kt)("inlineCode",{parentName:"p"},"Column"),"\u548c",(0,r.kt)("inlineCode",{parentName:"p"},"Row"),"\u7684",(0,r.kt)("inlineCode",{parentName:"p"},"align"),"\u3001",(0,r.kt)("inlineCode",{parentName:"p"},"alignBy"),"\u3001",(0,r.kt)("inlineCode",{parentName:"p"},"weight"),"\u4e0a\u3002\u63a5\u4e0b\u6765\u6211\u4eec\u6765\u5b9e\u73b0\u4e00\u4e2a\u7b80\u5316\u7248\u7684",(0,r.kt)("inlineCode",{parentName:"p"},"weight"),"\u5427"),(0,r.kt)("h4",{id:"\u5c1d\u8bd5\u7528\u7528\u5b9e\u73b0\u7b80\u6613\u7248weight"},"\u5c1d\u8bd5\u7528\u7528\uff1a\u5b9e\u73b0\u7b80\u6613\u7248weight"),(0,r.kt)("p",null,"\u4e3a\u4e86\u7b80\u6613\u8d77\u89c1\uff0c\u6211\u4eec\u5b9e\u73b0\u7684",(0,r.kt)("inlineCode",{parentName:"p"},"weight"),"\u6709\u5982\u4e0b\u9650\u5236\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u6240\u6709\u5b50\u5fae\u4ef6\u90fd\u6709weight\uff0c\u6309\u6bd4\u4f8b\u5b9e\u73b0\u9ad8\u5ea6\u5206\u914d"),(0,r.kt)("li",{parentName:"ul"},"\u7236\u5e03\u5c40\u7684\u5bbd\u9ad8\u662f\u786e\u5b9a\u7684")),(0,r.kt)("p",null,"\u6240\u4ee5\u4ee3\u7801\u7684\u903b\u8f91\u5c31\u662f\uff1a\u8bfb\u53d6\u6240\u6709",(0,r.kt)("inlineCode",{parentName:"p"},"weight"),"\uff0c\u6309\u6bd4\u4f8b\u5206\u914d\u9ad8\u5ea6\u5c31\u884c\u3002"),(0,r.kt)("p",null,"\u9996\u5148\u7c7b\u4f3c\u4e8e",(0,r.kt)("inlineCode",{parentName:"p"},"Box"),"\uff0c\u6211\u4eec\u4e5f\u5199\u4e00\u4e2a",(0,r.kt)("inlineCode",{parentName:"p"},"VerticalScope"),"\uff0c\u8ba9\u6211\u4eec\u81ea\u5b9a\u4e49\u7684weight\u53ea\u80fd\u5728\u81ea\u5b9a\u4e49\u7684\u5e03\u5c40\u4e2d\u4f7f\u7528"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-kotlin"},"interface VerticalScope {\n    @Stable\n    fun Modifier.weight(weight: Float) : Modifier\n}\n")),(0,r.kt)("p",null,"\u7136\u540e\u518d\u81ea\u5b9a\u4e49\u6211\u4eec\u7684",(0,r.kt)("inlineCode",{parentName:"p"},"ParentDataModifier")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-kotlin"},"class WeightParentData(val weight: Float=0f) : ParentDataModifier {\n    override fun Density.modifyParentData(parentData: Any?) = this@WeightParentData\n}\n")),(0,r.kt)("p",null,"\u5199\u4e00\u4e2aobject\uff0c\u8ba9\u5b83\u5b9e\u73b0\u6211\u4eec\u7684",(0,r.kt)("inlineCode",{parentName:"p"},"VerticalScope")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-kotlin"},"object VerticalScopeInstance : VerticalScope {\n    @Stable\n    override fun Modifier.weight(weight: Float): Modifier = this.then(\n        WeightParentData(weight)\n    )\n}\n")),(0,r.kt)("p",null,"\u63a5\u4e0b\u6765\uff0c\u5c31\u662f\u5177\u4f53\u7684",(0,r.kt)("inlineCode",{parentName:"p"},"Composable"),"\u5b9e\u73b0\u4e86\u3002\u6ce8\u610f\uff0c\u5728\u6b64\u5904\uff0c\u6211\u4eec\u7684",(0,r.kt)("inlineCode",{parentName:"p"},"content"),"\u9700\u8981\u52a0\u4e0a",(0,r.kt)("inlineCode",{parentName:"p"},"VerticalScope.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-kotlin"},"@Composable\nfun WeightedVerticalLayout(\n    modifier: Modifier = Modifier,\n    content: @Composable VerticalScope.() -> Unit\n)\n")),(0,r.kt)("p",null,"\u5177\u4f53\u5b9e\u73b0\u7c7b\u4f3c\u4e8e\u4e4b\u524d\u7684",(0,r.kt)("inlineCode",{parentName:"p"},"VerticalLayout"),"\uff0c\u4e0d\u540c\u4e4b\u5904\u5728\u4e8e\u6211\u4eec\u8981\u83b7\u53d6\u5230\u5404\u4e2a",(0,r.kt)("inlineCode",{parentName:"p"},"WeightParentData"),"\u7684\u503c\u5e76\u4fdd\u5b58\u4e0b\u6765\uff0c\u8ba1\u7b97\u603b\u7684weight\u3002\u8fd9\u6837\u5c31\u53ef\u4ee5\u6309\u6bd4\u4f8b\u5206\u914d\u9ad8\u5ea6\u4e86\u3002"),(0,r.kt)("p",null,"\u5173\u952e\u4ee3\u7801\u5982\u4e0b\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-kotlin"},"val measurePolicy = MeasurePolicy { measurables, constraints ->\n    val placeables = measurables.map {it.measure(constraints)}\n    // \u83b7\u53d6\u5404weight\u503c\n    val weights = measurables.map {\n        (it.parentData as WeightParentData).weight\n    }\n    val totalHeight = constraints.maxHeight\n    val totalWeight = weights.sum()\n    // \u5bbd\u5ea6\uff1a\u6700\u5bbd\u7684\u4e00\u9879\n    val width = placeables.maxOf { it.width }\n\n    layout(width, totalHeight) {\n        var y = 0\n        placeables.forEachIndexed() { i, placeable ->\n            placeable.placeRelative(0, y)\n            // \u6309\u6bd4\u4f8b\u8bbe\u7f6e\u5927\u5c0f\n            y += (totalHeight * weights[i] / totalWeight).toInt()\n        }\n    }\n}\nLayout(modifier = modifier, content = { VerticalScopeInstance.content() }, measurePolicy=measurePolicy)\n")),(0,r.kt)("p",null,"\u6d4b\u8bd5\u4e00\u4e0b\uff1f\u6211\u4eec\u9884\u5907\u8ba9\u4e09\u4e2aBox\u6309",(0,r.kt)("inlineCode",{parentName:"p"},"1:2:7"),"\u7684\u9ad8\u5ea6\u663e\u793a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-kotlin"},"WeightedVerticalLayout(Modifier.padding(16.dp).height(200.dp)) {\n    Box(modifier = Modifier.width(40.dp).weight(1f).background(randomColor()))\n    Box(modifier = Modifier.width(40.dp).weight(2f).background(randomColor()))\n    Box(modifier = Modifier.width(40.dp).weight(7f).background(randomColor()))\n}\n")),(0,r.kt)("p",null,"\u6700\u7ec8\u6548\u679c\u5982\u4e0b\uff0c\u53ef\u4ee5\u770b\u5230\uff0c\u4e09\u4e2aBox\u6b63\u786e\u6309\u7167",(0,r.kt)("inlineCode",{parentName:"p"},"1:2:7"),"\u7684\u6bd4\u4f8b\u663e\u793a\u9ad8\u5ea6"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://web.funnysaltyfish.fun/temp_img/202203101113984.png",alt:"image-20220310111258869"})),(0,r.kt)("p",null,"\u6210\u529f\uff01"),(0,r.kt)("h3",{id:"\u540e\u7eed"},"\u540e\u7eed"),(0,r.kt)("p",null,"\u672c\u6587\u4f5c\u8005\uff1a",(0,r.kt)("a",{parentName:"p",href:"https://blog.funnysaltyfish.fun"},"FunnySaltyFish")),(0,r.kt)("p",null,"\u672c\u6587\u53c2\u8003\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://juejin.cn/post/6964010073576177671"},"JetPack Compose \u624b\u5199\u4e00\u4e2a Row \u5e03\u5c40 | \u81ea\u5b9a\u4e49\u5e03\u5c40 - \u6398\u91d1 (juejin.cn)")),(0,r.kt)("li",{parentName:"ul"},"Android\u5b98\u65b9\u89c6\u9891\uff1a",(0,r.kt)("a",{parentName:"li",href:"https://www.youtube.com/watch?v=zMKMwh9gZuI"},"Deep dive into Jetpack Compose layouts"))),(0,r.kt)("p",null,"\u672c\u6587\u6240\u6709\u4ee3\u7801\u89c1\uff1a",(0,r.kt)("a",{parentName:"p",href:"https://github.com/FunnySaltyFish/JetpackComposeStudy/tree/master/app/src/main/java/com/funny/compose/study/ui/post_layout"},"\u6b64\u5904")))}s.isMDXComponent=!0}}]);