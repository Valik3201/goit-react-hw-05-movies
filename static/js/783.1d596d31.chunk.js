"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[783],{7935:function(e,t,r){r.d(t,{C:function(){return d}});var n=r(1413),i=r(4925),s=(r(2791),r(152)),a=r(2758),l=r(184),o=["className","variant"],c=(0,s.j)("inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",{variants:{variant:{default:"border-transparent bg-primary text-primary-foreground shadow hover:bg-primary/80",secondary:"border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",destructive:"border-transparent bg-destructive text-destructive-foreground shadow hover:bg-destructive/80",outline:"text-foreground"}},defaultVariants:{variant:"default"}});function d(e){var t=e.className,r=e.variant,s=(0,i.Z)(e,o);return(0,l.jsx)("div",(0,n.Z)({className:(0,a.cn)(c({variant:r}),t)},s))}},4321:function(e,t,r){r.d(t,{a:function(){return a}});var n=r(1928),i=r(9329),s=r(184),a=function(){return(0,s.jsxs)(i.z,{className:"my-4",disabled:!0,children:[(0,s.jsx)(n.BGW,{className:"mr-2 h-4 w-4 animate-spin"}),"Please wait"]})}},7783:function(e,t,r){r.r(t),r.d(t,{default:function(){return h}});var n=r(7689),i=r(3984),s=r(2791),a=r(1087),l=r(4461),o=r(5861),c=r(4687),d=r.n(c),u=r(4390),x=function(){var e=(0,o.Z)(d().mark((function e(t){var r,n;return d().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.o.get("/movie/".concat(t,"?language=en-US"),u._);case 2:return r=e.sent,n=r.data,e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),m=r(7935),f=r(4321),g=r(184),h=function(){var e=(0,n.UO)().movieId,t=(0,i.a)({queryKey:["movieDetails",e],queryFn:function(){return x(e)}}),r=t.isPending,o=t.isError,c=t.data,d=t.error;return r?(0,g.jsx)(f.a,{}):o?(0,g.jsxs)("div",{children:["Error fetching data: ",d.message]}):(console.debug(c),(0,g.jsxs)("div",{children:[(0,g.jsxs)("div",{className:"grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-8 max-w-6xl",children:[(0,g.jsx)("img",{src:c.poster_path?"https://image.tmdb.org/t/p/original".concat(c.poster_path):"https://placehold.co/342x513?text=".concat(c.title),alt:c.title,className:"w-full rounded-lg"}),(0,g.jsxs)("div",{className:"col-span-2 flex flex-col gap-4",children:[(0,g.jsxs)("div",{children:[(0,g.jsx)("h1",{className:"scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl",children:c.title}),"en"!==c.original_language&&(0,g.jsx)("h2",{className:"scroll-m-20 pt-2 text-3xl text-muted-foreground font-semibold tracking-tight first:mt-0",children:c.original_title})]}),(0,g.jsxs)("p",{className:"text-md font-semibold",children:["Realese date:"," ",(0,g.jsx)("span",{className:"text-muted-foreground",children:(0,l.WU)(new Date(c.release_date),"MMMM d, yyyy")})]}),c.tagline&&(0,g.jsx)("blockquote",{className:"border-l-2 pl-6 italic",children:c.tagline}),(0,g.jsx)("p",{className:"leading-7",children:c.overview}),(0,g.jsxs)("div",{className:"flex flex-col md:flex-row gap-2",children:[(0,g.jsx)("p",{className:"scroll-m-20 text-md font-semibold tracking-tight",children:"Genres:"}),c.genres.map((function(e){return(0,g.jsx)("ul",{children:(0,g.jsx)("li",{children:(0,g.jsx)(m.C,{children:e.name})})},e.id)}))]}),(0,g.jsxs)("div",{className:"flex flex-col md:flex-row gap-2",children:[(0,g.jsx)("p",{className:"scroll-m-20 text-md font-semibold tracking-tight",children:"Production Countries:"}),c.production_countries.map((function(e){return(0,g.jsx)("ul",{children:(0,g.jsx)("li",{children:(0,g.jsx)(m.C,{children:e.name})})},e.iso_3166_1)}))]})]})]}),(0,g.jsxs)("ul",{className:"flex flex-row gap-4 border-b pt-4 pb-2",children:[(0,g.jsx)("li",{children:(0,g.jsx)(a.OL,{to:"cast",className:function(e){return e.isActive?"scroll-m-20 text-2xl font-semibold tracking-tight":"scroll-m-20 text-2xl font-semibold tracking-tight text-muted-foreground transition hover:text-inherit"},children:"Cast"})}),(0,g.jsx)("li",{children:(0,g.jsx)(a.OL,{to:"reviews",className:function(e){return e.isActive?"scroll-m-20 text-2xl font-semibold tracking-tight":"scroll-m-20 text-2xl font-semibold tracking-tight text-muted-foreground transition hover:text-inherit"},children:"Reviews"})})]}),(0,g.jsx)(s.Suspense,{fallback:(0,g.jsx)("div",{children:"Loading subpage..."}),children:(0,g.jsx)(n.j3,{})})]}))}},4390:function(e,t,r){r.d(t,{_:function(){return i},o:function(){return n.Z}});var n=r(5294);n.Z.defaults.baseURL="https://api.themoviedb.org/3";var i={headers:{accept:"application/json",Authorization:"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlYTMyZWM5MzExODExYjA2NDkyNzhmZGFmYzEyMzAwZSIsInN1YiI6IjY1YzIwN2U2ZjQ0ZjI3MDE2M2MwYzBjMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.zkFtcEcge5gUigfN2sq7K5C-DaNfEfDz1qyoSucACIQ"}}}}]);
//# sourceMappingURL=783.1d596d31.chunk.js.map