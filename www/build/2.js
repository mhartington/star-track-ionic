webpackJsonp([2],{233:function(l,n,u){"use strict";function t(l){return o._32(0,[(l()(),o._8(0,null,null,17,"a",[["class","item item-block"],["ion-item",""],["menuClose",""]],null,[[null,"click"]],function(l,n,u){var t=!0,a=l.component;return"click"===n&&(t=!1!==o._22(l,6).close()&&t),"click"===n&&(t=!1!==a.goToDetail(l.context.$implicit)&&t),t},h.b,h.a)),o._6(1097728,null,3,C.a,[y.a,G.a,o.l,o.G,[2,x.a]],null,null),o._28(335544320,1,{contentLabel:0}),o._28(603979776,2,{_buttons:1}),o._28(603979776,3,{_icons:1}),o._6(16384,null,0,j.a,[],null,null),o._6(16384,null,0,O.a,[w.a],{menuClose:[0,"menuClose"]},null),(l()(),o._30(2,["\n      "])),(l()(),o._8(0,null,1,8,"ion-label",[],null,null,null,null,null)),o._6(16384,[[1,4]],0,P.a,[G.a,o.l,o.G,[8,null],[8,null],[8,null],[8,null]],null,null),(l()(),o._30(null,["\n        "])),(l()(),o._8(0,null,null,1,"h2",[],null,null,null,null,null)),(l()(),o._30(null,["",""])),(l()(),o._30(null,["\n        "])),(l()(),o._8(0,null,null,1,"h3",[],null,null,null,null,null)),(l()(),o._30(null,["by ",""])),(l()(),o._30(null,["\n      "])),(l()(),o._30(2,["\n    "]))],function(l,n){l(n,6,0,"")},function(l,n){l(n,12,0,n.context.$implicit.trackName),l(n,15,0,n.context.$implicit.artistName)})}function a(l){return o._32(0,[(l()(),o._8(0,null,null,10,"ion-header",[],null,null,null,null,null)),o._6(16384,null,0,z.a,[G.a,o.l,o.G,[2,D.a]],null,null),(l()(),o._30(null,["\n  "])),(l()(),o._8(0,null,null,6,"ion-navbar",[["class","toolbar"]],[[8,"hidden",0],[2,"statusbar-padding",null]],null,null,F.b,F.a)),o._6(49152,null,0,M.a,[T.a,[2,D.a],[2,L.a],G.a,o.l,o.G],null,null),(l()(),o._30(3,["\n    "])),(l()(),o._8(0,null,3,2,"ion-title",[],null,null,null,N.b,N.a)),o._6(49152,null,0,$.a,[G.a,o.l,o.G,[2,B.a],[2,M.a]],null,null),(l()(),o._30(0,["Favorites"])),(l()(),o._30(3,["\n  "])),(l()(),o._30(null,["\n"])),(l()(),o._30(null,["\n\n\n"])),(l()(),o._8(0,null,null,9,"ion-content",[],[[2,"statusbar-padding",null],[2,"has-refresher",null]],[["window","resize"]],function(l,n,u){var t=!0;return"window:resize"===n&&(t=!1!==o._22(l,13).resize()&&t),t},I.b,I.a)),o._6(4374528,null,0,K.a,[G.a,R.a,A.a,o.l,o.G,T.a,E.a,o.z,[2,D.a],[2,L.a]],null,null),(l()(),o._30(1,["\n  "])),(l()(),o._8(0,null,1,5,"ion-list",[],null,null,null,null,null)),o._6(16384,null,0,J.a,[G.a,o.l,o.G,R.a,Q.l,A.a],null,null),(l()(),o._30(null,["\n    "])),(l()(),o._2(16777216,null,null,1,null,t)),o._6(802816,null,0,U.h,[o.Q,o.M,o.t],{ngForOf:[0,"ngForOf"]},null),(l()(),o._30(null,["\n  "])),(l()(),o._30(1,["\n"])),(l()(),o._30(null,["\n"]))],function(l,n){l(n,19,0,n.component.favorites)},function(l,n){l(n,3,0,o._22(n,4)._hidden,o._22(n,4)._sbPadding),l(n,12,0,o._22(n,13).statusbarPadding,o._22(n,13)._hasRefresher)})}Object.defineProperty(n,"__esModule",{value:!0});var o=u(0),e=u(4),s=u(111),i=u(117),c=function(){function l(l,n,u){this.navCtrl=l,this.storage=n,this.event=u,this.favorites=[]}return l.prototype.ionViewDidLoad=function(){var l=this;this.getKeys(),this.event.subscribe("songAdded",function(n){l.favorites.push(n)}),this.event.subscribe("songRemoved",function(n){console.log(n),l.favorites.splice(l.favorites.indexOf(n),1)})},l.prototype.getKeys=function(){var l=this;this.storage.forEach(function(n){l.favorites.push(n)})},l.prototype.goToDetail=function(l){this.navCtrl.parent._children.find(function(l){return"main"===l.name}).push("TrackDetailPage",{id:l.trackId,track:l})},l=Object(e.__decorate)([Object(o.i)({selector:"page-menu-list",templateUrl:"menu-list.html"}),Object(e.__metadata)("design:paramtypes",["function"==typeof(n=void 0!==s.e&&s.e)&&n||Object,"function"==typeof(u=void 0!==i.b&&i.b)&&u||Object,"function"==typeof(t=void 0!==s.a&&s.a)&&t||Object])],l);var n,u,t}(),_=function(){function l(){}return l=Object(e.__decorate)([Object(o.w)({declarations:[c],imports:[s.d.forChild(c)],exports:[c]})],l)}(),r=u(189),b=u(190),d=u(191),f=u(192),g=u(193),k=u(194),p=u(195),m=u(196),v=u(197),h=u(198),C=u(18),y=u(15),G=u(1),x=u(41),j=u(74),O=u(135),w=u(25),P=u(44),z=u(119),D=u(5),F=u(239),M=u(39),T=u(8),L=u(20),N=u(246),$=u(112),B=u(51),I=u(240),K=u(21),R=u(3),A=u(9),E=u(34),J=u(55),Q=u(7),U=u(14),V=u(118),q=u(75),H=[],S=o._5({encapsulation:2,styles:H,data:{}}),W=o._3("page-menu-list",c,function(l){return o._32(0,[(l()(),o._8(0,null,null,1,"page-menu-list",[],null,null,null,a,S)),o._6(49152,null,0,c,[L.a,V.a,q.a],null,null)],null,null)},{},{},[]),X=u(17),Y=u(113),Z=u(35);u.d(n,"MenuListPageModuleNgFactory",function(){return ll});var ll=o._4(_,[],function(l){return o._19([o._20(512,o.j,o._0,[[8,[r.a,b.a,d.a,f.a,g.a,k.a,p.a,m.a,v.a,W]],[3,o.j],o.x]),o._20(4608,U.k,U.j,[o.v]),o._20(4608,X.m,X.m,[]),o._20(4608,X.c,X.c,[]),o._20(512,U.b,U.b,[]),o._20(512,X.l,X.l,[]),o._20(512,X.f,X.f,[]),o._20(512,X.k,X.k,[]),o._20(512,Y.a,Y.a,[]),o._20(512,Y.b,Y.b,[]),o._20(512,_,_,[]),o._20(256,Z.a,c,[])])})},239:function(l,n,u){"use strict";function t(l){return a._32(0,[(l()(),a._8(0,null,null,1,"div",[["class","toolbar-background"]],null,null,null,null,null)),a._6(278528,null,0,o.g,[a.t,a.u,a.l,a.G],{klass:[0,"klass"],ngClass:[1,"ngClass"]},null),(l()(),a._8(0,null,null,8,"button",[["class","back-button"],["ion-button","bar-button"]],[[8,"hidden",0]],[[null,"click"]],function(l,n,u){var t=!0,a=l.component;return"click"===n&&(t=!1!==a.backButtonClick(u)&&t),t},e.b,e.a)),a._6(278528,null,0,o.g,[a.t,a.u,a.l,a.G],{klass:[0,"klass"],ngClass:[1,"ngClass"]},null),a._6(1097728,null,0,s.a,[[8,"bar-button"],i.a,a.l,a.G],null,null),(l()(),a._8(0,null,0,2,"ion-icon",[["class","back-button-icon"],["role","img"]],[[2,"hide",null]],null,null,null,null)),a._6(278528,null,0,o.g,[a.t,a.u,a.l,a.G],{klass:[0,"klass"],ngClass:[1,"ngClass"]},null),a._6(147456,null,0,c.a,[i.a,a.l,a.G],{name:[0,"name"]},null),(l()(),a._8(0,null,0,2,"span",[["class","back-button-text"]],null,null,null,null,null)),a._6(278528,null,0,o.g,[a.t,a.u,a.l,a.G],{klass:[0,"klass"],ngClass:[1,"ngClass"]},null),(l()(),a._30(null,["",""])),a._21(null,0),a._21(null,1),a._21(null,2),(l()(),a._8(0,null,null,2,"div",[["class","toolbar-content"]],null,null,null,null,null)),a._6(278528,null,0,o.g,[a.t,a.u,a.l,a.G],{klass:[0,"klass"],ngClass:[1,"ngClass"]},null),a._21(null,3)],function(l,n){var u=n.component;l(n,1,0,"toolbar-background","toolbar-background-"+u._mode);l(n,3,0,"back-button","back-button-"+u._mode);l(n,6,0,"back-button-icon","back-button-icon-"+u._mode),l(n,7,0,u._bbIcon);l(n,9,0,"back-button-text","back-button-text-"+u._mode);l(n,15,0,"toolbar-content","toolbar-content-"+u._mode)},function(l,n){var u=n.component;l(n,2,0,u._hideBb),l(n,5,0,a._22(n,7)._hidden),l(n,10,0,u._backText)})}u.d(n,"a",function(){return r}),n.b=t;var a=u(0),o=u(14),e=(u(39),u(40)),s=u(19),i=u(1),c=u(38),_=(u(8),u(5),u(20),[]),r=a._5({encapsulation:2,styles:_,data:{}})},240:function(l,n,u){"use strict";function t(l){return a._32(2,[a._28(402653184,1,{_fixedContent:0}),a._28(402653184,2,{_scrollContent:0}),(l()(),a._8(0,[[1,0],["fixedContent",1]],null,1,"div",[["class","fixed-content"]],null,null,null,null,null)),a._21(null,0),(l()(),a._8(0,[[2,0],["scrollContent",1]],null,1,"div",[["class","scroll-content"]],null,null,null,null,null)),a._21(null,1),a._21(null,2)],null,null)}u.d(n,"a",function(){return e}),n.b=t;var a=u(0),o=(u(21),u(1),u(3),u(9),u(8),u(34),u(5),u(20),[]),e=a._5({encapsulation:2,styles:o,data:{}})},246:function(l,n,u){"use strict";function t(l){return a._32(2,[(l()(),a._8(0,null,null,2,"div",[["class","toolbar-title"]],null,null,null,null,null)),a._6(278528,null,0,o.g,[a.t,a.u,a.l,a.G],{klass:[0,"klass"],ngClass:[1,"ngClass"]},null),a._21(null,0)],function(l,n){l(n,1,0,"toolbar-title","toolbar-title-"+n.component._mode)},null)}u.d(n,"a",function(){return s}),n.b=t;var a=u(0),o=u(14),e=(u(112),u(1),u(51),u(39),[]),s=a._5({encapsulation:2,styles:e,data:{}})}});