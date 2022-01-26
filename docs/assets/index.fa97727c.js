import {
  a as b,
  d,
  r as k,
  E as A,
  b as w,
  c as C,
  o as a,
  e as p,
  w as f,
  f as i,
  g as m,
  u as l,
  h as E,
  i as B,
  j as g,
  t as F,
  p as v,
  k as h,
  M as _,
  l as L,
} from "./vendor.cfca8088.js";
const N = function () {
  const o = document.createElement("link").relList;
  if (o && o.supports && o.supports("modulepreload")) return;
  for (const t of document.querySelectorAll('link[rel="modulepreload"]')) r(t);
  new MutationObserver((t) => {
    for (const s of t)
      if (s.type === "childList")
        for (const c of s.addedNodes)
          c.tagName === "LINK" && c.rel === "modulepreload" && r(c);
  }).observe(document, { childList: !0, subtree: !0 });
  function n(t) {
    const s = {};
    return (
      t.integrity && (s.integrity = t.integrity),
      t.referrerpolicy && (s.referrerPolicy = t.referrerpolicy),
      t.crossorigin === "use-credentials"
        ? (s.credentials = "include")
        : t.crossorigin === "anonymous"
        ? (s.credentials = "omit")
        : (s.credentials = "same-origin"),
      s
    );
  }
  function r(t) {
    if (t.ep) return;
    t.ep = !0;
    const s = n(t);
    fetch(t.href, s);
  }
};
N();
const u = b.create();
u.interceptors.request.use(
  (e) => (
    console.log(
      "%c\u{1F6F8} [Axios] Send API Request => ",
      "color: #2563eb; ",
      e.url
    ),
    e
  ),
  (e) => Promise.reject(e)
);
u.interceptors.response.use(
  (e) => (
    console.log(
      "%c\u{1F6F8} [Axios] Received API Response => ",
      "color: #378362; ",
      e.config.url
    ),
    console.log(e.data),
    e
  )
);
const O = async () => (await u.get("/example")).data;
var P = { count: O };
var y = (e, o) => {
  const n = e.__vccOpts || e;
  for (const [r, t] of o) n[r] = t;
  return n;
};
const $ = (e) => (v("data-v-3c9a99a1"), (e = e()), h(), e),
  q = { class: "card-header" },
  R = { class: "content" },
  V = $(() => i("span", null, "Axios\u8BF7\u6C42\u6570\u636E ", -1)),
  j = { class: "value" },
  D = d({
    setup(e) {
      const o = k(P.count, 1),
        n = o.target,
        r = o.loading;
      o.init();
      const t = () => {
        o.refresh();
      };
      return (s, c) => {
        const x = A,
          S = w,
          I = C;
        return (
          a(),
          p(
            S,
            { class: "item" },
            {
              header: f(() => [
                i("div", q, [
                  m(x, { circle: "", onClick: t, icon: l(E) }, null, 8, [
                    "icon",
                  ]),
                ]),
              ]),
              default: f(() => [
                B((a(), g("div", R, [V, i("span", j, F(l(n)), 1)])), [
                  [I, l(r)],
                ]),
              ]),
              _: 1,
            }
          )
        );
      };
    },
  });
var H = y(D, [["__scopeId", "data-v-3c9a99a1"]]);
const M = {},
  W = (e) => (v("data-v-4f7bf9d4"), (e = e()), h(), e),
  K = { class: "page" },
  T = W(() =>
    i("h1", null, "\u8FD9\u662F\u4E00\u4E2A\u7B80\u5355\u7684\u793A\u4F8B", -1)
  );
function z(e, o) {
  const n = H;
  return a(), g("div", K, [T, m(n)]);
}
var G = y(M, [
  ["render", z],
  ["__scopeId", "data-v-4f7bf9d4"],
]);
const J = d({
  setup(e) {
    return (o, n) => (a(), p(G, { msg: "Hello Vue 3 + TypeScript + Vite" }));
  },
});
_.setup({ timeout: "1200-1600" });
_.mock("/example", "get", () => _.Random.int(0, 1e4));
L(J).mount("#app");
