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
var y = 1024, b = 2048, ee = 4096, te = 8192, ne = 16384, re = 32768, ie = 1 << 25, ae = 65536, oe = 1 << 19, se = 1 << 20, ce = 65536, le = 1 << 21, ue = 1 << 22, de = 1 << 23, fe = Symbol("$state"), pe = Symbol("legacy props"), me = Symbol(""), he = Symbol("attributes"), ge = Symbol("class"), _e = Symbol("style"), ve = Symbol("text"), ye = new class extends Error {
	name = "StaleReactionError";
	message = "The reaction that called `getAbortSignal()` was re-run or destroyed";
}(), be = !!globalThis.document?.contentType && /* @__PURE__ */ globalThis.document.contentType.includes("xml");
//#endregion
//#region node_modules/svelte/src/internal/client/errors.js
function xe() {
	throw Error("https://svelte.dev/e/async_derived_orphan");
}
function Se(e) {
	throw Error("https://svelte.dev/e/effect_in_teardown");
}
function Ce() {
	throw Error("https://svelte.dev/e/effect_in_unowned_derived");
}
function we(e) {
	throw Error("https://svelte.dev/e/effect_orphan");
}
function Te() {
	throw Error("https://svelte.dev/e/effect_update_depth_exceeded");
}
function Ee() {
	throw Error("https://svelte.dev/e/hydration_failed");
}
function De(e) {
	throw Error("https://svelte.dev/e/props_invalid_value");
}
function Oe() {
	throw Error("https://svelte.dev/e/state_descriptors_fixed");
}
function ke() {
	throw Error("https://svelte.dev/e/state_prototype_fixed");
}
function Ae() {
	throw Error("https://svelte.dev/e/state_unsafe_mutation");
}
function je() {
	throw Error("https://svelte.dev/e/svelte_boundary_reset_onerror");
}
function Me() {
	console.warn("https://svelte.dev/e/derived_inert");
}
function Ne(e) {
	console.warn("https://svelte.dev/e/hydration_mismatch");
}
function Pe() {
	console.warn("https://svelte.dev/e/svelte_boundary_reset_noop");
}
//#endregion
//#region node_modules/svelte/src/internal/client/dom/hydration.js
var x = !1;
function Fe(e) {
	x = e;
}
var S;
function C(t) {
	if (t === null) throw Ne(), e;
	return S = t;
}
function Ie() {
	return C(/* @__PURE__ */ I(S));
}
function Le(t) {
	if (x) {
		if (/* @__PURE__ */ I(S) !== null) throw Ne(), e;
		S = t;
	}
}
function Re(e = 1) {
	if (x) {
		for (var t = e, n = S; t--;) n = /* @__PURE__ */ I(n);
		S = n;
	}
}
function ze(e = !0) {
	for (var t = 0, n = S;;) {
		if (n.nodeType === 8) {
			var r = n.data;
			if (r === "]") {
				if (t === 0) return n;
				--t;
			} else (r === "[" || r === "[!" || r[0] === "[" && !isNaN(Number(r.slice(1)))) && (t += 1);
		}
		var i = /* @__PURE__ */ I(n);
		e && n.remove(), n = i;
	}
}
function Be(t) {
	if (!t || t.nodeType !== 8) throw Ne(), e;
	return t.data;
}
//#endregion
//#region node_modules/svelte/src/internal/client/reactivity/equality.js
function Ve(e) {
	return e === this.v;
}
function He(e, t) {
	return e == e ? e !== t || typeof e == "object" && !!e || typeof e == "function" : t == t;
}
function Ue(e) {
	return !He(e, this.v);
}
//#endregion
//#region node_modules/svelte/src/internal/client/context.js
var w = null;
function We(e) {
	w = e;
}
function Ge(e, t = !1, n) {
	w = {
		p: w,
		i: !1,
		c: null,
		e: null,
		s: e,
		x: null,
		r: W,
		l: null
	};
}
function Ke(e) {
	var t = w, n = t.e;
	if (n !== null) {
		t.e = null;
		for (var r of n) dn(r);
	}
	return e !== void 0 && (t.x = e), t.i = !0, w = t.p, e ?? {};
}
function qe() {
	return !0;
}
//#endregion
//#region node_modules/svelte/src/internal/client/dom/task.js
var T = [];
function Je() {
	var e = T;
	T = [], _(e);
}
function E(e) {
	if (T.length === 0 && !wt) {
		var t = T;
		queueMicrotask(() => {
			t === T && Je();
		});
	}
	T.push(e);
}
function Ye() {
	for (; T.length > 0;) Je();
}
function Xe(e) {
	var t = W;
	if (t === null) return V.f |= de, e;
	if (!(t.f & 32768) && !(t.f & 4)) throw e;
	D(e, t);
}
function D(e, t) {
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
var Ze = ~(b | ee | y);
function O(e, t) {
	e.f = e.f & Ze | t;
}
function Qe(e) {
	e.f & 512 || e.deps === null ? O(e, y) : O(e, ee);
}
//#endregion
//#region node_modules/svelte/src/internal/client/reactivity/utils.js
function $e(e) {
	if (e !== null) for (let t of e) !(t.f & 2) || !(t.f & 65536) || (t.f ^= ce, $e(t.deps));
}
function et(e, t, n) {
	e.f & 2048 ? t.add(e) : e.f & 4096 && n.add(e), $e(e.deps), O(e, y);
}
//#endregion
//#region node_modules/svelte/src/internal/client/reactivity/store.js
var tt = !1;
function nt(e) {
	var t = tt;
	try {
		return tt = !1, [e(), tt];
	} finally {
		tt = t;
	}
}
//#endregion
//#region node_modules/svelte/src/internal/client/dom/elements/bindings/shared.js
function rt(e) {
	var t = V, n = W;
	U(null), G(null);
	try {
		return e();
	} finally {
		U(t), G(n);
	}
}
//#endregion
//#region node_modules/svelte/src/reactivity/create-subscriber.js
function it(e) {
	let t = 0, n = zt(0), r;
	return () => {
		cn() && (Z(n), gn(() => (t === 0 && (r = Kn(() => e(() => Ut(n)))), t += 1, () => {
			E(() => {
				--t, t === 0 && (r?.(), r = void 0, Ut(n));
			});
		})));
	};
}
//#endregion
//#region node_modules/svelte/src/internal/client/dom/blocks/boundary.js
var at = ae | oe;
function ot(e, t, n, r) {
	new st(e, t, n, r);
}
var st = class {
	parent;
	is_pending = !1;
	transform_error;
	#e;
	#t = x ? S : null;
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
	#h = it(() => (this.#m = zt(this.#l), () => {
		this.#m = null;
	}));
	constructor(e, t, n, r) {
		this.#e = e, this.#n = t, this.#r = (e) => {
			var t = W;
			t.b = this, t.f |= 128, n(e);
		}, this.parent = W.b, this.transform_error = r ?? this.parent?.transform_error ?? ((e) => e), this.#i = vn(() => {
			if (x) {
				let e = this.#t;
				Ie();
				let t = e.data === "[!";
				if (e.data.startsWith("[?")) {
					let t = JSON.parse(e.data.slice(2));
					this.#_(t);
				} else t ? this.#y() : this.#g();
			} else this.#b();
		}, at), x && (this.#e = S);
	}
	#g() {
		try {
			this.#a = R(() => this.#r(this.#e));
		} catch (e) {
			this.error(e);
		}
	}
	#_(e) {
		let t = this.#n.failed, { reset: n, invoke_onerror: r } = this.#v(e);
		E(r), t && (this.#s = R(() => {
			t(this.#e, () => e, () => n);
		}));
	}
	#v(e) {
		var t = !1, n = !1;
		let r = () => {
			if (t) {
				Pe();
				return;
			}
			t = !0, n && je(), this.#s !== null && wn(this.#s, () => {
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
					D(e, this.#i && this.#i.parent);
				}
			}
		};
	}
	#y() {
		let e = this.#n.pending;
		e && (this.is_pending = !0, this.#o = R(() => e(this.#e)), E(() => {
			var e = this.#c = document.createDocumentFragment(), t = F();
			e.append(t), this.#a = this.#S(() => R(() => this.#r(t))), this.#u === 0 && (this.#e.before(e), this.#c = null, wn(this.#o, () => {
				this.#o = null;
			}), this.#x(k));
		}));
	}
	#b() {
		try {
			if (this.is_pending = this.has_pending_snippet(), this.#u = 0, this.#l = 0, this.#a = R(() => {
				this.#r(this.#e);
			}), this.#u > 0) {
				var e = this.#c = document.createDocumentFragment();
				On(this.#a, e);
				let t = this.#n.pending;
				this.#o = R(() => t(this.#e));
			} else this.#x(k);
		} catch (e) {
			this.error(e);
		}
	}
	#x(e) {
		this.is_pending = !1, e.transfer_effects(this.#f, this.#p);
	}
	defer_effect(e) {
		et(e, this.#f, this.#p);
	}
	is_rendered() {
		return !this.is_pending && (!this.parent || this.parent.is_rendered());
	}
	has_pending_snippet() {
		return !!this.#n.pending;
	}
	#S(e) {
		var t = W, n = V, r = w;
		G(this.#i), U(this.#i), We(this.#i.ctx);
		try {
			return At.ensure(), e();
		} catch (e) {
			return Xe(e), null;
		} finally {
			G(t), U(n), We(r);
		}
	}
	#C(e, t) {
		if (!this.has_pending_snippet()) {
			this.parent && this.parent.#C(e, t);
			return;
		}
		this.#u += e, this.#u === 0 && (this.#x(t), this.#o && wn(this.#o, () => {
			this.#o = null;
		}), this.#c &&= (this.#e.before(this.#c), null));
	}
	update_pending_count(e, t) {
		this.#C(e, t), this.#l += e, !(!this.#m || this.#d) && (this.#d = !0, E(() => {
			this.#d = !1, this.#m && Vt(this.#m, this.#l);
		}));
	}
	get_effect_pending() {
		return this.#h(), Z(this.#m);
	}
	error(e) {
		if (!this.#n.onerror && !this.#n.failed) throw e;
		k?.is_fork ? (this.#a && k.skip_effect(this.#a), this.#o && k.skip_effect(this.#o), this.#s && k.skip_effect(this.#s), k.oncommit(() => {
			this.#w(e);
		})) : this.#w(e);
	}
	#w(e) {
		this.#a &&= (z(this.#a), null), this.#o &&= (z(this.#o), null), this.#s &&= (z(this.#s), null), x && (C(this.#t), Re(), C(ze()));
		let t = this.#n.failed, n = (e) => {
			let { reset: n, invoke_onerror: r } = this.#v(e);
			r(), t && (this.#s = this.#S(() => {
				try {
					return R(() => {
						var r = W;
						r.b = this, r.f |= 128, t(this.#e, () => e, () => n);
					});
				} catch (e) {
					return D(e, this.#i.parent), null;
				}
			}));
		};
		E(() => {
			var t;
			try {
				t = this.transform_error(e);
			} catch (e) {
				D(e, this.#i && this.#i.parent);
				return;
			}
			typeof t == "object" && t && typeof t.then == "function" ? t.then(n, (e) => D(e, this.#i && this.#i.parent)) : n(t);
		});
	}
};
//#endregion
//#region node_modules/svelte/src/internal/client/reactivity/async.js
function ct(e, t, n, r) {
	let i = qe() ? ft : ht;
	var a = e.filter((e) => !e.settled), o = t.map(i);
	if (n.length === 0 && a.length === 0) {
		r(o);
		return;
	}
	var s = W, c = lt(), l = a.length === 1 ? a[0].promise : a.length > 1 ? Promise.all(a.map((e) => e.promise)) : null;
	function u(e) {
		if (!(s.f & 16384)) {
			c();
			try {
				r([...o, ...e]);
			} catch (e) {
				D(e, s);
			}
			ut();
		}
	}
	var d = dt();
	if (n.length === 0) {
		l.then(() => u([])).finally(d);
		return;
	}
	function f() {
		Promise.all(n.map((e) => /* @__PURE__ */ mt(e))).then(u).catch((e) => D(e, s)).finally(d);
	}
	l ? l.then(() => {
		c(), f(), ut();
	}) : f();
}
function lt() {
	var e = W, t = V, n = w, r = k;
	return function(i = !0) {
		G(e), U(t), We(n), i && !(e.f & 16384) && (r?.activate(), r?.apply());
	};
}
function ut(e = !0) {
	G(null), U(null), We(null), e && k?.deactivate();
}
function dt() {
	var e = W, t = e.b, n = k, r = !!t?.is_rendered();
	return t?.update_pending_count(1, n), n.increment(r, e), () => {
		t?.update_pending_count(-1, n), n.decrement(r, e);
	};
}
/*#__NO_SIDE_EFFECTS__*/
function ft(e) {
	var n = 2 | b;
	return W !== null && (W.f |= oe), {
		ctx: w,
		deps: null,
		effects: null,
		equals: Ve,
		f: n,
		fn: e,
		reactions: null,
		rv: 0,
		v: t,
		wv: 0,
		parent: W,
		ac: null
	};
}
var pt = Symbol("obsolete");
/*#__NO_SIDE_EFFECTS__*/
function mt(e, n, r) {
	let i = W;
	i === null && xe();
	var a = void 0, o = zt(t), s = !V, c = /* @__PURE__ */ new Set();
	return hn(() => {
		var t = W, n = v();
		a = n.promise;
		try {
			Promise.resolve(e()).then(n.resolve, (e) => {
				e !== ye && n.reject(e);
			}).finally(ut);
		} catch (e) {
			n.reject(e), ut();
		}
		var r = k;
		if (s) {
			if (t.f & 32768) var l = dt();
			if (i.b?.is_rendered()) r.async_deriveds.get(t)?.reject(pt);
			else for (let e of c.values()) e.reject(pt);
			c.add(n), r.async_deriveds.set(t, n);
		}
		let u = (e, t = void 0) => {
			l?.(), c.delete(n), t !== pt && (r.activate(), t ? (o.f |= de, Vt(o, t)) : (o.f & 8388608 && (o.f ^= de), Vt(o, e)), r.deactivate());
		};
		n.promise.then(u, (e) => u(null, e || "unknown"));
	}), ln(() => {
		for (let e of c) e.reject(pt);
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
function ht(e) {
	let t = /* @__PURE__ */ ft(e);
	return t.equals = Ue, t;
}
function gt(e) {
	var t = e.effects;
	if (t !== null) {
		e.effects = null;
		for (var n = 0; n < t.length; n += 1) z(t[n]);
	}
}
function _t(e) {
	var n, r = W, i = e.parent;
	if (!B && i !== null && e.v !== t && i.f & 24576) return Me(), e.v;
	G(i);
	try {
		e.f &= ~ce, gt(e), n = Bn(e);
	} finally {
		G(r);
	}
	return n;
}
function vt(e) {
	var t = _t(e);
	if (!e.equals(t) && (e.wv = Ln(), (!k?.is_fork || e.deps === null) && (k === null ? e.v = t : (k.capture(e, t, !0), St?.capture(e, t, !0)), e.deps === null))) {
		O(e, y);
		return;
	}
	B || (A === null ? Qe(e) : (cn() || k?.is_fork) && A.set(e, t));
}
function yt(e) {
	if (e.effects !== null) for (let t of e.effects) (t.teardown || t.ac) && (t.teardown?.(), t.ac !== null && rt(() => {
		t.ac.abort(ye), t.ac = null;
	}), t.fn !== null && (t.teardown = g), Hn(t, 0), bn(t));
}
function bt(e) {
	if (e.effects !== null) for (let t of e.effects) t.teardown && t.fn !== null && Un(t);
}
//#endregion
//#region node_modules/svelte/src/internal/client/reactivity/batch.js
var xt = null, k = null, St = null, A = null, Ct = null, wt = !1, Tt = !1, Et = null, Dt = null, Ot = 0, kt = 1, At = class e {
	id = kt++;
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
		xt === null ? xt = this : (xt.#n = this, this.#t = xt), xt = this;
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
			for (var r of n.d) O(r, b), t(r);
			for (r of n.m) O(r, ee), t(r);
		}
		this.#p.add(e);
	}
	#g() {
		this.#e = !0, Ot++ > 1e3 && (this.#x(), Mt());
		for (let e of this.#u) this.#d.delete(e), O(e, b), this.schedule(e);
		for (let e of this.#d) O(e, ee), this.schedule(e);
		let t = this.#c;
		this.#c = [], this.apply();
		var n = Et = [], r = [], i = Dt = [];
		for (let e of t) try {
			this.#_(e, n, r);
		} catch (t) {
			throw It(e), this.#h() || this.discard(), t;
		}
		if (k = null, i.length > 0) {
			var a = e.ensure();
			for (let e of i) a.schedule(e);
		}
		if (Et = null, Dt = null, this.#h()) {
			this.#b(r), this.#b(n);
			for (let [e, t] of this.#f) Ft(e, t);
			i.length > 0 && k.#g();
			return;
		}
		let o = this.#v();
		if (o) {
			this.#b(r), this.#b(n), o.#y(this);
			return;
		}
		this.#u.clear(), this.#d.clear();
		for (let e of this.#r) e(this);
		this.#r.clear(), St = this, Nt(r), Nt(n), St = null, this.#s?.resolve();
		var s = k;
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
				a ? r.f ^= y : i & 4 ? t.push(r) : Rn(r) && (i & 16 && this.#d.add(r), Un(r));
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
					r & 4194320 && !this.async_deriveds.has(i) && (this.#d.delete(i), O(i, b), this.schedule(i));
				}
			}
		};
		for (let e of this.current.keys()) t(e);
		this.oncommit(() => e.discard()), e.#x(), k = this, this.#g();
	}
	#b(e) {
		for (var t = 0; t < e.length; t += 1) et(e[t], this.#u, this.#d);
	}
	capture(e, n, r = !1) {
		e.v !== t && !this.previous.has(e) && this.previous.set(e, e.v), e.f & 8388608 || (this.current.set(e, [n, r]), A?.set(e, n)), this.is_fork || (e.v = n);
	}
	activate() {
		k = this;
	}
	deactivate() {
		k = null, A = null;
	}
	flush() {
		try {
			Tt = !0, k = this, this.#g();
		} finally {
			Ot = 0, Ct = null, Et = null, Dt = null, Tt = !1, k = null, A = null, M.clear();
		}
	}
	discard() {
		for (let e of this.#i) e(this);
		this.#i.clear();
		for (let e of this.async_deriveds.values()) e.reject(pt);
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
		this.#m || (this.#m = !0, E(() => {
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
		if (k === null) {
			let t = k = new e();
			!Tt && !wt && E(() => {
				t.#e || t.flush();
			});
		}
		return k;
	}
	apply() {
		A = null;
	}
	schedule(e) {
		if (Ct = e, e.b?.is_pending && e.f & 16777228 && !(e.f & 32768)) {
			e.b.defer_effect(e);
			return;
		}
		for (var t = e; t.parent !== null;) {
			t = t.parent;
			var n = t.f;
			if (Et !== null && t === W && (V === null || !(V.f & 2))) return;
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
			e === null || (e.#n = t), t === null ? xt = e : t.#t = e, this.linked = !1;
		}
	}
};
function jt(e) {
	var t = wt;
	wt = !0;
	try {
		var n;
		for (e && (k !== null && !k.is_fork && k.flush(), n = e());;) {
			if (Ye(), k === null) return n;
			k.flush();
		}
	} finally {
		wt = t;
	}
}
function Mt() {
	try {
		Te();
	} catch (e) {
		D(e, Ct);
	}
}
var j = null;
function Nt(e) {
	var t = e.length;
	if (t !== 0) {
		for (var n = 0; n < t;) {
			var r = e[n++];
			if (!(r.f & 24576) && Rn(r) && (j = /* @__PURE__ */ new Set(), Un(r), r.deps === null && r.first === null && r.nodes === null && r.teardown === null && r.ac === null && Cn(r), j?.size > 0)) {
				M.clear();
				for (let e of j) {
					if (e.f & 24576) continue;
					let t = [e], n = e.parent;
					for (; n !== null;) j.has(n) && (j.delete(n), t.push(n)), n = n.parent;
					for (let e = t.length - 1; e >= 0; e--) {
						let n = t[e];
						n.f & 24576 || Un(n);
					}
				}
				j.clear();
			}
		}
		j = null;
	}
}
function Pt(e) {
	k.schedule(e);
}
function Ft(e, t) {
	if (!(e.f & 32 && e.f & 1024)) {
		e.f & 2048 ? t.d.push(e) : e.f & 4096 && t.m.push(e), O(e, y);
		for (var n = e.first; n !== null;) Ft(n, t), n = n.next;
	}
}
function It(e) {
	O(e, y);
	for (var t = e.first; t !== null;) It(t), t = t.next;
}
//#endregion
//#region node_modules/svelte/src/internal/client/reactivity/sources.js
var Lt = /* @__PURE__ */ new Set(), M = /* @__PURE__ */ new Map(), Rt = !1;
function zt(e, t) {
	return {
		f: 0,
		v: e,
		reactions: null,
		equals: Ve,
		rv: 0,
		wv: 0
	};
}
/*#__NO_SIDE_EFFECTS__*/
function N(e, t) {
	let n = zt(e, t);
	return Mn(n), n;
}
/*#__NO_SIDE_EFFECTS__*/
function Bt(e, t = !1, n = !0) {
	let r = zt(e);
	return t || (r.equals = Ue), r;
}
function P(e, t, n = !1) {
	return V !== null && (!H || V.f & 131072) && qe() && V.f & 4325394 && (K === null || !K.has(e)) && Ae(), Vt(e, n ? Gt(t) : t, Dt);
}
function Vt(e, t, n = null) {
	if (!e.equals(t)) {
		M.set(e, B ? t : e.v);
		var r = At.ensure();
		if (r.capture(e, t), e.f & 2) {
			let t = e;
			e.f & 2048 && _t(t), A === null && Qe(t);
		}
		e.wv = Ln(), Wt(e, b, n), qe() && W !== null && W.f & 1024 && !(W.f & 96) && (Y === null ? Nn([e]) : Y.push(e)), !r.is_fork && Lt.size > 0 && !Rt && Ht();
	}
	return t;
}
function Ht() {
	Rt = !1;
	for (let e of Lt) {
		e.f & 1024 && O(e, ee);
		let t;
		try {
			t = Rn(e);
		} catch {
			t = !0;
		}
		t && Un(e);
	}
	Lt.clear();
}
function Ut(e) {
	P(e, e.v + 1);
}
function Wt(e, t, n) {
	var r = e.reactions;
	if (r !== null) for (var i = qe(), a = r.length, o = 0; o < a; o++) {
		var s = r[o], c = s.f;
		if (!(!i && s === W)) {
			var l = (c & b) === 0;
			if (l && O(s, t), c & 131072) Lt.add(s);
			else if (c & 2) {
				var u = s;
				A?.delete(u), c & 65536 || (c & 512 && (W === null || !(W.f & 2097152)) && (s.f |= ce), Wt(u, ee, n));
			} else if (l) {
				var d = s;
				c & 16 && j !== null && j.add(d), n === null ? Pt(d) : n.push(d);
			}
		}
	}
}
function Gt(e) {
	if (typeof e != "object" || !e || fe in e) return e;
	let n = p(e);
	if (n !== d && n !== f) return e;
	var i = /* @__PURE__ */ new Map(), a = r(e), o = /* @__PURE__ */ N(0), s = null, c = X, u = (e) => {
		if (X === c) return e();
		var t = V, n = X;
		U(null), In(c);
		var r = e();
		return U(t), In(n), r;
	};
	return a && i.set("length", /* @__PURE__ */ N(e.length, s)), new Proxy(e, {
		defineProperty(e, t, n) {
			(!("value" in n) || n.configurable === !1 || n.enumerable === !1 || n.writable === !1) && Oe();
			var r = i.get(t);
			return r === void 0 ? u(() => {
				var e = /* @__PURE__ */ N(n.value, s);
				return i.set(t, e), e;
			}) : P(r, n.value, !0), !0;
		},
		deleteProperty(e, n) {
			var r = i.get(n);
			if (r === void 0) {
				if (n in e) {
					let e = u(() => /* @__PURE__ */ N(t, s));
					i.set(n, e), Ut(o);
				}
			} else P(r, t), Ut(o);
			return !0;
		},
		get(n, r, a) {
			if (r === fe) return e;
			var o = i.get(r), c = r in n;
			if (o === void 0 && (!c || l(n, r)?.writable) && (o = u(() => /* @__PURE__ */ N(Gt(c ? n[r] : t), s)), i.set(r, o)), o !== void 0) {
				var d = Z(o);
				return d === t ? void 0 : d;
			}
			return Reflect.get(n, r, a);
		},
		getOwnPropertyDescriptor(e, n) {
			var r = Reflect.getOwnPropertyDescriptor(e, n);
			if (r && "value" in r) {
				var a = i.get(n);
				a && (r.value = Z(a));
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
			if (n === fe) return !0;
			var r = i.get(n), a = r !== void 0 && r.v !== t || Reflect.has(e, n);
			return (r !== void 0 || W !== null && (!a || l(e, n)?.writable)) && (r === void 0 && (r = u(() => /* @__PURE__ */ N(a ? Gt(e[n]) : t, s)), i.set(n, r)), Z(r) === t) ? !1 : a;
		},
		set(e, n, r, c) {
			var d = i.get(n), f = n in e;
			if (a && n === "length") for (var p = r; p < d.v; p += 1) {
				var m = i.get(p + "");
				m === void 0 ? p in e && (m = u(() => /* @__PURE__ */ N(t, s)), i.set(p + "", m)) : P(m, t);
			}
			if (d === void 0) (!f || l(e, n)?.writable) && (d = u(() => /* @__PURE__ */ N(void 0, s)), P(d, Gt(r)), i.set(n, d));
			else {
				f = d.v !== t;
				var h = u(() => Gt(r));
				P(d, h);
			}
			var g = Reflect.getOwnPropertyDescriptor(e, n);
			if (g?.set && g.set.call(c, r), !f) {
				if (a && typeof n == "string") {
					var _ = i.get("length"), v = Number(n);
					Number.isInteger(v) && v >= _.v && P(_, v + 1);
				}
				Ut(o);
			}
			return !0;
		},
		ownKeys(e) {
			Z(o);
			var n = Reflect.ownKeys(e).filter((e) => {
				var n = i.get(e);
				return n === void 0 || n.v !== t;
			});
			for (var [r, a] of i) a.v !== t && !(r in e) && n.push(r);
			return n;
		},
		setPrototypeOf() {
			ke();
		}
	});
}
var Kt, qt, Jt, Yt;
function Xt() {
	if (Kt === void 0) {
		Kt = window, qt = /Firefox/.test(navigator.userAgent);
		var e = Element.prototype, t = Node.prototype, n = Text.prototype;
		Jt = l(t, "firstChild").get, Yt = l(t, "nextSibling").get, m(e) && (e[ge] = void 0, e[he] = null, e[_e] = void 0, e.__e = void 0), m(n) && (n[ve] = void 0);
	}
}
function F(e = "") {
	return document.createTextNode(e);
}
/*@__NO_SIDE_EFFECTS__*/
function Zt(e) {
	return Jt.call(e);
}
/*@__NO_SIDE_EFFECTS__*/
function I(e) {
	return Yt.call(e);
}
function Qt(e, t) {
	if (!x) return /* @__PURE__ */ Zt(e);
	var n = /* @__PURE__ */ Zt(S);
	if (n === null) n = S.appendChild(F());
	else if (t && n.nodeType !== 3) {
		var r = F();
		return n?.before(r), C(r), r;
	}
	return t && an(n), C(n), n;
}
function $t(e, t = !1) {
	if (!x) {
		var n = /* @__PURE__ */ Zt(e);
		return n instanceof Comment && n.data === "" ? /* @__PURE__ */ I(n) : n;
	}
	if (t) {
		if (S?.nodeType !== 3) {
			var r = F();
			return S?.before(r), C(r), r;
		}
		an(S);
	}
	return S;
}
function en(e, t = 1, n = !1) {
	let r = x ? S : e;
	for (var i; t--;) i = r, r = /* @__PURE__ */ I(r);
	if (!x) return r;
	if (n) {
		if (r?.nodeType !== 3) {
			var a = F();
			return r === null ? i?.after(a) : r.before(a), C(a), a;
		}
		an(r);
	}
	return C(r), r;
}
function tn(e) {
	e.textContent = "";
}
function nn() {
	return !1;
}
function rn(e, t, n) {
	return t == null || t === "http://www.w3.org/1999/xhtml" ? n ? document.createElement(e, { is: n }) : document.createElement(e) : n ? document.createElementNS(t, e, { is: n }) : document.createElementNS(t, e);
}
function an(e) {
	if (e.nodeValue.length < 65536) return;
	let t = e.nextSibling;
	for (; t !== null && t.nodeType === 3;) t.remove(), e.nodeValue += t.nodeValue, t = e.nextSibling;
}
//#endregion
//#region node_modules/svelte/src/internal/client/reactivity/effects.js
function on(e) {
	W === null && (V === null && we(e), Ce()), B && Se(e);
}
function sn(e, t) {
	var n = t.last;
	n === null ? t.last = t.first = e : (n.next = e, e.prev = n, t.last = e);
}
function L(e, t) {
	var n = W;
	n !== null && n.f & 8192 && (e |= te);
	var r = {
		ctx: w,
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
	k?.register_created_effect(r);
	var i = r;
	if (e & 4) Et === null ? At.ensure().schedule(r) : Et.push(r);
	else if (t !== null) {
		try {
			Un(r);
		} catch (e) {
			throw z(r), e;
		}
		i.deps === null && i.teardown === null && i.nodes === null && i.first === i.last && !(i.f & 524288) && (i = i.first, e & 16 && e & 65536 && i !== null && (i.f |= ae));
	}
	if (i !== null && (i.parent = n, n !== null && sn(i, n), V !== null && V.f & 2 && !(e & 64))) {
		var a = V;
		(a.effects ??= []).push(i);
	}
	return r;
}
function cn() {
	return V !== null && !H;
}
function ln(e) {
	let t = L(8, null);
	return O(t, y), t.teardown = e, t;
}
function un(e) {
	on("$effect");
	var t = W.f;
	if (!V && t & 32 && w !== null && !w.i) {
		var n = w;
		(n.e ??= []).push(e);
	} else return dn(e);
}
function dn(e) {
	return L(4 | se, e);
}
function fn(e) {
	At.ensure();
	let t = L(64 | oe, e);
	return () => {
		z(t);
	};
}
function pn(e) {
	At.ensure();
	let t = L(64 | oe, e);
	return (e = {}) => new Promise((n) => {
		e.outro ? wn(t, () => {
			z(t), n(void 0);
		}) : (z(t), n(void 0));
	});
}
function mn(e) {
	return L(4, e);
}
function hn(e) {
	return L(ue | oe, e);
}
function gn(e, t = 0) {
	return L(8 | t, e);
}
function _n(e, t = [], n = [], r = []) {
	ct(r, t, n, (t) => {
		L(8, () => {
			e(...t.map(Z));
		});
	});
}
function vn(e, t = 0) {
	return L(16 | t, e);
}
function R(e) {
	return L(32 | oe, e);
}
function yn(e) {
	var t = e.teardown;
	if (t !== null) {
		let e = B, n = V;
		jn(!0), U(null);
		try {
			t.call(null);
		} finally {
			jn(e), U(n);
		}
	}
}
function bn(e, t = !1) {
	var n = e.first;
	for (e.first = e.last = null; n !== null;) {
		let e = n.ac;
		e !== null && rt(() => {
			e.abort(ye);
		});
		var r = n.next;
		n.f & 64 ? n.parent = null : z(n, t), n = r;
	}
}
function xn(e) {
	for (var t = e.first; t !== null;) {
		var n = t.next;
		t.f & 32 || z(t), t = n;
	}
}
function z(e, t = !0) {
	var n = !1;
	(t || e.f & 262144) && e.nodes !== null && e.nodes.end !== null && (Sn(e.nodes.start, e.nodes.end), n = !0), e.f |= ie, bn(e, t && !n), Hn(e, 0);
	var r = e.nodes && e.nodes.t;
	if (r !== null) for (let e of r) e.stop();
	yn(e), e.f ^= ie, e.f |= ne;
	var i = e.parent;
	i !== null && i.first !== null && Cn(e), e.next = e.prev = e.teardown = e.ctx = e.deps = e.fn = e.nodes = e.ac = e.b = null;
}
function Sn(e, t) {
	for (; e !== null;) {
		var n = e === t ? null : /* @__PURE__ */ I(e);
		e.remove(), e = n;
	}
}
function Cn(e) {
	var t = e.parent, n = e.prev, r = e.next;
	n !== null && (n.next = r), r !== null && (r.prev = n), t !== null && (t.first === e && (t.first = r), t.last === e && (t.last = n));
}
function wn(e, t, n = !0) {
	var r = [];
	Tn(e, r, !0);
	var i = () => {
		n && z(e), t && t();
	}, a = r.length;
	if (a > 0) {
		var o = () => --a || i();
		for (var s of r) s.out(o);
	} else i();
}
function Tn(e, t, n) {
	if (!(e.f & 8192)) {
		e.f ^= te;
		var r = e.nodes && e.nodes.t;
		if (r !== null) for (let e of r) (e.is_global || n) && t.push(e);
		for (var i = e.first; i !== null;) {
			var a = i.next;
			if (!(i.f & 64)) {
				var o = !!(i.f & 65536) || !!(i.f & 32) && !!(e.f & 16);
				Tn(i, t, o ? n : !1);
			}
			i = a;
		}
	}
}
function En(e) {
	Dn(e, !0);
}
function Dn(e, t) {
	if (e.f & 8192) {
		e.f ^= te, e.f & 1024 || (O(e, b), At.ensure().schedule(e));
		for (var n = e.first; n !== null;) {
			var r = n.next, i = !!(n.f & 65536) || !!(n.f & 32);
			Dn(n, i ? t : !1), n = r;
		}
		var a = e.nodes && e.nodes.t;
		if (a !== null) for (let e of a) (e.is_global || t) && e.in();
	}
}
function On(e, t) {
	if (e.nodes) for (var n = e.nodes.start, r = e.nodes.end; n !== null;) {
		var i = n === r ? null : /* @__PURE__ */ I(n);
		t.append(n), n = i;
	}
}
//#endregion
//#region node_modules/svelte/src/internal/client/legacy.js
var kn = null, An = !1, B = !1;
function jn(e) {
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
function Mn(e) {
	V !== null && (K ??= /* @__PURE__ */ new Set()).add(e);
}
var q = null, J = 0, Y = null;
function Nn(e) {
	Y = e;
}
var Pn = 1, Fn = 0, X = Fn;
function In(e) {
	X = e;
}
function Ln() {
	return ++Pn;
}
function Rn(e) {
	var t = e.f;
	if (t & 2048) return !0;
	if (t & 2 && (e.f &= ~ce), t & 4096) {
		for (var n = e.deps, r = n.length, i = 0; i < r; i++) {
			var a = n[i];
			if (Rn(a) && vt(a), a.wv > e.wv) return !0;
		}
		t & 512 && A === null && O(e, y);
	}
	return !1;
}
function zn(e, t, n = !0) {
	var r = e.reactions;
	if (r !== null && !(K !== null && K.has(e))) for (var i = 0; i < r.length; i++) {
		var a = r[i];
		a.f & 2 ? zn(a, t, !1) : t === a && (n ? O(a, b) : a.f & 1024 && O(a, ee), Pt(a));
	}
}
function Bn(e) {
	var t = q, n = J, r = Y, i = V, a = K, o = w, s = H, c = X, l = e.f;
	q = null, J = 0, Y = null, V = l & 96 ? null : e, K = null, We(e.ctx), H = !1, X = ++Fn, e.ac !== null && (rt(() => {
		e.ac.abort(ye);
	}), e.ac = null);
	try {
		e.f |= le;
		var u = e.fn, d = u();
		e.f |= re;
		var f = e.deps, p = k?.is_fork;
		if (q !== null) {
			var m;
			if (p || Hn(e, J), f !== null && J > 0) for (f.length = J + q.length, m = 0; m < q.length; m++) f[J + m] = q[m];
			else e.deps = f = q;
			if (cn() && e.f & 512) for (m = J; m < f.length; m++) (f[m].reactions ??= []).push(e);
		} else !p && f !== null && J < f.length && (Hn(e, J), f.length = J);
		if (qe() && Y !== null && !H && f !== null && !(e.f & 6146)) for (m = 0; m < Y.length; m++) zn(Y[m], e);
		if (i !== null && i !== e) {
			if (Fn++, i.deps !== null) for (let e = 0; e < n; e += 1) i.deps[e].rv = Fn;
			if (t !== null) for (let e of t) e.rv = Fn;
			Y !== null && (r === null ? r = Y : r.push(...Y));
		}
		return e.f & 8388608 && (e.f ^= de), d;
	} catch (e) {
		return Xe(e);
	} finally {
		e.f ^= le, q = t, J = n, Y = r, V = i, K = a, We(o), H = s, X = c;
	}
}
function Vn(e, n) {
	let r = n.reactions;
	if (r !== null) {
		var o = i.call(r, e);
		if (o !== -1) {
			var s = r.length - 1;
			s === 0 ? r = n.reactions = null : (r[o] = r[s], r.pop());
		}
	}
	if (r === null && n.f & 2 && (q === null || !a.call(q, n))) {
		var c = n;
		c.f & 512 && (c.f ^= 512, c.f &= ~ce), c.v !== t && Qe(c), c.ac !== null && rt(() => {
			c.ac.abort(ye), c.ac = null, O(c, b);
		}), yt(c), Hn(c, 0);
	}
}
function Hn(e, t) {
	var n = e.deps;
	if (n !== null) for (var r = t; r < n.length; r++) Vn(e, n[r]);
}
function Un(e) {
	var t = e.f;
	if (!(t & 16384)) {
		O(e, y);
		var n = W, r = An;
		W = e, An = !(t & 96);
		try {
			t & 16777232 ? xn(e) : bn(e), yn(e);
			var i = Bn(e);
			e.teardown = typeof i == "function" ? i : null, e.wv = Pn;
		} finally {
			An = r, W = n;
		}
	}
}
function Z(e) {
	var t = !!(e.f & 2);
	if (kn?.add(e), V !== null && !H && !(W !== null && W.f & 16384) && (K === null || !K.has(e))) {
		var n = V.deps;
		if (V.f & 2097152) e.rv < Fn && (e.rv = Fn, q === null && n !== null && n[J] === e ? J++ : q === null ? q = [e] : q.push(e));
		else {
			V.deps ??= [], a.call(V.deps, e) || V.deps.push(e);
			var r = e.reactions;
			r === null ? e.reactions = [V] : a.call(r, V) || r.push(V);
		}
	}
	if (B && M.has(e)) return M.get(e);
	if (t) {
		var i = e;
		if (B) {
			var o = i.v;
			return (!(i.f & 1024) && i.reactions !== null || Gn(i)) && (o = _t(i)), M.set(i, o), o;
		}
		var s = !(i.f & 512) && !H && V !== null && (An || !!(V.f & 512)), c = (i.f & re) === 0;
		Rn(i) && (s && (i.f |= 512), vt(i)), s && !c && (bt(i), Wn(i));
	}
	if (A?.has(e)) return A.get(e);
	if (e.f & 8388608) throw e.v;
	return e.v;
}
function Wn(e) {
	if (e.f |= 512, e.deps !== null) for (let t of e.deps) (t.reactions ??= []).push(e), t.f & 2 && !(t.f & 512) && (bt(t), Wn(t));
}
function Gn(e) {
	if (e.v === t) return !0;
	if (e.deps === null) return !1;
	for (let t of e.deps) if (M.has(t) || t.f & 2 && Gn(t)) return !0;
	return !1;
}
function Kn(e) {
	var t = H;
	try {
		return H = !0, e();
	} finally {
		H = t;
	}
}
function qn(e) {
	if (!(typeof e != "object" || !e || e instanceof EventTarget)) {
		if (fe in e) Jn(e);
		else if (!Array.isArray(e)) for (let t in e) {
			let n = e[t];
			typeof n == "object" && n && fe in n && Jn(n);
		}
	}
}
function Jn(e, t = /* @__PURE__ */ new Set()) {
	if (typeof e == "object" && e && !(e instanceof EventTarget) && !t.has(e)) {
		t.add(e), e instanceof Date && e.getTime();
		for (let n in e) try {
			Jn(e[n], t);
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
var Yn = Symbol("events"), Xn = /* @__PURE__ */ new Set(), Zn = /* @__PURE__ */ new Set();
function Qn(e, t, n, r = {}) {
	function i(e) {
		if (r.capture || ir.call(t, e), !e.cancelBubble) return rt(() => n?.call(this, e));
	}
	return e.startsWith("pointer") || e.startsWith("touch") || e === "wheel" ? E(() => {
		t.addEventListener(e, i, r);
	}) : t.addEventListener(e, i, r), i;
}
function $n(e, t, n, r = {}) {
	var i = Qn(t, e, n, r);
	return () => {
		e.removeEventListener(t, i, r);
	};
}
function er(e, t, n, r, i) {
	var a = {
		capture: r,
		passive: i
	}, o = Qn(e, t, n, a);
	(t === document.body || t === window || t === document || t instanceof HTMLMediaElement) && ln(() => {
		t.removeEventListener(e, o, a);
	});
}
function tr(e, t, n) {
	(t[Yn] ??= {})[e] = n;
}
function nr(e) {
	for (var t = 0; t < e.length; t++) Xn.add(e[t]);
	for (var n of Zn) n(e);
}
var rr = null;
function ir(e) {
	var t = this, n = t.ownerDocument, r = e.type, i = e.composedPath?.() || [], a = i[0] || e.target;
	rr = e;
	var o = 0, s = rr === e && e[Yn];
	if (s) {
		var l = i.indexOf(s);
		if (l !== -1 && (t === document || t === window)) {
			e[Yn] = t;
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
		var d = V, f = W;
		U(null), G(null);
		try {
			for (var p, m = []; a !== null && a !== t;) {
				try {
					var h = a[Yn]?.[r];
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
			e[Yn] = t, delete e.currentTarget, U(d), G(f);
		}
	}
}
//#endregion
//#region node_modules/svelte/src/internal/client/dom/reconciler.js
var ar = globalThis?.window?.trustedTypes && /* @__PURE__ */ globalThis.window.trustedTypes.createPolicy("svelte-trusted-html", { createHTML: (e) => e });
function or(e) {
	return ar?.createHTML(e) ?? e;
}
function sr(e) {
	var t = rn("template");
	return t.innerHTML = or(e.replaceAll("<!>", "<!---->")), t.content;
}
//#endregion
//#region node_modules/svelte/src/internal/client/dom/template.js
function cr(e, t) {
	var n = W;
	n.nodes === null && (n.nodes = {
		start: e,
		end: t,
		a: null,
		t: null
	});
}
/*#__NO_SIDE_EFFECTS__*/
function lr(e, t) {
	var n = !!(t & 1), r = !!(t & 2), i, a = !e.startsWith("<!>");
	return () => {
		if (x) return cr(S, null), S;
		i === void 0 && (i = sr(a ? e : "<!>" + e), n || (i = /* @__PURE__ */ Zt(i)));
		var t = r || qt ? document.importNode(i, !0) : i.cloneNode(!0);
		if (n) {
			var o = /* @__PURE__ */ Zt(t), s = t.lastChild;
			cr(o, s);
		} else cr(t, t);
		return t;
	};
}
function ur() {
	if (x) return cr(S, null), S;
	var e = document.createDocumentFragment(), t = document.createComment(""), n = F();
	return e.append(t, n), cr(t, n), e;
}
function dr(e, t) {
	if (x) {
		var n = W;
		(!(n.f & 32768) || n.nodes.end === null) && (n.nodes.end = S), Ie();
		return;
	}
	e !== null && e.before(t);
}
function fr() {
	if (x && S && S.nodeType === 8 && S.textContent?.startsWith("$")) {
		let e = S.textContent.substring(1);
		return Ie(), e;
	}
	return (window.__svelte ??= {}).uid ??= 1, `c${window.__svelte.uid++}`;
}
[.../* @__PURE__ */ "allowfullscreen.async.autofocus.autoplay.checked.controls.default.disabled.formnovalidate.indeterminate.inert.ismap.loop.multiple.muted.nomodule.novalidate.open.playsinline.readonly.required.reversed.seamless.selected.webkitdirectory.defer.disablepictureinpicture.disableremoteplayback".split(".")];
var pr = ["touchstart", "touchmove"];
function mr(e) {
	return pr.includes(e);
}
//#endregion
//#region node_modules/svelte/src/internal/client/render.js
var hr = !0;
function gr(e, t) {
	var n = t == null ? "" : typeof t == "object" ? `${t}` : t;
	n !== (e[ve] ??= e.nodeValue) && (e[ve] = n, e.nodeValue = `${n}`);
}
function _r(e, t) {
	return br(e, t);
}
function vr(t, n) {
	Xt(), n.intro = n.intro ?? !1;
	let r = n.target, i = x, a = S;
	try {
		for (var o = /* @__PURE__ */ Zt(r); o && (o.nodeType !== 8 || o.data !== "[");) o = /* @__PURE__ */ I(o);
		if (!o) throw e;
		Fe(!0), C(o);
		let i = br(t, {
			...n,
			anchor: o
		});
		return Fe(!1), i;
	} catch (i) {
		if (i instanceof Error && i.message.split("\n").some((e) => e.startsWith("https://svelte.dev/e/"))) throw i;
		return i !== e && console.warn("Failed to hydrate: ", i), n.recover === !1 && Ee(), Xt(), tn(r), Fe(!1), _r(t, n);
	} finally {
		Fe(i), C(a);
	}
}
var yr = /* @__PURE__ */ new Map();
function br(t, { target: n, anchor: r, props: i = {}, events: a, context: s, intro: c = !0, transformError: l }) {
	Xt();
	var u = void 0, d = pn(() => {
		var d = r ?? n.appendChild(F());
		ot(d, { pending: () => {} }, (n) => {
			Ge({});
			var r = w;
			if (s && (r.c = s), a && (i.$$events = a), x && cr(n, null), hr = c, u = t(n, i) || {}, hr = !0, x && (W.nodes.end = S, S === null || S.nodeType !== 8 || S.data !== "]")) throw Ne(), e;
			Ke();
		}, l);
		var f = /* @__PURE__ */ new Set(), p = (e) => {
			for (var t = 0; t < e.length; t++) {
				var r = e[t];
				if (!f.has(r)) {
					f.add(r);
					var i = mr(r);
					for (let e of [n, document]) {
						var a = yr.get(e);
						a === void 0 && (a = /* @__PURE__ */ new Map(), yr.set(e, a));
						var o = a.get(r);
						o === void 0 ? (e.addEventListener(r, ir, { passive: i }), a.set(r, 1)) : a.set(r, o + 1);
					}
				}
			}
		};
		return p(o(Xn)), Zn.add(p), () => {
			for (var e of f) for (let r of [n, document]) {
				var t = yr.get(r), i = t.get(e);
				--i == 0 ? (r.removeEventListener(e, ir), t.delete(e), t.size === 0 && yr.delete(r)) : t.set(e, i);
			}
			Zn.delete(p), d !== r && d.parentNode?.removeChild(d);
		};
	});
	return xr.set(u, d), u;
}
var xr = /* @__PURE__ */ new WeakMap();
function Sr(e, t) {
	let n = xr.get(e);
	return n ? (xr.delete(e), n(t)) : Promise.resolve();
}
//#endregion
//#region node_modules/svelte/src/internal/client/dom/blocks/branches.js
var Cr = class {
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
			if (n) En(n), this.#r.delete(t);
			else {
				var r = this.#n.get(t);
				r && (En(r.effect), this.#t.set(t, r.effect), this.#n.delete(t), r.fragment.lastChild.remove(), this.anchor.before(r.fragment), n = r.effect);
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
						On(r, t), t.append(F()), this.#n.set(e, {
							effect: r,
							fragment: t
						});
					} else z(r);
					this.#r.delete(e), this.#t.delete(e);
				};
				this.#i || !n ? (this.#r.add(e), wn(r, i, !1)) : i();
			}
		}
	};
	#o = (e) => {
		this.#e.delete(e);
		let t = Array.from(this.#e.values());
		for (let [e, n] of this.#n) t.includes(e) || (z(n.effect), this.#n.delete(e));
	};
	ensure(e, t) {
		var n = k, r = nn();
		if (t && !this.#t.has(e) && !this.#n.has(e)) {
			if (r) {
				var i = document.createDocumentFragment(), a = F();
				i.append(a), this.#n.set(e, {
					effect: R(() => t(a)),
					fragment: i
				});
			} else this.#t.set(e, R(() => t(this.anchor)));
		}
		if (this.#e.set(n, e), r) {
			for (let [t, r] of this.#t) t === e ? n.unskip_effect(r) : n.skip_effect(r);
			for (let [t, r] of this.#n) t === e ? n.unskip_effect(r.effect) : n.skip_effect(r.effect);
			n.oncommit(this.#a), n.ondiscard(this.#o);
		} else x && (this.anchor = S), this.#a(n);
	}
};
//#endregion
//#region node_modules/svelte/src/internal/client/dom/blocks/snippet.js
function wr(e, t, ...n) {
	var r = new Cr(e);
	vn(() => {
		let e = t() ?? null;
		r.ensure(e, e && ((t) => e(t, ...n)));
	}, ae);
}
//#endregion
//#region node_modules/svelte/src/internal/client/dom/blocks/if.js
function Tr(e, t, n = !1) {
	var r;
	x && (r = S, Ie());
	var i = new Cr(e), a = n ? ae : 0;
	function o(e, t) {
		if (x) {
			var n = Be(r);
			if (e !== parseInt(n.substring(1))) {
				var a = ze();
				C(a), i.anchor = a, Fe(!1), i.ensure(e, t), Fe(!0);
				return;
			}
		}
		i.ensure(e, t);
	}
	vn(() => {
		var e = !1;
		t((t, n = 0) => {
			e = !0, o(n, t);
		}), e || o(-1, null);
	}, a);
}
//#endregion
//#region node_modules/svelte/src/internal/client/timing.js
var Er = () => performance.now(), Q = {
	tick: (e) => requestAnimationFrame(e),
	now: () => Er(),
	tasks: /* @__PURE__ */ new Set()
};
//#endregion
//#region node_modules/svelte/src/internal/client/loop.js
function Dr() {
	let e = Q.now();
	Q.tasks.forEach((t) => {
		t.c(e) || (Q.tasks.delete(t), t.f());
	}), Q.tasks.size !== 0 && Q.tick(Dr);
}
function Or(e) {
	let t;
	return Q.tasks.size === 0 && Q.tick(Dr), {
		promise: new Promise((n) => {
			Q.tasks.add(t = {
				c: e,
				f: n
			});
		}),
		abort() {
			Q.tasks.delete(t);
		}
	};
}
//#endregion
//#region node_modules/svelte/src/internal/client/dom/elements/transitions.js
function kr(e, t) {
	rt(() => {
		e.dispatchEvent(new CustomEvent(t));
	});
}
function Ar(e) {
	if (e === "float") return "cssFloat";
	if (e === "offset") return "cssOffset";
	if (e.startsWith("--")) return e;
	let t = e.split("-");
	return t.length === 1 ? t[0] : t[0] + t.slice(1).map((e) => e[0].toUpperCase() + e.slice(1)).join("");
}
function jr(e) {
	let t = {}, n = e.split(";");
	for (let e of n) {
		let [n, r] = e.split(":");
		if (!n || r === void 0) break;
		let i = Ar(n.trim());
		t[i] = r.trim();
	}
	return t;
}
var Mr = (e) => e;
function Nr(e, t, n, r) {
	var i = !!(e & 1), a = !!(e & 2), o = i && a, s = !!(e & 4), c = o ? "both" : i ? "in" : "out", l, u = t.inert, d = t.style.overflow, f, p;
	function m() {
		return rt(() => l ??= n()(t, r?.() ?? {}, { direction: c }));
	}
	var h = {
		is_global: s,
		in() {
			if (t.inert = u, !i) {
				p?.abort(), p?.reset?.();
				return;
			}
			a || f?.abort(), f = Pr(t, m(), p, 1, () => {
				kr(t, "introstart");
			}, () => {
				kr(t, "introend"), f?.abort(), f = l = void 0, t.style.overflow = d;
			});
		},
		out(e) {
			if (!a) {
				e?.(), l = void 0;
				return;
			}
			t.inert = !0, p = Pr(t, m(), f, 0, () => {
				kr(t, "outrostart");
			}, () => {
				kr(t, "outroend"), e?.();
			});
		},
		stop: () => {
			f?.abort(), p?.abort();
		}
	}, g = W;
	if ((g.nodes.t ??= []).push(h), i && hr) {
		var _ = s;
		if (!_) {
			for (var v = g.parent; v && v.f & 65536;) for (; (v = v.parent) && !(v.f & 16););
			_ = !v || !!(v.f & 32768);
		}
		_ && mn(() => {
			Kn(() => h.in());
		});
	}
}
function Pr(e, t, n, r, i, a) {
	var o = r === 1;
	if (h(t)) {
		var s, c = !1;
		return E(() => {
			c || (s = Pr(e, t({ direction: o ? "in" : "out" }), n, r, i, a));
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
	let { delay: l = 0, css: u, tick: d, easing: f = Mr } = t;
	var p = [];
	if (o && n === void 0 && (d && d(0, 1), u)) {
		var m = jr(u(0, 1));
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
				var g = o + s * f(h / m), y = jr(u(g, 1 - g));
				l.push(y), p ||= y.overflow === "hidden";
			}
			p && (e.style.overflow = "hidden"), _ = () => {
				var e = v.currentTime;
				return o + s * f(e / c);
			}, d && Or(() => {
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
function Fr(e, t) {
	mn(() => {
		var n = e.getRootNode(), r = n.host ? n : n.head ?? n.ownerDocument.head;
		if (!r.querySelector("#" + t.hash)) {
			let e = rn("style");
			e.id = t.hash, e.textContent = t.code, r.appendChild(e);
		}
	});
}
//#endregion
//#region node_modules/svelte/src/internal/client/dom/elements/actions.js
function Ir(e, t, n) {
	mn(() => {
		var r = Kn(() => t(e, n?.()) || {});
		if (n && r?.update) {
			var i = !1, a = {};
			gn(() => {
				var e = n();
				qn(e), i && He(a, e) && (a = e, r.update(e));
			}), i = !0;
		}
		if (r?.destroy) return () => r.destroy();
	});
}
//#endregion
//#region node_modules/svelte/src/internal/shared/attributes.js
var Lr = [..." 	\n\r\f\xA0\v﻿"];
function Rr(e, t, n) {
	var r = e == null ? "" : "" + e;
	if (t && (r = r ? r + " " + t : t), n) {
		for (var i of Object.keys(n)) if (n[i]) r = r ? r + " " + i : i;
		else if (r.length) for (var a = i.length, o = 0; (o = r.indexOf(i, o)) >= 0;) {
			var s = o + a;
			(o === 0 || Lr.includes(r[o - 1])) && (s === r.length || Lr.includes(r[s])) ? r = (o === 0 ? "" : r.substring(0, o)) + r.substring(s + 1) : o = s;
		}
	}
	return r === "" ? null : r;
}
//#endregion
//#region node_modules/svelte/src/internal/client/dom/elements/class.js
function zr(e, t, n, r, i, a) {
	var o = e[ge];
	if (x || o !== n || o === void 0) {
		var s = Rr(n, r, a);
		(!x || s !== e.getAttribute("class")) && (s == null ? e.removeAttribute("class") : t ? e.className = s : e.setAttribute("class", s)), e[ge] = n;
	} else if (a && i !== a) for (var c in a) {
		var l = !!a[c];
		(i == null || l !== !!i[c]) && e.classList.toggle(c, l);
	}
	return a;
}
//#endregion
//#region node_modules/svelte/src/internal/client/dom/elements/attributes.js
var Br = Symbol("is custom element"), Vr = Symbol("is html"), Hr = be ? "link" : "LINK";
function Ur(e, t, n, r) {
	var i = Wr(e);
	x && (i[t] = e.getAttribute(t), t === "src" || t === "srcset" || t === "href" && e.nodeName === Hr) || i[t] !== (i[t] = n) && (t === "loading" && (e[me] = n), n == null ? e.removeAttribute(t) : typeof n != "string" && Kr(e).includes(t) ? e[t] = n : e.setAttribute(t, n));
}
function Wr(e) {
	return e[he] ??= {
		[Br]: e.nodeName.includes("-"),
		[Vr]: e.namespaceURI === n
	};
}
var Gr = /* @__PURE__ */ new Map();
function Kr(e) {
	var t = e.getAttribute("is") || e.nodeName, n = Gr.get(t);
	if (n) return n;
	Gr.set(t, n = []);
	for (var r, i = e, a = Element.prototype; a !== i;) {
		for (var o in r = u(i), r) r[o].set && o !== "innerHTML" && o !== "textContent" && o !== "innerText" && n.push(o);
		i = p(i);
	}
	return n;
}
//#endregion
//#region node_modules/svelte/src/internal/client/dom/elements/bindings/this.js
function qr(e, t) {
	return e === t || e?.[fe] === t;
}
function Jr(e = {}, t, n, r) {
	var i = w.r, a = W;
	return mn(() => {
		var o, s;
		return gn(() => {
			o = s, s = r?.() || [], Kn(() => {
				qr(n(...s), e) || (t(e, ...s), o && qr(n(...o), e) && t(null, ...o));
			});
		}), () => {
			let r = a;
			for (; r !== i && r.parent !== null && r.parent.f & 33554432;) r = r.parent;
			let o = () => {
				s && qr(n(...s), e) && t(null, ...s);
			}, c = r.teardown;
			r.teardown = () => {
				o(), c?.();
			};
		};
	}), e;
}
//#endregion
//#region node_modules/svelte/src/internal/client/reactivity/props.js
function $(e, t, n, r) {
	var i = !0, a = !!(n & 8), o = !!(n & 16), s = r, c = !0, u = void 0, d = () => o && i ? (u ??= /* @__PURE__ */ ft(r), Z(u)) : (c && (c = !1, s = o ? Kn(r) : r), s);
	let f;
	if (a) {
		var p = fe in e || pe in e;
		f = l(e, t)?.set ?? (p && t in e ? (n) => e[t] = n : void 0);
	}
	var m, h = !1;
	a ? [m, h] = nt(() => e[t]) : m = e[t], m === void 0 && r !== void 0 && (m = d(), f && (i && De(t), f(m)));
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
	var v = !1, y = (n & 1 ? ft : ht)(() => (v = !1, g()));
	a && Z(y);
	var b = W;
	return (function(e, t) {
		if (arguments.length > 0) {
			let n = t ? Z(y) : i && a ? Gt(e) : e;
			return P(y, n), v = !0, s !== void 0 && (s = n), e;
		}
		return B && v || b.f & 16384 ? y.v : Z(y);
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
			var r = /* @__PURE__ */ Bt(n, !1, !1);
			return t.set(e, r), r;
		};
		let r = new Proxy({
			...e.props || {},
			$$events: {}
		}, {
			get(e, r) {
				return Z(t.get(r) ?? n(r, Reflect.get(e, r)));
			},
			has(e, r) {
				return r === pe || (Z(t.get(r) ?? n(r, Reflect.get(e, r))), Reflect.has(e, r));
			},
			set(e, r, i) {
				return P(t.get(r) ?? n(r, i), i), Reflect.set(e, r, i);
			}
		});
		this.#t = (e.hydrate ? vr : _r)(e.component, {
			target: e.target,
			anchor: e.anchor,
			props: r,
			context: e.context,
			intro: e.intro ?? !1,
			recover: e.recover,
			transformError: e.transformError
		}), (!e?.props?.$$host || e.sync === !1) && jt(), this.#e = r.$$events;
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
			Sr(this.#t);
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
					let n = rn("slot");
					e !== "default" && (n.name = e), dr(t, n);
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
			}), this.$$me = fn(() => {
				gn(() => {
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
		this.#e = e, this.#t = it(t);
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
		super(() => r.matches, (e) => $n(r, "change", e));
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
var bi = /* @__PURE__ */ lr("<h2 class=\"worn-dialog-title svelte-qe35nh\"> </h2>"), xi = /* @__PURE__ */ lr("<div class=\"worn-dialog-backdrop svelte-qe35nh\" role=\"presentation\"><div role=\"dialog\" aria-modal=\"true\" tabindex=\"-1\"><div class=\"worn-dialog-head svelte-qe35nh\"><!> <button type=\"button\" class=\"worn-dialog-close svelte-qe35nh\" aria-label=\"Close\"></button></div> <div class=\"worn-dialog-body svelte-qe35nh\"><!></div></div></div>"), Si = {
	hash: "svelte-qe35nh",
	code: ".worn-dialog-backdrop.svelte-qe35nh {position:fixed;inset:0;height:100vh;height:100dvh;box-sizing:border-box;z-index:1000;display:flex;align-items:center;justify-content:center;background:rgba(0,0,0,0.35);backdrop-filter:blur(2px);padding:calc(24px + env(safe-area-inset-top, 0px)) calc(24px + env(safe-area-inset-right, 0px)) calc(24px + env(safe-area-inset-bottom, 0px)) calc(24px + env(safe-area-inset-left, 0px));}.worn-dialog.svelte-qe35nh {box-sizing:border-box;background:var(--cockpit-surface);border:1px solid var(--cockpit-border);border-radius:var(--cockpit-radius);box-shadow:0 16px 48px rgba(0,0,0,0.15);width:460px;max-width:100%;max-height:100%;overflow-y:auto;overscroll-behavior:contain;-webkit-overflow-scrolling:touch;position:relative;}\n	/* CSP-safe: no unsafe-inline for style-src, so size is a static class\n	   (a fixed preset) rather than an inline CSS var. */.worn-dialog.is-sm.svelte-qe35nh {width:360px;}.worn-dialog.is-lg.svelte-qe35nh {width:640px;}.worn-dialog-head.svelte-qe35nh {display:flex;align-items:center;justify-content:space-between;padding:18px 20px 0;}.worn-dialog-title.svelte-qe35nh {font-family:var(--font-family-display);font-size:18px;font-weight:680;color:var(--cockpit-text);margin:0;min-width:0;overflow-wrap:anywhere;}.worn-dialog-close.svelte-qe35nh {min-width:44px;min-height:44px;position:relative;width:44px;height:44px;border-radius:50%;border:0;background:transparent;color:var(--cockpit-text-muted);cursor:pointer;display:flex;align-items:center;justify-content:center;flex-shrink:0;touch-action:manipulation;}.worn-dialog-close.svelte-qe35nh::before,\n	.worn-dialog-close.svelte-qe35nh::after {content:'';position:absolute;left:50%;top:50%;width:12px;height:1.5px;border-radius:1px;background:currentColor;}.worn-dialog-close.svelte-qe35nh::before {transform:translate(-50%, -50%) rotate(45deg);}.worn-dialog-close.svelte-qe35nh::after {transform:translate(-50%, -50%) rotate(-45deg);}.worn-dialog-close.svelte-qe35nh:hover {background:var(--cockpit-hover-bg);}.worn-dialog-close.svelte-qe35nh:disabled {cursor:not-allowed;opacity:0.45;}.worn-dialog-close.svelte-qe35nh:focus-visible {outline:2px dashed var(--cockpit-accent);outline-offset:2px;}.worn-dialog-body.svelte-qe35nh {box-sizing:border-box;min-width:0;max-width:100%;overflow-x:auto;overflow-wrap:anywhere;padding:12px 20px 20px;}\n	@media (max-width: 480px) {.worn-dialog-backdrop.svelte-qe35nh {padding:calc(8px + env(safe-area-inset-top, 0px)) calc(8px + env(safe-area-inset-right, 0px)) calc(8px + env(safe-area-inset-bottom, 0px)) calc(8px + env(safe-area-inset-left, 0px));}\n	}"
};
function Ci(e, t) {
	let n = fr();
	Ge(t, !0), Fr(e, Si);
	let r = $(t, "open", 15, !1), i = $(t, "size", 3, "md"), a = $(t, "dismissible", 3, !0), o = `worn-dialog-title-${n}`, s = /* @__PURE__ */ N(null), c = /* @__PURE__ */ N(null);
	un(() => {
		if (!r() || !Z(s) || !Z(c) || typeof document > "u") return;
		let e = document.activeElement, t = Z(s), n = yi(Z(c));
		return Z(s).focus(), () => {
			n();
			let r = document.activeElement;
			e?.isConnected && (r === document.body || t.contains(r)) && e.focus({ preventScroll: !0 });
		};
	});
	function l() {
		return Z(s) ? Array.from(Z(s).querySelectorAll("a[href], area[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), summary, [contenteditable]:not([contenteditable=\"false\"]), [tabindex]:not([tabindex=\"-1\"])")).filter((e) => !e.closest("[inert]") && e.getClientRects().length > 0 && getComputedStyle(e).visibility !== "hidden") : [];
	}
	function u(e) {
		if (r()) {
			if (e.key === "Escape" && a()) {
				r(!1), t.onclose?.();
				return;
			}
			if (e.key === "Tab") {
				let t = l();
				if (!t.length) {
					e.preventDefault();
					return;
				}
				let n = t[0], r = t[t.length - 1], i = typeof document < "u" ? document.activeElement : null;
				e.shiftKey && (i === n || i === Z(s)) ? (e.preventDefault(), r.focus()) : !e.shiftKey && i === r && (e.preventDefault(), n.focus());
			}
		}
	}
	function d(e) {
		a() && e.target === e.currentTarget && (r(!1), t.onclose?.());
	}
	var f = ur();
	er("keydown", Kt, u);
	var p = $t(f), m = (e) => {
		var n = xi(), l = Qt(n);
		let u;
		var f = Qt(l), p = Qt(f), m = (e) => {
			var n = bi(), r = Qt(n, !0);
			Le(n), _n(() => {
				Ur(n, "id", o), gr(r, t.title);
			}), dr(e, n);
		};
		Tr(p, (e) => {
			t.title && e(m);
		});
		var h = en(p, 2);
		Le(f);
		var _ = en(f, 2);
		wr(Qt(_), () => t.children ?? g), Le(_), Le(l), Jr(l, (e) => P(s, e), () => Z(s)), Le(n), Jr(n, (e) => P(c, e), () => Z(c)), Ir(n, (e) => vi?.(e)), _n(() => {
			u = zr(l, 1, "worn-dialog svelte-qe35nh", null, u, {
				"is-sm": i() === "sm",
				"is-lg": i() === "lg"
			}), Ur(l, "aria-labelledby", t.title ? o : void 0), h.disabled = !a();
		}), tr("click", n, d), tr("click", h, () => {
			r(!1), t.onclose?.();
		}), Nr(3, l, () => ai, () => ({
			y: li.current ? 0 : 12,
			duration: li.current ? 0 : 280
		})), Nr(3, n, () => ii, () => ({ duration: li.current ? 0 : 200 })), dr(e, n);
	};
	Tr(p, (e) => {
		r() && e(m);
	}), dr(e, f), Ke();
}
nr(["click"]);
//#endregion
//#region src/DialogElement.svelte
var wi = /* @__PURE__ */ lr("<p class=\"worn-dialog-element-description svelte-w7uukb\"> </p>"), Ti = {
	hash: "svelte-w7uukb",
	code: ".worn-dialog-element-description.svelte-w7uukb {margin:0;color:var(--cockpit-text-muted);line-height:1.6;overflow-wrap:anywhere;}"
};
function Ei(e, t) {
	Ge(t, !0), Fr(e, Ti);
	let n = $(t, "open", 7, !1), r = $(t, "title", 7, ""), i = $(t, "description", 7, ""), a = $(t, "size", 7, "md"), o = $(t, "dismissible", 7, !0), s = t.$$host;
	function c() {
		n(!1), setTimeout(() => s.dispatchEvent(new CustomEvent("close")), 0);
	}
	return Ci(e, {
		get title() {
			return r();
		},
		get size() {
			return a();
		},
		get dismissible() {
			return o();
		},
		onclose: c,
		get open() {
			return n();
		},
		set open(e) {
			n(e);
		},
		children: (e, t) => {
			var n = ur(), r = $t(n), a = (e) => {
				var t = wi(), n = Qt(t, !0);
				Le(t), _n(() => gr(n, i())), dr(e, t);
			};
			Tr(r, (e) => {
				i() && e(a);
			}), dr(e, n);
		},
		$$slots: { default: !0 }
	}), Ke({
		get open() {
			return n();
		},
		set open(e = !1) {
			n(e), jt();
		},
		get title() {
			return r();
		},
		set title(e = "") {
			r(e), jt();
		},
		get description() {
			return i();
		},
		set description(e = "") {
			i(e), jt();
		},
		get size() {
			return a();
		},
		set size(e = "md") {
			a(e), jt();
		},
		get dismissible() {
			return o();
		},
		set dismissible(e = !0) {
			o(e), jt();
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
	},
	dismissible: {
		reflect: !0,
		type: "Boolean"
	}
}, [], []));
//#endregion
