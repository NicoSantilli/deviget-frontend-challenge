(this["webpackJsonpdeviget-frontend-challenge"]=this["webpackJsonpdeviget-frontend-challenge"]||[]).push([[0],{112:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(7),c=n.n(o),i=n(81),l=n(26),s=n(155),u=n(154),m=n(158),d=n(159),p=n(157),f=n(80),b=n.n(f),E=n(156),v=n(27),O=n(153),j=n(16),g=n(14),h=n(15),w=n(141),y=n(148),_=n(17),k=n(144),x=n(145),P=n(161),I=n(146),N=n(160),S=n(147),M=n(49),D=n(21),L=n(82),R=Object(L.a)({name:"redditPosts",initialState:{isErrored:!1,isLoading:!1,posts:[],post:{},lastPostId:""},reducers:{loadPosts:function(e){return Object(D.a)(Object(D.a)({},e),{},{isLoading:!0})},savePosts:function(e,t){var n=t.payload,a=n.children.slice(-1).pop(),r=n.before||a?"".concat(a.kind,"_").concat(a.data.id):"";return Object(D.a)(Object(D.a)({},e),{},{isLoading:!1,posts:[].concat(Object(M.a)(e.posts),Object(M.a)(n.children)),lastPostId:r})},dismissAllPosts:function(e){return Object(D.a)(Object(D.a)({},e),{},{posts:[],post:{}})},dismissPost:function(e,t){var n=t.payload,a=function(e,t){return e.posts.filter((function(e){return e.data.id!==t}))}(e,n),r=e.post.data;return Object(D.a)(Object(D.a)({},e),{},{posts:a,post:n===(null===r||void 0===r?void 0:r.id)?{}:e.post})},markAsRead:function(e,t){(function(e,t){return e.posts.find((function(e){return e.data.id===t})).data}(e,t.payload)).clicked=!0},seePostDetails:function(e,t){var n=t.payload;return Object(D.a)(Object(D.a)({},e),{},{post:n})}}}),C=R.reducer,B=R.actions,T=B.loadPosts,A=B.savePosts,F=B.dismissAllPosts,U=B.dismissPost,X=B.markAsRead,G=B.seePostDetails,z=n(45),J=n.n(z),V=n(70),H=n.n(V),W=n(71),q=n.n(W).a.create({baseURL:"https://www.reddit.com/"}),K=n(30),Q=function(e){return H.a.unix(e).fromNow()},Y=function(e,t){e(T()),q.get("top.json".concat(function(e){return Object(K.isNil)(e)?"":"?".concat(Object.keys(e).filter((function(t){return e[t]})).map((function(t){return"".concat(t,"=").concat(e[t]||"")})).join("&"))}(t))).then((function(t){var n=t.data;e(A(n.data))}))};function Z(){var e=Object(g.a)(["\n  & > span {\n    ","\n  }\n"]);return Z=function(){return e},e}function $(){var e=Object(g.a)(["\n  flex-grow: 1 !important;\n"]);return $=function(){return e},e}function ee(){var e=Object(g.a)(["\n  padding-left: 16px !important;\n  padding-right: 16px !important;\n"]);return ee=function(){return e},e}var te=Object(h.a)(w.a)(ee()),ne=Object(h.a)(k.a)($()),ae=Object(h.a)(x.a)(Z(),(function(e){return e.clicked?"color: rgba(0,0,0,.3)":"color: #000 !important"})),re=function(e){var t=e.post,n=e.setMobileOpen,o=Object(_.b)(),c=t.data,i=c.id,l=c.title,s=c.author,u=c.thumbnail,m=c.num_comments,d=c.created_utc,p=c.clicked;return r.a.createElement(a.Fragment,{key:i},r.a.createElement(P.a,{button:!0,onClick:function(){o(X(i)),o(G(t)),n(!1)},alignItems:"flex-start"},r.a.createElement(I.a,null,r.a.createElement(N.a,{alt:i,src:u,onClick:function(e){e.stopPropagation(),window.open(u)}})),r.a.createElement(ae,{clicked:p,primary:l,secondary:r.a.createElement(r.a.Fragment,null,r.a.createElement(v.a,{component:"span",variant:"body2",color:"textSecondary"},"Posted by ",r.a.createElement("strong",null,"u/",s)," ",Q(d)," "))})),r.a.createElement(te,{container:!0,justify:"center",alignItems:"center"},r.a.createElement(w.a,{item:!0,xs:!0},r.a.createElement(ne,{startIcon:r.a.createElement(J.a,null),onClick:function(){o(U(i))}},"Dismiss")),r.a.createElement(w.a,{item:!0,xs:!0},r.a.createElement(v.a,{component:"span",variant:"body2",color:"textSecondary"},"".concat(m," comments")))),r.a.createElement(S.a,null))};function oe(){var e=Object(g.a)(["\n  display: flex !important;\n  justify-content: center !important;\n"]);return oe=function(){return e},e}function ce(){var e=Object(g.a)(["\n  min-width: 100%;\n  height: 100%;\n  overflow-y: scroll;\n"]);return ce=function(){return e},e}var ie=Object(h.a)(w.a)(ce()),le=h.a.div(oe()),se=function(e){var t=e.setMobileOpen,n=Object(_.c)((function(e){return e})),o=n.posts,c=n.isLoading,i=n.lastPostId,l=Object(_.b)();!Object(K.isEmpty)(o)||c||i||Y(l,{limit:50});var s=Object(a.useRef)(),u=Object(a.useCallback)((function(e){c||(s.current&&s.current.disconnect(),s.current=new IntersectionObserver((function(e){e[0].isIntersecting&&Y(l,{limit:50,after:i})})),e&&s.current.observe(e))}),[c,l,i]);return r.a.createElement(r.a.Fragment,null,r.a.createElement(ie,{item:!0,xs:!0},o.map((function(e,n){return o.length===n+1?r.a.createElement("div",{key:e.data.id,ref:u},r.a.createElement(re,{post:e,setMobileOpen:t})):r.a.createElement(re,{key:e.data.id,post:e,setMobileOpen:t})})),c&&r.a.createElement(le,null,r.a.createElement(y.a,null))))},ue=n(149),me=n(150),de=n(151),pe=n(152),fe=n(78),be=n.n(fe),Ee=n(79),ve=n.n(Ee);function Oe(){var e=Object(g.a)(["\n  max-width: 50% !important;\n"]);return Oe=function(){return e},e}function je(){var e=Object(g.a)(["\n  display: flex !important;\n  align-items: center !important;\n  color: rgba(0, 0, 0, 0.54) !important;\n\n  & > svg {\n    margin-right: 5px !important;\n  }\n"]);return je=function(){return e},e}function ge(){var e=Object(g.a)(["\n  display: flex !important;\n  justify-content: center !important;\n"]);return ge=function(){return e},e}function he(){var e=Object(g.a)(["\n  font-weight: bold !important;\n  color: rgba(0, 0, 0, 0.54);\n  text-decoration: none !important;\n"]);return he=function(){return e},e}function we(){var e=Object(g.a)(["\n  max-width: 50% !important;\n"]);return we=function(){return e},e}var ye=h.a.img(we()),_e=h.a.a(he()),ke=Object(h.a)(ue.a)(ge()),xe=Object(h.a)(v.a)(je()),Pe=h.a.video(Oe()),Ie=function(e){var t,n=e.post.data,a=n.post_hint,o=n.url,c=n.secure_media,i=n.media_embed;switch(a){case"image":return r.a.createElement(ye,{src:o});case"hosted:video":case"rich:video":var l=null===c||void 0===c||null===(t=c.reddit_video)||void 0===t?void 0:t.fallback_url,s=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return e.replace(/&lt;/g,"<").replace(/&gt;/g,">")}(null===i||void 0===i?void 0:i.content);return l?r.a.createElement(Pe,{controls:!0,autoPlay:!0,loop:!0,duration:!0},r.a.createElement("source",{src:l,type:"video/mp4"})):r.a.createElement("div",{className:"content",dangerouslySetInnerHTML:{__html:s}});default:return r.a.createElement(v.a,null,r.a.createElement("a",{href:o,target:"_blank",rel:"noopener noreferrer"},o))}},Ne=function(){var e=Object(_.c)((function(e){return e})).post,t=e.data||{},n=t.title,a=t.author,o=t.created_utc,c=t.num_comments,i=t.subreddit_name_prefixed,l=t.upvote_ratio,s=t.score;return Object(K.isEmpty)(e)?r.a.createElement(me.a,null,r.a.createElement(de.a,{title:"No post selected",subheader:"Select one post from the posts list to see the details"})):r.a.createElement(me.a,null,r.a.createElement(de.a,{title:n,subheader:r.a.createElement(r.a.Fragment,null,r.a.createElement(_e,{href:"https://reddit.com/".concat(i),target:"_blank"},i)," ","\u2022 Posted by ",r.a.createElement("strong",null,"u/",a)," ",Q(o)," ")}),r.a.createElement(ke,null,r.a.createElement(Ie,{post:e})),r.a.createElement(pe.a,null,r.a.createElement(xe,null,r.a.createElement(be.a,{fontSize:"small"}),"".concat(c," comments")),r.a.createElement(xe,{style:{flexGrow:"1"}},r.a.createElement(ve.a,{fontSize:"small"}),"".concat(s," points")),r.a.createElement(xe,null,"".concat(Math.floor(100*l),"% upvoted"))))},Se=Object(O.a)((function(e){var t;return{root:{display:"flex"},drawer:Object(l.a)({},e.breakpoints.up("md"),{width:440,flexShrink:0}),appBar:Object(l.a)({},e.breakpoints.up("md"),{width:"calc(100% - ".concat(440,"px)"),marginLeft:440}),menuButton:Object(l.a)({marginRight:e.spacing(2)},e.breakpoints.up("md"),{display:"none"}),toolbar:e.mixins.toolbar,drawerPaper:(t={},Object(l.a)(t,e.breakpoints.down("sm"),{width:286}),Object(l.a)(t,"width",440),t),content:{flexGrow:1,padding:e.spacing(3)}}})),Me=function(e){var t=e.window,n=Object(_.b)(),o=Se(),c=Object(j.a)(),l=Object(a.useState)(!1),f=Object(i.a)(l,2),O=f[0],g=f[1],h=Object(_.c)((function(e){return e})).lastPostId,w=function(){g(!O)},y=void 0!==t?function(){return t().document.body}:void 0;return r.a.createElement("div",{className:o.root},r.a.createElement(u.a,null),r.a.createElement(s.a,{position:"fixed",className:o.appBar},r.a.createElement(E.a,null,r.a.createElement(p.a,{color:"inherit","aria-label":"open drawer",edge:"start",onClick:w,className:o.menuButton},r.a.createElement(b.a,null)),r.a.createElement(v.a,{variant:"h6",noWrap:!0,style:{flexGrow:"1"}},"Reddit posts"),r.a.createElement(k.a,{variant:"contained",startIcon:r.a.createElement(J.a,null),onClick:function(){n(F()),Y(n,{limit:50,after:h})}},"Dismiss all posts"))),r.a.createElement("nav",{className:o.drawer},r.a.createElement(d.a,{mdUp:!0,implementation:"css"},r.a.createElement(m.a,{container:y,variant:"temporary",anchor:"rtl"===c.direction?"right":"left",open:O,onClose:w,classes:{paper:o.drawerPaper},ModalProps:{keepMounted:!0}},r.a.createElement(se,{setMobileOpen:g}))),r.a.createElement(d.a,{smDown:!0,implementation:"css"},r.a.createElement(m.a,{classes:{paper:o.drawerPaper},variant:"permanent",open:!0},r.a.createElement(se,{setMobileOpen:g})))),r.a.createElement("main",{className:o.content},r.a.createElement("div",{className:o.toolbar}),r.a.createElement(Ne,null)))},De=function(){return r.a.createElement(Me,null)},Le=n(13),Re=Object(Le.e)(C,window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__());c.a.render(r.a.createElement(_.a,{store:Re},r.a.createElement(De,null)),document.getElementById("root"))},86:function(e,t,n){e.exports=n(112)}},[[86,1,2]]]);
//# sourceMappingURL=main.4218c828.chunk.js.map