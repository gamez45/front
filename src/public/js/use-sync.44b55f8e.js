var Q = Object.defineProperty,
    U = Object.defineProperties;
var X = Object.getOwnPropertyDescriptors;
var q = Object.getOwnPropertySymbols;
var Y = Object.prototype.hasOwnProperty,
    Z = Object.prototype.propertyIsEnumerable;
var A = (e, i, r) => i in e ? Q(e, i, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[i] = r,
    J = (e, i) => {
        for (var r in i || (i = {})) Y.call(i, r) && A(e, r, i[r]);
        if (q)
            for (var r of q(i)) Z.call(i, r) && A(e, r, i[r]);
        return e
    },
    O = (e, i) => U(e, X(i));
import { ab as P, l as E, T as W, v as k, o as b, y as ee, ae as y, aB as L } from "./vendor.90d6ad72.js";

function ge(e) { return e }

function me(e) { return e }

function _e(e) { return e }

function pe(e) { return e }

function he(e) { return e }

function be(e) { return e }

function we(e) { return e }
const F = P.extend({ type: "string", base: P.string(), messages: { "string.contains": "{{#label}} must contain [{{#substring}}]", "string.ncontains": "{{#label}} can't contain [{{#substring}}]" }, rules: { contains: { args: [{ name: "substring", ref: !0, assert: e => typeof e == "string", message: "must be a string" }], method(e) { return this.$_addRule({ name: "contains", args: { substring: e } }) }, validate(e, i, { substring: r }) { return e.includes(r) === !1 ? i.error("string.contains", { substring: r }) : e } }, ncontains: { args: [{ name: "substring", ref: !0, assert: e => typeof e == "string", message: "must be a string" }], method(e) { return this.$_addRule({ name: "ncontains", args: { substring: e } }) }, validate(e, i, { substring: r }) { return e.includes(r) === !0 ? i.error("string.ncontains", { substring: r }) : e } } } }),
    te = { requireAll: !1 };

function ne(e, i) {
    var r, d;
    e = e || {}, i = E.exports.merge({}, te, i);
    const t = {},
        n = Object.keys(e)[0];
    if (!n) throw new Error(`[generateJoi] Filter doesn't contain field key. Passed filter: ${JSON.stringify(e)}`);
    const u = Object.values(e)[0];
    if (!u) throw new Error(`[generateJoi] Filter doesn't contain filter rule. Passed filter: ${JSON.stringify(e)}`);
    if (((r = Object.keys(u)[0]) === null || r === void 0 ? void 0 : r.startsWith("_")) === !1) t[n] = F.object({
        [n]: ne(u, i)
    });
    else {
        const a = Object.keys(u)[0],
            s = Object.values(u)[0],
            g = () => { var l; return (l = t[n]) !== null && l !== void 0 ? l : F.any() },
            f = () => { var l; return (l = t[n]) !== null && l !== void 0 ? l : F.string() },
            w = () => { var l; return (l = t[n]) !== null && l !== void 0 ? l : F.number() },
            v = () => { var l; return (l = t[n]) !== null && l !== void 0 ? l : F.date() };
        if (a === "_eq" && (t[n] = g().equal(s)), a === "_neq" && (t[n] = g().not(s)), a === "_contains" && (t[n] = f().contains(s)), a === "_ncontains" && (t[n] = f().ncontains(s)), a === "_starts_with" && (t[n] = f().pattern(new RegExp(`^${E.exports.escapeRegExp(s)}.*`), { name: "starts_with" })), a === "_nstarts_with" && (t[n] = f().pattern(new RegExp(`^${E.exports.escapeRegExp(s)}.*`), { name: "starts_with", invert: !0 })), a === "_ends_with" && (t[n] = f().pattern(new RegExp(`.*${E.exports.escapeRegExp(s)}$`), { name: "ends_with" })), a === "_nends_with" && (t[n] = f().pattern(new RegExp(`.*${E.exports.escapeRegExp(s)}$`), { name: "ends_with", invert: !0 })), a === "_in" && (t[n] = g().equal(...s)), a === "_nin" && (t[n] = g().not(...s)), a === "_gt" && (t[n] = Number.isSafeInteger(s) ? w().greater(s) : v().greater(s)), a === "_gte" && (t[n] = Number.isSafeInteger(s) ? w().min(s) : v().min(s)), a === "_lt" && (t[n] = Number.isSafeInteger(s) ? w().less(s) : v().less(s)), a === "_lte" && (t[n] = Number.isSafeInteger(s) ? w().max(s) : v().max(s)), a === "_null" && (t[n] = g().valid(null)), a === "_nnull" && (t[n] = g().invalid(null)), a === "_empty" && (t[n] = g().valid("")), a === "_nempty" && (t[n] = g().invalid("")), a === "_between")
            if (s.every(l => Number.isSafeInteger(l))) {
                const l = s;
                t[n] = w().greater(l[0]).less(l[1])
            } else {
                const l = s;
                t[n] = v().greater(l[0]).less(l[1])
            }
        if (a === "_nbetween")
            if (s.every(l => Number.isSafeInteger(l))) {
                const l = s;
                t[n] = w().less(l[0]).greater(l[1])
            } else {
                const l = s;
                t[n] = v().less(l[0]).greater(l[1])
            }
        if (a === "_submitted" && (t[n] = g().required()), a === "_regex") {
            const l = s.startsWith("/") && s.endsWith("/");
            t[n] = f().regex(new RegExp(l ? s.slice(1, -1) : s))
        }
    }
    return t[n] = (d = t[n]) !== null && d !== void 0 ? d : F.any(), i.requireAll && (t[n] = t[n].required()), F.object(t).unknown()
}

function Se(e) { if (e === null) return []; const i = /{{(.*?)}}/g; let r = e.match(i); return Array.isArray(r) ? (r = r.map(d => d.replace(/{{/g, "").replace(/}}/g, "").trim()), r) : [] }

function ye(e) { var i, r, d; const { relation: t, collection: n, field: u } = e; return t ? t.collection === n && t.field === u && ((i = t.meta) === null || i === void 0 ? void 0 : i.one_collection_field) && ((r = t.meta) === null || r === void 0 ? void 0 : r.one_allowed_collections) ? "m2a" : t.collection === n && t.field === u ? "m2o" : t.related_collection === n && ((d = t.meta) === null || d === void 0 ? void 0 : d.one_field) === u ? "o2m" : null : null }
const ie = "stores",
    re = "api";

function le(e, i, r) {
    const d = e[i],
        t = e.length,
        n = i - r;
    if (d === void 0) return e;
    if (n > 0) return [...e.slice(0, r), d, ...e.slice(r, i), ...e.slice(i + 1, t)];
    if (n < 0) { const u = r + 1; return [...e.slice(0, i), ...e.slice(i + 1, u), d, ...e.slice(u, t)] }
    return e
}

function se() { const e = W(ie); if (!e) throw new Error("[useStores]: The stores could not be found."); return e }

function ae() { const e = W(re); if (!e) throw new Error("[useApi]: The api could not be found."); return e }

function ue(e) { const { useCollectionsStore: i, useFieldsStore: r } = se(), d = i(), t = r(), n = typeof e == "string" ? k(e) : e, u = b(() => d.collections.find(({ collection: o }) => o === n.value) || null), a = b(() => n.value ? t.getFieldsForCollection(n.value) : []), s = b(() => { var o; if (!a.value) return {}; const c = {}; for (const S of a.value)((o = S.schema) === null || o === void 0 ? void 0 : o.default_value) && (c[S.field] = S.schema.default_value); return c }), g = b(() => a.value.find(o => { var c; return o.collection === n.value && ((c = o.schema) === null || c === void 0 ? void 0 : c.is_primary_key) === !0 }) || null), f = b(() => { var o; return ((o = a.value) === null || o === void 0 ? void 0 : o.find(c => { var S; return (((S = c.meta) === null || S === void 0 ? void 0 : S.special) || []).includes("user_created") })) || null }), w = b(() => { var o, c; return ((c = (o = u.value) === null || o === void 0 ? void 0 : o.meta) === null || c === void 0 ? void 0 : c.sort_field) || null }), v = b(() => { var o, c; return ((c = (o = u.value) === null || o === void 0 ? void 0 : o.meta) === null || c === void 0 ? void 0 : c.singleton) === !0 }), l = b(() => !u.value || !u.value.meta ? null : u.value.meta.accountability); return { info: u, fields: a, defaults: s, primaryKeyField: g, userCreatedField: f, sortField: w, isSingleton: v, accountabilityScope: l } }

function xe(e, i, r = !0) {
    const d = ae(),
        { primaryKeyField: t } = ue(e),
        { fields: n, limit: u, sort: a, search: s, filter: g, page: f } = i,
        w = b(() => e.value ? e.value.startsWith("directus_") ? `/${e.value.substring(9)}` : `/items/${e.value}` : null),
        v = k([]),
        l = k(!1),
        o = k(null),
        c = k(null),
        S = k(null),
        M = b(() => { var _, p; return c.value === null || c.value < ((_ = y(u)) !== null && _ !== void 0 ? _ : 100) ? 1 : Math.ceil(c.value / ((p = y(u)) !== null && p !== void 0 ? p : 100)) });
    let $ = null,
        T = null;
    const N = E.exports.throttle(j, 350);
    return r && N(), ee([e, u, a, s, g, n, f], async(_, p) => { if (E.exports.isEqual(_, p)) return; const [h, m, x, R, I, C, oe] = _, [H, V, z, G, K, ce, de] = p;!h || !i || ((I !== K || m !== V || x !== z || R !== G) && (f.value = 1), E.exports.isEqual(h, H) === !1 && B(), N()) }, { deep: !0, immediate: !0 }), { itemCount: c, totalCount: S, items: v, totalPages: M, loading: l, error: o, changeManualSort: D, getItems: j };
    async function j() {
        var _, p;
        if (!w.value) return;
        $ == null || $.cancel(), $ = null, o.value = null, T && clearTimeout(T), T = setTimeout(() => { l.value = !0 }, 150);
        let h = [...(_ = y(n)) !== null && _ !== void 0 ? _ : []];
        !((p = y(n)) === null || p === void 0 ? void 0 : p.includes("*")) && t.value && h.includes(t.value.field) === !1 && h.push(t.value.field), h = h.filter(m => m.startsWith("$") === !1);
        try {
            $ = L.CancelToken.source();
            const m = await d.get(w.value, { params: { limit: y(u), fields: h, sort: y(a), page: y(f), search: y(s), filter: y(g), meta: ["filter_count", "total_count"] }, cancelToken: $.token });
            let x = m.data.data;
            e.value === "directus_files" && (x = x.map(R => O(J({}, R), { $thumbnail: R }))), v.value = x, S.value = m.data.meta.total_count, c.value = m.data.meta.filter_count, f && x.length === 0 && (f == null ? void 0 : f.value) !== 1 && (f.value = 1)
        } catch (m) { L.isCancel(m) || (o.value = m) } finally { T && (clearTimeout(T), T = null), l.value = !1 }
    }

    function B() { v.value = [], S.value = null, c.value = null }
    async function D({ item: _, to: p }) {
        var h;
        const m = (h = t.value) === null || h === void 0 ? void 0 : h.field;
        if (!m) return;
        const x = v.value.findIndex(C => C[m] === _),
            R = v.value.findIndex(C => C[m] === p);
        v.value = le(v.value, x, R);
        const I = b(() => `/utils/sort/${e.value}`);
        await d.post(I.value, { item: _, to: p })
    }
}

function Ee(e, i, r) { return b({get() { return e[i] }, set(d) { r(`update:${i}`, d) } }) }
export { re as A, ie as S, ue as a, Se as b, ye as c, pe as d, we as e, me as f, ne as g, ge as h, _e as i, xe as j, he as k, be as l, se as m, ae as n, Ee as u };