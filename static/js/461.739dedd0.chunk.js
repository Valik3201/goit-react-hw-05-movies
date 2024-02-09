"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[461],{4461:function(t,e,n){n.d(e,{WU:function(){return ct}});var r={lessThanXSeconds:{one:"less than a second",other:"less than {{count}} seconds"},xSeconds:{one:"1 second",other:"{{count}} seconds"},halfAMinute:"half a minute",lessThanXMinutes:{one:"less than a minute",other:"less than {{count}} minutes"},xMinutes:{one:"1 minute",other:"{{count}} minutes"},aboutXHours:{one:"about 1 hour",other:"about {{count}} hours"},xHours:{one:"1 hour",other:"{{count}} hours"},xDays:{one:"1 day",other:"{{count}} days"},aboutXWeeks:{one:"about 1 week",other:"about {{count}} weeks"},xWeeks:{one:"1 week",other:"{{count}} weeks"},aboutXMonths:{one:"about 1 month",other:"about {{count}} months"},xMonths:{one:"1 month",other:"{{count}} months"},aboutXYears:{one:"about 1 year",other:"about {{count}} years"},xYears:{one:"1 year",other:"{{count}} years"},overXYears:{one:"over 1 year",other:"over {{count}} years"},almostXYears:{one:"almost 1 year",other:"almost {{count}} years"}};function a(t){return function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=e.width?String(e.width):t.defaultWidth,r=t.formats[n]||t.formats[t.defaultWidth];return r}}var i={date:a({formats:{full:"EEEE, MMMM do, y",long:"MMMM do, y",medium:"MMM d, y",short:"MM/dd/yyyy"},defaultWidth:"full"}),time:a({formats:{full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"},defaultWidth:"full"}),dateTime:a({formats:{full:"{{date}} 'at' {{time}}",long:"{{date}} 'at' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},defaultWidth:"full"})},o={lastWeek:"'last' eeee 'at' p",yesterday:"'yesterday at' p",today:"'today at' p",tomorrow:"'tomorrow at' p",nextWeek:"eeee 'at' p",other:"P"};function u(t){return function(e,n){var r;if("formatting"===(null!==n&&void 0!==n&&n.context?String(n.context):"standalone")&&t.formattingValues){var a=t.defaultFormattingWidth||t.defaultWidth,i=null!==n&&void 0!==n&&n.width?String(n.width):a;r=t.formattingValues[i]||t.formattingValues[a]}else{var o=t.defaultWidth,u=null!==n&&void 0!==n&&n.width?String(n.width):t.defaultWidth;r=t.values[u]||t.values[o]}return r[t.argumentCallback?t.argumentCallback(e):e]}}var d={ordinalNumber:function(t,e){var n=Number(t),r=n%100;if(r>20||r<10)switch(r%10){case 1:return n+"st";case 2:return n+"nd";case 3:return n+"rd"}return n+"th"},era:u({values:{narrow:["B","A"],abbreviated:["BC","AD"],wide:["Before Christ","Anno Domini"]},defaultWidth:"wide"}),quarter:u({values:{narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1st quarter","2nd quarter","3rd quarter","4th quarter"]},defaultWidth:"wide",argumentCallback:function(t){return t-1}}),month:u({values:{narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],wide:["January","February","March","April","May","June","July","August","September","October","November","December"]},defaultWidth:"wide"}),day:u({values:{narrow:["S","M","T","W","T","F","S"],short:["Su","Mo","Tu","We","Th","Fr","Sa"],abbreviated:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],wide:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},defaultWidth:"wide"}),dayPeriod:u({values:{narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"}},defaultWidth:"wide",formattingValues:{narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"}},defaultFormattingWidth:"wide"})};function s(t){return function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=n.width,a=r&&t.matchPatterns[r]||t.matchPatterns[t.defaultMatchWidth],i=e.match(a);if(!i)return null;var o,u=i[0],d=r&&t.parsePatterns[r]||t.parsePatterns[t.defaultParseWidth],s=Array.isArray(d)?c(d,(function(t){return t.test(u)})):l(d,(function(t){return t.test(u)}));o=t.valueCallback?t.valueCallback(s):s,o=n.valueCallback?n.valueCallback(o):o;var h=e.slice(u.length);return{value:o,rest:h}}}function l(t,e){for(var n in t)if(Object.prototype.hasOwnProperty.call(t,n)&&e(t[n]))return n}function c(t,e){for(var n=0;n<t.length;n++)if(e(t[n]))return n}var h,f={ordinalNumber:(h={matchPattern:/^(\d+)(th|st|nd|rd)?/i,parsePattern:/\d+/i,valueCallback:function(t){return parseInt(t,10)}},function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=t.match(h.matchPattern);if(!n)return null;var r=n[0],a=t.match(h.parsePattern);if(!a)return null;var i=h.valueCallback?h.valueCallback(a[0]):a[0];i=e.valueCallback?e.valueCallback(i):i;var o=t.slice(r.length);return{value:i,rest:o}}),era:s({matchPatterns:{narrow:/^(b|a)/i,abbreviated:/^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,wide:/^(before christ|before common era|anno domini|common era)/i},defaultMatchWidth:"wide",parsePatterns:{any:[/^b/i,/^(a|c)/i]},defaultParseWidth:"any"}),quarter:s({matchPatterns:{narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](th|st|nd|rd)? quarter/i},defaultMatchWidth:"wide",parsePatterns:{any:[/1/i,/2/i,/3/i,/4/i]},defaultParseWidth:"any",valueCallback:function(t){return t+1}}),month:s({matchPatterns:{narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,wide:/^(january|february|march|april|may|june|july|august|september|october|november|december)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^may/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},defaultParseWidth:"any"}),day:s({matchPatterns:{narrow:/^[smtwf]/i,short:/^(su|mo|tu|we|th|fr|sa)/i,abbreviated:/^(sun|mon|tue|wed|thu|fri|sat)/i,wide:/^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^s/i,/^m/i,/^t/i,/^w/i,/^t/i,/^f/i,/^s/i],any:[/^su/i,/^m/i,/^tu/i,/^w/i,/^th/i,/^f/i,/^sa/i]},defaultParseWidth:"any"}),dayPeriod:s({matchPatterns:{narrow:/^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,any:/^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i},defaultMatchWidth:"any",parsePatterns:{any:{am:/^a/i,pm:/^p/i,midnight:/^mi/i,noon:/^no/i,morning:/morning/i,afternoon:/afternoon/i,evening:/evening/i,night:/night/i}},defaultParseWidth:"any"})},m={code:"en-US",formatDistance:function(t,e,n){var a,i=r[t];return a="string"===typeof i?i:1===e?i.one:i.other.replace("{{count}}",e.toString()),null!==n&&void 0!==n&&n.addSuffix?n.comparison&&n.comparison>0?"in "+a:a+" ago":a},formatLong:i,formatRelative:function(t,e,n,r){return o[t]},localize:d,match:f,options:{weekStartsOn:0,firstWeekContainsDate:1}},v={};function g(){return v}Math.pow(10,8);var w=6048e5;function b(t){var e=Object.prototype.toString.call(t);return t instanceof Date||"object"===typeof t&&"[object Date]"===e?new t.constructor(+t):"number"===typeof t||"[object Number]"===e||"string"===typeof t||"[object String]"===e?new Date(t):new Date(NaN)}function y(t){var e=b(t);return e.setHours(0,0,0,0),e}function p(t){var e=b(t),n=new Date(Date.UTC(e.getFullYear(),e.getMonth(),e.getDate(),e.getHours(),e.getMinutes(),e.getSeconds(),e.getMilliseconds()));return n.setUTCFullYear(e.getFullYear()),+t-+n}function M(t,e){var n=y(t),r=y(e),a=+n-p(n),i=+r-p(r);return Math.round((a-i)/864e5)}function k(t,e){return t instanceof Date?new t.constructor(e):new Date(e)}function x(t){var e=b(t),n=k(t,0);return n.setFullYear(e.getFullYear(),0,1),n.setHours(0,0,0,0),n}function P(t){var e=b(t);return M(e,x(e))+1}function S(t,e){var n,r,a,i,o,u,d,s,l=g(),c=null!==(n=null!==(r=null!==(a=null!==(i=null===e||void 0===e?void 0:e.weekStartsOn)&&void 0!==i?i:null===e||void 0===e||null===(o=e.locale)||void 0===o||null===(u=o.options)||void 0===u?void 0:u.weekStartsOn)&&void 0!==a?a:l.weekStartsOn)&&void 0!==r?r:null===(d=l.locale)||void 0===d||null===(s=d.options)||void 0===s?void 0:s.weekStartsOn)&&void 0!==n?n:0,h=b(t),f=h.getDay(),m=(f<c?7:0)+f-c;return h.setDate(h.getDate()-m),h.setHours(0,0,0,0),h}function W(t){return S(t,{weekStartsOn:1})}function D(t){var e=b(t),n=e.getFullYear(),r=k(t,0);r.setFullYear(n+1,0,4),r.setHours(0,0,0,0);var a=W(r),i=k(t,0);i.setFullYear(n,0,4),i.setHours(0,0,0,0);var o=W(i);return e.getTime()>=a.getTime()?n+1:e.getTime()>=o.getTime()?n:n-1}function T(t){var e=D(t),n=k(t,0);return n.setFullYear(e,0,4),n.setHours(0,0,0,0),W(n)}function Y(t){var e=b(t),n=+W(e)-+T(e);return Math.round(n/w)+1}function C(t,e){var n,r,a,i,o,u,d,s,l=b(t),c=l.getFullYear(),h=g(),f=null!==(n=null!==(r=null!==(a=null!==(i=null===e||void 0===e?void 0:e.firstWeekContainsDate)&&void 0!==i?i:null===e||void 0===e||null===(o=e.locale)||void 0===o||null===(u=o.options)||void 0===u?void 0:u.firstWeekContainsDate)&&void 0!==a?a:h.firstWeekContainsDate)&&void 0!==r?r:null===(d=h.locale)||void 0===d||null===(s=d.options)||void 0===s?void 0:s.firstWeekContainsDate)&&void 0!==n?n:1,m=k(t,0);m.setFullYear(c+1,0,f),m.setHours(0,0,0,0);var v=S(m,e),w=k(t,0);w.setFullYear(c,0,f),w.setHours(0,0,0,0);var y=S(w,e);return l.getTime()>=v.getTime()?c+1:l.getTime()>=y.getTime()?c:c-1}function O(t,e){var n,r,a,i,o,u,d,s,l=g(),c=null!==(n=null!==(r=null!==(a=null!==(i=null===e||void 0===e?void 0:e.firstWeekContainsDate)&&void 0!==i?i:null===e||void 0===e||null===(o=e.locale)||void 0===o||null===(u=o.options)||void 0===u?void 0:u.firstWeekContainsDate)&&void 0!==a?a:l.firstWeekContainsDate)&&void 0!==r?r:null===(d=l.locale)||void 0===d||null===(s=d.options)||void 0===s?void 0:s.firstWeekContainsDate)&&void 0!==n?n:1,h=C(t,e),f=k(t,0);return f.setFullYear(h,0,c),f.setHours(0,0,0,0),S(f,e)}function N(t,e){var n=b(t),r=+S(n,e)-+O(n,e);return Math.round(r/w)+1}function q(t,e){return(t<0?"-":"")+Math.abs(t).toString().padStart(e,"0")}var F=function(t,e){var n=t.getFullYear(),r=n>0?n:1-n;return q("yy"===e?r%100:r,e.length)},E=function(t,e){var n=t.getMonth();return"M"===e?String(n+1):q(n+1,2)},j=function(t,e){return q(t.getDate(),e.length)},H=function(t,e){return q(t.getHours()%12||12,e.length)},z=function(t,e){return q(t.getHours(),e.length)},L=function(t,e){return q(t.getMinutes(),e.length)},Q=function(t,e){return q(t.getSeconds(),e.length)},A=function(t,e){var n=e.length,r=t.getMilliseconds();return q(Math.trunc(r*Math.pow(10,n-3)),e.length)},G="midnight",X="noon",B="morning",J="afternoon",_="evening",I="night",R={G:function(t,e,n){var r=t.getFullYear()>0?1:0;switch(e){case"G":case"GG":case"GGG":return n.era(r,{width:"abbreviated"});case"GGGGG":return n.era(r,{width:"narrow"});default:return n.era(r,{width:"wide"})}},y:function(t,e,n){if("yo"===e){var r=t.getFullYear(),a=r>0?r:1-r;return n.ordinalNumber(a,{unit:"year"})}return F(t,e)},Y:function(t,e,n,r){var a=C(t,r),i=a>0?a:1-a;return"YY"===e?q(i%100,2):"Yo"===e?n.ordinalNumber(i,{unit:"year"}):q(i,e.length)},R:function(t,e){return q(D(t),e.length)},u:function(t,e){return q(t.getFullYear(),e.length)},Q:function(t,e,n){var r=Math.ceil((t.getMonth()+1)/3);switch(e){case"Q":return String(r);case"QQ":return q(r,2);case"Qo":return n.ordinalNumber(r,{unit:"quarter"});case"QQQ":return n.quarter(r,{width:"abbreviated",context:"formatting"});case"QQQQQ":return n.quarter(r,{width:"narrow",context:"formatting"});default:return n.quarter(r,{width:"wide",context:"formatting"})}},q:function(t,e,n){var r=Math.ceil((t.getMonth()+1)/3);switch(e){case"q":return String(r);case"qq":return q(r,2);case"qo":return n.ordinalNumber(r,{unit:"quarter"});case"qqq":return n.quarter(r,{width:"abbreviated",context:"standalone"});case"qqqqq":return n.quarter(r,{width:"narrow",context:"standalone"});default:return n.quarter(r,{width:"wide",context:"standalone"})}},M:function(t,e,n){var r=t.getMonth();switch(e){case"M":case"MM":return E(t,e);case"Mo":return n.ordinalNumber(r+1,{unit:"month"});case"MMM":return n.month(r,{width:"abbreviated",context:"formatting"});case"MMMMM":return n.month(r,{width:"narrow",context:"formatting"});default:return n.month(r,{width:"wide",context:"formatting"})}},L:function(t,e,n){var r=t.getMonth();switch(e){case"L":return String(r+1);case"LL":return q(r+1,2);case"Lo":return n.ordinalNumber(r+1,{unit:"month"});case"LLL":return n.month(r,{width:"abbreviated",context:"standalone"});case"LLLLL":return n.month(r,{width:"narrow",context:"standalone"});default:return n.month(r,{width:"wide",context:"standalone"})}},w:function(t,e,n,r){var a=N(t,r);return"wo"===e?n.ordinalNumber(a,{unit:"week"}):q(a,e.length)},I:function(t,e,n){var r=Y(t);return"Io"===e?n.ordinalNumber(r,{unit:"week"}):q(r,e.length)},d:function(t,e,n){return"do"===e?n.ordinalNumber(t.getDate(),{unit:"date"}):j(t,e)},D:function(t,e,n){var r=P(t);return"Do"===e?n.ordinalNumber(r,{unit:"dayOfYear"}):q(r,e.length)},E:function(t,e,n){var r=t.getDay();switch(e){case"E":case"EE":case"EEE":return n.day(r,{width:"abbreviated",context:"formatting"});case"EEEEE":return n.day(r,{width:"narrow",context:"formatting"});case"EEEEEE":return n.day(r,{width:"short",context:"formatting"});default:return n.day(r,{width:"wide",context:"formatting"})}},e:function(t,e,n,r){var a=t.getDay(),i=(a-r.weekStartsOn+8)%7||7;switch(e){case"e":return String(i);case"ee":return q(i,2);case"eo":return n.ordinalNumber(i,{unit:"day"});case"eee":return n.day(a,{width:"abbreviated",context:"formatting"});case"eeeee":return n.day(a,{width:"narrow",context:"formatting"});case"eeeeee":return n.day(a,{width:"short",context:"formatting"});default:return n.day(a,{width:"wide",context:"formatting"})}},c:function(t,e,n,r){var a=t.getDay(),i=(a-r.weekStartsOn+8)%7||7;switch(e){case"c":return String(i);case"cc":return q(i,e.length);case"co":return n.ordinalNumber(i,{unit:"day"});case"ccc":return n.day(a,{width:"abbreviated",context:"standalone"});case"ccccc":return n.day(a,{width:"narrow",context:"standalone"});case"cccccc":return n.day(a,{width:"short",context:"standalone"});default:return n.day(a,{width:"wide",context:"standalone"})}},i:function(t,e,n){var r=t.getDay(),a=0===r?7:r;switch(e){case"i":return String(a);case"ii":return q(a,e.length);case"io":return n.ordinalNumber(a,{unit:"day"});case"iii":return n.day(r,{width:"abbreviated",context:"formatting"});case"iiiii":return n.day(r,{width:"narrow",context:"formatting"});case"iiiiii":return n.day(r,{width:"short",context:"formatting"});default:return n.day(r,{width:"wide",context:"formatting"})}},a:function(t,e,n){var r=t.getHours()/12>=1?"pm":"am";switch(e){case"a":case"aa":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"});case"aaa":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"}).toLowerCase();case"aaaaa":return n.dayPeriod(r,{width:"narrow",context:"formatting"});default:return n.dayPeriod(r,{width:"wide",context:"formatting"})}},b:function(t,e,n){var r,a=t.getHours();switch(r=12===a?X:0===a?G:a/12>=1?"pm":"am",e){case"b":case"bb":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"});case"bbb":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"}).toLowerCase();case"bbbbb":return n.dayPeriod(r,{width:"narrow",context:"formatting"});default:return n.dayPeriod(r,{width:"wide",context:"formatting"})}},B:function(t,e,n){var r,a=t.getHours();switch(r=a>=17?_:a>=12?J:a>=4?B:I,e){case"B":case"BB":case"BBB":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"});case"BBBBB":return n.dayPeriod(r,{width:"narrow",context:"formatting"});default:return n.dayPeriod(r,{width:"wide",context:"formatting"})}},h:function(t,e,n){if("ho"===e){var r=t.getHours()%12;return 0===r&&(r=12),n.ordinalNumber(r,{unit:"hour"})}return H(t,e)},H:function(t,e,n){return"Ho"===e?n.ordinalNumber(t.getHours(),{unit:"hour"}):z(t,e)},K:function(t,e,n){var r=t.getHours()%12;return"Ko"===e?n.ordinalNumber(r,{unit:"hour"}):q(r,e.length)},k:function(t,e,n){var r=t.getHours();return 0===r&&(r=24),"ko"===e?n.ordinalNumber(r,{unit:"hour"}):q(r,e.length)},m:function(t,e,n){return"mo"===e?n.ordinalNumber(t.getMinutes(),{unit:"minute"}):L(t,e)},s:function(t,e,n){return"so"===e?n.ordinalNumber(t.getSeconds(),{unit:"second"}):Q(t,e)},S:function(t,e){return A(t,e)},X:function(t,e,n){var r=t.getTimezoneOffset();if(0===r)return"Z";switch(e){case"X":return $(r);case"XXXX":case"XX":return V(r);default:return V(r,":")}},x:function(t,e,n){var r=t.getTimezoneOffset();switch(e){case"x":return $(r);case"xxxx":case"xx":return V(r);default:return V(r,":")}},O:function(t,e,n){var r=t.getTimezoneOffset();switch(e){case"O":case"OO":case"OOO":return"GMT"+U(r,":");default:return"GMT"+V(r,":")}},z:function(t,e,n){var r=t.getTimezoneOffset();switch(e){case"z":case"zz":case"zzz":return"GMT"+U(r,":");default:return"GMT"+V(r,":")}},t:function(t,e,n){return q(Math.trunc(t.getTime()/1e3),e.length)},T:function(t,e,n){return q(t.getTime(),e.length)}};function U(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",n=t>0?"-":"+",r=Math.abs(t),a=Math.trunc(r/60),i=r%60;return 0===i?n+String(a):n+String(a)+e+q(i,2)}function $(t,e){return t%60===0?(t>0?"-":"+")+q(Math.abs(t)/60,2):V(t,e)}function V(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",n=t>0?"-":"+",r=Math.abs(t),a=q(Math.trunc(r/60),2),i=q(r%60,2);return n+a+e+i}var K=function(t,e){switch(t){case"P":return e.date({width:"short"});case"PP":return e.date({width:"medium"});case"PPP":return e.date({width:"long"});default:return e.date({width:"full"})}},Z=function(t,e){switch(t){case"p":return e.time({width:"short"});case"pp":return e.time({width:"medium"});case"ppp":return e.time({width:"long"});default:return e.time({width:"full"})}},tt={p:Z,P:function(t,e){var n,r=t.match(/(P+)(p+)?/)||[],a=r[1],i=r[2];if(!i)return K(t,e);switch(a){case"P":n=e.dateTime({width:"short"});break;case"PP":n=e.dateTime({width:"medium"});break;case"PPP":n=e.dateTime({width:"long"});break;default:n=e.dateTime({width:"full"})}return n.replace("{{date}}",K(a,e)).replace("{{time}}",Z(i,e))}},et=/^D+$/,nt=/^Y+$/,rt=["D","DD","YY","YYYY"];function at(t){return t instanceof Date||"object"===typeof t&&"[object Date]"===Object.prototype.toString.call(t)}function it(t){if(!at(t)&&"number"!==typeof t)return!1;var e=b(t);return!isNaN(Number(e))}var ot=/[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,ut=/P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,dt=/^'([^]*?)'?$/,st=/''/g,lt=/[a-zA-Z]/;function ct(t,e,n){var r,a,i,o,u,d,s,l,c,h,f,v,w,y,p,M,k,x,P=g(),S=null!==(r=null!==(a=null===n||void 0===n?void 0:n.locale)&&void 0!==a?a:P.locale)&&void 0!==r?r:m,W=null!==(i=null!==(o=null!==(u=null!==(d=null===n||void 0===n?void 0:n.firstWeekContainsDate)&&void 0!==d?d:null===n||void 0===n||null===(s=n.locale)||void 0===s||null===(l=s.options)||void 0===l?void 0:l.firstWeekContainsDate)&&void 0!==u?u:P.firstWeekContainsDate)&&void 0!==o?o:null===(c=P.locale)||void 0===c||null===(h=c.options)||void 0===h?void 0:h.firstWeekContainsDate)&&void 0!==i?i:1,D=null!==(f=null!==(v=null!==(w=null!==(y=null===n||void 0===n?void 0:n.weekStartsOn)&&void 0!==y?y:null===n||void 0===n||null===(p=n.locale)||void 0===p||null===(M=p.options)||void 0===M?void 0:M.weekStartsOn)&&void 0!==w?w:P.weekStartsOn)&&void 0!==v?v:null===(k=P.locale)||void 0===k||null===(x=k.options)||void 0===x?void 0:x.weekStartsOn)&&void 0!==f?f:0,T=b(t);if(!it(T))throw new RangeError("Invalid time value");var Y=e.match(ut).map((function(t){var e=t[0];return"p"===e||"P"===e?(0,tt[e])(t,S.formatLong):t})).join("").match(ot).map((function(t){if("''"===t)return{isToken:!1,value:"'"};var e=t[0];if("'"===e)return{isToken:!1,value:ht(t)};if(R[e])return{isToken:!0,value:t};if(e.match(lt))throw new RangeError("Format string contains an unescaped latin alphabet character `"+e+"`");return{isToken:!1,value:t}}));S.localize.preprocessor&&(Y=S.localize.preprocessor(T,Y));var C={firstWeekContainsDate:W,weekStartsOn:D,locale:S};return Y.map((function(r){if(!r.isToken)return r.value;var a=r.value;return(null!==n&&void 0!==n&&n.useAdditionalWeekYearTokens||!function(t){return nt.test(t)}(a))&&(null!==n&&void 0!==n&&n.useAdditionalDayOfYearTokens||!function(t){return et.test(t)}(a))||function(t,e,n){var r=function(t,e,n){var r="Y"===t[0]?"years":"days of the month";return"Use `".concat(t.toLowerCase(),"` instead of `").concat(t,"` (in `").concat(e,"`) for formatting ").concat(r," to the input `").concat(n,"`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md")}(t,e,n);if(console.warn(r),rt.includes(t))throw new RangeError(r)}(a,e,String(t)),(0,R[a[0]])(T,a,S.localize,C)})).join("")}function ht(t){var e=t.match(dt);return e?e[1].replace(st,"'"):t}}}]);
//# sourceMappingURL=461.739dedd0.chunk.js.map