webpackJsonp([2],{242:function(l,n,u){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var t=u(0),a=(u(4),u(112),u(121),function(){function l(l,n,u){this.navCtrl=l,this.storage=n,this.event=u,this.favorites=[]}return l.prototype.ionViewDidLoad=function(){var l=this;this.getKeys(),this.event.subscribe("songAdded",function(n){l.favorites.push(n)}),this.event.subscribe("songRemoved",function(n){console.log(n),l.favorites.splice(l.favorites.indexOf(n),1)})},l.prototype.getKeys=function(){var l=this;this.storage.forEach(function(n){l.favorites.push(n)})},l.prototype.goToDetail=function(l){this.navCtrl.parent._children.find(function(l){return"main"===l.name}).push("TrackDetailPage",{id:l.trackId,track:l})},l}()),o=function(){return function(){}}(),s=u(192),e=u(193),i=u(194),c=u(195),r=u(196),b=u(197),_=u(198),d=u(199),f=u(200),g=u(203),k=u(18),p=u(15),m=u(1),v=u(43),h=u(74),C=u(142),Y=u(25),Z=u(44),j=u(123),y=u(5),x=u(249),z=u(40),A=u(8),q=u(20),F=u(250),P=u(114),D=u(51),O=u(251),T=u(21),X=u(3),I=u(9),L=u(34),M=u(53),N=u(7),$=u(14),w=u(122),B=u(75),K=t.X({encapsulation:2,styles:[],data:{}}),R=t.V("page-menu-list",a,function(l){return t._23(0,[(l()(),t.Z(0,0,null,null,1,"page-menu-list",[],null,null,null,function(l){return t._23(0,[(l()(),t.Z(0,0,null,null,6,"ion-header",[],null,null,null,null,null)),t.Y(1,16384,null,0,j.a,[m.a,t.j,t.z,[2,y.a]],null,null),(l()(),t.Z(2,0,null,null,4,"ion-navbar",[["class","toolbar"]],[[8,"hidden",0],[2,"statusbar-padding",null]],null,null,x.b,x.a)),t.Y(3,49152,null,0,z.a,[A.a,[2,y.a],[2,q.a],m.a,t.j,t.z],null,null),(l()(),t.Z(4,0,null,3,2,"ion-title",[],null,null,null,F.b,F.a)),t.Y(5,49152,null,0,P.a,[m.a,t.j,t.z,[2,D.a],[2,z.a]],null,null),(l()(),t._21(-1,0,["Favorites"])),(l()(),t.Z(7,0,null,null,5,"ion-content",[],[[2,"statusbar-padding",null],[2,"has-refresher",null]],null,null,O.b,O.a)),t.Y(8,4374528,null,0,T.a,[m.a,X.a,I.a,t.j,t.z,A.a,L.a,t.u,[2,y.a],[2,q.a]],null,null),(l()(),t.Z(9,0,null,1,3,"ion-list",[],null,null,null,null,null)),t.Y(10,16384,null,0,M.a,[m.a,t.j,t.z,X.a,N.l,I.a],null,null),(l()(),t.U(16777216,null,null,1,null,function(l){return t._23(0,[(l()(),t.Z(0,0,null,null,12,"a",[["class","item item-block"],["ion-item",""],["menuClose",""]],null,[[null,"click"]],function(l,n,u){var a=!0,o=l.component;return"click"===n&&(a=!1!==t._13(l,6).close()&&a),"click"===n&&(a=!1!==o.goToDetail(l.context.$implicit)&&a),a},g.b,g.a)),t.Y(1,1097728,null,3,k.a,[p.a,m.a,t.j,t.z,[2,v.a]],null,null),t._19(335544320,1,{contentLabel:0}),t._19(603979776,2,{_buttons:1}),t._19(603979776,3,{_icons:1}),t.Y(5,16384,null,0,h.a,[],null,null),t.Y(6,16384,null,0,C.a,[Y.a],{menuClose:[0,"menuClose"]},null),(l()(),t.Z(7,0,null,1,5,"ion-label",[],null,null,null,null,null)),t.Y(8,16384,[[1,4]],0,Z.a,[m.a,t.j,t.z,[8,null],[8,null],[8,null],[8,null]],null,null),(l()(),t.Z(9,0,null,null,1,"h2",[],null,null,null,null,null)),(l()(),t._21(10,null,["",""])),(l()(),t.Z(11,0,null,null,1,"h3",[],null,null,null,null,null)),(l()(),t._21(12,null,["by ",""]))],function(l,n){l(n,6,0,"")},function(l,n){l(n,10,0,n.context.$implicit.trackName),l(n,12,0,n.context.$implicit.artistName)})})),t.Y(12,802816,null,0,$.h,[t.I,t.F,t.p],{ngForOf:[0,"ngForOf"]},null)],function(l,n){l(n,12,0,n.component.favorites)},function(l,n){l(n,2,0,t._13(n,3)._hidden,t._13(n,3)._sbPadding),l(n,7,0,t._13(n,8).statusbarPadding,t._13(n,8)._hasRefresher)})},K)),t.Y(1,49152,null,0,a,[q.a,w.a,B.a],null,null)],null,null)},{},{},[]),V=u(17),E=u(118),J=u(36);u.d(n,"MenuListPageModuleNgFactory",function(){return S});var S=t.W(o,[],function(l){return t._10([t._11(512,t.i,t.S,[[8,[s.a,e.a,i.a,c.a,r.a,b.a,_.a,d.a,f.a,R]],[3,t.i],t.s]),t._11(4608,$.k,$.j,[t.r,[2,$.s]]),t._11(4608,V.m,V.m,[]),t._11(4608,V.c,V.c,[]),t._11(512,$.b,$.b,[]),t._11(512,V.l,V.l,[]),t._11(512,V.f,V.f,[]),t._11(512,V.k,V.k,[]),t._11(512,E.a,E.a,[]),t._11(512,E.b,E.b,[]),t._11(512,o,o,[]),t._11(256,J.a,a,[])])})},249:function(l,n,u){"use strict";function t(l){return a._23(0,[(l()(),a.Z(0,0,null,null,1,"div",[["class","toolbar-background"]],null,null,null,null,null)),a.Y(1,278528,null,0,o.g,[a.p,a.q,a.j,a.A],{klass:[0,"klass"],ngClass:[1,"ngClass"]},null),(l()(),a.Z(2,0,null,null,8,"button",[["class","back-button"],["ion-button","bar-button"]],[[8,"hidden",0]],[[null,"click"]],function(l,n,u){var t=!0;if("click"===n){t=!1!==l.component.backButtonClick(u)&&t}return t},s.b,s.a)),a.Y(3,278528,null,0,o.g,[a.p,a.q,a.j,a.A],{klass:[0,"klass"],ngClass:[1,"ngClass"]},null),a.Y(4,1097728,null,0,e.a,[[8,"bar-button"],i.a,a.j,a.z],null,null),(l()(),a.Z(5,0,null,0,2,"ion-icon",[["class","back-button-icon"],["role","img"]],[[2,"hide",null]],null,null,null,null)),a.Y(6,278528,null,0,o.g,[a.p,a.q,a.j,a.A],{klass:[0,"klass"],ngClass:[1,"ngClass"]},null),a.Y(7,147456,null,0,c.a,[i.a,a.j,a.z],{name:[0,"name"]},null),(l()(),a.Z(8,0,null,0,2,"span",[["class","back-button-text"]],null,null,null,null,null)),a.Y(9,278528,null,0,o.g,[a.p,a.q,a.j,a.A],{klass:[0,"klass"],ngClass:[1,"ngClass"]},null),(l()(),a._21(10,null,["",""])),a._12(null,0),a._12(null,1),a._12(null,2),(l()(),a.Z(14,0,null,null,2,"div",[["class","toolbar-content"]],null,null,null,null,null)),a.Y(15,278528,null,0,o.g,[a.p,a.q,a.j,a.A],{klass:[0,"klass"],ngClass:[1,"ngClass"]},null),a._12(null,3)],function(l,n){var u=n.component;l(n,1,0,"toolbar-background","toolbar-background-"+u._mode);l(n,3,0,"back-button","back-button-"+u._mode);l(n,6,0,"back-button-icon","back-button-icon-"+u._mode);l(n,7,0,u._bbIcon);l(n,9,0,"back-button-text","back-button-text-"+u._mode);l(n,15,0,"toolbar-content","toolbar-content-"+u._mode)},function(l,n){var u=n.component;l(n,2,0,u._hideBb);l(n,5,0,a._13(n,7)._hidden);l(n,10,0,u._backText)})}u.d(n,"a",function(){return r}),n.b=t;var a=u(0),o=u(14),s=u(42),e=u(19),i=u(1),c=u(41),r=(u(40),u(5),u(20),a.X({encapsulation:2,styles:[],data:{}}))},250:function(l,n,u){"use strict";function t(l){return a._23(2,[(l()(),a.Z(0,0,null,null,2,"div",[["class","toolbar-title"]],null,null,null,null,null)),a.Y(1,278528,null,0,o.g,[a.p,a.q,a.j,a.A],{klass:[0,"klass"],ngClass:[1,"ngClass"]},null),a._12(null,0)],function(l,n){l(n,1,0,"toolbar-title","toolbar-title-"+n.component._mode)},null)}u.d(n,"a",function(){return s}),n.b=t;var a=u(0),o=u(14),s=(u(114),u(1),u(51),u(40),a.X({encapsulation:2,styles:[],data:{}}))},251:function(l,n,u){"use strict";function t(l){return a._23(2,[a._19(402653184,1,{_fixedContent:0}),a._19(402653184,2,{_scrollContent:0}),(l()(),a.Z(2,0,[[1,0],["fixedContent",1]],null,1,"div",[["class","fixed-content"]],null,null,null,null,null)),a._12(null,0),(l()(),a.Z(4,0,[[2,0],["scrollContent",1]],null,1,"div",[["class","scroll-content"]],null,null,null,null,null)),a._12(null,1),a._12(null,2)],null,null)}u.d(n,"a",function(){return o}),n.b=t;var a=u(0),o=(u(21),u(1),u(3),u(9),u(34),u(5),u(20),a.X({encapsulation:2,styles:[],data:{}}))}});