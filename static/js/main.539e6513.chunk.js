(this.webpackJsonpsocial_studies=this.webpackJsonpsocial_studies||[]).push([[0],{134:function(e,t,n){},160:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),c=n(42),i=n.n(c),o=(n(134),n(24)),s=n.n(o),u=n(38),l=n(31),d=n(32),j=n(70),p=n(69),b=n(116),h=n(220),O=n(45),f=n(213),g=n(224),x=(n(61),n(82)),v=n(12),m=n(225),y=n(103),w=n.n(y),S=function(){function e(){Object(l.a)(this,e)}return Object(d.a)(e,null,[{key:"setWordData",value:function(e){var t=[];return w.a.get("https://sheets.googleapis.com/v4/spreadsheets/1zpWEP0dGEm0SMkGO8Et3Wo8TqwNCKOl_kfRTVZgRJbw/values/csv?key=AIzaSyD61LRLY0MGuJyIU9EQCb4KUDiFJRmxO1o").then((function(n){if(!Array.isArray(n.data.values))return t;var r=n.data.values;r.shift(),r.forEach((function(n){void 0!==e&&e!==n[1]||t.push({id:n[0],part:n[1],question:n[2],precautions:n[3],answer:n[4],notices:n[5]})})),sessionStorage.setItem("SOCIAL_WORDS",JSON.stringify(t))})).catch((function(){return t}))}},{key:"getWordData",value:function(){var e=sessionStorage.getItem("SOCIAL_WORDS"),t=[];return null!=e&&e.length>0&&JSON.parse(e).forEach((function(e){t.push({id:e.id,part:e.part,question:e.question,precautions:e.precautions,answer:e.answer,notices:e.notices})})),t}},{key:"getFavoriteWordData",value:function(){var e,t=[],n=JSON.parse(null!==(e=localStorage.getItem("socialFavorite"))&&void 0!==e?e:"{}"),r=sessionStorage.getItem("SOCIAL_WORDS"),a=[];return null!=r&&r.length>0?(a=JSON.parse(r),Array.isArray(n)&&n.forEach((function(e){if("Word"===e.category){var n=a.filter((function(t){return t.id===e.id}));n.length>0&&t.push({id:n[0].id,part:n[0].part,question:n[0].question,precautions:n[0].precautions,answer:n[0].answer,notices:n[0].notices})}})),t):t}},{key:"getFirstPart",value:function(){return this.getWordData().reduce((function(e,t){return e.includes(t.part)||e.push(t.part),e}),[])[0]}},{key:"getParts",value:function(){return this.getWordData().reduce((function(e,t){return e.includes(t.part)||e.push(t.part),e}),[])}},{key:"getYears",value:function(){return console.log(this.getWordData()),this.getWordData().reduce((function(e,t){return e.includes(t.year)||e.push(t.year),e}),[])}},{key:"getSentences",value:function(){return this.getWordData().reduce((function(e,t){var n={id:t.id,year:t.year,category:t.category,part:t.part,sentence:t.sentence,sentenceTrans:t.sentenceTrans};return e.some((function(e){return e.part===n.part&&e.sentence===n.sentence}))||e.push(n),e}),[])}}]),e}(),W=n(221),k=n(226),C=n(214),I=n(222),P=function(){function e(){Object(l.a)(this,e)}return Object(d.a)(e,null,[{key:"speech",value:function(e,t,n){var r=window.speechSynthesis.getVoices().filter((function(e){return e.lang===t}))[0],a=new SpeechSynthesisUtterance;a.text=e,a.lang=t,a.voice=r,a.rate=n,window.speechSynthesis.speak(a)}}]),e}(),D=n(106),E=n.n(D),L=n(105),N=n.n(L),A=n(1),F=function(e){Object(j.a)(n,e);var t=Object(p.a)(n);function n(e){var a;return Object(l.a)(this,n),(a=t.call(this,e)).wordInputElement=void 0,a.wordInputElement=r.createRef(),a}return Object(d.a)(n,[{key:"componentDidUpdate",value:function(){var e;null===(e=this.wordInputElement.current)||void 0===e||e.focus()}},{key:"componentDidMount",value:function(){var e;null===(e=this.wordInputElement.current)||void 0===e||e.focus()}},{key:"render",value:function(){var e=this,t={display:"inline-block",width:"100%",height:"20%"};return Object(A.jsx)("div",{className:"word-wrap",children:Object(A.jsxs)(m.a,{maxWidth:"sm",children:[Object(A.jsx)(W.a,{container:!0,children:Object(A.jsx)(W.a,{item:!0,xs:10,children:Object(A.jsx)(k.a,{variant:"subtitle1",children:this.props.question})})}),Object(A.jsx)(k.a,{variant:"h4",className:this.props.visibleWord,children:this.props.answer}),Object(A.jsx)("br",{}),Object(A.jsx)(W.a,{container:!0,direction:"row",children:Object(A.jsx)(C.a,{inputRef:this.wordInputElement,error:!this.props.isInputWordCompleted,label:this.props.isInputWordCompleted?"OK":"input word",fullWidth:!0,value:this.props.inputWordString,variant:"outlined",onChange:function(t){e.props.changeInputWord(t.target.value.toLowerCase()),e.props.answer.toLowerCase()===t.target.value.toLowerCase()?(e.props.changeInputWordCompleted(!0),e.props.onClick(),P.speech("OK. "+e.props.answer,"en-US",1)):e.props.changeInputWordCompleted(!1)}})}),Object(A.jsx)("br",{}),Object(A.jsxs)(W.a,{container:!0,direction:"row",spacing:5,justifyContent:"center",alignItems:"center",children:[Object(A.jsx)(W.a,{item:!0,xs:5,children:Object(A.jsx)(I.a,{style:t,color:"primary",variant:"outlined",onClick:function(){var t;e.props.onClick(),null===(t=e.wordInputElement.current)||void 0===t||t.focus()},children:Object(A.jsx)(N.a,{})})}),Object(A.jsx)(W.a,{item:!0,xs:5,children:Object(A.jsx)(I.a,{style:t,variant:"outlined",onClick:function(){var t;P.speech(e.props.answer,"en-US",1),null===(t=e.wordInputElement.current)||void 0===t||t.focus()},children:Object(A.jsx)(E.a,{})})})]})]})})}}]),n}(r.Component),R=n(107),T=n.n(R),J=n(108),G=n.n(J),M=function(e){return Object(A.jsxs)(W.a,{container:!0,direction:"row",justifyContent:"space-around",alignItems:"flex-end",children:[Object(A.jsx)(I.a,{variant:"contained",color:"primary",size:"small",onClick:function(){return e.onClickPrev()},disabled:0===e.index||!e.isViewPrev,children:Object(A.jsx)(T.a,{})}),Object(A.jsx)(I.a,{variant:"contained",color:"primary",size:"small",onClick:function(){return e.onClickNext()},disabled:e.index>=e.maxPage-1||!e.isViewNext,children:Object(A.jsx)(G.a,{})})]})},q=n(109),U=n.n(q),V=n(110),_=n.n(V);function z(e){var t=Object(r.useState)(!1),n=Object(v.a)(t,2),a=n[0],c=n[1],i=Object(r.useState)(e.id),o=Object(v.a)(i,2),l=(o[0],o[1],function(){var t=Object(u.a)(s.a.mark((function t(){var n,r;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=[],t.next=3,JSON.parse(null!==(n=localStorage.getItem("socialFavorite"))&&void 0!==n?n:"{}");case 3:if(r=t.sent,!Array.isArray(r)){t.next=8;break}return t.abrupt("return",r.filter((function(t){return t.category===e.category&&t.id===e.id})).length>0);case 8:return t.abrupt("return",!1);case 9:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}()),d=function(){var t=Object(u.a)(s.a.mark((function t(){var n,r;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,JSON.parse(null!==(n=localStorage.getItem("socialFavorite"))&&void 0!==n?n:"{}");case 2:if(r=t.sent,!Array.isArray(r)){t.next=8;break}return t.next=6,l().then((function(t){t?(r=r.filter((function(t){return t.category!==e.category||t.id!==e.id})),c(!1)):(r=r.concat(e),c(!0)),localStorage.setItem("socialFavorite",JSON.stringify(r))}));case 6:t.next=10;break;case 8:c(!0),localStorage.setItem("socialFavorite",JSON.stringify([e]));case 10:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return Object(r.useEffect)((function(){l().then((function(e){c(e)}))})),Object(A.jsx)(I.a,{variant:"contained",color:"primary",size:"small",onClick:d,children:a?Object(A.jsx)(U.a,{}):Object(A.jsx)(_.a,{})})}var K=n(4),B=n(230),Y=n(223),X=n(228),Q=n(218),Z=n(232),H=n(217),$=n(3),ee=n(229),te=n(231),ne=n(233),re=n(111),ae=n.n(re),ce=n(86),ie=n.n(ce),oe=n(112),se=n.n(oe),ue=n(113),le=n.n(ue),de=n(114),je=n.n(de),pe=n(234),be=function(e){var t=Object(r.useState)(!1),n=Object(v.a)(t,2),a=n[0],c=n[1],i=Object(r.useState)([]),o=Object(v.a)(i,2),s=o[0],u=o[1],l=e.categories,d=e.parts,j="70vw";Object(r.useEffect)((function(){if(l){var t=[];l.forEach((function(n){n.parts.includes(e.currentPart)?t.push(!0):t.push(!1)})),u(t)}}),[]);var p="MyCard",b={header:"".concat(p,"-header"),open:"".concat(p,"-open"),close:"".concat(p,"-close"),closeIcon:"".concat(p,"-closeIcon"),hide:"".concat(p,"-hide"),list:"".concat(p,"-list"),categories:"".concat(p,"-categories"),parts:"".concat(p,"-parts")},h=(Object($.a)("div")((function(e){var t;return t={},Object(K.a)(t,"&.".concat(b.header),{height:"4vh",backgroundColor:"#7A7A7A",marginBottom:"1vh"}),Object(K.a)(t,"&.".concat(b.open),{width:j}),Object(K.a)(t,"&.".concat(b.close),{width:"100%"}),Object(K.a)(t,"&.".concat(b.closeIcon),{marginTop:"16px",marginLeft:"16px"}),Object(K.a)(t,"&.".concat(b.hide),{display:"none"}),Object(K.a)(t,"&.".concat(b.list),{width:j}),Object(K.a)(t,"&.".concat(b.categories),{backgroundColor:"#333"}),Object(K.a)(t,"&.".concat(b.parts),{paddingLeft:"2em"}),t})),function(e){var t=[];s.forEach((function(e){t.push(!1)})),null!==e&&t.splice(e,1,!0),u(t)});return Object(A.jsxs)(A.Fragment,{children:[Object(A.jsxs)(ee.a,{className:"".concat(a?b.open:b.close," ").concat(b.header),children:[Object(A.jsx)(k.a,{variant:"h6",noWrap:!0,style:{flexGrow:1,textAlign:"center"},children:e.currentPart}),Object(A.jsx)(B.a,{color:"inherit",className:a?b.hide:"","aria-label":"open drawer",edge:"end",onClick:function(){c(!a)},children:Object(A.jsx)(ae.a,{})})]}),Object(A.jsx)(Y.a,{anchor:"right",open:a,onClose:function(){return c(!1)},children:Object(A.jsxs)("div",{className:b.list,children:[Object(A.jsx)(se.a,{className:b.closeIcon,onClick:function(){return c(!1)}}),Object(A.jsxs)(X.a,{component:"nav","aria-label":"secondary part",children:[l&&l.map((function(t,n){return Object(A.jsxs)("div",{children:[Object(A.jsxs)(Q.a,{className:b.categories,button:!0,onClick:function(){s[n]?h(null):h(n)},children:[Object(A.jsx)(te.a,{primary:t.category},"categoryText"),s[n]?Object(A.jsx)(le.a,{}):Object(A.jsx)(je.a,{})]},"category"+n),Object(A.jsx)(Z.a,{in:s[n],timeout:"auto",unmountOnExit:!0,children:Object(A.jsx)(X.a,{component:"div",disablePadding:!0,children:t.parts.map((function(r,a){return Object(A.jsxs)(Q.a,{button:!0,className:b.parts,onClick:function(){e.changeCurrentPart(r),c(!1),h(n)},children:[Object(A.jsx)(te.a,{primary:r.replaceAll(t.category,"").trim()},"subMenuText"+n+r+a),Object(A.jsx)(ne.a,{children:r===e.currentPart&&Object(A.jsx)(ie.a,{})},"subMenuIcon"+n+r+a)]},"subMenu"+n+r+a)}))},"subMenuList"+n)},"subMenu"+n)]},"categoryWrapper"+n)})),!l&&d&&d.map((function(t){return Object(A.jsxs)(Q.a,{button:!0,onClick:function(){e.changeCurrentPart(t),c(!1)},children:[Object(A.jsx)(te.a,{primary:t}),Object(A.jsx)(ne.a,{children:t===e.currentPart&&Object(A.jsx)(ie.a,{})})]},t)})),Object(A.jsx)(Q.a,{button:!0,onClick:function(){e.changeCurrentPart("favorite"),c(!1)},children:Object(A.jsx)(te.a,{primary:"favorite"})},"favorite")]},"menuList"),Object(A.jsx)(pe.a,{}),Object(A.jsx)(X.a,{component:"nav","aria-label":"thirdry speechSpeed",children:Object(A.jsxs)(Q.a,{children:[Object(A.jsx)(te.a,{primary:"voice speed"}),Object(A.jsx)(H.a,{min:.1,max:1,step:.1,value:e.speechSpeedRate,"aria-labelledby":"speech-speed-rate",valueLabelDisplay:"auto",onChange:function(t,n){var r=e.speechSpeedRate;"number"===typeof n&&(r=n),e.changeSpeechSpeedRate(r)}})]},"voiceSpeedListItem")},"voiceSpeedList")]})})]})},he=n(115),Oe=function(){var e,t=null!==(e=localStorage.getItem("socialWordCurrentPart"))&&void 0!==e?e:S.getFirstPart(),n=localStorage.getItem("socialWordWordIndex")?Number(localStorage.getItem("socialWordWordIndex")):0,a=Object(r.useState)(S.getWordData().filter((function(e){return e.part===t}))),c=Object(v.a)(a,2),i=c[0],o=c[1],l=Object(r.useState)(n),d=Object(v.a)(l,2),j=d[0],p=d[1],b=Object(r.useState)(t),h=Object(v.a)(b,2),O=h[0],f=h[1],g=Object(r.useState)("word-hidden"),y=Object(v.a)(g,2),w=y[0],W=y[1],k=Object(r.useState)("word-hidden"),C=Object(v.a)(k,2),I=(C[0],C[1]),P=Object(r.useState)("word-hidden"),D=Object(v.a)(P,2),E=(D[0],D[1]),L=Object(r.useState)(!1),N=Object(v.a)(L,2),R=N[0],T=N[1],J=Object(r.useState)(!1),G=Object(v.a)(J,2),q=(G[0],G[1],Object(r.useState)("")),U=Object(v.a)(q,2),V=U[0],_=U[1],K=Object(r.useState)(""),B=Object(v.a)(K,2),Y=(B[0],B[1]),X=Object(r.useState)(.8),Q=Object(v.a)(X,2),Z=Q[0],H=Q[1],$=function(){if(j>0){W("word-hidden"),I("word-hidden"),E("word-hidden"),T(!1),_(""),Y("");var e=j-1;p(e),localStorage.setItem("socialWordWordIndex",e.toString())}},ee=function(){if(j<i.length-1){W("word-hidden"),I("word-hidden"),E("word-hidden"),T(!1),_(""),Y("");var e=j+1;p(e),localStorage.setItem("socialWordWordIndex",e.toString())}},te=function(){var e=Object(u.a)(s.a.mark((function e(t){var n;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n=[],O===t){e.next=21;break}if("favorite"!==t){e.next=8;break}return e.next=5,S.getFavoriteWordData();case 5:n=e.sent,e.next=11;break;case 8:return e.next=10,S.getWordData().filter((function(e){return e.part===t}));case 10:n=e.sent;case 11:p(0),o(n),f(t),W("word-hidden"),E("word-hidden"),T(!1),_(""),Y(""),localStorage.setItem("socialWordCurrentPart",t),localStorage.setItem("socialWordWordIndex","0");case 21:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),ne=Object(he.useSwipeable)({onSwipedLeft:function(e){e.absX>=140&&ee()},onSwipedRight:function(e){e.absX>=140&&$()},preventDefaultTouchmoveEvent:!0,trackMouse:!0});return Object(r.useEffect)((function(){te(t)}),[]),Object(A.jsxs)(A.Fragment,{children:[O&&Object(A.jsx)(be,{categories:null,parts:S.getParts(),currentPart:O,changeCurrentPart:function(e){return te(e)},speechSpeedRate:Z,changeSpeechSpeedRate:function(e){return function(e){H(e)}(e)}}),Object(A.jsxs)(m.a,{maxWidth:"sm",children:[Object(A.jsx)(M,{index:j,maxPage:i.length,isViewPrev:!0,isViewNext:!0,onClickPrev:$,onClickNext:ee}),Object(A.jsx)("hr",{}),0==i.length&&Object(A.jsx)("p",{children:"no data"}),i.length>0&&Object(A.jsxs)(A.Fragment,{children:[Object(A.jsx)("div",Object(x.a)(Object(x.a)({},ne),{},{children:Object(A.jsx)(F,{question:i[j].question,precautions:i[j].precautions,answer:i[j].answer,notices:i[j].notices,visibleWord:w,isInputWordCompleted:R,inputWordString:V,onClick:function(){return W("word-visible")},changeInputWordCompleted:function(e){return function(e){T(e)}(e)},changeInputWord:function(e){return function(e){_(e)}(e)}})})),Object(A.jsx)("hr",{}),Object(A.jsx)("div",{style:{textAlign:"center"},children:Object(A.jsx)(z,{category:"Word",part:O,id:i[j].id})})]})]})]})},fe=function(e){Object(j.a)(n,e);var t=Object(p.a)(n);function n(e){var r;Object(l.a)(this,n),r=t.call(this,e);var a="WordPage";switch(localStorage.getItem("socialCurrentPage")){case"WordPage":a="WordPage";break;case"GrammerPage":a="GrammerPage";break;case"WordGrammerPage":a="WordGrammerPage";break;case"WordTransPage":a="WordTransPage";break;case"GrammerWritingPage":a="GrammerWritingPage";break;case"GrammerWritingTestPage":a="GrammerWritingTestPage";break;default:a="WordPage"}return r.state={currentYear:"",currentPage:a,isLoaded:0},r}return Object(d.a)(n,[{key:"componentDidMount",value:function(){var e=Object(u.a)(s.a.mark((function e(){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,S.setWordData();case 2:return e.next=4,this.setState({isLoaded:1});case 4:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=Object(b.a)({palette:{primary:{main:O.a[800]},mode:"dark"}});return Object(A.jsxs)(h.a,{theme:e,children:[Object(A.jsx)(f.a,{}),0===this.state.isLoaded&&Object(A.jsx)(A.Fragment,{children:Object(A.jsxs)("div",{style:{height:"100vh",width:"100vw",display:"table-cell",verticalAlign:"middle",textAlign:"center"},children:[Object(A.jsx)(g.a,{}),Object(A.jsx)("p",{children:"now loading..."})]})}),1===this.state.isLoaded&&Object(A.jsx)(A.Fragment,{children:"WordPage"===this.state.currentPage&&Object(A.jsx)(Oe,{})})]})}}]),n}(a.a.Component),ge=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,236)).then((function(t){var n=t.getCLS,r=t.getFID,a=t.getFCP,c=t.getLCP,i=t.getTTFB;n(e),r(e),a(e),c(e),i(e)}))};i.a.render(Object(A.jsx)(a.a.StrictMode,{children:Object(A.jsx)(fe,{})}),document.getElementById("root")),ge()}},[[160,1,2]]]);
//# sourceMappingURL=main.539e6513.chunk.js.map