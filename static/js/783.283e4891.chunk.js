"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[783],{7783:function(e,t,i){i.r(t),i.d(t,{default:function(){return m}});var r=i(7689),n=i(3984),s=i(2791),c=i(1087),l=i(5861),a=i(4687),o=i.n(a),d=i(4390),u=function(){var e=(0,l.Z)(o().mark((function e(t){var i,r;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d.o.get("/movie/".concat(t,"?language=en-US"),d._);case 2:return i=e.sent,r=i.data,e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),h=i(184),m=function(){var e=(0,r.UO)().movieId,t=(0,n.a)({queryKey:["movieDetails",e],queryFn:function(){return u(e)}}),i=t.isPending,l=t.isError,a=t.data,o=t.error;return i?(0,h.jsx)("div",{children:"Loading..."}):l?(0,h.jsxs)("div",{children:["Error fetching data: ",o.message]}):(0,h.jsxs)("div",{children:[(0,h.jsxs)("div",{children:[(0,h.jsx)("img",{src:"https://image.tmdb.org/t/p/w342".concat(a.poster_path),alt:a.original_title}),(0,h.jsx)("h2",{className:"scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0",children:a.original_title}),(0,h.jsx)("blockquote",{className:"mt-6 border-l-2 pl-6 italic",children:a.tagline}),(0,h.jsx)("p",{className:"leading-7 [&:not(:first-child)]:mt-6",children:a.overview}),(0,h.jsx)("h4",{className:"scroll-m-20 text-xl font-semibold tracking-tight",children:"Genres"}),a.genres.map((function(e){return(0,h.jsx)("ul",{className:"my-6 ml-6 list-disc [&>li]:mt-2",children:(0,h.jsx)("li",{children:e.name})},e.id)})),(0,h.jsx)("h4",{className:"scroll-m-20 text-xl font-semibold tracking-tight",children:"Production Companies"}),a.production_countries.map((function(e){return(0,h.jsx)("ul",{className:"my-6 ml-6 list-disc [&>li]:mt-2",children:(0,h.jsx)("li",{children:e.name})},e.iso_3166_1)}))]}),(0,h.jsxs)("ul",{children:[(0,h.jsx)("li",{children:(0,h.jsx)(c.rU,{to:"cast",className:"scroll-m-20 text-2xl font-semibold tracking-tight",children:"Cast"})}),(0,h.jsx)("li",{children:(0,h.jsx)(c.rU,{to:"reviews",className:"scroll-m-20 text-2xl font-semibold tracking-tight",children:"Reviews"})})]}),(0,h.jsx)(s.Suspense,{fallback:(0,h.jsx)("div",{children:"Loading subpage..."}),children:(0,h.jsx)(r.j3,{})})]})}},4390:function(e,t,i){i.d(t,{_:function(){return n},o:function(){return r.Z}});var r=i(5294);r.Z.defaults.baseURL="https://api.themoviedb.org/3";var n={headers:{accept:"application/json",Authorization:"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlYTMyZWM5MzExODExYjA2NDkyNzhmZGFmYzEyMzAwZSIsInN1YiI6IjY1YzIwN2U2ZjQ0ZjI3MDE2M2MwYzBjMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.zkFtcEcge5gUigfN2sq7K5C-DaNfEfDz1qyoSucACIQ"}}}}]);
//# sourceMappingURL=783.283e4891.chunk.js.map