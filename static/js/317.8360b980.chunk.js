"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[317],{2778:function(e,a,r){r.d(a,{$h:function(){return N},h$:function(){return j},Sw:function(){return p},xD:function(){return g}});var s=r(1928),t=r(1413),n=r(4925),i=r(2791),c=r(152),l=r(2758),o=r(184),d=["className","variant"],u=["className"],f=["className"],m=(0,c.j)("relative w-full rounded-lg border px-4 py-3 text-sm [&>svg+div]:translate-y-[-3px] [&>svg]:absolute [&>svg]:left-4 [&>svg]:top-4 [&>svg]:text-foreground [&>svg~*]:pl-7",{variants:{variant:{default:"bg-background text-foreground",destructive:"border-destructive/50 text-destructive dark:border-destructive [&>svg]:text-destructive"}},defaultVariants:{variant:"default"}}),x=i.forwardRef((function(e,a){var r=e.className,s=e.variant,i=(0,n.Z)(e,d);return(0,o.jsx)("div",(0,t.Z)({ref:a,role:"alert",className:(0,l.cn)(m({variant:s}),r)},i))}));x.displayName="Alert";var v=i.forwardRef((function(e,a){var r=e.className,s=(0,n.Z)(e,u);return(0,o.jsx)("div",(0,t.Z)({ref:a,className:(0,l.cn)("mb-1 font-medium leading-none tracking-tight",r)},s))}));v.displayName="AlertTitle";var h=i.forwardRef((function(e,a){var r=e.className,s=(0,n.Z)(e,f);return(0,o.jsx)("div",(0,t.Z)({ref:a,className:(0,l.cn)("text-sm [&_p]:leading-relaxed",r)},s))}));h.displayName="AlertDescription";var N=function(e){var a=e.message;return(0,o.jsxs)(x,{variant:"destructive",className:"max-w-2xl",children:[(0,o.jsx)(s.LPM,{className:"h-4 w-4"}),(0,o.jsx)(v,{children:"Error"}),(0,o.jsx)(h,{children:a})]})},j=function(){return(0,o.jsxs)(x,{className:"max-w-2xl",children:[(0,o.jsx)(s.H4u,{className:"h-4 w-4 text-blue-500"}),(0,o.jsx)(v,{children:"No Search Results"}),(0,o.jsx)(h,{children:"Your search did not match any movies. Please try again with different keywords or filters."})]})},p=function(){return(0,o.jsxs)(x,{className:"max-w-2xl mt-8",children:[(0,o.jsx)(s.H4u,{className:"h-4 w-4 text-blue-500"}),(0,o.jsx)(v,{children:"No Cast Information"}),(0,o.jsx)(h,{children:"There is no information available about the cast for this movie."})]})},g=function(){return(0,o.jsxs)(x,{className:"max-w-2xl mt-8",children:[(0,o.jsx)(s.H4u,{className:"h-4 w-4 text-blue-500"}),(0,o.jsx)(v,{children:"No Reviews Yet"}),(0,o.jsx)(h,{children:"There are currently no reviews available for this movie."})]})}},7317:function(e,a,r){r.r(a),r.d(a,{default:function(){return _}});var s=r(7689),t=r(3984),n=r(5861),i=r(4687),c=r.n(i),l=r(4390),o=function(){var e=(0,n.Z)(c().mark((function e(a){var r,s;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,l.o.get("/movie/".concat(a,"/reviews?language=en-US"),l._);case 2:return r=e.sent,s=r.data,e.abrupt("return",s.results);case 5:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}(),d=r(4321),u=r(2778),f=r(4461),m=r(570),x=r(5658),v=r(1413),h=r(4925),N=r(2791),j=r(2758),p=r(184),g=["className"],w=["className"],y=["className"],Z=["className"],b=["className"],I=["className"],C=N.forwardRef((function(e,a){var r=e.className,s=(0,h.Z)(e,g);return(0,p.jsx)("div",(0,v.Z)({ref:a,className:(0,j.cn)("rounded-xl border bg-card text-card-foreground shadow",r)},s))}));C.displayName="Card";var z=N.forwardRef((function(e,a){var r=e.className,s=(0,h.Z)(e,w);return(0,p.jsx)("div",(0,v.Z)({ref:a,className:(0,j.cn)("flex flex-col space-y-1.5 p-6",r)},s))}));z.displayName="CardHeader";var M=N.forwardRef((function(e,a){var r=e.className,s=(0,h.Z)(e,y);return(0,p.jsx)("div",(0,v.Z)({ref:a,className:(0,j.cn)("font-semibold leading-none tracking-tight",r)},s))}));M.displayName="CardTitle";var k=N.forwardRef((function(e,a){var r=e.className,s=(0,h.Z)(e,Z);return(0,p.jsx)("p",(0,v.Z)({ref:a,className:(0,j.cn)("text-sm text-muted-foreground",r)},s))}));k.displayName="CardDescription";var R=N.forwardRef((function(e,a){var r=e.className,s=(0,h.Z)(e,b);return(0,p.jsx)("div",(0,v.Z)({ref:a,className:(0,j.cn)("p-6 pt-0",r)},s))}));R.displayName="CardContent",N.forwardRef((function(e,a){var r=e.className,s=(0,h.Z)(e,I);return(0,p.jsx)("div",(0,v.Z)({ref:a,className:(0,j.cn)("flex items-center p-6 pt-0",r)},s))})).displayName="CardFooter";var _=function(){var e=(0,s.UO)().movieId,a=(0,t.a)({queryKey:["reviews",e],queryFn:function(){return o(e)}}),r=a.data,n=a.isLoading,i=a.error;return n?(0,p.jsx)(d.a,{}):i?(0,p.jsx)(u.$h,{message:i.message}):(0,p.jsxs)(p.Fragment,{children:[!n&&0===r.length&&(0,p.jsx)(u.xD,{}),(0,p.jsx)("ul",{className:"flex flex-col w-full max-w-5xl items-start gap-4 py-4",children:r.map((function(e){return(0,p.jsx)("li",{className:"min-w-full",children:(0,p.jsxs)(C,{children:[(0,p.jsxs)(z,{children:[(0,p.jsx)(M,{children:e.author}),(0,p.jsx)(k,{children:(0,f.WU)(new Date(e.created_at),"HH:mm, MMMM d, yyyy")})]}),(0,p.jsx)(R,{children:/<([A-Za-z][A-Za-z0-9]*)\b[^>]*>(.*?)<\/\1>/.test(e.content)?(0,p.jsx)("p",{children:(0,x.ZP)(e.content)}):(0,p.jsx)(m.U,{children:e.content})})]})},e.id)}))})]})}},4390:function(e,a,r){r.d(a,{_:function(){return t},o:function(){return s.Z}});var s=r(5294);s.Z.defaults.baseURL="https://api.themoviedb.org/3";var t={headers:{accept:"application/json",Authorization:"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlYTMyZWM5MzExODExYjA2NDkyNzhmZGFmYzEyMzAwZSIsInN1YiI6IjY1YzIwN2U2ZjQ0ZjI3MDE2M2MwYzBjMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.zkFtcEcge5gUigfN2sq7K5C-DaNfEfDz1qyoSucACIQ"}}}}]);
//# sourceMappingURL=317.8360b980.chunk.js.map