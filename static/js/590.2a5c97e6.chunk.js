"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[590],{1590:function(e,n,r){r.r(n),r.d(n,{default:function(){return v}});var t=r(7689),i=r(3984),a=r(5861),c=r(7757),s=r.n(c),u=r(4390),o=function(){var e=(0,a.Z)(s().mark((function e(n){var r,t;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.o.get("/movie/".concat(n,"/reviews?language=en-US"),u._);case 2:return r=e.sent,t=r.data,e.abrupt("return",t.results);case 5:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),d=r(4461),h=r(6511),l=r(5658),f=r(184),v=function(){var e=(0,t.UO)().movieId,n=(0,i.a)({queryKey:["reviews",e],queryFn:function(){return o(e)}}),r=n.data,a=n.isLoading,c=n.error;return a?(0,f.jsx)("div",{children:"Loading..."}):c?(0,f.jsxs)("div",{children:["Error fetching data: ",c.message]}):(0,f.jsxs)("div",{children:[(0,f.jsx)("h1",{children:"Reviews"}),r.map((function(e){return(0,f.jsx)("ul",{children:(0,f.jsxs)("li",{children:[(0,f.jsx)("h4",{children:e.author}),(0,f.jsx)("p",{children:(0,d.WU)(new Date(e.created_at),"MMMM d, yyyy H:mm")}),/<([A-Za-z][A-Za-z0-9]*)\b[^>]*>(.*?)<\/\1>/.test(e.content)?(0,f.jsx)("div",{children:(0,l.ZP)(e.content)}):(0,f.jsx)("div",{children:(0,f.jsx)(h.U,{children:e.content})})]})},e.id)}))]})}},4390:function(e,n,r){r.d(n,{_:function(){return i},o:function(){return t.Z}});var t=r(5294);t.Z.defaults.baseURL="https://api.themoviedb.org/3";var i={headers:{accept:"application/json",Authorization:"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlYTMyZWM5MzExODExYjA2NDkyNzhmZGFmYzEyMzAwZSIsInN1YiI6IjY1YzIwN2U2ZjQ0ZjI3MDE2M2MwYzBjMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.zkFtcEcge5gUigfN2sq7K5C-DaNfEfDz1qyoSucACIQ"}}}}]);
//# sourceMappingURL=590.2a5c97e6.chunk.js.map