(self.webpackChunkwasm_web=self.webpackChunkwasm_web||[]).push([[98],{98:(e,n,r)=>{"use strict";e.exports=(async()=>{r.r(n),r.d(n,{advent1Part1:()=>e.KQ,advent1Part2:()=>e.go,advent2Part1:()=>e.jO,advent2Part2:()=>e.QM,advent3Part1:()=>e.Ph,advent3Part2:()=>e.tb,advent4Part1:()=>e.WO,advent4Part2:()=>e.U$,advent5Part1:()=>e.P6,advent5Part2:()=>e.mx,arrayMapFilterTest:()=>e.K5,arrayReduceTest:()=>e.Zv,arrayTransferDoubleTest:()=>e.or,arrayTransferSingleTest:()=>e.ZD,primesTest:()=>e.s,stringTransferSingleTest:()=>e.NE});var e=r(199);return e=await Promise.resolve(e),n})()},199:(e,n,r)=>{"use strict";e.exports=(async()=>{r.d(n,{ZD:()=>u,or:()=>d,NE:()=>m,K5:()=>y,s:()=>P,Zv:()=>T,KQ:()=>x,go:()=>k,jO:()=>A,QM:()=>E,Ph:()=>D,tb:()=>K,WO:()=>M,U$:()=>O,P6:()=>Q,mx:()=>S});var t=r(658);e=r.hmd(e),t=await Promise.resolve(t);let a=null;function l(){return null!==a&&a.buffer===t.memory.buffer||(a=new Float64Array(t.memory.buffer)),a}let _=0;function o(e,n){const r=n(8*e.length);return l().set(e,r/8),_=e.length,r}function u(e){var n=o(e,t.__wbindgen_malloc),r=_;t.arrayTransferSingleTest(n,r)}let i=null;function c(){return null!==i&&i.buffer===t.memory.buffer||(i=new Int32Array(t.memory.buffer)),i}function f(e,n){return l().subarray(e/8,e/8+n)}function d(e){try{const i=t.__wbindgen_export_1.value-16;t.__wbindgen_export_1.value=i;var n=o(e,t.__wbindgen_malloc),r=_;t.arrayTransferDoubleTest(i,n,r);var a=c()[i/4+0],l=c()[i/4+1],u=f(a,l).slice();return t.__wbindgen_free(a,8*l),u}finally{t.__wbindgen_export_1.value+=16}}let s=null;function b(){return null!==s&&s.buffer===t.memory.buffer||(s=new Uint8Array(t.memory.buffer)),s}let g=new("undefined"==typeof TextEncoder?(0,e.require)("util").TextEncoder:TextEncoder)("utf-8");const v="function"==typeof g.encodeInto?function(e,n){return g.encodeInto(e,n)}:function(e,n){const r=g.encode(e);return n.set(r),{read:e.length,written:r.length}};function w(e,n,r){if(void 0===r){const r=g.encode(e),t=n(r.length);return b().subarray(t,t+r.length).set(r),_=r.length,t}let t=e.length,a=n(t);const l=b();let o=0;for(;o<t;o++){const n=e.charCodeAt(o);if(n>127)break;l[a+o]=n}if(o!==t){0!==o&&(e=e.slice(o)),a=r(a,t,t=o+3*e.length);const n=b().subarray(a+o,a+t);o+=v(e,n).written}return _=o,a}function m(e){var n=w(e,t.__wbindgen_malloc,t.__wbindgen_realloc),r=_;t.stringTransferSingleTest(n,r)}function y(e){try{const i=t.__wbindgen_export_1.value-16;t.__wbindgen_export_1.value=i;var n=o(e,t.__wbindgen_malloc),r=_;t.arrayMapFilterTest(i,n,r);var a=c()[i/4+0],l=c()[i/4+1],u=f(a,l).slice();return t.__wbindgen_free(a,8*l),u}finally{t.__wbindgen_export_1.value+=16}}function P(e){return t.primesTest(e)>>>0}function T(e){var n=o(e,t.__wbindgen_malloc),r=_;return t.arrayReduceTest(n,r)}let h=null;function p(e,n){const r=n(4*e.length);return(null!==h&&h.buffer===t.memory.buffer||(h=new Uint32Array(t.memory.buffer)),h).set(e,r/4),_=e.length,r}function x(e){var n=p(e,t.__wbindgen_malloc),r=_;return t.advent1Part1(n,r)>>>0}function k(e){var n=p(e,t.__wbindgen_malloc),r=_;return t.advent1Part2(n,r)>>>0}function A(e){var n=w(e,t.__wbindgen_malloc,t.__wbindgen_realloc),r=_;return t.advent2Part1(n,r)>>>0}function E(e){var n=w(e,t.__wbindgen_malloc,t.__wbindgen_realloc),r=_;return t.advent2Part2(n,r)>>>0}function D(e){var n=w(e,t.__wbindgen_malloc,t.__wbindgen_realloc),r=_;return t.advent3Part1(n,r)>>>0}function K(e){var n=w(e,t.__wbindgen_malloc,t.__wbindgen_realloc),r=_;return t.advent3Part2(n,r)>>>0}function M(e){var n=w(e,t.__wbindgen_malloc,t.__wbindgen_realloc),r=_;return t.advent4Part1(n,r)>>>0}function O(e){var n=w(e,t.__wbindgen_malloc,t.__wbindgen_realloc),r=_;return t.advent4Part2(n,r)>>>0}function Q(e){var n=w(e,t.__wbindgen_malloc,t.__wbindgen_realloc),r=_;return t.advent5Part1(n,r)}function S(e){var n=w(e,t.__wbindgen_malloc,t.__wbindgen_realloc),r=_;return t.advent5Part2(n,r)}return n})()},658:(e,n,r)=>{"use strict";e.exports=r.v(n,e.id,"b57a8be7e13b9759f837")}}]);