//#region node_modules/svelte/src/internal/disclose-version.js
typeof window < "u" && ((window.__svelte ??= {}).v ??= /* @__PURE__ */ new Set()).add("5");
//#endregion
//#region node_modules/svelte/src/constants.js
var e = {}, t = Symbol("uninitialized"), n = "http://www.w3.org/1999/xhtml", r = Array.isArray, i = Array.prototype.indexOf, a = Array.prototype.includes, o = Array.from, s = Object.keys, c = Object.defineProperty, l = Object.getOwnPropertyDescriptor, u = Object.getOwnPropertyDescriptors, d = Object.prototype, f = Array.prototype, p = Object.getPrototypeOf, m = Object.isExtensible;
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
var y = 1024, b = 2048, ee = 4096, te = 8192, ne = 16384, re = 32768, ie = 1 << 25, ae = 65536, oe = 1 << 19, se = 1 << 20, ce = 65536, le = 1 << 21, ue = 1 << 22, de = 1 << 23, x = Symbol("$state"), fe = Symbol("legacy props"), pe = Symbol(""), me = Symbol("attributes"), he = Symbol("class"), ge = Symbol("style"), _e = Symbol("text"), ve = new class extends Error {
	name = "StaleReactionError";
	message = "The reaction that called `getAbortSignal()` was re-run or destroyed";
}(), ye = !!globalThis.document?.contentType && /* @__PURE__ */ globalThis.document.contentType.includes("xml");
//#endregion
//#region node_modules/svelte/src/internal/client/errors.js
function be() {
	throw Error("https://svelte.dev/e/async_derived_orphan");
}
function xe(e) {
	throw Error("https://svelte.dev/e/effect_in_teardown");
}
function Se() {
	throw Error("https://svelte.dev/e/effect_in_unowned_derived");
}
function Ce(e) {
	throw Error("https://svelte.dev/e/effect_orphan");
}
function we() {
	throw Error("https://svelte.dev/e/effect_update_depth_exceeded");
}
function Te() {
	throw Error("https://svelte.dev/e/hydration_failed");
}
function Ee(e) {
	throw Error("https://svelte.dev/e/props_invalid_value");
}
function De() {
	throw Error("https://svelte.dev/e/state_descriptors_fixed");
}
function Oe() {
	throw Error("https://svelte.dev/e/state_prototype_fixed");
}
function ke() {
	throw Error("https://svelte.dev/e/state_unsafe_mutation");
}
function Ae() {
	throw Error("https://svelte.dev/e/svelte_boundary_reset_onerror");
}
function je() {
	console.warn("https://svelte.dev/e/derived_inert");
}
function Me(e) {
	console.warn("https://svelte.dev/e/hydration_mismatch");
}
function Ne() {
	console.warn("https://svelte.dev/e/svelte_boundary_reset_noop");
}
//#endregion
//#region node_modules/svelte/src/internal/client/dom/hydration.js
var S = !1;
function Pe(e) {
	S = e;
}
var C;
function w(t) {
	if (t === null) throw Me(), e;
	return C = t;
}
function Fe() {
	return w(/* @__PURE__ */ L(C));
}
function Ie(t) {
	if (S) {
		if (/* @__PURE__ */ L(C) !== null) throw Me(), e;
		C = t;
	}
}
function Le(e = 1) {
	if (S) {
		for (var t = e, n = C; t--;) n = /* @__PURE__ */ L(n);
		C = n;
	}
}
function Re(e = !0) {
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
function ze(t) {
	if (!t || t.nodeType !== 8) throw Me(), e;
	return t.data;
}
//#endregion
//#region node_modules/svelte/src/internal/client/reactivity/equality.js
function Be(e) {
	return e === this.v;
}
function Ve(e, t) {
	return e == e ? e !== t || typeof e == "object" && !!e || typeof e == "function" : t == t;
}
function He(e) {
	return !Ve(e, this.v);
}
//#endregion
//#region node_modules/svelte/src/internal/client/context.js
var T = null;
function Ue(e) {
	T = e;
}
function We(e, t = !1, n) {
	T = {
		p: T,
		i: !1,
		c: null,
		e: null,
		s: e,
		x: null,
		r: G,
		l: null
	};
}
function Ge(e) {
	var t = T, n = t.e;
	if (n !== null) {
		t.e = null;
		for (var r of n) un(r);
	}
	return e !== void 0 && (t.x = e), t.i = !0, T = t.p, e ?? {};
}
function Ke() {
	return !0;
}
//#endregion
//#region node_modules/svelte/src/internal/client/dom/task.js
var E = [];
function qe() {
	var e = E;
	E = [], _(e);
}
function D(e) {
	if (E.length === 0 && !Ct) {
		var t = E;
		queueMicrotask(() => {
			t === E && qe();
		});
	}
	E.push(e);
}
function Je() {
	for (; E.length > 0;) qe();
}
function Ye(e) {
	var t = G;
	if (t === null) return H.f |= de, e;
	if (!(t.f & 32768) && !(t.f & 4)) throw e;
	O(e, t);
}
function O(e, t) {
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
var Xe = ~(b | ee | y);
function k(e, t) {
	e.f = e.f & Xe | t;
}
function Ze(e) {
	e.f & 512 || e.deps === null ? k(e, y) : k(e, ee);
}
//#endregion
//#region node_modules/svelte/src/internal/client/reactivity/utils.js
function Qe(e) {
	if (e !== null) for (let t of e) !(t.f & 2) || !(t.f & 65536) || (t.f ^= ce, Qe(t.deps));
}
function $e(e, t, n) {
	e.f & 2048 ? t.add(e) : e.f & 4096 && n.add(e), Qe(e.deps), k(e, y);
}
//#endregion
//#region node_modules/svelte/src/internal/client/reactivity/store.js
var et = !1;
function tt(e) {
	var t = et;
	try {
		return et = !1, [e(), et];
	} finally {
		et = t;
	}
}
//#endregion
//#region node_modules/svelte/src/internal/client/dom/elements/bindings/shared.js
function nt(e) {
	var t = H, n = G;
	W(null), K(null);
	try {
		return e();
	} finally {
		W(t), K(n);
	}
}
//#endregion
//#region node_modules/svelte/src/reactivity/create-subscriber.js
function rt(e) {
	let t = 0, n = Rt(0), r;
	return () => {
		sn() && (Q(n), hn(() => (t === 0 && (r = Gn(() => e(() => Ht(n)))), t += 1, () => {
			D(() => {
				--t, t === 0 && (r?.(), r = void 0, Ht(n));
			});
		})));
	};
}
//#endregion
//#region node_modules/svelte/src/internal/client/dom/blocks/boundary.js
var it = ae | oe;
function at(e, t, n, r) {
	new ot(e, t, n, r);
}
var ot = class {
	parent;
	is_pending = !1;
	transform_error;
	#e;
	#t = S ? C : null;
	#n;
	#r;
	#i;
	#a = null;
	#o = null;
	#s = null;
	#c = null;
	#l = 0;
	#u = 0;
	#d = !1;
	#f = /* @__PURE__ */ new Set();
	#p = /* @__PURE__ */ new Set();
	#m = null;
	#h = rt(() => (this.#m = Rt(this.#l), () => {
		this.#m = null;
	}));
	constructor(e, t, n, r) {
		this.#e = e, this.#n = t, this.#r = (e) => {
			var t = G;
			t.b = this, t.f |= 128, n(e);
		}, this.parent = G.b, this.transform_error = r ?? this.parent?.transform_error ?? ((e) => e), this.#i = _n(() => {
			if (S) {
				let e = this.#t;
				Fe();
				let t = e.data === "[!";
				if (e.data.startsWith("[?")) {
					let t = JSON.parse(e.data.slice(2));
					this.#_(t);
				} else t ? this.#y() : this.#g();
			} else this.#b();
		}, it), S && (this.#e = C);
	}
	#g() {
		try {
			this.#a = z(() => this.#r(this.#e));
		} catch (e) {
			this.error(e);
		}
	}
	#_(e) {
		let t = this.#n.failed, { reset: n, invoke_onerror: r } = this.#v(e);
		D(r), t && (this.#s = z(() => {
			t(this.#e, () => e, () => n);
		}));
	}
	#v(e) {
		var t = !1, n = !1;
		let r = () => {
			if (t) {
				Ne();
				return;
			}
			t = !0, n && Ae(), this.#s !== null && Cn(this.#s, () => {
				this.#s = null;
			}), this.#S(() => {
				this.#b();
			});
		};
		return {
			reset: r,
			invoke_onerror: () => {
				try {
					n = !0, this.#n.onerror?.(e, r), n = !1;
				} catch (e) {
					O(e, this.#i && this.#i.parent);
				}
			}
		};
	}
	#y() {
		let e = this.#n.pending;
		e && (this.is_pending = !0, this.#o = z(() => e(this.#e)), D(() => {
			var e = this.#c = document.createDocumentFragment(), t = I();
			e.append(t), this.#a = this.#S(() => z(() => this.#r(t))), this.#u === 0 && (this.#e.before(e), this.#c = null, Cn(this.#o, () => {
				this.#o = null;
			}), this.#x(A));
		}));
	}
	#b() {
		try {
			if (this.is_pending = this.has_pending_snippet(), this.#u = 0, this.#l = 0, this.#a = z(() => {
				this.#r(this.#e);
			}), this.#u > 0) {
				var e = this.#c = document.createDocumentFragment();
				Dn(this.#a, e);
				let t = this.#n.pending;
				this.#o = z(() => t(this.#e));
			} else this.#x(A);
		} catch (e) {
			this.error(e);
		}
	}
	#x(e) {
		this.is_pending = !1, e.transfer_effects(this.#f, this.#p);
	}
	defer_effect(e) {
		$e(e, this.#f, this.#p);
	}
	is_rendered() {
		return !this.is_pending && (!this.parent || this.parent.is_rendered());
	}
	has_pending_snippet() {
		return !!this.#n.pending;
	}
	#S(e) {
		var t = G, n = H, r = T;
		K(this.#i), W(this.#i), Ue(this.#i.ctx);
		try {
			return kt.ensure(), e();
		} catch (e) {
			return Ye(e), null;
		} finally {
			K(t), W(n), Ue(r);
		}
	}
	#C(e, t) {
		if (!this.has_pending_snippet()) {
			this.parent && this.parent.#C(e, t);
			return;
		}
		this.#u += e, this.#u === 0 && (this.#x(t), this.#o && Cn(this.#o, () => {
			this.#o = null;
		}), this.#c &&= (this.#e.before(this.#c), null));
	}
	update_pending_count(e, t) {
		this.#C(e, t), this.#l += e, !(!this.#m || this.#d) && (this.#d = !0, D(() => {
			this.#d = !1, this.#m && Bt(this.#m, this.#l);
		}));
	}
	get_effect_pending() {
		return this.#h(), Q(this.#m);
	}
	error(e) {
		if (!this.#n.onerror && !this.#n.failed) throw e;
		A?.is_fork ? (this.#a && A.skip_effect(this.#a), this.#o && A.skip_effect(this.#o), this.#s && A.skip_effect(this.#s), A.oncommit(() => {
			this.#w(e);
		})) : this.#w(e);
	}
	#w(e) {
		this.#a &&= (B(this.#a), null), this.#o &&= (B(this.#o), null), this.#s &&= (B(this.#s), null), S && (w(this.#t), Le(), w(Re()));
		let t = this.#n.failed, n = (e) => {
			let { reset: n, invoke_onerror: r } = this.#v(e);
			r(), t && (this.#s = this.#S(() => {
				try {
					return z(() => {
						var r = G;
						r.b = this, r.f |= 128, t(this.#e, () => e, () => n);
					});
				} catch (e) {
					return O(e, this.#i.parent), null;
				}
			}));
		};
		D(() => {
			var t;
			try {
				t = this.transform_error(e);
			} catch (e) {
				O(e, this.#i && this.#i.parent);
				return;
			}
			typeof t == "object" && t && typeof t.then == "function" ? t.then(n, (e) => O(e, this.#i && this.#i.parent)) : n(t);
		});
	}
};
//#endregion
//#region node_modules/svelte/src/internal/client/reactivity/async.js
function st(e, t, n, r) {
	let i = Ke() ? dt : mt;
	var a = e.filter((e) => !e.settled), o = t.map(i);
	if (n.length === 0 && a.length === 0) {
		r(o);
		return;
	}
	var s = G, c = ct(), l = a.length === 1 ? a[0].promise : a.length > 1 ? Promise.all(a.map((e) => e.promise)) : null;
	function u(e) {
		if (!(s.f & 16384)) {
			c();
			try {
				r([...o, ...e]);
			} catch (e) {
				O(e, s);
			}
			lt();
		}
	}
	var d = ut();
	if (n.length === 0) {
		l.then(() => u([])).finally(d);
		return;
	}
	function f() {
		Promise.all(n.map((e) => /* @__PURE__ */ pt(e))).then(u).catch((e) => O(e, s)).finally(d);
	}
	l ? l.then(() => {
		c(), f(), lt();
	}) : f();
}
function ct() {
	var e = G, t = H, n = T, r = A;
	return function(i = !0) {
		K(e), W(t), Ue(n), i && !(e.f & 16384) && (r?.activate(), r?.apply());
	};
}
function lt(e = !0) {
	K(null), W(null), Ue(null), e && A?.deactivate();
}
function ut() {
	var e = G, t = e.b, n = A, r = !!t?.is_rendered();
	return t?.update_pending_count(1, n), n.increment(r, e), () => {
		t?.update_pending_count(-1, n), n.decrement(r, e);
	};
}
/*#__NO_SIDE_EFFECTS__*/
function dt(e) {
	var n = 2 | b;
	return G !== null && (G.f |= oe), {
		ctx: T,
		deps: null,
		effects: null,
		equals: Be,
		f: n,
		fn: e,
		reactions: null,
		rv: 0,
		v: t,
		wv: 0,
		parent: G,
		ac: null
	};
}
var ft = Symbol("obsolete");
/*#__NO_SIDE_EFFECTS__*/
function pt(e, n, r) {
	let i = G;
	i === null && be();
	var a = void 0, o = Rt(t), s = !H, c = /* @__PURE__ */ new Set();
	return mn(() => {
		var t = G, n = v();
		a = n.promise;
		try {
			Promise.resolve(e()).then(n.resolve, (e) => {
				e !== ve && n.reject(e);
			}).finally(lt);
		} catch (e) {
			n.reject(e), lt();
		}
		var r = A;
		if (s) {
			if (t.f & 32768) var l = ut();
			if (i.b?.is_rendered()) r.async_deriveds.get(t)?.reject(ft);
			else for (let e of c.values()) e.reject(ft);
			c.add(n), r.async_deriveds.set(t, n);
		}
		let u = (e, t = void 0) => {
			l?.(), c.delete(n), t !== ft && (r.activate(), t ? (o.f |= de, Bt(o, t)) : (o.f & 8388608 && (o.f ^= de), Bt(o, e)), r.deactivate());
		};
		n.promise.then(u, (e) => u(null, e || "unknown"));
	}), cn(() => {
		for (let e of c) e.reject(ft);
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
function mt(e) {
	let t = /* @__PURE__ */ dt(e);
	return t.equals = He, t;
}
function ht(e) {
	var t = e.effects;
	if (t !== null) {
		e.effects = null;
		for (var n = 0; n < t.length; n += 1) B(t[n]);
	}
}
function gt(e) {
	var n, r = G, i = e.parent;
	if (!V && i !== null && e.v !== t && i.f & 24576) return je(), e.v;
	K(i);
	try {
		e.f &= ~ce, ht(e), n = zn(e);
	} finally {
		K(r);
	}
	return n;
}
function _t(e) {
	var t = gt(e);
	if (!e.equals(t) && (e.wv = In(), (!A?.is_fork || e.deps === null) && (A === null ? e.v = t : (A.capture(e, t, !0), xt?.capture(e, t, !0)), e.deps === null))) {
		k(e, y);
		return;
	}
	V || (j === null ? Ze(e) : (sn() || A?.is_fork) && j.set(e, t));
}
function vt(e) {
	if (e.effects !== null) for (let t of e.effects) (t.teardown || t.ac) && (t.teardown?.(), t.ac !== null && nt(() => {
		t.ac.abort(ve), t.ac = null;
	}), t.fn !== null && (t.teardown = g), Vn(t, 0), yn(t));
}
function yt(e) {
	if (e.effects !== null) for (let t of e.effects) t.teardown && t.fn !== null && Hn(t);
}
//#endregion
//#region node_modules/svelte/src/internal/client/reactivity/batch.js
var bt = null, A = null, xt = null, j = null, St = null, Ct = !1, wt = !1, Tt = null, Et = null, Dt = 0, Ot = 1, kt = class e {
	id = Ot++;
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
		bt === null ? bt = this : (bt.#n = this, this.#t = bt), bt = this;
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
			for (var r of n.d) k(r, b), t(r);
			for (r of n.m) k(r, ee), t(r);
		}
		this.#p.add(e);
	}
	#g() {
		this.#e = !0, Dt++ > 1e3 && (this.#x(), jt());
		for (let e of this.#u) this.#d.delete(e), k(e, b), this.schedule(e);
		for (let e of this.#d) k(e, ee), this.schedule(e);
		let t = this.#c;
		this.#c = [], this.apply();
		var n = Tt = [], r = [], i = Et = [];
		for (let e of t) try {
			this.#_(e, n, r);
		} catch (t) {
			throw Ft(e), this.#h() || this.discard(), t;
		}
		if (A = null, i.length > 0) {
			var a = e.ensure();
			for (let e of i) a.schedule(e);
		}
		if (Tt = null, Et = null, this.#h()) {
			this.#b(r), this.#b(n);
			for (let [e, t] of this.#f) Pt(e, t);
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
		this.#r.clear(), xt = this, Mt(r), Mt(n), xt = null, this.#s?.resolve();
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
				a ? r.f ^= y : i & 4 ? t.push(r) : Ln(r) && (i & 16 && this.#d.add(r), Hn(r));
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
					r & 4194320 && !this.async_deriveds.has(i) && (this.#d.delete(i), k(i, b), this.schedule(i));
				}
			}
		};
		for (let e of this.current.keys()) t(e);
		this.oncommit(() => e.discard()), e.#x(), A = this, this.#g();
	}
	#b(e) {
		for (var t = 0; t < e.length; t += 1) $e(e[t], this.#u, this.#d);
	}
	capture(e, n, r = !1) {
		e.v !== t && !this.previous.has(e) && this.previous.set(e, e.v), e.f & 8388608 || (this.current.set(e, [n, r]), j?.set(e, n)), this.is_fork || (e.v = n);
	}
	activate() {
		A = this;
	}
	deactivate() {
		A = null, j = null;
	}
	flush() {
		try {
			wt = !0, A = this, this.#g();
		} finally {
			Dt = 0, St = null, Tt = null, Et = null, wt = !1, A = null, j = null, N.clear();
		}
	}
	discard() {
		for (let e of this.#i) e(this);
		this.#i.clear();
		for (let e of this.async_deriveds.values()) e.reject(ft);
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
		this.#m || (this.#m = !0, D(() => {
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
			!wt && !Ct && D(() => {
				t.#e || t.flush();
			});
		}
		return A;
	}
	apply() {
		j = null;
	}
	schedule(e) {
		if (St = e, e.b?.is_pending && e.f & 16777228 && !(e.f & 32768)) {
			e.b.defer_effect(e);
			return;
		}
		for (var t = e; t.parent !== null;) {
			t = t.parent;
			var n = t.f;
			if (Tt !== null && t === G && (H === null || !(H.f & 2))) return;
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
			e === null || (e.#n = t), t === null ? bt = e : t.#t = e, this.linked = !1;
		}
	}
};
function At(e) {
	var t = Ct;
	Ct = !0;
	try {
		var n;
		for (e && (A !== null && !A.is_fork && A.flush(), n = e());;) {
			if (Je(), A === null) return n;
			A.flush();
		}
	} finally {
		Ct = t;
	}
}
function jt() {
	try {
		we();
	} catch (e) {
		O(e, St);
	}
}
var M = null;
function Mt(e) {
	var t = e.length;
	if (t !== 0) {
		for (var n = 0; n < t;) {
			var r = e[n++];
			if (!(r.f & 24576) && Ln(r) && (M = /* @__PURE__ */ new Set(), Hn(r), r.deps === null && r.first === null && r.nodes === null && r.teardown === null && r.ac === null && Sn(r), M?.size > 0)) {
				N.clear();
				for (let e of M) {
					if (e.f & 24576) continue;
					let t = [e], n = e.parent;
					for (; n !== null;) M.has(n) && (M.delete(n), t.push(n)), n = n.parent;
					for (let e = t.length - 1; e >= 0; e--) {
						let n = t[e];
						n.f & 24576 || Hn(n);
					}
				}
				M.clear();
			}
		}
		M = null;
	}
}
function Nt(e) {
	A.schedule(e);
}
function Pt(e, t) {
	if (!(e.f & 32 && e.f & 1024)) {
		e.f & 2048 ? t.d.push(e) : e.f & 4096 && t.m.push(e), k(e, y);
		for (var n = e.first; n !== null;) Pt(n, t), n = n.next;
	}
}
function Ft(e) {
	k(e, y);
	for (var t = e.first; t !== null;) Ft(t), t = t.next;
}
//#endregion
//#region node_modules/svelte/src/internal/client/reactivity/sources.js
var It = /* @__PURE__ */ new Set(), N = /* @__PURE__ */ new Map(), Lt = !1;
function Rt(e, t) {
	return {
		f: 0,
		v: e,
		reactions: null,
		equals: Be,
		rv: 0,
		wv: 0
	};
}
/*#__NO_SIDE_EFFECTS__*/
function P(e, t) {
	let n = Rt(e, t);
	return jn(n), n;
}
/*#__NO_SIDE_EFFECTS__*/
function zt(e, t = !1, n = !0) {
	let r = Rt(e);
	return t || (r.equals = He), r;
}
function F(e, t, n = !1) {
	return H !== null && (!U || H.f & 131072) && Ke() && H.f & 4325394 && (q === null || !q.has(e)) && ke(), Bt(e, n ? Wt(t) : t, Et);
}
function Bt(e, t, n = null) {
	if (!e.equals(t)) {
		N.set(e, V ? t : e.v);
		var r = kt.ensure();
		if (r.capture(e, t), e.f & 2) {
			let t = e;
			e.f & 2048 && gt(t), j === null && Ze(t);
		}
		e.wv = In(), Ut(e, b, n), Ke() && G !== null && G.f & 1024 && !(G.f & 96) && (X === null ? Mn([e]) : X.push(e)), !r.is_fork && It.size > 0 && !Lt && Vt();
	}
	return t;
}
function Vt() {
	Lt = !1;
	for (let e of It) {
		e.f & 1024 && k(e, ee);
		let t;
		try {
			t = Ln(e);
		} catch {
			t = !0;
		}
		t && Hn(e);
	}
	It.clear();
}
function Ht(e) {
	F(e, e.v + 1);
}
function Ut(e, t, n) {
	var r = e.reactions;
	if (r !== null) for (var i = Ke(), a = r.length, o = 0; o < a; o++) {
		var s = r[o], c = s.f;
		if (!(!i && s === G)) {
			var l = (c & b) === 0;
			if (l && k(s, t), c & 131072) It.add(s);
			else if (c & 2) {
				var u = s;
				j?.delete(u), c & 65536 || (c & 512 && (G === null || !(G.f & 2097152)) && (s.f |= ce), Ut(u, ee, n));
			} else if (l) {
				var d = s;
				c & 16 && M !== null && M.add(d), n === null ? Nt(d) : n.push(d);
			}
		}
	}
}
function Wt(e) {
	if (typeof e != "object" || !e || x in e) return e;
	let n = p(e);
	if (n !== d && n !== f) return e;
	var i = /* @__PURE__ */ new Map(), a = r(e), o = /* @__PURE__ */ P(0), s = null, c = Z, u = (e) => {
		if (Z === c) return e();
		var t = H, n = Z;
		W(null), Fn(c);
		var r = e();
		return W(t), Fn(n), r;
	};
	return a && i.set("length", /* @__PURE__ */ P(e.length, s)), new Proxy(e, {
		defineProperty(e, t, n) {
			(!("value" in n) || n.configurable === !1 || n.enumerable === !1 || n.writable === !1) && De();
			var r = i.get(t);
			return r === void 0 ? u(() => {
				var e = /* @__PURE__ */ P(n.value, s);
				return i.set(t, e), e;
			}) : F(r, n.value, !0), !0;
		},
		deleteProperty(e, n) {
			var r = i.get(n);
			if (r === void 0) {
				if (n in e) {
					let e = u(() => /* @__PURE__ */ P(t, s));
					i.set(n, e), Ht(o);
				}
			} else F(r, t), Ht(o);
			return !0;
		},
		get(n, r, a) {
			if (r === x) return e;
			var o = i.get(r), c = r in n;
			if (o === void 0 && (!c || l(n, r)?.writable) && (o = u(() => /* @__PURE__ */ P(Wt(c ? n[r] : t), s)), i.set(r, o)), o !== void 0) {
				var d = Q(o);
				return d === t ? void 0 : d;
			}
			return Reflect.get(n, r, a);
		},
		getOwnPropertyDescriptor(e, n) {
			var r = Reflect.getOwnPropertyDescriptor(e, n);
			if (r && "value" in r) {
				var a = i.get(n);
				a && (r.value = Q(a));
			} else if (r === void 0) {
				var o = i.get(n), s = o?.v;
				if (o !== void 0 && s !== t) return {
					enumerable: !0,
					configurable: !0,
					value: s,
					writable: !0
				};
			}
			return r;
		},
		has(e, n) {
			if (n === x) return !0;
			var r = i.get(n), a = r !== void 0 && r.v !== t || Reflect.has(e, n);
			return (r !== void 0 || G !== null && (!a || l(e, n)?.writable)) && (r === void 0 && (r = u(() => /* @__PURE__ */ P(a ? Wt(e[n]) : t, s)), i.set(n, r)), Q(r) === t) ? !1 : a;
		},
		set(e, n, r, c) {
			var d = i.get(n), f = n in e;
			if (a && n === "length") for (var p = r; p < d.v; p += 1) {
				var m = i.get(p + "");
				m === void 0 ? p in e && (m = u(() => /* @__PURE__ */ P(t, s)), i.set(p + "", m)) : F(m, t);
			}
			if (d === void 0) (!f || l(e, n)?.writable) && (d = u(() => /* @__PURE__ */ P(void 0, s)), F(d, Wt(r)), i.set(n, d));
			else {
				f = d.v !== t;
				var h = u(() => Wt(r));
				F(d, h);
			}
			var g = Reflect.getOwnPropertyDescriptor(e, n);
			if (g?.set && g.set.call(c, r), !f) {
				if (a && typeof n == "string") {
					var _ = i.get("length"), v = Number(n);
					Number.isInteger(v) && v >= _.v && F(_, v + 1);
				}
				Ht(o);
			}
			return !0;
		},
		ownKeys(e) {
			Q(o);
			var n = Reflect.ownKeys(e).filter((e) => {
				var n = i.get(e);
				return n === void 0 || n.v !== t;
			});
			for (var [r, a] of i) a.v !== t && !(r in e) && n.push(r);
			return n;
		},
		setPrototypeOf() {
			Oe();
		}
	});
}
var Gt, Kt, qt, Jt;
function Yt() {
	if (Gt === void 0) {
		Gt = window, Kt = /Firefox/.test(navigator.userAgent);
		var e = Element.prototype, t = Node.prototype, n = Text.prototype;
		qt = l(t, "firstChild").get, Jt = l(t, "nextSibling").get, m(e) && (e[he] = void 0, e[me] = null, e[ge] = void 0, e.__e = void 0), m(n) && (n[_e] = void 0);
	}
}
function I(e = "") {
	return document.createTextNode(e);
}
/*@__NO_SIDE_EFFECTS__*/
function Xt(e) {
	return qt.call(e);
}
/*@__NO_SIDE_EFFECTS__*/
function L(e) {
	return Jt.call(e);
}
function Zt(e, t) {
	if (!S) return /* @__PURE__ */ Xt(e);
	var n = /* @__PURE__ */ Xt(C);
	if (n === null) n = C.appendChild(I());
	else if (t && n.nodeType !== 3) {
		var r = I();
		return n?.before(r), w(r), r;
	}
	return t && rn(n), w(n), n;
}
function Qt(e, t = !1) {
	if (!S) {
		var n = /* @__PURE__ */ Xt(e);
		return n instanceof Comment && n.data === "" ? /* @__PURE__ */ L(n) : n;
	}
	if (t) {
		if (C?.nodeType !== 3) {
			var r = I();
			return C?.before(r), w(r), r;
		}
		rn(C);
	}
	return C;
}
function $t(e, t = 1, n = !1) {
	let r = S ? C : e;
	for (var i; t--;) i = r, r = /* @__PURE__ */ L(r);
	if (!S) return r;
	if (n) {
		if (r?.nodeType !== 3) {
			var a = I();
			return r === null ? i?.after(a) : r.before(a), w(a), a;
		}
		rn(r);
	}
	return w(r), r;
}
function en(e) {
	e.textContent = "";
}
function tn() {
	return !1;
}
function nn(e, t, n) {
	return t == null || t === "http://www.w3.org/1999/xhtml" ? n ? document.createElement(e, { is: n }) : document.createElement(e) : n ? document.createElementNS(t, e, { is: n }) : document.createElementNS(t, e);
}
function rn(e) {
	if (e.nodeValue.length < 65536) return;
	let t = e.nextSibling;
	for (; t !== null && t.nodeType === 3;) t.remove(), e.nodeValue += t.nodeValue, t = e.nextSibling;
}
//#endregion
//#region node_modules/svelte/src/internal/client/reactivity/effects.js
function an(e) {
	G === null && (H === null && Ce(e), Se()), V && xe(e);
}
function on(e, t) {
	var n = t.last;
	n === null ? t.last = t.first = e : (n.next = e, e.prev = n, t.last = e);
}
function R(e, t) {
	var n = G;
	n !== null && n.f & 8192 && (e |= te);
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
	if (e & 4) Tt === null ? kt.ensure().schedule(r) : Tt.push(r);
	else if (t !== null) {
		try {
			Hn(r);
		} catch (e) {
			throw B(r), e;
		}
		i.deps === null && i.teardown === null && i.nodes === null && i.first === i.last && !(i.f & 524288) && (i = i.first, e & 16 && e & 65536 && i !== null && (i.f |= ae));
	}
	if (i !== null && (i.parent = n, n !== null && on(i, n), H !== null && H.f & 2 && !(e & 64))) {
		var a = H;
		(a.effects ??= []).push(i);
	}
	return r;
}
function sn() {
	return H !== null && !U;
}
function cn(e) {
	let t = R(8, null);
	return k(t, y), t.teardown = e, t;
}
function ln(e) {
	an("$effect");
	var t = G.f;
	if (!H && t & 32 && T !== null && !T.i) {
		var n = T;
		(n.e ??= []).push(e);
	} else return un(e);
}
function un(e) {
	return R(4 | se, e);
}
function dn(e) {
	kt.ensure();
	let t = R(64 | oe, e);
	return () => {
		B(t);
	};
}
function fn(e) {
	kt.ensure();
	let t = R(64 | oe, e);
	return (e = {}) => new Promise((n) => {
		e.outro ? Cn(t, () => {
			B(t), n(void 0);
		}) : (B(t), n(void 0));
	});
}
function pn(e) {
	return R(4, e);
}
function mn(e) {
	return R(ue | oe, e);
}
function hn(e, t = 0) {
	return R(8 | t, e);
}
function gn(e, t = [], n = [], r = []) {
	st(r, t, n, (t) => {
		R(8, () => {
			e(...t.map(Q));
		});
	});
}
function _n(e, t = 0) {
	return R(16 | t, e);
}
function z(e) {
	return R(32 | oe, e);
}
function vn(e) {
	var t = e.teardown;
	if (t !== null) {
		let e = V, n = H;
		An(!0), W(null);
		try {
			t.call(null);
		} finally {
			An(e), W(n);
		}
	}
}
function yn(e, t = !1) {
	var n = e.first;
	for (e.first = e.last = null; n !== null;) {
		let e = n.ac;
		e !== null && nt(() => {
			e.abort(ve);
		});
		var r = n.next;
		n.f & 64 ? n.parent = null : B(n, t), n = r;
	}
}
function bn(e) {
	for (var t = e.first; t !== null;) {
		var n = t.next;
		t.f & 32 || B(t), t = n;
	}
}
function B(e, t = !0) {
	var n = !1;
	(t || e.f & 262144) && e.nodes !== null && e.nodes.end !== null && (xn(e.nodes.start, e.nodes.end), n = !0), e.f |= ie, yn(e, t && !n), Vn(e, 0);
	var r = e.nodes && e.nodes.t;
	if (r !== null) for (let e of r) e.stop();
	vn(e), e.f ^= ie, e.f |= ne;
	var i = e.parent;
	i !== null && i.first !== null && Sn(e), e.next = e.prev = e.teardown = e.ctx = e.deps = e.fn = e.nodes = e.ac = e.b = null;
}
function xn(e, t) {
	for (; e !== null;) {
		var n = e === t ? null : /* @__PURE__ */ L(e);
		e.remove(), e = n;
	}
}
function Sn(e) {
	var t = e.parent, n = e.prev, r = e.next;
	n !== null && (n.next = r), r !== null && (r.prev = n), t !== null && (t.first === e && (t.first = r), t.last === e && (t.last = n));
}
function Cn(e, t, n = !0) {
	var r = [];
	wn(e, r, !0);
	var i = () => {
		n && B(e), t && t();
	}, a = r.length;
	if (a > 0) {
		var o = () => --a || i();
		for (var s of r) s.out(o);
	} else i();
}
function wn(e, t, n) {
	if (!(e.f & 8192)) {
		e.f ^= te;
		var r = e.nodes && e.nodes.t;
		if (r !== null) for (let e of r) (e.is_global || n) && t.push(e);
		for (var i = e.first; i !== null;) {
			var a = i.next;
			if (!(i.f & 64)) {
				var o = !!(i.f & 65536) || !!(i.f & 32) && !!(e.f & 16);
				wn(i, t, o ? n : !1);
			}
			i = a;
		}
	}
}
function Tn(e) {
	En(e, !0);
}
function En(e, t) {
	if (e.f & 8192) {
		e.f ^= te, e.f & 1024 || (k(e, b), kt.ensure().schedule(e));
		for (var n = e.first; n !== null;) {
			var r = n.next, i = !!(n.f & 65536) || !!(n.f & 32);
			En(n, i ? t : !1), n = r;
		}
		var a = e.nodes && e.nodes.t;
		if (a !== null) for (let e of a) (e.is_global || t) && e.in();
	}
}
function Dn(e, t) {
	if (e.nodes) for (var n = e.nodes.start, r = e.nodes.end; n !== null;) {
		var i = n === r ? null : /* @__PURE__ */ L(n);
		t.append(n), n = i;
	}
}
//#endregion
//#region node_modules/svelte/src/internal/client/legacy.js
var On = null, kn = !1, V = !1;
function An(e) {
	V = e;
}
var H = null, U = !1;
function W(e) {
	H = e;
}
var G = null;
function K(e) {
	G = e;
}
var q = null;
function jn(e) {
	H !== null && (q ??= /* @__PURE__ */ new Set()).add(e);
}
var J = null, Y = 0, X = null;
function Mn(e) {
	X = e;
}
var Nn = 1, Pn = 0, Z = Pn;
function Fn(e) {
	Z = e;
}
function In() {
	return ++Nn;
}
function Ln(e) {
	var t = e.f;
	if (t & 2048) return !0;
	if (t & 2 && (e.f &= ~ce), t & 4096) {
		for (var n = e.deps, r = n.length, i = 0; i < r; i++) {
			var a = n[i];
			if (Ln(a) && _t(a), a.wv > e.wv) return !0;
		}
		t & 512 && j === null && k(e, y);
	}
	return !1;
}
function Rn(e, t, n = !0) {
	var r = e.reactions;
	if (r !== null && !(q !== null && q.has(e))) for (var i = 0; i < r.length; i++) {
		var a = r[i];
		a.f & 2 ? Rn(a, t, !1) : t === a && (n ? k(a, b) : a.f & 1024 && k(a, ee), Nt(a));
	}
}
function zn(e) {
	var t = J, n = Y, r = X, i = H, a = q, o = T, s = U, c = Z, l = e.f;
	J = null, Y = 0, X = null, H = l & 96 ? null : e, q = null, Ue(e.ctx), U = !1, Z = ++Pn, e.ac !== null && (nt(() => {
		e.ac.abort(ve);
	}), e.ac = null);
	try {
		e.f |= le;
		var u = e.fn, d = u();
		e.f |= re;
		var f = e.deps, p = A?.is_fork;
		if (J !== null) {
			var m;
			if (p || Vn(e, Y), f !== null && Y > 0) for (f.length = Y + J.length, m = 0; m < J.length; m++) f[Y + m] = J[m];
			else e.deps = f = J;
			if (sn() && e.f & 512) for (m = Y; m < f.length; m++) (f[m].reactions ??= []).push(e);
		} else !p && f !== null && Y < f.length && (Vn(e, Y), f.length = Y);
		if (Ke() && X !== null && !U && f !== null && !(e.f & 6146)) for (m = 0; m < X.length; m++) Rn(X[m], e);
		if (i !== null && i !== e) {
			if (Pn++, i.deps !== null) for (let e = 0; e < n; e += 1) i.deps[e].rv = Pn;
			if (t !== null) for (let e of t) e.rv = Pn;
			X !== null && (r === null ? r = X : r.push(...X));
		}
		return e.f & 8388608 && (e.f ^= de), d;
	} catch (e) {
		return Ye(e);
	} finally {
		e.f ^= le, J = t, Y = n, X = r, H = i, q = a, Ue(o), U = s, Z = c;
	}
}
function Bn(e, n) {
	let r = n.reactions;
	if (r !== null) {
		var o = i.call(r, e);
		if (o !== -1) {
			var s = r.length - 1;
			s === 0 ? r = n.reactions = null : (r[o] = r[s], r.pop());
		}
	}
	if (r === null && n.f & 2 && (J === null || !a.call(J, n))) {
		var c = n;
		c.f & 512 && (c.f ^= 512, c.f &= ~ce), c.v !== t && Ze(c), c.ac !== null && nt(() => {
			c.ac.abort(ve), c.ac = null, k(c, b);
		}), vt(c), Vn(c, 0);
	}
}
function Vn(e, t) {
	var n = e.deps;
	if (n !== null) for (var r = t; r < n.length; r++) Bn(e, n[r]);
}
function Hn(e) {
	var t = e.f;
	if (!(t & 16384)) {
		k(e, y);
		var n = G, r = kn;
		G = e, kn = !(t & 96);
		try {
			t & 16777232 ? bn(e) : yn(e), vn(e);
			var i = zn(e);
			e.teardown = typeof i == "function" ? i : null, e.wv = Nn;
		} finally {
			kn = r, G = n;
		}
	}
}
function Q(e) {
	var t = !!(e.f & 2);
	if (On?.add(e), H !== null && !U && !(G !== null && G.f & 16384) && (q === null || !q.has(e))) {
		var n = H.deps;
		if (H.f & 2097152) e.rv < Pn && (e.rv = Pn, J === null && n !== null && n[Y] === e ? Y++ : J === null ? J = [e] : J.push(e));
		else {
			H.deps ??= [], a.call(H.deps, e) || H.deps.push(e);
			var r = e.reactions;
			r === null ? e.reactions = [H] : a.call(r, H) || r.push(H);
		}
	}
	if (V && N.has(e)) return N.get(e);
	if (t) {
		var i = e;
		if (V) {
			var o = i.v;
			return (!(i.f & 1024) && i.reactions !== null || Wn(i)) && (o = gt(i)), N.set(i, o), o;
		}
		var s = !(i.f & 512) && !U && H !== null && (kn || !!(H.f & 512)), c = (i.f & re) === 0;
		Ln(i) && (s && (i.f |= 512), _t(i)), s && !c && (yt(i), Un(i));
	}
	if (j?.has(e)) return j.get(e);
	if (e.f & 8388608) throw e.v;
	return e.v;
}
function Un(e) {
	if (e.f |= 512, e.deps !== null) for (let t of e.deps) (t.reactions ??= []).push(e), t.f & 2 && !(t.f & 512) && (yt(t), Un(t));
}
function Wn(e) {
	if (e.v === t) return !0;
	if (e.deps === null) return !1;
	for (let t of e.deps) if (N.has(t) || t.f & 2 && Wn(t)) return !0;
	return !1;
}
function Gn(e) {
	var t = U;
	try {
		return U = !0, e();
	} finally {
		U = t;
	}
}
function Kn(e) {
	if (!(typeof e != "object" || !e || e instanceof EventTarget)) {
		if (x in e) qn(e);
		else if (!Array.isArray(e)) for (let t in e) {
			let n = e[t];
			typeof n == "object" && n && x in n && qn(n);
		}
	}
}
function qn(e, t = /* @__PURE__ */ new Set()) {
	if (typeof e == "object" && e && !(e instanceof EventTarget) && !t.has(e)) {
		t.add(e), e instanceof Date && e.getTime();
		for (let n in e) try {
			qn(e[n], t);
		} catch {}
		let n = p(e);
		if (n !== Object.prototype && n !== Array.prototype && n !== Map.prototype && n !== Set.prototype && n !== Date.prototype) {
			let t = u(n);
			for (let n in t) {
				let r = t[n].get;
				if (r) try {
					r.call(e);
				} catch {}
			}
		}
	}
}
//#endregion
//#region node_modules/svelte/src/internal/client/dom/elements/events.js
var Jn = Symbol("events"), Yn = /* @__PURE__ */ new Set(), Xn = /* @__PURE__ */ new Set();
function Zn(e, t, n, r = {}) {
	function i(e) {
		if (r.capture || rr.call(t, e), !e.cancelBubble) return nt(() => n?.call(this, e));
	}
	return e.startsWith("pointer") || e.startsWith("touch") || e === "wheel" ? D(() => {
		t.addEventListener(e, i, r);
	}) : t.addEventListener(e, i, r), i;
}
function Qn(e, t, n, r = {}) {
	var i = Zn(t, e, n, r);
	return () => {
		e.removeEventListener(t, i, r);
	};
}
function $n(e, t, n, r, i) {
	var a = {
		capture: r,
		passive: i
	}, o = Zn(e, t, n, a);
	(t === document.body || t === window || t === document || t instanceof HTMLMediaElement) && cn(() => {
		t.removeEventListener(e, o, a);
	});
}
function er(e, t, n) {
	(t[Jn] ??= {})[e] = n;
}
function tr(e) {
	for (var t = 0; t < e.length; t++) Yn.add(e[t]);
	for (var n of Xn) n(e);
}
var nr = null;
function rr(e) {
	var t = this, n = t.ownerDocument, r = e.type, i = e.composedPath?.() || [], a = i[0] || e.target;
	nr = e;
	var o = 0, s = nr === e && e[Jn];
	if (s) {
		var l = i.indexOf(s);
		if (l !== -1 && (t === document || t === window)) {
			e[Jn] = t;
			return;
		}
		var u = i.indexOf(t);
		if (u === -1) return;
		l <= u && (o = l);
	}
	if (a = i[o] || e.target, a !== t) {
		c(e, "currentTarget", {
			configurable: !0,
			get() {
				return a || n;
			}
		});
		var d = H, f = G;
		W(null), K(null);
		try {
			for (var p, m = []; a !== null && a !== t;) {
				try {
					var h = a[Jn]?.[r];
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
			e[Jn] = t, delete e.currentTarget, W(d), K(f);
		}
	}
}
//#endregion
//#region node_modules/svelte/src/internal/client/dom/reconciler.js
var ir = globalThis?.window?.trustedTypes && /* @__PURE__ */ globalThis.window.trustedTypes.createPolicy("svelte-trusted-html", { createHTML: (e) => e });
function ar(e) {
	return ir?.createHTML(e) ?? e;
}
function or(e) {
	var t = nn("template");
	return t.innerHTML = ar(e.replaceAll("<!>", "<!---->")), t.content;
}
//#endregion
//#region node_modules/svelte/src/internal/client/dom/template.js
function sr(e, t) {
	var n = G;
	n.nodes === null && (n.nodes = {
		start: e,
		end: t,
		a: null,
		t: null
	});
}
/*#__NO_SIDE_EFFECTS__*/
function cr(e, t) {
	var n = !!(t & 1), r = !!(t & 2), i, a = !e.startsWith("<!>");
	return () => {
		if (S) return sr(C, null), C;
		i === void 0 && (i = or(a ? e : "<!>" + e), n || (i = /* @__PURE__ */ Xt(i)));
		var t = r || Kt ? document.importNode(i, !0) : i.cloneNode(!0);
		if (n) {
			var o = /* @__PURE__ */ Xt(t), s = t.lastChild;
			sr(o, s);
		} else sr(t, t);
		return t;
	};
}
function lr() {
	if (S) return sr(C, null), C;
	var e = document.createDocumentFragment(), t = document.createComment(""), n = I();
	return e.append(t, n), sr(t, n), e;
}
function ur(e, t) {
	if (S) {
		var n = G;
		(!(n.f & 32768) || n.nodes.end === null) && (n.nodes.end = C), Fe();
		return;
	}
	e !== null && e.before(t);
}
function dr() {
	if (S && C && C.nodeType === 8 && C.textContent?.startsWith("$")) {
		let e = C.textContent.substring(1);
		return Fe(), e;
	}
	return (window.__svelte ??= {}).uid ??= 1, `c${window.__svelte.uid++}`;
}
[.../* @__PURE__ */ "allowfullscreen.async.autofocus.autoplay.checked.controls.default.disabled.formnovalidate.indeterminate.inert.ismap.loop.multiple.muted.nomodule.novalidate.open.playsinline.readonly.required.reversed.seamless.selected.webkitdirectory.defer.disablepictureinpicture.disableremoteplayback".split(".")];
var fr = ["touchstart", "touchmove"];
function pr(e) {
	return fr.includes(e);
}
//#endregion
//#region node_modules/svelte/src/internal/client/render.js
var mr = !0;
function hr(e, t) {
	var n = t == null ? "" : typeof t == "object" ? `${t}` : t;
	n !== (e[_e] ??= e.nodeValue) && (e[_e] = n, e.nodeValue = `${n}`);
}
function gr(e, t) {
	return yr(e, t);
}
function _r(t, n) {
	Yt(), n.intro = n.intro ?? !1;
	let r = n.target, i = S, a = C;
	try {
		for (var o = /* @__PURE__ */ Xt(r); o && (o.nodeType !== 8 || o.data !== "[");) o = /* @__PURE__ */ L(o);
		if (!o) throw e;
		Pe(!0), w(o);
		let i = yr(t, {
			...n,
			anchor: o
		});
		return Pe(!1), i;
	} catch (i) {
		if (i instanceof Error && i.message.split("\n").some((e) => e.startsWith("https://svelte.dev/e/"))) throw i;
		return i !== e && console.warn("Failed to hydrate: ", i), n.recover === !1 && Te(), Yt(), en(r), Pe(!1), gr(t, n);
	} finally {
		Pe(i), w(a);
	}
}
var vr = /* @__PURE__ */ new Map();
function yr(t, { target: n, anchor: r, props: i = {}, events: a, context: s, intro: c = !0, transformError: l }) {
	Yt();
	var u = void 0, d = fn(() => {
		var d = r ?? n.appendChild(I());
		at(d, { pending: () => {} }, (n) => {
			We({});
			var r = T;
			if (s && (r.c = s), a && (i.$$events = a), S && sr(n, null), mr = c, u = t(n, i) || {}, mr = !0, S && (G.nodes.end = C, C === null || C.nodeType !== 8 || C.data !== "]")) throw Me(), e;
			Ge();
		}, l);
		var f = /* @__PURE__ */ new Set(), p = (e) => {
			for (var t = 0; t < e.length; t++) {
				var r = e[t];
				if (!f.has(r)) {
					f.add(r);
					var i = pr(r);
					for (let e of [n, document]) {
						var a = vr.get(e);
						a === void 0 && (a = /* @__PURE__ */ new Map(), vr.set(e, a));
						var o = a.get(r);
						o === void 0 ? (e.addEventListener(r, rr, { passive: i }), a.set(r, 1)) : a.set(r, o + 1);
					}
				}
			}
		};
		return p(o(Yn)), Xn.add(p), () => {
			for (var e of f) for (let r of [n, document]) {
				var t = vr.get(r), i = t.get(e);
				--i == 0 ? (r.removeEventListener(e, rr), t.delete(e), t.size === 0 && vr.delete(r)) : t.set(e, i);
			}
			Xn.delete(p), d !== r && d.parentNode?.removeChild(d);
		};
	});
	return br.set(u, d), u;
}
var br = /* @__PURE__ */ new WeakMap();
function xr(e, t) {
	let n = br.get(e);
	return n ? (br.delete(e), n(t)) : Promise.resolve();
}
//#endregion
//#region node_modules/svelte/src/internal/client/dom/blocks/branches.js
var Sr = class {
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
			if (n) Tn(n), this.#r.delete(t);
			else {
				var r = this.#n.get(t);
				r && (Tn(r.effect), this.#t.set(t, r.effect), this.#n.delete(t), r.fragment.lastChild.remove(), this.anchor.before(r.fragment), n = r.effect);
			}
			for (let [t, n] of this.#e) {
				if (this.#e.delete(t), t === e) break;
				let r = this.#n.get(n);
				r && (B(r.effect), this.#n.delete(n));
			}
			for (let [e, r] of this.#t) {
				if (e === t || this.#r.has(e)) continue;
				let i = () => {
					if (Array.from(this.#e.values()).includes(e)) {
						var t = document.createDocumentFragment();
						Dn(r, t), t.append(I()), this.#n.set(e, {
							effect: r,
							fragment: t
						});
					} else B(r);
					this.#r.delete(e), this.#t.delete(e);
				};
				this.#i || !n ? (this.#r.add(e), Cn(r, i, !1)) : i();
			}
		}
	};
	#o = (e) => {
		this.#e.delete(e);
		let t = Array.from(this.#e.values());
		for (let [e, n] of this.#n) t.includes(e) || (B(n.effect), this.#n.delete(e));
	};
	ensure(e, t) {
		var n = A, r = tn();
		if (t && !this.#t.has(e) && !this.#n.has(e)) {
			if (r) {
				var i = document.createDocumentFragment(), a = I();
				i.append(a), this.#n.set(e, {
					effect: z(() => t(a)),
					fragment: i
				});
			} else this.#t.set(e, z(() => t(this.anchor)));
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
function Cr(e, t, ...n) {
	var r = new Sr(e);
	_n(() => {
		let e = t() ?? null;
		r.ensure(e, e && ((t) => e(t, ...n)));
	}, ae);
}
//#endregion
//#region node_modules/svelte/src/internal/client/dom/blocks/if.js
function wr(e, t, n = !1) {
	var r;
	S && (r = C, Fe());
	var i = new Sr(e), a = n ? ae : 0;
	function o(e, t) {
		if (S) {
			var n = ze(r);
			if (e !== parseInt(n.substring(1))) {
				var a = Re();
				w(a), i.anchor = a, Pe(!1), i.ensure(e, t), Pe(!0);
				return;
			}
		}
		i.ensure(e, t);
	}
	_n(() => {
		var e = !1;
		t((t, n = 0) => {
			e = !0, o(n, t);
		}), e || o(-1, null);
	}, a);
}
//#endregion
//#region node_modules/svelte/src/internal/client/timing.js
var Tr = () => performance.now(), $ = {
	tick: (e) => requestAnimationFrame(e),
	now: () => Tr(),
	tasks: /* @__PURE__ */ new Set()
};
//#endregion
//#region node_modules/svelte/src/internal/client/loop.js
function Er() {
	let e = $.now();
	$.tasks.forEach((t) => {
		t.c(e) || ($.tasks.delete(t), t.f());
	}), $.tasks.size !== 0 && $.tick(Er);
}
function Dr(e) {
	let t;
	return $.tasks.size === 0 && $.tick(Er), {
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
function Or(e, t) {
	nt(() => {
		e.dispatchEvent(new CustomEvent(t));
	});
}
function kr(e) {
	if (e === "float") return "cssFloat";
	if (e === "offset") return "cssOffset";
	if (e.startsWith("--")) return e;
	let t = e.split("-");
	return t.length === 1 ? t[0] : t[0] + t.slice(1).map((e) => e[0].toUpperCase() + e.slice(1)).join("");
}
function Ar(e) {
	let t = {}, n = e.split(";");
	for (let e of n) {
		let [n, r] = e.split(":");
		if (!n || r === void 0) break;
		let i = kr(n.trim());
		t[i] = r.trim();
	}
	return t;
}
var jr = (e) => e;
function Mr(e, t, n, r) {
	var i = !!(e & 1), a = !!(e & 2), o = i && a, s = !!(e & 4), c = o ? "both" : i ? "in" : "out", l, u = t.inert, d = t.style.overflow, f, p;
	function m() {
		return nt(() => l ??= n()(t, r?.() ?? {}, { direction: c }));
	}
	var h = {
		is_global: s,
		in() {
			if (t.inert = u, !i) {
				p?.abort(), p?.reset?.();
				return;
			}
			a || f?.abort(), f = Nr(t, m(), p, 1, () => {
				Or(t, "introstart");
			}, () => {
				Or(t, "introend"), f?.abort(), f = l = void 0, t.style.overflow = d;
			});
		},
		out(e) {
			if (!a) {
				e?.(), l = void 0;
				return;
			}
			t.inert = !0, p = Nr(t, m(), f, 0, () => {
				Or(t, "outrostart");
			}, () => {
				Or(t, "outroend"), e?.();
			});
		},
		stop: () => {
			f?.abort(), p?.abort();
		}
	}, g = G;
	if ((g.nodes.t ??= []).push(h), i && mr) {
		var _ = s;
		if (!_) {
			for (var v = g.parent; v && v.f & 65536;) for (; (v = v.parent) && !(v.f & 16););
			_ = !v || !!(v.f & 32768);
		}
		_ && pn(() => {
			Gn(() => h.in());
		});
	}
}
function Nr(e, t, n, r, i, a) {
	var o = r === 1;
	if (h(t)) {
		var s, c = !1;
		return D(() => {
			c || (s = Nr(e, t({ direction: o ? "in" : "out" }), n, r, i, a));
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
	let { delay: l = 0, css: u, tick: d, easing: f = jr } = t;
	var p = [];
	if (o && n === void 0 && (d && d(0, 1), u)) {
		var m = Ar(u(0, 1));
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
				var g = o + s * f(h / m), y = Ar(u(g, 1 - g));
				l.push(y), p ||= y.overflow === "hidden";
			}
			p && (e.style.overflow = "hidden"), _ = () => {
				var e = v.currentTime;
				return o + s * f(e / c);
			}, d && Dr(() => {
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
function Pr(e, t) {
	pn(() => {
		var n = e.getRootNode(), r = n.host ? n : n.head ?? n.ownerDocument.head;
		if (!r.querySelector("#" + t.hash)) {
			let e = nn("style");
			e.id = t.hash, e.textContent = t.code, r.appendChild(e);
		}
	});
}
//#endregion
//#region node_modules/svelte/src/internal/client/dom/elements/actions.js
function Fr(e, t, n) {
	pn(() => {
		var r = Gn(() => t(e, n?.()) || {});
		if (n && r?.update) {
			var i = !1, a = {};
			hn(() => {
				var e = n();
				Kn(e), i && Ve(a, e) && (a = e, r.update(e));
			}), i = !0;
		}
		if (r?.destroy) return () => r.destroy();
	});
}
//#endregion
//#region node_modules/svelte/src/internal/shared/attributes.js
var Ir = [..." 	\n\r\f\xA0\v﻿"];
function Lr(e, t, n) {
	var r = e == null ? "" : "" + e;
	if (t && (r = r ? r + " " + t : t), n) {
		for (var i of Object.keys(n)) if (n[i]) r = r ? r + " " + i : i;
		else if (r.length) for (var a = i.length, o = 0; (o = r.indexOf(i, o)) >= 0;) {
			var s = o + a;
			(o === 0 || Ir.includes(r[o - 1])) && (s === r.length || Ir.includes(r[s])) ? r = (o === 0 ? "" : r.substring(0, o)) + r.substring(s + 1) : o = s;
		}
	}
	return r === "" ? null : r;
}
//#endregion
//#region node_modules/svelte/src/internal/client/dom/elements/class.js
function Rr(e, t, n, r, i, a) {
	var o = e[he];
	if (S || o !== n || o === void 0) {
		var s = Lr(n, r, a);
		(!S || s !== e.getAttribute("class")) && (s == null ? e.removeAttribute("class") : t ? e.className = s : e.setAttribute("class", s)), e[he] = n;
	} else if (a && i !== a) for (var c in a) {
		var l = !!a[c];
		(i == null || l !== !!i[c]) && e.classList.toggle(c, l);
	}
	return a;
}
//#endregion
//#region node_modules/svelte/src/internal/client/dom/elements/attributes.js
var zr = Symbol("is custom element"), Br = Symbol("is html"), Vr = ye ? "link" : "LINK";
function Hr(e, t, n, r) {
	var i = Ur(e);
	S && (i[t] = e.getAttribute(t), t === "src" || t === "srcset" || t === "href" && e.nodeName === Vr) || i[t] !== (i[t] = n) && (t === "loading" && (e[pe] = n), n == null ? e.removeAttribute(t) : typeof n != "string" && Gr(e).includes(t) ? e[t] = n : e.setAttribute(t, n));
}
function Ur(e) {
	return e[me] ??= {
		[zr]: e.nodeName.includes("-"),
		[Br]: e.namespaceURI === n
	};
}
var Wr = /* @__PURE__ */ new Map();
function Gr(e) {
	var t = e.getAttribute("is") || e.nodeName, n = Wr.get(t);
	if (n) return n;
	Wr.set(t, n = []);
	for (var r, i = e, a = Element.prototype; a !== i;) {
		for (var o in r = u(i), r) r[o].set && o !== "innerHTML" && o !== "textContent" && o !== "innerText" && n.push(o);
		i = p(i);
	}
	return n;
}
//#endregion
//#region node_modules/svelte/src/internal/client/dom/elements/bindings/this.js
function Kr(e, t) {
	return e === t || e?.[x] === t;
}
function qr(e = {}, t, n, r) {
	var i = T.r, a = G;
	return pn(() => {
		var o, s;
		return hn(() => {
			o = s, s = r?.() || [], Gn(() => {
				Kr(n(...s), e) || (t(e, ...s), o && Kr(n(...o), e) && t(null, ...o));
			});
		}), () => {
			let r = a;
			for (; r !== i && r.parent !== null && r.parent.f & 33554432;) r = r.parent;
			let o = () => {
				s && Kr(n(...s), e) && t(null, ...s);
			}, c = r.teardown;
			r.teardown = () => {
				o(), c?.();
			};
		};
	}), e;
}
//#endregion
//#region node_modules/svelte/src/internal/client/reactivity/props.js
function Jr(e, t, n, r) {
	var i = !0, a = !!(n & 8), o = !!(n & 16), s = r, c = !0, u = void 0, d = () => o && i ? (u ??= /* @__PURE__ */ dt(r), Q(u)) : (c && (c = !1, s = o ? Gn(r) : r), s);
	let f;
	if (a) {
		var p = x in e || fe in e;
		f = l(e, t)?.set ?? (p && t in e ? (n) => e[t] = n : void 0);
	}
	var m, h = !1;
	a ? [m, h] = tt(() => e[t]) : m = e[t], m === void 0 && r !== void 0 && (m = d(), f && (i && Ee(t), f(m)));
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
	var v = !1, y = (n & 1 ? dt : mt)(() => (v = !1, g()));
	a && Q(y);
	var b = G;
	return (function(e, t) {
		if (arguments.length > 0) {
			let n = t ? Q(y) : i && a ? Wt(e) : e;
			return F(y, n), v = !0, s !== void 0 && (s = n), e;
		}
		return V && v || b.f & 16384 ? y.v : Q(y);
	});
}
//#endregion
//#region node_modules/svelte/src/legacy/legacy-client.js
function Yr(e) {
	return new Xr(e);
}
var Xr = class {
	#e;
	#t;
	constructor(e) {
		var t = /* @__PURE__ */ new Map(), n = (e, n) => {
			var r = /* @__PURE__ */ zt(n, !1, !1);
			return t.set(e, r), r;
		};
		let r = new Proxy({
			...e.props || {},
			$$events: {}
		}, {
			get(e, r) {
				return Q(t.get(r) ?? n(r, Reflect.get(e, r)));
			},
			has(e, r) {
				return r === fe || (Q(t.get(r) ?? n(r, Reflect.get(e, r))), Reflect.has(e, r));
			},
			set(e, r, i) {
				return F(t.get(r) ?? n(r, i), i), Reflect.set(e, r, i);
			}
		});
		this.#t = (e.hydrate ? _r : gr)(e.component, {
			target: e.target,
			anchor: e.anchor,
			props: r,
			context: e.context,
			intro: e.intro ?? !1,
			recover: e.recover,
			transformError: e.transformError
		}), (!e?.props?.$$host || e.sync === !1) && At(), this.#e = r.$$events;
		for (let e of Object.keys(this.#t)) e !== "$set" && e !== "$destroy" && e !== "$on" && c(this, e, {
			get() {
				return this.#t[e];
			},
			set(t) {
				this.#t[e] = t;
			},
			enumerable: !0
		});
		this.#t.$set = (e) => {
			Object.assign(r, e);
		}, this.#t.$destroy = () => {
			xr(this.#t);
		};
	}
	$set(e) {
		this.#t.$set(e);
	}
	$on(e, t) {
		this.#e[e] = this.#e[e] || [];
		let n = (...e) => t.call(this, ...e);
		return this.#e[e].push(n), () => {
			this.#e[e] = this.#e[e].filter((e) => e !== n);
		};
	}
	$destroy() {
		this.#t.$destroy();
	}
}, Zr;
typeof HTMLElement == "function" && (Zr = class extends HTMLElement {
	$$ctor;
	$$s;
	$$c;
	$$cn = !1;
	$$d = {};
	$$r = !1;
	$$p_d = {};
	$$l = {};
	$$l_u = /* @__PURE__ */ new Map();
	$$me;
	$$shadowRoot = null;
	constructor(e, t, n) {
		super(), this.$$ctor = e, this.$$s = t, n && (this.$$shadowRoot = this.attachShadow(n));
	}
	addEventListener(e, t, n) {
		if (this.$$l[e] = this.$$l[e] || [], this.$$l[e].push(t), this.$$c) {
			let n = this.$$c.$on(e, t);
			this.$$l_u.set(t, n);
		}
		super.addEventListener(e, t, n);
	}
	removeEventListener(e, t, n) {
		if (super.removeEventListener(e, t, n), this.$$c) {
			let e = this.$$l_u.get(t);
			e && (e(), this.$$l_u.delete(t));
		}
	}
	async connectedCallback() {
		if (this.$$cn = !0, !this.$$c) {
			if (await Promise.resolve(), !this.$$cn || this.$$c) return;
			function e(e) {
				return (t) => {
					let n = nn("slot");
					e !== "default" && (n.name = e), ur(t, n);
				};
			}
			let t = {}, n = $r(this);
			for (let r of this.$$s) r in n && (r === "default" && !this.$$d.children ? (this.$$d.children = e(r), t.default = !0) : t[r] = e(r));
			for (let e of this.attributes) {
				let t = this.$$g_p(e.name);
				t in this.$$d || (this.$$d[t] = Qr(t, e.value, this.$$p_d, "toProp"));
			}
			for (let e in this.$$p_d) !(e in this.$$d) && this[e] !== void 0 && (this.$$d[e] = this[e], delete this[e]);
			this.$$c = Yr({
				component: this.$$ctor,
				target: this.$$shadowRoot || this,
				props: {
					...this.$$d,
					$$slots: t,
					$$host: this
				}
			}), this.$$me = dn(() => {
				hn(() => {
					this.$$r = !0;
					for (let e of s(this.$$c)) {
						if (!this.$$p_d[e]?.reflect) continue;
						this.$$d[e] = this.$$c[e];
						let t = Qr(e, this.$$d[e], this.$$p_d, "toAttribute");
						t == null ? this.removeAttribute(this.$$p_d[e].attribute || e) : this.setAttribute(this.$$p_d[e].attribute || e, t);
					}
					this.$$r = !1;
				});
			});
			for (let e in this.$$l) for (let t of this.$$l[e]) {
				let n = this.$$c.$on(e, t);
				this.$$l_u.set(t, n);
			}
			this.$$l = {};
		}
	}
	attributeChangedCallback(e, t, n) {
		this.$$r || (e = this.$$g_p(e), this.$$d[e] = Qr(e, n, this.$$p_d, "toProp"), this.$$c?.$set({ [e]: this.$$d[e] }));
	}
	disconnectedCallback() {
		this.$$cn = !1, Promise.resolve().then(() => {
			!this.$$cn && this.$$c && (this.$$c.$destroy(), this.$$me(), this.$$c = void 0);
		});
	}
	$$g_p(e) {
		return s(this.$$p_d).find((t) => this.$$p_d[t].attribute === e || !this.$$p_d[t].attribute && t.toLowerCase() === e) || e;
	}
});
function Qr(e, t, n, r) {
	let i = n[e]?.type;
	if (t = i === "Boolean" && typeof t != "boolean" ? t != null : t, !r || !n[e]) return t;
	if (r === "toAttribute") switch (i) {
		case "Object":
		case "Array": return t == null ? null : JSON.stringify(t);
		case "Boolean": return t ? "" : null;
		case "Number": return t ?? null;
		default: return t;
	}
	else switch (i) {
		case "Object":
		case "Array": return t && JSON.parse(t);
		case "Boolean": return t;
		case "Number": return t == null ? t : +t;
		default: return t;
	}
}
function $r(e) {
	let t = {};
	return e.childNodes.forEach((e) => {
		t[e.slot || "default"] = !0;
	}), t;
}
function ei(e, t, n, r, i, a) {
	let o = class extends Zr {
		constructor() {
			super(e, n, i), this.$$p_d = t;
		}
		static get observedAttributes() {
			return s(t).map((e) => (t[e].attribute || e).toLowerCase());
		}
	};
	return s(t).forEach((e) => {
		c(o.prototype, e, {
			get() {
				return this.$$c && e in this.$$c ? this.$$c[e] : this.$$d[e];
			},
			set(n) {
				n = Qr(e, n, t), this.$$d[e] = n;
				var r = this.$$c;
				r && (l(r, e)?.get ? r[e] = n : r.$set({ [e]: n }));
			}
		});
	}), r.forEach((e) => {
		c(o.prototype, e, { get() {
			return this.$$c?.[e];
		} });
	}), a && (o = a(o)), e.element = o, o;
}
//#endregion
//#region node_modules/svelte/src/transition/index.js
var ti = (e) => e;
function ni(e) {
	let t = e - 1;
	return t * t * t + 1;
}
function ri(e) {
	let t = typeof e == "string" && e.match(/^\s*(-?[\d.]+)([^\s]*)\s*$/);
	return t ? [parseFloat(t[1]), t[2] || "px"] : [e, "px"];
}
function ii(e, { delay: t = 0, duration: n = 400, easing: r = ti } = {}) {
	let i = +getComputedStyle(e).opacity;
	return {
		delay: t,
		duration: n,
		easing: r,
		css: (e) => `opacity: ${e * i}`
	};
}
function ai(e, { delay: t = 0, duration: n = 400, easing: r = ni, x: i = 0, y: a = 0, opacity: o = 0 } = {}) {
	let s = getComputedStyle(e), c = +s.opacity, l = s.transform === "none" ? "" : s.transform, u = c * (1 - o), [d, f] = ri(i), [p, m] = ri(a);
	return {
		delay: t,
		duration: n,
		easing: r,
		css: (e, t) => `
			transform: ${l} translate(${(1 - e) * d}${f}, ${(1 - e) * p}${m});
			opacity: ${c - u * t}`
	};
}
//#endregion
//#region node_modules/svelte/src/reactivity/reactive-value.js
var oi = class {
	#e;
	#t;
	constructor(e, t) {
		this.#e = e, this.#t = rt(t);
	}
	get current() {
		return this.#t(), this.#e();
	}
}, si = /\(.+\)/, ci = /* @__PURE__ */ new Set([
	"all",
	"print",
	"screen",
	"and",
	"or",
	"not",
	"only"
]), li = /*@__PURE__*/ new class extends oi {
	constructor(e, t) {
		let n = si.test(e) || e.split(/[\s,]+/).some((e) => ci.has(e.trim())) ? e : `(${e})`, r = window.matchMedia(n);
		super(() => r.matches, (e) => Qn(r, "change", e));
	}
}("(prefers-reduced-motion: reduce)"), ui = [], di = /* @__PURE__ */ new Map(), fi = null, pi = null;
function mi() {
	if (pi || typeof document > "u") return;
	let e = document.documentElement, t = document.body;
	pi = {
		scrollX: window.scrollX,
		scrollY: window.scrollY,
		rootOverflow: e.style.overflow,
		rootTouchAction: e.style.touchAction,
		bodyOverflow: t.style.overflow,
		bodyTouchAction: t.style.touchAction,
		bodyPaddingRight: t.style.paddingRight
	};
	let n = Math.max(0, window.innerWidth - e.clientWidth);
	if (n > 0) {
		let e = Number.parseFloat(getComputedStyle(t).paddingRight) || 0;
		t.style.paddingRight = `${e + n}px`;
	}
	e.style.overflow = "hidden", e.style.touchAction = "none", t.style.overflow = "hidden", t.style.touchAction = "none";
}
function hi() {
	if (!pi || typeof document > "u") return;
	let e = pi;
	pi = null;
	let t = document.documentElement, n = document.body;
	t.style.overflow = e.rootOverflow, t.style.touchAction = e.rootTouchAction, n.style.overflow = e.bodyOverflow, n.style.touchAction = e.bodyTouchAction, n.style.paddingRight = e.bodyPaddingRight, (window.scrollX !== e.scrollX || window.scrollY !== e.scrollY) && window.scrollTo(e.scrollX, e.scrollY);
}
function gi() {
	if (typeof document > "u") return;
	let e = ui.at(-1);
	for (let t of Array.from(document.body.children)) t instanceof HTMLElement && (di.has(t) || di.set(t, { hadAttribute: t.hasAttribute("inert") }), t.toggleAttribute("inert", t !== e));
}
function _i() {
	for (let [e, t] of di) e.toggleAttribute("inert", t.hadAttribute);
	di.clear();
}
function vi(e) {
	if (!(typeof document > "u")) return document.body.appendChild(e), { destroy() {
		e.remove();
	} };
}
function yi(e) {
	if (typeof document > "u") return () => {};
	ui.length === 0 && (mi(), fi = new MutationObserver(gi), fi.observe(document.body, { childList: !0 })), ui.push(e), gi();
	let t = !1;
	return () => {
		if (t) return;
		t = !0;
		let n = ui.lastIndexOf(e);
		if (n >= 0 && ui.splice(n, 1), ui.length > 0) {
			gi();
			return;
		}
		fi?.disconnect(), fi = null, _i(), hi();
	};
}
//#endregion
//#region src/WornDialog.svelte
var bi = /* @__PURE__ */ cr("<h2 class=\"worn-dialog-title svelte-qe35nh\"> </h2>"), xi = /* @__PURE__ */ cr("<div class=\"worn-dialog-backdrop svelte-qe35nh\" role=\"presentation\"><div role=\"dialog\" aria-modal=\"true\" tabindex=\"-1\"><div class=\"worn-dialog-head svelte-qe35nh\"><!> <button type=\"button\" class=\"worn-dialog-close svelte-qe35nh\" aria-label=\"Close\"></button></div> <div class=\"worn-dialog-body svelte-qe35nh\"><!></div></div></div>"), Si = {
	hash: "svelte-qe35nh",
	code: ".worn-dialog-backdrop.svelte-qe35nh {position:fixed;inset:0;height:100vh;height:100dvh;box-sizing:border-box;z-index:1000;display:flex;align-items:center;justify-content:center;background:rgba(0,0,0,0.35);backdrop-filter:blur(2px);padding:calc(24px + env(safe-area-inset-top, 0px)) calc(24px + env(safe-area-inset-right, 0px)) calc(24px + env(safe-area-inset-bottom, 0px)) calc(24px + env(safe-area-inset-left, 0px));}.worn-dialog.svelte-qe35nh {box-sizing:border-box;background:var(--cockpit-surface);border:1px solid var(--cockpit-border);border-radius:var(--cockpit-radius);box-shadow:0 16px 48px rgba(0,0,0,0.15);width:460px;max-width:100%;max-height:100%;overflow-y:auto;overscroll-behavior:contain;-webkit-overflow-scrolling:touch;position:relative;}\n	/* CSP-safe: no unsafe-inline for style-src, so size is a static class\n	   (a fixed preset) rather than an inline CSS var. */.worn-dialog.is-sm.svelte-qe35nh {width:360px;}.worn-dialog.is-lg.svelte-qe35nh {width:640px;}.worn-dialog-head.svelte-qe35nh {display:flex;align-items:center;justify-content:space-between;padding:18px 20px 0;}.worn-dialog-title.svelte-qe35nh {font-family:var(--font-family-display);font-size:18px;font-weight:680;color:var(--cockpit-text);margin:0;min-width:0;overflow-wrap:anywhere;}.worn-dialog-close.svelte-qe35nh {min-width:44px;min-height:44px;position:relative;width:44px;height:44px;border-radius:50%;border:0;background:transparent;color:var(--cockpit-text-muted);cursor:pointer;display:flex;align-items:center;justify-content:center;flex-shrink:0;touch-action:manipulation;}.worn-dialog-close.svelte-qe35nh::before,\n	.worn-dialog-close.svelte-qe35nh::after {content:'';position:absolute;left:50%;top:50%;width:12px;height:1.5px;border-radius:1px;background:currentColor;}.worn-dialog-close.svelte-qe35nh::before {transform:translate(-50%, -50%) rotate(45deg);}.worn-dialog-close.svelte-qe35nh::after {transform:translate(-50%, -50%) rotate(-45deg);}.worn-dialog-close.svelte-qe35nh:hover {background:var(--cockpit-hover-bg);}.worn-dialog-close.svelte-qe35nh:focus-visible {outline:2px dashed var(--cockpit-accent);outline-offset:2px;}.worn-dialog-body.svelte-qe35nh {box-sizing:border-box;min-width:0;max-width:100%;overflow-x:auto;overflow-wrap:anywhere;padding:12px 20px 20px;}\n	@media (max-width: 480px) {.worn-dialog-backdrop.svelte-qe35nh {padding:calc(8px + env(safe-area-inset-top, 0px)) calc(8px + env(safe-area-inset-right, 0px)) calc(8px + env(safe-area-inset-bottom, 0px)) calc(8px + env(safe-area-inset-left, 0px));}\n	}"
};
function Ci(e, t) {
	let n = dr();
	We(t, !0), Pr(e, Si);
	let r = Jr(t, "open", 15, !1), i = Jr(t, "size", 3, "md"), a = `worn-dialog-title-${n}`, o = /* @__PURE__ */ P(null), s = /* @__PURE__ */ P(null);
	ln(() => {
		if (!r() || !Q(o) || !Q(s) || typeof document > "u") return;
		let e = document.activeElement, t = Q(o), n = yi(Q(s));
		return Q(o).focus(), () => {
			n();
			let r = document.activeElement;
			e?.isConnected && (r === document.body || t.contains(r)) && e.focus({ preventScroll: !0 });
		};
	});
	function c() {
		return Q(o) ? Array.from(Q(o).querySelectorAll("a[href], area[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), summary, [contenteditable]:not([contenteditable=\"false\"]), [tabindex]:not([tabindex=\"-1\"])")).filter((e) => !e.closest("[inert]") && e.getClientRects().length > 0 && getComputedStyle(e).visibility !== "hidden") : [];
	}
	function l(e) {
		if (r()) {
			if (e.key === "Escape") {
				r(!1), t.onclose?.();
				return;
			}
			if (e.key === "Tab") {
				let t = c();
				if (!t.length) {
					e.preventDefault();
					return;
				}
				let n = t[0], r = t[t.length - 1], i = typeof document < "u" ? document.activeElement : null;
				e.shiftKey && (i === n || i === Q(o)) ? (e.preventDefault(), r.focus()) : !e.shiftKey && i === r && (e.preventDefault(), n.focus());
			}
		}
	}
	function u(e) {
		e.target === e.currentTarget && (r(!1), t.onclose?.());
	}
	var d = lr();
	$n("keydown", Gt, l);
	var f = Qt(d), p = (e) => {
		var n = xi(), c = Zt(n);
		let l;
		var d = Zt(c), f = Zt(d), p = (e) => {
			var n = bi(), r = Zt(n, !0);
			Ie(n), gn(() => {
				Hr(n, "id", a), hr(r, t.title);
			}), ur(e, n);
		};
		wr(f, (e) => {
			t.title && e(p);
		});
		var m = $t(f, 2);
		Ie(d);
		var h = $t(d, 2);
		Cr(Zt(h), () => t.children ?? g), Ie(h), Ie(c), qr(c, (e) => F(o, e), () => Q(o)), Ie(n), qr(n, (e) => F(s, e), () => Q(s)), Fr(n, (e) => vi?.(e)), gn(() => {
			l = Rr(c, 1, "worn-dialog svelte-qe35nh", null, l, {
				"is-sm": i() === "sm",
				"is-lg": i() === "lg"
			}), Hr(c, "aria-labelledby", t.title ? a : void 0);
		}), er("click", n, u), er("click", m, () => {
			r(!1), t.onclose?.();
		}), Mr(3, c, () => ai, () => ({
			y: li.current ? 0 : 12,
			duration: li.current ? 0 : 280
		})), Mr(3, n, () => ii, () => ({ duration: li.current ? 0 : 200 })), ur(e, n);
	};
	wr(f, (e) => {
		r() && e(p);
	}), ur(e, d), Ge();
}
tr(["click"]);
//#endregion
//#region src/DialogElement.svelte
var wi = /* @__PURE__ */ cr("<p class=\"worn-dialog-element-description svelte-w7uukb\"> </p>"), Ti = {
	hash: "svelte-w7uukb",
	code: ".worn-dialog-element-description.svelte-w7uukb {margin:0;color:var(--cockpit-text-muted);line-height:1.6;overflow-wrap:anywhere;}"
};
function Ei(e, t) {
	We(t, !0), Pr(e, Ti);
	let n = Jr(t, "open", 7, !1), r = Jr(t, "title", 7, ""), i = Jr(t, "description", 7, ""), a = Jr(t, "size", 7, "md"), o = t.$$host;
	function s() {
		n(!1), setTimeout(() => o.dispatchEvent(new CustomEvent("close")), 0);
	}
	return Ci(e, {
		get title() {
			return r();
		},
		get size() {
			return a();
		},
		onclose: s,
		get open() {
			return n();
		},
		set open(e) {
			n(e);
		},
		children: (e, t) => {
			var n = lr(), r = Qt(n), a = (e) => {
				var t = wi(), n = Zt(t, !0);
				Ie(t), gn(() => hr(n, i())), ur(e, t);
			};
			wr(r, (e) => {
				i() && e(a);
			}), ur(e, n);
		},
		$$slots: { default: !0 }
	}), Ge({
		get open() {
			return n();
		},
		set open(e = !1) {
			n(e), At();
		},
		get title() {
			return r();
		},
		set title(e = "") {
			r(e), At();
		},
		get description() {
			return i();
		},
		set description(e = "") {
			i(e), At();
		},
		get size() {
			return a();
		},
		set size(e = "md") {
			a(e), At();
		}
	});
}
customElements.define("worn-dialog", ei(Ei, {
	open: {
		reflect: !0,
		type: "Boolean"
	},
	title: {
		reflect: !0,
		type: "String"
	},
	description: {
		reflect: !0,
		type: "String"
	},
	size: {
		reflect: !0,
		type: "String"
	}
}, [], []));
//#endregion
