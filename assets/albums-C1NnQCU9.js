import{d as m,o as t,c as r,w as l,g as c,f as s,t as f,y as $,e as i,F as g,j as k,v as A,L as Y,as as C,ay as L,az as w,l as B,m as P,r as S,k as u,aA as V,ax as F}from"./app-BZDWLfP1.js";import{o as z}from"./index-C7yU5XnD.js";import{_ as D}from"./YunPageHeader.vue_vue_type_script_setup_true_lang-Bqy1HhVw.js";const E=["title"],I=["src","alt","on-error"],N=m({__name:"YunAlbum",props:{album:{}},setup(_){return(e,n)=>{const a=$;return t(),r(a,{class:"yun-album-list-item",to:e.album.url},{default:l(()=>[c("figure",{title:e.album.desc},[c("img",{loading:"lazy",class:"yun-album-list-cover",src:e.album.cover,alt:e.album.caption,"on-error":s(z)},null,40,I),c("figcaption",null," 「"+f(e.album.caption)+"」 ",1)],8,E)]),_:1},8,["to"])}}}),R={class:"yun-album-list"},j=m({__name:"YunAlbumList",props:{albums:{}},setup(_){return(e,n)=>{const a=N;return t(),i("div",R,[(t(!0),i(g,null,k(e.albums,o=>(t(),r(a,{key:o.url,album:o},null,8,["album"]))),128))])}}}),H={text:"center",class:"yun-text-light",p:"2"},x=m({__name:"albums",setup(_){const{t:e}=A(),n=Y(),a=C(n);L([w({"@type":"CollectionPage"})]);const o=B(()=>n.value.albums||[]);return(p,O)=>{const d=F,h=D,y=j,b=P("RouterView");return t(),i(g,null,[p.$slots["sidebar-child"]?(t(),r(d,{key:0},{default:l(()=>[S(p.$slots,"sidebar-child")]),_:3})):(t(),r(d,{key:1})),u(b,null,{default:l(({Component:v})=>[(t(),r(V(v),null,{"main-header":l(()=>[u(h,{title:s(a)||s(e)("title.album"),icon:s(n).icon||"i-ri-gallery-line",color:s(n).color},null,8,["title","icon","color"])]),"main-content":l(()=>[c("div",H,f(s(e)("counter.albums",o.value.length)),1),u(y,{albums:o.value},null,8,["albums"]),u(b)]),_:2},1024))]),_:1})],64)}}});export{x as default};
