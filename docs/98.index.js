(self.webpackChunkwasm_web=self.webpackChunkwasm_web||[]).push([[98],{98:(n,e,r)=>{"use strict";n.exports=(async()=>{r.r(e),r.d(e,{advent10Part1:()=>n.gG,advent10Part2:()=>n.Wn,advent11Part1:()=>n.e3,advent11Part2:()=>n.NQ,advent12Part1:()=>n.qR,advent12Part2:()=>n.Mk,advent1Part1:()=>n.KQ,advent1Part2:()=>n.go,advent2Part1:()=>n.jO,advent2Part2:()=>n.QM,advent3Part1:()=>n.Ph,advent3Part2:()=>n.tb,advent4Part1:()=>n.WO,advent4Part2:()=>n.U$,advent5Part1:()=>n.P6,advent5Part2:()=>n.mx,advent6Part1:()=>n.zy,advent6Part2:()=>n.m6,advent6Part2Bits:()=>n.ZI,advent7Part1:()=>n.XO,advent7Part2:()=>n._P,advent8Part1:()=>n.uR,advent8Part2:()=>n.SA,advent9Part1:()=>n.Hp,advent9Part2:()=>n.Lk,arrayMapFilterTest:()=>n.K5,arrayReduceTest:()=>n.Zv,arrayTransferDoubleTest:()=>n.or,arrayTransferSingleTest:()=>n.ZD,primesTest:()=>n.s,stringTransferSingleTest:()=>n.NE});var n=r(199);return n=await Promise.resolve(n),e})()},199:(n,e,r)=>{"use strict";n.exports=(async()=>{r.d(e,{ZD:()=>i,or:()=>v,NE:()=>P,K5:()=>m,s:()=>y,Zv:()=>p,KQ:()=>h,go:()=>k,jO:()=>A,QM:()=>M,Ph:()=>O,tb:()=>Q,WO:()=>R,U$:()=>S,P6:()=>U,mx:()=>Z,zy:()=>E,m6:()=>I,ZI:()=>D,XO:()=>K,_P:()=>N,uR:()=>W,SA:()=>q,Hp:()=>F,Lk:()=>j,gG:()=>z,Wn:()=>G,e3:()=>H,NQ:()=>L,qR:()=>X,Mk:()=>$});var t=r(658);n=r.hmd(n),t=await Promise.resolve(t);let a=null;function _(){return null!==a&&a.buffer===t.memory.buffer||(a=new Float64Array(t.memory.buffer)),a}let l=0;function o(n,e){const r=e(8*n.length);return _().set(n,r/8),l=n.length,r}function i(n){var e=o(n,t.__wbindgen_malloc),r=l;t.arrayTransferSingleTest(e,r)}let d=null;function u(){return null!==d&&d.buffer===t.memory.buffer||(d=new Int32Array(t.memory.buffer)),d}function c(n,e){return _().subarray(n/8,n/8+e)}function v(n){try{const d=t.__wbindgen_export_1.value-16;t.__wbindgen_export_1.value=d;var e=o(n,t.__wbindgen_malloc),r=l;t.arrayTransferDoubleTest(d,e,r);var a=u()[d/4+0],_=u()[d/4+1],i=c(a,_).slice();return t.__wbindgen_free(a,8*_),i}finally{t.__wbindgen_export_1.value+=16}}let b=null;function g(){return null!==b&&b.buffer===t.memory.buffer||(b=new Uint8Array(t.memory.buffer)),b}let f=new("undefined"==typeof TextEncoder?(0,n.require)("util").TextEncoder:TextEncoder)("utf-8");const w="function"==typeof f.encodeInto?function(n,e){return f.encodeInto(n,e)}:function(n,e){const r=f.encode(n);return e.set(r),{read:n.length,written:r.length}};function s(n,e,r){if(void 0===r){const r=f.encode(n),t=e(r.length);return g().subarray(t,t+r.length).set(r),l=r.length,t}let t=n.length,a=e(t);const _=g();let o=0;for(;o<t;o++){const e=n.charCodeAt(o);if(e>127)break;_[a+o]=e}if(o!==t){0!==o&&(n=n.slice(o)),a=r(a,t,t=o+3*n.length);const e=g().subarray(a+o,a+t);o+=w(n,e).written}return l=o,a}function P(n){var e=s(n,t.__wbindgen_malloc,t.__wbindgen_realloc),r=l;t.stringTransferSingleTest(e,r)}function m(n){try{const d=t.__wbindgen_export_1.value-16;t.__wbindgen_export_1.value=d;var e=o(n,t.__wbindgen_malloc),r=l;t.arrayMapFilterTest(d,e,r);var a=u()[d/4+0],_=u()[d/4+1],i=c(a,_).slice();return t.__wbindgen_free(a,8*_),i}finally{t.__wbindgen_export_1.value+=16}}function y(n){return t.primesTest(n)>>>0}function p(n){var e=o(n,t.__wbindgen_malloc),r=l;return t.arrayReduceTest(e,r)}let x=null;function T(n,e){const r=e(4*n.length);return(null!==x&&x.buffer===t.memory.buffer||(x=new Uint32Array(t.memory.buffer)),x).set(n,r/4),l=n.length,r}function h(n){var e=T(n,t.__wbindgen_malloc),r=l;return t.advent1Part1(e,r)>>>0}function k(n){var e=T(n,t.__wbindgen_malloc),r=l;return t.advent1Part2(e,r)>>>0}function A(n){var e=s(n,t.__wbindgen_malloc,t.__wbindgen_realloc),r=l;return t.advent2Part1(e,r)>>>0}function M(n){var e=s(n,t.__wbindgen_malloc,t.__wbindgen_realloc),r=l;return t.advent2Part2(e,r)>>>0}function O(n){var e=s(n,t.__wbindgen_malloc,t.__wbindgen_realloc),r=l;return t.advent3Part1(e,r)>>>0}function Q(n){var e=s(n,t.__wbindgen_malloc,t.__wbindgen_realloc),r=l;return t.advent3Part2(e,r)>>>0}function R(n){var e=s(n,t.__wbindgen_malloc,t.__wbindgen_realloc),r=l;return t.advent4Part1(e,r)>>>0}function S(n){var e=s(n,t.__wbindgen_malloc,t.__wbindgen_realloc),r=l;return t.advent4Part2(e,r)>>>0}function U(n){var e=s(n,t.__wbindgen_malloc,t.__wbindgen_realloc),r=l;return t.advent5Part1(e,r)}function Z(n){var e=s(n,t.__wbindgen_malloc,t.__wbindgen_realloc),r=l;return t.advent5Part2(e,r)}function E(n){var e=s(n,t.__wbindgen_malloc,t.__wbindgen_realloc),r=l;return t.advent6Part1(e,r)>>>0}function I(n){var e=s(n,t.__wbindgen_malloc,t.__wbindgen_realloc),r=l;return t.advent6Part2(e,r)>>>0}function D(n){var e=s(n,t.__wbindgen_malloc,t.__wbindgen_realloc),r=l;return t.advent6Part2Bits(e,r)}function K(n){var e=s(n,t.__wbindgen_malloc,t.__wbindgen_realloc),r=l;return t.advent7Part1(e,r)>>>0}function N(n){var e=s(n,t.__wbindgen_malloc,t.__wbindgen_realloc),r=l;return t.advent7Part2(e,r)>>>0}function W(n){var e=s(n,t.__wbindgen_malloc,t.__wbindgen_realloc),r=l;return t.advent8Part1(e,r)}function q(n){var e=s(n,t.__wbindgen_malloc,t.__wbindgen_realloc),r=l;return t.advent8Part2(e,r)}const B=new Uint32Array(2),C=new BigUint64Array(B.buffer);function F(n){try{const o=t.__wbindgen_export_1.value-16;t.__wbindgen_export_1.value=o;var e=s(n,t.__wbindgen_malloc,t.__wbindgen_realloc),r=l;t.advent9Part1(o,e,r);var a=u()[o/4+0],_=u()[o/4+1];return B[0]=a,B[1]=_,C[0]}finally{t.__wbindgen_export_1.value+=16}}function j(n){try{const o=t.__wbindgen_export_1.value-16;t.__wbindgen_export_1.value=o;var e=s(n,t.__wbindgen_malloc,t.__wbindgen_realloc),r=l;t.advent9Part2(o,e,r);var a=u()[o/4+0],_=u()[o/4+1];return B[0]=a,B[1]=_,C[0]}finally{t.__wbindgen_export_1.value+=16}}function z(n){var e=s(n,t.__wbindgen_malloc,t.__wbindgen_realloc),r=l;return t.advent10Part1(e,r)>>>0}function G(n){try{const o=t.__wbindgen_export_1.value-16;t.__wbindgen_export_1.value=o;var e=s(n,t.__wbindgen_malloc,t.__wbindgen_realloc),r=l;t.advent10Part2(o,e,r);var a=u()[o/4+0],_=u()[o/4+1];return B[0]=a,B[1]=_,C[0]}finally{t.__wbindgen_export_1.value+=16}}function H(n){var e=s(n,t.__wbindgen_malloc,t.__wbindgen_realloc),r=l;return t.advent11Part1(e,r)>>>0}function L(n){var e=s(n,t.__wbindgen_malloc,t.__wbindgen_realloc),r=l;return t.advent11Part2(e,r)>>>0}function X(n){var e=s(n,t.__wbindgen_malloc,t.__wbindgen_realloc),r=l;return t.advent12Part1(e,r)>>>0}function $(n){var e=s(n,t.__wbindgen_malloc,t.__wbindgen_realloc),r=l;return t.advent12Part2(e,r)>>>0}return e})()},658:(n,e,r)=>{"use strict";n.exports=r.v(e,n.id,"5ae36ea0770817df5c24")}}]);