(self.webpackChunkwasm_web=self.webpackChunkwasm_web||[]).push([[98],{98:(n,e,r)=>{"use strict";n.exports=(async()=>{r.r(e),r.d(e,{advent10Part1:()=>n.gG,advent10Part2:()=>n.Wn,advent11Part1:()=>n.e3,advent11Part2:()=>n.NQ,advent12Part1:()=>n.qR,advent12Part2:()=>n.Mk,advent13Part1:()=>n.R5,advent13Part2:()=>n.ih,advent14Part1:()=>n.Z0,advent14Part2:()=>n.iy,advent15Part1:()=>n.Bx,advent15Part2:()=>n.rL,advent16Part1:()=>n.Ez,advent16Part2:()=>n._D,advent17Part1:()=>n.mb,advent17Part2:()=>n.Xx,advent18Part1:()=>n.yN,advent18Part2:()=>n.$N,advent19Part1:()=>n.fS,advent19Part2:()=>n.qL,advent1Part1:()=>n.KQ,advent1Part2:()=>n.go,advent20Part1:()=>n.fJ,advent20Part2:()=>n.LP,advent21Part1:()=>n.WC,advent21Part2:()=>n.BS,advent22Part1:()=>n.SU,advent22Part2:()=>n.NU,advent23Part1:()=>n.F_,advent23Part2:()=>n.Od,advent24Part1:()=>n.n6,advent24Part2:()=>n.CQ,advent2Part1:()=>n.jO,advent2Part2:()=>n.QM,advent3Part1:()=>n.Ph,advent3Part2:()=>n.tb,advent4Part1:()=>n.WO,advent4Part2:()=>n.U$,advent5Part1:()=>n.P6,advent5Part2:()=>n.mx,advent6Part1:()=>n.zy,advent6Part2:()=>n.m6,advent6Part2Bits:()=>n.ZI,advent7Part1:()=>n.XO,advent7Part2:()=>n._P,advent8Part1:()=>n.uR,advent8Part2:()=>n.SA,advent9Part1:()=>n.Hp,advent9Part2:()=>n.Lk,arrayMapFilterTest:()=>n.K5,arrayReduceTest:()=>n.Zv,arrayTransferDoubleTest:()=>n.or,arrayTransferSingleTest:()=>n.ZD,primesTest:()=>n.s,stringTransferSingleTest:()=>n.NE});var n=r(199);return n=await Promise.resolve(n),e})()},199:(n,e,r)=>{"use strict";n.exports=(async()=>{r.d(e,{ZD:()=>o,or:()=>v,NE:()=>m,K5:()=>s,s:()=>y,Zv:()=>p,KQ:()=>h,go:()=>S,jO:()=>N,QM:()=>U,Ph:()=>k,tb:()=>A,WO:()=>L,U$:()=>O,P6:()=>Q,mx:()=>R,zy:()=>Z,m6:()=>B,ZI:()=>C,XO:()=>E,_P:()=>D,uR:()=>M,SA:()=>W,Hp:()=>I,Lk:()=>z,gG:()=>K,Wn:()=>X,e3:()=>$,NQ:()=>j,qR:()=>G,Mk:()=>H,R5:()=>J,ih:()=>V,Z0:()=>Y,iy:()=>nn,Bx:()=>en,rL:()=>rn,Ez:()=>tn,_D:()=>an,mb:()=>_n,Xx:()=>ln,yN:()=>dn,$N:()=>on,fS:()=>cn,qL:()=>un,fJ:()=>vn,LP:()=>bn,WC:()=>gn,BS:()=>wn,SU:()=>fn,NU:()=>Pn,F_:()=>mn,Od:()=>sn,n6:()=>yn,CQ:()=>pn});var t=r(658);n=r.hmd(n),t=await Promise.resolve(t);let a=null;function _(){return null!==a&&a.buffer===t.memory.buffer||(a=new Float64Array(t.memory.buffer)),a}let l=0;function d(n,e){const r=e(8*n.length);return _().set(n,r/8),l=n.length,r}function o(n){var e=d(n,t.__wbindgen_malloc),r=l;t.arrayTransferSingleTest(e,r)}let i=null;function c(){return null!==i&&i.buffer===t.memory.buffer||(i=new Int32Array(t.memory.buffer)),i}function u(n,e){return _().subarray(n/8,n/8+e)}function v(n){try{const i=t.__wbindgen_export_1.value-16;t.__wbindgen_export_1.value=i;var e=d(n,t.__wbindgen_malloc),r=l;t.arrayTransferDoubleTest(i,e,r);var a=c()[i/4+0],_=c()[i/4+1],o=u(a,_).slice();return t.__wbindgen_free(a,8*_),o}finally{t.__wbindgen_export_1.value+=16}}let b=null;function g(){return null!==b&&b.buffer===t.memory.buffer||(b=new Uint8Array(t.memory.buffer)),b}let w=new("undefined"==typeof TextEncoder?(0,n.require)("util").TextEncoder:TextEncoder)("utf-8");const f="function"==typeof w.encodeInto?function(n,e){return w.encodeInto(n,e)}:function(n,e){const r=w.encode(n);return e.set(r),{read:n.length,written:r.length}};function P(n,e,r){if(void 0===r){const r=w.encode(n),t=e(r.length);return g().subarray(t,t+r.length).set(r),l=r.length,t}let t=n.length,a=e(t);const _=g();let d=0;for(;d<t;d++){const e=n.charCodeAt(d);if(e>127)break;_[a+d]=e}if(d!==t){0!==d&&(n=n.slice(d)),a=r(a,t,t=d+3*n.length);const e=g().subarray(a+d,a+t);d+=f(n,e).written}return l=d,a}function m(n){var e=P(n,t.__wbindgen_malloc,t.__wbindgen_realloc),r=l;t.stringTransferSingleTest(e,r)}function s(n){try{const i=t.__wbindgen_export_1.value-16;t.__wbindgen_export_1.value=i;var e=d(n,t.__wbindgen_malloc),r=l;t.arrayMapFilterTest(i,e,r);var a=c()[i/4+0],_=c()[i/4+1],o=u(a,_).slice();return t.__wbindgen_free(a,8*_),o}finally{t.__wbindgen_export_1.value+=16}}function y(n){return t.primesTest(n)>>>0}function p(n){var e=d(n,t.__wbindgen_malloc),r=l;return t.arrayReduceTest(e,r)}let x=null;function T(n,e){const r=e(4*n.length);return(null!==x&&x.buffer===t.memory.buffer||(x=new Uint32Array(t.memory.buffer)),x).set(n,r/4),l=n.length,r}function h(n){var e=T(n,t.__wbindgen_malloc),r=l;return t.advent1Part1(e,r)>>>0}function S(n){var e=T(n,t.__wbindgen_malloc),r=l;return t.advent1Part2(e,r)>>>0}function N(n){var e=P(n,t.__wbindgen_malloc,t.__wbindgen_realloc),r=l;return t.advent2Part1(e,r)>>>0}function U(n){var e=P(n,t.__wbindgen_malloc,t.__wbindgen_realloc),r=l;return t.advent2Part2(e,r)>>>0}function k(n){var e=P(n,t.__wbindgen_malloc,t.__wbindgen_realloc),r=l;return t.advent3Part1(e,r)>>>0}function A(n){var e=P(n,t.__wbindgen_malloc,t.__wbindgen_realloc),r=l;return t.advent3Part2(e,r)>>>0}function L(n){var e=P(n,t.__wbindgen_malloc,t.__wbindgen_realloc),r=l;return t.advent4Part1(e,r)>>>0}function O(n){var e=P(n,t.__wbindgen_malloc,t.__wbindgen_realloc),r=l;return t.advent4Part2(e,r)>>>0}function Q(n){var e=P(n,t.__wbindgen_malloc,t.__wbindgen_realloc),r=l;return t.advent5Part1(e,r)}function R(n){var e=P(n,t.__wbindgen_malloc,t.__wbindgen_realloc),r=l;return t.advent5Part2(e,r)}function Z(n){var e=P(n,t.__wbindgen_malloc,t.__wbindgen_realloc),r=l;return t.advent6Part1(e,r)>>>0}function B(n){var e=P(n,t.__wbindgen_malloc,t.__wbindgen_realloc),r=l;return t.advent6Part2(e,r)>>>0}function C(n){var e=P(n,t.__wbindgen_malloc,t.__wbindgen_realloc),r=l;return t.advent6Part2Bits(e,r)}function E(n){var e=P(n,t.__wbindgen_malloc,t.__wbindgen_realloc),r=l;return t.advent7Part1(e,r)>>>0}function D(n){var e=P(n,t.__wbindgen_malloc,t.__wbindgen_realloc),r=l;return t.advent7Part2(e,r)>>>0}function M(n){var e=P(n,t.__wbindgen_malloc,t.__wbindgen_realloc),r=l;return t.advent8Part1(e,r)}function W(n){var e=P(n,t.__wbindgen_malloc,t.__wbindgen_realloc),r=l;return t.advent8Part2(e,r)}const q=new Uint32Array(2),F=new BigUint64Array(q.buffer);function I(n){try{const d=t.__wbindgen_export_1.value-16;t.__wbindgen_export_1.value=d;var e=P(n,t.__wbindgen_malloc,t.__wbindgen_realloc),r=l;t.advent9Part1(d,e,r);var a=c()[d/4+0],_=c()[d/4+1];return q[0]=a,q[1]=_,F[0]}finally{t.__wbindgen_export_1.value+=16}}function z(n){try{const d=t.__wbindgen_export_1.value-16;t.__wbindgen_export_1.value=d;var e=P(n,t.__wbindgen_malloc,t.__wbindgen_realloc),r=l;t.advent9Part2(d,e,r);var a=c()[d/4+0],_=c()[d/4+1];return q[0]=a,q[1]=_,F[0]}finally{t.__wbindgen_export_1.value+=16}}function K(n){var e=P(n,t.__wbindgen_malloc,t.__wbindgen_realloc),r=l;return t.advent10Part1(e,r)>>>0}function X(n){try{const d=t.__wbindgen_export_1.value-16;t.__wbindgen_export_1.value=d;var e=P(n,t.__wbindgen_malloc,t.__wbindgen_realloc),r=l;t.advent10Part2(d,e,r);var a=c()[d/4+0],_=c()[d/4+1];return q[0]=a,q[1]=_,F[0]}finally{t.__wbindgen_export_1.value+=16}}function $(n){var e=P(n,t.__wbindgen_malloc,t.__wbindgen_realloc),r=l;return t.advent11Part1(e,r)>>>0}function j(n){var e=P(n,t.__wbindgen_malloc,t.__wbindgen_realloc),r=l;return t.advent11Part2(e,r)>>>0}function G(n){var e=P(n,t.__wbindgen_malloc,t.__wbindgen_realloc),r=l;return t.advent12Part1(e,r)>>>0}function H(n){var e=P(n,t.__wbindgen_malloc,t.__wbindgen_realloc),r=l;return t.advent12Part2(e,r)>>>0}function J(n){var e=P(n,t.__wbindgen_malloc,t.__wbindgen_realloc),r=l;return t.advent13Part1(e,r)>>>0}function V(n){try{const d=t.__wbindgen_export_1.value-16;t.__wbindgen_export_1.value=d;var e=P(n,t.__wbindgen_malloc,t.__wbindgen_realloc),r=l;t.advent13Part2(d,e,r);var a=c()[d/4+0],_=c()[d/4+1];return q[0]=a,q[1]=_,F[0]}finally{t.__wbindgen_export_1.value+=16}}function Y(n){try{const d=t.__wbindgen_export_1.value-16;t.__wbindgen_export_1.value=d;var e=P(n,t.__wbindgen_malloc,t.__wbindgen_realloc),r=l;t.advent14Part1(d,e,r);var a=c()[d/4+0],_=c()[d/4+1];return q[0]=a,q[1]=_,F[0]}finally{t.__wbindgen_export_1.value+=16}}function nn(n){try{const d=t.__wbindgen_export_1.value-16;t.__wbindgen_export_1.value=d;var e=P(n,t.__wbindgen_malloc,t.__wbindgen_realloc),r=l;t.advent14Part2(d,e,r);var a=c()[d/4+0],_=c()[d/4+1];return q[0]=a,q[1]=_,F[0]}finally{t.__wbindgen_export_1.value+=16}}function en(n){var e=P(n,t.__wbindgen_malloc,t.__wbindgen_realloc),r=l;return t.advent15Part1(e,r)>>>0}function rn(n){var e=P(n,t.__wbindgen_malloc,t.__wbindgen_realloc),r=l;return t.advent15Part2(e,r)>>>0}function tn(n){var e=P(n,t.__wbindgen_malloc,t.__wbindgen_realloc),r=l;return t.advent16Part1(e,r)>>>0}function an(n){var e=P(n,t.__wbindgen_malloc,t.__wbindgen_realloc),r=l;return t.advent16Part2(e,r)>>>0}function _n(n){var e=P(n,t.__wbindgen_malloc,t.__wbindgen_realloc),r=l;return t.advent17Part1(e,r)>>>0}function ln(n){var e=P(n,t.__wbindgen_malloc,t.__wbindgen_realloc),r=l;return t.advent17Part1(e,r)>>>0}function dn(n){var e=P(n,t.__wbindgen_malloc,t.__wbindgen_realloc),r=l;return t.advent17Part1(e,r)>>>0}function on(n){var e=P(n,t.__wbindgen_malloc,t.__wbindgen_realloc),r=l;return t.advent17Part1(e,r)>>>0}function cn(n){var e=P(n,t.__wbindgen_malloc,t.__wbindgen_realloc),r=l;return t.advent17Part1(e,r)>>>0}function un(n){var e=P(n,t.__wbindgen_malloc,t.__wbindgen_realloc),r=l;return t.advent17Part1(e,r)>>>0}function vn(n){var e=P(n,t.__wbindgen_malloc,t.__wbindgen_realloc),r=l;return t.advent17Part1(e,r)>>>0}function bn(n){var e=P(n,t.__wbindgen_malloc,t.__wbindgen_realloc),r=l;return t.advent17Part1(e,r)>>>0}function gn(n){var e=P(n,t.__wbindgen_malloc,t.__wbindgen_realloc),r=l;return t.advent17Part1(e,r)>>>0}function wn(n){var e=P(n,t.__wbindgen_malloc,t.__wbindgen_realloc),r=l;return t.advent17Part1(e,r)>>>0}function fn(n){var e=P(n,t.__wbindgen_malloc,t.__wbindgen_realloc),r=l;return t.advent17Part1(e,r)>>>0}function Pn(n){var e=P(n,t.__wbindgen_malloc,t.__wbindgen_realloc),r=l;return t.advent17Part1(e,r)>>>0}function mn(n){var e=P(n,t.__wbindgen_malloc,t.__wbindgen_realloc),r=l;return t.advent17Part1(e,r)>>>0}function sn(n){var e=P(n,t.__wbindgen_malloc,t.__wbindgen_realloc),r=l;return t.advent17Part1(e,r)>>>0}function yn(n){var e=P(n,t.__wbindgen_malloc,t.__wbindgen_realloc),r=l;return t.advent17Part1(e,r)>>>0}function pn(n){var e=P(n,t.__wbindgen_malloc,t.__wbindgen_realloc),r=l;return t.advent17Part1(e,r)>>>0}return e})()},658:(n,e,r)=>{"use strict";n.exports=r.v(e,n.id,"c967c7597b63ec173885")}}]);