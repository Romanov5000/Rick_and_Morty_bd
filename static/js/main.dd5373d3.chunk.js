(this.webpackJsonprick_and_morty_bd=this.webpackJsonprick_and_morty_bd||[]).push([[0],{12:function(e,a,t){e.exports={Body:"body_Body__33LgW",textBody:"body_textBody__1OnC8",infoBlock:"body_infoBlock__2ep2t",lastInfoBlock:"body_lastInfoBlock__2H6XK",infoBlocks:"body_infoBlocks__27Sle",creatorNameBlock:"body_creatorNameBlock__2kZ1l",creatorBlock:"body_creatorBlock__1BT-2"}},18:function(e,a,t){e.exports={characterBlock:"CharacterPage_characterBlock__1wnSj",CharacterPage:"CharacterPage_CharacterPage__2SYr_",CharacterPageDark:"CharacterPage_CharacterPageDark__3m7H-",characterImg:"CharacterPage_characterImg__11krp",characterInfo:"CharacterPage_characterInfo__vb54j",characterInfoBlock:"CharacterPage_characterInfoBlock__3KGCE"}},23:function(e,a,t){e.exports={Header:"Header_Header__2LjVM",nav_block:"Header_nav_block__3Rj2-",title_block:"Header_title_block__3iJKP"}},30:function(e,a,t){e.exports={Episode:"Episode_Episode__2h5-V",episodeName:"Episode_episodeName__33F0i"}},31:function(e,a,t){e.exports={Location:"Location_Location__1hLLK",locationName:"Location_locationName__1oofb"}},32:function(e,a,t){e.exports={EpisodePage:"EpisodePage_EpisodePage__1P_Yh",episodeBlock:"EpisodePage_episodeBlock__27apB"}},33:function(e,a,t){e.exports={CharacterPage:"LocationPage_CharacterPage__2cfJi",characterBlock:"LocationPage_characterBlock__1JGJS"}},44:function(e,a,t){e.exports={Nav:"Nav_Nav__3pJ2A"}},47:function(e,a,t){e.exports={Paginator:"Paginator_Paginator__3RrBC"}},48:function(e,a,t){e.exports={CharactersList:"CharacterList_CharactersList__jDAVu"}},49:function(e,a,t){e.exports={EpisodesList:"EpisodeList_EpisodesList__1ETCd"}},50:function(e,a,t){e.exports={LocationsList:"LocationList_LocationsList__ZWlZG"}},51:function(e,a,t){e.exports={Footer:"Footer_Footer__2FXN6"}},53:function(e,a,t){e.exports=t(84)},58:function(e,a,t){},82:function(e,a,t){},83:function(e,a,t){},84:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),c=t(24),o=t.n(c),s=(t(58),t(23)),i=t.n(s),l=t(3),u=t(44),p=t.n(u),m=t(1),d=t.n(m),f=t(19),E=t(4),g=t(7),h=t(45),v=t.n(h),b=function e(){var a=this;Object(g.a)(this,e),this.instance=v.a.create({baseURL:"https://rickandmortyapi.com/api/"}),this.getCharactersInfoByPage=function(){var e=Object(E.a)(d.a.mark((function e(t){var n,r;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t){e.next=6;break}return e.next=3,a.instance.get("character/?page=".concat(t));case 3:e.t0=e.sent,e.next=9;break;case 6:return e.next=8,a.instance.get("character");case 8:e.t0=e.sent;case 9:return n=e.t0,r=n.data,e.abrupt("return",r);case 12:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}(),this.getCharacter=function(){var e=Object(E.a)(d.a.mark((function e(t){var n,r;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,a.instance.get("character/".concat(t));case 2:return n=e.sent,r=n.data,e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}(),this.getEpisodeName=function(){var e=Object(E.a)(d.a.mark((function e(t){var n,r;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a.instance.defaults.baseURL="",e.next=3,a.instance.get(t);case 3:return n=e.sent,r=n.data.name,a.instance.defaults.baseURL="https://rickandmortyapi.com/api/",e.abrupt("return",r);case 7:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}(),this.getEposodeInfoByPage=function(){var e=Object(E.a)(d.a.mark((function e(t){var n,r;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t){e.next=6;break}return e.next=3,a.instance.get("episode?page=".concat(t));case 3:e.t0=e.sent,e.next=9;break;case 6:return e.next=8,a.instance.get("episode");case 8:e.t0=e.sent;case 9:return n=e.t0,r=n.data,e.abrupt("return",r);case 12:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}(),this.getEpisode=function(){var e=Object(E.a)(d.a.mark((function e(t){var n,r;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,a.instance.get("episode/".concat(t));case 2:return n=e.sent,r=n.data,e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}(),this.getLocationCharactersImg=function(){var e=Object(E.a)(d.a.mark((function e(t){var n,r;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a.instance.defaults.baseURL="",e.next=3,a.instance.get(t);case 3:return n=e.sent,r=n.data.image,a.instance.defaults.baseURL="https://rickandmortyapi.com/api/",e.abrupt("return",r);case 7:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}(),this.getLocationInfoByPage=function(){var e=Object(E.a)(d.a.mark((function e(t){var n,r;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t){e.next=6;break}return e.next=3,a.instance.get("location?page=".concat(t));case 3:e.t0=e.sent,e.next=9;break;case 6:return e.next=8,a.instance.get("location");case 8:e.t0=e.sent;case 9:return n=e.t0,r=n.data,e.abrupt("return",r);case 12:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}(),this.getLocation=function(){var e=Object(E.a)(d.a.mark((function e(t){var n,r;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,a.instance.get("location/".concat(t));case 2:return n=e.sent,r=n.data,e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}()},_=new b,k=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,a=null;if(e){var t=e.split("=");a=t[t.length-1]}return function(e){_.getCharactersInfoByPage(a).then(function(){var t=Object(E.a)(d.a.mark((function t(n){var r,c,o,s,i,l,u;return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:r=[],c=n.results,o=n.info,s=0;case 4:if(!(s<c.length)){t.next=14;break}return i=c[s].episode[0],t.next=8,_.getEpisodeName(i);case 8:l=t.sent,u=Object(f.a)(Object(f.a)({},c[s]),{},{firstEpisodeName:l}),r.push(u);case 11:s++,t.next=4;break;case 14:e({type:"IS_CHARACTERS",payload:{characters:r,paginator:{prevPageUrl:o.prev,nextPageUrl:o.next,pageCount:o.pages,currentPage:a||1}}});case 15:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}())}},j=new b,O=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,a=null;if(e){var t=e.split("=");a=t[t.length-1]}return function(e){j.getEposodeInfoByPage(a).then(function(){var t=Object(E.a)(d.a.mark((function t(n){var r,c;return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:r=n.results,c=n.info,e({type:"IS_EPISODES",payload:{responseEpisodesArr:r,paginator:{prevPageUrl:c.prev,nextPageUrl:c.next,pageCount:c.pages,currentPage:a||1}}});case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}())}},N=new b,y=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,a=null;if(e){var t=e.split("=");a=t[t.length-1]}return function(e){N.getLocationInfoByPage(a).then(function(){var t=Object(E.a)(d.a.mark((function t(n){var r,c;return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:r=n.results,c=n.info,e({type:"IS_LOCATION",payload:{responseLocationArr:r,paginator:{prevPageUrl:c.prev,nextPageUrl:c.next,pageCount:c.pages,currentPage:a||1}}});case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}())}},P=t(14),x=Object(P.b)(null,(function(e){return{setCharacters:function(){return e(k())},setEpisodes:function(){return e(O())},setLocations:function(){return e(y())}}}))((function(e){return r.a.createElement("div",{className:p.a.Nav},r.a.createElement(l.b,{onClick:function(){return e.setCharacters()},to:"/characters"},"Characters"),r.a.createElement(l.b,{onClick:function(){return e.setEpisodes()},to:"/episodes"},"Episodes"),r.a.createElement(l.b,{onClick:function(){return e.setLocations()},to:"/locations"},"Locations"))})),C=function(){return r.a.createElement("div",{className:i.a.Header},r.a.createElement("div",{className:i.a.title_block},r.a.createElement(l.b,{className:i.a.logo_link,to:"/"},r.a.createElement("img",{src:"https://occ-0-3666-2774.1.nflxso.net/dnm/api/v6/LmEnxtiAuzezXBjYXPuDgfZ4zZQ/AAAABVK-867iNzC3GeSiDQJ7jasFpdN4ySy2Of17S2KxaxbOOtsqax_k_ldd_f5TiDeulU3_lyJmIjtBgPVKLnE1cUK-kRk9yZsO4MXA.png?r=47e",alt:"logo",width:"12%",height:"12%"}))),r.a.createElement("div",{className:i.a.nav_block},r.a.createElement(x,null)))},B=t(13),L=t(16),w=t(15),S=(t(82),function(e){Object(L.a)(t,e);var a=Object(w.a)(t);function t(){return Object(g.a)(this,t),a.apply(this,arguments)}return Object(B.a)(t,[{key:"render",value:function(){var e=this.props,a=e.name,t=e.img,n=e.status,c=e.species,o=e.gender,s=e.currentLocation,i=e.firstEpisodeName,u=e.firstEpisodeUrl,p=e.id,m=e.currentLocationUrl,d="statusCircle",f="",E=u.split("/");E=E[E.length-1];var g=m.split("/");return g=g[g.length-1],"Alive"===n?d+=" alive":"Dead"===n&&(d+=" dead"),f=p%2===0?"left":"right",r.a.createElement("div",{className:"Character ".concat(f)},r.a.createElement("div",{className:"imgBlock"},r.a.createElement(l.b,{to:"/character/".concat(p)},r.a.createElement("img",{src:t,alt:a,width:"100%",height:"100%"}))),r.a.createElement("div",{className:"textBlock"},r.a.createElement("div",{className:"titleBlock"},r.a.createElement("p",{className:"name"},r.a.createElement(l.b,{to:"/character/".concat(p)},a)),r.a.createElement("p",{className:"status"},r.a.createElement("span",{className:d}),r.a.createElement("span",{className:"statusText"},n),r.a.createElement("span",null,"-"),r.a.createElement("span",{className:"species"},c),r.a.createElement("span",{className:"gender"},o))),r.a.createElement("div",{className:"locationBlock"},r.a.createElement("p",{className:"title"},"Current location:"),r.a.createElement("p",{className:"location"},r.a.createElement(l.b,{to:"/location/".concat(g)},s))),r.a.createElement("div",{className:"firstSeenBlock"},r.a.createElement("p",{className:"rem"},"First seen in:"),r.a.createElement("p",{className:"firstEpisode"},r.a.createElement(l.b,{to:"/episode/".concat(E)},i)))))}}]),t}(r.a.Component)),I=(t(83),function(){return r.a.createElement("div",{className:"Spinner"},r.a.createElement("div",{className:"loadingio-spinner-bean-eater-ljplsej3j6"},r.a.createElement("div",{className:"ldio-tcvt25kbfcd"},r.a.createElement("div",null,r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null)),r.a.createElement("div",null,r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null)))))}),U=t(47),A=t.n(U),R=Object(P.b)((function(e){return{nextPageUrl:e.paginator.nextPageUrl,prevPageUrl:e.paginator.prevPageUrl,pageCount:e.paginator.pageCount,currentPage:e.paginator.currentPage,paginatorPage:e.paginator.paginatorPage}}),(function(e,a){return{getNextPage:function(t){return e(a.onPaginatorPage(t))},getPrevPage:function(t){return e(a.onPaginatorPage(t))}}}))((function(e){var a=e.nextPageUrl,t=e.prevPageUrl,n=e.currentPage,c=e.getNextPage,o=e.getPrevPage;return r.a.createElement("div",{className:A.a.Paginator},t&&r.a.createElement("button",{onClick:function(){return o(t)}},"Prev List"),r.a.createElement("span",null,n),a&&r.a.createElement("button",{onClick:function(){return c(a)}},"Next List"))})),D=t(48),F=t.n(D),J=function(e){Object(L.a)(t,e);var a=Object(w.a)(t);function t(){return Object(g.a)(this,t),a.apply(this,arguments)}return Object(B.a)(t,[{key:"render",value:function(){var e=this.props.characters,a=e.map((function(e){return r.a.createElement("li",{key:e.id},r.a.createElement(S,{name:e.name,img:e.image,status:e.status,species:e.species,gender:e.gender,currentLocation:e.location.name,currentLocationUrl:e.location.url,firstEpisodeUrl:e.episode[0],firstEpisodeName:e.firstEpisodeName,id:e.id}))}));return e.length?r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:F.a.CharactersList},r.a.createElement("h1",null,"Character List"),r.a.createElement("ul",null,a)),r.a.createElement(R,{onPaginatorPage:k})):r.a.createElement(I,null)}}]),t}(r.a.Component),H=Object(P.b)((function(e){return{characters:e.characters}}))(J),K=t(5),T=t(30),z=t.n(T),V=function(e){Object(L.a)(t,e);var a=Object(w.a)(t);function t(){return Object(g.a)(this,t),a.apply(this,arguments)}return Object(B.a)(t,[{key:"render",value:function(){var e=this.props,a=e.episodeName,t=e.episode,n=e.episodeData,c=e.id;return r.a.createElement("div",{className:z.a.Episode},r.a.createElement("div",{className:z.a.episodeName},r.a.createElement(l.b,{to:"/episode/".concat(c)},a)),r.a.createElement("ul",null,r.a.createElement("li",null,"Episode number: ",t),r.a.createElement("li",null,"Release date: ",n)))}}]),t}(r.a.Component),Z=t(49),X=t.n(Z),G=function(e){Object(L.a)(t,e);var a=Object(w.a)(t);function t(){return Object(g.a)(this,t),a.apply(this,arguments)}return Object(B.a)(t,[{key:"render",value:function(){var e=this.props.episodes,a=e.map((function(e){return r.a.createElement("li",{key:e.id},r.a.createElement(V,{episodeName:e.name,episode:e.episode,episodeData:e.air_date,id:e.id}))}));return e.length?r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:X.a.EpisodesList},r.a.createElement("h1",null,"Episode List"),r.a.createElement("ul",null,a)),r.a.createElement(R,{onPaginatorPage:O})):r.a.createElement(I,null)}}]),t}(r.a.Component),M=Object(P.b)((function(e){return{episodes:e.episodes}}))(G),Q=t(6),Y=t(18),q=t.n(Y),W=function(){var e=new b,a=Object(K.f)().id,t=Object(n.useState)(),c=Object(Q.a)(t,2),o=c[0],s=c[1],i=Object(n.useState)(),u=Object(Q.a)(i,2),p=u[0],m=u[1],f=Object(n.useState)(),g=Object(Q.a)(f,2),h=g[0],v=g[1],_=Object(n.useState)(),k=Object(Q.a)(_,2),j=k[0],O=k[1],N=Object(n.useState)(),y=Object(Q.a)(N,2),P=y[0],x=y[1],C=Object(n.useState)(),B=Object(Q.a)(C,2),L=B[0],w=B[1],S=Object(n.useState)(),I=Object(Q.a)(S,2),U=I[0],A=I[1],R=r.a.createElement("div",null);if(U){var D=U.split("/");D=D[D.length-1],R=r.a.createElement("div",null,r.a.createElement(l.b,{to:"/location/".concat(D)},L))}return Object(n.useEffect)((function(){function t(){return(t=Object(E.a)(d.a.mark((function a(t){var n;return d.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e.getCharacter(t);case 2:n=a.sent,s(n.name),m(n.gender),v(n.image),O(n.species),x(n.status),w(n.location.name),A(n.location.url);case 10:case"end":return a.stop()}}),a)})))).apply(this,arguments)}!function(e){t.apply(this,arguments)}(a)}),[a,e]),r.a.createElement("div",{className:q.a.CharacterPage},r.a.createElement("div",{className:q.a.CharacterPageDark},r.a.createElement("div",{className:q.a.characterBlock},r.a.createElement("div",{className:q.a.characterImg},r.a.createElement("img",{src:h,alt:"".concat(o)})),r.a.createElement("div",{className:q.a.characterInfoBlock},r.a.createElement("div",{className:q.a.characterInfo},"Name - ",o),r.a.createElement("div",{className:q.a.characterInfo},"Gender - ",p),r.a.createElement("div",{className:q.a.characterInfo},"Race - ",j),r.a.createElement("div",{className:q.a.characterInfo},"Status - ",P),r.a.createElement("div",{className:q.a.characterInfo},"Home planet:"),R))))},$=t(31),ee=t.n($),ae=function(e){Object(L.a)(t,e);var a=Object(w.a)(t);function t(){return Object(g.a)(this,t),a.apply(this,arguments)}return Object(B.a)(t,[{key:"render",value:function(){var e=this.props,a=e.locationName,t=e.dimension,n=e.type,c=e.id;return r.a.createElement("div",{className:ee.a.Location},r.a.createElement("div",{className:ee.a.locationName},r.a.createElement(l.b,{to:"/location/".concat(c)},a)),r.a.createElement("ul",null,r.a.createElement("li",null,"Episode number: ",t),r.a.createElement("li",null,"Release date: ",n)))}}]),t}(r.a.Component),te=t(50),ne=t.n(te),re=function(e){Object(L.a)(t,e);var a=Object(w.a)(t);function t(){return Object(g.a)(this,t),a.apply(this,arguments)}return Object(B.a)(t,[{key:"render",value:function(){var e=this.props.locations,a=e.map((function(e){return r.a.createElement("li",{key:e.id},r.a.createElement(ae,{locationName:e.name,dimension:e.dimension,type:e.type,id:e.id}))}));return e.length?r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:ne.a.LocationsList},r.a.createElement("h1",null,"Location List"),r.a.createElement("ul",null,a)),r.a.createElement(R,{onPaginatorPage:y})):r.a.createElement(I,null)}}]),t}(r.a.Component),ce=Object(P.b)((function(e){return{locations:e.locations}}))(re),oe=t(32),se=t.n(oe),ie=function(){var e=new b,a=Object(K.f)().id,t=Object(n.useState)(),c=Object(Q.a)(t,2),o=c[0],s=c[1],i=Object(n.useState)(),l=Object(Q.a)(i,2),u=l[0],p=l[1],m=Object(n.useState)(),f=Object(Q.a)(m,2),g=f[0],h=f[1];Object(n.useEffect)((function(){function t(){return(t=Object(E.a)(d.a.mark((function a(t){var n;return d.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e.getEpisode(t);case 2:n=a.sent,s(n.name),p(n.air_date),h(n.episode.toLowerCase());case 6:case"end":return a.stop()}}),a)})))).apply(this,arguments)}!function(e){t.apply(this,arguments)}(a)}),[a,e]);var v=r.a.createElement("div",null);return g&&(v=r.a.createElement("div",null,r.a.createElement("video",{controls:!0,width:"950",height:"538",poster:"/examples/media/martynko.png",preload:"none"},r.a.createElement("source",{src:"https://vs1.cdnlast.com/s/32d61c916b972b8fbb88048ade080d99/rick.and.morty.2013.siendyk-nf20/".concat(g,"_720.mp4"),type:"video/mp4"})))),r.a.createElement("div",{className:se.a.EpisodePage},r.a.createElement("div",{className:se.a.episodeBlock},r.a.createElement("h1",null,o),r.a.createElement("div",null,g),r.a.createElement("div",null,u),v))},le=t(33),ue=t.n(le),pe=function(){var e=new b,a=Object(K.f)().id,t=Object(n.useState)(),c=Object(Q.a)(t,2),o=c[0],s=c[1],i=Object(n.useState)(),l=Object(Q.a)(i,2),u=l[0],p=l[1],m=Object(n.useState)(),f=Object(Q.a)(m,2),g=f[0],h=f[1];return Object(n.useEffect)((function(){function t(){return(t=Object(E.a)(d.a.mark((function a(t){var n;return d.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e.getLocation(t);case 2:n=a.sent,s(n.name),p(n.dimension),h(n.type);case 6:case"end":return a.stop()}}),a)})))).apply(this,arguments)}!function(e){t.apply(this,arguments)}(a)}),[a,e]),r.a.createElement("div",{className:ue.a.CharacterPage},r.a.createElement("div",{className:ue.a.characterBlock},r.a.createElement("h1",null,o),r.a.createElement("div",null,u),r.a.createElement("div",null,g)))},me=t(12),de=t.n(me);var fe=function(){return r.a.createElement("div",{className:de.a.Body},r.a.createElement("div",{className:de.a.textBody},r.a.createElement("div",null,r.a.createElement("img",{src:"https://occ-0-3666-2774.1.nflxso.net/dnm/api/v6/LmEnxtiAuzezXBjYXPuDgfZ4zZQ/AAAABVK-867iNzC3GeSiDQJ7jasFpdN4ySy2Of17S2KxaxbOOtsqax_k_ldd_f5TiDeulU3_lyJmIjtBgPVKLnE1cUK-kRk9yZsO4MXA.png?r=47e",alt:"logo",width:"100%",height:"100%"})),r.a.createElement("h1",null,"Rick and Morty"),r.a.createElement("div",{className:de.a.infoBlocks},r.a.createElement("span",{className:de.a.infoBlock},"2013"),r.a.createElement("span",{className:de.a.infoBlock},"18+"),r.a.createElement("span",{className:de.a.infoBlock},"4 Seasons"),r.a.createElement("span",{className:de.a.lastInfoBlock},"TV Sci-Fi & Fantasy")),r.a.createElement("p",{className:de.a.descriptionBlock},"Brilliant but boozy scientist Rick hijacks his fretful teenage grandson, Morty, for wild escapades in other worlds and alternate dimensions."),r.a.createElement("p",{className:de.a.creatorBlock},r.a.createElement("span",{className:de.a.creatorNameBlock},"Starring:"),"Justin Roiland, Chris Parnell, Spencer Grammer"),r.a.createElement("p",{className:de.a.creatorBlock},r.a.createElement("span",{className:de.a.creatorNameBlock},"Creators:"),"Dan Harmon, Justin Roiland")))},Ee=t(51),ge=t.n(Ee);var he=function(){return r.a.createElement("div",{className:ge.a.Footer},"By Vlad Romanov")},ve=function(){return r.a.createElement(l.a,null,r.a.createElement("div",{className:"App"},r.a.createElement(C,null),r.a.createElement(K.c,null,r.a.createElement(K.a,{path:"/characters"},r.a.createElement(H,null)),r.a.createElement(K.a,{path:"/character/:id"},r.a.createElement(W,null)),r.a.createElement(K.a,{path:"/episodes"},r.a.createElement(M,null)),r.a.createElement(K.a,{path:"/episode/:id"},r.a.createElement(ie,null)),r.a.createElement(K.a,{path:"/locations"},r.a.createElement(ce,null)),r.a.createElement(K.a,{path:"/location/:id"},r.a.createElement(pe,null)),r.a.createElement(fe,null)),r.a.createElement(he,null)))},be=t(22),_e=t(52),ke={characters:[],episodes:[],locations:[],paginator:{prevPageUrl:null,nextPageUrl:null,currentPage:null,pageCount:null}};var je=Object(be.c)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ke,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"IS_CHARACTERS":return Object(f.a)(Object(f.a)({},e),{},{characters:a.payload.characters,paginator:a.payload.paginator});case"IS_EPISODES":return Object(f.a)(Object(f.a)({},e),{},{episodes:a.payload.responseEpisodesArr,paginator:a.payload.paginator});case"IS_LOCATION":return Object(f.a)(Object(f.a)({},e),{},{locations:a.payload.responseLocationArr,paginator:a.payload.paginator});default:return e}}),Object(be.a)(_e.a));o.a.render(r.a.createElement(P.a,{store:je},r.a.createElement(ve,null)),document.getElementById("root"))}},[[53,1,2]]]);
//# sourceMappingURL=main.dd5373d3.chunk.js.map