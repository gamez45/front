var ue = Object.defineProperty,
    ce = Object.defineProperties;
var de = Object.getOwnPropertyDescriptors;
var X = Object.getOwnPropertySymbols;
var pe = Object.prototype.hasOwnProperty,
    _e = Object.prototype.propertyIsEnumerable;
var Y = (e, t, n) => t in e ? ue(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n,
    W = (e, t) => {
        for (var n in t || (t = {})) pe.call(t, n) && Y(e, n, t[n]);
        if (X)
            for (var n of X(t)) _e.call(t, n) && Y(e, n, t[n]);
        return e
    },
    Z = (e, t) => ce(e, de(t));
import { n as S, u as j, o as $, v as N, A as R, y as x, r as s, F as q, G as D, p as a, q as m, w as u, V as g, t as c, I as B, aD as ve, B as h, a2 as P, K as I, L as ee, P as C, C as k, l as J, a1 as G, ax as fe, am as me, E as U, O as te, aF as ne, U as ge, S as ye, D as $e, M as be, N as he, W as ke, X as Se } from "./vendor.90d6ad72.js";
import { u as we, a as oe, _ as w, b as se, g as ae, c as K, M as Ie, t as Oe, d as Le, e as Be, f as Ce, h as H, i as re, j as Ae, H as Ve, k as Ne } from "../index.b9638729.js";
import "./use-sync.44b55f8e.js";
const Ue = S({
        setup() {
            const { t: e } = j(), t = we(), n = oe(), r = $(() => { var _; return n.settings === null || !((_ = n.settings) == null ? void 0 : _.project_logo) ? null : se(ae() + `assets/${n.settings.project_logo}`) }), p = N(!1), { queueHasItems: l } = R(t);
            x(() => l.value, _ => { _ && (p.value = !0) });
            const i = $(() => { var _; return (_ = n.settings) == null ? void 0 : _.project_url }),
                o = $(() => { var _; return ((_ = n.settings) == null ? void 0 : _.project_url) ? e("view_project") : !1 });
            return { customLogoPath: r, showLoader: p, stopSpinnerIfQueueIsEmpty: d, url: i, urlTooltip: o };

            function d() { l.value === !1 && (p.value = !1) }
        }
    }),
    Me = ["src"];

function je(e, t, n, r, p, l) {
    const i = s("v-progress-linear"),
        o = q("tooltip");
    return D((a(), m(ee(e.url ? "a" : "div"), { ref: "noopener noreferer", href: e.url, target: "_blank", class: I(["module-bar-logo", { loading: e.showLoader }]) }, { default: u(() => [e.customLogoPath ? (a(), g(P, { key: 0 }, [c(ve, { name: "fade" }, { default: u(() => [e.showLoader ? (a(), m(i, { key: 0, indeterminate: "", rounded: "", onAnimationiteration: e.stopSpinnerIfQueueIsEmpty }, null, 8, ["onAnimationiteration"])) : B("", !0)]), _: 1 }), h("img", { class: "custom-logo", src: e.customLogoPath, alt: "Project Logo" }, null, 8, Me)], 64)) : (a(), g("div", { key: 1, class: I(["logo", { running: e.showLoader }]), onAnimationiteration: t[0] || (t[0] = (...d) => e.stopSpinnerIfQueueIsEmpty && e.stopSpinnerIfQueueIsEmpty(...d)) }, null, 34))]), _: 1 }, 8, ["href", "class"])), [
        [o, e.urlTooltip, void 0, { right: !0 }]
    ])
}
var De = w(Ue, [
    ["render", je],
    ["__scopeId", "data-v-5c883768"]
]);
const Te = S({ setup() { const { t: e } = j(), t = K(), n = N(!1), r = $(() => t.currentUser === null || t.currentUser.avatar === null ? null : se(ae() + `assets/${t.currentUser.avatar.id}?key=system-medium-cover`)), p = $(() => { var d; return `/users/${(d=t.currentUser)==null?void 0:d.id}` }), l = $(() => "/logout"), i = t.fullName; return { t: e, userFullName: i, avatarURL: r, userProfileLink: p, signOutActive: n, signOutLink: l } } }),
    Ee = ["src", "alt"];

function Fe(e, t, n, r, p, l) {
    const i = s("v-icon"),
        o = s("v-button"),
        d = s("v-card-title"),
        _ = s("v-card-actions"),
        y = s("v-card"),
        v = s("v-dialog"),
        O = s("v-avatar"),
        f = s("router-link"),
        b = s("v-hover"),
        V = q("tooltip");
    return a(), m(b, { class: "module-bar-avatar" }, {
        default: u(({ hover: L }) => [c(v, { modelValue: e.signOutActive, "onUpdate:modelValue": t[1] || (t[1] = A => e.signOutActive = A), onEsc: t[2] || (t[2] = A => e.signOutActive = !1) }, {
            activator: u(({ on: A }) => [D(c(o, { tile: "", icon: "", "x-large": "", class: I([{ show: L }, "sign-out"]), onClick: A }, { default: u(() => [c(i, { name: "logout" })]), _: 2 }, 1032, ["class", "onClick"]), [
                [V, e.t("sign_out"), void 0, { right: !0 }]
            ])]),
            default: u(() => [c(y, null, { default: u(() => [c(d, null, { default: u(() => [C(k(e.t("sign_out_confirm")), 1)]), _: 1 }), c(_, null, { default: u(() => [c(o, { secondary: "", onClick: t[0] || (t[0] = A => e.signOutActive = !e.signOutActive) }, { default: u(() => [C(k(e.t("cancel")), 1)]), _: 1 }), c(o, { to: e.signOutLink }, { default: u(() => [C(k(e.t("sign_out")), 1)]), _: 1 }, 8, ["to"])]), _: 1 })]), _: 1 })]),
            _: 2
        }, 1032, ["modelValue"]), c(f, { to: e.userProfileLink }, {
            default: u(() => [D(c(O, { tile: "", large: "", class: I({ "no-avatar": !e.avatarURL }) }, { default: u(() => [e.avatarURL ? (a(), g("img", { key: 0, src: e.avatarURL, alt: e.userFullName, class: "avatar-image" }, null, 8, Ee)) : (a(), m(i, { key: 1, name: "account_circle", outline: "" }))]), _: 1 }, 8, ["class"]), [
                [V, e.userFullName, void 0, { right: !0 }]
            ])]),
            _: 1
        }, 8, ["to"])]),
        _: 1
    })
}
var Re = w(Te, [
    ["render", Fe],
    ["__scopeId", "data-v-4fec1dae"]
]);
const qe = S({
        components: { ModuleBarLogo: De, ModuleBarAvatar: Re },
        setup() {
            const e = oe(),
                { modules: t } = Le(),
                n = $(() => t.value.map(p => p.id));
            return { modules: $(() => { var p; return e.settings ? ((p = e.settings.module_bar) != null ? p : Ie).filter(l => l.type === "link" ? !0 : l.enabled && n.value.includes(l.id)).map(l => { if (l.type === "link") { const o = J.exports.omit(l, ["url"]); return l.url.startsWith("/") ? o.to = l.url : o.href = l.url, Oe(o) } const i = t.value.find(o => o.id === l.id); return Z(W(W({}, l), t.value.find(o => o.id === l.id)), { to: `/${i.id}` }) }) : [] }) }
        }
    }),
    Pe = { class: "module-bar" },
    Ge = { class: "modules" };

function He(e, t, n, r, p, l) {
    const i = s("module-bar-logo"),
        o = s("v-icon"),
        d = s("v-button"),
        _ = s("module-bar-avatar"),
        y = q("tooltip");
    return a(), g("div", Pe, [c(i), h("div", Ge, [(a(!0), g(P, null, G(e.modules, v => D((a(), m(d, { key: v.id, icon: "", "x-large": "", to: v.to, href: v.href, tile: "", style: fe(v.color ? { "--v-button-color-active": v.color } : null) }, { default: u(() => [c(o, { name: v.icon, outline: "" }, null, 8, ["name"])]), _: 2 }, 1032, ["to", "href", "style"])), [
        [y, v.name, void 0, { right: !0 }]
    ])), 128))]), c(_)])
}
var Qe = w(qe, [
    ["render", He],
    ["__scopeId", "data-v-53381a9e"]
]);
const ze = S({
    props: { sidebarOpen: { type: Boolean, default: !1 } },
    setup(e) {
        const t = N([]),
            n = N(!1);
        return x(() => e.sidebarOpen, async r => { r === !1 ? t.value = [] : (n.value = !0, await me(), n.value = !1) }), { openDetail: t, mandatory: n }
    }
});

function We(e, t, n, r, p, l) { const i = s("v-item-group"); return a(), m(i, { modelValue: e.openDetail, "onUpdate:modelValue": t[0] || (t[0] = o => e.openDetail = o), class: "sidebar-detail-group", scope: "sidebar-detail", mandatory: e.mandatory }, { default: u(() => [U(e.$slots, "default", {}, void 0, !0)]), _: 3 }, 8, ["modelValue", "mandatory"]) }
var Je = w(ze, [
        ["render", We],
        ["__scopeId", "data-v-ebb6371e"]
    ]),
    T = 1e3,
    E = T * 60,
    F = E * 60,
    M = F * 24,
    Ke = M * 7,
    Xe = M * 365.25,
    Q = function(e, t) { t = t || {}; var n = typeof e; if (n === "string" && e.length > 0) return Ye(e); if (n === "number" && isFinite(e)) return t.long ? xe(e) : Ze(e); throw new Error("val is not a non-empty string or a valid number. val=" + JSON.stringify(e)) };

function Ye(e) {
    if (e = String(e), !(e.length > 100)) {
        var t = /^(-?(?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|years?|yrs?|y)?$/i.exec(e);
        if (!!t) {
            var n = parseFloat(t[1]),
                r = (t[2] || "ms").toLowerCase();
            switch (r) {
                case "years":
                case "year":
                case "yrs":
                case "yr":
                case "y":
                    return n * Xe;
                case "weeks":
                case "week":
                case "w":
                    return n * Ke;
                case "days":
                case "day":
                case "d":
                    return n * M;
                case "hours":
                case "hour":
                case "hrs":
                case "hr":
                case "h":
                    return n * F;
                case "minutes":
                case "minute":
                case "mins":
                case "min":
                case "m":
                    return n * E;
                case "seconds":
                case "second":
                case "secs":
                case "sec":
                case "s":
                    return n * T;
                case "milliseconds":
                case "millisecond":
                case "msecs":
                case "msec":
                case "ms":
                    return n;
                default:
                    return
            }
        }
    }
}

function Ze(e) { var t = Math.abs(e); return t >= M ? Math.round(e / M) + "d" : t >= F ? Math.round(e / F) + "h" : t >= E ? Math.round(e / E) + "m" : t >= T ? Math.round(e / T) + "s" : e + "ms" }

function xe(e) { var t = Math.abs(e); return t >= M ? z(e, t, M, "day") : t >= F ? z(e, t, F, "hour") : t >= E ? z(e, t, E, "minute") : t >= T ? z(e, t, T, "second") : e + " ms" }

function z(e, t, n, r) { var p = t >= n * 1.5; return Math.round(e / n) + " " + r + (p ? "s" : "") }
const et = S({
        setup() {
            const { t: e } = j(), t = Be(), n = $(() => { const o = J.exports.sortBy(t.latency, ["timestamp"]); return o[o.length - 1] }), r = $(() => {
                if (!t.latency || t.latency.length === 0) return 0;
                const o = J.exports.sortBy(t.latency, ["timestamp"]),
                    d = o.slice(Math.max(o.length - 5, 0));
                let _ = 0;
                for (const { latency: y }
                    of d) _ += y;
                return Math.round(_ / d.length)
            }), p = $(() => r.value <= 250 ? 4 : r.value > 250 && r.value <= 500 ? 3 : r.value > 500 && r.value <= 750 ? 2 : 1), l = $(() => {
                switch (p.value) {
                    case 4:
                        return `${e("connection_excellent")}
(${Q(r.value)} ${e("latency")})`;
                    case 3:
                        return `${e("connection_good")}
(${Q(r.value)} ${e("latency")})`;
                    case 2:
                        return `${e("connection_fair")}
(${Q(r.value)} ${e("latency")})`;
                    case 1:
                        return `${e("connection_poor")}
(${Q(r.value)} ${e("latency")})`;
                    default:
                        return null
                }
            });
            return {
                icon: $(() => {
                    switch (p.value) {
                        case 4:
                            return "signal_wifi_4_bar";
                        case 3:
                            return "signal_wifi_3_bar";
                        case 2:
                            return "signal_wifi_2_bar";
                        case 1:
                            return "signal_wifi_1_bar";
                        default:
                            return null
                    }
                }),
                lastLatency: n,
                latencyTooltip: l
            }
        }
    }),
    tt = { class: "latency-indicator" };

function nt(e, t, n, r, p, l) {
    const i = s("v-progress-circular"),
        o = s("v-icon"),
        d = q("tooltip");
    return D((a(), g("div", tt, [e.lastLatency ? (a(), m(o, { key: 1, name: e.icon }, null, 8, ["name"])) : (a(), m(i, { key: 0, indeterminate: "" }))], 512)), [
        [d, e.latencyTooltip, void 0, { bottom: !0, end: !0 }]
    ])
}
var ot = w(et, [
    ["render", nt],
    ["__scopeId", "data-v-2cfd5c8b"]
]);
const st = S({ components: { LatencyIndicator: ot }, setup() { const e = Ce(); return { name: $(() => { var n, r; return (r = (n = e.info) == null ? void 0 : n.project) == null ? void 0 : r.project_name }) } } }),
    at = { class: "project-info" },
    rt = { class: "name" };

function it(e, t, n, r, p, l) { const i = s("latency-indicator"); return a(), g("div", at, [c(i), h("span", rt, k(e.name), 1)]) }
var lt = w(st, [
    ["render", it],
    ["__scopeId", "data-v-08488eb6"]
]);
const ut = S({
        props: { id: { type: String, required: !0 }, title: { type: String, required: !0 }, text: { type: String, default: null }, icon: { type: String, default: null }, type: { type: String, default: "info", validator: e => ["info", "success", "warning", "error"].includes(e) }, tail: { type: Boolean, default: !1 }, dense: { type: Boolean, default: !1 }, showClose: { type: Boolean, default: !1 }, loading: { type: Boolean, default: !1 }, progress: { type: Number, default: void 0 } },
        setup(e) {
            const t = H();
            return { close: n };

            function n() { e.showClose === !0 && t.remove(e.id) }
        }
    }),
    ct = { key: 0, class: "icon" },
    dt = { class: "content" },
    pt = { class: "title selectable" },
    _t = { key: 0, class: "text selectable" };

function vt(e, t, n, r, p, l) {
    const i = s("v-progress-circular"),
        o = s("v-icon");
    return a(), g("div", { class: I(["notification-item", [e.type, { tail: e.tail, dense: e.dense }]]), onClick: t[0] || (t[0] = (...d) => e.close && e.close(...d)) }, [e.loading || e.progress || e.icon ? (a(), g("div", ct, [e.loading ? (a(), m(i, { key: 0, indeterminate: "", small: "" })) : e.progress ? (a(), m(i, { key: 1, small: "", value: e.progress }, null, 8, ["value"])) : (a(), m(o, { key: 2, name: e.icon }, null, 8, ["name"]))])) : B("", !0), h("div", dt, [h("p", pt, k(e.title), 1), e.text ? (a(), g("p", _t, k(e.text), 1)) : B("", !0)]), e.showClose ? (a(), m(o, { key: 1, name: "close", clickable: "", class: "close", onClick: e.close }, null, 8, ["onClick"])) : B("", !0)], 2)
}
var ie = w(ut, [
    ["render", vt],
    ["__scopeId", "data-v-5b51205c"]
]);
const ft = S({ components: { NotificationItem: ie }, props: { dense: { type: Boolean, default: !1 } }, setup() { const e = H(); return { queue: R(e).queue } } });

function mt(e, t, n, r, p, l) { const i = s("notification-item"); return a(), m(ne, { class: "notifications-group", name: "slide-fade", tag: "div" }, { default: u(() => [U(e.$slots, "default", {}, void 0, !0), (a(!0), g(P, null, G(e.queue, (o, d) => (a(), m(i, te({ key: o.id }, o, { tail: d === e.queue.length - 1, dense: e.dense, "show-close": o.persist === !0 && o.closeable !== !1 }), null, 16, ["tail", "dense", "show-close"]))), 128))]), _: 3 }) }
var gt = w(ft, [
    ["render", mt],
    ["__scopeId", "data-v-31bc6bbb"]
]);
const yt = S({
        props: { to: { type: String, default: null }, icon: { type: String, default: "box" }, active: { type: Boolean, default: !1 } },
        emits: ["click"],
        setup() {
            const e = re(),
                { sidebarOpen: t } = R(e);
            return { sidebarOpen: t }
        }
    }),
    $t = { class: "icon" },
    bt = { key: 0, class: "title" };

function ht(e, t, n, r, p, l) { const i = s("v-icon"); return a(), m(ee(e.to ? "router-link" : "button"), { class: I(["sidebar-button", { active: e.active }]), onClick: t[0] || (t[0] = o => e.$emit("click", o)) }, { default: u(() => [h("div", $t, [c(i, { name: e.icon, outline: "" }, null, 8, ["name"])]), e.sidebarOpen ? (a(), g("div", bt, [U(e.$slots, "default", {}, void 0, !0)])) : B("", !0)]), _: 3 }, 8, ["class"]) }
var kt = w(yt, [
    ["render", ht],
    ["__scopeId", "data-v-3f4d4d50"]
]);
const St = S({ components: { SidebarButton: kt, NotificationItem: ie }, props: { sidebarOpen: { type: Boolean, default: !1 }, modelValue: { type: Boolean, default: !1 } }, emits: ["update:modelValue"], setup() { const { t: e } = j(), t = H(); return { t: e, lastFour: t.lastFour } } }),
    wt = { class: "notifications-preview" },
    It = { key: 0, class: "inline" },
    Ot = { class: "padding-box" };

function Lt(e, t, n, r, p, l) {
    const i = s("router-link"),
        o = s("notification-item"),
        d = s("transition-expand"),
        _ = s("sidebar-button"),
        y = q("tooltip");
    return a(), g("div", wt, [c(d, { tag: "div" }, { default: u(() => [e.modelValue ? (a(), g("div", It, [h("div", Ot, [c(i, { class: I(["link", { "has-items": e.lastFour.length > 0 }]), to: "/activity" }, { default: u(() => [C(k(e.t("show_all_activity")), 1)]), _: 1 }, 8, ["class"]), c(ne, { tag: "div", name: "notification", class: "transition" }, { default: u(() => [(a(!0), g(P, null, G(e.lastFour, v => (a(), m(o, te({ key: v.id }, v), null, 16))), 128))]), _: 1 })])])) : B("", !0)]), _: 1 }), D(c(_, { active: e.modelValue, class: "toggle", icon: "notifications", onClick: t[0] || (t[0] = v => e.$emit("update:modelValue", !e.modelValue)) }, { default: u(() => [C(k(e.t("notifications")), 1)]), _: 1 }, 8, ["active"]), [
        [y, e.t("notifications"), void 0, { left: !0 }]
    ])])
}
var Bt = w(St, [
    ["render", Lt],
    ["__scopeId", "data-v-8ca41ff4"]
]);
const Ct = S({
        setup() {
            const { t: e } = j(), { parsedInfo: t } = Ae(), n = H(), r = K(), p = $(() => n.dialogs);
            return { t: e, notifications: p, admin: r.isAdmin, done: i, getGitHubIssueLink: l };

            function l(o, d) { var y, v, O, f; const _ = `<!-- Please put a detailed explanation of the problem here. -->

---

### Project details
Directus Version: ${(y=t.value)==null?void 0:y.directus.version}
Environment: production
OS: ${(v=t.value)==null?void 0:v.os.type} ${(O=t.value)==null?void 0:O.os.version}
Node: ${(f=t.value)==null?void 0:f.node.version}

### Error

Title: ${d.title||"none"}
Message: ${d.text||"none"}

<details>
<summary>Stack Trace</summary>
<pre>
${JSON.stringify(d.error,Object.getOwnPropertyNames(d.error),2)}
</pre>
</details>
			`; return `https://github.com/directus/directus/issues/new?body=${encodeURIComponent(_)}` }

            function i(o) { n.remove(o) }
        }
    }),
    At = { class: "notification-dialogs" },
    Vt = ["href"];

function Nt(e, t, n, r, p, l) {
    const i = s("v-card-title"),
        o = s("v-error"),
        d = s("v-card-text"),
        _ = s("v-button"),
        y = s("v-card-actions"),
        v = s("v-card"),
        O = s("v-dialog");
    return a(), g("div", At, [(a(!0), g(P, null, G(e.notifications, f => (a(), m(O, { key: f.id, "model-value": !0, persist: "" }, { default: u(() => [c(v, { class: I([f.type]) }, { default: u(() => [c(i, null, { default: u(() => [C(k(f.title), 1)]), _: 2 }, 1024), f.text ? (a(), m(d, { key: 0 }, { default: u(() => [C(k(f.text) + " ", 1), f.error ? (a(), m(o, { key: 0, error: f.error }, null, 8, ["error"])) : B("", !0)]), _: 2 }, 1024)) : B("", !0), c(y, null, { default: u(() => [f.type === "error" && e.admin && f.code === "UNKNOWN" ? (a(), m(_, { key: 0, secondary: "" }, { default: u(() => [h("a", { target: "_blank", href: e.getGitHubIssueLink(f.id, f) }, k(e.t("report_error")), 9, Vt)]), _: 2 }, 1024)) : B("", !0), c(_, { onClick: b => e.done(f.id) }, { default: u(() => [C(k(e.t("dismiss")), 1)]), _: 2 }, 1032, ["onClick"])]), _: 2 }, 1024)]), _: 2 }, 1032, ["class"])]), _: 2 }, 1024))), 128))])
}
var Ut = w(Ct, [
    ["render", Nt],
    ["__scopeId", "data-v-bb61b36a"]
]);
const Mt = S({
        components: { ModuleBar: Qe, SidebarDetailGroup: Je, HeaderBar: Ve, ProjectInfo: lt, NotificationsGroup: gt, NotificationsPreview: Bt, NotificationDialogs: Ut },
        props: { title: { type: String, default: null }, smallHeader: { type: Boolean, default: !1 } },
        setup(e) {
            const { t } = j(), n = ge(), { title: r } = R(e), p = N(!1), l = N(), i = K(), o = re(), d = $(() => { var b, V; return i.currentUser ? ((V = (b = i.currentUser) == null ? void 0 : b.role) == null ? void 0 : V.app_access) || !1 : !0 }), _ = N(!1), { sidebarOpen: y, fullScreen: v } = R(o), O = $(() => { var b; return ((b = i.currentUser) == null ? void 0 : b.theme) || "auto" });
            return ye("main-element", l), n.afterEach(async() => {
                var b;
                (b = l.value) == null || b.scrollTo({ top: 0 }), v.value = !1
            }), Ne(r), { t, navOpen: p, contentEl: l, theme: O, sidebarOpen: y, openSidebar: f, notificationsPreviewActive: _, appAccess: d, fullScreen: v };

            function f(b) { b.target && b.target.classList.contains("close") === !1 && (y.value = !0) }
        }
    }),
    jt = e => (ke("data-v-d2b7ab78"), e = e(), Se(), e),
    Dt = C("Switch User"),
    Tt = { class: "module-nav alt-colors" },
    Et = { class: "module-nav-content" },
    Ft = { id: "main-content", ref: "contentEl", class: "content" },
    Rt = { class: "flex-container" },
    qt = jt(() => h("div", { class: "spacer" }, null, -1));

function Pt(e, t, n, r, p, l) {
    const i = s("v-button"),
        o = s("v-info"),
        d = s("module-bar"),
        _ = s("project-info"),
        y = s("header-bar"),
        v = s("sidebar-detail-group"),
        O = s("notifications-preview"),
        f = s("v-overlay"),
        b = s("notifications-group"),
        V = s("notification-dialogs");
    return e.appAccess === !1 ? (a(), m(o, { key: 0, center: "", title: e.t("no_app_access"), type: "danger", icon: "block" }, { append: u(() => [c(i, { to: "/logout" }, { default: u(() => [Dt]), _: 1 })]), default: u(() => [C(k(e.t("no_app_access_copy")) + " ", 1)]), _: 1 }, 8, ["title"])) : (a(), g("div", { key: 1, class: I(["private-view", { theme: e.theme, "full-screen": e.fullScreen }]) }, [h("aside", { id: "navigation", role: "navigation", "aria-label": "Module Navigation", class: I({ "is-open": e.navOpen }) }, [c(d), h("div", Tt, [c(_), h("div", Et, [U(e.$slots, "navigation", {}, void 0, !0)])])], 2), h("div", Ft, [c(y, { small: e.smallHeader, "show-sidebar-toggle": "", title: e.title, "onToggle:sidebar": t[0] || (t[0] = L => e.sidebarOpen = !e.sidebarOpen), onPrimary: t[1] || (t[1] = L => e.navOpen = !e.navOpen) }, $e({ _: 2 }, [G(e.$slots, (L, A) => ({ name: A, fn: u(le => [U(e.$slots, A, be(he(le)), void 0, !0)]) }))]), 1032, ["small", "title"]), h("main", null, [U(e.$slots, "default", {}, void 0, !0)])], 512), h("aside", { id: "sidebar", role: "contentinfo", class: I(["alt-colors", { "is-open": e.sidebarOpen }]), "aria-label": "Module Sidebar", onClick: t[3] || (t[3] = (...L) => e.openSidebar && e.openSidebar(...L)) }, [h("div", Rt, [c(v, { "sidebar-open": e.sidebarOpen }, { default: u(() => [U(e.$slots, "sidebar", {}, void 0, !0)]), _: 3 }, 8, ["sidebar-open"]), qt, c(O, { modelValue: e.notificationsPreviewActive, "onUpdate:modelValue": t[2] || (t[2] = L => e.notificationsPreviewActive = L), "sidebar-open": e.sidebarOpen }, null, 8, ["modelValue", "sidebar-open"])])], 2), c(f, { class: "nav-overlay", active: e.navOpen, onClick: t[4] || (t[4] = L => e.navOpen = !1) }, null, 8, ["active"]), c(f, { class: "sidebar-overlay", active: e.sidebarOpen, onClick: t[5] || (t[5] = L => e.sidebarOpen = !1) }, null, 8, ["active"]), e.notificationsPreviewActive === !1 ? (a(), m(b, { key: 0, dense: e.sidebarOpen === !1 }, null, 8, ["dense"])) : B("", !0), c(V)], 2))
}
var Wt = w(Mt, [
    ["render", Pt],
    ["__scopeId", "data-v-d2b7ab78"]
]);
export { Wt as PrivateView, Wt as default };