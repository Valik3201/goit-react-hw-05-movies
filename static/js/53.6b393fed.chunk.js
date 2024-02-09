"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[53],{7935:function(e,r,t){t.d(r,{C:function(){return l}});var a=t(1413),n=t(4925),i=(t(2791),t(152)),s=t(2758),o=t(184),c=["className","variant"],d=(0,i.j)("inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",{variants:{variant:{default:"border-transparent bg-primary text-primary-foreground shadow hover:bg-primary/80",secondary:"border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",destructive:"border-transparent bg-destructive text-destructive-foreground shadow hover:bg-destructive/80",outline:"text-foreground"}},defaultVariants:{variant:"default"}});function l(e){var r=e.className,t=e.variant,i=(0,n.Z)(e,c);return(0,o.jsx)("div",(0,a.Z)({className:(0,s.cn)(d({variant:t}),r)},i))}},4321:function(e,r,t){t.d(r,{a:function(){return s}});var a=t(1928),n=t(9329),i=t(184),s=function(){return(0,i.jsxs)(n.z,{className:"my-4",disabled:!0,children:[(0,i.jsx)(a.BGW,{className:"mr-2 h-4 w-4 animate-spin"}),"Please wait"]})}},4633:function(e,r,t){var a=t(1087),n=t(7935),i=t(184);r.Z=function(e){var r=e.movie;return(0,i.jsx)(a.rU,{to:"/movies/".concat(r.id),children:(0,i.jsxs)("div",{className:"flex flex-col gap-2",children:[(0,i.jsx)("div",{className:"overflow-hidden rounded-lg",children:(0,i.jsx)("img",{src:r.poster_path?"https://image.tmdb.org/t/p/w342".concat(r.poster_path):"https://placehold.co/342x513?text=".concat(r.title||r.name),alt:r.title||r.name,className:"h-auto w-auto object-cover transition-all hover:scale-105"})}),r.media_type&&(0,i.jsx)("div",{className:"flex-none",children:(0,i.jsx)(n.C,{children:r.media_type.charAt(0).toUpperCase()+r.media_type.slice(1)})}),(0,i.jsxs)("div",{className:"flex flex-col gap-x-0.5",children:[(0,i.jsx)("h3",{className:"scroll-m-20 text-lg font-bold tracking-tight",children:r.title||r.name}),(0,i.jsxs)("h4",{className:"text-md text-muted-foreground font-bold",children:[r.release_date&&new Date(r.release_date).getFullYear(),r.first_air_date&&new Date(r.first_air_date).getFullYear()]})]})]})},r.id)}},2053:function(e,r,t){t.r(r),t.d(r,{default:function(){return f}});var a=t(3984),n=t(5861),i=t(4687),s=t.n(i),o=t(4390),c=function(){var e=(0,n.Z)(s().mark((function e(){var r,t;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.o.get("/trending/movie/day?language=en-US",o._);case 2:return r=e.sent,t=r.data,e.abrupt("return",t.results);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),d=t(4633),l=t(4321),u=t(184),f=function(){var e=(0,a.a)({queryKey:["tranding"],queryFn:c}),r=e.isPending,t=e.isError,n=e.data,i=e.error;return r?(0,u.jsx)(l.a,{}):t?(0,u.jsxs)("div",{children:["Error fetching data: ",i.message]}):(0,u.jsxs)("div",{children:[(0,u.jsx)("h1",{className:"scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl pb-8",children:"Trending Movies and TV Shows"}),(0,u.jsx)("div",{className:"grid grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4",children:n.map((function(e){return(0,u.jsx)(d.Z,{movie:e},e.id)}))})]})}},4390:function(e,r,t){t.d(r,{_:function(){return n},o:function(){return a.Z}});var a=t(5294);a.Z.defaults.baseURL="https://api.themoviedb.org/3";var n={headers:{accept:"application/json",Authorization:"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlYTMyZWM5MzExODExYjA2NDkyNzhmZGFmYzEyMzAwZSIsInN1YiI6IjY1YzIwN2U2ZjQ0ZjI3MDE2M2MwYzBjMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.zkFtcEcge5gUigfN2sq7K5C-DaNfEfDz1qyoSucACIQ"}}}}]);
//# sourceMappingURL=53.6b393fed.chunk.js.map