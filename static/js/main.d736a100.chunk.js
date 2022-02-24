(this.webpackJsonpsocial_studies=this.webpackJsonpsocial_studies||[]).push([[0],{104:function(e,t,n){},106:function(e,t,n){},132:function(e,t,n){"use strict";n.r(t);var r=n(0),c=n.n(r),a=n(10),i=n.n(a),s=(n(104),n(62)),o=n.n(s),u=n(77),j=n(17),l=(n(106),n(87)),d=n(178),p=n(57),h=n(179),b=n(180),O=n(164),f=n(4),x=function(e){return Object(f.jsx)(O.a,{showLabels:!0,style:{position:"fixed",bottom:0,width:"100%"},onChange:function(t,n){e.changeCurrentPage(n)}})},g=n(167),v=n(52),m=n(53),S=n(82),w=n.n(S),C=function(){function e(){Object(v.a)(this,e)}return Object(m.a)(e,null,[{key:"setSocialQuestions",value:function(){w.a.get("https://sheets.googleapis.com/v4/spreadsheets/1zpWEP0dGEm0SMkGO8Et3Wo8TqwNCKOl_kfRTVZgRJbw/values/science?key=AIzaSyD61LRLY0MGuJyIU9EQCb4KUDiFJRmxO1o").then((function(e){var t=[];if(!Array.isArray(e.data.values))return t;var n=e.data.values;n.shift(),n.forEach((function(e){t.push({id:e[0],part:e[1],question:e[2],precautions:e[3],answer:e[4],notices:e[5]})})),sessionStorage.setItem("SOCIALS",JSON.stringify(t))}))}},{key:"getSocialQuestions",value:function(){var e=sessionStorage.getItem("SOCIALS"),t=[];return null!=e&&e.length>0&&JSON.parse(e).forEach((function(e){t.push({id:e.id,part:e.part,question:e.question,precautions:e.precautions,answer:e.answer,notices:e.notices})})),t}},{key:"getFirstPart",value:function(){return this.getSocialQuestions().reduce((function(e,t){return e.includes(t.part)||e.push(t.part),e}),[])[0]}},{key:"getParts",value:function(){return this.getSocialQuestions().reduce((function(e,t){return e.includes(t.part)||e.push(t.part),e}),[])}}]),e}(),y=n(89),k=n(88),P=n(168),W=n(58),I=n(181),F=n(171),L=n(83),N=n.n(L),R=function(e){Object(y.a)(n,e);var t=Object(k.a)(n);function n(){return Object(v.a)(this,n),t.apply(this,arguments)}return Object(m.a)(n,[{key:"render",value:function(){var e=this;return Object(f.jsx)("div",{className:"word-wrap",children:Object(f.jsxs)(g.a,{maxWidth:"sm",children:[Object(f.jsx)(P.a,{container:!0,children:Object(f.jsx)(P.a,{item:!0,xs:10,children:Object(f.jsx)(W.a,{variant:"subtitle1",children:this.props.question})})}),Object(f.jsx)(W.a,{variant:"h4",className:this.props.visibleWord,children:this.props.answer}),Object(f.jsx)("br",{}),Object(f.jsx)(P.a,{container:!0,direction:"row",children:Object(f.jsx)(I.a,{error:!this.props.isInputWordCompleted,label:this.props.isInputWordCompleted?"OK":"input word",fullWidth:!0,value:this.props.inputWordString,variant:"outlined",onChange:function(t){e.props.changeInputWord(t.target.value.toLowerCase()),e.props.answer.toLowerCase()===t.target.value.toLowerCase()?(e.props.changeInputWordCompleted(!0),e.props.viewWord()):e.props.changeInputWordCompleted(!1)}})}),Object(f.jsx)("br",{}),Object(f.jsx)(P.a,{container:!0,direction:"row",spacing:5,justify:"center",alignItems:"center",children:Object(f.jsx)(P.a,{item:!0,xs:5,children:Object(f.jsx)(F.a,{style:{display:"inline-block",width:"100%",height:"20%"},color:"primary",variant:"outlined",onClick:function(){return e.props.viewWord()},children:Object(f.jsx)(N.a,{})})})})]})})}}]),n}(r.Component),E=function(e){var t=e.onClickPrev,n=e.onClickNext;return Object(f.jsxs)(P.a,{container:!0,direction:"row",justify:"space-around",alignItems:"flex-end",children:[Object(f.jsx)(F.a,{variant:"contained",color:"primary",onClick:function(){return t()},children:"Prev"}),Object(f.jsx)(F.a,{variant:"contained",color:"primary",onClick:function(){return n()},children:"Next"})]})},Q=n(182),q=function(e){var t=e.currentPart;return Object(f.jsx)(P.a,{container:!0,direction:"row",justify:"space-around",alignItems:"flex-end",children:Object(f.jsx)(W.a,{component:"div",children:Object(f.jsx)(Q.a,{fontSize:"h6.fontSize",m:1,children:t})})})},A=n(173),J=n(184),z=n(170),D=n(174),T=n(185),G=n(172),K=n(86),M=n.n(K),_=n(175),B=n(176),U=n(85),V=n.n(U),Y=n(84),Z=n.n(Y),H=n(177),X=function(e){var t=Object(r.useState)(!1),n=Object(j.a)(t,2),c=n[0],a=n[1],i=e.parts,s=Object(G.a)({list:{width:"50vw"}})();return Object(f.jsxs)(f.Fragment,{children:[Object(f.jsx)(A.a,{color:"inherit","aria-label":"open drawer",edge:"end",onClick:function(){a(!c)}}),Object(f.jsx)(J.a,{anchor:"right",open:c,onClose:function(){return a(!1)},children:Object(f.jsxs)("div",{className:s.list,children:[Object(f.jsx)(Z.a,{onClick:function(){return a(!1)}}),Object(f.jsx)(z.a,{component:"nav","aria-label":"secondary part",children:i.map((function(t){return Object(f.jsxs)(D.a,{button:!0,onClick:function(){e.changeCurrentPart(t),a(!1)},children:[Object(f.jsx)(_.a,{primary:t}),Object(f.jsx)(B.a,{children:t===e.currentPart&&Object(f.jsx)(V.a,{})})]},t)}))}),Object(f.jsx)(H.a,{}),Object(f.jsx)(z.a,{component:"nav","aria-label":"thirdry speechSpeed",children:Object(f.jsx)(D.a,{children:Object(f.jsx)(T.a,{min:.1,max:1,step:.1,value:e.speechSpeedRate,"aria-labelledby":"speech-speed-rate",valueLabelDisplay:"auto",onChange:function(t,n){var r=e.speechSpeedRate;"number"===typeof n&&(r=n),e.changeSpeechSpeedRate(r)}})})})]})}),Object(f.jsx)(M.a,{})]})},$=function(){var e=Object(r.useState)(C.getSocialQuestions().filter((function(e){return e.part===C.getFirstPart()}))),t=Object(j.a)(e,2),n=t[0],c=t[1],a=Object(r.useState)(0),i=Object(j.a)(a,2),s=i[0],o=i[1],u=Object(r.useState)("word-hidden"),l=Object(j.a)(u,2),d=l[0],p=l[1],h=Object(r.useState)(C.getFirstPart()),b=Object(j.a)(h,2),O=b[0],x=b[1],v=Object(r.useState)(!1),m=Object(j.a)(v,2),S=m[0],w=m[1],y=Object(r.useState)(""),k=Object(j.a)(y,2),P=k[0],W=k[1],I=Object(r.useState)(.8),F=Object(j.a)(I,2),L=F[0],N=F[1];return Object(f.jsx)(f.Fragment,{children:Object(f.jsxs)(g.a,{maxWidth:"sm",children:[Object(f.jsx)(X,{parts:C.getParts(),currentPart:O,changeCurrentPart:function(e){return function(e){if(O!==e){var t=C.getSocialQuestions().filter((function(t){return t.part===e}));c(t),x(e),o(0),p("word-hidden"),w(!1),W("")}}(e)},speechSpeedRate:L,changeSpeechSpeedRate:function(e){return function(e){N(e)}(e)}}),Object(f.jsx)(E,{onClickPrev:function(){s>0&&(o(s-1),p("word-hidden"),w(!1),W(""))},onClickNext:function(){s<n.length-1&&(o(s+1),p("word-hidden"),w(!1),W(""))}}),Object(f.jsx)("hr",{}),n.length>0&&Object(f.jsxs)(f.Fragment,{children:[Object(f.jsx)(R,{answer:n[s].answer,question:n[s].question,visibleWord:d,isInputWordCompleted:S,inputWordString:P,viewWord:function(){return p("word-visible")},changeInputWordCompleted:function(e){return function(e){w(e)}(e)},changeInputWord:function(e){return function(e){W(e)}(e)}}),Object(f.jsx)(q,{currentPart:O})]}),Object(f.jsx)("hr",{})]})})};var ee=function(){var e=Object(r.useState)("WordPage"),t=Object(j.a)(e,2),n=t[0],c=t[1],a=Object(r.useState)(!1),i=Object(j.a)(a,2),s=i[0],O=i[1],g=Object(l.a)({palette:{primary:{main:p.a[800]},type:"dark"}});return Object(r.useEffect)((function(){(function(){var e=Object(u.a)(o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,C.setSocialQuestions();case 2:O(!0);case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]),Object(f.jsxs)(d.a,{theme:g,children:[Object(f.jsx)(h.a,{}),!s&&Object(f.jsxs)("div",{style:{height:"100vh",width:"100vw",display:"table-cell",verticalAlign:"middle",textAlign:"center"},children:[Object(f.jsx)(b.a,{}),Object(f.jsx)("p",{children:"now loading..."})]}),"WordPage"===n&&s&&Object(f.jsx)($,{}),Object(f.jsx)(x,{currentPage:n,changeCurrentPage:function(e){return function(e){c(e)}(e)}})]})},te=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,188)).then((function(t){var n=t.getCLS,r=t.getFID,c=t.getFCP,a=t.getLCP,i=t.getTTFB;n(e),r(e),c(e),a(e),i(e)}))};i.a.render(Object(f.jsx)(c.a.StrictMode,{children:Object(f.jsx)(ee,{})}),document.getElementById("root")),te()}},[[132,1,2]]]);
//# sourceMappingURL=main.d736a100.chunk.js.map