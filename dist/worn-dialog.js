import { fade as e, fly as t } from "svelte/transition";
import { prefersReducedMotion as n } from "svelte/motion";
//#region node_modules/svelte/src/internal/disclose-version.js
typeof window < "u" && ((window.__svelte ??= {}).v ??= /* @__PURE__ */ new Set()).add("5");
//#endregion
//#region node_modules/svelte/src/constants.js
var r = {}, i = Symbol("uninitialized"), a = "http://www.w3.org/1999/xhtml", o = Array.isArray, s = Array.prototype.indexOf, c = Array.prototype.includes;
Array.from;
var l = Object.defineProperty, u = Object.getOwnPropertyDescriptor, d = Object.getOwnPropertyDescriptors, f = Object.prototype, p = Array.prototype, m = Object.getPrototypeOf;
function h(e) {
	return typeof e == "function";
}
var g = () => {};
function _(e) {
	for (var t = 0; t < e.length; t++) e[t]();
}
function v() {
	var e, t;
	return {
		promise: new Promise((n, r) => {
			e = n, t = r;
		}),
		resolve: e,
		reject: t
	};
}
var y = 1024, b = 2048, x = 4096, ee = 8192, te = 16384, ne = 32768, re = 1 << 25, ie = 65536, ae = 1 << 19, oe = 1 << 20, se = 65536, ce = 1 << 21, le = 1 << 22, ue = 1 << 23, de = Symbol("$state"), fe = Symbol("legacy props"), pe = Symbol(""), me = Symbol("attributes"), he = Symbol("class"), ge = Symbol("text"), _e = new class extends Error {
	name = "StaleReactionError";
	message = "The reaction that called `getAbortSignal()` was re-run or destroyed";
}(), ve = !!globalThis.document?.contentType && /* @__PURE__ */ globalThis.document.contentType.includes("xml");
//#endregion
//#region node_modules/svelte/src/internal/client/errors.js
function ye() {
	throw Error("https://svelte.dev/e/async_derived_orphan");
}
function be(e) {
	throw Error("https://svelte.dev/e/effect_in_teardown");
}
function xe() {
	throw Error("https://svelte.dev/e/effect_in_unowned_derived");
}
function Se(e) {
	throw Error("https://svelte.dev/e/effect_orphan");
}
function Ce() {
	throw Error("https://svelte.dev/e/effect_update_depth_exceeded");
}
function we(e) {
	throw Error("https://svelte.dev/e/props_invalid_value");
}
function Te() {
	throw Error("https://svelte.dev/e/state_descriptors_fixed");
}
function Ee() {
	throw Error("https://svelte.dev/e/state_prototype_fixed");
}
function De() {
	throw Error("https://svelte.dev/e/state_unsafe_mutation");
}
function Oe() {
	console.warn("https://svelte.dev/e/derived_inert");
}
function ke(e) {
	console.warn("https://svelte.dev/e/hydration_mismatch");
}
//#endregion
//#region node_modules/svelte/src/internal/client/dom/hydration.js
var S = !1;
function Ae(e) {
	S = e;
}
var C;
function w(e) {
	if (e === null) throw ke(), r;
	return C = e;
}
function je() {
	return w(/* @__PURE__ */ L(C));
}
function Me(e) {
	if (S) {
		if (/* @__PURE__ */ L(C) !== null) throw ke(), r;
		C = e;
	}
}
function Ne(e = !0) {
	for (var t = 0, n = C;;) {
		if (n.nodeType === 8) {
			var r = n.data;
			if (r === "]") {
				if (t === 0) return n;
				--t;
			} else (r === "[" || r === "[!" || r[0] === "[" && !isNaN(Number(r.slice(1)))) && (t += 1);
		}
		var i = /* @__PURE__ */ L(n);
		e && n.remove(), n = i;
	}
}
function Pe(e) {
	if (!e || e.nodeType !== 8) throw ke(), r;
	return e.data;
}
//#endregion
//#region node_modules/svelte/src/internal/client/reactivity/equality.js
function Fe(e) {
	return e === this.v;
}
function Ie(e, t) {
	return e == e ? e !== t || typeof e == "object" && !!e || typeof e == "function" : t == t;
}
function Le(e) {
	return !Ie(e, this.v);
}
//#endregion
//#region node_modules/svelte/src/internal/client/context.js
var T = null;
function Re(e) {
	T = e;
}
function ze(e, t = !1, n) {
	T = {
		p: T,
		i: !1,
		c: null,
		e: null,
		s: e,
		x: null,
		r: W,
		l: null
	};
}
function Be(e) {
	var t = T, n = t.e;
	if (n !== null) {
		t.e = null;
		for (var r of n) Yt(r);
	}
	return e !== void 0 && (t.x = e), t.i = !0, T = t.p, e ?? {};
}
function Ve() {
	return !0;
}
//#endregion
//#region node_modules/svelte/src/internal/client/dom/task.js
var E = [];
function He() {
	var e = E;
	E = [], _(e);
}
function Ue(e) {
	if (E.length === 0 && !pt) {
		var t = E;
		queueMicrotask(() => {
			t === E && He();
		});
	}
	E.push(e);
}
function We(e) {
	var t = W;
	if (t === null) return V.f |= ue, e;
	if (!(t.f & 32768) && !(t.f & 4)) throw e;
	Ge(e, t);
}
function Ge(e, t) {
	if (!(t !== null && t.f & 16384)) {
		for (; t !== null;) {
			if (t.f & 128) {
				if (!(t.f & 32768)) throw e;
				try {
					t.b.error(e);
					return;
				} catch (t) {
					e = t;
				}
			}
			t = t.parent;
		}
		throw e;
	}
}
//#endregion
//#region node_modules/svelte/src/internal/client/reactivity/status.js
var Ke = ~(b | x | y);
function D(e, t) {
	e.f = e.f & Ke | t;
}
function qe(e) {
	e.f & 512 || e.deps === null ? D(e, y) : D(e, x);
}
//#endregion
//#region node_modules/svelte/src/internal/client/reactivity/utils.js
function Je(e) {
	if (e !== null) for (let t of e) !(t.f & 2) || !(t.f & 65536) || (t.f ^= se, Je(t.deps));
}
function Ye(e, t, n) {
	e.f & 2048 ? t.add(e) : e.f & 4096 && n.add(e), Je(e.deps), D(e, y);
}
//#endregion
//#region node_modules/svelte/src/internal/client/reactivity/store.js
var Xe = !1;
function Ze(e) {
	var t = Xe;
	try {
		return Xe = !1, [e(), Xe];
	} finally {
		Xe = t;
	}
}
//#endregion
//#region node_modules/svelte/src/internal/client/dom/elements/bindings/shared.js
function O(e) {
	var t = V, n = W;
	U(null), G(null);
	try {
		return e();
	} finally {
		U(t), G(n);
	}
}
ie | ae;
//#endregion
//#region node_modules/svelte/src/internal/client/reactivity/async.js
function Qe(e, t, n, r) {
	let i = Ve() ? nt : at;
	var a = e.filter((e) => !e.settled), o = t.map(i);
	if (n.length === 0 && a.length === 0) {
		r(o);
		return;
	}
	var s = W, c = $e(), l = a.length === 1 ? a[0].promise : a.length > 1 ? Promise.all(a.map((e) => e.promise)) : null;
	function u(e) {
		if (!(s.f & 16384)) {
			c();
			try {
				r([...o, ...e]);
			} catch (e) {
				Ge(e, s);
			}
			et();
		}
	}
	var d = tt();
	if (n.length === 0) {
		l.then(() => u([])).finally(d);
		return;
	}
	function f() {
		Promise.all(n.map((e) => /* @__PURE__ */ it(e))).then(u).catch((e) => Ge(e, s)).finally(d);
	}
	l ? l.then(() => {
		c(), f(), et();
	}) : f();
}
function $e() {
	var e = W, t = V, n = T, r = A;
	return function(i = !0) {
		G(e), U(t), Re(n), i && !(e.f & 16384) && (r?.activate(), r?.apply());
	};
}
function et(e = !0) {
	G(null), U(null), Re(null), e && A?.deactivate();
}
function tt() {
	var e = W, t = e.b, n = A, r = !!t?.is_rendered();
	return t?.update_pending_count(1, n), n.increment(r, e), () => {
		t?.update_pending_count(-1, n), n.decrement(r, e);
	};
}
/*#__NO_SIDE_EFFECTS__*/
function nt(e) {
	var t = 2 | b;
	return W !== null && (W.f |= ae), {
		ctx: T,
		deps: null,
		effects: null,
		equals: Fe,
		f: t,
		fn: e,
		reactions: null,
		rv: 0,
		v: i,
		wv: 0,
		parent: W,
		ac: null
	};
}
var rt = Symbol("obsolete");
/*#__NO_SIDE_EFFECTS__*/
function it(e, t, n) {
	let r = W;
	r === null && ye();
	var a = void 0, o = Dt(i), s = !V, c = /* @__PURE__ */ new Set();
	return Zt(() => {
		var t = W, n = v();
		a = n.promise;
		try {
			Promise.resolve(e()).then(n.resolve, (e) => {
				e !== _e && n.reject(e);
			}).finally(et);
		} catch (e) {
			n.reject(e), et();
		}
		var i = A;
		if (s) {
			if (t.f & 32768) var l = tt();
			if (r.b?.is_rendered()) i.async_deriveds.get(t)?.reject(rt);
			else for (let e of c.values()) e.reject(rt);
			c.add(n), i.async_deriveds.set(t, n);
		}
		let u = (e, t = void 0) => {
			l?.(), c.delete(n), t !== rt && (i.activate(), t ? (o.f |= ue, Ot(o, t)) : (o.f & 8388608 && (o.f ^= ue), Ot(o, e)), i.deactivate());
		};
		n.promise.then(u, (e) => u(null, e || "unknown"));
	}), qt(() => {
		for (let e of c) e.reject(rt);
	}), new Promise((e) => {
		function t(n) {
			function r() {
				n === a ? e(o) : t(a);
			}
			n.then(r, r);
		}
		t(a);
	});
}
/*#__NO_SIDE_EFFECTS__*/
function at(e) {
	let t = /* @__PURE__ */ nt(e);
	return t.equals = Le, t;
}
function ot(e) {
	var t = e.effects;
	if (t !== null) {
		e.effects = null;
		for (var n = 0; n < t.length; n += 1) z(t[n]);
	}
}
function st(e) {
	var t, n = W, r = e.parent;
	if (!B && r !== null && e.v !== i && r.f & 24576) return Oe(), e.v;
	G(r);
	try {
		e.f &= ~se, ot(e), t = Cn(e);
	} finally {
		G(n);
	}
	return t;
}
function ct(e) {
	var t = st(e);
	if (!e.equals(t) && (e.wv = bn(), (!A?.is_fork || e.deps === null) && (A === null ? e.v = t : (A.capture(e, t, !0), dt?.capture(e, t, !0)), e.deps === null))) {
		D(e, y);
		return;
	}
	B || (j === null ? qe(e) : (Kt() || A?.is_fork) && j.set(e, t));
}
function lt(e) {
	if (e.effects !== null) for (let t of e.effects) (t.teardown || t.ac) && (t.teardown?.(), t.ac !== null && O(() => {
		t.ac.abort(_e), t.ac = null;
	}), t.fn !== null && (t.teardown = g), Tn(t, 0), rn(t));
}
function ut(e) {
	if (e.effects !== null) for (let t of e.effects) t.teardown && t.fn !== null && En(t);
}
//#endregion
//#region node_modules/svelte/src/internal/client/reactivity/batch.js
var k = null, A = null, dt = null, j = null, ft = null, pt = !1, mt = !1, ht = null, gt = null, _t = 0, vt = 1, yt = class e {
	id = vt++;
	#e = !1;
	linked = !0;
	#t = null;
	#n = null;
	async_deriveds = /* @__PURE__ */ new Map();
	current = /* @__PURE__ */ new Map();
	previous = /* @__PURE__ */ new Map();
	#r = /* @__PURE__ */ new Set();
	#i = /* @__PURE__ */ new Set();
	#a = 0;
	#o = /* @__PURE__ */ new Map();
	#s = null;
	#c = [];
	#l = [];
	#u = /* @__PURE__ */ new Set();
	#d = /* @__PURE__ */ new Set();
	#f = /* @__PURE__ */ new Map();
	#p = /* @__PURE__ */ new Set();
	is_fork = !1;
	#m = !1;
	constructor() {
		k === null ? k = this : (k.#n = this, this.#t = k), k = this;
	}
	#h() {
		if (this.is_fork) return !0;
		for (let n of this.#o.keys()) {
			for (var e = n, t = !1; e.parent !== null;) {
				if (this.#f.has(e)) {
					t = !0;
					break;
				}
				e = e.parent;
			}
			if (!t) return !0;
		}
		return !1;
	}
	skip_effect(e) {
		this.#f.has(e) || this.#f.set(e, {
			d: [],
			m: []
		}), this.#p.delete(e);
	}
	unskip_effect(e, t = (e) => this.schedule(e)) {
		var n = this.#f.get(e);
		if (n) {
			this.#f.delete(e);
			for (var r of n.d) D(r, b), t(r);
			for (r of n.m) D(r, x), t(r);
		}
		this.#p.add(e);
	}
	#g() {
		this.#e = !0, _t++ > 1e3 && (this.#x(), bt());
		for (let e of this.#u) this.#d.delete(e), D(e, b), this.schedule(e);
		for (let e of this.#d) D(e, x), this.schedule(e);
		let t = this.#c;
		this.#c = [], this.apply();
		var n = ht = [], r = [], i = gt = [];
		for (let e of t) try {
			this.#_(e, n, r);
		} catch (t) {
			throw wt(e), this.#h() || this.discard(), t;
		}
		if (A = null, i.length > 0) {
			var a = e.ensure();
			for (let e of i) a.schedule(e);
		}
		if (ht = null, gt = null, this.#h()) {
			this.#b(r), this.#b(n);
			for (let [e, t] of this.#f) Ct(e, t);
			i.length > 0 && A.#g();
			return;
		}
		let o = this.#v();
		if (o) {
			this.#b(r), this.#b(n), o.#y(this);
			return;
		}
		this.#u.clear(), this.#d.clear();
		for (let e of this.#r) e(this);
		this.#r.clear(), dt = this, xt(r), xt(n), dt = null, this.#s?.resolve();
		var s = A;
		if (this.#a === 0 && (this.#c.length === 0 || s !== null) && this.#x(), this.#c.length > 0) {
			if (s !== null) {
				let e = s;
				e.#c.push(...this.#c.filter((t) => !e.#c.includes(t)));
			} else s = this;
		}
		s !== null && s.#g();
	}
	#_(e, t, n) {
		e.f ^= y;
		for (var r = e.first; r !== null;) {
			var i = r.f, a = !!(i & 96);
			if (!(a && i & 1024 || i & 8192 || this.#f.has(r)) && r.fn !== null) {
				a ? r.f ^= y : i & 4 ? t.push(r) : xn(r) && (i & 16 && this.#d.add(r), En(r));
				var o = r.first;
				if (o !== null) {
					r = o;
					continue;
				}
			}
			for (; r !== null;) {
				var s = r.next;
				if (s !== null) {
					r = s;
					break;
				}
				r = r.parent;
			}
		}
	}
	#v() {
		for (var e = this.#t; e !== null;) {
			if (!e.is_fork) {
				for (let [t, [, n]] of this.current) if (e.current.has(t) && !n) return e;
			}
			e = e.#t;
		}
		return null;
	}
	#y(e) {
		for (let [t, n] of e.current) !this.previous.has(t) && e.previous.has(t) && this.previous.set(t, e.previous.get(t)), this.current.set(t, n);
		for (let [t, n] of e.async_deriveds) {
			let e = this.async_deriveds.get(t);
			e && n.promise.then(e.resolve).catch(e.reject);
		}
		e.async_deriveds.clear(), this.transfer_effects(e.#u, e.#d);
		let t = (e) => {
			var n = e.reactions;
			if (n !== null && !(e.f & 2 && !(e.f & 6144))) for (let e of n) {
				var r = e.f;
				if (r & 2) t(e);
				else {
					var i = e;
					r & 4194320 && !this.async_deriveds.has(i) && (this.#d.delete(i), D(i, b), this.schedule(i));
				}
			}
		};
		for (let e of this.current.keys()) t(e);
		this.oncommit(() => e.discard()), e.#x(), A = this, this.#g();
	}
	#b(e) {
		for (var t = 0; t < e.length; t += 1) Ye(e[t], this.#u, this.#d);
	}
	capture(e, t, n = !1) {
		e.v !== i && !this.previous.has(e) && this.previous.set(e, e.v), e.f & 8388608 || (this.current.set(e, [t, n]), j?.set(e, t)), this.is_fork || (e.v = t);
	}
	activate() {
		A = this;
	}
	deactivate() {
		A = null, j = null;
	}
	flush() {
		try {
			mt = !0, A = this, this.#g();
		} finally {
			_t = 0, ft = null, ht = null, gt = null, mt = !1, A = null, j = null, N.clear();
		}
	}
	discard() {
		for (let e of this.#i) e(this);
		this.#i.clear();
		for (let e of this.async_deriveds.values()) e.reject(rt);
		this.#x(), this.#s?.resolve();
	}
	register_created_effect(e) {
		this.#l.push(e);
	}
	increment(e, t) {
		if (this.#a += 1, e) {
			let e = this.#o.get(t) ?? 0;
			this.#o.set(t, e + 1);
		}
	}
	decrement(e, t) {
		if (--this.#a, e) {
			let e = this.#o.get(t) ?? 0;
			e === 1 ? this.#o.delete(t) : this.#o.set(t, e - 1);
		}
		this.#m || (this.#m = !0, Ue(() => {
			this.#m = !1, this.linked && this.flush();
		}));
	}
	transfer_effects(e, t) {
		for (let t of e) this.#u.add(t);
		for (let e of t) this.#d.add(e);
		e.clear(), t.clear();
	}
	oncommit(e) {
		this.#r.add(e);
	}
	ondiscard(e) {
		this.#i.add(e);
	}
	settled() {
		return (this.#s ??= v()).promise;
	}
	static ensure() {
		if (A === null) {
			let t = A = new e();
			!mt && Ue(() => {
				t.#e || t.flush();
			});
		}
		return A;
	}
	apply() {
		j = null;
	}
	schedule(e) {
		if (ft = e, e.b?.is_pending && e.f & 16777228 && !(e.f & 32768)) {
			e.b.defer_effect(e);
			return;
		}
		for (var t = e; t.parent !== null;) {
			t = t.parent;
			var n = t.f;
			if (ht !== null && t === W && (V === null || !(V.f & 2))) return;
			if (n & 96) {
				if (!(n & 1024)) return;
				t.f ^= y;
			}
		}
		this.#c.push(t);
	}
	#x() {
		if (this.linked) {
			var e = this.#t, t = this.#n;
			e === null || (e.#n = t), t === null ? k = e : t.#t = e, this.linked = !1;
		}
	}
};
function bt() {
	try {
		Ce();
	} catch (e) {
		Ge(e, ft);
	}
}
var M = null;
function xt(e) {
	var t = e.length;
	if (t !== 0) {
		for (var n = 0; n < t;) {
			var r = e[n++];
			if (!(r.f & 24576) && xn(r) && (M = /* @__PURE__ */ new Set(), En(r), r.deps === null && r.first === null && r.nodes === null && r.teardown === null && r.ac === null && sn(r), M?.size > 0)) {
				N.clear();
				for (let e of M) {
					if (e.f & 24576) continue;
					let t = [e], n = e.parent;
					for (; n !== null;) M.has(n) && (M.delete(n), t.push(n)), n = n.parent;
					for (let e = t.length - 1; e >= 0; e--) {
						let n = t[e];
						n.f & 24576 || En(n);
					}
				}
				M.clear();
			}
		}
		M = null;
	}
}
function St(e) {
	A.schedule(e);
}
function Ct(e, t) {
	if (!(e.f & 32 && e.f & 1024)) {
		e.f & 2048 ? t.d.push(e) : e.f & 4096 && t.m.push(e), D(e, y);
		for (var n = e.first; n !== null;) Ct(n, t), n = n.next;
	}
}
function wt(e) {
	D(e, y);
	for (var t = e.first; t !== null;) wt(t), t = t.next;
}
//#endregion
//#region node_modules/svelte/src/internal/client/reactivity/sources.js
var Tt = /* @__PURE__ */ new Set(), N = /* @__PURE__ */ new Map(), Et = !1;
function Dt(e, t) {
	return {
		f: 0,
		v: e,
		reactions: null,
		equals: Fe,
		rv: 0,
		wv: 0
	};
}
/*#__NO_SIDE_EFFECTS__*/
function P(e, t) {
	let n = Dt(e, t);
	return gn(n), n;
}
function F(e, t, n = !1) {
	return V !== null && (!H || V.f & 131072) && Ve() && V.f & 4325394 && (K === null || !K.has(e)) && De(), Ot(e, n ? Mt(t) : t, gt);
}
function Ot(e, t, n = null) {
	if (!e.equals(t)) {
		N.set(e, B ? t : e.v);
		var r = yt.ensure();
		if (r.capture(e, t), e.f & 2) {
			let t = e;
			e.f & 2048 && st(t), j === null && qe(t);
		}
		e.wv = bn(), jt(e, b, n), Ve() && W !== null && W.f & 1024 && !(W.f & 96) && (Y === null ? _n([e]) : Y.push(e)), !r.is_fork && Tt.size > 0 && !Et && kt();
	}
	return t;
}
function kt() {
	Et = !1;
	for (let e of Tt) {
		e.f & 1024 && D(e, x);
		let t;
		try {
			t = xn(e);
		} catch {
			t = !0;
		}
		t && En(e);
	}
	Tt.clear();
}
function At(e) {
	F(e, e.v + 1);
}
function jt(e, t, n) {
	var r = e.reactions;
	if (r !== null) for (var i = Ve(), a = r.length, o = 0; o < a; o++) {
		var s = r[o], c = s.f;
		if (!(!i && s === W)) {
			var l = (c & b) === 0;
			if (l && D(s, t), c & 131072) Tt.add(s);
			else if (c & 2) {
				var u = s;
				j?.delete(u), c & 65536 || (c & 512 && (W === null || !(W.f & 2097152)) && (s.f |= se), jt(u, x, n));
			} else if (l) {
				var d = s;
				c & 16 && M !== null && M.add(d), n === null ? St(d) : n.push(d);
			}
		}
	}
}
function Mt(e) {
	if (typeof e != "object" || !e || de in e) return e;
	let t = m(e);
	if (t !== f && t !== p) return e;
	var n = /* @__PURE__ */ new Map(), r = o(e), a = /* @__PURE__ */ P(0), s = null, c = Z, l = (e) => {
		if (Z === c) return e();
		var t = V, n = Z;
		U(null), yn(c);
		var r = e();
		return U(t), yn(n), r;
	};
	return r && n.set("length", /* @__PURE__ */ P(e.length, s)), new Proxy(e, {
		defineProperty(e, t, r) {
			(!("value" in r) || r.configurable === !1 || r.enumerable === !1 || r.writable === !1) && Te();
			var i = n.get(t);
			return i === void 0 ? l(() => {
				var e = /* @__PURE__ */ P(r.value, s);
				return n.set(t, e), e;
			}) : F(i, r.value, !0), !0;
		},
		deleteProperty(e, t) {
			var r = n.get(t);
			if (r === void 0) {
				if (t in e) {
					let e = l(() => /* @__PURE__ */ P(i, s));
					n.set(t, e), At(a);
				}
			} else F(r, i), At(a);
			return !0;
		},
		get(t, r, a) {
			if (r === de) return e;
			var o = n.get(r), c = r in t;
			if (o === void 0 && (!c || u(t, r)?.writable) && (o = l(() => /* @__PURE__ */ P(Mt(c ? t[r] : i), s)), n.set(r, o)), o !== void 0) {
				var d = Q(o);
				return d === i ? void 0 : d;
			}
			return Reflect.get(t, r, a);
		},
		getOwnPropertyDescriptor(e, t) {
			var r = Reflect.getOwnPropertyDescriptor(e, t);
			if (r && "value" in r) {
				var a = n.get(t);
				a && (r.value = Q(a));
			} else if (r === void 0) {
				var o = n.get(t), s = o?.v;
				if (o !== void 0 && s !== i) return {
					enumerable: !0,
					configurable: !0,
					value: s,
					writable: !0
				};
			}
			return r;
		},
		has(e, t) {
			if (t === de) return !0;
			var r = n.get(t), a = r !== void 0 && r.v !== i || Reflect.has(e, t);
			return (r !== void 0 || W !== null && (!a || u(e, t)?.writable)) && (r === void 0 && (r = l(() => /* @__PURE__ */ P(a ? Mt(e[t]) : i, s)), n.set(t, r)), Q(r) === i) ? !1 : a;
		},
		set(e, t, o, c) {
			var d = n.get(t), f = t in e;
			if (r && t === "length") for (var p = o; p < d.v; p += 1) {
				var m = n.get(p + "");
				m === void 0 ? p in e && (m = l(() => /* @__PURE__ */ P(i, s)), n.set(p + "", m)) : F(m, i);
			}
			if (d === void 0) (!f || u(e, t)?.writable) && (d = l(() => /* @__PURE__ */ P(void 0, s)), F(d, Mt(o)), n.set(t, d));
			else {
				f = d.v !== i;
				var h = l(() => Mt(o));
				F(d, h);
			}
			var g = Reflect.getOwnPropertyDescriptor(e, t);
			if (g?.set && g.set.call(c, o), !f) {
				if (r && typeof t == "string") {
					var _ = n.get("length"), v = Number(t);
					Number.isInteger(v) && v >= _.v && F(_, v + 1);
				}
				At(a);
			}
			return !0;
		},
		ownKeys(e) {
			Q(a);
			var t = Reflect.ownKeys(e).filter((e) => {
				var t = n.get(e);
				return t === void 0 || t.v !== i;
			});
			for (var [r, o] of n) o.v !== i && !(r in e) && t.push(r);
			return t;
		},
		setPrototypeOf() {
			Ee();
		}
	});
}
var Nt, Pt, Ft, It;
function I(e = "") {
	return document.createTextNode(e);
}
/*@__NO_SIDE_EFFECTS__*/
function Lt(e) {
	return Ft.call(e);
}
/*@__NO_SIDE_EFFECTS__*/
function L(e) {
	return It.call(e);
}
function Rt(e, t) {
	if (!S) return /* @__PURE__ */ Lt(e);
	var n = /* @__PURE__ */ Lt(C);
	if (n === null) n = C.appendChild(I());
	else if (t && n.nodeType !== 3) {
		var r = I();
		return n?.before(r), w(r), r;
	}
	return t && Ut(n), w(n), n;
}
function zt(e, t = !1) {
	if (!S) {
		var n = /* @__PURE__ */ Lt(e);
		return n instanceof Comment && n.data === "" ? /* @__PURE__ */ L(n) : n;
	}
	if (t) {
		if (C?.nodeType !== 3) {
			var r = I();
			return C?.before(r), w(r), r;
		}
		Ut(C);
	}
	return C;
}
function Bt(e, t = 1, n = !1) {
	let r = S ? C : e;
	for (var i; t--;) i = r, r = /* @__PURE__ */ L(r);
	if (!S) return r;
	if (n) {
		if (r?.nodeType !== 3) {
			var a = I();
			return r === null ? i?.after(a) : r.before(a), w(a), a;
		}
		Ut(r);
	}
	return w(r), r;
}
function Vt() {
	return !1;
}
function Ht(e, t, n) {
	return t == null || t === "http://www.w3.org/1999/xhtml" ? n ? document.createElement(e, { is: n }) : document.createElement(e) : n ? document.createElementNS(t, e, { is: n }) : document.createElementNS(t, e);
}
function Ut(e) {
	if (e.nodeValue.length < 65536) return;
	let t = e.nextSibling;
	for (; t !== null && t.nodeType === 3;) t.remove(), e.nodeValue += t.nodeValue, t = e.nextSibling;
}
//#endregion
//#region node_modules/svelte/src/internal/client/reactivity/effects.js
function Wt(e) {
	W === null && (V === null && Se(e), xe()), B && be(e);
}
function Gt(e, t) {
	var n = t.last;
	n === null ? t.last = t.first = e : (n.next = e, e.prev = n, t.last = e);
}
function R(e, t) {
	var n = W;
	n !== null && n.f & 8192 && (e |= ee);
	var r = {
		ctx: T,
		deps: null,
		nodes: null,
		f: e | b | 512,
		first: null,
		fn: t,
		last: null,
		next: null,
		parent: n,
		b: n && n.b,
		prev: null,
		teardown: null,
		wv: 0,
		ac: null
	};
	A?.register_created_effect(r);
	var i = r;
	if (e & 4) ht === null ? yt.ensure().schedule(r) : ht.push(r);
	else if (t !== null) {
		try {
			En(r);
		} catch (e) {
			throw z(r), e;
		}
		i.deps === null && i.teardown === null && i.nodes === null && i.first === i.last && !(i.f & 524288) && (i = i.first, e & 16 && e & 65536 && i !== null && (i.f |= ie));
	}
	if (i !== null && (i.parent = n, n !== null && Gt(i, n), V !== null && V.f & 2 && !(e & 64))) {
		var a = V;
		(a.effects ??= []).push(i);
	}
	return r;
}
function Kt() {
	return V !== null && !H;
}
function qt(e) {
	let t = R(8, null);
	return D(t, y), t.teardown = e, t;
}
function Jt(e) {
	Wt("$effect");
	var t = W.f;
	if (!V && t & 32 && T !== null && !T.i) {
		var n = T;
		(n.e ??= []).push(e);
	} else return Yt(e);
}
function Yt(e) {
	return R(4 | oe, e);
}
function Xt(e) {
	return R(4, e);
}
function Zt(e) {
	return R(le | ae, e);
}
function Qt(e, t = 0) {
	return R(8 | t, e);
}
function $t(e, t = [], n = [], r = []) {
	Qe(r, t, n, (t) => {
		R(8, () => {
			e(...t.map(Q));
		});
	});
}
function en(e, t = 0) {
	return R(16 | t, e);
}
function tn(e) {
	return R(32 | ae, e);
}
function nn(e) {
	var t = e.teardown;
	if (t !== null) {
		let e = B, n = V;
		hn(!0), U(null);
		try {
			t.call(null);
		} finally {
			hn(e), U(n);
		}
	}
}
function rn(e, t = !1) {
	var n = e.first;
	for (e.first = e.last = null; n !== null;) {
		let e = n.ac;
		e !== null && O(() => {
			e.abort(_e);
		});
		var r = n.next;
		n.f & 64 ? n.parent = null : z(n, t), n = r;
	}
}
function an(e) {
	for (var t = e.first; t !== null;) {
		var n = t.next;
		t.f & 32 || z(t), t = n;
	}
}
function z(e, t = !0) {
	var n = !1;
	(t || e.f & 262144) && e.nodes !== null && e.nodes.end !== null && (on(e.nodes.start, e.nodes.end), n = !0), e.f |= re, rn(e, t && !n), Tn(e, 0);
	var r = e.nodes && e.nodes.t;
	if (r !== null) for (let e of r) e.stop();
	nn(e), e.f ^= re, e.f |= te;
	var i = e.parent;
	i !== null && i.first !== null && sn(e), e.next = e.prev = e.teardown = e.ctx = e.deps = e.fn = e.nodes = e.ac = e.b = null;
}
function on(e, t) {
	for (; e !== null;) {
		var n = e === t ? null : /* @__PURE__ */ L(e);
		e.remove(), e = n;
	}
}
function sn(e) {
	var t = e.parent, n = e.prev, r = e.next;
	n !== null && (n.next = r), r !== null && (r.prev = n), t !== null && (t.first === e && (t.first = r), t.last === e && (t.last = n));
}
function cn(e, t, n = !0) {
	var r = [];
	ln(e, r, !0);
	var i = () => {
		n && z(e), t && t();
	}, a = r.length;
	if (a > 0) {
		var o = () => --a || i();
		for (var s of r) s.out(o);
	} else i();
}
function ln(e, t, n) {
	if (!(e.f & 8192)) {
		e.f ^= ee;
		var r = e.nodes && e.nodes.t;
		if (r !== null) for (let e of r) (e.is_global || n) && t.push(e);
		for (var i = e.first; i !== null;) {
			var a = i.next;
			if (!(i.f & 64)) {
				var o = !!(i.f & 65536) || !!(i.f & 32) && !!(e.f & 16);
				ln(i, t, o ? n : !1);
			}
			i = a;
		}
	}
}
function un(e) {
	dn(e, !0);
}
function dn(e, t) {
	if (e.f & 8192) {
		e.f ^= ee, e.f & 1024 || (D(e, b), yt.ensure().schedule(e));
		for (var n = e.first; n !== null;) {
			var r = n.next, i = !!(n.f & 65536) || !!(n.f & 32);
			dn(n, i ? t : !1), n = r;
		}
		var a = e.nodes && e.nodes.t;
		if (a !== null) for (let e of a) (e.is_global || t) && e.in();
	}
}
function fn(e, t) {
	if (e.nodes) for (var n = e.nodes.start, r = e.nodes.end; n !== null;) {
		var i = n === r ? null : /* @__PURE__ */ L(n);
		t.append(n), n = i;
	}
}
//#endregion
//#region node_modules/svelte/src/internal/client/legacy.js
var pn = null, mn = !1, B = !1;
function hn(e) {
	B = e;
}
var V = null, H = !1;
function U(e) {
	V = e;
}
var W = null;
function G(e) {
	W = e;
}
var K = null;
function gn(e) {
	V !== null && (K ??= /* @__PURE__ */ new Set()).add(e);
}
var q = null, J = 0, Y = null;
function _n(e) {
	Y = e;
}
var vn = 1, X = 0, Z = X;
function yn(e) {
	Z = e;
}
function bn() {
	return ++vn;
}
function xn(e) {
	var t = e.f;
	if (t & 2048) return !0;
	if (t & 2 && (e.f &= ~se), t & 4096) {
		for (var n = e.deps, r = n.length, i = 0; i < r; i++) {
			var a = n[i];
			if (xn(a) && ct(a), a.wv > e.wv) return !0;
		}
		t & 512 && j === null && D(e, y);
	}
	return !1;
}
function Sn(e, t, n = !0) {
	var r = e.reactions;
	if (r !== null && !(K !== null && K.has(e))) for (var i = 0; i < r.length; i++) {
		var a = r[i];
		a.f & 2 ? Sn(a, t, !1) : t === a && (n ? D(a, b) : a.f & 1024 && D(a, x), St(a));
	}
}
function Cn(e) {
	var t = q, n = J, r = Y, i = V, a = K, o = T, s = H, c = Z, l = e.f;
	q = null, J = 0, Y = null, V = l & 96 ? null : e, K = null, Re(e.ctx), H = !1, Z = ++X, e.ac !== null && (O(() => {
		e.ac.abort(_e);
	}), e.ac = null);
	try {
		e.f |= ce;
		var u = e.fn, d = u();
		e.f |= ne;
		var f = e.deps, p = A?.is_fork;
		if (q !== null) {
			var m;
			if (p || Tn(e, J), f !== null && J > 0) for (f.length = J + q.length, m = 0; m < q.length; m++) f[J + m] = q[m];
			else e.deps = f = q;
			if (Kt() && e.f & 512) for (m = J; m < f.length; m++) (f[m].reactions ??= []).push(e);
		} else !p && f !== null && J < f.length && (Tn(e, J), f.length = J);
		if (Ve() && Y !== null && !H && f !== null && !(e.f & 6146)) for (m = 0; m < Y.length; m++) Sn(Y[m], e);
		if (i !== null && i !== e) {
			if (X++, i.deps !== null) for (let e = 0; e < n; e += 1) i.deps[e].rv = X;
			if (t !== null) for (let e of t) e.rv = X;
			Y !== null && (r === null ? r = Y : r.push(...Y));
		}
		return e.f & 8388608 && (e.f ^= ue), d;
	} catch (e) {
		return We(e);
	} finally {
		e.f ^= ce, q = t, J = n, Y = r, V = i, K = a, Re(o), H = s, Z = c;
	}
}
function wn(e, t) {
	let n = t.reactions;
	if (n !== null) {
		var r = s.call(n, e);
		if (r !== -1) {
			var a = n.length - 1;
			a === 0 ? n = t.reactions = null : (n[r] = n[a], n.pop());
		}
	}
	if (n === null && t.f & 2 && (q === null || !c.call(q, t))) {
		var o = t;
		o.f & 512 && (o.f ^= 512, o.f &= ~se), o.v !== i && qe(o), o.ac !== null && O(() => {
			o.ac.abort(_e), o.ac = null, D(o, b);
		}), lt(o), Tn(o, 0);
	}
}
function Tn(e, t) {
	var n = e.deps;
	if (n !== null) for (var r = t; r < n.length; r++) wn(e, n[r]);
}
function En(e) {
	var t = e.f;
	if (!(t & 16384)) {
		D(e, y);
		var n = W, r = mn;
		W = e, mn = !(t & 96);
		try {
			t & 16777232 ? an(e) : rn(e), nn(e);
			var i = Cn(e);
			e.teardown = typeof i == "function" ? i : null, e.wv = vn;
		} finally {
			mn = r, W = n;
		}
	}
}
function Q(e) {
	var t = !!(e.f & 2);
	if (pn?.add(e), V !== null && !H && !(W !== null && W.f & 16384) && (K === null || !K.has(e))) {
		var n = V.deps;
		if (V.f & 2097152) e.rv < X && (e.rv = X, q === null && n !== null && n[J] === e ? J++ : q === null ? q = [e] : q.push(e));
		else {
			V.deps ??= [], c.call(V.deps, e) || V.deps.push(e);
			var r = e.reactions;
			r === null ? e.reactions = [V] : c.call(r, V) || r.push(V);
		}
	}
	if (B && N.has(e)) return N.get(e);
	if (t) {
		var i = e;
		if (B) {
			var a = i.v;
			return (!(i.f & 1024) && i.reactions !== null || On(i)) && (a = st(i)), N.set(i, a), a;
		}
		var o = !(i.f & 512) && !H && V !== null && (mn || !!(V.f & 512)), s = (i.f & ne) === 0;
		xn(i) && (o && (i.f |= 512), ct(i)), o && !s && (ut(i), Dn(i));
	}
	if (j?.has(e)) return j.get(e);
	if (e.f & 8388608) throw e.v;
	return e.v;
}
function Dn(e) {
	if (e.f |= 512, e.deps !== null) for (let t of e.deps) (t.reactions ??= []).push(e), t.f & 2 && !(t.f & 512) && (ut(t), Dn(t));
}
function On(e) {
	if (e.v === i) return !0;
	if (e.deps === null) return !1;
	for (let t of e.deps) if (N.has(t) || t.f & 2 && On(t)) return !0;
	return !1;
}
function kn(e) {
	var t = H;
	try {
		return H = !0, e();
	} finally {
		H = t;
	}
}
//#endregion
//#region node_modules/svelte/src/internal/client/dom/elements/events.js
var An = Symbol("events"), jn = /* @__PURE__ */ new Set(), Mn = /* @__PURE__ */ new Set();
function Nn(e, t, n, r = {}) {
	function i(e) {
		if (r.capture || Rn.call(t, e), !e.cancelBubble) return O(() => n?.call(this, e));
	}
	return e.startsWith("pointer") || e.startsWith("touch") || e === "wheel" ? Ue(() => {
		t.addEventListener(e, i, r);
	}) : t.addEventListener(e, i, r), i;
}
function Pn(e, t, n, r, i) {
	var a = {
		capture: r,
		passive: i
	}, o = Nn(e, t, n, a);
	(t === document.body || t === window || t === document || t instanceof HTMLMediaElement) && qt(() => {
		t.removeEventListener(e, o, a);
	});
}
function Fn(e, t, n) {
	(t[An] ??= {})[e] = n;
}
function In(e) {
	for (var t = 0; t < e.length; t++) jn.add(e[t]);
	for (var n of Mn) n(e);
}
var Ln = null;
function Rn(e) {
	var t = this, n = t.ownerDocument, r = e.type, i = e.composedPath?.() || [], a = i[0] || e.target;
	Ln = e;
	var o = 0, s = Ln === e && e[An];
	if (s) {
		var c = i.indexOf(s);
		if (c !== -1 && (t === document || t === window)) {
			e[An] = t;
			return;
		}
		var u = i.indexOf(t);
		if (u === -1) return;
		c <= u && (o = c);
	}
	if (a = i[o] || e.target, a !== t) {
		l(e, "currentTarget", {
			configurable: !0,
			get() {
				return a || n;
			}
		});
		var d = V, f = W;
		U(null), G(null);
		try {
			for (var p, m = []; a !== null && a !== t;) {
				try {
					var h = a[An]?.[r];
					h != null && (!a.disabled || e.target === a) && h.call(a, e);
				} catch (e) {
					p ? m.push(e) : p = e;
				}
				if (e.cancelBubble) break;
				o++, a = o < i.length ? i[o] : null;
			}
			if (p) {
				for (let e of m) queueMicrotask(() => {
					throw e;
				});
				throw p;
			}
		} finally {
			e[An] = t, delete e.currentTarget, U(d), G(f);
		}
	}
}
//#endregion
//#region node_modules/svelte/src/internal/client/dom/reconciler.js
var zn = globalThis?.window?.trustedTypes && /* @__PURE__ */ globalThis.window.trustedTypes.createPolicy("svelte-trusted-html", { createHTML: (e) => e });
function Bn(e) {
	return zn?.createHTML(e) ?? e;
}
function Vn(e) {
	var t = Ht("template");
	return t.innerHTML = Bn(e.replaceAll("<!>", "<!---->")), t.content;
}
//#endregion
//#region node_modules/svelte/src/internal/client/dom/template.js
function Hn(e, t) {
	var n = W;
	n.nodes === null && (n.nodes = {
		start: e,
		end: t,
		a: null,
		t: null
	});
}
/*#__NO_SIDE_EFFECTS__*/
function Un(e, t) {
	var n = !!(t & 1), r = !!(t & 2), i, a = !e.startsWith("<!>");
	return () => {
		if (S) return Hn(C, null), C;
		i === void 0 && (i = Vn(a ? e : "<!>" + e), n || (i = /* @__PURE__ */ Lt(i)));
		var t = r || Pt ? document.importNode(i, !0) : i.cloneNode(!0);
		if (n) {
			var o = /* @__PURE__ */ Lt(t), s = t.lastChild;
			Hn(o, s);
		} else Hn(t, t);
		return t;
	};
}
function Wn() {
	if (S) return Hn(C, null), C;
	var e = document.createDocumentFragment(), t = document.createComment(""), n = I();
	return e.append(t, n), Hn(t, n), e;
}
function Gn(e, t) {
	if (S) {
		var n = W;
		(!(n.f & 32768) || n.nodes.end === null) && (n.nodes.end = C), je();
		return;
	}
	e !== null && e.before(t);
}
function Kn() {
	if (S && C && C.nodeType === 8 && C.textContent?.startsWith("$")) {
		let e = C.textContent.substring(1);
		return je(), e;
	}
	return (window.__svelte ??= {}).uid ??= 1, `c${window.__svelte.uid++}`;
}
[.../* @__PURE__ */ "allowfullscreen.async.autofocus.autoplay.checked.controls.default.disabled.formnovalidate.indeterminate.inert.ismap.loop.multiple.muted.nomodule.novalidate.open.playsinline.readonly.required.reversed.seamless.selected.webkitdirectory.defer.disablepictureinpicture.disableremoteplayback".split(".")];
var qn = !0;
function Jn(e, t) {
	var n = t == null ? "" : typeof t == "object" ? `${t}` : t;
	n !== (e[ge] ??= e.nodeValue) && (e[ge] = n, e.nodeValue = `${n}`);
}
var Yn = class {
	anchor;
	#e = /* @__PURE__ */ new Map();
	#t = /* @__PURE__ */ new Map();
	#n = /* @__PURE__ */ new Map();
	#r = /* @__PURE__ */ new Set();
	#i = !0;
	constructor(e, t = !0) {
		this.anchor = e, this.#i = t;
	}
	#a = (e) => {
		if (this.#e.has(e)) {
			var t = this.#e.get(e), n = this.#t.get(t);
			if (n) un(n), this.#r.delete(t);
			else {
				var r = this.#n.get(t);
				r && (un(r.effect), this.#t.set(t, r.effect), this.#n.delete(t), r.fragment.lastChild.remove(), this.anchor.before(r.fragment), n = r.effect);
			}
			for (let [t, n] of this.#e) {
				if (this.#e.delete(t), t === e) break;
				let r = this.#n.get(n);
				r && (z(r.effect), this.#n.delete(n));
			}
			for (let [e, r] of this.#t) {
				if (e === t || this.#r.has(e)) continue;
				let i = () => {
					if (Array.from(this.#e.values()).includes(e)) {
						var t = document.createDocumentFragment();
						fn(r, t), t.append(I()), this.#n.set(e, {
							effect: r,
							fragment: t
						});
					} else z(r);
					this.#r.delete(e), this.#t.delete(e);
				};
				this.#i || !n ? (this.#r.add(e), cn(r, i, !1)) : i();
			}
		}
	};
	#o = (e) => {
		this.#e.delete(e);
		let t = Array.from(this.#e.values());
		for (let [e, n] of this.#n) t.includes(e) || (z(n.effect), this.#n.delete(e));
	};
	ensure(e, t) {
		var n = A, r = Vt();
		if (t && !this.#t.has(e) && !this.#n.has(e)) {
			if (r) {
				var i = document.createDocumentFragment(), a = I();
				i.append(a), this.#n.set(e, {
					effect: tn(() => t(a)),
					fragment: i
				});
			} else this.#t.set(e, tn(() => t(this.anchor)));
		}
		if (this.#e.set(n, e), r) {
			for (let [t, r] of this.#t) t === e ? n.unskip_effect(r) : n.skip_effect(r);
			for (let [t, r] of this.#n) t === e ? n.unskip_effect(r.effect) : n.skip_effect(r.effect);
			n.oncommit(this.#a), n.ondiscard(this.#o);
		} else S && (this.anchor = C), this.#a(n);
	}
};
//#endregion
//#region node_modules/svelte/src/internal/client/dom/blocks/snippet.js
function Xn(e, t, ...n) {
	var r = new Yn(e);
	en(() => {
		let e = t() ?? null;
		r.ensure(e, e && ((t) => e(t, ...n)));
	}, ie);
}
//#endregion
//#region node_modules/svelte/src/internal/client/dom/blocks/if.js
function Zn(e, t, n = !1) {
	var r;
	S && (r = C, je());
	var i = new Yn(e), a = n ? ie : 0;
	function o(e, t) {
		if (S) {
			var n = Pe(r);
			if (e !== parseInt(n.substring(1))) {
				var a = Ne();
				w(a), i.anchor = a, Ae(!1), i.ensure(e, t), Ae(!0);
				return;
			}
		}
		i.ensure(e, t);
	}
	en(() => {
		var e = !1;
		t((t, n = 0) => {
			e = !0, o(n, t);
		}), e || o(-1, null);
	}, a);
}
//#endregion
//#region node_modules/svelte/src/internal/client/timing.js
var Qn = () => performance.now(), $ = {
	tick: (e) => requestAnimationFrame(e),
	now: () => Qn(),
	tasks: /* @__PURE__ */ new Set()
};
//#endregion
//#region node_modules/svelte/src/internal/client/loop.js
function $n() {
	let e = $.now();
	$.tasks.forEach((t) => {
		t.c(e) || ($.tasks.delete(t), t.f());
	}), $.tasks.size !== 0 && $.tick($n);
}
function er(e) {
	let t;
	return $.tasks.size === 0 && $.tick($n), {
		promise: new Promise((n) => {
			$.tasks.add(t = {
				c: e,
				f: n
			});
		}),
		abort() {
			$.tasks.delete(t);
		}
	};
}
//#endregion
//#region node_modules/svelte/src/internal/client/dom/elements/transitions.js
function tr(e, t) {
	O(() => {
		e.dispatchEvent(new CustomEvent(t));
	});
}
function nr(e) {
	if (e === "float") return "cssFloat";
	if (e === "offset") return "cssOffset";
	if (e.startsWith("--")) return e;
	let t = e.split("-");
	return t.length === 1 ? t[0] : t[0] + t.slice(1).map((e) => e[0].toUpperCase() + e.slice(1)).join("");
}
function rr(e) {
	let t = {}, n = e.split(";");
	for (let e of n) {
		let [n, r] = e.split(":");
		if (!n || r === void 0) break;
		let i = nr(n.trim());
		t[i] = r.trim();
	}
	return t;
}
var ir = (e) => e;
function ar(e, t, n, r) {
	var i = !!(e & 1), a = !!(e & 2), o = i && a, s = !!(e & 4), c = o ? "both" : i ? "in" : "out", l, u = t.inert, d = t.style.overflow, f, p;
	function m() {
		return O(() => l ??= n()(t, r?.() ?? {}, { direction: c }));
	}
	var h = {
		is_global: s,
		in() {
			if (t.inert = u, !i) {
				p?.abort(), p?.reset?.();
				return;
			}
			a || f?.abort(), f = or(t, m(), p, 1, () => {
				tr(t, "introstart");
			}, () => {
				tr(t, "introend"), f?.abort(), f = l = void 0, t.style.overflow = d;
			});
		},
		out(e) {
			if (!a) {
				e?.(), l = void 0;
				return;
			}
			t.inert = !0, p = or(t, m(), f, 0, () => {
				tr(t, "outrostart");
			}, () => {
				tr(t, "outroend"), e?.();
			});
		},
		stop: () => {
			f?.abort(), p?.abort();
		}
	}, g = W;
	if ((g.nodes.t ??= []).push(h), i && qn) {
		var _ = s;
		if (!_) {
			for (var v = g.parent; v && v.f & 65536;) for (; (v = v.parent) && !(v.f & 16););
			_ = !v || !!(v.f & 32768);
		}
		_ && Xt(() => {
			kn(() => h.in());
		});
	}
}
function or(e, t, n, r, i, a) {
	var o = r === 1;
	if (h(t)) {
		var s, c = !1;
		return Ue(() => {
			c || (s = or(e, t({ direction: o ? "in" : "out" }), n, r, i, a));
		}), {
			abort: () => {
				c = !0, s?.abort();
			},
			deactivate: () => s.deactivate(),
			reset: () => s.reset(),
			t: () => s.t()
		};
	}
	if (n?.deactivate(), !t?.duration && !t?.delay) return i(), a(), {
		abort: g,
		deactivate: g,
		reset: g,
		t: () => r
	};
	let { delay: l = 0, css: u, tick: d, easing: f = ir } = t;
	var p = [];
	if (o && n === void 0 && (d && d(0, 1), u)) {
		var m = rr(u(0, 1));
		p.push(m, m);
	}
	var _ = () => 1 - r, v = e.animate(p, {
		duration: l,
		fill: "forwards"
	});
	return v.onfinish = () => {
		v.cancel(), i();
		var o = n?.t() ?? 1 - r;
		n?.abort();
		var s = r - o, c = t.duration * Math.abs(s), l = [];
		if (c > 0) {
			var p = !1;
			if (u) for (var m = Math.ceil(c / (1e3 / 60)), h = 0; h <= m; h += 1) {
				var g = o + s * f(h / m), y = rr(u(g, 1 - g));
				l.push(y), p ||= y.overflow === "hidden";
			}
			p && (e.style.overflow = "hidden"), _ = () => {
				var e = v.currentTime;
				return o + s * f(e / c);
			}, d && er(() => {
				if (v.playState !== "running") return !1;
				var e = _();
				return d(e, 1 - e), !0;
			});
		}
		v = e.animate(l, {
			duration: c,
			fill: "forwards"
		}), v.onfinish = () => {
			_ = () => r, d?.(r, 1 - r), a();
		};
	}, {
		abort: () => {
			v && (v.cancel(), v.effect = null, v.onfinish = g);
		},
		deactivate: () => {
			a = g;
		},
		reset: () => {
			r === 0 && d?.(1, 0);
		},
		t: () => _()
	};
}
//#endregion
//#region node_modules/svelte/src/internal/client/dom/css.js
function sr(e, t) {
	Xt(() => {
		var n = e.getRootNode(), r = n.host ? n : n.head ?? n.ownerDocument.head;
		if (!r.querySelector("#" + t.hash)) {
			let e = Ht("style");
			e.id = t.hash, e.textContent = t.code, r.appendChild(e);
		}
	});
}
//#endregion
//#region node_modules/svelte/src/internal/shared/attributes.js
var cr = [..." 	\n\r\f\xA0\v﻿"];
function lr(e, t, n) {
	var r = e == null ? "" : "" + e;
	if (t && (r = r ? r + " " + t : t), n) {
		for (var i of Object.keys(n)) if (n[i]) r = r ? r + " " + i : i;
		else if (r.length) for (var a = i.length, o = 0; (o = r.indexOf(i, o)) >= 0;) {
			var s = o + a;
			(o === 0 || cr.includes(r[o - 1])) && (s === r.length || cr.includes(r[s])) ? r = (o === 0 ? "" : r.substring(0, o)) + r.substring(s + 1) : o = s;
		}
	}
	return r === "" ? null : r;
}
//#endregion
//#region node_modules/svelte/src/internal/client/dom/elements/class.js
function ur(e, t, n, r, i, a) {
	var o = e[he];
	if (S || o !== n || o === void 0) {
		var s = lr(n, r, a);
		(!S || s !== e.getAttribute("class")) && (s == null ? e.removeAttribute("class") : t ? e.className = s : e.setAttribute("class", s)), e[he] = n;
	} else if (a && i !== a) for (var c in a) {
		var l = !!a[c];
		(i == null || l !== !!i[c]) && e.classList.toggle(c, l);
	}
	return a;
}
//#endregion
//#region node_modules/svelte/src/internal/client/dom/elements/attributes.js
var dr = Symbol("is custom element"), fr = Symbol("is html"), pr = ve ? "link" : "LINK";
function mr(e, t, n, r) {
	var i = hr(e);
	S && (i[t] = e.getAttribute(t), t === "src" || t === "srcset" || t === "href" && e.nodeName === pr) || i[t] !== (i[t] = n) && (t === "loading" && (e[pe] = n), n == null ? e.removeAttribute(t) : typeof n != "string" && _r(e).includes(t) ? e[t] = n : e.setAttribute(t, n));
}
function hr(e) {
	return e[me] ??= {
		[dr]: e.nodeName.includes("-"),
		[fr]: e.namespaceURI === a
	};
}
var gr = /* @__PURE__ */ new Map();
function _r(e) {
	var t = e.getAttribute("is") || e.nodeName, n = gr.get(t);
	if (n) return n;
	gr.set(t, n = []);
	for (var r, i = e, a = Element.prototype; a !== i;) {
		for (var o in r = d(i), r) r[o].set && o !== "innerHTML" && o !== "textContent" && o !== "innerText" && n.push(o);
		i = m(i);
	}
	return n;
}
//#endregion
//#region node_modules/svelte/src/internal/client/dom/elements/bindings/this.js
function vr(e, t) {
	return e === t || e?.[de] === t;
}
function yr(e = {}, t, n, r) {
	var i = T.r, a = W;
	return Xt(() => {
		var o, s;
		return Qt(() => {
			o = s, s = r?.() || [], kn(() => {
				vr(n(...s), e) || (t(e, ...s), o && vr(n(...o), e) && t(null, ...o));
			});
		}), () => {
			let r = a;
			for (; r !== i && r.parent !== null && r.parent.f & 33554432;) r = r.parent;
			let o = () => {
				s && vr(n(...s), e) && t(null, ...s);
			}, c = r.teardown;
			r.teardown = () => {
				o(), c?.();
			};
		};
	}), e;
}
//#endregion
//#region node_modules/svelte/src/internal/client/reactivity/props.js
function br(e, t, n, r) {
	var i = !0, a = !!(n & 8), o = !!(n & 16), s = r, c = !0, l = void 0, d = () => o && i ? (l ??= /* @__PURE__ */ nt(r), Q(l)) : (c && (c = !1, s = o ? kn(r) : r), s);
	let f;
	if (a) {
		var p = de in e || fe in e;
		f = u(e, t)?.set ?? (p && t in e ? (n) => e[t] = n : void 0);
	}
	var m, h = !1;
	a ? [m, h] = Ze(() => e[t]) : m = e[t], m === void 0 && r !== void 0 && (m = d(), f && (i && we(t), f(m)));
	var g = i ? () => {
		var n = e[t];
		return n === void 0 ? d() : (c = !0, n);
	} : () => {
		var n = e[t];
		return n !== void 0 && (s = void 0), n === void 0 ? s : n;
	};
	if (i && !(n & 4)) return g;
	if (f) {
		var _ = e.$$legacy;
		return (function(e, t) {
			return arguments.length > 0 ? ((!i || !t || _ || h) && f(t ? g() : e), e) : g();
		});
	}
	var v = !1, y = (n & 1 ? nt : at)(() => (v = !1, g()));
	a && Q(y);
	var b = W;
	return (function(e, t) {
		if (arguments.length > 0) {
			let n = t ? Q(y) : i && a ? Mt(e) : e;
			return F(y, n), v = !0, s !== void 0 && (s = n), e;
		}
		return B && v || b.f & 16384 ? y.v : Q(y);
	});
}
var xr = /* @__PURE__ */ Un("<h2 class=\"worn-dialog-title svelte-qe35nh\"> </h2>"), Sr = /* @__PURE__ */ Un("<div class=\"worn-dialog-backdrop svelte-qe35nh\" role=\"presentation\"><div role=\"dialog\" aria-modal=\"true\" tabindex=\"-1\"><div class=\"worn-dialog-head svelte-qe35nh\"><!> <button type=\"button\" class=\"worn-dialog-close svelte-qe35nh\" aria-label=\"Close\"></button></div> <div class=\"worn-dialog-body svelte-qe35nh\"><!></div></div></div>"), Cr = {
	hash: "svelte-qe35nh",
	code: ".worn-dialog-backdrop.svelte-qe35nh {position:fixed;inset:0;z-index:1000;display:flex;align-items:center;justify-content:center;background:rgba(0,0,0,0.35);backdrop-filter:blur(2px);padding:24px;\r\n	@media (max-width: 480px) {padding:8px; }}.worn-dialog.svelte-qe35nh {background:var(--cockpit-surface);border:1px solid var(--cockpit-border);border-radius:var(--cockpit-radius);box-shadow:0 16px 48px rgba(0,0,0,0.15);width:460px;max-width:100%;max-height:calc(100vh - 48px);overflow-y:auto;position:relative;}\r\n	/* CSP-safe: no unsafe-inline for style-src, so size is a static class\r\n	   (a fixed preset) rather than an inline CSS var. */.worn-dialog.is-sm.svelte-qe35nh {width:360px;}.worn-dialog.is-lg.svelte-qe35nh {width:640px;}.worn-dialog-head.svelte-qe35nh {display:flex;align-items:center;justify-content:space-between;padding:18px 20px 0;}.worn-dialog-title.svelte-qe35nh {font-family:var(--font-family-display);font-size:18px;font-weight:680;color:var(--cockpit-text);margin:0;}.worn-dialog-close.svelte-qe35nh {min-width:44px;min-height:44px;position:relative;width:44px;height:44px;border-radius:50%;border:0;background:transparent;color:var(--cockpit-text-muted);cursor:pointer;display:flex;align-items:center;justify-content:center;flex-shrink:0;}.worn-dialog-close.svelte-qe35nh::before,\n	.worn-dialog-close.svelte-qe35nh::after {content:'';position:absolute;left:50%;top:50%;width:12px;height:1.5px;border-radius:1px;background:currentColor;}.worn-dialog-close.svelte-qe35nh::before {transform:translate(-50%, -50%) rotate(45deg);}.worn-dialog-close.svelte-qe35nh::after {transform:translate(-50%, -50%) rotate(-45deg);}.worn-dialog-close.svelte-qe35nh:hover {background:var(--cockpit-hover-bg);}.worn-dialog-close.svelte-qe35nh:focus-visible {outline:2px dashed var(--cockpit-accent);outline-offset:2px;}.worn-dialog-body.svelte-qe35nh {padding:12px 20px 20px;}"
};
function wr(r, i) {
	let a = Kn();
	ze(i, !0), sr(r, Cr);
	let o = br(i, "open", 15, !1), s = br(i, "size", 3, "md"), c = `worn-dialog-title-${a}`, l = /* @__PURE__ */ P(null);
	Jt(() => {
		if (o() && Q(l) && typeof document < "u") {
			let e = document.activeElement;
			return Q(l).focus(), () => e?.focus?.();
		}
	});
	function u() {
		return Q(l) ? Array.from(Q(l).querySelectorAll("a[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex=\"-1\"])")) : [];
	}
	function d(e) {
		if (o()) {
			if (e.key === "Escape") {
				o(!1), i.onclose?.();
				return;
			}
			if (e.key === "Tab") {
				let t = u();
				if (!t.length) {
					e.preventDefault();
					return;
				}
				let n = t[0], r = t[t.length - 1], i = typeof document < "u" ? document.activeElement : null;
				e.shiftKey && (i === n || i === Q(l)) ? (e.preventDefault(), r.focus()) : !e.shiftKey && i === r && (e.preventDefault(), n.focus());
			}
		}
	}
	function f(e) {
		e.target === e.currentTarget && (o(!1), i.onclose?.());
	}
	var p = Wn();
	Pn("keydown", Nt, d);
	var m = zt(p), h = (r) => {
		var a = Sr(), u = Rt(a);
		let d;
		var p = Rt(u), m = Rt(p), h = (e) => {
			var t = xr(), n = Rt(t, !0);
			Me(t), $t(() => {
				mr(t, "id", c), Jn(n, i.title);
			}), Gn(e, t);
		};
		Zn(m, (e) => {
			i.title && e(h);
		});
		var _ = Bt(m, 2);
		Me(p);
		var v = Bt(p, 2);
		Xn(Rt(v), () => i.children ?? g), Me(v), Me(u), yr(u, (e) => F(l, e), () => Q(l)), Me(a), $t(() => {
			d = ur(u, 1, "worn-dialog svelte-qe35nh", null, d, {
				"is-sm": s() === "sm",
				"is-lg": s() === "lg"
			}), mr(u, "aria-labelledby", i.title ? c : void 0);
		}), Fn("click", a, f), Fn("click", _, () => {
			o(!1), i.onclose?.();
		}), ar(3, u, () => t, () => ({
			y: n.current ? 0 : 12,
			duration: n.current ? 0 : 280
		})), ar(3, a, () => e, () => ({ duration: n.current ? 0 : 200 })), Gn(r, a);
	};
	Zn(m, (e) => {
		o() && e(h);
	}), Gn(r, p), Be();
}
In(["click"]);
//#endregion
export { wr as Dialog };
