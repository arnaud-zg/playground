(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{Qgnc:function(e,a,t){"use strict";t.r(a),t.d(a,"_frontmatter",(function(){return p})),t.d(a,"default",(function(){return m}));var n=t("Fcif"),i=t("+I+c"),o=(t("mXGw"),t("/FXl")),s=t("TjRS"),r=t("ZFoC"),c=t("akqM"),d=t("pjtS"),l=t("Q9qO"),u=(t("aD51"),["components"]),p={};void 0!==p&&p&&p===Object(p)&&Object.isExtensible(p)&&!Object.prototype.hasOwnProperty.call(p,"__filemeta")&&Object.defineProperty(p,"__filemeta",{configurable:!0,value:{name:"_frontmatter",filename:"src/hooks/useDocumentTransition/PageTransition.mdx"}});var g={_frontmatter:p},b=s.a;function m(e){var a,t,m,T,P,h,O=e.components,y=Object(i.a)(e,u);return Object(o.b)(b,Object(n.a)({},g,y,{components:O,mdxType:"MDXLayout"}),Object(o.b)("h1",{id:"usepagetransition"},"usePageTransition"),Object(o.b)("h2",{id:"introduction"},"Introduction"),Object(o.b)("p",null,"Following the presentation of Jake Archibald on the Google I/O 2022, I was\nreally excited to document transition API. Unlike mobile application\ndevelopment, creating a nice transition from one page to another implies to\nuse an external library such as framer or have a in-depth knowledge about css\nanimation and keyframes."),Object(o.b)("p",null,"From what I have experimented, document transition API provides modularity on\nthe code. This means the animations are added to an application as a plugin and\ncan be easily removed at any time. Moreove, it is very easy to use and have a\nfade or zoom animation. And the icing on the cake, it's customizable with css\nanimation and keyframes."),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{href:"https://www.youtube.com/watch?v=JCJUPJ_zDQ4",target:"_blank"},"Video: Google I/O Bringing page transitions to the web")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{href:"https://github.com/WICG/shared-element-transitions",target:"_blank"},"Source: Web Incubator CG / Shared Element Transitions"))),Object(o.b)("h2",{id:"transition-status"},"Transition Status"),Object(o.b)("p",null,"Given that the page transition API is still in the experimental phase, to get\nstarted with element transitions today, you need to enable the API via\n",Object(o.b)("strong",{parentName:"p"},"chrome://flags/#document-transition"),"."),Object(o.b)(r.c,{__position:0,__code:"<PageTransitionStatus />",__scope:(a={props:y,DefaultLayout:s.a,Playground:r.c,Props:r.d,useNavigate:c.a,NoPageTransition:d.a,PageTransitionCSS:d.b,PageTransitionDOM:d.c,PageTransitionFadeInFadeOut:d.d,PageTransitionStatus:d.e,PageTransitionTranslate:d.f,usePageTransition:l.a},a.DefaultLayout=s.a,a._frontmatter=p,a),mdxType:"Playground"},Object(o.b)(d.e,{mdxType:"PageTransitionStatus"})),Object(o.b)("h2",{id:"no-transition"},"No Transition"),Object(o.b)("p",null,"No transition on this list of images."),Object(o.b)(r.c,{__position:1,__code:"<NoPageTransition />",__scope:(t={props:y,DefaultLayout:s.a,Playground:r.c,Props:r.d,useNavigate:c.a,NoPageTransition:d.a,PageTransitionCSS:d.b,PageTransitionDOM:d.c,PageTransitionFadeInFadeOut:d.d,PageTransitionStatus:d.e,PageTransitionTranslate:d.f,usePageTransition:l.a},t.DefaultLayout=s.a,t._frontmatter=p,t),mdxType:"Playground"},Object(o.b)(d.a,{mdxType:"NoPageTransition"})),Object(o.b)("h2",{id:"fade-in--fade-out"},"Fade In / Fade Out"),Object(o.b)("p",null,'The default transition is a cross-fade from the image list to the selected\nimage. The transition is made based on the "screenshot" made on the outgoing and\nincoming pages. The outgoing elements animates from\n',Object(o.b)("inlineCode",{parentName:"p"},"opacity: 1")," to ",Object(o.b)("inlineCode",{parentName:"p"},"opacity: 0"),", whereas the incoming elements animates from\n",Object(o.b)("inlineCode",{parentName:"p"},"opacity: 0")," to ",Object(o.b)("inlineCode",{parentName:"p"},"opacity: 1"),", creating a cross-fade."),Object(o.b)(r.c,{__position:2,__code:"<PageTransitionFadeInFadeOut />",__scope:(m={props:y,DefaultLayout:s.a,Playground:r.c,Props:r.d,useNavigate:c.a,NoPageTransition:d.a,PageTransitionCSS:d.b,PageTransitionDOM:d.c,PageTransitionFadeInFadeOut:d.d,PageTransitionStatus:d.e,PageTransitionTranslate:d.f,usePageTransition:l.a},m.DefaultLayout=s.a,m._frontmatter=p,m),mdxType:"Playground"},Object(o.b)(d.d,{mdxType:"PageTransitionFadeInFadeOut"})),Object(o.b)("h2",{id:"translate-with-pseudo-element-selectors"},"Translate with pseudo-element selectors"),Object(o.b)("p",null,"If you want to go further and use custom transition. Each element could be\ntargeted using CSS pseudo selectors, it means that all the animation are driven\nby CSS. Here are the pseudo selectors provided by Page Transition API."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"::page-transition-container(root)\n::page-transition-image-wrapper(root)\n::page-transition-outgoing-image(root)\n::page-transition-incoming-image(root)\n")),Object(o.b)(r.c,{__position:3,__code:"<PageTransitionTranslate />",__scope:(T={props:y,DefaultLayout:s.a,Playground:r.c,Props:r.d,useNavigate:c.a,NoPageTransition:d.a,PageTransitionCSS:d.b,PageTransitionDOM:d.c,PageTransitionFadeInFadeOut:d.d,PageTransitionStatus:d.e,PageTransitionTranslate:d.f,usePageTransition:l.a},T.DefaultLayout=s.a,T._frontmatter=p,T),mdxType:"Playground"},Object(o.b)(d.f,{mdxType:"PageTransitionTranslate"})),Object(o.b)("h2",{id:"transition-with-css-properties"},"Transition with CSS properties"),Object(o.b)("p",null,"So far, we've been able to animate the whole page, but state transitions\noften need to animate things independently. To do this you can use the property\n",Object(o.b)("inlineCode",{parentName:"p"},"page-transition-tag"),'. On the same principle, the transition is made based on\nthe "screenshot" made on the outgoing and inconming element. You can see a\ntranslate and zoom effect.'),Object(o.b)(r.c,{__position:4,__code:"<PageTransitionCSS />",__scope:(P={props:y,DefaultLayout:s.a,Playground:r.c,Props:r.d,useNavigate:c.a,NoPageTransition:d.a,PageTransitionCSS:d.b,PageTransitionDOM:d.c,PageTransitionFadeInFadeOut:d.d,PageTransitionStatus:d.e,PageTransitionTranslate:d.f,usePageTransition:l.a},P.DefaultLayout=s.a,P._frontmatter=p,P),mdxType:"Playground"},Object(o.b)(d.b,{mdxType:"PageTransitionCSS"})),Object(o.b)("h2",{id:"transition-with-dom-manipulation"},"Transition with DOM manipulation"),Object(o.b)("p",null,"Another way to animate things independently is to dynamically set the value\non the ",Object(o.b)("inlineCode",{parentName:"p"},"element.style.pageTransitionTag")," with Javascript."),Object(o.b)(r.c,{__position:5,__code:"<PageTransitionDOM />",__scope:(h={props:y,DefaultLayout:s.a,Playground:r.c,Props:r.d,useNavigate:c.a,NoPageTransition:d.a,PageTransitionCSS:d.b,PageTransitionDOM:d.c,PageTransitionFadeInFadeOut:d.d,PageTransitionStatus:d.e,PageTransitionTranslate:d.f,usePageTransition:l.a},h.DefaultLayout=s.a,h._frontmatter=p,h),mdxType:"Playground"},Object(o.b)(d.c,{mdxType:"PageTransitionDOM"})))}void 0!==m&&m&&m===Object(m)&&Object.isExtensible(m)&&!Object.prototype.hasOwnProperty.call(m,"__filemeta")&&Object.defineProperty(m,"__filemeta",{configurable:!0,value:{name:"MDXContent",filename:"src/hooks/useDocumentTransition/PageTransition.mdx"}}),m.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-hooks-use-document-transition-page-transition-mdx-cb9512472e21d794b41b.js.map