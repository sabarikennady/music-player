(this["webpackJsonpmusic-player"]=this["webpackJsonpmusic-player"]||[]).push([[0],{21:function(a,t,e){},30:function(a,t,e){"use strict";e.r(t);var n=e(2),r=e.n(n),i=e(15),c=e.n(i),s=e(5),o=e.n(s),u=e(7),l=e(3),m=e(9),d=(e(21),e(8)),p=e(6),j=e(0),b=function(a){var t=a.audioRef,e=a.setSongInfo,n=a.songInfo,r=a.currentSong,i=a.isPlaying,c=a.setIsPlaying,s=a.songs,m=a.setCurrentSong,b=a.setSongs,g=function(a){var t=s.map((function(t){return t.id===a.id?Object(l.a)(Object(l.a)({},t),{},{active:!0}):Object(l.a)(Object(l.a)({},t),{},{active:!1})}));b(t)},h=function(a){return Math.floor(a/60)+":"+("0"+Math.floor(a%60)).slice(-2)},v=function(){var a=Object(u.a)(o.a.mark((function a(e){var n;return o.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:if(n=s.findIndex((function(a){return a.id===r.id})),"skip-forward"!==e){a.next=5;break}return a.next=4,m(s[(n+1)%s.length]);case 4:g(s[(n+1)%s.length]);case 5:if("skip-back"!==e){a.next=15;break}if((n-1)%s.length!==-1){a.next=12;break}return a.next=9,m(s[s.length-1]);case 9:return g(s[s.length-1]),i&&t.current.play(),a.abrupt("return");case 12:return a.next=14,m(s[(n-1)%s.length]);case 14:g(s[(n-1)%s.length]);case 15:i&&t.current.play();case 16:case"end":return a.stop()}}),a)})));return function(t){return a.apply(this,arguments)}}(),f={transform:"translateX(".concat(n.animationPercentage,"%)")};return Object(j.jsxs)("div",{className:"player",children:[Object(j.jsxs)("div",{className:"time-control",children:[Object(j.jsx)("p",{children:h(n.currentTime)}),Object(j.jsxs)("div",{style:{background:"linear-gradient(to right, ".concat(r.color[0],", ").concat(r.color[1],")")},className:"track",children:[Object(j.jsx)("input",{min:0,max:n.duration||0,value:n.currentTime,onChange:function(a){t.current.currentTime=a.target.value,e(Object(l.a)(Object(l.a)({},n),{},{currentTime:a.target.value}))},type:"range"}),Object(j.jsx)("div",{style:f,className:"animate-track"})]}),Object(j.jsx)("p",{children:n.duration?h(n.duration):"0:00"})]}),Object(j.jsxs)("div",{className:"play-control",children:[Object(j.jsx)(d.a,{onClick:function(){return v("skip-back")},className:"skip-back",size:"2x",icon:p.a}),Object(j.jsx)(d.a,{onClick:function(){i?(t.current.pause(),c(!i)):(t.current.play(),c(!i))},className:"play",size:"2x",icon:i?p.d:p.e}),Object(j.jsx)(d.a,{className:"skip-forward",size:"2x",icon:p.b,onClick:function(){return v("skip-forward")}})]})]})},g=function(a){var t=a.currentSong;return Object(j.jsxs)("div",{className:"song-container",children:[Object(j.jsx)("img",{alt:t.name,src:t.cover}),Object(j.jsx)("h2",{children:t.name}),Object(j.jsx)("h3",{children:t.artist})]})},h=e(4);var v=function(){return[{name:"Yaakkai Thiri",cover:"https://c-sf.smule.com/rs-s91/arr/b3/0d/71f520d3-95f8-4e2f-9a09-ccd16a5fda53_1024.jpg",artist:"Music: A. R. Rahman. Singers: A.R. Rahman, Sunitha Sarathy & Shalini Singh",audio:"https://www.tamilmp3plus.com/songs/mp3/aar/Ayudha%20Ezhuthu%20(2004)%20-%20Fanna.mp3",color:["#87a9db","#b36759"],id:Object(h.v4)(),active:!0},{name:"Salomia",cover:"https://i.ytimg.com/vi/7z20SuH4n2U/maxresdefault.jpg",artist:"Deva",audio:"https://www.tamilmp3plus.com/songs/mp3/90/Salomiya.m4a",color:["#b9bc6f","#eda162"],id:Object(h.v4)(),active:!1},{name:"ooh la la la",cover:"https://i.ytimg.com/vi/WfNaT4v0Psc/hqdefault.jpg",artist:"Unni Menon, K. S. Chitra, Srinivas",audio:"https://www.tamilmp3plus.com/songs/mp3/90/Huu%20Huu%20Lalala-Manamadurai.m4a",color:["#d96b43","#ed87cd"],id:Object(h.v4)(),active:!1},{name:"Malargale Malargale",cover:"https://www.filmibeat.com/img/popcorn/movie_posters/love-birds-20170403161754-6310.jpg",artist:"Music: A. R. Rahman. Singers: K. S. Chithra, Hariharan.",audio:"https://www.tamilmp3plus.com/songs/mp3/90/Malargalae.m4a",color:["#7ab5ba","#ebe066"],id:Object(h.v4)(),active:!1},{name:"Poongatrilae",cover:"https://d3tstbtkvp70pc.cloudfront.net/sites/default/files/uyire.jpg",artist:"Music: A. R. Rahman. Singers : Unni Menon, Swarnalatha",audio:"https://www.tamilmp3plus.com/songs/mp3/90/Poongatrile.m4a",color:["#cb7d46","#000000"],id:Object(h.v4)(),active:!1},{name:"Mellisayae",cover:"https://www.filmibeat.com/img/popcorn/movie_posters/mr-romeo-20170403170153-15922.jpg",artist:"Music: A. R. Rahman. Singers: K. S. Chithra, Hariharan.",audio:"https://www.tamilmp3plus.com/songs/mp3/90/Mellisaiyae.m4a",color:["#872a51","#FFD700"],id:Object(h.v4)(),active:!1},{name:"Poo Pookum Osai",cover:"https://lyricsraag.com/wp-content/uploads/2020/10/poo-pookum-osai-lyrics-english-translation.jpg",artist:"Music: A. R. Rahman. Singers: Sujatha, Malaysia Vasudevan",audio:"https://www.tamilmp3plus.com/songs/mp3/aar/Minsaara%20Kanavu%20(1997)%20-%20PooPookkum.mp3",color:["#4685f2","#4ef542"],id:Object(h.v4)(),active:!1},{name:"Indirayo Ival Sundariyo",cover:"https://www.tamil2lyrics.com/wp-content/uploads/2017/10/indhiraiyo.png",artist:"Music: A. R. Rahman. Singers: Sunanda Minmini",audio:"https://www.tamilmp3plus.com/songs/mp3/aar/Kaadhalan%20(1994)%20-%20IndiraiyoIval.mp3",color:["#f2f246","#4ebf19"],id:Object(h.v4)(),active:!1},{name:"Kappaleri Poyachu",cover:"https://www.nowrunning.com/content/movie/1996/india-7972/bg-video413202025953.jpg",artist:"Music: A. R. Rahman. Singers:  SPB, P Susheela",audio:"https://www.tamilmp3plus.com/songs/mp3/aar/Indian%20(1996)%20-%20KappaleriPoyaachu.mp3",color:["#bf7219","#4ef542"],id:Object(h.v4)(),active:!1}]},f=function(a){var t=a.song,e=a.songs,n=a.setCurrentSong,r=a.id,i=a.audioRef,c=a.isPlaying,s=a.setSongs,m=function(){var a=Object(u.a)(o.a.mark((function a(){var t,u;return o.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return t=e.filter((function(a){return a.id===r})),a.next=3,n(t[0]);case 3:u=e.map((function(a){return a.id===r?Object(l.a)(Object(l.a)({},a),{},{active:!0}):Object(l.a)(Object(l.a)({},a),{},{active:!1})})),s(u),c&&i.current.play();case 6:case"end":return a.stop()}}),a)})));return function(){return a.apply(this,arguments)}}();return Object(j.jsxs)("div",{onClick:m,className:"library-song ".concat(t.active?"selected":""),children:[Object(j.jsx)("img",{alt:t.name,src:t.cover}),Object(j.jsxs)("div",{className:"song-description",children:[Object(j.jsx)("h3",{children:t.name}),Object(j.jsx)("h4",{children:t.artist})]})]})},O=function(a){var t=a.songs,e=a.setCurrentSong,n=a.audioRef,r=a.isPlaying,i=a.setSongs,c=a.libraryStatus;return Object(j.jsxs)("div",{className:"library ".concat(c?"active-library":""),children:[Object(j.jsx)("h2",{children:"Library"}),Object(j.jsx)("div",{className:"library-sonngs",children:t.map((function(a){return Object(j.jsx)(f,{songs:t,song:a,setCurrentSong:e,id:a.id,audioRef:n,isPlaying:r,setSongs:i},a.id)}))})]})},y=function(a){var t=a.libraryStatus,e=a.setLibraryStatus;return Object(j.jsxs)("nav",{children:[Object(j.jsx)("h1",{children:"Waves"}),Object(j.jsxs)("button",{class:"raise",onClick:function(){return e(!t)},children:["Library",Object(j.jsx)(d.a,{className:"faIconRaise",icon:p.c})]})]})};var x=function(){var a=Object(n.useRef)(null),t=Object(n.useState)(v()),e=Object(m.a)(t,2),r=e[0],i=e[1],c=Object(n.useState)(r[0]),s=Object(m.a)(c,2),d=s[0],p=s[1],h=Object(n.useState)(!1),f=Object(m.a)(h,2),x=f[0],S=f[1],w=Object(n.useState)({currentTime:0,duration:0,animationPercentage:0}),k=Object(m.a)(w,2),M=k[0],P=k[1],R=Object(n.useState)(!1),C=Object(m.a)(R,2),I=C[0],N=C[1],T=function(a){var t=a.target.currentTime,e=a.target.duration,n=Math.round(t),r=Math.round(e),i=Math.round(n/r*100);P(Object(l.a)(Object(l.a)({},M),{},{currentTime:t,duration:e,animationPercentage:i}))},A=function(){var t=Object(u.a)(o.a.mark((function t(){var e;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=r.findIndex((function(a){return a.id===d.id})),t.next=3,p(r[(e+1)%r.length]);case 3:x&&a.current.play();case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return Object(j.jsxs)("div",{className:"App ".concat(I?"library-active":""),children:[Object(j.jsx)(y,{libraryStatus:I,setLibraryStatus:N}),Object(j.jsx)("br",{}),Object(j.jsx)(g,{currentSong:d}),Object(j.jsx)(b,{audioRef:a,isPlaying:x,setIsPlaying:S,currentSong:d,setSongInfo:P,songInfo:M,songs:r,setCurrentSong:p,setSongs:i}),Object(j.jsx)(O,{audioRef:a,songs:r,setCurrentSong:p,isPlaying:x,setSongs:i,libraryStatus:I}),Object(j.jsx)("audio",{onTimeUpdate:T,onLoadedMetadata:T,ref:a,src:d.audio,onEnded:A})]})},S=function(a){a&&a instanceof Function&&e.e(3).then(e.bind(null,31)).then((function(t){var e=t.getCLS,n=t.getFID,r=t.getFCP,i=t.getLCP,c=t.getTTFB;e(a),n(a),r(a),i(a),c(a)}))};c.a.render(Object(j.jsx)(r.a.StrictMode,{children:Object(j.jsx)(x,{})}),document.getElementById("root")),S()}},[[30,1,2]]]);
//# sourceMappingURL=main.02e91d74.chunk.js.map