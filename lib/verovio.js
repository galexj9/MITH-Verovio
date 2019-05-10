(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.Verovio = f()}})(function(){var define,module,exports;return (function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

window.Verovio = require('./build/verovio-app');
module.exports = {
  App: Verovio.App
};

},{"./build/verovio-app":2}],2:[function(require,module,exports){
"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

module.exports = function (e) {
  var t = {};

  function n(r) {
    if (t[r]) return t[r].exports;
    var i = t[r] = {
      i: r,
      l: !1,
      exports: {}
    };
    return e[r].call(i.exports, i, i.exports, n), i.l = !0, i.exports;
  }

  return n.m = e, n.c = t, n.d = function (e, t, r) {
    n.o(e, t) || Object.defineProperty(e, t, {
      enumerable: !0,
      get: r
    });
  }, n.r = function (e) {
    "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
      value: "Module"
    }), Object.defineProperty(e, "__esModule", {
      value: !0
    });
  }, n.t = function (e, t) {
    if (1 & t && (e = n(e)), 8 & t) return e;
    if (4 & t && "object" == _typeof(e) && e && e.__esModule) return e;
    var r = Object.create(null);
    if (n.r(r), Object.defineProperty(r, "default", {
      enumerable: !0,
      value: e
    }), 2 & t && "string" != typeof e) for (var i in e) {
      n.d(r, i, function (t) {
        return e[t];
      }.bind(null, i));
    }
    return r;
  }, n.n = function (e) {
    var t = e && e.__esModule ? function () {
      return e.default;
    } : function () {
      return e;
    };
    return n.d(t, "a", t), t;
  }, n.o = function (e, t) {
    return Object.prototype.hasOwnProperty.call(e, t);
  }, n.p = "", n(n.s = 4);
}([function (e, t, n) {
  e.exports = function () {
    "use strict";

    var e = navigator.userAgent,
        t = navigator.platform,
        n = /gecko\/\d/i.test(e),
        r = /MSIE \d/.test(e),
        i = /Trident\/(?:[7-9]|\d{2,})\..*rv:(\d+)/.exec(e),
        o = /Edge\/(\d+)/.exec(e),
        a = r || i || o,
        s = a && (r ? document.documentMode || 6 : +(o || i)[1]),
        l = !o && /WebKit\//.test(e),
        u = l && /Qt\/\d+\.\d+/.test(e),
        c = !o && /Chrome\//.test(e),
        h = /Opera\//.test(e),
        d = /Apple Computer/.test(navigator.vendor),
        f = /Mac OS X 1\d\D([8-9]|\d\d)\D/.test(e),
        p = /PhantomJS/.test(e),
        g = !o && /AppleWebKit/.test(e) && /Mobile\/\w+/.test(e),
        v = /Android/.test(e),
        m = g || v || /webOS|BlackBerry|Opera Mini|Opera Mobi|IEMobile/i.test(e),
        b = g || /Mac/.test(t),
        y = /\bCrOS\b/.test(e),
        A = /win/i.test(t),
        w = h && e.match(/Version\/(\d*\.\d*)/);
    w && (w = Number(w[1])), w && w >= 15 && (h = !1, l = !0);
    var C = b && (u || h && (null == w || w < 12.11)),
        x = n || a && s >= 9;

    function k(e) {
      return new RegExp("(^|\\s)" + e + "(?:$|\\s)\\s*");
    }

    var I,
        M = function M(e, t) {
      var n = e.className,
          r = k(t).exec(n);

      if (r) {
        var i = n.slice(r.index + r[0].length);
        e.className = n.slice(0, r.index) + (i ? r[1] + i : "");
      }
    };

    function S(e) {
      for (var t = e.childNodes.length; t > 0; --t) {
        e.removeChild(e.firstChild);
      }

      return e;
    }

    function L(e, t) {
      return S(e).appendChild(t);
    }

    function T(e, t, n, r) {
      var i = document.createElement(e);
      if (n && (i.className = n), r && (i.style.cssText = r), "string" == typeof t) i.appendChild(document.createTextNode(t));else if (t) for (var o = 0; o < t.length; ++o) {
        i.appendChild(t[o]);
      }
      return i;
    }

    function O(e, t, n, r) {
      var i = T(e, t, n, r);
      return i.setAttribute("role", "presentation"), i;
    }

    function N(e, t) {
      if (3 == t.nodeType && (t = t.parentNode), e.contains) return e.contains(t);

      do {
        if (11 == t.nodeType && (t = t.host), t == e) return !0;
      } while (t = t.parentNode);
    }

    function E() {
      var e;

      try {
        e = document.activeElement;
      } catch (t) {
        e = document.body || null;
      }

      for (; e && e.shadowRoot && e.shadowRoot.activeElement;) {
        e = e.shadowRoot.activeElement;
      }

      return e;
    }

    function D(e, t) {
      var n = e.className;
      k(t).test(n) || (e.className += (n ? " " : "") + t);
    }

    function P(e, t) {
      for (var n = e.split(" "), r = 0; r < n.length; r++) {
        n[r] && !k(n[r]).test(t) && (t += " " + n[r]);
      }

      return t;
    }

    I = document.createRange ? function (e, t, n, r) {
      var i = document.createRange();
      return i.setEnd(r || e, n), i.setStart(e, t), i;
    } : function (e, t, n) {
      var r = document.body.createTextRange();

      try {
        r.moveToElementText(e.parentNode);
      } catch (e) {
        return r;
      }

      return r.collapse(!0), r.moveEnd("character", n), r.moveStart("character", t), r;
    };

    var W = function W(e) {
      e.select();
    };

    function R(e) {
      var t = Array.prototype.slice.call(arguments, 1);
      return function () {
        return e.apply(null, t);
      };
    }

    function z(e, t, n) {
      for (var r in t || (t = {}), e) {
        !e.hasOwnProperty(r) || !1 === n && t.hasOwnProperty(r) || (t[r] = e[r]);
      }

      return t;
    }

    function F(e, t, n, r, i) {
      null == t && -1 == (t = e.search(/[^\s\u00a0]/)) && (t = e.length);

      for (var o = r || 0, a = i || 0;;) {
        var s = e.indexOf("\t", o);
        if (s < 0 || s >= t) return a + (t - o);
        a += s - o, a += n - a % n, o = s + 1;
      }
    }

    g ? W = function W(e) {
      e.selectionStart = 0, e.selectionEnd = e.value.length;
    } : a && (W = function W(e) {
      try {
        e.select();
      } catch (e) {}
    });

    var H = function H() {
      this.id = null;
    };

    function B(e, t) {
      for (var n = 0; n < e.length; ++n) {
        if (e[n] == t) return n;
      }

      return -1;
    }

    H.prototype.set = function (e, t) {
      clearTimeout(this.id), this.id = setTimeout(t, e);
    };

    var j = 30,
        G = {
      toString: function toString() {
        return "CodeMirror.Pass";
      }
    },
        V = {
      scroll: !1
    },
        U = {
      origin: "*mouse"
    },
        Z = {
      origin: "+move"
    };

    function Y(e, t, n) {
      for (var r = 0, i = 0;;) {
        var o = e.indexOf("\t", r);
        -1 == o && (o = e.length);
        var a = o - r;
        if (o == e.length || i + a >= t) return r + Math.min(a, t - i);
        if (i += o - r, r = o + 1, (i += n - i % n) >= t) return r;
      }
    }

    var Q = [""];

    function X(e) {
      for (; Q.length <= e;) {
        Q.push(_(Q) + " ");
      }

      return Q[e];
    }

    function _(e) {
      return e[e.length - 1];
    }

    function K(e, t) {
      for (var n = [], r = 0; r < e.length; r++) {
        n[r] = t(e[r], r);
      }

      return n;
    }

    function J() {}

    function q(e, t) {
      var n;
      return Object.create ? n = Object.create(e) : (J.prototype = e, n = new J()), t && z(t, n), n;
    }

    var $ = /[\u00df\u0587\u0590-\u05f4\u0600-\u06ff\u3040-\u309f\u30a0-\u30ff\u3400-\u4db5\u4e00-\u9fcc\uac00-\ud7af]/;

    function ee(e) {
      return /\w/.test(e) || e > "" && (e.toUpperCase() != e.toLowerCase() || $.test(e));
    }

    function te(e, t) {
      return t ? !!(t.source.indexOf("\\w") > -1 && ee(e)) || t.test(e) : ee(e);
    }

    function ne(e) {
      for (var t in e) {
        if (e.hasOwnProperty(t) && e[t]) return !1;
      }

      return !0;
    }

    var re = /[\u0300-\u036f\u0483-\u0489\u0591-\u05bd\u05bf\u05c1\u05c2\u05c4\u05c5\u05c7\u0610-\u061a\u064b-\u065e\u0670\u06d6-\u06dc\u06de-\u06e4\u06e7\u06e8\u06ea-\u06ed\u0711\u0730-\u074a\u07a6-\u07b0\u07eb-\u07f3\u0816-\u0819\u081b-\u0823\u0825-\u0827\u0829-\u082d\u0900-\u0902\u093c\u0941-\u0948\u094d\u0951-\u0955\u0962\u0963\u0981\u09bc\u09be\u09c1-\u09c4\u09cd\u09d7\u09e2\u09e3\u0a01\u0a02\u0a3c\u0a41\u0a42\u0a47\u0a48\u0a4b-\u0a4d\u0a51\u0a70\u0a71\u0a75\u0a81\u0a82\u0abc\u0ac1-\u0ac5\u0ac7\u0ac8\u0acd\u0ae2\u0ae3\u0b01\u0b3c\u0b3e\u0b3f\u0b41-\u0b44\u0b4d\u0b56\u0b57\u0b62\u0b63\u0b82\u0bbe\u0bc0\u0bcd\u0bd7\u0c3e-\u0c40\u0c46-\u0c48\u0c4a-\u0c4d\u0c55\u0c56\u0c62\u0c63\u0cbc\u0cbf\u0cc2\u0cc6\u0ccc\u0ccd\u0cd5\u0cd6\u0ce2\u0ce3\u0d3e\u0d41-\u0d44\u0d4d\u0d57\u0d62\u0d63\u0dca\u0dcf\u0dd2-\u0dd4\u0dd6\u0ddf\u0e31\u0e34-\u0e3a\u0e47-\u0e4e\u0eb1\u0eb4-\u0eb9\u0ebb\u0ebc\u0ec8-\u0ecd\u0f18\u0f19\u0f35\u0f37\u0f39\u0f71-\u0f7e\u0f80-\u0f84\u0f86\u0f87\u0f90-\u0f97\u0f99-\u0fbc\u0fc6\u102d-\u1030\u1032-\u1037\u1039\u103a\u103d\u103e\u1058\u1059\u105e-\u1060\u1071-\u1074\u1082\u1085\u1086\u108d\u109d\u135f\u1712-\u1714\u1732-\u1734\u1752\u1753\u1772\u1773\u17b7-\u17bd\u17c6\u17c9-\u17d3\u17dd\u180b-\u180d\u18a9\u1920-\u1922\u1927\u1928\u1932\u1939-\u193b\u1a17\u1a18\u1a56\u1a58-\u1a5e\u1a60\u1a62\u1a65-\u1a6c\u1a73-\u1a7c\u1a7f\u1b00-\u1b03\u1b34\u1b36-\u1b3a\u1b3c\u1b42\u1b6b-\u1b73\u1b80\u1b81\u1ba2-\u1ba5\u1ba8\u1ba9\u1c2c-\u1c33\u1c36\u1c37\u1cd0-\u1cd2\u1cd4-\u1ce0\u1ce2-\u1ce8\u1ced\u1dc0-\u1de6\u1dfd-\u1dff\u200c\u200d\u20d0-\u20f0\u2cef-\u2cf1\u2de0-\u2dff\u302a-\u302f\u3099\u309a\ua66f-\ua672\ua67c\ua67d\ua6f0\ua6f1\ua802\ua806\ua80b\ua825\ua826\ua8c4\ua8e0-\ua8f1\ua926-\ua92d\ua947-\ua951\ua980-\ua982\ua9b3\ua9b6-\ua9b9\ua9bc\uaa29-\uaa2e\uaa31\uaa32\uaa35\uaa36\uaa43\uaa4c\uaab0\uaab2-\uaab4\uaab7\uaab8\uaabe\uaabf\uaac1\uabe5\uabe8\uabed\udc00-\udfff\ufb1e\ufe00-\ufe0f\ufe20-\ufe26\uff9e\uff9f]/;

    function ie(e) {
      return e.charCodeAt(0) >= 768 && re.test(e);
    }

    function oe(e, t, n) {
      for (; (n < 0 ? t > 0 : t < e.length) && ie(e.charAt(t));) {
        t += n;
      }

      return t;
    }

    function ae(e, t, n) {
      for (var r = t > n ? -1 : 1;;) {
        if (t == n) return t;
        var i = (t + n) / 2,
            o = r < 0 ? Math.ceil(i) : Math.floor(i);
        if (o == t) return e(o) ? t : n;
        e(o) ? n = o : t = o + r;
      }
    }

    function se(e, t) {
      if ((t -= e.first) < 0 || t >= e.size) throw new Error("There is no line " + (t + e.first) + " in the document.");

      for (var n = e; !n.lines;) {
        for (var r = 0;; ++r) {
          var i = n.children[r],
              o = i.chunkSize();

          if (t < o) {
            n = i;
            break;
          }

          t -= o;
        }
      }

      return n.lines[t];
    }

    function le(e, t, n) {
      var r = [],
          i = t.line;
      return e.iter(t.line, n.line + 1, function (e) {
        var o = e.text;
        i == n.line && (o = o.slice(0, n.ch)), i == t.line && (o = o.slice(t.ch)), r.push(o), ++i;
      }), r;
    }

    function ue(e, t, n) {
      var r = [];
      return e.iter(t, n, function (e) {
        r.push(e.text);
      }), r;
    }

    function ce(e, t) {
      var n = t - e.height;
      if (n) for (var r = e; r; r = r.parent) {
        r.height += n;
      }
    }

    function he(e) {
      if (null == e.parent) return null;

      for (var t = e.parent, n = B(t.lines, e), r = t.parent; r; t = r, r = r.parent) {
        for (var i = 0; r.children[i] != t; ++i) {
          n += r.children[i].chunkSize();
        }
      }

      return n + t.first;
    }

    function de(e, t) {
      var n = e.first;

      e: do {
        for (var r = 0; r < e.children.length; ++r) {
          var i = e.children[r],
              o = i.height;

          if (t < o) {
            e = i;
            continue e;
          }

          t -= o, n += i.chunkSize();
        }

        return n;
      } while (!e.lines);

      for (var a = 0; a < e.lines.length; ++a) {
        var s = e.lines[a],
            l = s.height;
        if (t < l) break;
        t -= l;
      }

      return n + a;
    }

    function fe(e, t) {
      return t >= e.first && t < e.first + e.size;
    }

    function pe(e, t) {
      return String(e.lineNumberFormatter(t + e.firstLineNumber));
    }

    function ge(e, t, n) {
      if (void 0 === n && (n = null), !(this instanceof ge)) return new ge(e, t, n);
      this.line = e, this.ch = t, this.sticky = n;
    }

    function ve(e, t) {
      return e.line - t.line || e.ch - t.ch;
    }

    function me(e, t) {
      return e.sticky == t.sticky && 0 == ve(e, t);
    }

    function be(e) {
      return ge(e.line, e.ch);
    }

    function ye(e, t) {
      return ve(e, t) < 0 ? t : e;
    }

    function Ae(e, t) {
      return ve(e, t) < 0 ? e : t;
    }

    function we(e, t) {
      return Math.max(e.first, Math.min(t, e.first + e.size - 1));
    }

    function Ce(e, t) {
      if (t.line < e.first) return ge(e.first, 0);
      var n = e.first + e.size - 1;
      return t.line > n ? ge(n, se(e, n).text.length) : function (e, t) {
        var n = e.ch;
        return null == n || n > t ? ge(e.line, t) : n < 0 ? ge(e.line, 0) : e;
      }(t, se(e, t.line).text.length);
    }

    function xe(e, t) {
      for (var n = [], r = 0; r < t.length; r++) {
        n[r] = Ce(e, t[r]);
      }

      return n;
    }

    var ke = !1,
        Ie = !1;

    function Me(e, t, n) {
      this.marker = e, this.from = t, this.to = n;
    }

    function Se(e, t) {
      if (e) for (var n = 0; n < e.length; ++n) {
        var r = e[n];
        if (r.marker == t) return r;
      }
    }

    function Le(e, t) {
      for (var n, r = 0; r < e.length; ++r) {
        e[r] != t && (n || (n = [])).push(e[r]);
      }

      return n;
    }

    function Te(e, t) {
      if (t.full) return null;
      var n = fe(e, t.from.line) && se(e, t.from.line).markedSpans,
          r = fe(e, t.to.line) && se(e, t.to.line).markedSpans;
      if (!n && !r) return null;

      var i = t.from.ch,
          o = t.to.ch,
          a = 0 == ve(t.from, t.to),
          s = function (e, t, n) {
        var r;
        if (e) for (var i = 0; i < e.length; ++i) {
          var o = e[i],
              a = o.marker,
              s = null == o.from || (a.inclusiveLeft ? o.from <= t : o.from < t);

          if (s || o.from == t && "bookmark" == a.type && (!n || !o.marker.insertLeft)) {
            var l = null == o.to || (a.inclusiveRight ? o.to >= t : o.to > t);
            (r || (r = [])).push(new Me(a, o.from, l ? null : o.to));
          }
        }
        return r;
      }(n, i, a),
          l = function (e, t, n) {
        var r;
        if (e) for (var i = 0; i < e.length; ++i) {
          var o = e[i],
              a = o.marker,
              s = null == o.to || (a.inclusiveRight ? o.to >= t : o.to > t);

          if (s || o.from == t && "bookmark" == a.type && (!n || o.marker.insertLeft)) {
            var l = null == o.from || (a.inclusiveLeft ? o.from <= t : o.from < t);
            (r || (r = [])).push(new Me(a, l ? null : o.from - t, null == o.to ? null : o.to - t));
          }
        }
        return r;
      }(r, o, a),
          u = 1 == t.text.length,
          c = _(t.text).length + (u ? i : 0);

      if (s) for (var h = 0; h < s.length; ++h) {
        var d = s[h];

        if (null == d.to) {
          var f = Se(l, d.marker);
          f ? u && (d.to = null == f.to ? null : f.to + c) : d.to = i;
        }
      }
      if (l) for (var p = 0; p < l.length; ++p) {
        var g = l[p];

        if (null != g.to && (g.to += c), null == g.from) {
          var v = Se(s, g.marker);
          v || (g.from = c, u && (s || (s = [])).push(g));
        } else g.from += c, u && (s || (s = [])).push(g);
      }
      s && (s = Oe(s)), l && l != s && (l = Oe(l));
      var m = [s];

      if (!u) {
        var b,
            y = t.text.length - 2;
        if (y > 0 && s) for (var A = 0; A < s.length; ++A) {
          null == s[A].to && (b || (b = [])).push(new Me(s[A].marker, null, null));
        }

        for (var w = 0; w < y; ++w) {
          m.push(b);
        }

        m.push(l);
      }

      return m;
    }

    function Oe(e) {
      for (var t = 0; t < e.length; ++t) {
        var n = e[t];
        null != n.from && n.from == n.to && !1 !== n.marker.clearWhenEmpty && e.splice(t--, 1);
      }

      return e.length ? e : null;
    }

    function Ne(e) {
      var t = e.markedSpans;

      if (t) {
        for (var n = 0; n < t.length; ++n) {
          t[n].marker.detachLine(e);
        }

        e.markedSpans = null;
      }
    }

    function Ee(e, t) {
      if (t) {
        for (var n = 0; n < t.length; ++n) {
          t[n].marker.attachLine(e);
        }

        e.markedSpans = t;
      }
    }

    function De(e) {
      return e.inclusiveLeft ? -1 : 0;
    }

    function Pe(e) {
      return e.inclusiveRight ? 1 : 0;
    }

    function We(e, t) {
      var n = e.lines.length - t.lines.length;
      if (0 != n) return n;
      var r = e.find(),
          i = t.find(),
          o = ve(r.from, i.from) || De(e) - De(t);
      if (o) return -o;
      var a = ve(r.to, i.to) || Pe(e) - Pe(t);
      return a || t.id - e.id;
    }

    function Re(e, t) {
      var n,
          r = Ie && e.markedSpans;
      if (r) for (var i = void 0, o = 0; o < r.length; ++o) {
        (i = r[o]).marker.collapsed && null == (t ? i.from : i.to) && (!n || We(n, i.marker) < 0) && (n = i.marker);
      }
      return n;
    }

    function ze(e) {
      return Re(e, !0);
    }

    function Fe(e) {
      return Re(e, !1);
    }

    function He(e, t) {
      var n,
          r = Ie && e.markedSpans;
      if (r) for (var i = 0; i < r.length; ++i) {
        var o = r[i];
        o.marker.collapsed && (null == o.from || o.from < t) && (null == o.to || o.to > t) && (!n || We(n, o.marker) < 0) && (n = o.marker);
      }
      return n;
    }

    function Be(e, t, n, r, i) {
      var o = se(e, t),
          a = Ie && o.markedSpans;
      if (a) for (var s = 0; s < a.length; ++s) {
        var l = a[s];

        if (l.marker.collapsed) {
          var u = l.marker.find(0),
              c = ve(u.from, n) || De(l.marker) - De(i),
              h = ve(u.to, r) || Pe(l.marker) - Pe(i);
          if (!(c >= 0 && h <= 0 || c <= 0 && h >= 0) && (c <= 0 && (l.marker.inclusiveRight && i.inclusiveLeft ? ve(u.to, n) >= 0 : ve(u.to, n) > 0) || c >= 0 && (l.marker.inclusiveRight && i.inclusiveLeft ? ve(u.from, r) <= 0 : ve(u.from, r) < 0))) return !0;
        }
      }
    }

    function je(e) {
      for (var t; t = ze(e);) {
        e = t.find(-1, !0).line;
      }

      return e;
    }

    function Ge(e, t) {
      var n = se(e, t),
          r = je(n);
      return n == r ? t : he(r);
    }

    function Ve(e, t) {
      if (t > e.lastLine()) return t;
      var n,
          r = se(e, t);
      if (!Ue(e, r)) return t;

      for (; n = Fe(r);) {
        r = n.find(1, !0).line;
      }

      return he(r) + 1;
    }

    function Ue(e, t) {
      var n = Ie && t.markedSpans;
      if (n) for (var r = void 0, i = 0; i < n.length; ++i) {
        if ((r = n[i]).marker.collapsed) {
          if (null == r.from) return !0;
          if (!r.marker.widgetNode && 0 == r.from && r.marker.inclusiveLeft && Ze(e, t, r)) return !0;
        }
      }
    }

    function Ze(e, t, n) {
      if (null == n.to) {
        var r = n.marker.find(1, !0);
        return Ze(e, r.line, Se(r.line.markedSpans, n.marker));
      }

      if (n.marker.inclusiveRight && n.to == t.text.length) return !0;

      for (var i = void 0, o = 0; o < t.markedSpans.length; ++o) {
        if ((i = t.markedSpans[o]).marker.collapsed && !i.marker.widgetNode && i.from == n.to && (null == i.to || i.to != n.from) && (i.marker.inclusiveLeft || n.marker.inclusiveRight) && Ze(e, t, i)) return !0;
      }
    }

    function Ye(e) {
      for (var t = 0, n = (e = je(e)).parent, r = 0; r < n.lines.length; ++r) {
        var i = n.lines[r];
        if (i == e) break;
        t += i.height;
      }

      for (var o = n.parent; o; o = (n = o).parent) {
        for (var a = 0; a < o.children.length; ++a) {
          var s = o.children[a];
          if (s == n) break;
          t += s.height;
        }
      }

      return t;
    }

    function Qe(e) {
      if (0 == e.height) return 0;

      for (var t, n = e.text.length, r = e; t = ze(r);) {
        var i = t.find(0, !0);
        r = i.from.line, n += i.from.ch - i.to.ch;
      }

      for (r = e; t = Fe(r);) {
        var o = t.find(0, !0);
        n -= r.text.length - o.from.ch, r = o.to.line, n += r.text.length - o.to.ch;
      }

      return n;
    }

    function Xe(e) {
      var t = e.display,
          n = e.doc;
      t.maxLine = se(n, n.first), t.maxLineLength = Qe(t.maxLine), t.maxLineChanged = !0, n.iter(function (e) {
        var n = Qe(e);
        n > t.maxLineLength && (t.maxLineLength = n, t.maxLine = e);
      });
    }

    var _e = null;

    function Ke(e, t, n) {
      var r;
      _e = null;

      for (var i = 0; i < e.length; ++i) {
        var o = e[i];
        if (o.from < t && o.to > t) return i;
        o.to == t && (o.from != o.to && "before" == n ? r = i : _e = i), o.from == t && (o.from != o.to && "before" != n ? r = i : _e = i);
      }

      return null != r ? r : _e;
    }

    var Je = function () {
      var e = "bbbbbbbbbtstwsbbbbbbbbbbbbbbssstwNN%%%NNNNNN,N,N1111111111NNNNNNNLLLLLLLLLLLLLLLLLLLLLLLLLLNNNNNNLLLLLLLLLLLLLLLLLLLLLLLLLLNNNNbbbbbbsbbbbbbbbbbbbbbbbbbbbbbbbbb,N%%%%NNNNLNNNNN%%11NLNNN1LNNNNNLLLLLLLLLLLLLLLLLLLLLLLNLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLN",
          t = "nnnnnnNNr%%r,rNNmmmmmmmmmmmrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrmmmmmmmmmmmmmmmmmmmmmnnnnnnnnnn%nnrrrmrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrmmmmmmmnNmmmmmmrrmmNmmmmrr1111111111";

      function n(n) {
        return n <= 247 ? e.charAt(n) : 1424 <= n && n <= 1524 ? "R" : 1536 <= n && n <= 1785 ? t.charAt(n - 1536) : 1774 <= n && n <= 2220 ? "r" : 8192 <= n && n <= 8203 ? "w" : 8204 == n ? "b" : "L";
      }

      var r = /[\u0590-\u05f4\u0600-\u06ff\u0700-\u08ac]/,
          i = /[stwN]/,
          o = /[LRr]/,
          a = /[Lb1n]/,
          s = /[1n]/;

      function l(e, t, n) {
        this.level = e, this.from = t, this.to = n;
      }

      return function (e, t) {
        var u = "ltr" == t ? "L" : "R";
        if (0 == e.length || "ltr" == t && !r.test(e)) return !1;

        for (var c = e.length, h = [], d = 0; d < c; ++d) {
          h.push(n(e.charCodeAt(d)));
        }

        for (var f = 0, p = u; f < c; ++f) {
          var g = h[f];
          "m" == g ? h[f] = p : p = g;
        }

        for (var v = 0, m = u; v < c; ++v) {
          var b = h[v];
          "1" == b && "r" == m ? h[v] = "n" : o.test(b) && (m = b, "r" == b && (h[v] = "R"));
        }

        for (var y = 1, A = h[0]; y < c - 1; ++y) {
          var w = h[y];
          "+" == w && "1" == A && "1" == h[y + 1] ? h[y] = "1" : "," != w || A != h[y + 1] || "1" != A && "n" != A || (h[y] = A), A = w;
        }

        for (var C = 0; C < c; ++C) {
          var x = h[C];
          if ("," == x) h[C] = "N";else if ("%" == x) {
            var k = void 0;

            for (k = C + 1; k < c && "%" == h[k]; ++k) {
              ;
            }

            for (var I = C && "!" == h[C - 1] || k < c && "1" == h[k] ? "1" : "N", M = C; M < k; ++M) {
              h[M] = I;
            }

            C = k - 1;
          }
        }

        for (var S = 0, L = u; S < c; ++S) {
          var T = h[S];
          "L" == L && "1" == T ? h[S] = "L" : o.test(T) && (L = T);
        }

        for (var O = 0; O < c; ++O) {
          if (i.test(h[O])) {
            var N = void 0;

            for (N = O + 1; N < c && i.test(h[N]); ++N) {
              ;
            }

            for (var E = "L" == (O ? h[O - 1] : u), D = "L" == (N < c ? h[N] : u), P = E == D ? E ? "L" : "R" : u, W = O; W < N; ++W) {
              h[W] = P;
            }

            O = N - 1;
          }
        }

        for (var R, z = [], F = 0; F < c;) {
          if (a.test(h[F])) {
            var H = F;

            for (++F; F < c && a.test(h[F]); ++F) {
              ;
            }

            z.push(new l(0, H, F));
          } else {
            var B = F,
                j = z.length;

            for (++F; F < c && "L" != h[F]; ++F) {
              ;
            }

            for (var G = B; G < F;) {
              if (s.test(h[G])) {
                B < G && z.splice(j, 0, new l(1, B, G));
                var V = G;

                for (++G; G < F && s.test(h[G]); ++G) {
                  ;
                }

                z.splice(j, 0, new l(2, V, G)), B = G;
              } else ++G;
            }

            B < F && z.splice(j, 0, new l(1, B, F));
          }
        }

        return "ltr" == t && (1 == z[0].level && (R = e.match(/^\s+/)) && (z[0].from = R[0].length, z.unshift(new l(0, 0, R[0].length))), 1 == _(z).level && (R = e.match(/\s+$/)) && (_(z).to -= R[0].length, z.push(new l(0, c - R[0].length, c)))), "rtl" == t ? z.reverse() : z;
      };
    }();

    function qe(e, t) {
      var n = e.order;
      return null == n && (n = e.order = Je(e.text, t)), n;
    }

    var $e = [],
        et = function et(e, t, n) {
      if (e.addEventListener) e.addEventListener(t, n, !1);else if (e.attachEvent) e.attachEvent("on" + t, n);else {
        var r = e._handlers || (e._handlers = {});
        r[t] = (r[t] || $e).concat(n);
      }
    };

    function tt(e, t) {
      return e._handlers && e._handlers[t] || $e;
    }

    function nt(e, t, n) {
      if (e.removeEventListener) e.removeEventListener(t, n, !1);else if (e.detachEvent) e.detachEvent("on" + t, n);else {
        var r = e._handlers,
            i = r && r[t];

        if (i) {
          var o = B(i, n);
          o > -1 && (r[t] = i.slice(0, o).concat(i.slice(o + 1)));
        }
      }
    }

    function rt(e, t) {
      var n = tt(e, t);
      if (n.length) for (var r = Array.prototype.slice.call(arguments, 2), i = 0; i < n.length; ++i) {
        n[i].apply(null, r);
      }
    }

    function it(e, t, n) {
      return "string" == typeof t && (t = {
        type: t,
        preventDefault: function preventDefault() {
          this.defaultPrevented = !0;
        }
      }), rt(e, n || t.type, e, t), ct(t) || t.codemirrorIgnore;
    }

    function ot(e) {
      var t = e._handlers && e._handlers.cursorActivity;
      if (t) for (var n = e.curOp.cursorActivityHandlers || (e.curOp.cursorActivityHandlers = []), r = 0; r < t.length; ++r) {
        -1 == B(n, t[r]) && n.push(t[r]);
      }
    }

    function at(e, t) {
      return tt(e, t).length > 0;
    }

    function st(e) {
      e.prototype.on = function (e, t) {
        et(this, e, t);
      }, e.prototype.off = function (e, t) {
        nt(this, e, t);
      };
    }

    function lt(e) {
      e.preventDefault ? e.preventDefault() : e.returnValue = !1;
    }

    function ut(e) {
      e.stopPropagation ? e.stopPropagation() : e.cancelBubble = !0;
    }

    function ct(e) {
      return null != e.defaultPrevented ? e.defaultPrevented : 0 == e.returnValue;
    }

    function ht(e) {
      lt(e), ut(e);
    }

    function dt(e) {
      return e.target || e.srcElement;
    }

    function ft(e) {
      var t = e.which;
      return null == t && (1 & e.button ? t = 1 : 2 & e.button ? t = 3 : 4 & e.button && (t = 2)), b && e.ctrlKey && 1 == t && (t = 3), t;
    }

    var pt,
        gt,
        vt = function () {
      if (a && s < 9) return !1;
      var e = T("div");
      return "draggable" in e || "dragDrop" in e;
    }();

    function mt(e) {
      if (null == pt) {
        var t = T("span", "​");
        L(e, T("span", [t, document.createTextNode("x")])), 0 != e.firstChild.offsetHeight && (pt = t.offsetWidth <= 1 && t.offsetHeight > 2 && !(a && s < 8));
      }

      var n = pt ? T("span", "​") : T("span", " ", null, "display: inline-block; width: 1px; margin-right: -1px");
      return n.setAttribute("cm-text", ""), n;
    }

    function bt(e) {
      if (null != gt) return gt;
      var t = L(e, document.createTextNode("AخA")),
          n = I(t, 0, 1).getBoundingClientRect(),
          r = I(t, 1, 2).getBoundingClientRect();
      return S(e), !(!n || n.left == n.right) && (gt = r.right - n.right < 3);
    }

    var yt = 3 != "\n\nb".split(/\n/).length ? function (e) {
      for (var t = 0, n = [], r = e.length; t <= r;) {
        var i = e.indexOf("\n", t);
        -1 == i && (i = e.length);
        var o = e.slice(t, "\r" == e.charAt(i - 1) ? i - 1 : i),
            a = o.indexOf("\r");
        -1 != a ? (n.push(o.slice(0, a)), t += a + 1) : (n.push(o), t = i + 1);
      }

      return n;
    } : function (e) {
      return e.split(/\r\n?|\n/);
    },
        At = window.getSelection ? function (e) {
      try {
        return e.selectionStart != e.selectionEnd;
      } catch (e) {
        return !1;
      }
    } : function (e) {
      var t;

      try {
        t = e.ownerDocument.selection.createRange();
      } catch (e) {}

      return !(!t || t.parentElement() != e) && 0 != t.compareEndPoints("StartToEnd", t);
    },
        wt = function () {
      var e = T("div");
      return "oncopy" in e || (e.setAttribute("oncopy", "return;"), "function" == typeof e.oncopy);
    }(),
        Ct = null,
        xt = {},
        kt = {};

    function It(e) {
      if ("string" == typeof e && kt.hasOwnProperty(e)) e = kt[e];else if (e && "string" == typeof e.name && kt.hasOwnProperty(e.name)) {
        var t = kt[e.name];
        "string" == typeof t && (t = {
          name: t
        }), (e = q(t, e)).name = t.name;
      } else {
        if ("string" == typeof e && /^[\w\-]+\/[\w\-]+\+xml$/.test(e)) return It("application/xml");
        if ("string" == typeof e && /^[\w\-]+\/[\w\-]+\+json$/.test(e)) return It("application/json");
      }
      return "string" == typeof e ? {
        name: e
      } : e || {
        name: "null"
      };
    }

    function Mt(e, t) {
      t = It(t);
      var n = xt[t.name];
      if (!n) return Mt(e, "text/plain");
      var r = n(e, t);

      if (St.hasOwnProperty(t.name)) {
        var i = St[t.name];

        for (var o in i) {
          i.hasOwnProperty(o) && (r.hasOwnProperty(o) && (r["_" + o] = r[o]), r[o] = i[o]);
        }
      }

      if (r.name = t.name, t.helperType && (r.helperType = t.helperType), t.modeProps) for (var a in t.modeProps) {
        r[a] = t.modeProps[a];
      }
      return r;
    }

    var St = {};

    function Lt(e, t) {
      var n = St.hasOwnProperty(e) ? St[e] : St[e] = {};
      z(t, n);
    }

    function Tt(e, t) {
      if (!0 === t) return t;
      if (e.copyState) return e.copyState(t);
      var n = {};

      for (var r in t) {
        var i = t[r];
        i instanceof Array && (i = i.concat([])), n[r] = i;
      }

      return n;
    }

    function Ot(e, t) {
      for (var n; e.innerMode && (n = e.innerMode(t)) && n.mode != e;) {
        t = n.state, e = n.mode;
      }

      return n || {
        mode: e,
        state: t
      };
    }

    function Nt(e, t, n) {
      return !e.startState || e.startState(t, n);
    }

    var Et = function Et(e, t, n) {
      this.pos = this.start = 0, this.string = e, this.tabSize = t || 8, this.lastColumnPos = this.lastColumnValue = 0, this.lineStart = 0, this.lineOracle = n;
    };

    Et.prototype.eol = function () {
      return this.pos >= this.string.length;
    }, Et.prototype.sol = function () {
      return this.pos == this.lineStart;
    }, Et.prototype.peek = function () {
      return this.string.charAt(this.pos) || void 0;
    }, Et.prototype.next = function () {
      if (this.pos < this.string.length) return this.string.charAt(this.pos++);
    }, Et.prototype.eat = function (e) {
      var t = this.string.charAt(this.pos);
      if ("string" == typeof e ? t == e : t && (e.test ? e.test(t) : e(t))) return ++this.pos, t;
    }, Et.prototype.eatWhile = function (e) {
      for (var t = this.pos; this.eat(e);) {
        ;
      }

      return this.pos > t;
    }, Et.prototype.eatSpace = function () {
      for (var e = this.pos; /[\s\u00a0]/.test(this.string.charAt(this.pos));) {
        ++this.pos;
      }

      return this.pos > e;
    }, Et.prototype.skipToEnd = function () {
      this.pos = this.string.length;
    }, Et.prototype.skipTo = function (e) {
      var t = this.string.indexOf(e, this.pos);
      if (t > -1) return this.pos = t, !0;
    }, Et.prototype.backUp = function (e) {
      this.pos -= e;
    }, Et.prototype.column = function () {
      return this.lastColumnPos < this.start && (this.lastColumnValue = F(this.string, this.start, this.tabSize, this.lastColumnPos, this.lastColumnValue), this.lastColumnPos = this.start), this.lastColumnValue - (this.lineStart ? F(this.string, this.lineStart, this.tabSize) : 0);
    }, Et.prototype.indentation = function () {
      return F(this.string, null, this.tabSize) - (this.lineStart ? F(this.string, this.lineStart, this.tabSize) : 0);
    }, Et.prototype.match = function (e, t, n) {
      if ("string" != typeof e) {
        var r = this.string.slice(this.pos).match(e);
        return r && r.index > 0 ? null : (r && !1 !== t && (this.pos += r[0].length), r);
      }

      var i = function i(e) {
        return n ? e.toLowerCase() : e;
      },
          o = this.string.substr(this.pos, e.length);

      if (i(o) == i(e)) return !1 !== t && (this.pos += e.length), !0;
    }, Et.prototype.current = function () {
      return this.string.slice(this.start, this.pos);
    }, Et.prototype.hideFirstChars = function (e, t) {
      this.lineStart += e;

      try {
        return t();
      } finally {
        this.lineStart -= e;
      }
    }, Et.prototype.lookAhead = function (e) {
      var t = this.lineOracle;
      return t && t.lookAhead(e);
    }, Et.prototype.baseToken = function () {
      var e = this.lineOracle;
      return e && e.baseToken(this.pos);
    };

    var Dt = function Dt(e, t) {
      this.state = e, this.lookAhead = t;
    },
        Pt = function Pt(e, t, n, r) {
      this.state = t, this.doc = e, this.line = n, this.maxLookAhead = r || 0, this.baseTokens = null, this.baseTokenPos = 1;
    };

    function Wt(e, t, n, r) {
      var i = [e.state.modeGen],
          o = {};
      Ut(e, t.text, e.doc.mode, n, function (e, t) {
        return i.push(e, t);
      }, o, r);

      for (var a = n.state, s = function s(r) {
        n.baseTokens = i;
        var s = e.state.overlays[r],
            l = 1,
            u = 0;
        n.state = !0, Ut(e, t.text, s.mode, n, function (e, t) {
          for (var n = l; u < e;) {
            var r = i[l];
            r > e && i.splice(l, 1, e, i[l + 1], r), l += 2, u = Math.min(e, r);
          }

          if (t) if (s.opaque) i.splice(n, l - n, e, "overlay " + t), l = n + 2;else for (; n < l; n += 2) {
            var o = i[n + 1];
            i[n + 1] = (o ? o + " " : "") + "overlay " + t;
          }
        }, o), n.state = a, n.baseTokens = null, n.baseTokenPos = 1;
      }, l = 0; l < e.state.overlays.length; ++l) {
        s(l);
      }

      return {
        styles: i,
        classes: o.bgClass || o.textClass ? o : null
      };
    }

    function Rt(e, t, n) {
      if (!t.styles || t.styles[0] != e.state.modeGen) {
        var r = zt(e, he(t)),
            i = t.text.length > e.options.maxHighlightLength && Tt(e.doc.mode, r.state),
            o = Wt(e, t, r);
        i && (r.state = i), t.stateAfter = r.save(!i), t.styles = o.styles, o.classes ? t.styleClasses = o.classes : t.styleClasses && (t.styleClasses = null), n === e.doc.highlightFrontier && (e.doc.modeFrontier = Math.max(e.doc.modeFrontier, ++e.doc.highlightFrontier));
      }

      return t.styles;
    }

    function zt(e, t, n) {
      var r = e.doc,
          i = e.display;
      if (!r.mode.startState) return new Pt(r, !0, t);

      var o = function (e, t, n) {
        for (var r, i, o = e.doc, a = n ? -1 : t - (e.doc.mode.innerMode ? 1e3 : 100), s = t; s > a; --s) {
          if (s <= o.first) return o.first;
          var l = se(o, s - 1),
              u = l.stateAfter;
          if (u && (!n || s + (u instanceof Dt ? u.lookAhead : 0) <= o.modeFrontier)) return s;
          var c = F(l.text, null, e.options.tabSize);
          (null == i || r > c) && (i = s - 1, r = c);
        }

        return i;
      }(e, t, n),
          a = o > r.first && se(r, o - 1).stateAfter,
          s = a ? Pt.fromSaved(r, a, o) : new Pt(r, Nt(r.mode), o);

      return r.iter(o, t, function (n) {
        Ft(e, n.text, s);
        var r = s.line;
        n.stateAfter = r == t - 1 || r % 5 == 0 || r >= i.viewFrom && r < i.viewTo ? s.save() : null, s.nextLine();
      }), n && (r.modeFrontier = s.line), s;
    }

    function Ft(e, t, n, r) {
      var i = e.doc.mode,
          o = new Et(t, e.options.tabSize, n);

      for (o.start = o.pos = r || 0, "" == t && Ht(i, n.state); !o.eol();) {
        Bt(i, o, n.state), o.start = o.pos;
      }
    }

    function Ht(e, t) {
      if (e.blankLine) return e.blankLine(t);

      if (e.innerMode) {
        var n = Ot(e, t);
        return n.mode.blankLine ? n.mode.blankLine(n.state) : void 0;
      }
    }

    function Bt(e, t, n, r) {
      for (var i = 0; i < 10; i++) {
        r && (r[0] = Ot(e, n).mode);
        var o = e.token(t, n);
        if (t.pos > t.start) return o;
      }

      throw new Error("Mode " + e.name + " failed to advance stream.");
    }

    Pt.prototype.lookAhead = function (e) {
      var t = this.doc.getLine(this.line + e);
      return null != t && e > this.maxLookAhead && (this.maxLookAhead = e), t;
    }, Pt.prototype.baseToken = function (e) {
      if (!this.baseTokens) return null;

      for (; this.baseTokens[this.baseTokenPos] <= e;) {
        this.baseTokenPos += 2;
      }

      var t = this.baseTokens[this.baseTokenPos + 1];
      return {
        type: t && t.replace(/( |^)overlay .*/, ""),
        size: this.baseTokens[this.baseTokenPos] - e
      };
    }, Pt.prototype.nextLine = function () {
      this.line++, this.maxLookAhead > 0 && this.maxLookAhead--;
    }, Pt.fromSaved = function (e, t, n) {
      return t instanceof Dt ? new Pt(e, Tt(e.mode, t.state), n, t.lookAhead) : new Pt(e, Tt(e.mode, t), n);
    }, Pt.prototype.save = function (e) {
      var t = !1 !== e ? Tt(this.doc.mode, this.state) : this.state;
      return this.maxLookAhead > 0 ? new Dt(t, this.maxLookAhead) : t;
    };

    var jt = function jt(e, t, n) {
      this.start = e.start, this.end = e.pos, this.string = e.current(), this.type = t || null, this.state = n;
    };

    function Gt(e, t, n, r) {
      var i,
          o = e.doc,
          a = o.mode;
      t = Ce(o, t);
      var s,
          l = se(o, t.line),
          u = zt(e, t.line, n),
          c = new Et(l.text, e.options.tabSize, u);

      for (r && (s = []); (r || c.pos < t.ch) && !c.eol();) {
        c.start = c.pos, i = Bt(a, c, u.state), r && s.push(new jt(c, i, Tt(o.mode, u.state)));
      }

      return r ? s : new jt(c, i, u.state);
    }

    function Vt(e, t) {
      if (e) for (;;) {
        var n = e.match(/(?:^|\s+)line-(background-)?(\S+)/);
        if (!n) break;
        e = e.slice(0, n.index) + e.slice(n.index + n[0].length);
        var r = n[1] ? "bgClass" : "textClass";
        null == t[r] ? t[r] = n[2] : new RegExp("(?:^|s)" + n[2] + "(?:$|s)").test(t[r]) || (t[r] += " " + n[2]);
      }
      return e;
    }

    function Ut(e, t, n, r, i, o, a) {
      var s = n.flattenSpans;
      null == s && (s = e.options.flattenSpans);
      var l,
          u = 0,
          c = null,
          h = new Et(t, e.options.tabSize, r),
          d = e.options.addModeClass && [null];

      for ("" == t && Vt(Ht(n, r.state), o); !h.eol();) {
        if (h.pos > e.options.maxHighlightLength ? (s = !1, a && Ft(e, t, r, h.pos), h.pos = t.length, l = null) : l = Vt(Bt(n, h, r.state, d), o), d) {
          var f = d[0].name;
          f && (l = "m-" + (l ? f + " " + l : f));
        }

        if (!s || c != l) {
          for (; u < h.start;) {
            u = Math.min(h.start, u + 5e3), i(u, c);
          }

          c = l;
        }

        h.start = h.pos;
      }

      for (; u < h.pos;) {
        var p = Math.min(h.pos, u + 5e3);
        i(p, c), u = p;
      }
    }

    var Zt = function Zt(e, t, n) {
      this.text = e, Ee(this, t), this.height = n ? n(this) : 1;
    };

    function Yt(e) {
      e.parent = null, Ne(e);
    }

    Zt.prototype.lineNo = function () {
      return he(this);
    }, st(Zt);
    var Qt = {},
        Xt = {};

    function _t(e, t) {
      if (!e || /^\s*$/.test(e)) return null;
      var n = t.addModeClass ? Xt : Qt;
      return n[e] || (n[e] = e.replace(/\S+/g, "cm-$&"));
    }

    function Kt(e, t) {
      var n = O("span", null, null, l ? "padding-right: .1px" : null),
          r = {
        pre: O("pre", [n], "CodeMirror-line"),
        content: n,
        col: 0,
        pos: 0,
        cm: e,
        trailingSpace: !1,
        splitSpaces: e.getOption("lineWrapping")
      };
      t.measure = {};

      for (var i = 0; i <= (t.rest ? t.rest.length : 0); i++) {
        var o = i ? t.rest[i - 1] : t.line,
            a = void 0;
        r.pos = 0, r.addToken = qt, bt(e.display.measure) && (a = qe(o, e.doc.direction)) && (r.addToken = $t(r.addToken, a)), r.map = [];
        var s = t != e.display.externalMeasured && he(o);
        tn(o, r, Rt(e, o, s)), o.styleClasses && (o.styleClasses.bgClass && (r.bgClass = P(o.styleClasses.bgClass, r.bgClass || "")), o.styleClasses.textClass && (r.textClass = P(o.styleClasses.textClass, r.textClass || ""))), 0 == r.map.length && r.map.push(0, 0, r.content.appendChild(mt(e.display.measure))), 0 == i ? (t.measure.map = r.map, t.measure.cache = {}) : ((t.measure.maps || (t.measure.maps = [])).push(r.map), (t.measure.caches || (t.measure.caches = [])).push({}));
      }

      if (l) {
        var u = r.content.lastChild;
        (/\bcm-tab\b/.test(u.className) || u.querySelector && u.querySelector(".cm-tab")) && (r.content.className = "cm-tab-wrap-hack");
      }

      return rt(e, "renderLine", e, t.line, r.pre), r.pre.className && (r.textClass = P(r.pre.className, r.textClass || "")), r;
    }

    function Jt(e) {
      var t = T("span", "•", "cm-invalidchar");
      return t.title = "\\u" + e.charCodeAt(0).toString(16), t.setAttribute("aria-label", t.title), t;
    }

    function qt(e, t, n, r, i, o, l) {
      if (t) {
        var u,
            c = e.splitSpaces ? function (e, t) {
          if (e.length > 1 && !/  /.test(e)) return e;

          for (var n = t, r = "", i = 0; i < e.length; i++) {
            var o = e.charAt(i);
            " " != o || !n || i != e.length - 1 && 32 != e.charCodeAt(i + 1) || (o = " "), r += o, n = " " == o;
          }

          return r;
        }(t, e.trailingSpace) : t,
            h = e.cm.state.specialChars,
            d = !1;

        if (h.test(t)) {
          u = document.createDocumentFragment();

          for (var f = 0;;) {
            h.lastIndex = f;
            var p = h.exec(t),
                g = p ? p.index - f : t.length - f;

            if (g) {
              var v = document.createTextNode(c.slice(f, f + g));
              a && s < 9 ? u.appendChild(T("span", [v])) : u.appendChild(v), e.map.push(e.pos, e.pos + g, v), e.col += g, e.pos += g;
            }

            if (!p) break;
            f += g + 1;
            var m = void 0;

            if ("\t" == p[0]) {
              var b = e.cm.options.tabSize,
                  y = b - e.col % b;
              (m = u.appendChild(T("span", X(y), "cm-tab"))).setAttribute("role", "presentation"), m.setAttribute("cm-text", "\t"), e.col += y;
            } else "\r" == p[0] || "\n" == p[0] ? ((m = u.appendChild(T("span", "\r" == p[0] ? "␍" : "␤", "cm-invalidchar"))).setAttribute("cm-text", p[0]), e.col += 1) : ((m = e.cm.options.specialCharPlaceholder(p[0])).setAttribute("cm-text", p[0]), a && s < 9 ? u.appendChild(T("span", [m])) : u.appendChild(m), e.col += 1);

            e.map.push(e.pos, e.pos + 1, m), e.pos++;
          }
        } else e.col += t.length, u = document.createTextNode(c), e.map.push(e.pos, e.pos + t.length, u), a && s < 9 && (d = !0), e.pos += t.length;

        if (e.trailingSpace = 32 == c.charCodeAt(t.length - 1), n || r || i || d || o) {
          var A = n || "";
          r && (A += r), i && (A += i);
          var w = T("span", [u], A, o);
          if (l) for (var C in l) {
            l.hasOwnProperty(C) && "style" != C && "class" != C && w.setAttribute(C, l[C]);
          }
          return e.content.appendChild(w);
        }

        e.content.appendChild(u);
      }
    }

    function $t(e, t) {
      return function (n, r, i, o, a, s, l) {
        i = i ? i + " cm-force-border" : "cm-force-border";

        for (var u = n.pos, c = u + r.length;;) {
          for (var h = void 0, d = 0; d < t.length && !((h = t[d]).to > u && h.from <= u); d++) {
            ;
          }

          if (h.to >= c) return e(n, r, i, o, a, s, l);
          e(n, r.slice(0, h.to - u), i, o, null, s, l), o = null, r = r.slice(h.to - u), u = h.to;
        }
      };
    }

    function en(e, t, n, r) {
      var i = !r && n.widgetNode;
      i && e.map.push(e.pos, e.pos + t, i), !r && e.cm.display.input.needsContentAttribute && (i || (i = e.content.appendChild(document.createElement("span"))), i.setAttribute("cm-marker", n.id)), i && (e.cm.display.input.setUneditable(i), e.content.appendChild(i)), e.pos += t, e.trailingSpace = !1;
    }

    function tn(e, t, n) {
      var r = e.markedSpans,
          i = e.text,
          o = 0;
      if (r) for (var a, s, l, u, c, h, d, f = i.length, p = 0, g = 1, v = "", m = 0;;) {
        if (m == p) {
          l = u = c = s = "", d = null, h = null, m = 1 / 0;

          for (var b = [], y = void 0, A = 0; A < r.length; ++A) {
            var w = r[A],
                C = w.marker;
            if ("bookmark" == C.type && w.from == p && C.widgetNode) b.push(C);else if (w.from <= p && (null == w.to || w.to > p || C.collapsed && w.to == p && w.from == p)) {
              if (null != w.to && w.to != p && m > w.to && (m = w.to, u = ""), C.className && (l += " " + C.className), C.css && (s = (s ? s + ";" : "") + C.css), C.startStyle && w.from == p && (c += " " + C.startStyle), C.endStyle && w.to == m && (y || (y = [])).push(C.endStyle, w.to), C.title && ((d || (d = {})).title = C.title), C.attributes) for (var x in C.attributes) {
                (d || (d = {}))[x] = C.attributes[x];
              }
              C.collapsed && (!h || We(h.marker, C) < 0) && (h = w);
            } else w.from > p && m > w.from && (m = w.from);
          }

          if (y) for (var k = 0; k < y.length; k += 2) {
            y[k + 1] == m && (u += " " + y[k]);
          }
          if (!h || h.from == p) for (var I = 0; I < b.length; ++I) {
            en(t, 0, b[I]);
          }

          if (h && (h.from || 0) == p) {
            if (en(t, (null == h.to ? f + 1 : h.to) - p, h.marker, null == h.from), null == h.to) return;
            h.to == p && (h = !1);
          }
        }

        if (p >= f) break;

        for (var M = Math.min(f, m);;) {
          if (v) {
            var S = p + v.length;

            if (!h) {
              var L = S > M ? v.slice(0, M - p) : v;
              t.addToken(t, L, a ? a + l : l, c, p + L.length == m ? u : "", s, d);
            }

            if (S >= M) {
              v = v.slice(M - p), p = M;
              break;
            }

            p = S, c = "";
          }

          v = i.slice(o, o = n[g++]), a = _t(n[g++], t.cm.options);
        }
      } else for (var T = 1; T < n.length; T += 2) {
        t.addToken(t, i.slice(o, o = n[T]), _t(n[T + 1], t.cm.options));
      }
    }

    function nn(e, t, n) {
      this.line = t, this.rest = function (e) {
        for (var t, n; t = Fe(e);) {
          e = t.find(1, !0).line, (n || (n = [])).push(e);
        }

        return n;
      }(t), this.size = this.rest ? he(_(this.rest)) - n + 1 : 1, this.node = this.text = null, this.hidden = Ue(e, t);
    }

    function rn(e, t, n) {
      for (var r, i = [], o = t; o < n; o = r) {
        var a = new nn(e.doc, se(e.doc, o), o);
        r = o + a.size, i.push(a);
      }

      return i;
    }

    var on = null,
        an = null;

    function sn(e, t) {
      var n = tt(e, t);

      if (n.length) {
        var r,
            i = Array.prototype.slice.call(arguments, 2);
        on ? r = on.delayedCallbacks : an ? r = an : (r = an = [], setTimeout(ln, 0));

        for (var o = function o(e) {
          r.push(function () {
            return n[e].apply(null, i);
          });
        }, a = 0; a < n.length; ++a) {
          o(a);
        }
      }
    }

    function ln() {
      var e = an;
      an = null;

      for (var t = 0; t < e.length; ++t) {
        e[t]();
      }
    }

    function un(e, t, n, r) {
      for (var i = 0; i < t.changes.length; i++) {
        var o = t.changes[i];
        "text" == o ? dn(e, t) : "gutter" == o ? pn(e, t, n, r) : "class" == o ? fn(e, t) : "widget" == o && gn(e, t, r);
      }

      t.changes = null;
    }

    function cn(e) {
      return e.node == e.text && (e.node = T("div", null, null, "position: relative"), e.text.parentNode && e.text.parentNode.replaceChild(e.node, e.text), e.node.appendChild(e.text), a && s < 8 && (e.node.style.zIndex = 2)), e.node;
    }

    function hn(e, t) {
      var n = e.display.externalMeasured;
      return n && n.line == t.line ? (e.display.externalMeasured = null, t.measure = n.measure, n.built) : Kt(e, t);
    }

    function dn(e, t) {
      var n = t.text.className,
          r = hn(e, t);
      t.text == t.node && (t.node = r.pre), t.text.parentNode.replaceChild(r.pre, t.text), t.text = r.pre, r.bgClass != t.bgClass || r.textClass != t.textClass ? (t.bgClass = r.bgClass, t.textClass = r.textClass, fn(e, t)) : n && (t.text.className = n);
    }

    function fn(e, t) {
      !function (e, t) {
        var n = t.bgClass ? t.bgClass + " " + (t.line.bgClass || "") : t.line.bgClass;
        if (n && (n += " CodeMirror-linebackground"), t.background) n ? t.background.className = n : (t.background.parentNode.removeChild(t.background), t.background = null);else if (n) {
          var r = cn(t);
          t.background = r.insertBefore(T("div", null, n), r.firstChild), e.display.input.setUneditable(t.background);
        }
      }(e, t), t.line.wrapClass ? cn(t).className = t.line.wrapClass : t.node != t.text && (t.node.className = "");
      var n = t.textClass ? t.textClass + " " + (t.line.textClass || "") : t.line.textClass;
      t.text.className = n || "";
    }

    function pn(e, t, n, r) {
      if (t.gutter && (t.node.removeChild(t.gutter), t.gutter = null), t.gutterBackground && (t.node.removeChild(t.gutterBackground), t.gutterBackground = null), t.line.gutterClass) {
        var i = cn(t);
        t.gutterBackground = T("div", null, "CodeMirror-gutter-background " + t.line.gutterClass, "left: " + (e.options.fixedGutter ? r.fixedPos : -r.gutterTotalWidth) + "px; width: " + r.gutterTotalWidth + "px"), e.display.input.setUneditable(t.gutterBackground), i.insertBefore(t.gutterBackground, t.text);
      }

      var o = t.line.gutterMarkers;

      if (e.options.lineNumbers || o) {
        var a = cn(t),
            s = t.gutter = T("div", null, "CodeMirror-gutter-wrapper", "left: " + (e.options.fixedGutter ? r.fixedPos : -r.gutterTotalWidth) + "px");
        if (e.display.input.setUneditable(s), a.insertBefore(s, t.text), t.line.gutterClass && (s.className += " " + t.line.gutterClass), !e.options.lineNumbers || o && o["CodeMirror-linenumbers"] || (t.lineNumber = s.appendChild(T("div", pe(e.options, n), "CodeMirror-linenumber CodeMirror-gutter-elt", "left: " + r.gutterLeft["CodeMirror-linenumbers"] + "px; width: " + e.display.lineNumInnerWidth + "px"))), o) for (var l = 0; l < e.options.gutters.length; ++l) {
          var u = e.options.gutters[l],
              c = o.hasOwnProperty(u) && o[u];
          c && s.appendChild(T("div", [c], "CodeMirror-gutter-elt", "left: " + r.gutterLeft[u] + "px; width: " + r.gutterWidth[u] + "px"));
        }
      }
    }

    function gn(e, t, n) {
      t.alignable && (t.alignable = null);

      for (var r = t.node.firstChild, i = void 0; r; r = i) {
        i = r.nextSibling, "CodeMirror-linewidget" == r.className && t.node.removeChild(r);
      }

      mn(e, t, n);
    }

    function vn(e, t, n, r) {
      var i = hn(e, t);
      return t.text = t.node = i.pre, i.bgClass && (t.bgClass = i.bgClass), i.textClass && (t.textClass = i.textClass), fn(e, t), pn(e, t, n, r), mn(e, t, r), t.node;
    }

    function mn(e, t, n) {
      if (bn(e, t.line, t, n, !0), t.rest) for (var r = 0; r < t.rest.length; r++) {
        bn(e, t.rest[r], t, n, !1);
      }
    }

    function bn(e, t, n, r, i) {
      if (t.widgets) for (var o = cn(n), a = 0, s = t.widgets; a < s.length; ++a) {
        var l = s[a],
            u = T("div", [l.node], "CodeMirror-linewidget");
        l.handleMouseEvents || u.setAttribute("cm-ignore-events", "true"), yn(l, u, n, r), e.display.input.setUneditable(u), i && l.above ? o.insertBefore(u, n.gutter || n.text) : o.appendChild(u), sn(l, "redraw");
      }
    }

    function yn(e, t, n, r) {
      if (e.noHScroll) {
        (n.alignable || (n.alignable = [])).push(t);
        var i = r.wrapperWidth;
        t.style.left = r.fixedPos + "px", e.coverGutter || (i -= r.gutterTotalWidth, t.style.paddingLeft = r.gutterTotalWidth + "px"), t.style.width = i + "px";
      }

      e.coverGutter && (t.style.zIndex = 5, t.style.position = "relative", e.noHScroll || (t.style.marginLeft = -r.gutterTotalWidth + "px"));
    }

    function An(e) {
      if (null != e.height) return e.height;
      var t = e.doc.cm;
      if (!t) return 0;

      if (!N(document.body, e.node)) {
        var n = "position: relative;";
        e.coverGutter && (n += "margin-left: -" + t.display.gutters.offsetWidth + "px;"), e.noHScroll && (n += "width: " + t.display.wrapper.clientWidth + "px;"), L(t.display.measure, T("div", [e.node], null, n));
      }

      return e.height = e.node.parentNode.offsetHeight;
    }

    function wn(e, t) {
      for (var n = dt(t); n != e.wrapper; n = n.parentNode) {
        if (!n || 1 == n.nodeType && "true" == n.getAttribute("cm-ignore-events") || n.parentNode == e.sizer && n != e.mover) return !0;
      }
    }

    function Cn(e) {
      return e.lineSpace.offsetTop;
    }

    function xn(e) {
      return e.mover.offsetHeight - e.lineSpace.offsetHeight;
    }

    function kn(e) {
      if (e.cachedPaddingH) return e.cachedPaddingH;
      var t = L(e.measure, T("pre", "x")),
          n = window.getComputedStyle ? window.getComputedStyle(t) : t.currentStyle,
          r = {
        left: parseInt(n.paddingLeft),
        right: parseInt(n.paddingRight)
      };
      return isNaN(r.left) || isNaN(r.right) || (e.cachedPaddingH = r), r;
    }

    function In(e) {
      return j - e.display.nativeBarWidth;
    }

    function Mn(e) {
      return e.display.scroller.clientWidth - In(e) - e.display.barWidth;
    }

    function Sn(e) {
      return e.display.scroller.clientHeight - In(e) - e.display.barHeight;
    }

    function Ln(e, t, n) {
      if (e.line == t) return {
        map: e.measure.map,
        cache: e.measure.cache
      };

      for (var r = 0; r < e.rest.length; r++) {
        if (e.rest[r] == t) return {
          map: e.measure.maps[r],
          cache: e.measure.caches[r]
        };
      }

      for (var i = 0; i < e.rest.length; i++) {
        if (he(e.rest[i]) > n) return {
          map: e.measure.maps[i],
          cache: e.measure.caches[i],
          before: !0
        };
      }
    }

    function Tn(e, t, n, r) {
      return En(e, Nn(e, t), n, r);
    }

    function On(e, t) {
      if (t >= e.display.viewFrom && t < e.display.viewTo) return e.display.view[sr(e, t)];
      var n = e.display.externalMeasured;
      return n && t >= n.lineN && t < n.lineN + n.size ? n : void 0;
    }

    function Nn(e, t) {
      var n = he(t),
          r = On(e, n);
      r && !r.text ? r = null : r && r.changes && (un(e, r, n, nr(e)), e.curOp.forceUpdate = !0), r || (r = function (e, t) {
        var n = he(t = je(t)),
            r = e.display.externalMeasured = new nn(e.doc, t, n);
        r.lineN = n;
        var i = r.built = Kt(e, r);
        return r.text = i.pre, L(e.display.lineMeasure, i.pre), r;
      }(e, t));
      var i = Ln(r, t, n);
      return {
        line: t,
        view: r,
        rect: null,
        map: i.map,
        cache: i.cache,
        before: i.before,
        hasHeights: !1
      };
    }

    function En(e, t, n, r, i) {
      t.before && (n = -1);
      var o,
          l = n + (r || "");
      return t.cache.hasOwnProperty(l) ? o = t.cache[l] : (t.rect || (t.rect = t.view.text.getBoundingClientRect()), t.hasHeights || (function (e, t, n) {
        var r = e.options.lineWrapping,
            i = r && Mn(e);

        if (!t.measure.heights || r && t.measure.width != i) {
          var o = t.measure.heights = [];

          if (r) {
            t.measure.width = i;

            for (var a = t.text.firstChild.getClientRects(), s = 0; s < a.length - 1; s++) {
              var l = a[s],
                  u = a[s + 1];
              Math.abs(l.bottom - u.bottom) > 2 && o.push((l.bottom + u.top) / 2 - n.top);
            }
          }

          o.push(n.bottom - n.top);
        }
      }(e, t.view, t.rect), t.hasHeights = !0), (o = function (e, t, n, r) {
        var i,
            o = Wn(t.map, n, r),
            l = o.node,
            u = o.start,
            c = o.end,
            h = o.collapse;

        if (3 == l.nodeType) {
          for (var d = 0; d < 4; d++) {
            for (; u && ie(t.line.text.charAt(o.coverStart + u));) {
              --u;
            }

            for (; o.coverStart + c < o.coverEnd && ie(t.line.text.charAt(o.coverStart + c));) {
              ++c;
            }

            if ((i = a && s < 9 && 0 == u && c == o.coverEnd - o.coverStart ? l.parentNode.getBoundingClientRect() : Rn(I(l, u, c).getClientRects(), r)).left || i.right || 0 == u) break;
            c = u, u -= 1, h = "right";
          }

          a && s < 11 && (i = function (e, t) {
            if (!window.screen || null == screen.logicalXDPI || screen.logicalXDPI == screen.deviceXDPI || !function (e) {
              if (null != Ct) return Ct;
              var t = L(e, T("span", "x")),
                  n = t.getBoundingClientRect(),
                  r = I(t, 0, 1).getBoundingClientRect();
              return Ct = Math.abs(n.left - r.left) > 1;
            }(e)) return t;
            var n = screen.logicalXDPI / screen.deviceXDPI,
                r = screen.logicalYDPI / screen.deviceYDPI;
            return {
              left: t.left * n,
              right: t.right * n,
              top: t.top * r,
              bottom: t.bottom * r
            };
          }(e.display.measure, i));
        } else {
          var f;
          u > 0 && (h = r = "right"), i = e.options.lineWrapping && (f = l.getClientRects()).length > 1 ? f["right" == r ? f.length - 1 : 0] : l.getBoundingClientRect();
        }

        if (a && s < 9 && !u && (!i || !i.left && !i.right)) {
          var p = l.parentNode.getClientRects()[0];
          i = p ? {
            left: p.left,
            right: p.left + tr(e.display),
            top: p.top,
            bottom: p.bottom
          } : Pn;
        }

        for (var g = i.top - t.rect.top, v = i.bottom - t.rect.top, m = (g + v) / 2, b = t.view.measure.heights, y = 0; y < b.length - 1 && !(m < b[y]); y++) {
          ;
        }

        var A = y ? b[y - 1] : 0,
            w = b[y],
            C = {
          left: ("right" == h ? i.right : i.left) - t.rect.left,
          right: ("left" == h ? i.left : i.right) - t.rect.left,
          top: A,
          bottom: w
        };
        return i.left || i.right || (C.bogus = !0), e.options.singleCursorHeightPerLine || (C.rtop = g, C.rbottom = v), C;
      }(e, t, n, r)).bogus || (t.cache[l] = o)), {
        left: o.left,
        right: o.right,
        top: i ? o.rtop : o.top,
        bottom: i ? o.rbottom : o.bottom
      };
    }

    var Dn,
        Pn = {
      left: 0,
      right: 0,
      top: 0,
      bottom: 0
    };

    function Wn(e, t, n) {
      for (var r, i, o, a, s, l, u = 0; u < e.length; u += 3) {
        if (s = e[u], l = e[u + 1], t < s ? (i = 0, o = 1, a = "left") : t < l ? o = 1 + (i = t - s) : (u == e.length - 3 || t == l && e[u + 3] > t) && (i = (o = l - s) - 1, t >= l && (a = "right")), null != i) {
          if (r = e[u + 2], s == l && n == (r.insertLeft ? "left" : "right") && (a = n), "left" == n && 0 == i) for (; u && e[u - 2] == e[u - 3] && e[u - 1].insertLeft;) {
            r = e[2 + (u -= 3)], a = "left";
          }
          if ("right" == n && i == l - s) for (; u < e.length - 3 && e[u + 3] == e[u + 4] && !e[u + 5].insertLeft;) {
            r = e[(u += 3) + 2], a = "right";
          }
          break;
        }
      }

      return {
        node: r,
        start: i,
        end: o,
        collapse: a,
        coverStart: s,
        coverEnd: l
      };
    }

    function Rn(e, t) {
      var n = Pn;
      if ("left" == t) for (var r = 0; r < e.length && (n = e[r]).left == n.right; r++) {
        ;
      } else for (var i = e.length - 1; i >= 0 && (n = e[i]).left == n.right; i--) {
        ;
      }
      return n;
    }

    function zn(e) {
      if (e.measure && (e.measure.cache = {}, e.measure.heights = null, e.rest)) for (var t = 0; t < e.rest.length; t++) {
        e.measure.caches[t] = {};
      }
    }

    function Fn(e) {
      e.display.externalMeasure = null, S(e.display.lineMeasure);

      for (var t = 0; t < e.display.view.length; t++) {
        zn(e.display.view[t]);
      }
    }

    function Hn(e) {
      Fn(e), e.display.cachedCharWidth = e.display.cachedTextHeight = e.display.cachedPaddingH = null, e.options.lineWrapping || (e.display.maxLineChanged = !0), e.display.lineNumChars = null;
    }

    function Bn() {
      return c && v ? -(document.body.getBoundingClientRect().left - parseInt(getComputedStyle(document.body).marginLeft)) : window.pageXOffset || (document.documentElement || document.body).scrollLeft;
    }

    function jn() {
      return c && v ? -(document.body.getBoundingClientRect().top - parseInt(getComputedStyle(document.body).marginTop)) : window.pageYOffset || (document.documentElement || document.body).scrollTop;
    }

    function Gn(e) {
      var t = 0;
      if (e.widgets) for (var n = 0; n < e.widgets.length; ++n) {
        e.widgets[n].above && (t += An(e.widgets[n]));
      }
      return t;
    }

    function Vn(e, t, n, r, i) {
      if (!i) {
        var o = Gn(t);
        n.top += o, n.bottom += o;
      }

      if ("line" == r) return n;
      r || (r = "local");
      var a = Ye(t);

      if ("local" == r ? a += Cn(e.display) : a -= e.display.viewOffset, "page" == r || "window" == r) {
        var s = e.display.lineSpace.getBoundingClientRect();
        a += s.top + ("window" == r ? 0 : jn());
        var l = s.left + ("window" == r ? 0 : Bn());
        n.left += l, n.right += l;
      }

      return n.top += a, n.bottom += a, n;
    }

    function Un(e, t, n) {
      if ("div" == n) return t;
      var r = t.left,
          i = t.top;
      if ("page" == n) r -= Bn(), i -= jn();else if ("local" == n || !n) {
        var o = e.display.sizer.getBoundingClientRect();
        r += o.left, i += o.top;
      }
      var a = e.display.lineSpace.getBoundingClientRect();
      return {
        left: r - a.left,
        top: i - a.top
      };
    }

    function Zn(e, t, n, r, i) {
      return r || (r = se(e.doc, t.line)), Vn(e, r, Tn(e, r, t.ch, i), n);
    }

    function Yn(e, t, n, r, i, o) {
      function a(t, a) {
        var s = En(e, i, t, a ? "right" : "left", o);
        return a ? s.left = s.right : s.right = s.left, Vn(e, r, s, n);
      }

      r = r || se(e.doc, t.line), i || (i = Nn(e, r));
      var s = qe(r, e.doc.direction),
          l = t.ch,
          u = t.sticky;
      if (l >= r.text.length ? (l = r.text.length, u = "before") : l <= 0 && (l = 0, u = "after"), !s) return a("before" == u ? l - 1 : l, "before" == u);

      function c(e, t, n) {
        var r = s[t],
            i = 1 == r.level;
        return a(n ? e - 1 : e, i != n);
      }

      var h = Ke(s, l, u),
          d = _e,
          f = c(l, h, "before" == u);
      return null != d && (f.other = c(l, d, "before" != u)), f;
    }

    function Qn(e, t) {
      var n = 0;
      t = Ce(e.doc, t), e.options.lineWrapping || (n = tr(e.display) * t.ch);
      var r = se(e.doc, t.line),
          i = Ye(r) + Cn(e.display);
      return {
        left: n,
        right: n,
        top: i,
        bottom: i + r.height
      };
    }

    function Xn(e, t, n, r, i) {
      var o = ge(e, t, n);
      return o.xRel = i, r && (o.outside = !0), o;
    }

    function _n(e, t, n) {
      var r = e.doc;
      if ((n += e.display.viewOffset) < 0) return Xn(r.first, 0, null, !0, -1);
      var i = de(r, n),
          o = r.first + r.size - 1;
      if (i > o) return Xn(r.first + r.size - 1, se(r, o).text.length, null, !0, 1);
      t < 0 && (t = 0);

      for (var a = se(r, i);;) {
        var s = $n(e, a, i, t, n),
            l = He(a, s.ch + (s.xRel > 0 ? 1 : 0));
        if (!l) return s;
        var u = l.find(1);
        if (u.line == i) return u;
        a = se(r, i = u.line);
      }
    }

    function Kn(e, t, n, r) {
      r -= Gn(t);
      var i = t.text.length,
          o = ae(function (t) {
        return En(e, n, t - 1).bottom <= r;
      }, i, 0);
      return i = ae(function (t) {
        return En(e, n, t).top > r;
      }, o, i), {
        begin: o,
        end: i
      };
    }

    function Jn(e, t, n, r) {
      n || (n = Nn(e, t));
      var i = Vn(e, t, En(e, n, r), "line").top;
      return Kn(e, t, n, i);
    }

    function qn(e, t, n, r) {
      return !(e.bottom <= n) && (e.top > n || (r ? e.left : e.right) > t);
    }

    function $n(e, t, n, r, i) {
      i -= Ye(t);
      var o = Nn(e, t),
          a = Gn(t),
          s = 0,
          l = t.text.length,
          u = !0,
          c = qe(t, e.doc.direction);

      if (c) {
        var h = (e.options.lineWrapping ? function (e, t, n, r, i, o, a) {
          var s = Kn(e, t, r, a),
              l = s.begin,
              u = s.end;
          /\s/.test(t.text.charAt(u - 1)) && u--;

          for (var c = null, h = null, d = 0; d < i.length; d++) {
            var f = i[d];

            if (!(f.from >= u || f.to <= l)) {
              var p = 1 != f.level,
                  g = En(e, r, p ? Math.min(u, f.to) - 1 : Math.max(l, f.from)).right,
                  v = g < o ? o - g + 1e9 : g - o;
              (!c || h > v) && (c = f, h = v);
            }
          }

          return c || (c = i[i.length - 1]), c.from < l && (c = {
            from: l,
            to: c.to,
            level: c.level
          }), c.to > u && (c = {
            from: c.from,
            to: u,
            level: c.level
          }), c;
        } : function (e, t, n, r, i, o, a) {
          var s = ae(function (s) {
            var l = i[s],
                u = 1 != l.level;
            return qn(Yn(e, ge(n, u ? l.to : l.from, u ? "before" : "after"), "line", t, r), o, a, !0);
          }, 0, i.length - 1),
              l = i[s];

          if (s > 0) {
            var u = 1 != l.level,
                c = Yn(e, ge(n, u ? l.from : l.to, u ? "after" : "before"), "line", t, r);
            qn(c, o, a, !0) && c.top > a && (l = i[s - 1]);
          }

          return l;
        })(e, t, n, o, c, r, i);
        u = 1 != h.level, s = u ? h.from : h.to - 1, l = u ? h.to : h.from - 1;
      }

      var d,
          f,
          p = null,
          g = null,
          v = ae(function (t) {
        var n = En(e, o, t);
        return n.top += a, n.bottom += a, !!qn(n, r, i, !1) && (n.top <= i && n.left <= r && (p = t, g = n), !0);
      }, s, l),
          m = !1;

      if (g) {
        var b = r - g.left < g.right - r,
            y = b == u;
        v = p + (y ? 0 : 1), f = y ? "after" : "before", d = b ? g.left : g.right;
      } else {
        u || v != l && v != s || v++, f = 0 == v ? "after" : v == t.text.length ? "before" : En(e, o, v - (u ? 1 : 0)).bottom + a <= i == u ? "after" : "before";
        var A = Yn(e, ge(n, v, f), "line", t, o);
        d = A.left, m = i < A.top || i >= A.bottom;
      }

      return v = oe(t.text, v, 1), Xn(n, v, f, m, r - d);
    }

    function er(e) {
      if (null != e.cachedTextHeight) return e.cachedTextHeight;

      if (null == Dn) {
        Dn = T("pre");

        for (var t = 0; t < 49; ++t) {
          Dn.appendChild(document.createTextNode("x")), Dn.appendChild(T("br"));
        }

        Dn.appendChild(document.createTextNode("x"));
      }

      L(e.measure, Dn);
      var n = Dn.offsetHeight / 50;
      return n > 3 && (e.cachedTextHeight = n), S(e.measure), n || 1;
    }

    function tr(e) {
      if (null != e.cachedCharWidth) return e.cachedCharWidth;
      var t = T("span", "xxxxxxxxxx"),
          n = T("pre", [t]);
      L(e.measure, n);
      var r = t.getBoundingClientRect(),
          i = (r.right - r.left) / 10;
      return i > 2 && (e.cachedCharWidth = i), i || 10;
    }

    function nr(e) {
      for (var t = e.display, n = {}, r = {}, i = t.gutters.clientLeft, o = t.gutters.firstChild, a = 0; o; o = o.nextSibling, ++a) {
        n[e.options.gutters[a]] = o.offsetLeft + o.clientLeft + i, r[e.options.gutters[a]] = o.clientWidth;
      }

      return {
        fixedPos: rr(t),
        gutterTotalWidth: t.gutters.offsetWidth,
        gutterLeft: n,
        gutterWidth: r,
        wrapperWidth: t.wrapper.clientWidth
      };
    }

    function rr(e) {
      return e.scroller.getBoundingClientRect().left - e.sizer.getBoundingClientRect().left;
    }

    function ir(e) {
      var t = er(e.display),
          n = e.options.lineWrapping,
          r = n && Math.max(5, e.display.scroller.clientWidth / tr(e.display) - 3);
      return function (i) {
        if (Ue(e.doc, i)) return 0;
        var o = 0;
        if (i.widgets) for (var a = 0; a < i.widgets.length; a++) {
          i.widgets[a].height && (o += i.widgets[a].height);
        }
        return n ? o + (Math.ceil(i.text.length / r) || 1) * t : o + t;
      };
    }

    function or(e) {
      var t = e.doc,
          n = ir(e);
      t.iter(function (e) {
        var t = n(e);
        t != e.height && ce(e, t);
      });
    }

    function ar(e, t, n, r) {
      var i = e.display;
      if (!n && "true" == dt(t).getAttribute("cm-not-content")) return null;
      var o,
          a,
          s = i.lineSpace.getBoundingClientRect();

      try {
        o = t.clientX - s.left, a = t.clientY - s.top;
      } catch (t) {
        return null;
      }

      var l,
          u = _n(e, o, a);

      if (r && 1 == u.xRel && (l = se(e.doc, u.line).text).length == u.ch) {
        var c = F(l, l.length, e.options.tabSize) - l.length;
        u = ge(u.line, Math.max(0, Math.round((o - kn(e.display).left) / tr(e.display)) - c));
      }

      return u;
    }

    function sr(e, t) {
      if (t >= e.display.viewTo) return null;
      if ((t -= e.display.viewFrom) < 0) return null;

      for (var n = e.display.view, r = 0; r < n.length; r++) {
        if ((t -= n[r].size) < 0) return r;
      }
    }

    function lr(e) {
      e.display.input.showSelection(e.display.input.prepareSelection());
    }

    function ur(e, t) {
      void 0 === t && (t = !0);

      for (var n = e.doc, r = {}, i = r.cursors = document.createDocumentFragment(), o = r.selection = document.createDocumentFragment(), a = 0; a < n.sel.ranges.length; a++) {
        if (t || a != n.sel.primIndex) {
          var s = n.sel.ranges[a];

          if (!(s.from().line >= e.display.viewTo || s.to().line < e.display.viewFrom)) {
            var l = s.empty();
            (l || e.options.showCursorWhenSelecting) && cr(e, s.head, i), l || dr(e, s, o);
          }
        }
      }

      return r;
    }

    function cr(e, t, n) {
      var r = Yn(e, t, "div", null, null, !e.options.singleCursorHeightPerLine),
          i = n.appendChild(T("div", " ", "CodeMirror-cursor"));

      if (i.style.left = r.left + "px", i.style.top = r.top + "px", i.style.height = Math.max(0, r.bottom - r.top) * e.options.cursorHeight + "px", r.other) {
        var o = n.appendChild(T("div", " ", "CodeMirror-cursor CodeMirror-secondarycursor"));
        o.style.display = "", o.style.left = r.other.left + "px", o.style.top = r.other.top + "px", o.style.height = .85 * (r.other.bottom - r.other.top) + "px";
      }
    }

    function hr(e, t) {
      return e.top - t.top || e.left - t.left;
    }

    function dr(e, t, n) {
      var r = e.display,
          i = e.doc,
          o = document.createDocumentFragment(),
          a = kn(e.display),
          s = a.left,
          l = Math.max(r.sizerWidth, Mn(e) - r.sizer.offsetLeft) - a.right,
          u = "ltr" == i.direction;

      function c(e, t, n, r) {
        t < 0 && (t = 0), t = Math.round(t), r = Math.round(r), o.appendChild(T("div", null, "CodeMirror-selected", "position: absolute; left: " + e + "px;\n                             top: " + t + "px; width: " + (null == n ? l - e : n) + "px;\n                             height: " + (r - t) + "px"));
      }

      function h(t, n, r) {
        var o,
            a,
            h = se(i, t),
            d = h.text.length;

        function f(n, r) {
          return Zn(e, ge(t, n), "div", h, r);
        }

        function p(t, n, r) {
          var i = Jn(e, h, null, t),
              o = "ltr" == n == ("after" == r) ? "left" : "right",
              a = "after" == r ? i.begin : i.end - (/\s/.test(h.text.charAt(i.end - 1)) ? 2 : 1);
          return f(a, o)[o];
        }

        var g = qe(h, i.direction);
        return function (e, t, n, r) {
          if (!e) return r(t, n, "ltr", 0);

          for (var i = !1, o = 0; o < e.length; ++o) {
            var a = e[o];
            (a.from < n && a.to > t || t == n && a.to == t) && (r(Math.max(a.from, t), Math.min(a.to, n), 1 == a.level ? "rtl" : "ltr", o), i = !0);
          }

          i || r(t, n, "ltr");
        }(g, n || 0, null == r ? d : r, function (e, t, i, h) {
          var v = "ltr" == i,
              m = f(e, v ? "left" : "right"),
              b = f(t - 1, v ? "right" : "left"),
              y = null == n && 0 == e,
              A = null == r && t == d,
              w = 0 == h,
              C = !g || h == g.length - 1;

          if (b.top - m.top <= 3) {
            var x = (u ? y : A) && w,
                k = (u ? A : y) && C,
                I = x ? s : (v ? m : b).left,
                M = k ? l : (v ? b : m).right;
            c(I, m.top, M - I, m.bottom);
          } else {
            var S, L, T, O;
            v ? (S = u && y && w ? s : m.left, L = u ? l : p(e, i, "before"), T = u ? s : p(t, i, "after"), O = u && A && C ? l : b.right) : (S = u ? p(e, i, "before") : s, L = !u && y && w ? l : m.right, T = !u && A && C ? s : b.left, O = u ? p(t, i, "after") : l), c(S, m.top, L - S, m.bottom), m.bottom < b.top && c(s, m.bottom, null, b.top), c(T, b.top, O - T, b.bottom);
          }

          (!o || hr(m, o) < 0) && (o = m), hr(b, o) < 0 && (o = b), (!a || hr(m, a) < 0) && (a = m), hr(b, a) < 0 && (a = b);
        }), {
          start: o,
          end: a
        };
      }

      var d = t.from(),
          f = t.to();
      if (d.line == f.line) h(d.line, d.ch, f.ch);else {
        var p = se(i, d.line),
            g = se(i, f.line),
            v = je(p) == je(g),
            m = h(d.line, d.ch, v ? p.text.length + 1 : null).end,
            b = h(f.line, v ? 0 : null, f.ch).start;
        v && (m.top < b.top - 2 ? (c(m.right, m.top, null, m.bottom), c(s, b.top, b.left, b.bottom)) : c(m.right, m.top, b.left - m.right, m.bottom)), m.bottom < b.top && c(s, m.bottom, null, b.top);
      }
      n.appendChild(o);
    }

    function fr(e) {
      if (e.state.focused) {
        var t = e.display;
        clearInterval(t.blinker);
        var n = !0;
        t.cursorDiv.style.visibility = "", e.options.cursorBlinkRate > 0 ? t.blinker = setInterval(function () {
          return t.cursorDiv.style.visibility = (n = !n) ? "" : "hidden";
        }, e.options.cursorBlinkRate) : e.options.cursorBlinkRate < 0 && (t.cursorDiv.style.visibility = "hidden");
      }
    }

    function pr(e) {
      e.state.focused || (e.display.input.focus(), vr(e));
    }

    function gr(e) {
      e.state.delayingBlurEvent = !0, setTimeout(function () {
        e.state.delayingBlurEvent && (e.state.delayingBlurEvent = !1, mr(e));
      }, 100);
    }

    function vr(e, t) {
      e.state.delayingBlurEvent && (e.state.delayingBlurEvent = !1), "nocursor" != e.options.readOnly && (e.state.focused || (rt(e, "focus", e, t), e.state.focused = !0, D(e.display.wrapper, "CodeMirror-focused"), e.curOp || e.display.selForContextMenu == e.doc.sel || (e.display.input.reset(), l && setTimeout(function () {
        return e.display.input.reset(!0);
      }, 20)), e.display.input.receivedFocus()), fr(e));
    }

    function mr(e, t) {
      e.state.delayingBlurEvent || (e.state.focused && (rt(e, "blur", e, t), e.state.focused = !1, M(e.display.wrapper, "CodeMirror-focused")), clearInterval(e.display.blinker), setTimeout(function () {
        e.state.focused || (e.display.shift = !1);
      }, 150));
    }

    function br(e) {
      for (var t = e.display, n = t.lineDiv.offsetTop, r = 0; r < t.view.length; r++) {
        var i = t.view[r],
            o = e.options.lineWrapping,
            l = void 0,
            u = 0;

        if (!i.hidden) {
          if (a && s < 8) {
            var c = i.node.offsetTop + i.node.offsetHeight;
            l = c - n, n = c;
          } else {
            var h = i.node.getBoundingClientRect();
            l = h.bottom - h.top, !o && i.text.firstChild && (u = i.text.firstChild.getBoundingClientRect().right - h.left - 1);
          }

          var d = i.line.height - l;
          if (l < 2 && (l = er(t)), (d > .005 || d < -.005) && (ce(i.line, l), yr(i.line), i.rest)) for (var f = 0; f < i.rest.length; f++) {
            yr(i.rest[f]);
          }

          if (u > e.display.sizerWidth) {
            var p = Math.ceil(u / tr(e.display));
            p > e.display.maxLineLength && (e.display.maxLineLength = p, e.display.maxLine = i.line, e.display.maxLineChanged = !0);
          }
        }
      }
    }

    function yr(e) {
      if (e.widgets) for (var t = 0; t < e.widgets.length; ++t) {
        var n = e.widgets[t],
            r = n.node.parentNode;
        r && (n.height = r.offsetHeight);
      }
    }

    function Ar(e, t, n) {
      var r = n && null != n.top ? Math.max(0, n.top) : e.scroller.scrollTop;
      r = Math.floor(r - Cn(e));
      var i = n && null != n.bottom ? n.bottom : r + e.wrapper.clientHeight,
          o = de(t, r),
          a = de(t, i);

      if (n && n.ensure) {
        var s = n.ensure.from.line,
            l = n.ensure.to.line;
        s < o ? (o = s, a = de(t, Ye(se(t, s)) + e.wrapper.clientHeight)) : Math.min(l, t.lastLine()) >= a && (o = de(t, Ye(se(t, l)) - e.wrapper.clientHeight), a = l);
      }

      return {
        from: o,
        to: Math.max(a, o + 1)
      };
    }

    function wr(e) {
      var t = e.display,
          n = t.view;

      if (t.alignWidgets || t.gutters.firstChild && e.options.fixedGutter) {
        for (var r = rr(t) - t.scroller.scrollLeft + e.doc.scrollLeft, i = t.gutters.offsetWidth, o = r + "px", a = 0; a < n.length; a++) {
          if (!n[a].hidden) {
            e.options.fixedGutter && (n[a].gutter && (n[a].gutter.style.left = o), n[a].gutterBackground && (n[a].gutterBackground.style.left = o));
            var s = n[a].alignable;
            if (s) for (var l = 0; l < s.length; l++) {
              s[l].style.left = o;
            }
          }
        }

        e.options.fixedGutter && (t.gutters.style.left = r + i + "px");
      }
    }

    function Cr(e) {
      if (!e.options.lineNumbers) return !1;
      var t = e.doc,
          n = pe(e.options, t.first + t.size - 1),
          r = e.display;

      if (n.length != r.lineNumChars) {
        var i = r.measure.appendChild(T("div", [T("div", n)], "CodeMirror-linenumber CodeMirror-gutter-elt")),
            o = i.firstChild.offsetWidth,
            a = i.offsetWidth - o;
        return r.lineGutter.style.width = "", r.lineNumInnerWidth = Math.max(o, r.lineGutter.offsetWidth - a) + 1, r.lineNumWidth = r.lineNumInnerWidth + a, r.lineNumChars = r.lineNumInnerWidth ? n.length : -1, r.lineGutter.style.width = r.lineNumWidth + "px", li(e), !0;
      }

      return !1;
    }

    function xr(e, t) {
      var n = e.display,
          r = er(e.display);
      t.top < 0 && (t.top = 0);
      var i = e.curOp && null != e.curOp.scrollTop ? e.curOp.scrollTop : n.scroller.scrollTop,
          o = Sn(e),
          a = {};
      t.bottom - t.top > o && (t.bottom = t.top + o);
      var s = e.doc.height + xn(n),
          l = t.top < r,
          u = t.bottom > s - r;
      if (t.top < i) a.scrollTop = l ? 0 : t.top;else if (t.bottom > i + o) {
        var c = Math.min(t.top, (u ? s : t.bottom) - o);
        c != i && (a.scrollTop = c);
      }
      var h = e.curOp && null != e.curOp.scrollLeft ? e.curOp.scrollLeft : n.scroller.scrollLeft,
          d = Mn(e) - (e.options.fixedGutter ? n.gutters.offsetWidth : 0),
          f = t.right - t.left > d;
      return f && (t.right = t.left + d), t.left < 10 ? a.scrollLeft = 0 : t.left < h ? a.scrollLeft = Math.max(0, t.left - (f ? 0 : 10)) : t.right > d + h - 3 && (a.scrollLeft = t.right + (f ? 0 : 10) - d), a;
    }

    function kr(e, t) {
      null != t && (Sr(e), e.curOp.scrollTop = (null == e.curOp.scrollTop ? e.doc.scrollTop : e.curOp.scrollTop) + t);
    }

    function Ir(e) {
      Sr(e);
      var t = e.getCursor();
      e.curOp.scrollToPos = {
        from: t,
        to: t,
        margin: e.options.cursorScrollMargin
      };
    }

    function Mr(e, t, n) {
      null == t && null == n || Sr(e), null != t && (e.curOp.scrollLeft = t), null != n && (e.curOp.scrollTop = n);
    }

    function Sr(e) {
      var t = e.curOp.scrollToPos;

      if (t) {
        e.curOp.scrollToPos = null;
        var n = Qn(e, t.from),
            r = Qn(e, t.to);
        Lr(e, n, r, t.margin);
      }
    }

    function Lr(e, t, n, r) {
      var i = xr(e, {
        left: Math.min(t.left, n.left),
        top: Math.min(t.top, n.top) - r,
        right: Math.max(t.right, n.right),
        bottom: Math.max(t.bottom, n.bottom) + r
      });
      Mr(e, i.scrollLeft, i.scrollTop);
    }

    function Tr(e, t) {
      Math.abs(e.doc.scrollTop - t) < 2 || (n || si(e, {
        top: t
      }), Or(e, t, !0), n && si(e), ni(e, 100));
    }

    function Or(e, t, n) {
      t = Math.min(e.display.scroller.scrollHeight - e.display.scroller.clientHeight, t), (e.display.scroller.scrollTop != t || n) && (e.doc.scrollTop = t, e.display.scrollbars.setScrollTop(t), e.display.scroller.scrollTop != t && (e.display.scroller.scrollTop = t));
    }

    function Nr(e, t, n, r) {
      t = Math.min(t, e.display.scroller.scrollWidth - e.display.scroller.clientWidth), (n ? t == e.doc.scrollLeft : Math.abs(e.doc.scrollLeft - t) < 2) && !r || (e.doc.scrollLeft = t, wr(e), e.display.scroller.scrollLeft != t && (e.display.scroller.scrollLeft = t), e.display.scrollbars.setScrollLeft(t));
    }

    function Er(e) {
      var t = e.display,
          n = t.gutters.offsetWidth,
          r = Math.round(e.doc.height + xn(e.display));
      return {
        clientHeight: t.scroller.clientHeight,
        viewHeight: t.wrapper.clientHeight,
        scrollWidth: t.scroller.scrollWidth,
        clientWidth: t.scroller.clientWidth,
        viewWidth: t.wrapper.clientWidth,
        barLeft: e.options.fixedGutter ? n : 0,
        docHeight: r,
        scrollHeight: r + In(e) + t.barHeight,
        nativeBarWidth: t.nativeBarWidth,
        gutterWidth: n
      };
    }

    var Dr = function Dr(e, t, n) {
      this.cm = n;
      var r = this.vert = T("div", [T("div", null, null, "min-width: 1px")], "CodeMirror-vscrollbar"),
          i = this.horiz = T("div", [T("div", null, null, "height: 100%; min-height: 1px")], "CodeMirror-hscrollbar");
      r.tabIndex = i.tabIndex = -1, e(r), e(i), et(r, "scroll", function () {
        r.clientHeight && t(r.scrollTop, "vertical");
      }), et(i, "scroll", function () {
        i.clientWidth && t(i.scrollLeft, "horizontal");
      }), this.checkedZeroWidth = !1, a && s < 8 && (this.horiz.style.minHeight = this.vert.style.minWidth = "18px");
    };

    Dr.prototype.update = function (e) {
      var t = e.scrollWidth > e.clientWidth + 1,
          n = e.scrollHeight > e.clientHeight + 1,
          r = e.nativeBarWidth;

      if (n) {
        this.vert.style.display = "block", this.vert.style.bottom = t ? r + "px" : "0";
        var i = e.viewHeight - (t ? r : 0);
        this.vert.firstChild.style.height = Math.max(0, e.scrollHeight - e.clientHeight + i) + "px";
      } else this.vert.style.display = "", this.vert.firstChild.style.height = "0";

      if (t) {
        this.horiz.style.display = "block", this.horiz.style.right = n ? r + "px" : "0", this.horiz.style.left = e.barLeft + "px";
        var o = e.viewWidth - e.barLeft - (n ? r : 0);
        this.horiz.firstChild.style.width = Math.max(0, e.scrollWidth - e.clientWidth + o) + "px";
      } else this.horiz.style.display = "", this.horiz.firstChild.style.width = "0";

      return !this.checkedZeroWidth && e.clientHeight > 0 && (0 == r && this.zeroWidthHack(), this.checkedZeroWidth = !0), {
        right: n ? r : 0,
        bottom: t ? r : 0
      };
    }, Dr.prototype.setScrollLeft = function (e) {
      this.horiz.scrollLeft != e && (this.horiz.scrollLeft = e), this.disableHoriz && this.enableZeroWidthBar(this.horiz, this.disableHoriz, "horiz");
    }, Dr.prototype.setScrollTop = function (e) {
      this.vert.scrollTop != e && (this.vert.scrollTop = e), this.disableVert && this.enableZeroWidthBar(this.vert, this.disableVert, "vert");
    }, Dr.prototype.zeroWidthHack = function () {
      var e = b && !f ? "12px" : "18px";
      this.horiz.style.height = this.vert.style.width = e, this.horiz.style.pointerEvents = this.vert.style.pointerEvents = "none", this.disableHoriz = new H(), this.disableVert = new H();
    }, Dr.prototype.enableZeroWidthBar = function (e, t, n) {
      e.style.pointerEvents = "auto", t.set(1e3, function r() {
        var i = e.getBoundingClientRect(),
            o = "vert" == n ? document.elementFromPoint(i.right - 1, (i.top + i.bottom) / 2) : document.elementFromPoint((i.right + i.left) / 2, i.bottom - 1);
        o != e ? e.style.pointerEvents = "none" : t.set(1e3, r);
      });
    }, Dr.prototype.clear = function () {
      var e = this.horiz.parentNode;
      e.removeChild(this.horiz), e.removeChild(this.vert);
    };

    var Pr = function Pr() {};

    function Wr(e, t) {
      t || (t = Er(e));
      var n = e.display.barWidth,
          r = e.display.barHeight;
      Rr(e, t);

      for (var i = 0; i < 4 && n != e.display.barWidth || r != e.display.barHeight; i++) {
        n != e.display.barWidth && e.options.lineWrapping && br(e), Rr(e, Er(e)), n = e.display.barWidth, r = e.display.barHeight;
      }
    }

    function Rr(e, t) {
      var n = e.display,
          r = n.scrollbars.update(t);
      n.sizer.style.paddingRight = (n.barWidth = r.right) + "px", n.sizer.style.paddingBottom = (n.barHeight = r.bottom) + "px", n.heightForcer.style.borderBottom = r.bottom + "px solid transparent", r.right && r.bottom ? (n.scrollbarFiller.style.display = "block", n.scrollbarFiller.style.height = r.bottom + "px", n.scrollbarFiller.style.width = r.right + "px") : n.scrollbarFiller.style.display = "", r.bottom && e.options.coverGutterNextToScrollbar && e.options.fixedGutter ? (n.gutterFiller.style.display = "block", n.gutterFiller.style.height = r.bottom + "px", n.gutterFiller.style.width = t.gutterWidth + "px") : n.gutterFiller.style.display = "";
    }

    Pr.prototype.update = function () {
      return {
        bottom: 0,
        right: 0
      };
    }, Pr.prototype.setScrollLeft = function () {}, Pr.prototype.setScrollTop = function () {}, Pr.prototype.clear = function () {};
    var zr = {
      native: Dr,
      null: Pr
    };

    function Fr(e) {
      e.display.scrollbars && (e.display.scrollbars.clear(), e.display.scrollbars.addClass && M(e.display.wrapper, e.display.scrollbars.addClass)), e.display.scrollbars = new zr[e.options.scrollbarStyle](function (t) {
        e.display.wrapper.insertBefore(t, e.display.scrollbarFiller), et(t, "mousedown", function () {
          e.state.focused && setTimeout(function () {
            return e.display.input.focus();
          }, 0);
        }), t.setAttribute("cm-not-content", "true");
      }, function (t, n) {
        "horizontal" == n ? Nr(e, t) : Tr(e, t);
      }, e), e.display.scrollbars.addClass && D(e.display.wrapper, e.display.scrollbars.addClass);
    }

    var Hr = 0;

    function Br(e) {
      e.curOp = {
        cm: e,
        viewChanged: !1,
        startHeight: e.doc.height,
        forceUpdate: !1,
        updateInput: null,
        typing: !1,
        changeObjs: null,
        cursorActivityHandlers: null,
        cursorActivityCalled: 0,
        selectionChanged: !1,
        updateMaxLine: !1,
        scrollLeft: null,
        scrollTop: null,
        scrollToPos: null,
        focus: !1,
        id: ++Hr
      }, function (e) {
        on ? on.ops.push(e) : e.ownsGroup = on = {
          ops: [e],
          delayedCallbacks: []
        };
      }(e.curOp);
    }

    function jr(e) {
      var t = e.curOp;
      t && function (e, t) {
        var n = e.ownsGroup;
        if (n) try {
          !function (e) {
            var t = e.delayedCallbacks,
                n = 0;

            do {
              for (; n < t.length; n++) {
                t[n].call(null);
              }

              for (var r = 0; r < e.ops.length; r++) {
                var i = e.ops[r];
                if (i.cursorActivityHandlers) for (; i.cursorActivityCalled < i.cursorActivityHandlers.length;) {
                  i.cursorActivityHandlers[i.cursorActivityCalled++].call(null, i.cm);
                }
              }
            } while (n < t.length);
          }(n);
        } finally {
          on = null, t(n);
        }
      }(t, function (e) {
        for (var t = 0; t < e.ops.length; t++) {
          e.ops[t].cm.curOp = null;
        }

        !function (e) {
          for (var t = e.ops, n = 0; n < t.length; n++) {
            Gr(t[n]);
          }

          for (var r = 0; r < t.length; r++) {
            Vr(t[r]);
          }

          for (var i = 0; i < t.length; i++) {
            Ur(t[i]);
          }

          for (var o = 0; o < t.length; o++) {
            Zr(t[o]);
          }

          for (var a = 0; a < t.length; a++) {
            Yr(t[a]);
          }
        }(e);
      });
    }

    function Gr(e) {
      var t = e.cm,
          n = t.display;
      !function (e) {
        var t = e.display;
        !t.scrollbarsClipped && t.scroller.offsetWidth && (t.nativeBarWidth = t.scroller.offsetWidth - t.scroller.clientWidth, t.heightForcer.style.height = In(e) + "px", t.sizer.style.marginBottom = -t.nativeBarWidth + "px", t.sizer.style.borderRightWidth = In(e) + "px", t.scrollbarsClipped = !0);
      }(t), e.updateMaxLine && Xe(t), e.mustUpdate = e.viewChanged || e.forceUpdate || null != e.scrollTop || e.scrollToPos && (e.scrollToPos.from.line < n.viewFrom || e.scrollToPos.to.line >= n.viewTo) || n.maxLineChanged && t.options.lineWrapping, e.update = e.mustUpdate && new ii(t, e.mustUpdate && {
        top: e.scrollTop,
        ensure: e.scrollToPos
      }, e.forceUpdate);
    }

    function Vr(e) {
      e.updatedDisplay = e.mustUpdate && oi(e.cm, e.update);
    }

    function Ur(e) {
      var t = e.cm,
          n = t.display;
      e.updatedDisplay && br(t), e.barMeasure = Er(t), n.maxLineChanged && !t.options.lineWrapping && (e.adjustWidthTo = Tn(t, n.maxLine, n.maxLine.text.length).left + 3, t.display.sizerWidth = e.adjustWidthTo, e.barMeasure.scrollWidth = Math.max(n.scroller.clientWidth, n.sizer.offsetLeft + e.adjustWidthTo + In(t) + t.display.barWidth), e.maxScrollLeft = Math.max(0, n.sizer.offsetLeft + e.adjustWidthTo - Mn(t))), (e.updatedDisplay || e.selectionChanged) && (e.preparedSelection = n.input.prepareSelection());
    }

    function Zr(e) {
      var t = e.cm;
      null != e.adjustWidthTo && (t.display.sizer.style.minWidth = e.adjustWidthTo + "px", e.maxScrollLeft < t.doc.scrollLeft && Nr(t, Math.min(t.display.scroller.scrollLeft, e.maxScrollLeft), !0), t.display.maxLineChanged = !1);
      var n = e.focus && e.focus == E();
      e.preparedSelection && t.display.input.showSelection(e.preparedSelection, n), (e.updatedDisplay || e.startHeight != t.doc.height) && Wr(t, e.barMeasure), e.updatedDisplay && ui(t, e.barMeasure), e.selectionChanged && fr(t), t.state.focused && e.updateInput && t.display.input.reset(e.typing), n && pr(e.cm);
    }

    function Yr(e) {
      var t = e.cm,
          n = t.display,
          r = t.doc;

      if (e.updatedDisplay && ai(t, e.update), null == n.wheelStartX || null == e.scrollTop && null == e.scrollLeft && !e.scrollToPos || (n.wheelStartX = n.wheelStartY = null), null != e.scrollTop && Or(t, e.scrollTop, e.forceScroll), null != e.scrollLeft && Nr(t, e.scrollLeft, !0, !0), e.scrollToPos) {
        var i = function (e, t, n, r) {
          var i;
          null == r && (r = 0), e.options.lineWrapping || t != n || (t = t.ch ? ge(t.line, "before" == t.sticky ? t.ch - 1 : t.ch, "after") : t, n = "before" == t.sticky ? ge(t.line, t.ch + 1, "before") : t);

          for (var o = 0; o < 5; o++) {
            var a = !1,
                s = Yn(e, t),
                l = n && n != t ? Yn(e, n) : s;
            i = {
              left: Math.min(s.left, l.left),
              top: Math.min(s.top, l.top) - r,
              right: Math.max(s.left, l.left),
              bottom: Math.max(s.bottom, l.bottom) + r
            };
            var u = xr(e, i),
                c = e.doc.scrollTop,
                h = e.doc.scrollLeft;
            if (null != u.scrollTop && (Tr(e, u.scrollTop), Math.abs(e.doc.scrollTop - c) > 1 && (a = !0)), null != u.scrollLeft && (Nr(e, u.scrollLeft), Math.abs(e.doc.scrollLeft - h) > 1 && (a = !0)), !a) break;
          }

          return i;
        }(t, Ce(r, e.scrollToPos.from), Ce(r, e.scrollToPos.to), e.scrollToPos.margin);

        !function (e, t) {
          if (!it(e, "scrollCursorIntoView")) {
            var n = e.display,
                r = n.sizer.getBoundingClientRect(),
                i = null;

            if (t.top + r.top < 0 ? i = !0 : t.bottom + r.top > (window.innerHeight || document.documentElement.clientHeight) && (i = !1), null != i && !p) {
              var o = T("div", "​", null, "position: absolute;\n                         top: " + (t.top - n.viewOffset - Cn(e.display)) + "px;\n                         height: " + (t.bottom - t.top + In(e) + n.barHeight) + "px;\n                         left: " + t.left + "px; width: " + Math.max(2, t.right - t.left) + "px;");
              e.display.lineSpace.appendChild(o), o.scrollIntoView(i), e.display.lineSpace.removeChild(o);
            }
          }
        }(t, i);
      }

      var o = e.maybeHiddenMarkers,
          a = e.maybeUnhiddenMarkers;
      if (o) for (var s = 0; s < o.length; ++s) {
        o[s].lines.length || rt(o[s], "hide");
      }
      if (a) for (var l = 0; l < a.length; ++l) {
        a[l].lines.length && rt(a[l], "unhide");
      }
      n.wrapper.offsetHeight && (r.scrollTop = t.display.scroller.scrollTop), e.changeObjs && rt(t, "changes", t, e.changeObjs), e.update && e.update.finish();
    }

    function Qr(e, t) {
      if (e.curOp) return t();
      Br(e);

      try {
        return t();
      } finally {
        jr(e);
      }
    }

    function Xr(e, t) {
      return function () {
        if (e.curOp) return t.apply(e, arguments);
        Br(e);

        try {
          return t.apply(e, arguments);
        } finally {
          jr(e);
        }
      };
    }

    function _r(e) {
      return function () {
        if (this.curOp) return e.apply(this, arguments);
        Br(this);

        try {
          return e.apply(this, arguments);
        } finally {
          jr(this);
        }
      };
    }

    function Kr(e) {
      return function () {
        var t = this.cm;
        if (!t || t.curOp) return e.apply(this, arguments);
        Br(t);

        try {
          return e.apply(this, arguments);
        } finally {
          jr(t);
        }
      };
    }

    function Jr(e, t, n, r) {
      null == t && (t = e.doc.first), null == n && (n = e.doc.first + e.doc.size), r || (r = 0);
      var i = e.display;
      if (r && n < i.viewTo && (null == i.updateLineNumbers || i.updateLineNumbers > t) && (i.updateLineNumbers = t), e.curOp.viewChanged = !0, t >= i.viewTo) Ie && Ge(e.doc, t) < i.viewTo && $r(e);else if (n <= i.viewFrom) Ie && Ve(e.doc, n + r) > i.viewFrom ? $r(e) : (i.viewFrom += r, i.viewTo += r);else if (t <= i.viewFrom && n >= i.viewTo) $r(e);else if (t <= i.viewFrom) {
        var o = ei(e, n, n + r, 1);
        o ? (i.view = i.view.slice(o.index), i.viewFrom = o.lineN, i.viewTo += r) : $r(e);
      } else if (n >= i.viewTo) {
        var a = ei(e, t, t, -1);
        a ? (i.view = i.view.slice(0, a.index), i.viewTo = a.lineN) : $r(e);
      } else {
        var s = ei(e, t, t, -1),
            l = ei(e, n, n + r, 1);
        s && l ? (i.view = i.view.slice(0, s.index).concat(rn(e, s.lineN, l.lineN)).concat(i.view.slice(l.index)), i.viewTo += r) : $r(e);
      }
      var u = i.externalMeasured;
      u && (n < u.lineN ? u.lineN += r : t < u.lineN + u.size && (i.externalMeasured = null));
    }

    function qr(e, t, n) {
      e.curOp.viewChanged = !0;
      var r = e.display,
          i = e.display.externalMeasured;

      if (i && t >= i.lineN && t < i.lineN + i.size && (r.externalMeasured = null), !(t < r.viewFrom || t >= r.viewTo)) {
        var o = r.view[sr(e, t)];

        if (null != o.node) {
          var a = o.changes || (o.changes = []);
          -1 == B(a, n) && a.push(n);
        }
      }
    }

    function $r(e) {
      e.display.viewFrom = e.display.viewTo = e.doc.first, e.display.view = [], e.display.viewOffset = 0;
    }

    function ei(e, t, n, r) {
      var i,
          o = sr(e, t),
          a = e.display.view;
      if (!Ie || n == e.doc.first + e.doc.size) return {
        index: o,
        lineN: n
      };

      for (var s = e.display.viewFrom, l = 0; l < o; l++) {
        s += a[l].size;
      }

      if (s != t) {
        if (r > 0) {
          if (o == a.length - 1) return null;
          i = s + a[o].size - t, o++;
        } else i = s - t;

        t += i, n += i;
      }

      for (; Ge(e.doc, n) != n;) {
        if (o == (r < 0 ? 0 : a.length - 1)) return null;
        n += r * a[o - (r < 0 ? 1 : 0)].size, o += r;
      }

      return {
        index: o,
        lineN: n
      };
    }

    function ti(e) {
      for (var t = e.display.view, n = 0, r = 0; r < t.length; r++) {
        var i = t[r];
        i.hidden || i.node && !i.changes || ++n;
      }

      return n;
    }

    function ni(e, t) {
      e.doc.highlightFrontier < e.display.viewTo && e.state.highlight.set(t, R(ri, e));
    }

    function ri(e) {
      var t = e.doc;

      if (!(t.highlightFrontier >= e.display.viewTo)) {
        var n = +new Date() + e.options.workTime,
            r = zt(e, t.highlightFrontier),
            i = [];
        t.iter(r.line, Math.min(t.first + t.size, e.display.viewTo + 500), function (o) {
          if (r.line >= e.display.viewFrom) {
            var a = o.styles,
                s = o.text.length > e.options.maxHighlightLength ? Tt(t.mode, r.state) : null,
                l = Wt(e, o, r, !0);
            s && (r.state = s), o.styles = l.styles;
            var u = o.styleClasses,
                c = l.classes;
            c ? o.styleClasses = c : u && (o.styleClasses = null);

            for (var h = !a || a.length != o.styles.length || u != c && (!u || !c || u.bgClass != c.bgClass || u.textClass != c.textClass), d = 0; !h && d < a.length; ++d) {
              h = a[d] != o.styles[d];
            }

            h && i.push(r.line), o.stateAfter = r.save(), r.nextLine();
          } else o.text.length <= e.options.maxHighlightLength && Ft(e, o.text, r), o.stateAfter = r.line % 5 == 0 ? r.save() : null, r.nextLine();

          if (+new Date() > n) return ni(e, e.options.workDelay), !0;
        }), t.highlightFrontier = r.line, t.modeFrontier = Math.max(t.modeFrontier, r.line), i.length && Qr(e, function () {
          for (var t = 0; t < i.length; t++) {
            qr(e, i[t], "text");
          }
        });
      }
    }

    var ii = function ii(e, t, n) {
      var r = e.display;
      this.viewport = t, this.visible = Ar(r, e.doc, t), this.editorIsHidden = !r.wrapper.offsetWidth, this.wrapperHeight = r.wrapper.clientHeight, this.wrapperWidth = r.wrapper.clientWidth, this.oldDisplayWidth = Mn(e), this.force = n, this.dims = nr(e), this.events = [];
    };

    function oi(e, t) {
      var n = e.display,
          r = e.doc;
      if (t.editorIsHidden) return $r(e), !1;
      if (!t.force && t.visible.from >= n.viewFrom && t.visible.to <= n.viewTo && (null == n.updateLineNumbers || n.updateLineNumbers >= n.viewTo) && n.renderedView == n.view && 0 == ti(e)) return !1;
      Cr(e) && ($r(e), t.dims = nr(e));
      var i = r.first + r.size,
          o = Math.max(t.visible.from - e.options.viewportMargin, r.first),
          a = Math.min(i, t.visible.to + e.options.viewportMargin);
      n.viewFrom < o && o - n.viewFrom < 20 && (o = Math.max(r.first, n.viewFrom)), n.viewTo > a && n.viewTo - a < 20 && (a = Math.min(i, n.viewTo)), Ie && (o = Ge(e.doc, o), a = Ve(e.doc, a));
      var s = o != n.viewFrom || a != n.viewTo || n.lastWrapHeight != t.wrapperHeight || n.lastWrapWidth != t.wrapperWidth;
      !function (e, t, n) {
        var r = e.display;
        0 == r.view.length || t >= r.viewTo || n <= r.viewFrom ? (r.view = rn(e, t, n), r.viewFrom = t) : (r.viewFrom > t ? r.view = rn(e, t, r.viewFrom).concat(r.view) : r.viewFrom < t && (r.view = r.view.slice(sr(e, t))), r.viewFrom = t, r.viewTo < n ? r.view = r.view.concat(rn(e, r.viewTo, n)) : r.viewTo > n && (r.view = r.view.slice(0, sr(e, n)))), r.viewTo = n;
      }(e, o, a), n.viewOffset = Ye(se(e.doc, n.viewFrom)), e.display.mover.style.top = n.viewOffset + "px";
      var u = ti(e);
      if (!s && 0 == u && !t.force && n.renderedView == n.view && (null == n.updateLineNumbers || n.updateLineNumbers >= n.viewTo)) return !1;

      var c = function (e) {
        if (e.hasFocus()) return null;
        var t = E();
        if (!t || !N(e.display.lineDiv, t)) return null;
        var n = {
          activeElt: t
        };

        if (window.getSelection) {
          var r = window.getSelection();
          r.anchorNode && r.extend && N(e.display.lineDiv, r.anchorNode) && (n.anchorNode = r.anchorNode, n.anchorOffset = r.anchorOffset, n.focusNode = r.focusNode, n.focusOffset = r.focusOffset);
        }

        return n;
      }(e);

      return u > 4 && (n.lineDiv.style.display = "none"), function (e, t, n) {
        var r = e.display,
            i = e.options.lineNumbers,
            o = r.lineDiv,
            a = o.firstChild;

        function s(t) {
          var n = t.nextSibling;
          return l && b && e.display.currentWheelTarget == t ? t.style.display = "none" : t.parentNode.removeChild(t), n;
        }

        for (var u = r.view, c = r.viewFrom, h = 0; h < u.length; h++) {
          var d = u[h];
          if (d.hidden) ;else if (d.node && d.node.parentNode == o) {
            for (; a != d.node;) {
              a = s(a);
            }

            var f = i && null != t && t <= c && d.lineNumber;
            d.changes && (B(d.changes, "gutter") > -1 && (f = !1), un(e, d, c, n)), f && (S(d.lineNumber), d.lineNumber.appendChild(document.createTextNode(pe(e.options, c)))), a = d.node.nextSibling;
          } else {
            var p = vn(e, d, c, n);
            o.insertBefore(p, a);
          }
          c += d.size;
        }

        for (; a;) {
          a = s(a);
        }
      }(e, n.updateLineNumbers, t.dims), u > 4 && (n.lineDiv.style.display = ""), n.renderedView = n.view, function (e) {
        if (e && e.activeElt && e.activeElt != E() && (e.activeElt.focus(), e.anchorNode && N(document.body, e.anchorNode) && N(document.body, e.focusNode))) {
          var t = window.getSelection(),
              n = document.createRange();
          n.setEnd(e.anchorNode, e.anchorOffset), n.collapse(!1), t.removeAllRanges(), t.addRange(n), t.extend(e.focusNode, e.focusOffset);
        }
      }(c), S(n.cursorDiv), S(n.selectionDiv), n.gutters.style.height = n.sizer.style.minHeight = 0, s && (n.lastWrapHeight = t.wrapperHeight, n.lastWrapWidth = t.wrapperWidth, ni(e, 400)), n.updateLineNumbers = null, !0;
    }

    function ai(e, t) {
      for (var n = t.viewport, r = !0; (r && e.options.lineWrapping && t.oldDisplayWidth != Mn(e) || (n && null != n.top && (n = {
        top: Math.min(e.doc.height + xn(e.display) - Sn(e), n.top)
      }), t.visible = Ar(e.display, e.doc, n), !(t.visible.from >= e.display.viewFrom && t.visible.to <= e.display.viewTo))) && oi(e, t); r = !1) {
        br(e);
        var i = Er(e);
        lr(e), Wr(e, i), ui(e, i), t.force = !1;
      }

      t.signal(e, "update", e), e.display.viewFrom == e.display.reportedViewFrom && e.display.viewTo == e.display.reportedViewTo || (t.signal(e, "viewportChange", e, e.display.viewFrom, e.display.viewTo), e.display.reportedViewFrom = e.display.viewFrom, e.display.reportedViewTo = e.display.viewTo);
    }

    function si(e, t) {
      var n = new ii(e, t);

      if (oi(e, n)) {
        br(e), ai(e, n);
        var r = Er(e);
        lr(e), Wr(e, r), ui(e, r), n.finish();
      }
    }

    function li(e) {
      var t = e.display.gutters.offsetWidth;
      e.display.sizer.style.marginLeft = t + "px";
    }

    function ui(e, t) {
      e.display.sizer.style.minHeight = t.docHeight + "px", e.display.heightForcer.style.top = t.docHeight + "px", e.display.gutters.style.height = t.docHeight + e.display.barHeight + In(e) + "px";
    }

    function ci(e) {
      var t = e.display.gutters,
          n = e.options.gutters;
      S(t);

      for (var r = 0; r < n.length; ++r) {
        var i = n[r],
            o = t.appendChild(T("div", null, "CodeMirror-gutter " + i));
        "CodeMirror-linenumbers" == i && (e.display.lineGutter = o, o.style.width = (e.display.lineNumWidth || 1) + "px");
      }

      t.style.display = r ? "" : "none", li(e);
    }

    function hi(e) {
      var t = B(e.gutters, "CodeMirror-linenumbers");
      -1 == t && e.lineNumbers ? e.gutters = e.gutters.concat(["CodeMirror-linenumbers"]) : t > -1 && !e.lineNumbers && (e.gutters = e.gutters.slice(0), e.gutters.splice(t, 1));
    }

    ii.prototype.signal = function (e, t) {
      at(e, t) && this.events.push(arguments);
    }, ii.prototype.finish = function () {
      for (var e = 0; e < this.events.length; e++) {
        rt.apply(null, this.events[e]);
      }
    };
    var di = 0,
        fi = null;

    function pi(e) {
      var t = e.wheelDeltaX,
          n = e.wheelDeltaY;
      return null == t && e.detail && e.axis == e.HORIZONTAL_AXIS && (t = e.detail), null == n && e.detail && e.axis == e.VERTICAL_AXIS ? n = e.detail : null == n && (n = e.wheelDelta), {
        x: t,
        y: n
      };
    }

    function gi(e) {
      var t = pi(e);
      return t.x *= fi, t.y *= fi, t;
    }

    function vi(e, t) {
      var r = pi(t),
          i = r.x,
          o = r.y,
          a = e.display,
          s = a.scroller,
          u = s.scrollWidth > s.clientWidth,
          c = s.scrollHeight > s.clientHeight;

      if (i && u || o && c) {
        if (o && b && l) e: for (var d = t.target, f = a.view; d != s; d = d.parentNode) {
          for (var p = 0; p < f.length; p++) {
            if (f[p].node == d) {
              e.display.currentWheelTarget = d;
              break e;
            }
          }
        }
        if (i && !n && !h && null != fi) return o && c && Tr(e, Math.max(0, s.scrollTop + o * fi)), Nr(e, Math.max(0, s.scrollLeft + i * fi)), (!o || o && c) && lt(t), void (a.wheelStartX = null);

        if (o && null != fi) {
          var g = o * fi,
              v = e.doc.scrollTop,
              m = v + a.wrapper.clientHeight;
          g < 0 ? v = Math.max(0, v + g - 50) : m = Math.min(e.doc.height, m + g + 50), si(e, {
            top: v,
            bottom: m
          });
        }

        di < 20 && (null == a.wheelStartX ? (a.wheelStartX = s.scrollLeft, a.wheelStartY = s.scrollTop, a.wheelDX = i, a.wheelDY = o, setTimeout(function () {
          if (null != a.wheelStartX) {
            var e = s.scrollLeft - a.wheelStartX,
                t = s.scrollTop - a.wheelStartY,
                n = t && a.wheelDY && t / a.wheelDY || e && a.wheelDX && e / a.wheelDX;
            a.wheelStartX = a.wheelStartY = null, n && (fi = (fi * di + n) / (di + 1), ++di);
          }
        }, 200)) : (a.wheelDX += i, a.wheelDY += o));
      }
    }

    a ? fi = -.53 : n ? fi = 15 : c ? fi = -.7 : d && (fi = -1 / 3);

    var mi = function mi(e, t) {
      this.ranges = e, this.primIndex = t;
    };

    mi.prototype.primary = function () {
      return this.ranges[this.primIndex];
    }, mi.prototype.equals = function (e) {
      if (e == this) return !0;
      if (e.primIndex != this.primIndex || e.ranges.length != this.ranges.length) return !1;

      for (var t = 0; t < this.ranges.length; t++) {
        var n = this.ranges[t],
            r = e.ranges[t];
        if (!me(n.anchor, r.anchor) || !me(n.head, r.head)) return !1;
      }

      return !0;
    }, mi.prototype.deepCopy = function () {
      for (var e = [], t = 0; t < this.ranges.length; t++) {
        e[t] = new bi(be(this.ranges[t].anchor), be(this.ranges[t].head));
      }

      return new mi(e, this.primIndex);
    }, mi.prototype.somethingSelected = function () {
      for (var e = 0; e < this.ranges.length; e++) {
        if (!this.ranges[e].empty()) return !0;
      }

      return !1;
    }, mi.prototype.contains = function (e, t) {
      t || (t = e);

      for (var n = 0; n < this.ranges.length; n++) {
        var r = this.ranges[n];
        if (ve(t, r.from()) >= 0 && ve(e, r.to()) <= 0) return n;
      }

      return -1;
    };

    var bi = function bi(e, t) {
      this.anchor = e, this.head = t;
    };

    function yi(e, t, n) {
      var r = e && e.options.selectionsMayTouch,
          i = t[n];
      t.sort(function (e, t) {
        return ve(e.from(), t.from());
      }), n = B(t, i);

      for (var o = 1; o < t.length; o++) {
        var a = t[o],
            s = t[o - 1],
            l = ve(s.to(), a.from());

        if (r && !a.empty() ? l > 0 : l >= 0) {
          var u = Ae(s.from(), a.from()),
              c = ye(s.to(), a.to()),
              h = s.empty() ? a.from() == a.head : s.from() == s.head;
          o <= n && --n, t.splice(--o, 2, new bi(h ? c : u, h ? u : c));
        }
      }

      return new mi(t, n);
    }

    function Ai(e, t) {
      return new mi([new bi(e, t || e)], 0);
    }

    function wi(e) {
      return e.text ? ge(e.from.line + e.text.length - 1, _(e.text).length + (1 == e.text.length ? e.from.ch : 0)) : e.to;
    }

    function Ci(e, t) {
      if (ve(e, t.from) < 0) return e;
      if (ve(e, t.to) <= 0) return wi(t);
      var n = e.line + t.text.length - (t.to.line - t.from.line) - 1,
          r = e.ch;
      return e.line == t.to.line && (r += wi(t).ch - t.to.ch), ge(n, r);
    }

    function xi(e, t) {
      for (var n = [], r = 0; r < e.sel.ranges.length; r++) {
        var i = e.sel.ranges[r];
        n.push(new bi(Ci(i.anchor, t), Ci(i.head, t)));
      }

      return yi(e.cm, n, e.sel.primIndex);
    }

    function ki(e, t, n) {
      return e.line == t.line ? ge(n.line, e.ch - t.ch + n.ch) : ge(n.line + (e.line - t.line), e.ch);
    }

    function Ii(e) {
      e.doc.mode = Mt(e.options, e.doc.modeOption), Mi(e);
    }

    function Mi(e) {
      e.doc.iter(function (e) {
        e.stateAfter && (e.stateAfter = null), e.styles && (e.styles = null);
      }), e.doc.modeFrontier = e.doc.highlightFrontier = e.doc.first, ni(e, 100), e.state.modeGen++, e.curOp && Jr(e);
    }

    function Si(e, t) {
      return 0 == t.from.ch && 0 == t.to.ch && "" == _(t.text) && (!e.cm || e.cm.options.wholeLineUpdateBefore);
    }

    function Li(e, t, n, r) {
      function i(e) {
        return n ? n[e] : null;
      }

      function o(e, n, i) {
        !function (e, t, n, r) {
          e.text = t, e.stateAfter && (e.stateAfter = null), e.styles && (e.styles = null), null != e.order && (e.order = null), Ne(e), Ee(e, n);
          var i = r ? r(e) : 1;
          i != e.height && ce(e, i);
        }(e, n, i, r), sn(e, "change", e, t);
      }

      function a(e, t) {
        for (var n = [], o = e; o < t; ++o) {
          n.push(new Zt(u[o], i(o), r));
        }

        return n;
      }

      var s = t.from,
          l = t.to,
          u = t.text,
          c = se(e, s.line),
          h = se(e, l.line),
          d = _(u),
          f = i(u.length - 1),
          p = l.line - s.line;

      if (t.full) e.insert(0, a(0, u.length)), e.remove(u.length, e.size - u.length);else if (Si(e, t)) {
        var g = a(0, u.length - 1);
        o(h, h.text, f), p && e.remove(s.line, p), g.length && e.insert(s.line, g);
      } else if (c == h) {
        if (1 == u.length) o(c, c.text.slice(0, s.ch) + d + c.text.slice(l.ch), f);else {
          var v = a(1, u.length - 1);
          v.push(new Zt(d + c.text.slice(l.ch), f, r)), o(c, c.text.slice(0, s.ch) + u[0], i(0)), e.insert(s.line + 1, v);
        }
      } else if (1 == u.length) o(c, c.text.slice(0, s.ch) + u[0] + h.text.slice(l.ch), i(0)), e.remove(s.line + 1, p);else {
        o(c, c.text.slice(0, s.ch) + u[0], i(0)), o(h, d + h.text.slice(l.ch), f);
        var m = a(1, u.length - 1);
        p > 1 && e.remove(s.line + 1, p - 1), e.insert(s.line + 1, m);
      }
      sn(e, "change", e, t);
    }

    function Ti(e, t, n) {
      !function e(r, i, o) {
        if (r.linked) for (var a = 0; a < r.linked.length; ++a) {
          var s = r.linked[a];

          if (s.doc != i) {
            var l = o && s.sharedHist;
            n && !l || (t(s.doc, l), e(s.doc, r, l));
          }
        }
      }(e, null, !0);
    }

    function Oi(e, t) {
      if (t.cm) throw new Error("This document is already in use.");
      e.doc = t, t.cm = e, or(e), Ii(e), Ni(e), e.options.lineWrapping || Xe(e), e.options.mode = t.modeOption, Jr(e);
    }

    function Ni(e) {
      ("rtl" == e.doc.direction ? D : M)(e.display.lineDiv, "CodeMirror-rtl");
    }

    function Ei(e) {
      this.done = [], this.undone = [], this.undoDepth = 1 / 0, this.lastModTime = this.lastSelTime = 0, this.lastOp = this.lastSelOp = null, this.lastOrigin = this.lastSelOrigin = null, this.generation = this.maxGeneration = e || 1;
    }

    function Di(e, t) {
      var n = {
        from: be(t.from),
        to: wi(t),
        text: le(e, t.from, t.to)
      };
      return Fi(e, n, t.from.line, t.to.line + 1), Ti(e, function (e) {
        return Fi(e, n, t.from.line, t.to.line + 1);
      }, !0), n;
    }

    function Pi(e) {
      for (; e.length;) {
        var t = _(e);

        if (!t.ranges) break;
        e.pop();
      }
    }

    function Wi(e, t, n, r) {
      var i = e.history;
      i.undone.length = 0;
      var o,
          a,
          s = +new Date();
      if ((i.lastOp == r || i.lastOrigin == t.origin && t.origin && ("+" == t.origin.charAt(0) && i.lastModTime > s - (e.cm ? e.cm.options.historyEventDelay : 500) || "*" == t.origin.charAt(0))) && (o = function (e, t) {
        return t ? (Pi(e.done), _(e.done)) : e.done.length && !_(e.done).ranges ? _(e.done) : e.done.length > 1 && !e.done[e.done.length - 2].ranges ? (e.done.pop(), _(e.done)) : void 0;
      }(i, i.lastOp == r))) a = _(o.changes), 0 == ve(t.from, t.to) && 0 == ve(t.from, a.to) ? a.to = wi(t) : o.changes.push(Di(e, t));else {
        var l = _(i.done);

        for (l && l.ranges || zi(e.sel, i.done), o = {
          changes: [Di(e, t)],
          generation: i.generation
        }, i.done.push(o); i.done.length > i.undoDepth;) {
          i.done.shift(), i.done[0].ranges || i.done.shift();
        }
      }
      i.done.push(n), i.generation = ++i.maxGeneration, i.lastModTime = i.lastSelTime = s, i.lastOp = i.lastSelOp = r, i.lastOrigin = i.lastSelOrigin = t.origin, a || rt(e, "historyAdded");
    }

    function Ri(e, t, n, r) {
      var i = e.history,
          o = r && r.origin;
      n == i.lastSelOp || o && i.lastSelOrigin == o && (i.lastModTime == i.lastSelTime && i.lastOrigin == o || function (e, t, n, r) {
        var i = t.charAt(0);
        return "*" == i || "+" == i && n.ranges.length == r.ranges.length && n.somethingSelected() == r.somethingSelected() && new Date() - e.history.lastSelTime <= (e.cm ? e.cm.options.historyEventDelay : 500);
      }(e, o, _(i.done), t)) ? i.done[i.done.length - 1] = t : zi(t, i.done), i.lastSelTime = +new Date(), i.lastSelOrigin = o, i.lastSelOp = n, r && !1 !== r.clearRedo && Pi(i.undone);
    }

    function zi(e, t) {
      var n = _(t);

      n && n.ranges && n.equals(e) || t.push(e);
    }

    function Fi(e, t, n, r) {
      var i = t["spans_" + e.id],
          o = 0;
      e.iter(Math.max(e.first, n), Math.min(e.first + e.size, r), function (n) {
        n.markedSpans && ((i || (i = t["spans_" + e.id] = {}))[o] = n.markedSpans), ++o;
      });
    }

    function Hi(e) {
      if (!e) return null;

      for (var t, n = 0; n < e.length; ++n) {
        e[n].marker.explicitlyCleared ? t || (t = e.slice(0, n)) : t && t.push(e[n]);
      }

      return t ? t.length ? t : null : e;
    }

    function Bi(e, t) {
      var n = function (e, t) {
        var n = t["spans_" + e.id];
        if (!n) return null;

        for (var r = [], i = 0; i < t.text.length; ++i) {
          r.push(Hi(n[i]));
        }

        return r;
      }(e, t),
          r = Te(e, t);

      if (!n) return r;
      if (!r) return n;

      for (var i = 0; i < n.length; ++i) {
        var o = n[i],
            a = r[i];
        if (o && a) e: for (var s = 0; s < a.length; ++s) {
          for (var l = a[s], u = 0; u < o.length; ++u) {
            if (o[u].marker == l.marker) continue e;
          }

          o.push(l);
        } else a && (n[i] = a);
      }

      return n;
    }

    function ji(e, t, n) {
      for (var r = [], i = 0; i < e.length; ++i) {
        var o = e[i];
        if (o.ranges) r.push(n ? mi.prototype.deepCopy.call(o) : o);else {
          var a = o.changes,
              s = [];
          r.push({
            changes: s
          });

          for (var l = 0; l < a.length; ++l) {
            var u = a[l],
                c = void 0;
            if (s.push({
              from: u.from,
              to: u.to,
              text: u.text
            }), t) for (var h in u) {
              (c = h.match(/^spans_(\d+)$/)) && B(t, Number(c[1])) > -1 && (_(s)[h] = u[h], delete u[h]);
            }
          }
        }
      }

      return r;
    }

    function Gi(e, t, n, r) {
      if (r) {
        var i = e.anchor;

        if (n) {
          var o = ve(t, i) < 0;
          o != ve(n, i) < 0 ? (i = t, t = n) : o != ve(t, n) < 0 && (t = n);
        }

        return new bi(i, t);
      }

      return new bi(n || t, t);
    }

    function Vi(e, t, n, r, i) {
      null == i && (i = e.cm && (e.cm.display.shift || e.extend)), Xi(e, new mi([Gi(e.sel.primary(), t, n, i)], 0), r);
    }

    function Ui(e, t, n) {
      for (var r = [], i = e.cm && (e.cm.display.shift || e.extend), o = 0; o < e.sel.ranges.length; o++) {
        r[o] = Gi(e.sel.ranges[o], t[o], null, i);
      }

      var a = yi(e.cm, r, e.sel.primIndex);
      Xi(e, a, n);
    }

    function Zi(e, t, n, r) {
      var i = e.sel.ranges.slice(0);
      i[t] = n, Xi(e, yi(e.cm, i, e.sel.primIndex), r);
    }

    function Yi(e, t, n, r) {
      Xi(e, Ai(t, n), r);
    }

    function Qi(e, t, n) {
      var r = e.history.done,
          i = _(r);

      i && i.ranges ? (r[r.length - 1] = t, _i(e, t, n)) : Xi(e, t, n);
    }

    function Xi(e, t, n) {
      _i(e, t, n), Ri(e, e.sel, e.cm ? e.cm.curOp.id : NaN, n);
    }

    function _i(e, t, n) {
      (at(e, "beforeSelectionChange") || e.cm && at(e.cm, "beforeSelectionChange")) && (t = function (e, t, n) {
        var r = {
          ranges: t.ranges,
          update: function update(t) {
            this.ranges = [];

            for (var n = 0; n < t.length; n++) {
              this.ranges[n] = new bi(Ce(e, t[n].anchor), Ce(e, t[n].head));
            }
          },
          origin: n && n.origin
        };
        return rt(e, "beforeSelectionChange", e, r), e.cm && rt(e.cm, "beforeSelectionChange", e.cm, r), r.ranges != t.ranges ? yi(e.cm, r.ranges, r.ranges.length - 1) : t;
      }(e, t, n));
      var r = n && n.bias || (ve(t.primary().head, e.sel.primary().head) < 0 ? -1 : 1);
      Ki(e, qi(e, t, r, !0)), n && !1 === n.scroll || !e.cm || Ir(e.cm);
    }

    function Ki(e, t) {
      t.equals(e.sel) || (e.sel = t, e.cm && (e.cm.curOp.updateInput = e.cm.curOp.selectionChanged = !0, ot(e.cm)), sn(e, "cursorActivity", e));
    }

    function Ji(e) {
      Ki(e, qi(e, e.sel, null, !1));
    }

    function qi(e, t, n, r) {
      for (var i, o = 0; o < t.ranges.length; o++) {
        var a = t.ranges[o],
            s = t.ranges.length == e.sel.ranges.length && e.sel.ranges[o],
            l = eo(e, a.anchor, s && s.anchor, n, r),
            u = eo(e, a.head, s && s.head, n, r);
        (i || l != a.anchor || u != a.head) && (i || (i = t.ranges.slice(0, o)), i[o] = new bi(l, u));
      }

      return i ? yi(e.cm, i, t.primIndex) : t;
    }

    function $i(e, t, n, r, i) {
      var o = se(e, t.line);
      if (o.markedSpans) for (var a = 0; a < o.markedSpans.length; ++a) {
        var s = o.markedSpans[a],
            l = s.marker;

        if ((null == s.from || (l.inclusiveLeft ? s.from <= t.ch : s.from < t.ch)) && (null == s.to || (l.inclusiveRight ? s.to >= t.ch : s.to > t.ch))) {
          if (i && (rt(l, "beforeCursorEnter"), l.explicitlyCleared)) {
            if (o.markedSpans) {
              --a;
              continue;
            }

            break;
          }

          if (!l.atomic) continue;

          if (n) {
            var u = l.find(r < 0 ? 1 : -1),
                c = void 0;
            if ((r < 0 ? l.inclusiveRight : l.inclusiveLeft) && (u = to(e, u, -r, u && u.line == t.line ? o : null)), u && u.line == t.line && (c = ve(u, n)) && (r < 0 ? c < 0 : c > 0)) return $i(e, u, t, r, i);
          }

          var h = l.find(r < 0 ? -1 : 1);
          return (r < 0 ? l.inclusiveLeft : l.inclusiveRight) && (h = to(e, h, r, h.line == t.line ? o : null)), h ? $i(e, h, t, r, i) : null;
        }
      }
      return t;
    }

    function eo(e, t, n, r, i) {
      var o = r || 1,
          a = $i(e, t, n, o, i) || !i && $i(e, t, n, o, !0) || $i(e, t, n, -o, i) || !i && $i(e, t, n, -o, !0);
      return a || (e.cantEdit = !0, ge(e.first, 0));
    }

    function to(e, t, n, r) {
      return n < 0 && 0 == t.ch ? t.line > e.first ? Ce(e, ge(t.line - 1)) : null : n > 0 && t.ch == (r || se(e, t.line)).text.length ? t.line < e.first + e.size - 1 ? ge(t.line + 1, 0) : null : new ge(t.line, t.ch + n);
    }

    function no(e) {
      e.setSelection(ge(e.firstLine(), 0), ge(e.lastLine()), V);
    }

    function ro(e, t, n) {
      var r = {
        canceled: !1,
        from: t.from,
        to: t.to,
        text: t.text,
        origin: t.origin,
        cancel: function cancel() {
          return r.canceled = !0;
        }
      };
      return n && (r.update = function (t, n, i, o) {
        t && (r.from = Ce(e, t)), n && (r.to = Ce(e, n)), i && (r.text = i), void 0 !== o && (r.origin = o);
      }), rt(e, "beforeChange", e, r), e.cm && rt(e.cm, "beforeChange", e.cm, r), r.canceled ? null : {
        from: r.from,
        to: r.to,
        text: r.text,
        origin: r.origin
      };
    }

    function io(e, t, n) {
      if (e.cm) {
        if (!e.cm.curOp) return Xr(e.cm, io)(e, t, n);
        if (e.cm.state.suppressEdits) return;
      }

      if (!(at(e, "beforeChange") || e.cm && at(e.cm, "beforeChange")) || (t = ro(e, t, !0))) {
        var r = ke && !n && function (e, t, n) {
          var r = null;
          if (e.iter(t.line, n.line + 1, function (e) {
            if (e.markedSpans) for (var t = 0; t < e.markedSpans.length; ++t) {
              var n = e.markedSpans[t].marker;
              !n.readOnly || r && -1 != B(r, n) || (r || (r = [])).push(n);
            }
          }), !r) return null;

          for (var i = [{
            from: t,
            to: n
          }], o = 0; o < r.length; ++o) {
            for (var a = r[o], s = a.find(0), l = 0; l < i.length; ++l) {
              var u = i[l];

              if (!(ve(u.to, s.from) < 0 || ve(u.from, s.to) > 0)) {
                var c = [l, 1],
                    h = ve(u.from, s.from),
                    d = ve(u.to, s.to);
                (h < 0 || !a.inclusiveLeft && !h) && c.push({
                  from: u.from,
                  to: s.from
                }), (d > 0 || !a.inclusiveRight && !d) && c.push({
                  from: s.to,
                  to: u.to
                }), i.splice.apply(i, c), l += c.length - 3;
              }
            }
          }

          return i;
        }(e, t.from, t.to);

        if (r) for (var i = r.length - 1; i >= 0; --i) {
          oo(e, {
            from: r[i].from,
            to: r[i].to,
            text: i ? [""] : t.text,
            origin: t.origin
          });
        } else oo(e, t);
      }
    }

    function oo(e, t) {
      if (1 != t.text.length || "" != t.text[0] || 0 != ve(t.from, t.to)) {
        var n = xi(e, t);
        Wi(e, t, n, e.cm ? e.cm.curOp.id : NaN), lo(e, t, n, Te(e, t));
        var r = [];
        Ti(e, function (e, n) {
          n || -1 != B(r, e.history) || (fo(e.history, t), r.push(e.history)), lo(e, t, null, Te(e, t));
        });
      }
    }

    function ao(e, t, n) {
      var r = e.cm && e.cm.state.suppressEdits;

      if (!r || n) {
        for (var i, o = e.history, a = e.sel, s = "undo" == t ? o.done : o.undone, l = "undo" == t ? o.undone : o.done, u = 0; u < s.length && (i = s[u], n ? !i.ranges || i.equals(e.sel) : i.ranges); u++) {
          ;
        }

        if (u != s.length) {
          for (o.lastOrigin = o.lastSelOrigin = null;;) {
            if (!(i = s.pop()).ranges) {
              if (r) return void s.push(i);
              break;
            }

            if (zi(i, l), n && !i.equals(e.sel)) return void Xi(e, i, {
              clearRedo: !1
            });
            a = i;
          }

          var c = [];
          zi(a, l), l.push({
            changes: c,
            generation: o.generation
          }), o.generation = i.generation || ++o.maxGeneration;

          for (var h = at(e, "beforeChange") || e.cm && at(e.cm, "beforeChange"), d = function d(n) {
            var r = i.changes[n];
            if (r.origin = t, h && !ro(e, r, !1)) return s.length = 0, {};
            c.push(Di(e, r));
            var o = n ? xi(e, r) : _(s);
            lo(e, r, o, Bi(e, r)), !n && e.cm && e.cm.scrollIntoView({
              from: r.from,
              to: wi(r)
            });
            var a = [];
            Ti(e, function (e, t) {
              t || -1 != B(a, e.history) || (fo(e.history, r), a.push(e.history)), lo(e, r, null, Bi(e, r));
            });
          }, f = i.changes.length - 1; f >= 0; --f) {
            var p = d(f);
            if (p) return p.v;
          }
        }
      }
    }

    function so(e, t) {
      if (0 != t && (e.first += t, e.sel = new mi(K(e.sel.ranges, function (e) {
        return new bi(ge(e.anchor.line + t, e.anchor.ch), ge(e.head.line + t, e.head.ch));
      }), e.sel.primIndex), e.cm)) {
        Jr(e.cm, e.first, e.first - t, t);

        for (var n = e.cm.display, r = n.viewFrom; r < n.viewTo; r++) {
          qr(e.cm, r, "gutter");
        }
      }
    }

    function lo(e, t, n, r) {
      if (e.cm && !e.cm.curOp) return Xr(e.cm, lo)(e, t, n, r);
      if (t.to.line < e.first) so(e, t.text.length - 1 - (t.to.line - t.from.line));else if (!(t.from.line > e.lastLine())) {
        if (t.from.line < e.first) {
          var i = t.text.length - 1 - (e.first - t.from.line);
          so(e, i), t = {
            from: ge(e.first, 0),
            to: ge(t.to.line + i, t.to.ch),
            text: [_(t.text)],
            origin: t.origin
          };
        }

        var o = e.lastLine();
        t.to.line > o && (t = {
          from: t.from,
          to: ge(o, se(e, o).text.length),
          text: [t.text[0]],
          origin: t.origin
        }), t.removed = le(e, t.from, t.to), n || (n = xi(e, t)), e.cm ? function (e, t, n) {
          var r = e.doc,
              i = e.display,
              o = t.from,
              a = t.to,
              s = !1,
              l = o.line;
          e.options.lineWrapping || (l = he(je(se(r, o.line))), r.iter(l, a.line + 1, function (e) {
            if (e == i.maxLine) return s = !0, !0;
          })), r.sel.contains(t.from, t.to) > -1 && ot(e), Li(r, t, n, ir(e)), e.options.lineWrapping || (r.iter(l, o.line + t.text.length, function (e) {
            var t = Qe(e);
            t > i.maxLineLength && (i.maxLine = e, i.maxLineLength = t, i.maxLineChanged = !0, s = !1);
          }), s && (e.curOp.updateMaxLine = !0)), function (e, t) {
            if (e.modeFrontier = Math.min(e.modeFrontier, t), !(e.highlightFrontier < t - 10)) {
              for (var n = e.first, r = t - 1; r > n; r--) {
                var i = se(e, r).stateAfter;

                if (i && (!(i instanceof Dt) || r + i.lookAhead < t)) {
                  n = r + 1;
                  break;
                }
              }

              e.highlightFrontier = Math.min(e.highlightFrontier, n);
            }
          }(r, o.line), ni(e, 400);
          var u = t.text.length - (a.line - o.line) - 1;
          t.full ? Jr(e) : o.line != a.line || 1 != t.text.length || Si(e.doc, t) ? Jr(e, o.line, a.line + 1, u) : qr(e, o.line, "text");
          var c = at(e, "changes"),
              h = at(e, "change");

          if (h || c) {
            var d = {
              from: o,
              to: a,
              text: t.text,
              removed: t.removed,
              origin: t.origin
            };
            h && sn(e, "change", e, d), c && (e.curOp.changeObjs || (e.curOp.changeObjs = [])).push(d);
          }

          e.display.selForContextMenu = null;
        }(e.cm, t, r) : Li(e, t, r), _i(e, n, V);
      }
    }

    function uo(e, t, n, r, i) {
      var o;
      r || (r = n), ve(r, n) < 0 && (n = (o = [r, n])[0], r = o[1]), "string" == typeof t && (t = e.splitLines(t)), io(e, {
        from: n,
        to: r,
        text: t,
        origin: i
      });
    }

    function co(e, t, n, r) {
      n < e.line ? e.line += r : t < e.line && (e.line = t, e.ch = 0);
    }

    function ho(e, t, n, r) {
      for (var i = 0; i < e.length; ++i) {
        var o = e[i],
            a = !0;

        if (o.ranges) {
          o.copied || ((o = e[i] = o.deepCopy()).copied = !0);

          for (var s = 0; s < o.ranges.length; s++) {
            co(o.ranges[s].anchor, t, n, r), co(o.ranges[s].head, t, n, r);
          }
        } else {
          for (var l = 0; l < o.changes.length; ++l) {
            var u = o.changes[l];
            if (n < u.from.line) u.from = ge(u.from.line + r, u.from.ch), u.to = ge(u.to.line + r, u.to.ch);else if (t <= u.to.line) {
              a = !1;
              break;
            }
          }

          a || (e.splice(0, i + 1), i = 0);
        }
      }
    }

    function fo(e, t) {
      var n = t.from.line,
          r = t.to.line,
          i = t.text.length - (r - n) - 1;
      ho(e.done, n, r, i), ho(e.undone, n, r, i);
    }

    function po(e, t, n, r) {
      var i = t,
          o = t;
      return "number" == typeof t ? o = se(e, we(e, t)) : i = he(t), null == i ? null : (r(o, i) && e.cm && qr(e.cm, i, n), o);
    }

    function go(e) {
      this.lines = e, this.parent = null;

      for (var t = 0, n = 0; n < e.length; ++n) {
        e[n].parent = this, t += e[n].height;
      }

      this.height = t;
    }

    function vo(e) {
      this.children = e;

      for (var t = 0, n = 0, r = 0; r < e.length; ++r) {
        var i = e[r];
        t += i.chunkSize(), n += i.height, i.parent = this;
      }

      this.size = t, this.height = n, this.parent = null;
    }

    bi.prototype.from = function () {
      return Ae(this.anchor, this.head);
    }, bi.prototype.to = function () {
      return ye(this.anchor, this.head);
    }, bi.prototype.empty = function () {
      return this.head.line == this.anchor.line && this.head.ch == this.anchor.ch;
    }, go.prototype = {
      chunkSize: function chunkSize() {
        return this.lines.length;
      },
      removeInner: function removeInner(e, t) {
        for (var n = e, r = e + t; n < r; ++n) {
          var i = this.lines[n];
          this.height -= i.height, Yt(i), sn(i, "delete");
        }

        this.lines.splice(e, t);
      },
      collapse: function collapse(e) {
        e.push.apply(e, this.lines);
      },
      insertInner: function insertInner(e, t, n) {
        this.height += n, this.lines = this.lines.slice(0, e).concat(t).concat(this.lines.slice(e));

        for (var r = 0; r < t.length; ++r) {
          t[r].parent = this;
        }
      },
      iterN: function iterN(e, t, n) {
        for (var r = e + t; e < r; ++e) {
          if (n(this.lines[e])) return !0;
        }
      }
    }, vo.prototype = {
      chunkSize: function chunkSize() {
        return this.size;
      },
      removeInner: function removeInner(e, t) {
        this.size -= t;

        for (var n = 0; n < this.children.length; ++n) {
          var r = this.children[n],
              i = r.chunkSize();

          if (e < i) {
            var o = Math.min(t, i - e),
                a = r.height;
            if (r.removeInner(e, o), this.height -= a - r.height, i == o && (this.children.splice(n--, 1), r.parent = null), 0 == (t -= o)) break;
            e = 0;
          } else e -= i;
        }

        if (this.size - t < 25 && (this.children.length > 1 || !(this.children[0] instanceof go))) {
          var s = [];
          this.collapse(s), this.children = [new go(s)], this.children[0].parent = this;
        }
      },
      collapse: function collapse(e) {
        for (var t = 0; t < this.children.length; ++t) {
          this.children[t].collapse(e);
        }
      },
      insertInner: function insertInner(e, t, n) {
        this.size += t.length, this.height += n;

        for (var r = 0; r < this.children.length; ++r) {
          var i = this.children[r],
              o = i.chunkSize();

          if (e <= o) {
            if (i.insertInner(e, t, n), i.lines && i.lines.length > 50) {
              for (var a = i.lines.length % 25 + 25, s = a; s < i.lines.length;) {
                var l = new go(i.lines.slice(s, s += 25));
                i.height -= l.height, this.children.splice(++r, 0, l), l.parent = this;
              }

              i.lines = i.lines.slice(0, a), this.maybeSpill();
            }

            break;
          }

          e -= o;
        }
      },
      maybeSpill: function maybeSpill() {
        if (!(this.children.length <= 10)) {
          var e = this;

          do {
            var t = e.children.splice(e.children.length - 5, 5),
                n = new vo(t);

            if (e.parent) {
              e.size -= n.size, e.height -= n.height;
              var r = B(e.parent.children, e);
              e.parent.children.splice(r + 1, 0, n);
            } else {
              var i = new vo(e.children);
              i.parent = e, e.children = [i, n], e = i;
            }

            n.parent = e.parent;
          } while (e.children.length > 10);

          e.parent.maybeSpill();
        }
      },
      iterN: function iterN(e, t, n) {
        for (var r = 0; r < this.children.length; ++r) {
          var i = this.children[r],
              o = i.chunkSize();

          if (e < o) {
            var a = Math.min(t, o - e);
            if (i.iterN(e, a, n)) return !0;
            if (0 == (t -= a)) break;
            e = 0;
          } else e -= o;
        }
      }
    };

    var mo = function mo(e, t, n) {
      if (n) for (var r in n) {
        n.hasOwnProperty(r) && (this[r] = n[r]);
      }
      this.doc = e, this.node = t;
    };

    function bo(e, t, n) {
      Ye(t) < (e.curOp && e.curOp.scrollTop || e.doc.scrollTop) && kr(e, n);
    }

    mo.prototype.clear = function () {
      var e = this.doc.cm,
          t = this.line.widgets,
          n = this.line,
          r = he(n);

      if (null != r && t) {
        for (var i = 0; i < t.length; ++i) {
          t[i] == this && t.splice(i--, 1);
        }

        t.length || (n.widgets = null);
        var o = An(this);
        ce(n, Math.max(0, n.height - o)), e && (Qr(e, function () {
          bo(e, n, -o), qr(e, r, "widget");
        }), sn(e, "lineWidgetCleared", e, this, r));
      }
    }, mo.prototype.changed = function () {
      var e = this,
          t = this.height,
          n = this.doc.cm,
          r = this.line;
      this.height = null;
      var i = An(this) - t;
      i && (Ue(this.doc, r) || ce(r, r.height + i), n && Qr(n, function () {
        n.curOp.forceUpdate = !0, bo(n, r, i), sn(n, "lineWidgetChanged", n, e, he(r));
      }));
    }, st(mo);

    var yo = 0,
        Ao = function Ao(e, t) {
      this.lines = [], this.type = t, this.doc = e, this.id = ++yo;
    };

    function wo(e, t, n, r, i) {
      if (r && r.shared) return function (e, t, n, r, i) {
        (r = z(r)).shared = !1;
        var o = [wo(e, t, n, r, i)],
            a = o[0],
            s = r.widgetNode;
        return Ti(e, function (e) {
          s && (r.widgetNode = s.cloneNode(!0)), o.push(wo(e, Ce(e, t), Ce(e, n), r, i));

          for (var l = 0; l < e.linked.length; ++l) {
            if (e.linked[l].isParent) return;
          }

          a = _(o);
        }), new Co(o, a);
      }(e, t, n, r, i);
      if (e.cm && !e.cm.curOp) return Xr(e.cm, wo)(e, t, n, r, i);
      var o = new Ao(e, i),
          a = ve(t, n);
      if (r && z(r, o, !1), a > 0 || 0 == a && !1 !== o.clearWhenEmpty) return o;

      if (o.replacedWith && (o.collapsed = !0, o.widgetNode = O("span", [o.replacedWith], "CodeMirror-widget"), r.handleMouseEvents || o.widgetNode.setAttribute("cm-ignore-events", "true"), r.insertLeft && (o.widgetNode.insertLeft = !0)), o.collapsed) {
        if (Be(e, t.line, t, n, o) || t.line != n.line && Be(e, n.line, t, n, o)) throw new Error("Inserting collapsed marker partially overlapping an existing one");
        Ie = !0;
      }

      o.addToHistory && Wi(e, {
        from: t,
        to: n,
        origin: "markText"
      }, e.sel, NaN);
      var s,
          l = t.line,
          u = e.cm;

      if (e.iter(l, n.line + 1, function (e) {
        u && o.collapsed && !u.options.lineWrapping && je(e) == u.display.maxLine && (s = !0), o.collapsed && l != t.line && ce(e, 0), function (e, t) {
          e.markedSpans = e.markedSpans ? e.markedSpans.concat([t]) : [t], t.marker.attachLine(e);
        }(e, new Me(o, l == t.line ? t.ch : null, l == n.line ? n.ch : null)), ++l;
      }), o.collapsed && e.iter(t.line, n.line + 1, function (t) {
        Ue(e, t) && ce(t, 0);
      }), o.clearOnEnter && et(o, "beforeCursorEnter", function () {
        return o.clear();
      }), o.readOnly && (ke = !0, (e.history.done.length || e.history.undone.length) && e.clearHistory()), o.collapsed && (o.id = ++yo, o.atomic = !0), u) {
        if (s && (u.curOp.updateMaxLine = !0), o.collapsed) Jr(u, t.line, n.line + 1);else if (o.className || o.startStyle || o.endStyle || o.css || o.attributes || o.title) for (var c = t.line; c <= n.line; c++) {
          qr(u, c, "text");
        }
        o.atomic && Ji(u.doc), sn(u, "markerAdded", u, o);
      }

      return o;
    }

    Ao.prototype.clear = function () {
      if (!this.explicitlyCleared) {
        var e = this.doc.cm,
            t = e && !e.curOp;

        if (t && Br(e), at(this, "clear")) {
          var n = this.find();
          n && sn(this, "clear", n.from, n.to);
        }

        for (var r = null, i = null, o = 0; o < this.lines.length; ++o) {
          var a = this.lines[o],
              s = Se(a.markedSpans, this);
          e && !this.collapsed ? qr(e, he(a), "text") : e && (null != s.to && (i = he(a)), null != s.from && (r = he(a))), a.markedSpans = Le(a.markedSpans, s), null == s.from && this.collapsed && !Ue(this.doc, a) && e && ce(a, er(e.display));
        }

        if (e && this.collapsed && !e.options.lineWrapping) for (var l = 0; l < this.lines.length; ++l) {
          var u = je(this.lines[l]),
              c = Qe(u);
          c > e.display.maxLineLength && (e.display.maxLine = u, e.display.maxLineLength = c, e.display.maxLineChanged = !0);
        }
        null != r && e && this.collapsed && Jr(e, r, i + 1), this.lines.length = 0, this.explicitlyCleared = !0, this.atomic && this.doc.cantEdit && (this.doc.cantEdit = !1, e && Ji(e.doc)), e && sn(e, "markerCleared", e, this, r, i), t && jr(e), this.parent && this.parent.clear();
      }
    }, Ao.prototype.find = function (e, t) {
      var n, r;
      null == e && "bookmark" == this.type && (e = 1);

      for (var i = 0; i < this.lines.length; ++i) {
        var o = this.lines[i],
            a = Se(o.markedSpans, this);
        if (null != a.from && (n = ge(t ? o : he(o), a.from), -1 == e)) return n;
        if (null != a.to && (r = ge(t ? o : he(o), a.to), 1 == e)) return r;
      }

      return n && {
        from: n,
        to: r
      };
    }, Ao.prototype.changed = function () {
      var e = this,
          t = this.find(-1, !0),
          n = this,
          r = this.doc.cm;
      t && r && Qr(r, function () {
        var i = t.line,
            o = he(t.line),
            a = On(r, o);

        if (a && (zn(a), r.curOp.selectionChanged = r.curOp.forceUpdate = !0), r.curOp.updateMaxLine = !0, !Ue(n.doc, i) && null != n.height) {
          var s = n.height;
          n.height = null;
          var l = An(n) - s;
          l && ce(i, i.height + l);
        }

        sn(r, "markerChanged", r, e);
      });
    }, Ao.prototype.attachLine = function (e) {
      if (!this.lines.length && this.doc.cm) {
        var t = this.doc.cm.curOp;
        t.maybeHiddenMarkers && -1 != B(t.maybeHiddenMarkers, this) || (t.maybeUnhiddenMarkers || (t.maybeUnhiddenMarkers = [])).push(this);
      }

      this.lines.push(e);
    }, Ao.prototype.detachLine = function (e) {
      if (this.lines.splice(B(this.lines, e), 1), !this.lines.length && this.doc.cm) {
        var t = this.doc.cm.curOp;
        (t.maybeHiddenMarkers || (t.maybeHiddenMarkers = [])).push(this);
      }
    }, st(Ao);

    var Co = function Co(e, t) {
      this.markers = e, this.primary = t;

      for (var n = 0; n < e.length; ++n) {
        e[n].parent = this;
      }
    };

    function xo(e) {
      return e.findMarks(ge(e.first, 0), e.clipPos(ge(e.lastLine())), function (e) {
        return e.parent;
      });
    }

    function ko(e) {
      for (var t = function t(_t2) {
        var n = e[_t2],
            r = [n.primary.doc];
        Ti(n.primary.doc, function (e) {
          return r.push(e);
        });

        for (var i = 0; i < n.markers.length; i++) {
          var o = n.markers[i];
          -1 == B(r, o.doc) && (o.parent = null, n.markers.splice(i--, 1));
        }
      }, n = 0; n < e.length; n++) {
        t(n);
      }
    }

    Co.prototype.clear = function () {
      if (!this.explicitlyCleared) {
        this.explicitlyCleared = !0;

        for (var e = 0; e < this.markers.length; ++e) {
          this.markers[e].clear();
        }

        sn(this, "clear");
      }
    }, Co.prototype.find = function (e, t) {
      return this.primary.find(e, t);
    }, st(Co);

    var Io = 0,
        Mo = function Mo(e, t, n, r, i) {
      if (!(this instanceof Mo)) return new Mo(e, t, n, r, i);
      null == n && (n = 0), vo.call(this, [new go([new Zt("", null)])]), this.first = n, this.scrollTop = this.scrollLeft = 0, this.cantEdit = !1, this.cleanGeneration = 1, this.modeFrontier = this.highlightFrontier = n;
      var o = ge(n, 0);
      this.sel = Ai(o), this.history = new Ei(null), this.id = ++Io, this.modeOption = t, this.lineSep = r, this.direction = "rtl" == i ? "rtl" : "ltr", this.extend = !1, "string" == typeof e && (e = this.splitLines(e)), Li(this, {
        from: o,
        to: o,
        text: e
      }), Xi(this, Ai(o), V);
    };

    Mo.prototype = q(vo.prototype, {
      constructor: Mo,
      iter: function iter(e, t, n) {
        n ? this.iterN(e - this.first, t - e, n) : this.iterN(this.first, this.first + this.size, e);
      },
      insert: function insert(e, t) {
        for (var n = 0, r = 0; r < t.length; ++r) {
          n += t[r].height;
        }

        this.insertInner(e - this.first, t, n);
      },
      remove: function remove(e, t) {
        this.removeInner(e - this.first, t);
      },
      getValue: function getValue(e) {
        var t = ue(this, this.first, this.first + this.size);
        return !1 === e ? t : t.join(e || this.lineSeparator());
      },
      setValue: Kr(function (e) {
        var t = ge(this.first, 0),
            n = this.first + this.size - 1;
        io(this, {
          from: t,
          to: ge(n, se(this, n).text.length),
          text: this.splitLines(e),
          origin: "setValue",
          full: !0
        }, !0), this.cm && Mr(this.cm, 0, 0), Xi(this, Ai(t), V);
      }),
      replaceRange: function replaceRange(e, t, n, r) {
        t = Ce(this, t), n = n ? Ce(this, n) : t, uo(this, e, t, n, r);
      },
      getRange: function getRange(e, t, n) {
        var r = le(this, Ce(this, e), Ce(this, t));
        return !1 === n ? r : r.join(n || this.lineSeparator());
      },
      getLine: function getLine(e) {
        var t = this.getLineHandle(e);
        return t && t.text;
      },
      getLineHandle: function getLineHandle(e) {
        if (fe(this, e)) return se(this, e);
      },
      getLineNumber: function getLineNumber(e) {
        return he(e);
      },
      getLineHandleVisualStart: function getLineHandleVisualStart(e) {
        return "number" == typeof e && (e = se(this, e)), je(e);
      },
      lineCount: function lineCount() {
        return this.size;
      },
      firstLine: function firstLine() {
        return this.first;
      },
      lastLine: function lastLine() {
        return this.first + this.size - 1;
      },
      clipPos: function clipPos(e) {
        return Ce(this, e);
      },
      getCursor: function getCursor(e) {
        var t = this.sel.primary();
        return null == e || "head" == e ? t.head : "anchor" == e ? t.anchor : "end" == e || "to" == e || !1 === e ? t.to() : t.from();
      },
      listSelections: function listSelections() {
        return this.sel.ranges;
      },
      somethingSelected: function somethingSelected() {
        return this.sel.somethingSelected();
      },
      setCursor: Kr(function (e, t, n) {
        Yi(this, Ce(this, "number" == typeof e ? ge(e, t || 0) : e), null, n);
      }),
      setSelection: Kr(function (e, t, n) {
        Yi(this, Ce(this, e), Ce(this, t || e), n);
      }),
      extendSelection: Kr(function (e, t, n) {
        Vi(this, Ce(this, e), t && Ce(this, t), n);
      }),
      extendSelections: Kr(function (e, t) {
        Ui(this, xe(this, e), t);
      }),
      extendSelectionsBy: Kr(function (e, t) {
        var n = K(this.sel.ranges, e);
        Ui(this, xe(this, n), t);
      }),
      setSelections: Kr(function (e, t, n) {
        if (e.length) {
          for (var r = [], i = 0; i < e.length; i++) {
            r[i] = new bi(Ce(this, e[i].anchor), Ce(this, e[i].head));
          }

          null == t && (t = Math.min(e.length - 1, this.sel.primIndex)), Xi(this, yi(this.cm, r, t), n);
        }
      }),
      addSelection: Kr(function (e, t, n) {
        var r = this.sel.ranges.slice(0);
        r.push(new bi(Ce(this, e), Ce(this, t || e))), Xi(this, yi(this.cm, r, r.length - 1), n);
      }),
      getSelection: function getSelection(e) {
        for (var t, n = this.sel.ranges, r = 0; r < n.length; r++) {
          var i = le(this, n[r].from(), n[r].to());
          t = t ? t.concat(i) : i;
        }

        return !1 === e ? t : t.join(e || this.lineSeparator());
      },
      getSelections: function getSelections(e) {
        for (var t = [], n = this.sel.ranges, r = 0; r < n.length; r++) {
          var i = le(this, n[r].from(), n[r].to());
          !1 !== e && (i = i.join(e || this.lineSeparator())), t[r] = i;
        }

        return t;
      },
      replaceSelection: function replaceSelection(e, t, n) {
        for (var r = [], i = 0; i < this.sel.ranges.length; i++) {
          r[i] = e;
        }

        this.replaceSelections(r, t, n || "+input");
      },
      replaceSelections: Kr(function (e, t, n) {
        for (var r = [], i = this.sel, o = 0; o < i.ranges.length; o++) {
          var a = i.ranges[o];
          r[o] = {
            from: a.from(),
            to: a.to(),
            text: this.splitLines(e[o]),
            origin: n
          };
        }

        for (var s = t && "end" != t && function (e, t, n) {
          for (var r = [], i = ge(e.first, 0), o = i, a = 0; a < t.length; a++) {
            var s = t[a],
                l = ki(s.from, i, o),
                u = ki(wi(s), i, o);

            if (i = s.to, o = u, "around" == n) {
              var c = e.sel.ranges[a],
                  h = ve(c.head, c.anchor) < 0;
              r[a] = new bi(h ? u : l, h ? l : u);
            } else r[a] = new bi(l, l);
          }

          return new mi(r, e.sel.primIndex);
        }(this, r, t), l = r.length - 1; l >= 0; l--) {
          io(this, r[l]);
        }

        s ? Qi(this, s) : this.cm && Ir(this.cm);
      }),
      undo: Kr(function () {
        ao(this, "undo");
      }),
      redo: Kr(function () {
        ao(this, "redo");
      }),
      undoSelection: Kr(function () {
        ao(this, "undo", !0);
      }),
      redoSelection: Kr(function () {
        ao(this, "redo", !0);
      }),
      setExtending: function setExtending(e) {
        this.extend = e;
      },
      getExtending: function getExtending() {
        return this.extend;
      },
      historySize: function historySize() {
        for (var e = this.history, t = 0, n = 0, r = 0; r < e.done.length; r++) {
          e.done[r].ranges || ++t;
        }

        for (var i = 0; i < e.undone.length; i++) {
          e.undone[i].ranges || ++n;
        }

        return {
          undo: t,
          redo: n
        };
      },
      clearHistory: function clearHistory() {
        this.history = new Ei(this.history.maxGeneration);
      },
      markClean: function markClean() {
        this.cleanGeneration = this.changeGeneration(!0);
      },
      changeGeneration: function changeGeneration(e) {
        return e && (this.history.lastOp = this.history.lastSelOp = this.history.lastOrigin = null), this.history.generation;
      },
      isClean: function isClean(e) {
        return this.history.generation == (e || this.cleanGeneration);
      },
      getHistory: function getHistory() {
        return {
          done: ji(this.history.done),
          undone: ji(this.history.undone)
        };
      },
      setHistory: function setHistory(e) {
        var t = this.history = new Ei(this.history.maxGeneration);
        t.done = ji(e.done.slice(0), null, !0), t.undone = ji(e.undone.slice(0), null, !0);
      },
      setGutterMarker: Kr(function (e, t, n) {
        return po(this, e, "gutter", function (e) {
          var r = e.gutterMarkers || (e.gutterMarkers = {});
          return r[t] = n, !n && ne(r) && (e.gutterMarkers = null), !0;
        });
      }),
      clearGutter: Kr(function (e) {
        var t = this;
        this.iter(function (n) {
          n.gutterMarkers && n.gutterMarkers[e] && po(t, n, "gutter", function () {
            return n.gutterMarkers[e] = null, ne(n.gutterMarkers) && (n.gutterMarkers = null), !0;
          });
        });
      }),
      lineInfo: function lineInfo(e) {
        var t;

        if ("number" == typeof e) {
          if (!fe(this, e)) return null;
          if (t = e, !(e = se(this, e))) return null;
        } else if (null == (t = he(e))) return null;

        return {
          line: t,
          handle: e,
          text: e.text,
          gutterMarkers: e.gutterMarkers,
          textClass: e.textClass,
          bgClass: e.bgClass,
          wrapClass: e.wrapClass,
          widgets: e.widgets
        };
      },
      addLineClass: Kr(function (e, t, n) {
        return po(this, e, "gutter" == t ? "gutter" : "class", function (e) {
          var r = "text" == t ? "textClass" : "background" == t ? "bgClass" : "gutter" == t ? "gutterClass" : "wrapClass";

          if (e[r]) {
            if (k(n).test(e[r])) return !1;
            e[r] += " " + n;
          } else e[r] = n;

          return !0;
        });
      }),
      removeLineClass: Kr(function (e, t, n) {
        return po(this, e, "gutter" == t ? "gutter" : "class", function (e) {
          var r = "text" == t ? "textClass" : "background" == t ? "bgClass" : "gutter" == t ? "gutterClass" : "wrapClass",
              i = e[r];
          if (!i) return !1;
          if (null == n) e[r] = null;else {
            var o = i.match(k(n));
            if (!o) return !1;
            var a = o.index + o[0].length;
            e[r] = i.slice(0, o.index) + (o.index && a != i.length ? " " : "") + i.slice(a) || null;
          }
          return !0;
        });
      }),
      addLineWidget: Kr(function (e, t, n) {
        return function (e, t, n, r) {
          var i = new mo(e, n, r),
              o = e.cm;
          return o && i.noHScroll && (o.display.alignWidgets = !0), po(e, t, "widget", function (t) {
            var n = t.widgets || (t.widgets = []);

            if (null == i.insertAt ? n.push(i) : n.splice(Math.min(n.length - 1, Math.max(0, i.insertAt)), 0, i), i.line = t, o && !Ue(e, t)) {
              var r = Ye(t) < e.scrollTop;
              ce(t, t.height + An(i)), r && kr(o, i.height), o.curOp.forceUpdate = !0;
            }

            return !0;
          }), o && sn(o, "lineWidgetAdded", o, i, "number" == typeof t ? t : he(t)), i;
        }(this, e, t, n);
      }),
      removeLineWidget: function removeLineWidget(e) {
        e.clear();
      },
      markText: function markText(e, t, n) {
        return wo(this, Ce(this, e), Ce(this, t), n, n && n.type || "range");
      },
      setBookmark: function setBookmark(e, t) {
        var n = {
          replacedWith: t && (null == t.nodeType ? t.widget : t),
          insertLeft: t && t.insertLeft,
          clearWhenEmpty: !1,
          shared: t && t.shared,
          handleMouseEvents: t && t.handleMouseEvents
        };
        return wo(this, e = Ce(this, e), e, n, "bookmark");
      },
      findMarksAt: function findMarksAt(e) {
        var t = [],
            n = se(this, (e = Ce(this, e)).line).markedSpans;
        if (n) for (var r = 0; r < n.length; ++r) {
          var i = n[r];
          (null == i.from || i.from <= e.ch) && (null == i.to || i.to >= e.ch) && t.push(i.marker.parent || i.marker);
        }
        return t;
      },
      findMarks: function findMarks(e, t, n) {
        e = Ce(this, e), t = Ce(this, t);
        var r = [],
            i = e.line;
        return this.iter(e.line, t.line + 1, function (o) {
          var a = o.markedSpans;
          if (a) for (var s = 0; s < a.length; s++) {
            var l = a[s];
            null != l.to && i == e.line && e.ch >= l.to || null == l.from && i != e.line || null != l.from && i == t.line && l.from >= t.ch || n && !n(l.marker) || r.push(l.marker.parent || l.marker);
          }
          ++i;
        }), r;
      },
      getAllMarks: function getAllMarks() {
        var e = [];
        return this.iter(function (t) {
          var n = t.markedSpans;
          if (n) for (var r = 0; r < n.length; ++r) {
            null != n[r].from && e.push(n[r].marker);
          }
        }), e;
      },
      posFromIndex: function posFromIndex(e) {
        var t,
            n = this.first,
            r = this.lineSeparator().length;
        return this.iter(function (i) {
          var o = i.text.length + r;
          if (o > e) return t = e, !0;
          e -= o, ++n;
        }), Ce(this, ge(n, t));
      },
      indexFromPos: function indexFromPos(e) {
        var t = (e = Ce(this, e)).ch;
        if (e.line < this.first || e.ch < 0) return 0;
        var n = this.lineSeparator().length;
        return this.iter(this.first, e.line, function (e) {
          t += e.text.length + n;
        }), t;
      },
      copy: function copy(e) {
        var t = new Mo(ue(this, this.first, this.first + this.size), this.modeOption, this.first, this.lineSep, this.direction);
        return t.scrollTop = this.scrollTop, t.scrollLeft = this.scrollLeft, t.sel = this.sel, t.extend = !1, e && (t.history.undoDepth = this.history.undoDepth, t.setHistory(this.getHistory())), t;
      },
      linkedDoc: function linkedDoc(e) {
        e || (e = {});
        var t = this.first,
            n = this.first + this.size;
        null != e.from && e.from > t && (t = e.from), null != e.to && e.to < n && (n = e.to);
        var r = new Mo(ue(this, t, n), e.mode || this.modeOption, t, this.lineSep, this.direction);
        return e.sharedHist && (r.history = this.history), (this.linked || (this.linked = [])).push({
          doc: r,
          sharedHist: e.sharedHist
        }), r.linked = [{
          doc: this,
          isParent: !0,
          sharedHist: e.sharedHist
        }], function (e, t) {
          for (var n = 0; n < t.length; n++) {
            var r = t[n],
                i = r.find(),
                o = e.clipPos(i.from),
                a = e.clipPos(i.to);

            if (ve(o, a)) {
              var s = wo(e, o, a, r.primary, r.primary.type);
              r.markers.push(s), s.parent = r;
            }
          }
        }(r, xo(this)), r;
      },
      unlinkDoc: function unlinkDoc(e) {
        if (e instanceof xa && (e = e.doc), this.linked) for (var t = 0; t < this.linked.length; ++t) {
          var n = this.linked[t];

          if (n.doc == e) {
            this.linked.splice(t, 1), e.unlinkDoc(this), ko(xo(this));
            break;
          }
        }

        if (e.history == this.history) {
          var r = [e.id];
          Ti(e, function (e) {
            return r.push(e.id);
          }, !0), e.history = new Ei(null), e.history.done = ji(this.history.done, r), e.history.undone = ji(this.history.undone, r);
        }
      },
      iterLinkedDocs: function iterLinkedDocs(e) {
        Ti(this, e);
      },
      getMode: function getMode() {
        return this.mode;
      },
      getEditor: function getEditor() {
        return this.cm;
      },
      splitLines: function splitLines(e) {
        return this.lineSep ? e.split(this.lineSep) : yt(e);
      },
      lineSeparator: function lineSeparator() {
        return this.lineSep || "\n";
      },
      setDirection: Kr(function (e) {
        "rtl" != e && (e = "ltr"), e != this.direction && (this.direction = e, this.iter(function (e) {
          return e.order = null;
        }), this.cm && function (e) {
          Qr(e, function () {
            Ni(e), Jr(e);
          });
        }(this.cm));
      })
    }), Mo.prototype.eachLine = Mo.prototype.iter;
    var So = 0;

    function Lo(e) {
      var t = this;

      if (To(t), !it(t, e) && !wn(t.display, e)) {
        lt(e), a && (So = +new Date());
        var n = ar(t, e, !0),
            r = e.dataTransfer.files;
        if (n && !t.isReadOnly()) if (r && r.length && window.FileReader && window.File) for (var i = r.length, o = Array(i), s = 0, l = function l(e, r) {
          if (!t.options.allowDropFileTypes || -1 != B(t.options.allowDropFileTypes, e.type)) {
            var a = new FileReader();
            a.onload = Xr(t, function () {
              var e = a.result;

              if (/[\x00-\x08\x0e-\x1f]{2}/.test(e) && (e = ""), o[r] = e, ++s == i) {
                var l = {
                  from: n = Ce(t.doc, n),
                  to: n,
                  text: t.doc.splitLines(o.join(t.doc.lineSeparator())),
                  origin: "paste"
                };
                io(t.doc, l), Qi(t.doc, Ai(n, wi(l)));
              }
            }), a.readAsText(e);
          }
        }, u = 0; u < i; ++u) {
          l(r[u], u);
        } else {
          if (t.state.draggingText && t.doc.sel.contains(n) > -1) return t.state.draggingText(e), void setTimeout(function () {
            return t.display.input.focus();
          }, 20);

          try {
            var c = e.dataTransfer.getData("Text");

            if (c) {
              var h;
              if (t.state.draggingText && !t.state.draggingText.copy && (h = t.listSelections()), _i(t.doc, Ai(n, n)), h) for (var d = 0; d < h.length; ++d) {
                uo(t.doc, "", h[d].anchor, h[d].head, "drag");
              }
              t.replaceSelection(c, "around", "paste"), t.display.input.focus();
            }
          } catch (e) {}
        }
      }
    }

    function To(e) {
      e.display.dragCursor && (e.display.lineSpace.removeChild(e.display.dragCursor), e.display.dragCursor = null);
    }

    function Oo(e) {
      if (document.getElementsByClassName) {
        for (var t = document.getElementsByClassName("CodeMirror"), n = [], r = 0; r < t.length; r++) {
          var i = t[r].CodeMirror;
          i && n.push(i);
        }

        n.length && n[0].operation(function () {
          for (var t = 0; t < n.length; t++) {
            e(n[t]);
          }
        });
      }
    }

    var No = !1;

    function Eo() {
      No || (function () {
        var e;
        et(window, "resize", function () {
          null == e && (e = setTimeout(function () {
            e = null, Oo(Do);
          }, 100));
        }), et(window, "blur", function () {
          return Oo(mr);
        });
      }(), No = !0);
    }

    function Do(e) {
      var t = e.display;
      t.cachedCharWidth = t.cachedTextHeight = t.cachedPaddingH = null, t.scrollbarsClipped = !1, e.setSize();
    }

    for (var Po = {
      3: "Pause",
      8: "Backspace",
      9: "Tab",
      13: "Enter",
      16: "Shift",
      17: "Ctrl",
      18: "Alt",
      19: "Pause",
      20: "CapsLock",
      27: "Esc",
      32: "Space",
      33: "PageUp",
      34: "PageDown",
      35: "End",
      36: "Home",
      37: "Left",
      38: "Up",
      39: "Right",
      40: "Down",
      44: "PrintScrn",
      45: "Insert",
      46: "Delete",
      59: ";",
      61: "=",
      91: "Mod",
      92: "Mod",
      93: "Mod",
      106: "*",
      107: "=",
      109: "-",
      110: ".",
      111: "/",
      127: "Delete",
      145: "ScrollLock",
      173: "-",
      186: ";",
      187: "=",
      188: ",",
      189: "-",
      190: ".",
      191: "/",
      192: "`",
      219: "[",
      220: "\\",
      221: "]",
      222: "'",
      63232: "Up",
      63233: "Down",
      63234: "Left",
      63235: "Right",
      63272: "Delete",
      63273: "Home",
      63275: "End",
      63276: "PageUp",
      63277: "PageDown",
      63302: "Insert"
    }, Wo = 0; Wo < 10; Wo++) {
      Po[Wo + 48] = Po[Wo + 96] = String(Wo);
    }

    for (var Ro = 65; Ro <= 90; Ro++) {
      Po[Ro] = String.fromCharCode(Ro);
    }

    for (var zo = 1; zo <= 12; zo++) {
      Po[zo + 111] = Po[zo + 63235] = "F" + zo;
    }

    var Fo = {};

    function Ho(e) {
      var t,
          n,
          r,
          i,
          o = e.split(/-(?!$)/);
      e = o[o.length - 1];

      for (var a = 0; a < o.length - 1; a++) {
        var s = o[a];
        if (/^(cmd|meta|m)$/i.test(s)) i = !0;else if (/^a(lt)?$/i.test(s)) t = !0;else if (/^(c|ctrl|control)$/i.test(s)) n = !0;else {
          if (!/^s(hift)?$/i.test(s)) throw new Error("Unrecognized modifier name: " + s);
          r = !0;
        }
      }

      return t && (e = "Alt-" + e), n && (e = "Ctrl-" + e), i && (e = "Cmd-" + e), r && (e = "Shift-" + e), e;
    }

    function Bo(e) {
      var t = {};

      for (var n in e) {
        if (e.hasOwnProperty(n)) {
          var r = e[n];
          if (/^(name|fallthrough|(de|at)tach)$/.test(n)) continue;

          if ("..." == r) {
            delete e[n];
            continue;
          }

          for (var i = K(n.split(" "), Ho), o = 0; o < i.length; o++) {
            var a = void 0,
                s = void 0;
            o == i.length - 1 ? (s = i.join(" "), a = r) : (s = i.slice(0, o + 1).join(" "), a = "...");
            var l = t[s];

            if (l) {
              if (l != a) throw new Error("Inconsistent bindings for " + s);
            } else t[s] = a;
          }

          delete e[n];
        }
      }

      for (var u in t) {
        e[u] = t[u];
      }

      return e;
    }

    function jo(e, t, n, r) {
      var i = (t = Zo(t)).call ? t.call(e, r) : t[e];
      if (!1 === i) return "nothing";
      if ("..." === i) return "multi";
      if (null != i && n(i)) return "handled";

      if (t.fallthrough) {
        if ("[object Array]" != Object.prototype.toString.call(t.fallthrough)) return jo(e, t.fallthrough, n, r);

        for (var o = 0; o < t.fallthrough.length; o++) {
          var a = jo(e, t.fallthrough[o], n, r);
          if (a) return a;
        }
      }
    }

    function Go(e) {
      var t = "string" == typeof e ? e : Po[e.keyCode];
      return "Ctrl" == t || "Alt" == t || "Shift" == t || "Mod" == t;
    }

    function Vo(e, t, n) {
      var r = e;
      return t.altKey && "Alt" != r && (e = "Alt-" + e), (C ? t.metaKey : t.ctrlKey) && "Ctrl" != r && (e = "Ctrl-" + e), (C ? t.ctrlKey : t.metaKey) && "Cmd" != r && (e = "Cmd-" + e), !n && t.shiftKey && "Shift" != r && (e = "Shift-" + e), e;
    }

    function Uo(e, t) {
      if (h && 34 == e.keyCode && e.char) return !1;
      var n = Po[e.keyCode];
      return null != n && !e.altGraphKey && (3 == e.keyCode && e.code && (n = e.code), Vo(n, e, t));
    }

    function Zo(e) {
      return "string" == typeof e ? Fo[e] : e;
    }

    function Yo(e, t) {
      for (var n = e.doc.sel.ranges, r = [], i = 0; i < n.length; i++) {
        for (var o = t(n[i]); r.length && ve(o.from, _(r).to) <= 0;) {
          var a = r.pop();

          if (ve(a.from, o.from) < 0) {
            o.from = a.from;
            break;
          }
        }

        r.push(o);
      }

      Qr(e, function () {
        for (var t = r.length - 1; t >= 0; t--) {
          uo(e.doc, "", r[t].from, r[t].to, "+delete");
        }

        Ir(e);
      });
    }

    function Qo(e, t, n) {
      var r = oe(e.text, t + n, n);
      return r < 0 || r > e.text.length ? null : r;
    }

    function Xo(e, t, n) {
      var r = Qo(e, t.ch, n);
      return null == r ? null : new ge(t.line, r, n < 0 ? "after" : "before");
    }

    function _o(e, t, n, r, i) {
      if (e) {
        var o = qe(n, t.doc.direction);

        if (o) {
          var a,
              s = i < 0 ? _(o) : o[0],
              l = i < 0 == (1 == s.level),
              u = l ? "after" : "before";

          if (s.level > 0 || "rtl" == t.doc.direction) {
            var c = Nn(t, n);
            a = i < 0 ? n.text.length - 1 : 0;
            var h = En(t, c, a).top;
            a = ae(function (e) {
              return En(t, c, e).top == h;
            }, i < 0 == (1 == s.level) ? s.from : s.to - 1, a), "before" == u && (a = Qo(n, a, 1));
          } else a = i < 0 ? s.to : s.from;

          return new ge(r, a, u);
        }
      }

      return new ge(r, i < 0 ? n.text.length : 0, i < 0 ? "before" : "after");
    }

    Fo.basic = {
      Left: "goCharLeft",
      Right: "goCharRight",
      Up: "goLineUp",
      Down: "goLineDown",
      End: "goLineEnd",
      Home: "goLineStartSmart",
      PageUp: "goPageUp",
      PageDown: "goPageDown",
      Delete: "delCharAfter",
      Backspace: "delCharBefore",
      "Shift-Backspace": "delCharBefore",
      Tab: "defaultTab",
      "Shift-Tab": "indentAuto",
      Enter: "newlineAndIndent",
      Insert: "toggleOverwrite",
      Esc: "singleSelection"
    }, Fo.pcDefault = {
      "Ctrl-A": "selectAll",
      "Ctrl-D": "deleteLine",
      "Ctrl-Z": "undo",
      "Shift-Ctrl-Z": "redo",
      "Ctrl-Y": "redo",
      "Ctrl-Home": "goDocStart",
      "Ctrl-End": "goDocEnd",
      "Ctrl-Up": "goLineUp",
      "Ctrl-Down": "goLineDown",
      "Ctrl-Left": "goGroupLeft",
      "Ctrl-Right": "goGroupRight",
      "Alt-Left": "goLineStart",
      "Alt-Right": "goLineEnd",
      "Ctrl-Backspace": "delGroupBefore",
      "Ctrl-Delete": "delGroupAfter",
      "Ctrl-S": "save",
      "Ctrl-F": "find",
      "Ctrl-G": "findNext",
      "Shift-Ctrl-G": "findPrev",
      "Shift-Ctrl-F": "replace",
      "Shift-Ctrl-R": "replaceAll",
      "Ctrl-[": "indentLess",
      "Ctrl-]": "indentMore",
      "Ctrl-U": "undoSelection",
      "Shift-Ctrl-U": "redoSelection",
      "Alt-U": "redoSelection",
      fallthrough: "basic"
    }, Fo.emacsy = {
      "Ctrl-F": "goCharRight",
      "Ctrl-B": "goCharLeft",
      "Ctrl-P": "goLineUp",
      "Ctrl-N": "goLineDown",
      "Alt-F": "goWordRight",
      "Alt-B": "goWordLeft",
      "Ctrl-A": "goLineStart",
      "Ctrl-E": "goLineEnd",
      "Ctrl-V": "goPageDown",
      "Shift-Ctrl-V": "goPageUp",
      "Ctrl-D": "delCharAfter",
      "Ctrl-H": "delCharBefore",
      "Alt-D": "delWordAfter",
      "Alt-Backspace": "delWordBefore",
      "Ctrl-K": "killLine",
      "Ctrl-T": "transposeChars",
      "Ctrl-O": "openLine"
    }, Fo.macDefault = {
      "Cmd-A": "selectAll",
      "Cmd-D": "deleteLine",
      "Cmd-Z": "undo",
      "Shift-Cmd-Z": "redo",
      "Cmd-Y": "redo",
      "Cmd-Home": "goDocStart",
      "Cmd-Up": "goDocStart",
      "Cmd-End": "goDocEnd",
      "Cmd-Down": "goDocEnd",
      "Alt-Left": "goGroupLeft",
      "Alt-Right": "goGroupRight",
      "Cmd-Left": "goLineLeft",
      "Cmd-Right": "goLineRight",
      "Alt-Backspace": "delGroupBefore",
      "Ctrl-Alt-Backspace": "delGroupAfter",
      "Alt-Delete": "delGroupAfter",
      "Cmd-S": "save",
      "Cmd-F": "find",
      "Cmd-G": "findNext",
      "Shift-Cmd-G": "findPrev",
      "Cmd-Alt-F": "replace",
      "Shift-Cmd-Alt-F": "replaceAll",
      "Cmd-[": "indentLess",
      "Cmd-]": "indentMore",
      "Cmd-Backspace": "delWrappedLineLeft",
      "Cmd-Delete": "delWrappedLineRight",
      "Cmd-U": "undoSelection",
      "Shift-Cmd-U": "redoSelection",
      "Ctrl-Up": "goDocStart",
      "Ctrl-Down": "goDocEnd",
      fallthrough: ["basic", "emacsy"]
    }, Fo.default = b ? Fo.macDefault : Fo.pcDefault;
    var Ko = {
      selectAll: no,
      singleSelection: function singleSelection(e) {
        return e.setSelection(e.getCursor("anchor"), e.getCursor("head"), V);
      },
      killLine: function killLine(e) {
        return Yo(e, function (t) {
          if (t.empty()) {
            var n = se(e.doc, t.head.line).text.length;
            return t.head.ch == n && t.head.line < e.lastLine() ? {
              from: t.head,
              to: ge(t.head.line + 1, 0)
            } : {
              from: t.head,
              to: ge(t.head.line, n)
            };
          }

          return {
            from: t.from(),
            to: t.to()
          };
        });
      },
      deleteLine: function deleteLine(e) {
        return Yo(e, function (t) {
          return {
            from: ge(t.from().line, 0),
            to: Ce(e.doc, ge(t.to().line + 1, 0))
          };
        });
      },
      delLineLeft: function delLineLeft(e) {
        return Yo(e, function (e) {
          return {
            from: ge(e.from().line, 0),
            to: e.from()
          };
        });
      },
      delWrappedLineLeft: function delWrappedLineLeft(e) {
        return Yo(e, function (t) {
          var n = e.charCoords(t.head, "div").top + 5,
              r = e.coordsChar({
            left: 0,
            top: n
          }, "div");
          return {
            from: r,
            to: t.from()
          };
        });
      },
      delWrappedLineRight: function delWrappedLineRight(e) {
        return Yo(e, function (t) {
          var n = e.charCoords(t.head, "div").top + 5,
              r = e.coordsChar({
            left: e.display.lineDiv.offsetWidth + 100,
            top: n
          }, "div");
          return {
            from: t.from(),
            to: r
          };
        });
      },
      undo: function undo(e) {
        return e.undo();
      },
      redo: function redo(e) {
        return e.redo();
      },
      undoSelection: function undoSelection(e) {
        return e.undoSelection();
      },
      redoSelection: function redoSelection(e) {
        return e.redoSelection();
      },
      goDocStart: function goDocStart(e) {
        return e.extendSelection(ge(e.firstLine(), 0));
      },
      goDocEnd: function goDocEnd(e) {
        return e.extendSelection(ge(e.lastLine()));
      },
      goLineStart: function goLineStart(e) {
        return e.extendSelectionsBy(function (t) {
          return Jo(e, t.head.line);
        }, {
          origin: "+move",
          bias: 1
        });
      },
      goLineStartSmart: function goLineStartSmart(e) {
        return e.extendSelectionsBy(function (t) {
          return qo(e, t.head);
        }, {
          origin: "+move",
          bias: 1
        });
      },
      goLineEnd: function goLineEnd(e) {
        return e.extendSelectionsBy(function (t) {
          return function (e, t) {
            var n = se(e.doc, t),
                r = function (e) {
              for (var t; t = Fe(e);) {
                e = t.find(1, !0).line;
              }

              return e;
            }(n);

            return r != n && (t = he(r)), _o(!0, e, n, t, -1);
          }(e, t.head.line);
        }, {
          origin: "+move",
          bias: -1
        });
      },
      goLineRight: function goLineRight(e) {
        return e.extendSelectionsBy(function (t) {
          var n = e.cursorCoords(t.head, "div").top + 5;
          return e.coordsChar({
            left: e.display.lineDiv.offsetWidth + 100,
            top: n
          }, "div");
        }, Z);
      },
      goLineLeft: function goLineLeft(e) {
        return e.extendSelectionsBy(function (t) {
          var n = e.cursorCoords(t.head, "div").top + 5;
          return e.coordsChar({
            left: 0,
            top: n
          }, "div");
        }, Z);
      },
      goLineLeftSmart: function goLineLeftSmart(e) {
        return e.extendSelectionsBy(function (t) {
          var n = e.cursorCoords(t.head, "div").top + 5,
              r = e.coordsChar({
            left: 0,
            top: n
          }, "div");
          return r.ch < e.getLine(r.line).search(/\S/) ? qo(e, t.head) : r;
        }, Z);
      },
      goLineUp: function goLineUp(e) {
        return e.moveV(-1, "line");
      },
      goLineDown: function goLineDown(e) {
        return e.moveV(1, "line");
      },
      goPageUp: function goPageUp(e) {
        return e.moveV(-1, "page");
      },
      goPageDown: function goPageDown(e) {
        return e.moveV(1, "page");
      },
      goCharLeft: function goCharLeft(e) {
        return e.moveH(-1, "char");
      },
      goCharRight: function goCharRight(e) {
        return e.moveH(1, "char");
      },
      goColumnLeft: function goColumnLeft(e) {
        return e.moveH(-1, "column");
      },
      goColumnRight: function goColumnRight(e) {
        return e.moveH(1, "column");
      },
      goWordLeft: function goWordLeft(e) {
        return e.moveH(-1, "word");
      },
      goGroupRight: function goGroupRight(e) {
        return e.moveH(1, "group");
      },
      goGroupLeft: function goGroupLeft(e) {
        return e.moveH(-1, "group");
      },
      goWordRight: function goWordRight(e) {
        return e.moveH(1, "word");
      },
      delCharBefore: function delCharBefore(e) {
        return e.deleteH(-1, "char");
      },
      delCharAfter: function delCharAfter(e) {
        return e.deleteH(1, "char");
      },
      delWordBefore: function delWordBefore(e) {
        return e.deleteH(-1, "word");
      },
      delWordAfter: function delWordAfter(e) {
        return e.deleteH(1, "word");
      },
      delGroupBefore: function delGroupBefore(e) {
        return e.deleteH(-1, "group");
      },
      delGroupAfter: function delGroupAfter(e) {
        return e.deleteH(1, "group");
      },
      indentAuto: function indentAuto(e) {
        return e.indentSelection("smart");
      },
      indentMore: function indentMore(e) {
        return e.indentSelection("add");
      },
      indentLess: function indentLess(e) {
        return e.indentSelection("subtract");
      },
      insertTab: function insertTab(e) {
        return e.replaceSelection("\t");
      },
      insertSoftTab: function insertSoftTab(e) {
        for (var t = [], n = e.listSelections(), r = e.options.tabSize, i = 0; i < n.length; i++) {
          var o = n[i].from(),
              a = F(e.getLine(o.line), o.ch, r);
          t.push(X(r - a % r));
        }

        e.replaceSelections(t);
      },
      defaultTab: function defaultTab(e) {
        e.somethingSelected() ? e.indentSelection("add") : e.execCommand("insertTab");
      },
      transposeChars: function transposeChars(e) {
        return Qr(e, function () {
          for (var t = e.listSelections(), n = [], r = 0; r < t.length; r++) {
            if (t[r].empty()) {
              var i = t[r].head,
                  o = se(e.doc, i.line).text;
              if (o) if (i.ch == o.length && (i = new ge(i.line, i.ch - 1)), i.ch > 0) i = new ge(i.line, i.ch + 1), e.replaceRange(o.charAt(i.ch - 1) + o.charAt(i.ch - 2), ge(i.line, i.ch - 2), i, "+transpose");else if (i.line > e.doc.first) {
                var a = se(e.doc, i.line - 1).text;
                a && (i = new ge(i.line, 1), e.replaceRange(o.charAt(0) + e.doc.lineSeparator() + a.charAt(a.length - 1), ge(i.line - 1, a.length - 1), i, "+transpose"));
              }
              n.push(new bi(i, i));
            }
          }

          e.setSelections(n);
        });
      },
      newlineAndIndent: function newlineAndIndent(e) {
        return Qr(e, function () {
          for (var t = e.listSelections(), n = t.length - 1; n >= 0; n--) {
            e.replaceRange(e.doc.lineSeparator(), t[n].anchor, t[n].head, "+input");
          }

          t = e.listSelections();

          for (var r = 0; r < t.length; r++) {
            e.indentLine(t[r].from().line, null, !0);
          }

          Ir(e);
        });
      },
      openLine: function openLine(e) {
        return e.replaceSelection("\n", "start");
      },
      toggleOverwrite: function toggleOverwrite(e) {
        return e.toggleOverwrite();
      }
    };

    function Jo(e, t) {
      var n = se(e.doc, t),
          r = je(n);
      return r != n && (t = he(r)), _o(!0, e, r, t, 1);
    }

    function qo(e, t) {
      var n = Jo(e, t.line),
          r = se(e.doc, n.line),
          i = qe(r, e.doc.direction);

      if (!i || 0 == i[0].level) {
        var o = Math.max(0, r.text.search(/\S/)),
            a = t.line == n.line && t.ch <= o && t.ch;
        return ge(n.line, a ? 0 : o, n.sticky);
      }

      return n;
    }

    function $o(e, t, n) {
      if ("string" == typeof t && !(t = Ko[t])) return !1;
      e.display.input.ensurePolled();
      var r = e.display.shift,
          i = !1;

      try {
        e.isReadOnly() && (e.state.suppressEdits = !0), n && (e.display.shift = !1), i = t(e) != G;
      } finally {
        e.display.shift = r, e.state.suppressEdits = !1;
      }

      return i;
    }

    var ea = new H();

    function ta(e, t, n, r) {
      var i = e.state.keySeq;

      if (i) {
        if (Go(t)) return "handled";
        if (/\'$/.test(t) ? e.state.keySeq = null : ea.set(50, function () {
          e.state.keySeq == i && (e.state.keySeq = null, e.display.input.reset());
        }), na(e, i + " " + t, n, r)) return !0;
      }

      return na(e, t, n, r);
    }

    function na(e, t, n, r) {
      var i = function (e, t, n) {
        for (var r = 0; r < e.state.keyMaps.length; r++) {
          var i = jo(t, e.state.keyMaps[r], n, e);
          if (i) return i;
        }

        return e.options.extraKeys && jo(t, e.options.extraKeys, n, e) || jo(t, e.options.keyMap, n, e);
      }(e, t, r);

      return "multi" == i && (e.state.keySeq = t), "handled" == i && sn(e, "keyHandled", e, t, n), "handled" != i && "multi" != i || (lt(n), fr(e)), !!i;
    }

    function ra(e, t) {
      var n = Uo(t, !0);
      return !!n && (t.shiftKey && !e.state.keySeq ? ta(e, "Shift-" + n, t, function (t) {
        return $o(e, t, !0);
      }) || ta(e, n, t, function (t) {
        if ("string" == typeof t ? /^go[A-Z]/.test(t) : t.motion) return $o(e, t);
      }) : ta(e, n, t, function (t) {
        return $o(e, t);
      }));
    }

    var ia = null;

    function oa(e) {
      var t = this;

      if (t.curOp.focus = E(), !it(t, e)) {
        a && s < 11 && 27 == e.keyCode && (e.returnValue = !1);
        var n = e.keyCode;
        t.display.shift = 16 == n || e.shiftKey;
        var r = ra(t, e);
        h && (ia = r ? n : null, !r && 88 == n && !wt && (b ? e.metaKey : e.ctrlKey) && t.replaceSelection("", null, "cut")), 18 != n || /\bCodeMirror-crosshair\b/.test(t.display.lineDiv.className) || function (e) {
          var t = e.display.lineDiv;

          function n(e) {
            18 != e.keyCode && e.altKey || (M(t, "CodeMirror-crosshair"), nt(document, "keyup", n), nt(document, "mouseover", n));
          }

          D(t, "CodeMirror-crosshair"), et(document, "keyup", n), et(document, "mouseover", n);
        }(t);
      }
    }

    function aa(e) {
      16 == e.keyCode && (this.doc.sel.shift = !1), it(this, e);
    }

    function sa(e) {
      var t = this;

      if (!(wn(t.display, e) || it(t, e) || e.ctrlKey && !e.altKey || b && e.metaKey)) {
        var n = e.keyCode,
            r = e.charCode;
        if (h && n == ia) return ia = null, void lt(e);

        if (!h || e.which && !(e.which < 10) || !ra(t, e)) {
          var i = String.fromCharCode(null == r ? n : r);
          "\b" != i && (function (e, t, n) {
            return ta(e, "'" + n + "'", t, function (t) {
              return $o(e, t, !0);
            });
          }(t, e, i) || t.display.input.onKeyPress(e));
        }
      }
    }

    var la,
        ua,
        ca = function ca(e, t, n) {
      this.time = e, this.pos = t, this.button = n;
    };

    function ha(e) {
      var t = this,
          n = t.display;
      if (!(it(t, e) || n.activeTouch && n.input.supportsTouch())) if (n.input.ensurePolled(), n.shift = e.shiftKey, wn(n, e)) l || (n.scroller.draggable = !1, setTimeout(function () {
        return n.scroller.draggable = !0;
      }, 100));else if (!pa(t, e)) {
        var r = ar(t, e),
            i = ft(e),
            o = r ? function (e, t) {
          var n = +new Date();
          return ua && ua.compare(n, e, t) ? (la = ua = null, "triple") : la && la.compare(n, e, t) ? (ua = new ca(n, e, t), la = null, "double") : (la = new ca(n, e, t), ua = null, "single");
        }(r, i) : "single";
        window.focus(), 1 == i && t.state.selectingText && t.state.selectingText(e), r && function (e, t, n, r, i) {
          var o = "Click";
          return "double" == r ? o = "Double" + o : "triple" == r && (o = "Triple" + o), ta(e, Vo(o = (1 == t ? "Left" : 2 == t ? "Middle" : "Right") + o, i), i, function (t) {
            if ("string" == typeof t && (t = Ko[t]), !t) return !1;
            var r = !1;

            try {
              e.isReadOnly() && (e.state.suppressEdits = !0), r = t(e, n) != G;
            } finally {
              e.state.suppressEdits = !1;
            }

            return r;
          });
        }(t, i, r, o, e) || (1 == i ? r ? function (e, t, n, r) {
          a ? setTimeout(R(pr, e), 0) : e.curOp.focus = E();

          var i,
              o = function (e, t, n) {
            var r = e.getOption("configureMouse"),
                i = r ? r(e, t, n) : {};

            if (null == i.unit) {
              var o = y ? n.shiftKey && n.metaKey : n.altKey;
              i.unit = o ? "rectangle" : "single" == t ? "char" : "double" == t ? "word" : "line";
            }

            return (null == i.extend || e.doc.extend) && (i.extend = e.doc.extend || n.shiftKey), null == i.addNew && (i.addNew = b ? n.metaKey : n.ctrlKey), null == i.moveOnDrag && (i.moveOnDrag = !(b ? n.altKey : n.ctrlKey)), i;
          }(e, n, r),
              u = e.doc.sel;

          e.options.dragDrop && vt && !e.isReadOnly() && "single" == n && (i = u.contains(t)) > -1 && (ve((i = u.ranges[i]).from(), t) < 0 || t.xRel > 0) && (ve(i.to(), t) > 0 || t.xRel < 0) ? function (e, t, n, r) {
            var i = e.display,
                o = !1,
                u = Xr(e, function (t) {
              l && (i.scroller.draggable = !1), e.state.draggingText = !1, nt(i.wrapper.ownerDocument, "mouseup", u), nt(i.wrapper.ownerDocument, "mousemove", c), nt(i.scroller, "dragstart", h), nt(i.scroller, "drop", u), o || (lt(t), r.addNew || Vi(e.doc, n, null, null, r.extend), l || a && 9 == s ? setTimeout(function () {
                i.wrapper.ownerDocument.body.focus(), i.input.focus();
              }, 20) : i.input.focus());
            }),
                c = function c(e) {
              o = o || Math.abs(t.clientX - e.clientX) + Math.abs(t.clientY - e.clientY) >= 10;
            },
                h = function h() {
              return o = !0;
            };

            l && (i.scroller.draggable = !0), e.state.draggingText = u, u.copy = !r.moveOnDrag, i.scroller.dragDrop && i.scroller.dragDrop(), et(i.wrapper.ownerDocument, "mouseup", u), et(i.wrapper.ownerDocument, "mousemove", c), et(i.scroller, "dragstart", h), et(i.scroller, "drop", u), gr(e), setTimeout(function () {
              return i.input.focus();
            }, 20);
          }(e, r, t, o) : function (e, t, n, r) {
            var i = e.display,
                o = e.doc;
            lt(t);
            var a,
                s,
                l = o.sel,
                u = l.ranges;
            if (r.addNew && !r.extend ? (s = o.sel.contains(n), a = s > -1 ? u[s] : new bi(n, n)) : (a = o.sel.primary(), s = o.sel.primIndex), "rectangle" == r.unit) r.addNew || (a = new bi(n, n)), n = ar(e, t, !0, !0), s = -1;else {
              var c = da(e, n, r.unit);
              a = r.extend ? Gi(a, c.anchor, c.head, r.extend) : c;
            }
            r.addNew ? -1 == s ? (s = u.length, Xi(o, yi(e, u.concat([a]), s), {
              scroll: !1,
              origin: "*mouse"
            })) : u.length > 1 && u[s].empty() && "char" == r.unit && !r.extend ? (Xi(o, yi(e, u.slice(0, s).concat(u.slice(s + 1)), 0), {
              scroll: !1,
              origin: "*mouse"
            }), l = o.sel) : Zi(o, s, a, U) : (s = 0, Xi(o, new mi([a], 0), U), l = o.sel);
            var h = n;

            function d(t) {
              if (0 != ve(h, t)) if (h = t, "rectangle" == r.unit) {
                for (var i = [], u = e.options.tabSize, c = F(se(o, n.line).text, n.ch, u), d = F(se(o, t.line).text, t.ch, u), f = Math.min(c, d), p = Math.max(c, d), g = Math.min(n.line, t.line), v = Math.min(e.lastLine(), Math.max(n.line, t.line)); g <= v; g++) {
                  var m = se(o, g).text,
                      b = Y(m, f, u);
                  f == p ? i.push(new bi(ge(g, b), ge(g, b))) : m.length > b && i.push(new bi(ge(g, b), ge(g, Y(m, p, u))));
                }

                i.length || i.push(new bi(n, n)), Xi(o, yi(e, l.ranges.slice(0, s).concat(i), s), {
                  origin: "*mouse",
                  scroll: !1
                }), e.scrollIntoView(t);
              } else {
                var y,
                    A = a,
                    w = da(e, t, r.unit),
                    C = A.anchor;
                ve(w.anchor, C) > 0 ? (y = w.head, C = Ae(A.from(), w.anchor)) : (y = w.anchor, C = ye(A.to(), w.head));
                var x = l.ranges.slice(0);
                x[s] = function (e, t) {
                  var n = t.anchor,
                      r = t.head,
                      i = se(e.doc, n.line);
                  if (0 == ve(n, r) && n.sticky == r.sticky) return t;
                  var o = qe(i);
                  if (!o) return t;
                  var a = Ke(o, n.ch, n.sticky),
                      s = o[a];
                  if (s.from != n.ch && s.to != n.ch) return t;
                  var l,
                      u = a + (s.from == n.ch == (1 != s.level) ? 0 : 1);
                  if (0 == u || u == o.length) return t;
                  if (r.line != n.line) l = (r.line - n.line) * ("ltr" == e.doc.direction ? 1 : -1) > 0;else {
                    var c = Ke(o, r.ch, r.sticky),
                        h = c - a || (r.ch - n.ch) * (1 == s.level ? -1 : 1);
                    l = c == u - 1 || c == u ? h < 0 : h > 0;
                  }
                  var d = o[u + (l ? -1 : 0)],
                      f = l == (1 == d.level),
                      p = f ? d.from : d.to,
                      g = f ? "after" : "before";
                  return n.ch == p && n.sticky == g ? t : new bi(new ge(n.line, p, g), r);
                }(e, new bi(Ce(o, C), y)), Xi(o, yi(e, x, s), U);
              }
            }

            var f = i.wrapper.getBoundingClientRect(),
                p = 0;

            function g(t) {
              e.state.selectingText = !1, p = 1 / 0, lt(t), i.input.focus(), nt(i.wrapper.ownerDocument, "mousemove", v), nt(i.wrapper.ownerDocument, "mouseup", m), o.history.lastSelOrigin = null;
            }

            var v = Xr(e, function (t) {
              0 !== t.buttons && ft(t) ? function t(n) {
                var a = ++p,
                    s = ar(e, n, !0, "rectangle" == r.unit);
                if (s) if (0 != ve(s, h)) {
                  e.curOp.focus = E(), d(s);
                  var l = Ar(i, o);
                  (s.line >= l.to || s.line < l.from) && setTimeout(Xr(e, function () {
                    p == a && t(n);
                  }), 150);
                } else {
                  var u = n.clientY < f.top ? -20 : n.clientY > f.bottom ? 20 : 0;
                  u && setTimeout(Xr(e, function () {
                    p == a && (i.scroller.scrollTop += u, t(n));
                  }), 50);
                }
              }(t) : g(t);
            }),
                m = Xr(e, g);
            e.state.selectingText = m, et(i.wrapper.ownerDocument, "mousemove", v), et(i.wrapper.ownerDocument, "mouseup", m);
          }(e, r, t, o);
        }(t, r, o, e) : dt(e) == n.scroller && lt(e) : 2 == i ? (r && Vi(t.doc, r), setTimeout(function () {
          return n.input.focus();
        }, 20)) : 3 == i && (x ? t.display.input.onContextMenu(e) : gr(t)));
      }
    }

    function da(e, t, n) {
      if ("char" == n) return new bi(t, t);
      if ("word" == n) return e.findWordAt(t);
      if ("line" == n) return new bi(ge(t.line, 0), Ce(e.doc, ge(t.line + 1, 0)));
      var r = n(e, t);
      return new bi(r.from, r.to);
    }

    function fa(e, t, n, r) {
      var i, o;
      if (t.touches) i = t.touches[0].clientX, o = t.touches[0].clientY;else try {
        i = t.clientX, o = t.clientY;
      } catch (t) {
        return !1;
      }
      if (i >= Math.floor(e.display.gutters.getBoundingClientRect().right)) return !1;
      r && lt(t);
      var a = e.display,
          s = a.lineDiv.getBoundingClientRect();
      if (o > s.bottom || !at(e, n)) return ct(t);
      o -= s.top - a.viewOffset;

      for (var l = 0; l < e.options.gutters.length; ++l) {
        var u = a.gutters.childNodes[l];

        if (u && u.getBoundingClientRect().right >= i) {
          var c = de(e.doc, o),
              h = e.options.gutters[l];
          return rt(e, n, e, c, h, t), ct(t);
        }
      }
    }

    function pa(e, t) {
      return fa(e, t, "gutterClick", !0);
    }

    function ga(e, t) {
      wn(e.display, t) || function (e, t) {
        return !!at(e, "gutterContextMenu") && fa(e, t, "gutterContextMenu", !1);
      }(e, t) || it(e, t, "contextmenu") || x || e.display.input.onContextMenu(t);
    }

    function va(e) {
      e.display.wrapper.className = e.display.wrapper.className.replace(/\s*cm-s-\S+/g, "") + e.options.theme.replace(/(^|\s)\s*/g, " cm-s-"), Hn(e);
    }

    ca.prototype.compare = function (e, t, n) {
      return this.time + 400 > e && 0 == ve(t, this.pos) && n == this.button;
    };

    var ma = {
      toString: function toString() {
        return "CodeMirror.Init";
      }
    },
        ba = {},
        ya = {};

    function Aa(e) {
      ci(e), Jr(e), wr(e);
    }

    function wa(e, t, n) {
      var r = n && n != ma;

      if (!t != !r) {
        var i = e.display.dragFunctions,
            o = t ? et : nt;
        o(e.display.scroller, "dragstart", i.start), o(e.display.scroller, "dragenter", i.enter), o(e.display.scroller, "dragover", i.over), o(e.display.scroller, "dragleave", i.leave), o(e.display.scroller, "drop", i.drop);
      }
    }

    function Ca(e) {
      e.options.lineWrapping ? (D(e.display.wrapper, "CodeMirror-wrap"), e.display.sizer.style.minWidth = "", e.display.sizerWidth = null) : (M(e.display.wrapper, "CodeMirror-wrap"), Xe(e)), or(e), Jr(e), Hn(e), setTimeout(function () {
        return Wr(e);
      }, 100);
    }

    function xa(e, t) {
      var r = this;
      if (!(this instanceof xa)) return new xa(e, t);
      this.options = t = t ? z(t) : {}, z(ba, t, !1), hi(t);
      var i = t.value;
      "string" == typeof i ? i = new Mo(i, t.mode, null, t.lineSeparator, t.direction) : t.mode && (i.modeOption = t.mode), this.doc = i;
      var o = new xa.inputStyles[t.inputStyle](this),
          u = this.display = new function (e, t, r) {
        var i = this;
        this.input = r, i.scrollbarFiller = T("div", null, "CodeMirror-scrollbar-filler"), i.scrollbarFiller.setAttribute("cm-not-content", "true"), i.gutterFiller = T("div", null, "CodeMirror-gutter-filler"), i.gutterFiller.setAttribute("cm-not-content", "true"), i.lineDiv = O("div", null, "CodeMirror-code"), i.selectionDiv = T("div", null, null, "position: relative; z-index: 1"), i.cursorDiv = T("div", null, "CodeMirror-cursors"), i.measure = T("div", null, "CodeMirror-measure"), i.lineMeasure = T("div", null, "CodeMirror-measure"), i.lineSpace = O("div", [i.measure, i.lineMeasure, i.selectionDiv, i.cursorDiv, i.lineDiv], null, "position: relative; outline: none");
        var o = O("div", [i.lineSpace], "CodeMirror-lines");
        i.mover = T("div", [o], null, "position: relative"), i.sizer = T("div", [i.mover], "CodeMirror-sizer"), i.sizerWidth = null, i.heightForcer = T("div", null, null, "position: absolute; height: " + j + "px; width: 1px;"), i.gutters = T("div", null, "CodeMirror-gutters"), i.lineGutter = null, i.scroller = T("div", [i.sizer, i.heightForcer, i.gutters], "CodeMirror-scroll"), i.scroller.setAttribute("tabIndex", "-1"), i.wrapper = T("div", [i.scrollbarFiller, i.gutterFiller, i.scroller], "CodeMirror"), a && s < 8 && (i.gutters.style.zIndex = -1, i.scroller.style.paddingRight = 0), l || n && m || (i.scroller.draggable = !0), e && (e.appendChild ? e.appendChild(i.wrapper) : e(i.wrapper)), i.viewFrom = i.viewTo = t.first, i.reportedViewFrom = i.reportedViewTo = t.first, i.view = [], i.renderedView = null, i.externalMeasured = null, i.viewOffset = 0, i.lastWrapHeight = i.lastWrapWidth = 0, i.updateLineNumbers = null, i.nativeBarWidth = i.barHeight = i.barWidth = 0, i.scrollbarsClipped = !1, i.lineNumWidth = i.lineNumInnerWidth = i.lineNumChars = null, i.alignWidgets = !1, i.cachedCharWidth = i.cachedTextHeight = i.cachedPaddingH = null, i.maxLine = null, i.maxLineLength = 0, i.maxLineChanged = !1, i.wheelDX = i.wheelDY = i.wheelStartX = i.wheelStartY = null, i.shift = !1, i.selForContextMenu = null, i.activeTouch = null, r.init(i);
      }(e, i, o);

      for (var c in u.wrapper.CodeMirror = this, ci(this), va(this), t.lineWrapping && (this.display.wrapper.className += " CodeMirror-wrap"), Fr(this), this.state = {
        keyMaps: [],
        overlays: [],
        modeGen: 0,
        overwrite: !1,
        delayingBlurEvent: !1,
        focused: !1,
        suppressEdits: !1,
        pasteIncoming: !1,
        cutIncoming: !1,
        selectingText: !1,
        draggingText: !1,
        highlight: new H(),
        keySeq: null,
        specialChars: null
      }, t.autofocus && !m && u.input.focus(), a && s < 11 && setTimeout(function () {
        return r.display.input.reset(!0);
      }, 20), function (e) {
        var t = e.display;
        et(t.scroller, "mousedown", Xr(e, ha)), et(t.scroller, "dblclick", a && s < 11 ? Xr(e, function (t) {
          if (!it(e, t)) {
            var n = ar(e, t);

            if (n && !pa(e, t) && !wn(e.display, t)) {
              lt(t);
              var r = e.findWordAt(n);
              Vi(e.doc, r.anchor, r.head);
            }
          }
        }) : function (t) {
          return it(e, t) || lt(t);
        }), et(t.scroller, "contextmenu", function (t) {
          return ga(e, t);
        });
        var n,
            r = {
          end: 0
        };

        function i() {
          t.activeTouch && (n = setTimeout(function () {
            return t.activeTouch = null;
          }, 1e3), (r = t.activeTouch).end = +new Date());
        }

        function o(e, t) {
          if (null == t.left) return !0;
          var n = t.left - e.left,
              r = t.top - e.top;
          return n * n + r * r > 400;
        }

        et(t.scroller, "touchstart", function (i) {
          if (!it(e, i) && !function (e) {
            if (1 != e.touches.length) return !1;
            var t = e.touches[0];
            return t.radiusX <= 1 && t.radiusY <= 1;
          }(i) && !pa(e, i)) {
            t.input.ensurePolled(), clearTimeout(n);
            var o = +new Date();
            t.activeTouch = {
              start: o,
              moved: !1,
              prev: o - r.end <= 300 ? r : null
            }, 1 == i.touches.length && (t.activeTouch.left = i.touches[0].pageX, t.activeTouch.top = i.touches[0].pageY);
          }
        }), et(t.scroller, "touchmove", function () {
          t.activeTouch && (t.activeTouch.moved = !0);
        }), et(t.scroller, "touchend", function (n) {
          var r = t.activeTouch;

          if (r && !wn(t, n) && null != r.left && !r.moved && new Date() - r.start < 300) {
            var a,
                s = e.coordsChar(t.activeTouch, "page");
            a = !r.prev || o(r, r.prev) ? new bi(s, s) : !r.prev.prev || o(r, r.prev.prev) ? e.findWordAt(s) : new bi(ge(s.line, 0), Ce(e.doc, ge(s.line + 1, 0))), e.setSelection(a.anchor, a.head), e.focus(), lt(n);
          }

          i();
        }), et(t.scroller, "touchcancel", i), et(t.scroller, "scroll", function () {
          t.scroller.clientHeight && (Tr(e, t.scroller.scrollTop), Nr(e, t.scroller.scrollLeft, !0), rt(e, "scroll", e));
        }), et(t.scroller, "mousewheel", function (t) {
          return vi(e, t);
        }), et(t.scroller, "DOMMouseScroll", function (t) {
          return vi(e, t);
        }), et(t.wrapper, "scroll", function () {
          return t.wrapper.scrollTop = t.wrapper.scrollLeft = 0;
        }), t.dragFunctions = {
          enter: function enter(t) {
            it(e, t) || ht(t);
          },
          over: function over(t) {
            it(e, t) || (function (e, t) {
              var n = ar(e, t);

              if (n) {
                var r = document.createDocumentFragment();
                cr(e, n, r), e.display.dragCursor || (e.display.dragCursor = T("div", null, "CodeMirror-cursors CodeMirror-dragcursors"), e.display.lineSpace.insertBefore(e.display.dragCursor, e.display.cursorDiv)), L(e.display.dragCursor, r);
              }
            }(e, t), ht(t));
          },
          start: function start(t) {
            return function (e, t) {
              if (a && (!e.state.draggingText || +new Date() - So < 100)) ht(t);else if (!it(e, t) && !wn(e.display, t) && (t.dataTransfer.setData("Text", e.getSelection()), t.dataTransfer.effectAllowed = "copyMove", t.dataTransfer.setDragImage && !d)) {
                var n = T("img", null, null, "position: fixed; left: 0; top: 0;");
                n.src = "data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==", h && (n.width = n.height = 1, e.display.wrapper.appendChild(n), n._top = n.offsetTop), t.dataTransfer.setDragImage(n, 0, 0), h && n.parentNode.removeChild(n);
              }
            }(e, t);
          },
          drop: Xr(e, Lo),
          leave: function leave(t) {
            it(e, t) || To(e);
          }
        };
        var l = t.input.getField();
        et(l, "keyup", function (t) {
          return aa.call(e, t);
        }), et(l, "keydown", Xr(e, oa)), et(l, "keypress", Xr(e, sa)), et(l, "focus", function (t) {
          return vr(e, t);
        }), et(l, "blur", function (t) {
          return mr(e, t);
        });
      }(this), Eo(), Br(this), this.curOp.forceUpdate = !0, Oi(this, i), t.autofocus && !m || this.hasFocus() ? setTimeout(R(vr, this), 20) : mr(this), ya) {
        ya.hasOwnProperty(c) && ya[c](r, t[c], ma);
      }

      Cr(this), t.finishInit && t.finishInit(this);

      for (var f = 0; f < ka.length; ++f) {
        ka[f](r);
      }

      jr(this), l && t.lineWrapping && "optimizelegibility" == getComputedStyle(u.lineDiv).textRendering && (u.lineDiv.style.textRendering = "auto");
    }

    xa.defaults = ba, xa.optionHandlers = ya;
    var ka = [];

    function Ia(e, t, n, r) {
      var i,
          o = e.doc;
      null == n && (n = "add"), "smart" == n && (o.mode.indent ? i = zt(e, t).state : n = "prev");
      var a = e.options.tabSize,
          s = se(o, t),
          l = F(s.text, null, a);
      s.stateAfter && (s.stateAfter = null);
      var u,
          c = s.text.match(/^\s*/)[0];

      if (r || /\S/.test(s.text)) {
        if ("smart" == n && ((u = o.mode.indent(i, s.text.slice(c.length), s.text)) == G || u > 150)) {
          if (!r) return;
          n = "prev";
        }
      } else u = 0, n = "not";

      "prev" == n ? u = t > o.first ? F(se(o, t - 1).text, null, a) : 0 : "add" == n ? u = l + e.options.indentUnit : "subtract" == n ? u = l - e.options.indentUnit : "number" == typeof n && (u = l + n), u = Math.max(0, u);
      var h = "",
          d = 0;
      if (e.options.indentWithTabs) for (var f = Math.floor(u / a); f; --f) {
        d += a, h += "\t";
      }
      if (d < u && (h += X(u - d)), h != c) return uo(o, h, ge(t, 0), ge(t, c.length), "+input"), s.stateAfter = null, !0;

      for (var p = 0; p < o.sel.ranges.length; p++) {
        var g = o.sel.ranges[p];

        if (g.head.line == t && g.head.ch < c.length) {
          var v = ge(t, c.length);
          Zi(o, p, new bi(v, v));
          break;
        }
      }
    }

    xa.defineInitHook = function (e) {
      return ka.push(e);
    };

    var Ma = null;

    function Sa(e) {
      Ma = e;
    }

    function La(e, t, n, r, i) {
      var o = e.doc;
      e.display.shift = !1, r || (r = o.sel);
      var a,
          s = e.state.pasteIncoming || "paste" == i,
          l = yt(t),
          u = null;
      if (s && r.ranges.length > 1) if (Ma && Ma.text.join("\n") == t) {
        if (r.ranges.length % Ma.text.length == 0) {
          u = [];

          for (var c = 0; c < Ma.text.length; c++) {
            u.push(o.splitLines(Ma.text[c]));
          }
        }
      } else l.length == r.ranges.length && e.options.pasteLinesPerSelection && (u = K(l, function (e) {
        return [e];
      }));

      for (var h = r.ranges.length - 1; h >= 0; h--) {
        var d = r.ranges[h],
            f = d.from(),
            p = d.to();
        d.empty() && (n && n > 0 ? f = ge(f.line, f.ch - n) : e.state.overwrite && !s ? p = ge(p.line, Math.min(se(o, p.line).text.length, p.ch + _(l).length)) : s && Ma && Ma.lineWise && Ma.text.join("\n") == t && (f = p = ge(f.line, 0))), a = e.curOp.updateInput;
        var g = {
          from: f,
          to: p,
          text: u ? u[h % u.length] : l,
          origin: i || (s ? "paste" : e.state.cutIncoming ? "cut" : "+input")
        };
        io(e.doc, g), sn(e, "inputRead", e, g);
      }

      t && !s && Oa(e, t), Ir(e), e.curOp.updateInput = a, e.curOp.typing = !0, e.state.pasteIncoming = e.state.cutIncoming = !1;
    }

    function Ta(e, t) {
      var n = e.clipboardData && e.clipboardData.getData("Text");
      if (n) return e.preventDefault(), t.isReadOnly() || t.options.disableInput || Qr(t, function () {
        return La(t, n, 0, null, "paste");
      }), !0;
    }

    function Oa(e, t) {
      if (e.options.electricChars && e.options.smartIndent) for (var n = e.doc.sel, r = n.ranges.length - 1; r >= 0; r--) {
        var i = n.ranges[r];

        if (!(i.head.ch > 100 || r && n.ranges[r - 1].head.line == i.head.line)) {
          var o = e.getModeAt(i.head),
              a = !1;

          if (o.electricChars) {
            for (var s = 0; s < o.electricChars.length; s++) {
              if (t.indexOf(o.electricChars.charAt(s)) > -1) {
                a = Ia(e, i.head.line, "smart");
                break;
              }
            }
          } else o.electricInput && o.electricInput.test(se(e.doc, i.head.line).text.slice(0, i.head.ch)) && (a = Ia(e, i.head.line, "smart"));

          a && sn(e, "electricInput", e, i.head.line);
        }
      }
    }

    function Na(e) {
      for (var t = [], n = [], r = 0; r < e.doc.sel.ranges.length; r++) {
        var i = e.doc.sel.ranges[r].head.line,
            o = {
          anchor: ge(i, 0),
          head: ge(i + 1, 0)
        };
        n.push(o), t.push(e.getRange(o.anchor, o.head));
      }

      return {
        text: t,
        ranges: n
      };
    }

    function Ea(e, t) {
      e.setAttribute("autocorrect", "off"), e.setAttribute("autocapitalize", "off"), e.setAttribute("spellcheck", !!t);
    }

    function Da() {
      var e = T("textarea", null, null, "position: absolute; bottom: -1em; padding: 0; width: 1px; height: 1em; outline: none"),
          t = T("div", [e], null, "overflow: hidden; position: relative; width: 3px; height: 0px;");
      return l ? e.style.width = "1000px" : e.setAttribute("wrap", "off"), g && (e.style.border = "1px solid black"), Ea(e), t;
    }

    function Pa(e, t, n, r, i) {
      var o = t,
          a = n,
          s = se(e, t.line);

      function l(r) {
        var o;

        if (null == (o = i ? function (e, t, n, r) {
          var i = qe(t, e.doc.direction);
          if (!i) return Xo(t, n, r);
          n.ch >= t.text.length ? (n.ch = t.text.length, n.sticky = "before") : n.ch <= 0 && (n.ch = 0, n.sticky = "after");
          var o = Ke(i, n.ch, n.sticky),
              a = i[o];
          if ("ltr" == e.doc.direction && a.level % 2 == 0 && (r > 0 ? a.to > n.ch : a.from < n.ch)) return Xo(t, n, r);

          var s,
              l = function l(e, n) {
            return Qo(t, e instanceof ge ? e.ch : e, n);
          },
              u = function u(n) {
            return e.options.lineWrapping ? (s = s || Nn(e, t), Jn(e, t, s, n)) : {
              begin: 0,
              end: t.text.length
            };
          },
              c = u("before" == n.sticky ? l(n, -1) : n.ch);

          if ("rtl" == e.doc.direction || 1 == a.level) {
            var h = 1 == a.level == r < 0,
                d = l(n, h ? 1 : -1);

            if (null != d && (h ? d <= a.to && d <= c.end : d >= a.from && d >= c.begin)) {
              var f = h ? "before" : "after";
              return new ge(n.line, d, f);
            }
          }

          var p = function p(e, t, r) {
            for (var o = function o(e, t) {
              return t ? new ge(n.line, l(e, 1), "before") : new ge(n.line, e, "after");
            }; e >= 0 && e < i.length; e += t) {
              var a = i[e],
                  s = t > 0 == (1 != a.level),
                  u = s ? r.begin : l(r.end, -1);
              if (a.from <= u && u < a.to) return o(u, s);
              if (u = s ? a.from : l(a.to, -1), r.begin <= u && u < r.end) return o(u, s);
            }
          },
              g = p(o + r, r, c);

          if (g) return g;
          var v = r > 0 ? c.end : l(c.begin, -1);
          return null == v || r > 0 && v == t.text.length || !(g = p(r > 0 ? 0 : i.length - 1, r, u(v))) ? null : g;
        }(e.cm, s, t, n) : Xo(s, t, n))) {
          if (r || !function () {
            var r = t.line + n;
            return !(r < e.first || r >= e.first + e.size) && (t = new ge(r, t.ch, t.sticky), s = se(e, r));
          }()) return !1;
          t = _o(i, e.cm, s, t.line, n);
        } else t = o;

        return !0;
      }

      if ("char" == r) l();else if ("column" == r) l(!0);else if ("word" == r || "group" == r) for (var u = null, c = "group" == r, h = e.cm && e.cm.getHelper(t, "wordChars"), d = !0; !(n < 0) || l(!d); d = !1) {
        var f = s.text.charAt(t.ch) || "\n",
            p = te(f, h) ? "w" : c && "\n" == f ? "n" : !c || /\s/.test(f) ? null : "p";

        if (!c || d || p || (p = "s"), u && u != p) {
          n < 0 && (n = 1, l(), t.sticky = "after");
          break;
        }

        if (p && (u = p), n > 0 && !l(!d)) break;
      }
      var g = eo(e, t, o, a, !0);
      return me(o, g) && (g.hitSide = !0), g;
    }

    function Wa(e, t, n, r) {
      var i,
          o,
          a = e.doc,
          s = t.left;

      if ("page" == r) {
        var l = Math.min(e.display.wrapper.clientHeight, window.innerHeight || document.documentElement.clientHeight),
            u = Math.max(l - .5 * er(e.display), 3);
        i = (n > 0 ? t.bottom : t.top) + n * u;
      } else "line" == r && (i = n > 0 ? t.bottom + 3 : t.top - 3);

      for (; (o = _n(e, s, i)).outside;) {
        if (n < 0 ? i <= 0 : i >= a.height) {
          o.hitSide = !0;
          break;
        }

        i += 5 * n;
      }

      return o;
    }

    var Ra = function Ra(e) {
      this.cm = e, this.lastAnchorNode = this.lastAnchorOffset = this.lastFocusNode = this.lastFocusOffset = null, this.polling = new H(), this.composing = null, this.gracePeriod = !1, this.readDOMTimeout = null;
    };

    function za(e, t) {
      var n = On(e, t.line);
      if (!n || n.hidden) return null;
      var r = se(e.doc, t.line),
          i = Ln(n, r, t.line),
          o = qe(r, e.doc.direction),
          a = "left";

      if (o) {
        var s = Ke(o, t.ch);
        a = s % 2 ? "right" : "left";
      }

      var l = Wn(i.map, t.ch, a);
      return l.offset = "right" == l.collapse ? l.end : l.start, l;
    }

    function Fa(e, t) {
      return t && (e.bad = !0), e;
    }

    function Ha(e, t, n) {
      var r;

      if (t == e.display.lineDiv) {
        if (!(r = e.display.lineDiv.childNodes[n])) return Fa(e.clipPos(ge(e.display.viewTo - 1)), !0);
        t = null, n = 0;
      } else for (r = t;; r = r.parentNode) {
        if (!r || r == e.display.lineDiv) return null;
        if (r.parentNode && r.parentNode == e.display.lineDiv) break;
      }

      for (var i = 0; i < e.display.view.length; i++) {
        var o = e.display.view[i];
        if (o.node == r) return Ba(o, t, n);
      }
    }

    function Ba(e, t, n) {
      var r = e.text.firstChild,
          i = !1;
      if (!t || !N(r, t)) return Fa(ge(he(e.line), 0), !0);

      if (t == r && (i = !0, t = r.childNodes[n], n = 0, !t)) {
        var o = e.rest ? _(e.rest) : e.line;
        return Fa(ge(he(o), o.text.length), i);
      }

      var a = 3 == t.nodeType ? t : null,
          s = t;

      for (a || 1 != t.childNodes.length || 3 != t.firstChild.nodeType || (a = t.firstChild, n && (n = a.nodeValue.length)); s.parentNode != r;) {
        s = s.parentNode;
      }

      var l = e.measure,
          u = l.maps;

      function c(t, n, r) {
        for (var i = -1; i < (u ? u.length : 0); i++) {
          for (var o = i < 0 ? l.map : u[i], a = 0; a < o.length; a += 3) {
            var s = o[a + 2];

            if (s == t || s == n) {
              var c = he(i < 0 ? e.line : e.rest[i]),
                  h = o[a] + r;
              return (r < 0 || s != t) && (h = o[a + (r ? 1 : 0)]), ge(c, h);
            }
          }
        }
      }

      var h = c(a, s, n);
      if (h) return Fa(h, i);

      for (var d = s.nextSibling, f = a ? a.nodeValue.length - n : 0; d; d = d.nextSibling) {
        if (h = c(d, d.firstChild, 0)) return Fa(ge(h.line, h.ch - f), i);
        f += d.textContent.length;
      }

      for (var p = s.previousSibling, g = n; p; p = p.previousSibling) {
        if (h = c(p, p.firstChild, -1)) return Fa(ge(h.line, h.ch + g), i);
        g += p.textContent.length;
      }
    }

    Ra.prototype.init = function (e) {
      var t = this,
          n = this,
          r = n.cm,
          i = n.div = e.lineDiv;

      function o(e) {
        if (!it(r, e)) {
          if (r.somethingSelected()) Sa({
            lineWise: !1,
            text: r.getSelections()
          }), "cut" == e.type && r.replaceSelection("", null, "cut");else {
            if (!r.options.lineWiseCopyCut) return;
            var t = Na(r);
            Sa({
              lineWise: !0,
              text: t.text
            }), "cut" == e.type && r.operation(function () {
              r.setSelections(t.ranges, 0, V), r.replaceSelection("", null, "cut");
            });
          }

          if (e.clipboardData) {
            e.clipboardData.clearData();
            var o = Ma.text.join("\n");
            if (e.clipboardData.setData("Text", o), e.clipboardData.getData("Text") == o) return void e.preventDefault();
          }

          var a = Da(),
              s = a.firstChild;
          r.display.lineSpace.insertBefore(a, r.display.lineSpace.firstChild), s.value = Ma.text.join("\n");
          var l = document.activeElement;
          W(s), setTimeout(function () {
            r.display.lineSpace.removeChild(a), l.focus(), l == i && n.showPrimarySelection();
          }, 50);
        }
      }

      Ea(i, r.options.spellcheck), et(i, "paste", function (e) {
        it(r, e) || Ta(e, r) || s <= 11 && setTimeout(Xr(r, function () {
          return t.updateFromDOM();
        }), 20);
      }), et(i, "compositionstart", function (e) {
        t.composing = {
          data: e.data,
          done: !1
        };
      }), et(i, "compositionupdate", function (e) {
        t.composing || (t.composing = {
          data: e.data,
          done: !1
        });
      }), et(i, "compositionend", function (e) {
        t.composing && (e.data != t.composing.data && t.readFromDOMSoon(), t.composing.done = !0);
      }), et(i, "touchstart", function () {
        return n.forceCompositionEnd();
      }), et(i, "input", function () {
        t.composing || t.readFromDOMSoon();
      }), et(i, "copy", o), et(i, "cut", o);
    }, Ra.prototype.prepareSelection = function () {
      var e = ur(this.cm, !1);
      return e.focus = this.cm.state.focused, e;
    }, Ra.prototype.showSelection = function (e, t) {
      e && this.cm.display.view.length && ((e.focus || t) && this.showPrimarySelection(), this.showMultipleSelections(e));
    }, Ra.prototype.getSelection = function () {
      return this.cm.display.wrapper.ownerDocument.getSelection();
    }, Ra.prototype.showPrimarySelection = function () {
      var e = this.getSelection(),
          t = this.cm,
          r = t.doc.sel.primary(),
          i = r.from(),
          o = r.to();
      if (t.display.viewTo == t.display.viewFrom || i.line >= t.display.viewTo || o.line < t.display.viewFrom) e.removeAllRanges();else {
        var a = Ha(t, e.anchorNode, e.anchorOffset),
            s = Ha(t, e.focusNode, e.focusOffset);

        if (!a || a.bad || !s || s.bad || 0 != ve(Ae(a, s), i) || 0 != ve(ye(a, s), o)) {
          var l = t.display.view,
              u = i.line >= t.display.viewFrom && za(t, i) || {
            node: l[0].measure.map[2],
            offset: 0
          },
              c = o.line < t.display.viewTo && za(t, o);

          if (!c) {
            var h = l[l.length - 1].measure,
                d = h.maps ? h.maps[h.maps.length - 1] : h.map;
            c = {
              node: d[d.length - 1],
              offset: d[d.length - 2] - d[d.length - 3]
            };
          }

          if (u && c) {
            var f,
                p = e.rangeCount && e.getRangeAt(0);

            try {
              f = I(u.node, u.offset, c.offset, c.node);
            } catch (e) {}

            f && (!n && t.state.focused ? (e.collapse(u.node, u.offset), f.collapsed || (e.removeAllRanges(), e.addRange(f))) : (e.removeAllRanges(), e.addRange(f)), p && null == e.anchorNode ? e.addRange(p) : n && this.startGracePeriod()), this.rememberSelection();
          } else e.removeAllRanges();
        }
      }
    }, Ra.prototype.startGracePeriod = function () {
      var e = this;
      clearTimeout(this.gracePeriod), this.gracePeriod = setTimeout(function () {
        e.gracePeriod = !1, e.selectionChanged() && e.cm.operation(function () {
          return e.cm.curOp.selectionChanged = !0;
        });
      }, 20);
    }, Ra.prototype.showMultipleSelections = function (e) {
      L(this.cm.display.cursorDiv, e.cursors), L(this.cm.display.selectionDiv, e.selection);
    }, Ra.prototype.rememberSelection = function () {
      var e = this.getSelection();
      this.lastAnchorNode = e.anchorNode, this.lastAnchorOffset = e.anchorOffset, this.lastFocusNode = e.focusNode, this.lastFocusOffset = e.focusOffset;
    }, Ra.prototype.selectionInEditor = function () {
      var e = this.getSelection();
      if (!e.rangeCount) return !1;
      var t = e.getRangeAt(0).commonAncestorContainer;
      return N(this.div, t);
    }, Ra.prototype.focus = function () {
      "nocursor" != this.cm.options.readOnly && (this.selectionInEditor() || this.showSelection(this.prepareSelection(), !0), this.div.focus());
    }, Ra.prototype.blur = function () {
      this.div.blur();
    }, Ra.prototype.getField = function () {
      return this.div;
    }, Ra.prototype.supportsTouch = function () {
      return !0;
    }, Ra.prototype.receivedFocus = function () {
      var e = this;
      this.selectionInEditor() ? this.pollSelection() : Qr(this.cm, function () {
        return e.cm.curOp.selectionChanged = !0;
      }), this.polling.set(this.cm.options.pollInterval, function t() {
        e.cm.state.focused && (e.pollSelection(), e.polling.set(e.cm.options.pollInterval, t));
      });
    }, Ra.prototype.selectionChanged = function () {
      var e = this.getSelection();
      return e.anchorNode != this.lastAnchorNode || e.anchorOffset != this.lastAnchorOffset || e.focusNode != this.lastFocusNode || e.focusOffset != this.lastFocusOffset;
    }, Ra.prototype.pollSelection = function () {
      if (null == this.readDOMTimeout && !this.gracePeriod && this.selectionChanged()) {
        var e = this.getSelection(),
            t = this.cm;
        if (v && c && this.cm.options.gutters.length && function (e) {
          for (var t = e; t; t = t.parentNode) {
            if (/CodeMirror-gutter-wrapper/.test(t.className)) return !0;
          }

          return !1;
        }(e.anchorNode)) return this.cm.triggerOnKeyDown({
          type: "keydown",
          keyCode: 8,
          preventDefault: Math.abs
        }), this.blur(), void this.focus();

        if (!this.composing) {
          this.rememberSelection();
          var n = Ha(t, e.anchorNode, e.anchorOffset),
              r = Ha(t, e.focusNode, e.focusOffset);
          n && r && Qr(t, function () {
            Xi(t.doc, Ai(n, r), V), (n.bad || r.bad) && (t.curOp.selectionChanged = !0);
          });
        }
      }
    }, Ra.prototype.pollContent = function () {
      null != this.readDOMTimeout && (clearTimeout(this.readDOMTimeout), this.readDOMTimeout = null);
      var e,
          t,
          n,
          r = this.cm,
          i = r.display,
          o = r.doc.sel.primary(),
          a = o.from(),
          s = o.to();
      if (0 == a.ch && a.line > r.firstLine() && (a = ge(a.line - 1, se(r.doc, a.line - 1).length)), s.ch == se(r.doc, s.line).text.length && s.line < r.lastLine() && (s = ge(s.line + 1, 0)), a.line < i.viewFrom || s.line > i.viewTo - 1) return !1;
      a.line == i.viewFrom || 0 == (e = sr(r, a.line)) ? (t = he(i.view[0].line), n = i.view[0].node) : (t = he(i.view[e].line), n = i.view[e - 1].node.nextSibling);
      var l,
          u,
          c = sr(r, s.line);
      if (c == i.view.length - 1 ? (l = i.viewTo - 1, u = i.lineDiv.lastChild) : (l = he(i.view[c + 1].line) - 1, u = i.view[c + 1].node.previousSibling), !n) return !1;

      for (var h = r.doc.splitLines(function (e, t, n, r, i) {
        var o = "",
            a = !1,
            s = e.doc.lineSeparator(),
            l = !1;

        function u() {
          a && (o += s, l && (o += s), a = l = !1);
        }

        function c(e) {
          e && (u(), o += e);
        }

        function h(t) {
          if (1 == t.nodeType) {
            var n = t.getAttribute("cm-text");
            if (n) return void c(n);
            var o,
                d = t.getAttribute("cm-marker");

            if (d) {
              var f = e.findMarks(ge(r, 0), ge(i + 1, 0), function (e) {
                return function (t) {
                  return t.id == e;
                };
              }(+d));
              return void (f.length && (o = f[0].find(0)) && c(le(e.doc, o.from, o.to).join(s)));
            }

            if ("false" == t.getAttribute("contenteditable")) return;
            var p = /^(pre|div|p|li|table|br)$/i.test(t.nodeName);
            if (!/^br$/i.test(t.nodeName) && 0 == t.textContent.length) return;
            p && u();

            for (var g = 0; g < t.childNodes.length; g++) {
              h(t.childNodes[g]);
            }

            /^(pre|p)$/i.test(t.nodeName) && (l = !0), p && (a = !0);
          } else 3 == t.nodeType && c(t.nodeValue.replace(/\u200b/g, "").replace(/\u00a0/g, " "));
        }

        for (; h(t), t != n;) {
          t = t.nextSibling, l = !1;
        }

        return o;
      }(r, n, u, t, l)), d = le(r.doc, ge(t, 0), ge(l, se(r.doc, l).text.length)); h.length > 1 && d.length > 1;) {
        if (_(h) == _(d)) h.pop(), d.pop(), l--;else {
          if (h[0] != d[0]) break;
          h.shift(), d.shift(), t++;
        }
      }

      for (var f = 0, p = 0, g = h[0], v = d[0], m = Math.min(g.length, v.length); f < m && g.charCodeAt(f) == v.charCodeAt(f);) {
        ++f;
      }

      for (var b = _(h), y = _(d), A = Math.min(b.length - (1 == h.length ? f : 0), y.length - (1 == d.length ? f : 0)); p < A && b.charCodeAt(b.length - p - 1) == y.charCodeAt(y.length - p - 1);) {
        ++p;
      }

      if (1 == h.length && 1 == d.length && t == a.line) for (; f && f > a.ch && b.charCodeAt(b.length - p - 1) == y.charCodeAt(y.length - p - 1);) {
        f--, p++;
      }
      h[h.length - 1] = b.slice(0, b.length - p).replace(/^\u200b+/, ""), h[0] = h[0].slice(f).replace(/\u200b+$/, "");
      var w = ge(t, f),
          C = ge(l, d.length ? _(d).length - p : 0);
      return h.length > 1 || h[0] || ve(w, C) ? (uo(r.doc, h, w, C, "+input"), !0) : void 0;
    }, Ra.prototype.ensurePolled = function () {
      this.forceCompositionEnd();
    }, Ra.prototype.reset = function () {
      this.forceCompositionEnd();
    }, Ra.prototype.forceCompositionEnd = function () {
      this.composing && (clearTimeout(this.readDOMTimeout), this.composing = null, this.updateFromDOM(), this.div.blur(), this.div.focus());
    }, Ra.prototype.readFromDOMSoon = function () {
      var e = this;
      null == this.readDOMTimeout && (this.readDOMTimeout = setTimeout(function () {
        if (e.readDOMTimeout = null, e.composing) {
          if (!e.composing.done) return;
          e.composing = null;
        }

        e.updateFromDOM();
      }, 80));
    }, Ra.prototype.updateFromDOM = function () {
      var e = this;
      !this.cm.isReadOnly() && this.pollContent() || Qr(this.cm, function () {
        return Jr(e.cm);
      });
    }, Ra.prototype.setUneditable = function (e) {
      e.contentEditable = "false";
    }, Ra.prototype.onKeyPress = function (e) {
      0 == e.charCode || this.composing || (e.preventDefault(), this.cm.isReadOnly() || Xr(this.cm, La)(this.cm, String.fromCharCode(null == e.charCode ? e.keyCode : e.charCode), 0));
    }, Ra.prototype.readOnlyChanged = function (e) {
      this.div.contentEditable = String("nocursor" != e);
    }, Ra.prototype.onContextMenu = function () {}, Ra.prototype.resetPosition = function () {}, Ra.prototype.needsContentAttribute = !0;

    var ja = function ja(e) {
      this.cm = e, this.prevInput = "", this.pollingFast = !1, this.polling = new H(), this.hasSelection = !1, this.composing = null;
    };

    ja.prototype.init = function (e) {
      var t = this,
          n = this,
          r = this.cm;
      this.createField(e);
      var i = this.textarea;

      function o(e) {
        if (!it(r, e)) {
          if (r.somethingSelected()) Sa({
            lineWise: !1,
            text: r.getSelections()
          });else {
            if (!r.options.lineWiseCopyCut) return;
            var t = Na(r);
            Sa({
              lineWise: !0,
              text: t.text
            }), "cut" == e.type ? r.setSelections(t.ranges, null, V) : (n.prevInput = "", i.value = t.text.join("\n"), W(i));
          }
          "cut" == e.type && (r.state.cutIncoming = !0);
        }
      }

      e.wrapper.insertBefore(this.wrapper, e.wrapper.firstChild), g && (i.style.width = "0px"), et(i, "input", function () {
        a && s >= 9 && t.hasSelection && (t.hasSelection = null), n.poll();
      }), et(i, "paste", function (e) {
        it(r, e) || Ta(e, r) || (r.state.pasteIncoming = !0, n.fastPoll());
      }), et(i, "cut", o), et(i, "copy", o), et(e.scroller, "paste", function (t) {
        wn(e, t) || it(r, t) || (r.state.pasteIncoming = !0, n.focus());
      }), et(e.lineSpace, "selectstart", function (t) {
        wn(e, t) || lt(t);
      }), et(i, "compositionstart", function () {
        var e = r.getCursor("from");
        n.composing && n.composing.range.clear(), n.composing = {
          start: e,
          range: r.markText(e, r.getCursor("to"), {
            className: "CodeMirror-composing"
          })
        };
      }), et(i, "compositionend", function () {
        n.composing && (n.poll(), n.composing.range.clear(), n.composing = null);
      });
    }, ja.prototype.createField = function (e) {
      this.wrapper = Da(), this.textarea = this.wrapper.firstChild;
    }, ja.prototype.prepareSelection = function () {
      var e = this.cm,
          t = e.display,
          n = e.doc,
          r = ur(e);

      if (e.options.moveInputWithCursor) {
        var i = Yn(e, n.sel.primary().head, "div"),
            o = t.wrapper.getBoundingClientRect(),
            a = t.lineDiv.getBoundingClientRect();
        r.teTop = Math.max(0, Math.min(t.wrapper.clientHeight - 10, i.top + a.top - o.top)), r.teLeft = Math.max(0, Math.min(t.wrapper.clientWidth - 10, i.left + a.left - o.left));
      }

      return r;
    }, ja.prototype.showSelection = function (e) {
      var t = this.cm,
          n = t.display;
      L(n.cursorDiv, e.cursors), L(n.selectionDiv, e.selection), null != e.teTop && (this.wrapper.style.top = e.teTop + "px", this.wrapper.style.left = e.teLeft + "px");
    }, ja.prototype.reset = function (e) {
      if (!this.contextMenuPending && !this.composing) {
        var t = this.cm;

        if (t.somethingSelected()) {
          this.prevInput = "";
          var n = t.getSelection();
          this.textarea.value = n, t.state.focused && W(this.textarea), a && s >= 9 && (this.hasSelection = n);
        } else e || (this.prevInput = this.textarea.value = "", a && s >= 9 && (this.hasSelection = null));
      }
    }, ja.prototype.getField = function () {
      return this.textarea;
    }, ja.prototype.supportsTouch = function () {
      return !1;
    }, ja.prototype.focus = function () {
      if ("nocursor" != this.cm.options.readOnly && (!m || E() != this.textarea)) try {
        this.textarea.focus();
      } catch (e) {}
    }, ja.prototype.blur = function () {
      this.textarea.blur();
    }, ja.prototype.resetPosition = function () {
      this.wrapper.style.top = this.wrapper.style.left = 0;
    }, ja.prototype.receivedFocus = function () {
      this.slowPoll();
    }, ja.prototype.slowPoll = function () {
      var e = this;
      this.pollingFast || this.polling.set(this.cm.options.pollInterval, function () {
        e.poll(), e.cm.state.focused && e.slowPoll();
      });
    }, ja.prototype.fastPoll = function () {
      var e = !1,
          t = this;
      t.pollingFast = !0, t.polling.set(20, function n() {
        var r = t.poll();
        r || e ? (t.pollingFast = !1, t.slowPoll()) : (e = !0, t.polling.set(60, n));
      });
    }, ja.prototype.poll = function () {
      var e = this,
          t = this.cm,
          n = this.textarea,
          r = this.prevInput;
      if (this.contextMenuPending || !t.state.focused || At(n) && !r && !this.composing || t.isReadOnly() || t.options.disableInput || t.state.keySeq) return !1;
      var i = n.value;
      if (i == r && !t.somethingSelected()) return !1;
      if (a && s >= 9 && this.hasSelection === i || b && /[\uf700-\uf7ff]/.test(i)) return t.display.input.reset(), !1;

      if (t.doc.sel == t.display.selForContextMenu) {
        var o = i.charCodeAt(0);
        if (8203 != o || r || (r = "​"), 8666 == o) return this.reset(), this.cm.execCommand("undo");
      }

      for (var l = 0, u = Math.min(r.length, i.length); l < u && r.charCodeAt(l) == i.charCodeAt(l);) {
        ++l;
      }

      return Qr(t, function () {
        La(t, i.slice(l), r.length - l, null, e.composing ? "*compose" : null), i.length > 1e3 || i.indexOf("\n") > -1 ? n.value = e.prevInput = "" : e.prevInput = i, e.composing && (e.composing.range.clear(), e.composing.range = t.markText(e.composing.start, t.getCursor("to"), {
          className: "CodeMirror-composing"
        }));
      }), !0;
    }, ja.prototype.ensurePolled = function () {
      this.pollingFast && this.poll() && (this.pollingFast = !1);
    }, ja.prototype.onKeyPress = function () {
      a && s >= 9 && (this.hasSelection = null), this.fastPoll();
    }, ja.prototype.onContextMenu = function (e) {
      var t = this,
          n = t.cm,
          r = n.display,
          i = t.textarea,
          o = ar(n, e),
          u = r.scroller.scrollTop;

      if (o && !h) {
        var c = n.options.resetSelectionOnContextMenu;
        c && -1 == n.doc.sel.contains(o) && Xr(n, Xi)(n.doc, Ai(o), V);
        var d = i.style.cssText,
            f = t.wrapper.style.cssText;
        t.wrapper.style.cssText = "position: absolute";
        var p,
            g = t.wrapper.getBoundingClientRect();

        if (i.style.cssText = "position: absolute; width: 30px; height: 30px;\n      top: " + (e.clientY - g.top - 5) + "px; left: " + (e.clientX - g.left - 5) + "px;\n      z-index: 1000; background: " + (a ? "rgba(255, 255, 255, .05)" : "transparent") + ";\n      outline: none; border-width: 0; outline: none; overflow: hidden; opacity: .05; filter: alpha(opacity=5);", l && (p = window.scrollY), r.input.focus(), l && window.scrollTo(null, p), r.input.reset(), n.somethingSelected() || (i.value = t.prevInput = " "), t.contextMenuPending = !0, r.selForContextMenu = n.doc.sel, clearTimeout(r.detectingSelectAll), a && s >= 9 && m(), x) {
          ht(e);

          var v = function v() {
            nt(window, "mouseup", v), setTimeout(b, 20);
          };

          et(window, "mouseup", v);
        } else setTimeout(b, 50);
      }

      function m() {
        if (null != i.selectionStart) {
          var e = n.somethingSelected(),
              o = "​" + (e ? i.value : "");
          i.value = "⇚", i.value = o, t.prevInput = e ? "" : "​", i.selectionStart = 1, i.selectionEnd = o.length, r.selForContextMenu = n.doc.sel;
        }
      }

      function b() {
        if (t.contextMenuPending = !1, t.wrapper.style.cssText = f, i.style.cssText = d, a && s < 9 && r.scrollbars.setScrollTop(r.scroller.scrollTop = u), null != i.selectionStart) {
          (!a || a && s < 9) && m();

          var e = 0,
              o = function o() {
            r.selForContextMenu == n.doc.sel && 0 == i.selectionStart && i.selectionEnd > 0 && "​" == t.prevInput ? Xr(n, no)(n) : e++ < 10 ? r.detectingSelectAll = setTimeout(o, 500) : (r.selForContextMenu = null, r.input.reset());
          };

          r.detectingSelectAll = setTimeout(o, 200);
        }
      }
    }, ja.prototype.readOnlyChanged = function (e) {
      e || this.reset(), this.textarea.disabled = "nocursor" == e;
    }, ja.prototype.setUneditable = function () {}, ja.prototype.needsContentAttribute = !1, function (e) {
      var t = e.optionHandlers;

      function n(n, r, i, o) {
        e.defaults[n] = r, i && (t[n] = o ? function (e, t, n) {
          n != ma && i(e, t, n);
        } : i);
      }

      e.defineOption = n, e.Init = ma, n("value", "", function (e, t) {
        return e.setValue(t);
      }, !0), n("mode", null, function (e, t) {
        e.doc.modeOption = t, Ii(e);
      }, !0), n("indentUnit", 2, Ii, !0), n("indentWithTabs", !1), n("smartIndent", !0), n("tabSize", 4, function (e) {
        Mi(e), Hn(e), Jr(e);
      }, !0), n("lineSeparator", null, function (e, t) {
        if (e.doc.lineSep = t, t) {
          var n = [],
              r = e.doc.first;
          e.doc.iter(function (e) {
            for (var i = 0;;) {
              var o = e.text.indexOf(t, i);
              if (-1 == o) break;
              i = o + t.length, n.push(ge(r, o));
            }

            r++;
          });

          for (var i = n.length - 1; i >= 0; i--) {
            uo(e.doc, t, n[i], ge(n[i].line, n[i].ch + t.length));
          }
        }
      }), n("specialChars", /[\u0000-\u001f\u007f-\u009f\u00ad\u061c\u200b-\u200f\u2028\u2029\ufeff]/g, function (e, t, n) {
        e.state.specialChars = new RegExp(t.source + (t.test("\t") ? "" : "|\t"), "g"), n != ma && e.refresh();
      }), n("specialCharPlaceholder", Jt, function (e) {
        return e.refresh();
      }, !0), n("electricChars", !0), n("inputStyle", m ? "contenteditable" : "textarea", function () {
        throw new Error("inputStyle can not (yet) be changed in a running editor");
      }, !0), n("spellcheck", !1, function (e, t) {
        return e.getInputField().spellcheck = t;
      }, !0), n("rtlMoveVisually", !A), n("wholeLineUpdateBefore", !0), n("theme", "default", function (e) {
        va(e), Aa(e);
      }, !0), n("keyMap", "default", function (e, t, n) {
        var r = Zo(t),
            i = n != ma && Zo(n);
        i && i.detach && i.detach(e, r), r.attach && r.attach(e, i || null);
      }), n("extraKeys", null), n("configureMouse", null), n("lineWrapping", !1, Ca, !0), n("gutters", [], function (e) {
        hi(e.options), Aa(e);
      }, !0), n("fixedGutter", !0, function (e, t) {
        e.display.gutters.style.left = t ? rr(e.display) + "px" : "0", e.refresh();
      }, !0), n("coverGutterNextToScrollbar", !1, function (e) {
        return Wr(e);
      }, !0), n("scrollbarStyle", "native", function (e) {
        Fr(e), Wr(e), e.display.scrollbars.setScrollTop(e.doc.scrollTop), e.display.scrollbars.setScrollLeft(e.doc.scrollLeft);
      }, !0), n("lineNumbers", !1, function (e) {
        hi(e.options), Aa(e);
      }, !0), n("firstLineNumber", 1, Aa, !0), n("lineNumberFormatter", function (e) {
        return e;
      }, Aa, !0), n("showCursorWhenSelecting", !1, lr, !0), n("resetSelectionOnContextMenu", !0), n("lineWiseCopyCut", !0), n("pasteLinesPerSelection", !0), n("selectionsMayTouch", !1), n("readOnly", !1, function (e, t) {
        "nocursor" == t && (mr(e), e.display.input.blur()), e.display.input.readOnlyChanged(t);
      }), n("disableInput", !1, function (e, t) {
        t || e.display.input.reset();
      }, !0), n("dragDrop", !0, wa), n("allowDropFileTypes", null), n("cursorBlinkRate", 530), n("cursorScrollMargin", 0), n("cursorHeight", 1, lr, !0), n("singleCursorHeightPerLine", !0, lr, !0), n("workTime", 100), n("workDelay", 100), n("flattenSpans", !0, Mi, !0), n("addModeClass", !1, Mi, !0), n("pollInterval", 100), n("undoDepth", 200, function (e, t) {
        return e.doc.history.undoDepth = t;
      }), n("historyEventDelay", 1250), n("viewportMargin", 10, function (e) {
        return e.refresh();
      }, !0), n("maxHighlightLength", 1e4, Mi, !0), n("moveInputWithCursor", !0, function (e, t) {
        t || e.display.input.resetPosition();
      }), n("tabindex", null, function (e, t) {
        return e.display.input.getField().tabIndex = t || "";
      }), n("autofocus", null), n("direction", "ltr", function (e, t) {
        return e.doc.setDirection(t);
      }, !0), n("phrases", null);
    }(xa), function (e) {
      var t = e.optionHandlers,
          n = e.helpers = {};
      e.prototype = {
        constructor: e,
        focus: function focus() {
          window.focus(), this.display.input.focus();
        },
        setOption: function setOption(e, n) {
          var r = this.options,
              i = r[e];
          r[e] == n && "mode" != e || (r[e] = n, t.hasOwnProperty(e) && Xr(this, t[e])(this, n, i), rt(this, "optionChange", this, e));
        },
        getOption: function getOption(e) {
          return this.options[e];
        },
        getDoc: function getDoc() {
          return this.doc;
        },
        addKeyMap: function addKeyMap(e, t) {
          this.state.keyMaps[t ? "push" : "unshift"](Zo(e));
        },
        removeKeyMap: function removeKeyMap(e) {
          for (var t = this.state.keyMaps, n = 0; n < t.length; ++n) {
            if (t[n] == e || t[n].name == e) return t.splice(n, 1), !0;
          }
        },
        addOverlay: _r(function (t, n) {
          var r = t.token ? t : e.getMode(this.options, t);
          if (r.startState) throw new Error("Overlays may not be stateful.");
          !function (e, t, n) {
            for (var r = 0, i = n(t); r < e.length && n(e[r]) <= i;) {
              r++;
            }

            e.splice(r, 0, t);
          }(this.state.overlays, {
            mode: r,
            modeSpec: t,
            opaque: n && n.opaque,
            priority: n && n.priority || 0
          }, function (e) {
            return e.priority;
          }), this.state.modeGen++, Jr(this);
        }),
        removeOverlay: _r(function (e) {
          for (var t = this.state.overlays, n = 0; n < t.length; ++n) {
            var r = t[n].modeSpec;
            if (r == e || "string" == typeof e && r.name == e) return t.splice(n, 1), this.state.modeGen++, void Jr(this);
          }
        }),
        indentLine: _r(function (e, t, n) {
          "string" != typeof t && "number" != typeof t && (t = null == t ? this.options.smartIndent ? "smart" : "prev" : t ? "add" : "subtract"), fe(this.doc, e) && Ia(this, e, t, n);
        }),
        indentSelection: _r(function (e) {
          for (var t = this.doc.sel.ranges, n = -1, r = 0; r < t.length; r++) {
            var i = t[r];
            if (i.empty()) i.head.line > n && (Ia(this, i.head.line, e, !0), n = i.head.line, r == this.doc.sel.primIndex && Ir(this));else {
              var o = i.from(),
                  a = i.to(),
                  s = Math.max(n, o.line);
              n = Math.min(this.lastLine(), a.line - (a.ch ? 0 : 1)) + 1;

              for (var l = s; l < n; ++l) {
                Ia(this, l, e);
              }

              var u = this.doc.sel.ranges;
              0 == o.ch && t.length == u.length && u[r].from().ch > 0 && Zi(this.doc, r, new bi(o, u[r].to()), V);
            }
          }
        }),
        getTokenAt: function getTokenAt(e, t) {
          return Gt(this, e, t);
        },
        getLineTokens: function getLineTokens(e, t) {
          return Gt(this, ge(e), t, !0);
        },
        getTokenTypeAt: function getTokenTypeAt(e) {
          e = Ce(this.doc, e);
          var t,
              n = Rt(this, se(this.doc, e.line)),
              r = 0,
              i = (n.length - 1) / 2,
              o = e.ch;
          if (0 == o) t = n[2];else for (;;) {
            var a = r + i >> 1;
            if ((a ? n[2 * a - 1] : 0) >= o) i = a;else {
              if (!(n[2 * a + 1] < o)) {
                t = n[2 * a + 2];
                break;
              }

              r = a + 1;
            }
          }
          var s = t ? t.indexOf("overlay ") : -1;
          return s < 0 ? t : 0 == s ? null : t.slice(0, s - 1);
        },
        getModeAt: function getModeAt(t) {
          var n = this.doc.mode;
          return n.innerMode ? e.innerMode(n, this.getTokenAt(t).state).mode : n;
        },
        getHelper: function getHelper(e, t) {
          return this.getHelpers(e, t)[0];
        },
        getHelpers: function getHelpers(e, t) {
          var r = [];
          if (!n.hasOwnProperty(t)) return r;
          var i = n[t],
              o = this.getModeAt(e);
          if ("string" == typeof o[t]) i[o[t]] && r.push(i[o[t]]);else if (o[t]) for (var a = 0; a < o[t].length; a++) {
            var s = i[o[t][a]];
            s && r.push(s);
          } else o.helperType && i[o.helperType] ? r.push(i[o.helperType]) : i[o.name] && r.push(i[o.name]);

          for (var l = 0; l < i._global.length; l++) {
            var u = i._global[l];
            u.pred(o, this) && -1 == B(r, u.val) && r.push(u.val);
          }

          return r;
        },
        getStateAfter: function getStateAfter(e, t) {
          var n = this.doc;
          return zt(this, (e = we(n, null == e ? n.first + n.size - 1 : e)) + 1, t).state;
        },
        cursorCoords: function cursorCoords(e, t) {
          var n = this.doc.sel.primary();
          return Yn(this, null == e ? n.head : "object" == _typeof(e) ? Ce(this.doc, e) : e ? n.from() : n.to(), t || "page");
        },
        charCoords: function charCoords(e, t) {
          return Zn(this, Ce(this.doc, e), t || "page");
        },
        coordsChar: function coordsChar(e, t) {
          return _n(this, (e = Un(this, e, t || "page")).left, e.top);
        },
        lineAtHeight: function lineAtHeight(e, t) {
          return e = Un(this, {
            top: e,
            left: 0
          }, t || "page").top, de(this.doc, e + this.display.viewOffset);
        },
        heightAtLine: function heightAtLine(e, t, n) {
          var r,
              i = !1;

          if ("number" == typeof e) {
            var o = this.doc.first + this.doc.size - 1;
            e < this.doc.first ? e = this.doc.first : e > o && (e = o, i = !0), r = se(this.doc, e);
          } else r = e;

          return Vn(this, r, {
            top: 0,
            left: 0
          }, t || "page", n || i).top + (i ? this.doc.height - Ye(r) : 0);
        },
        defaultTextHeight: function defaultTextHeight() {
          return er(this.display);
        },
        defaultCharWidth: function defaultCharWidth() {
          return tr(this.display);
        },
        getViewport: function getViewport() {
          return {
            from: this.display.viewFrom,
            to: this.display.viewTo
          };
        },
        addWidget: function addWidget(e, t, n, r, i) {
          var o = this.display,
              a = (e = Yn(this, Ce(this.doc, e))).bottom,
              s = e.left;
          if (t.style.position = "absolute", t.setAttribute("cm-ignore-events", "true"), this.display.input.setUneditable(t), o.sizer.appendChild(t), "over" == r) a = e.top;else if ("above" == r || "near" == r) {
            var l = Math.max(o.wrapper.clientHeight, this.doc.height),
                u = Math.max(o.sizer.clientWidth, o.lineSpace.clientWidth);
            ("above" == r || e.bottom + t.offsetHeight > l) && e.top > t.offsetHeight ? a = e.top - t.offsetHeight : e.bottom + t.offsetHeight <= l && (a = e.bottom), s + t.offsetWidth > u && (s = u - t.offsetWidth);
          }
          t.style.top = a + "px", t.style.left = t.style.right = "", "right" == i ? (s = o.sizer.clientWidth - t.offsetWidth, t.style.right = "0px") : ("left" == i ? s = 0 : "middle" == i && (s = (o.sizer.clientWidth - t.offsetWidth) / 2), t.style.left = s + "px"), n && function (e, t) {
            var n = xr(e, t);
            null != n.scrollTop && Tr(e, n.scrollTop), null != n.scrollLeft && Nr(e, n.scrollLeft);
          }(this, {
            left: s,
            top: a,
            right: s + t.offsetWidth,
            bottom: a + t.offsetHeight
          });
        },
        triggerOnKeyDown: _r(oa),
        triggerOnKeyPress: _r(sa),
        triggerOnKeyUp: aa,
        triggerOnMouseDown: _r(ha),
        execCommand: function execCommand(e) {
          if (Ko.hasOwnProperty(e)) return Ko[e].call(null, this);
        },
        triggerElectric: _r(function (e) {
          Oa(this, e);
        }),
        findPosH: function findPosH(e, t, n, r) {
          var i = 1;
          t < 0 && (i = -1, t = -t);

          for (var o = Ce(this.doc, e), a = 0; a < t && !(o = Pa(this.doc, o, i, n, r)).hitSide; ++a) {
            ;
          }

          return o;
        },
        moveH: _r(function (e, t) {
          var n = this;
          this.extendSelectionsBy(function (r) {
            return n.display.shift || n.doc.extend || r.empty() ? Pa(n.doc, r.head, e, t, n.options.rtlMoveVisually) : e < 0 ? r.from() : r.to();
          }, Z);
        }),
        deleteH: _r(function (e, t) {
          var n = this.doc.sel,
              r = this.doc;
          n.somethingSelected() ? r.replaceSelection("", null, "+delete") : Yo(this, function (n) {
            var i = Pa(r, n.head, e, t, !1);
            return e < 0 ? {
              from: i,
              to: n.head
            } : {
              from: n.head,
              to: i
            };
          });
        }),
        findPosV: function findPosV(e, t, n, r) {
          var i = 1,
              o = r;
          t < 0 && (i = -1, t = -t);

          for (var a = Ce(this.doc, e), s = 0; s < t; ++s) {
            var l = Yn(this, a, "div");
            if (null == o ? o = l.left : l.left = o, (a = Wa(this, l, i, n)).hitSide) break;
          }

          return a;
        },
        moveV: _r(function (e, t) {
          var n = this,
              r = this.doc,
              i = [],
              o = !this.display.shift && !r.extend && r.sel.somethingSelected();
          if (r.extendSelectionsBy(function (a) {
            if (o) return e < 0 ? a.from() : a.to();
            var s = Yn(n, a.head, "div");
            null != a.goalColumn && (s.left = a.goalColumn), i.push(s.left);
            var l = Wa(n, s, e, t);
            return "page" == t && a == r.sel.primary() && kr(n, Zn(n, l, "div").top - s.top), l;
          }, Z), i.length) for (var a = 0; a < r.sel.ranges.length; a++) {
            r.sel.ranges[a].goalColumn = i[a];
          }
        }),
        findWordAt: function findWordAt(e) {
          var t = this.doc,
              n = se(t, e.line).text,
              r = e.ch,
              i = e.ch;

          if (n) {
            var o = this.getHelper(e, "wordChars");
            "before" != e.sticky && i != n.length || !r ? ++i : --r;

            for (var a = n.charAt(r), s = te(a, o) ? function (e) {
              return te(e, o);
            } : /\s/.test(a) ? function (e) {
              return /\s/.test(e);
            } : function (e) {
              return !/\s/.test(e) && !te(e);
            }; r > 0 && s(n.charAt(r - 1));) {
              --r;
            }

            for (; i < n.length && s(n.charAt(i));) {
              ++i;
            }
          }

          return new bi(ge(e.line, r), ge(e.line, i));
        },
        toggleOverwrite: function toggleOverwrite(e) {
          null != e && e == this.state.overwrite || ((this.state.overwrite = !this.state.overwrite) ? D(this.display.cursorDiv, "CodeMirror-overwrite") : M(this.display.cursorDiv, "CodeMirror-overwrite"), rt(this, "overwriteToggle", this, this.state.overwrite));
        },
        hasFocus: function hasFocus() {
          return this.display.input.getField() == E();
        },
        isReadOnly: function isReadOnly() {
          return !(!this.options.readOnly && !this.doc.cantEdit);
        },
        scrollTo: _r(function (e, t) {
          Mr(this, e, t);
        }),
        getScrollInfo: function getScrollInfo() {
          var e = this.display.scroller;
          return {
            left: e.scrollLeft,
            top: e.scrollTop,
            height: e.scrollHeight - In(this) - this.display.barHeight,
            width: e.scrollWidth - In(this) - this.display.barWidth,
            clientHeight: Sn(this),
            clientWidth: Mn(this)
          };
        },
        scrollIntoView: _r(function (e, t) {
          null == e ? (e = {
            from: this.doc.sel.primary().head,
            to: null
          }, null == t && (t = this.options.cursorScrollMargin)) : "number" == typeof e ? e = {
            from: ge(e, 0),
            to: null
          } : null == e.from && (e = {
            from: e,
            to: null
          }), e.to || (e.to = e.from), e.margin = t || 0, null != e.from.line ? function (e, t) {
            Sr(e), e.curOp.scrollToPos = t;
          }(this, e) : Lr(this, e.from, e.to, e.margin);
        }),
        setSize: _r(function (e, t) {
          var n = this,
              r = function r(e) {
            return "number" == typeof e || /^\d+$/.test(String(e)) ? e + "px" : e;
          };

          null != e && (this.display.wrapper.style.width = r(e)), null != t && (this.display.wrapper.style.height = r(t)), this.options.lineWrapping && Fn(this);
          var i = this.display.viewFrom;
          this.doc.iter(i, this.display.viewTo, function (e) {
            if (e.widgets) for (var t = 0; t < e.widgets.length; t++) {
              if (e.widgets[t].noHScroll) {
                qr(n, i, "widget");
                break;
              }
            }
            ++i;
          }), this.curOp.forceUpdate = !0, rt(this, "refresh", this);
        }),
        operation: function operation(e) {
          return Qr(this, e);
        },
        startOperation: function startOperation() {
          return Br(this);
        },
        endOperation: function endOperation() {
          return jr(this);
        },
        refresh: _r(function () {
          var e = this.display.cachedTextHeight;
          Jr(this), this.curOp.forceUpdate = !0, Hn(this), Mr(this, this.doc.scrollLeft, this.doc.scrollTop), li(this), (null == e || Math.abs(e - er(this.display)) > .5) && or(this), rt(this, "refresh", this);
        }),
        swapDoc: _r(function (e) {
          var t = this.doc;
          return t.cm = null, Oi(this, e), Hn(this), this.display.input.reset(), Mr(this, e.scrollLeft, e.scrollTop), this.curOp.forceScroll = !0, sn(this, "swapDoc", this, t), t;
        }),
        phrase: function phrase(e) {
          var t = this.options.phrases;
          return t && Object.prototype.hasOwnProperty.call(t, e) ? t[e] : e;
        },
        getInputField: function getInputField() {
          return this.display.input.getField();
        },
        getWrapperElement: function getWrapperElement() {
          return this.display.wrapper;
        },
        getScrollerElement: function getScrollerElement() {
          return this.display.scroller;
        },
        getGutterElement: function getGutterElement() {
          return this.display.gutters;
        }
      }, st(e), e.registerHelper = function (t, r, i) {
        n.hasOwnProperty(t) || (n[t] = e[t] = {
          _global: []
        }), n[t][r] = i;
      }, e.registerGlobalHelper = function (t, r, i, o) {
        e.registerHelper(t, r, o), n[t]._global.push({
          pred: i,
          val: o
        });
      };
    }(xa);
    var Ga = "iter insert remove copy getEditor constructor".split(" ");

    for (var Va in Mo.prototype) {
      Mo.prototype.hasOwnProperty(Va) && B(Ga, Va) < 0 && (xa.prototype[Va] = function (e) {
        return function () {
          return e.apply(this.doc, arguments);
        };
      }(Mo.prototype[Va]));
    }

    return st(Mo), xa.inputStyles = {
      textarea: ja,
      contenteditable: Ra
    }, xa.defineMode = function (e) {
      xa.defaults.mode || "null" == e || (xa.defaults.mode = e), function (e, t) {
        arguments.length > 2 && (t.dependencies = Array.prototype.slice.call(arguments, 2)), xt[e] = t;
      }.apply(this, arguments);
    }, xa.defineMIME = function (e, t) {
      kt[e] = t;
    }, xa.defineMode("null", function () {
      return {
        token: function token(e) {
          return e.skipToEnd();
        }
      };
    }), xa.defineMIME("text/plain", "null"), xa.defineExtension = function (e, t) {
      xa.prototype[e] = t;
    }, xa.defineDocExtension = function (e, t) {
      Mo.prototype[e] = t;
    }, xa.fromTextArea = function (e, t) {
      if ((t = t ? z(t) : {}).value = e.value, !t.tabindex && e.tabIndex && (t.tabindex = e.tabIndex), !t.placeholder && e.placeholder && (t.placeholder = e.placeholder), null == t.autofocus) {
        var n = E();
        t.autofocus = n == e || null != e.getAttribute("autofocus") && n == document.body;
      }

      function r() {
        e.value = s.getValue();
      }

      var i;

      if (e.form && (et(e.form, "submit", r), !t.leaveSubmitMethodAlone)) {
        var o = e.form;
        i = o.submit;

        try {
          var a = o.submit = function () {
            r(), o.submit = i, o.submit(), o.submit = a;
          };
        } catch (e) {}
      }

      t.finishInit = function (t) {
        t.save = r, t.getTextArea = function () {
          return e;
        }, t.toTextArea = function () {
          t.toTextArea = isNaN, r(), e.parentNode.removeChild(t.getWrapperElement()), e.style.display = "", e.form && (nt(e.form, "submit", r), "function" == typeof e.form.submit && (e.form.submit = i));
        };
      }, e.style.display = "none";
      var s = xa(function (t) {
        return e.parentNode.insertBefore(t, e.nextSibling);
      }, t);
      return s;
    }, function (e) {
      e.off = nt, e.on = et, e.wheelEventPixels = gi, e.Doc = Mo, e.splitLines = yt, e.countColumn = F, e.findColumn = Y, e.isWordChar = ee, e.Pass = G, e.signal = rt, e.Line = Zt, e.changeEnd = wi, e.scrollbarModel = zr, e.Pos = ge, e.cmpPos = ve, e.modes = xt, e.mimeModes = kt, e.resolveMode = It, e.getMode = Mt, e.modeExtensions = St, e.extendMode = Lt, e.copyState = Tt, e.startState = Nt, e.innerMode = Ot, e.commands = Ko, e.keyMap = Fo, e.keyName = Uo, e.isModifierKey = Go, e.lookupKey = jo, e.normalizeKeyMap = Bo, e.StringStream = Et, e.SharedTextMarker = Co, e.TextMarker = Ao, e.LineWidget = mo, e.e_preventDefault = lt, e.e_stopPropagation = ut, e.e_stop = ht, e.addClass = D, e.contains = N, e.rmClass = M, e.keyNames = Po;
    }(xa), xa.version = "5.42.0", xa;
  }();
}, function (e, t, n) {
  "use strict";

  Object.defineProperty(t, "__esModule", {
    value: !0
  });

  var r = "function" == typeof Symbol && "symbol" == _typeof(Symbol.iterator) ? function (e) {
    return _typeof(e);
  } : function (e) {
    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : _typeof(e);
  },
      i = function () {
    function e(e, t) {
      for (var n = 0; n < t.length; n++) {
        var r = t[n];
        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
      }
    }

    return function (t, n, r) {
      return n && e(t.prototype, n), r && e(t, r), t;
    };
  }();

  function o(e, t) {
    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
  }

  t.elt = function (e) {
    var t = document.createElement(e),
        n = Array.prototype.slice.call(arguments, 1);

    for (; n.length;) {
      var r = n.shift();
      a(t, r);
    }

    return t;
  };

  t.Events = function () {
    function e() {
      o(this, e), this.cache = {};
    }

    return i(e, [{
      key: "publish",
      value: function value(e, t, n) {
        if (this.cache[e]) for (var r = this.cache[e], i = r.length; i--;) {
          r[i].apply(n || this, t || []);
        }
      }
    }, {
      key: "subscribe",
      value: function value(e, t) {
        return this.cache[e] || (this.cache[e] = []), this.cache[e].push(t), [e, t];
      }
    }, {
      key: "unsubscribe",
      value: function value(e, t) {
        var n = e[0];
        if (this.cache[n]) for (var r = this.cache[n].length; r--;) {
          if (this.cache[n][r] === e[1]) return this.cache[n].splice(r, 1), t && delete this.cache[n], !0;
        }
        return !1;
      }
    }, {
      key: "unsubscribeAll",
      value: function value() {
        this.cache = {};
      }
    }]), e;
  }(), t.EventManager = function () {
    function e(t) {
      if (o(this, e), !t) return !1;
      this.parent = t.parent, this.cache = {}, this.appIDAttr = "data-app-el-id";
    }

    return i(e, [{
      key: "bind",
      value: function value(e, t, n) {
        var r = e.getAttribute(this.appIDAttr) || e.getAttribute("id");
        r || (r = function (e) {
          return Math.floor((1 + Math.random()) * Math.pow(16, e)).toString(16).substring(1);
        }(16), e.setAttribute(this.appIDAttr, r)), r in this.cache || (this.cache[r] = {});
        var i = this.cache[r];
        t in i || (i[t] = []);
        var o = i[t],
            a = n.bind(this.parent);
        o.push(a), e.addEventListener(t, a);
      }
    }, {
      key: "unbind",
      value: function value(e, t) {
        var n = e.getAttribute(this.appIDAttr) || e.getAttribute("id");

        if (n && n in this.cache && t in this.cache[n]) {
          var r = !0,
              i = !1,
              o = void 0;

          try {
            for (var a, s = this.cache[n][t][Symbol.iterator](); !(r = (a = s.next()).done); r = !0) {
              var l = a.value;
              e.removeEventListener(t, l);
            }
          } catch (e) {
            i = !0, o = e;
          } finally {
            try {
              !r && s.return && s.return();
            } finally {
              if (i) throw o;
            }
          }
        }
      }
    }, {
      key: "unbindAll",
      value: function value() {
        for (var e in this.cache) {
          var t = document.getElementById(e);
          if (t || (t = document.querySelector("*[" + this.appIDAttr + "='" + e + "']")), t) for (var n in this.cache[e]) {
            var r = !0,
                i = !1,
                o = void 0;

            try {
              for (var a, s = this.cache[e][n][Symbol.iterator](); !(r = (a = s.next()).done); r = !0) {
                var l = a.value;
                t.removeEventListener(n, l);
              }
            } catch (e) {
              i = !0, o = e;
            } finally {
              try {
                !r && s.return && s.return();
              } finally {
                if (i) throw o;
              }
            }
          }
        }
      }
    }]), e;
  }();

  function a(e, t) {
    if (null != t) if ("object" !== (void 0 === t ? "undefined" : r(t)) && "function" != typeof t) e.appendChild(document.createTextNode(t));else if (t instanceof window.Node) e.appendChild(t);else if (t instanceof Array) for (var n = t.length, i = 0; i < n; i++) {
      a(e, t[i]);
    } else !function (e, t) {
      for (var n in t) {
        t.hasOwnProperty(n) && ("style" === n ? s(e, t.style) : e.setAttribute(n, t[n]));
      }
    }(e, t);
  }

  function s(e, t) {
    if (t) if ("object" === (void 0 === t ? "undefined" : r(t))) for (var n in t) {
      t.hasOwnProperty(n) && (e.style[n] = t[n]);
    } else e.style.cssText = t;
  }
}, function (e, t) {
  e.exports = function (e) {
    var t = [];
    return t.toString = function () {
      return this.map(function (t) {
        var n = function (e, t) {
          var n = e[1] || "",
              r = e[3];
          if (!r) return n;

          if (t && "function" == typeof btoa) {
            var i = function (e) {
              return "/*# sourceMappingURL=data:application/json;charset=utf-8;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(e)))) + " */";
            }(r),
                o = r.sources.map(function (e) {
              return "/*# sourceURL=" + r.sourceRoot + e + " */";
            });

            return [n].concat(o).concat([i]).join("\n");
          }

          return [n].join("\n");
        }(t, e);

        return t[2] ? "@media " + t[2] + "{" + n + "}" : n;
      }).join("");
    }, t.i = function (e, n) {
      "string" == typeof e && (e = [[null, e, ""]]);

      for (var r = {}, i = 0; i < this.length; i++) {
        var o = this[i][0];
        "number" == typeof o && (r[o] = !0);
      }

      for (i = 0; i < e.length; i++) {
        var a = e[i];
        "number" == typeof a[0] && r[a[0]] || (n && !a[2] ? a[2] = n : n && (a[2] = "(" + a[2] + ") and (" + n + ")"), t.push(a));
      }
    }, t;
  };
}, function (e, t, n) {
  var r = {},
      i = function (e) {
    var t;
    return function () {
      return void 0 === t && (t = e.apply(this, arguments)), t;
    };
  }(function () {
    return window && document && document.all && !window.atob;
  }),
      o = function (e) {
    var t = {};
    return function (e, n) {
      if ("function" == typeof e) return e();

      if (void 0 === t[e]) {
        var r = function (e, t) {
          return t ? t.querySelector(e) : document.querySelector(e);
        }.call(this, e, n);

        if (window.HTMLIFrameElement && r instanceof window.HTMLIFrameElement) try {
          r = r.contentDocument.head;
        } catch (e) {
          r = null;
        }
        t[e] = r;
      }

      return t[e];
    };
  }(),
      a = null,
      s = 0,
      l = [],
      u = n(21);

  function c(e, t) {
    for (var n = 0; n < e.length; n++) {
      var i = e[n],
          o = r[i.id];

      if (o) {
        o.refs++;

        for (var a = 0; a < o.parts.length; a++) {
          o.parts[a](i.parts[a]);
        }

        for (; a < i.parts.length; a++) {
          o.parts.push(v(i.parts[a], t));
        }
      } else {
        var s = [];

        for (a = 0; a < i.parts.length; a++) {
          s.push(v(i.parts[a], t));
        }

        r[i.id] = {
          id: i.id,
          refs: 1,
          parts: s
        };
      }
    }
  }

  function h(e, t) {
    for (var n = [], r = {}, i = 0; i < e.length; i++) {
      var o = e[i],
          a = t.base ? o[0] + t.base : o[0],
          s = {
        css: o[1],
        media: o[2],
        sourceMap: o[3]
      };
      r[a] ? r[a].parts.push(s) : n.push(r[a] = {
        id: a,
        parts: [s]
      });
    }

    return n;
  }

  function d(e, t) {
    var n = o(e.insertInto);
    if (!n) throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
    var r = l[l.length - 1];
    if ("top" === e.insertAt) r ? r.nextSibling ? n.insertBefore(t, r.nextSibling) : n.appendChild(t) : n.insertBefore(t, n.firstChild), l.push(t);else if ("bottom" === e.insertAt) n.appendChild(t);else {
      if ("object" != _typeof(e.insertAt) || !e.insertAt.before) throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
      var i = o(e.insertAt.before, n);
      n.insertBefore(t, i);
    }
  }

  function f(e) {
    if (null === e.parentNode) return !1;
    e.parentNode.removeChild(e);
    var t = l.indexOf(e);
    t >= 0 && l.splice(t, 1);
  }

  function p(e) {
    var t = document.createElement("style");

    if (void 0 === e.attrs.type && (e.attrs.type = "text/css"), void 0 === e.attrs.nonce) {
      var r = function () {
        0;
        return n.nc;
      }();

      r && (e.attrs.nonce = r);
    }

    return g(t, e.attrs), d(e, t), t;
  }

  function g(e, t) {
    Object.keys(t).forEach(function (n) {
      e.setAttribute(n, t[n]);
    });
  }

  function v(e, t) {
    var n, r, i, o;

    if (t.transform && e.css) {
      if (!(o = "function" == typeof t.transform ? t.transform(e.css) : t.transform.default(e.css))) return function () {};
      e.css = o;
    }

    if (t.singleton) {
      var l = s++;
      n = a || (a = p(t)), r = b.bind(null, n, l, !1), i = b.bind(null, n, l, !0);
    } else e.sourceMap && "function" == typeof URL && "function" == typeof URL.createObjectURL && "function" == typeof URL.revokeObjectURL && "function" == typeof Blob && "function" == typeof btoa ? (n = function (e) {
      var t = document.createElement("link");
      return void 0 === e.attrs.type && (e.attrs.type = "text/css"), e.attrs.rel = "stylesheet", g(t, e.attrs), d(e, t), t;
    }(t), r = function (e, t, n) {
      var r = n.css,
          i = n.sourceMap,
          o = void 0 === t.convertToAbsoluteUrls && i;
      (t.convertToAbsoluteUrls || o) && (r = u(r));
      i && (r += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(i)))) + " */");
      var a = new Blob([r], {
        type: "text/css"
      }),
          s = e.href;
      e.href = URL.createObjectURL(a), s && URL.revokeObjectURL(s);
    }.bind(null, n, t), i = function i() {
      f(n), n.href && URL.revokeObjectURL(n.href);
    }) : (n = p(t), r = function (e, t) {
      var n = t.css,
          r = t.media;
      r && e.setAttribute("media", r);
      if (e.styleSheet) e.styleSheet.cssText = n;else {
        for (; e.firstChild;) {
          e.removeChild(e.firstChild);
        }

        e.appendChild(document.createTextNode(n));
      }
    }.bind(null, n), i = function i() {
      f(n);
    });

    return r(e), function (t) {
      if (t) {
        if (t.css === e.css && t.media === e.media && t.sourceMap === e.sourceMap) return;
        r(e = t);
      } else i();
    };
  }

  e.exports = function (e, t) {
    if ("undefined" != typeof DEBUG && DEBUG && "object" != (typeof document === "undefined" ? "undefined" : _typeof(document))) throw new Error("The style-loader cannot be used in a non-browser environment");
    (t = t || {}).attrs = "object" == _typeof(t.attrs) ? t.attrs : {}, t.singleton || "boolean" == typeof t.singleton || (t.singleton = i()), t.insertInto || (t.insertInto = "head"), t.insertAt || (t.insertAt = "bottom");
    var n = h(e, t);
    return c(n, t), function (e) {
      for (var i = [], o = 0; o < n.length; o++) {
        var a = n[o];
        (s = r[a.id]).refs--, i.push(s);
      }

      e && c(h(e, t), t);

      for (o = 0; o < i.length; o++) {
        var s;

        if (0 === (s = i[o]).refs) {
          for (var l = 0; l < s.parts.length; l++) {
            s.parts[l]();
          }

          delete r[s.id];
        }
      }
    };
  };

  var m = function () {
    var e = [];
    return function (t, n) {
      return e[t] = n, e.filter(Boolean).join("\n");
    };
  }();

  function b(e, t, n, r) {
    var i = n ? "" : r.css;
    if (e.styleSheet) e.styleSheet.cssText = m(t, i);else {
      var o = document.createTextNode(i),
          a = e.childNodes;
      a[t] && e.removeChild(a[t]), a.length ? e.insertBefore(o, a[t]) : e.appendChild(o);
    }
  }
}, function (e, t, n) {
  "use strict";

  Object.defineProperty(t, "__esModule", {
    value: !0
  }), t.App = void 0;

  var r = function () {
    function e(e, t) {
      for (var n = 0; n < t.length; n++) {
        var r = t[n];
        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
      }
    }

    return function (t, n, r) {
      return n && e(t.prototype, n), r && e(t, r), t;
    };
  }(),
      i = n(5),
      o = n(14),
      a = n(15),
      s = n(1),
      l = (n(6), n(9)),
      u = n(10),
      c = n(18);

  !function (e) {
    e && e.__esModule;
  }(n(38));

  t.App = function () {
    function e(t, n) {
      if (function (e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
      }(this, e), this.options = Object.assign({
        documentViewMargin: 100,
        documentViewPageBorder: 1,
        documentViewSVG: !1,
        enableDocument: !0,
        enableEditor: !1,
        enableResponsive: !0,
        defaultView: "responsive",
        defaultZoom: 3
      }, n), !(t && t instanceof HTMLDivElement)) throw "All App objects must be initialized with a 'element' parameter that is a HTMLDivElement element.";

      for (this.element = t, this.zoomLevels = [5, 10, 20, 35, 75, 100, 150, 200]; this.element.firstChild;) {
        this.element.firstChild.remove();
      }

      this.eventManager = new s.EventManager({
        parent: this
      }), this.events = new s.Events(), this.ui = {}, this.ui.wrapper = (0, s.elt)("div", {
        class: "vrv-ui-wrapper"
      }), this.element.appendChild(this.ui.wrapper), this.createToolbar(), this.ui.views = (0, s.elt)("div", {
        class: "vrv-ui-views"
      }), this.ui.wrapper.appendChild(this.ui.views), this.ui.xml = (0, s.elt)("div", {
        class: "vrv-ui-xml"
      }), this.ui.wrapper.appendChild(this.ui.xml), this.updateDimensions(!1), this.ui.loader = (0, s.elt)("div", {
        class: "vrv-ui-loading"
      }), this.ui.views.appendChild(this.ui.loader), this.ui.loader.text = (0, s.elt)("div", {
        class: "vrv-ui-loading-text"
      }), this.ui.loader.appendChild(this.ui.loader.text), this.controller = null, this.validator = null, this.resizeTimer, window.onresize = this.onResize.bind(this), this.createController();
    }

    return r(e, [{
      key: "destroy",
      value: function value() {
        this.eventManager.unbindAll(), this.events.unsubscribeAll();
      }
    }, {
      key: "controllerLoadCallback",
      value: function value(e) {
        this.options.enableEditor ? this.createValidator() : this.createViews();
      }
    }, {
      key: "validatorLoadCallback",
      value: function value(e) {
        this.loadSchema();
      }
    }, {
      key: "validatorSetSchemaCallback",
      value: function value(e) {
        this.createViews();
      }
    }, {
      key: "loadDataCallback",
      value: function value(e) {
        this.view.loadDataCallback(e), this.xmlEditor && this.xmlEditor.setData(this.mei);
      }
    }, {
      key: "createController",
      value: function value() {
        this.startLoading("Loading Verovio ..."), this.controller = new i.Controller(this, this.controllerLoadCallback, this.options);
      }
    }, {
      key: "createValidator",
      value: function value() {
        this.startLoading("Loading the XML validator ..."), this.validator = new u.Validator(this, this.validatorLoadCallback, this.options);
      }
    }, {
      key: "createViews",
      value: function value() {
        if (this.startLoading("Loading the views ..."), this.view = null, this.options.enableDocument && (this.ui.view1 = (0, s.elt)("div", {
          class: "vrv-ui-view"
        }), this.ui.views.appendChild(this.ui.view1), this.viewDocument = new o.DocumentView(this.ui.view1, this.controller, this.options), "document" === this.options.defaultView && (this.view = this.viewDocument)), this.options.enableEditor && (this.ui.view2 = (0, s.elt)("div", {
          class: "vrv-ui-view"
        }), this.ui.views.appendChild(this.ui.view2), this.viewEditor = new a.EditorView(this.ui.view2, this.controller, this.options), this.xmlEditor = new c.XMLEditor(this.ui.xml, this.validator, this.options), this.xmlEditor.CMeditor.options.hintOptions.schemaInfo = this.validator.rng.tags, "editor" === this.options.defaultView && (this.view = this.viewEditor)), this.options.enableResponsive && (this.ui.view3 = (0, s.elt)("div", {
          class: "vrv-ui-view"
        }), this.ui.views.appendChild(this.ui.view3), this.viewResponsive = new l.ResponsiveView(this.ui.view3, this.controller, this.options), "responsive" === this.options.defaultView && (this.view = this.viewResponsive)), !this.view) throw "No view enabled or unknown default view '" + this.options.defaultView + "' selected.";
        this.updateDimensions(!1), this.endLoading(), this.view.activate(), this.view == this.viewEditor && this.xmlEditor.activate(), this.updateDimensions(), this.updateToolbar(), this.mei && this.loadMEI();
      }
    }, {
      key: "createToolbar",
      value: function value() {
        this.ui.toolbar = (0, s.elt)("div", {
          class: "vrv-ui-toolbar"
        }), this.ui.wrapper.appendChild(this.ui.toolbar);
        var e = (0, s.elt)("div", {
          class: "vrv-ui-submenu"
        });
        this.ui.toolbar.appendChild(e), this.ui.viewSelector = (0, s.elt)("div", {
          class: "vrv-ui-btn-view-selector"
        }), e.appendChild(this.ui.viewSelector);
        var t = (0, s.elt)("div", {
          class: "vrv-ui-submenu-content"
        });
        e.appendChild(t);
        var n = 0;
        this.options.enableDocument && (this.ui.viewDocument = (0, s.elt)("div", {
          class: "vrv-ui-btn-view-document"
        }), this.ui.viewDocument.dataset.view = "document", t.appendChild(this.ui.viewDocument), this.eventManager.bind(this.ui.viewDocument, "click", this.setView), n += 1), this.options.enableResponsive && (this.ui.viewResponsive = (0, s.elt)("div", {
          class: "vrv-ui-btn-view-responsive"
        }), this.ui.viewResponsive.dataset.view = "responsive", t.appendChild(this.ui.viewResponsive), this.eventManager.bind(this.ui.viewResponsive, "click", this.setView), n += 1), this.options.enableEditor && (this.ui.viewEditor = (0, s.elt)("div", {
          class: "vrv-ui-btn-view-editor"
        }), this.ui.viewEditor.dataset.view = "editor", t.appendChild(this.ui.viewEditor), this.eventManager.bind(this.ui.viewEditor, "click", this.setView), n += 1), 1 === n && (e.style.display = "none"), this.ui.pageControls = (0, s.elt)("div", {
          class: "vrv-ui-btn-group"
        }), this.ui.toolbar.appendChild(this.ui.pageControls), this.ui.pageControls.appendChild((0, s.elt)("div", {
          class: "vrv-ui-separator"
        })), this.ui.prevPage = (0, s.elt)("div", {
          class: "vrv-ui-btn-previous"
        }), this.ui.pageControls.appendChild(this.ui.prevPage), this.ui.nextPage = (0, s.elt)("div", {
          class: "vrv-ui-btn-next"
        }), this.ui.pageControls.appendChild(this.ui.nextPage), this.ui.zoomControls = (0, s.elt)("div", {
          class: "vrv-ui-btn-group"
        }), this.ui.toolbar.appendChild(this.ui.zoomControls), this.ui.zoomControls.appendChild((0, s.elt)("div", {
          class: "vrv-ui-separator"
        })), this.ui.zoomOut = (0, s.elt)("div", {
          class: "vrv-ui-btn-zoom-out"
        }), this.ui.zoomControls.appendChild(this.ui.zoomOut), this.ui.zoomIn = (0, s.elt)("div", {
          class: "vrv-ui-btn-zoom-in"
        }), this.ui.zoomControls.appendChild(this.ui.zoomIn), this.eventManager.bind(this.ui.prevPage, "click", this.prevPage), this.eventManager.bind(this.ui.nextPage, "click", this.nextPage), this.eventManager.bind(this.ui.zoomOut, "click", this.zoomOut), this.eventManager.bind(this.ui.zoomIn, "click", this.zoomIn);
      }
    }, {
      key: "updateDimensions",
      value: function value() {
        var e = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
        this.element.clientHeight < 400 && (this.element.style.height = "400px"), this.element.clientWidth < 200 && (this.element.style.width = "200px");
        var t = this.element.clientHeight - this.ui.toolbar.clientHeight;
        t < parseInt(this.ui.views.style.minHeight, 10) && (t = this.ui.views.style.minHeight, this.element.style.height = t + this.ui.toolbar.clientHeight + "px"), this.view && this.view === this.viewEditor ? (this.ui.views.style.height = t / 2 + "px", this.ui.xml.style.height = t / 2 + "px", this.ui.xml.style.top = this.ui.views.offsetTop + t / 2 - 2 + "px", this.ui.xml.style.width = this.element.clientWidth + "px") : this.ui.views.style.height = t + "px", this.ui.views.style.width = this.element.clientWidth + "px", e && (this.view && this.view.onResize(), this.xmlEditor && this.xmlEditor.onResize());
      }
    }, {
      key: "updateToolbar",
      value: function value() {
        this.updateToolbarBtn(this.ui.prevPage, this.view.currentPage > 1), this.updateToolbarBtn(this.ui.nextPage, this.view.currentPage < this.controller.pageCount), this.updateToolbarBtn(this.ui.zoomOut, this.controller.pageCount > 0 && this.view.currentZoomIndex > 0), this.updateToolbarBtn(this.ui.zoomIn, this.controller.pageCount > 0 && this.view.currentZoomIndex < this.zoomLevels.length - 1), this.ui.pageControls.style.display = this.view instanceof o.DocumentView ? "none" : "block", this.updateToolbarSubmenuBtn(this.ui.viewDocument, this.view instanceof o.DocumentView), this.updateToolbarSubmenuBtn(this.ui.viewEditor, this.view instanceof a.EditorView), this.updateToolbarSubmenuBtn(this.ui.viewResponsive, this.view instanceof l.ResponsiveView && !(this.view instanceof a.EditorView));
      }
    }, {
      key: "updateToolbarBtn",
      value: function value(e, t) {
        void 0 !== e && (t ? e.classList.remove("vrv-ui-btn-disabled") : e.classList.add("vrv-ui-btn-disabled"));
      }
    }, {
      key: "updateToolbarSubmenuBtn",
      value: function value(e, t) {
        void 0 !== e && (t ? e.classList.add("vrv-ui-btn-checked") : e.classList.remove("vrv-ui-btn-checked"));
      }
    }, {
      key: "onResize",
      value: function value() {
        clearTimeout(this.resizeTimer);
        var e = this;
        this.resizeTimer = setTimeout(function () {
          e.updateDimensions();
        }, 200);
      }
    }, {
      key: "loadSchema",
      value: function value() {
        this.startLoading("Loading the MEI Schema ..."), this.validator.setRelaxNGSchemaURI("https://music-encoding.org/schema/4.0.0/mei-all.rng", this.validatorSetSchemaCallback);
      }
    }, {
      key: "loadMEI",
      value: function value() {
        this.startLoading("Loading the MEI data ..."), this.controller.send("loadData", {
          mei: this.mei + "\n"
        }, -1, this.loadDataCallback);
      }
    }, {
      key: "loadData",
      value: function value(e) {
        this.mei = e;
      }
    }, {
      key: "updateData",
      value: function value(e, t) {
        this.mei = e, t == this.controller ? (this.xmlEditor.setData(this.mei), this.xmlEditor.setCurrent(this.view.currentId)) : t == this.xmlEditor && this.controller.send("loadData", {
          mei: this.mei + "\n"
        }, this.view.viewIndex, this.view.loadDataCallback);
      }
    }, {
      key: "updateCurrent",
      value: function value(e, t) {
        t == this.controller ? this.xmlEditor.setCurrent(e) : t == this.xmlEditor && this.view.setCurrent(e);
      }
    }, {
      key: "startLoading",
      value: function value(e) {
        this.ui.views.style.overflow = "hidden", this.ui.loader.style.display = "flex", this.ui.loader.text.innerHTML = e;
      }
    }, {
      key: "endLoading",
      value: function value() {
        this.ui.views.style.overflow = "scroll", this.ui.loader.style.display = "none";
      }
    }, {
      key: "prevPage",
      value: function value() {
        this.view.currentPage > 1 && (this.view.currentPage -= 1, this.updateToolbar(), this.view.updatePage());
      }
    }, {
      key: "nextPage",
      value: function value() {
        this.view.currentPage < this.controller.pageCount && (this.view.currentPage += 1, this.updateToolbar(), this.view.updatePage());
      }
    }, {
      key: "zoomOut",
      value: function value() {
        this.view.currentZoomIndex > 0 && (this.view.currentZoomIndex -= 1, this.updateToolbar(), this.view.updateZoom());
      }
    }, {
      key: "zoomIn",
      value: function value() {
        this.view.currentZoomIndex < this.zoomLevels.length - 1 && (this.view.currentZoomIndex += 1, this.updateToolbar(), this.view.updateZoom());
      }
    }, {
      key: "setView",
      value: function value(e) {
        this.view.deactivate(), this.xmlEditor && this.xmlEditor.deactivate(), "document" == e.target.dataset.view ? this.view = this.viewDocument : "editor" == e.target.dataset.view ? this.view = this.viewEditor : "responsive" == e.target.dataset.view && (this.view = this.viewResponsive), this.updateToolbar(), this.view.activate(), this.view == this.viewEditor && this.xmlEditor.activate(), this.startLoading("Switching view ..."), this.updateDimensions(), this.controller.send("redoLayout", {}, this.view.viewIndex, this.view.redoLayoutCallback);
      }
    }]), e;
  }();
}, function (e, t, n) {
  "use strict";

  Object.defineProperty(t, "__esModule", {
    value: !0
  }), t.Controller = void 0;

  var r = function () {
    function e(e, t) {
      for (var n = 0; n < t.length; n++) {
        var r = t[n];
        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
      }
    }

    return function (t, n, r) {
      return n && e(t.prototype, n), r && e(t, r), t;
    };
  }(),
      i = (n(4), n(7)),
      o = function (e) {
    return e && e.__esModule ? e : {
      default: e
    };
  }(n(13));

  t.Controller = function (e) {
    function t(e, n, r) {
      return function (e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
      }(this, t), function (e, t) {
        if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !t || "object" != _typeof(t) && "function" != typeof t ? e : t;
      }(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e, n, r));
    }

    return function (e, t) {
      if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + _typeof(t));
      e.prototype = Object.create(t && t.prototype, {
        constructor: {
          value: e,
          enumerable: !1,
          writable: !0,
          configurable: !0
        }
      }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t);
    }(t, i.Messenger), r(t, [{
      key: "initWorker",
      value: function value() {
        this.settings = {
          pageHeight: 2970,
          pageWidth: 2100,
          pageMarginLeft: 50,
          pageMarginRight: 50,
          pageMarginTop: 50,
          pageMarginBottom: 50,
          scale: 100
        }, this.pageCount = 0, this.worker = new o.default(), this.worker.onmessage = this.onmessage;
      }
    }]), t;
  }();
}, function (e, t, n) {
  "use strict";

  Object.defineProperty(t, "__esModule", {
    value: !0
  }), t.GenericView = void 0;

  var r = function () {
    function e(e, t) {
      for (var n = 0; n < t.length; n++) {
        var r = t[n];
        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
      }
    }

    return function (t, n, r) {
      return n && e(t.prototype, n), r && e(t, r), t;
    };
  }(),
      i = n(5),
      o = n(1);

  t.GenericView = function () {
    function e(t, n, r) {
      if (function (e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
      }(this, e), !(t && t instanceof HTMLDivElement)) throw "All GenericView objects must be initialized with 'div' parameter that is a HTMLDivElement element.";
      if (this.element = t, !(n && n instanceof i.Controller)) throw "All GenericView objects must be initialized with a 'controller' parameter that is an instance of the Controller class.";
      this.controller = n, this.options = r, this.viewIndex = this.controller.register(this), this.updateDimensions(), this.ui = {}, this.eventManager = new o.EventManager({
        parent: this
      }), this.bindListeners(), this.events = new o.Events(), this.currentPage = 1, this.currentZoomIndex = this.options.defaultZoom, this.currentScale = this.controller.app.zoomLevels[this.currentZoomIndex], this.currentId = null;
    }

    return r(e, [{
      key: "destroy",
      value: function value() {
        this.eventManager.unbindAll(), this.events.unsubscribeAll(), document.removeEventListener("mousemove", this.boundMouseMove), document.removeEventListener("mouseup", this.boundMouseUp), document.removeEventListener("touchmove", this.boundMouseMove), document.removeEventListener("touchend", this.boundMouseUp);
      }
    }, {
      key: "updateDimensions",
      value: function value() {
        this.element.style.height = this.element.parentElement.style.height, this.element.style.width = this.element.parentElement.style.width;
      }
    }, {
      key: "parseAndScaleSVG",
      value: function value(e, t, n) {
        var r = new DOMParser().parseFromString(e, "text/xml");
        return r.firstChild.setAttribute("height", t + "px"), r.firstChild.setAttribute("width", n + "px"), r.firstChild;
      }
    }, {
      key: "bindListeners",
      value: function value() {
        var e = this;
        this.boundMouseMove = function (t) {
          return e.mouseMoveListener(t);
        }, this.boundMouseUp = function (t) {
          return e.mouseUpListener(t);
        }, this.boundResize = function (t) {
          return e.resizeComponents(t);
        };
      }
    }, {
      key: "activate",
      value: function value() {
        this.element.style.display = "block";
      }
    }, {
      key: "deactivate",
      value: function value() {
        this.element.style.display = "none";
      }
    }, {
      key: "updateView",
      value: function value() {}
    }, {
      key: "updateZoom",
      value: function value() {
        this.currentScale = this.controller.app.zoomLevels[this.currentZoomIndex];
      }
    }, {
      key: "updatePage",
      value: function value() {}
    }, {
      key: "onResize",
      value: function value() {
        this.updateDimensions();
      }
    }, {
      key: "setCurrent",
      value: function value(e) {
        this.currentId = e, this.controller.send("getPageWithElement", {
          id: e
        }, this.viewIndex, this.getPageWithElementCallback);
      }
    }, {
      key: "loadDataCallback",
      value: function value(e) {
        this.controller.pageCount = e.pageCount, this.currentPage > this.controller.pageCount && (this.currentPage = this.controller.pageCount), this.controller.app.updateToolbar(), this.updateView();
      }
    }, {
      key: "redoLayoutCallback",
      value: function value(e) {
        this.controller.app.endLoading(), this.controller.pageCount = e.pageCount, this.currentPage = 1, this.controller.app.updateToolbar(), this.updateView();
      }
    }, {
      key: "getPageWithElementCallback",
      value: function value(e) {}
    }]), e;
  }();
}, function (e, t, n) {
  "use strict";

  Object.defineProperty(t, "__esModule", {
    value: !0
  }), t.Messenger = void 0;

  var r = function () {
    function e(e, t) {
      for (var n = 0; n < t.length; n++) {
        var r = t[n];
        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
      }
    }

    return function (t, n, r) {
      return n && e(t.prototype, n), r && e(t, r), t;
    };
  }(),
      i = n(4);

  t.Messenger = function () {
    function e(t, n, r) {
      var o = this;
      if (function (e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
      }(this, e), !(t && t instanceof i.App)) throw "All Messenger objects must be initialized with a 'app' parameter that is an instance of the App class.";
      this.app = t, this.options = r, this.ticketId = 0, this.calllist = {}, this.noCallback = "no-callback", this.views = [], this.loadCallback = n, this.initWorker(), this.worker.onmessage = function (e) {
        var t = e.data[0],
            n = e.data[1],
            r = e.data[2];
        if ("error" === t) console.log("Error message from worker:", r);else if ("loaded" === t) o.loadCallback.call(o.app);else if (o.calllist[n].callback === o.noCallback) ;else if (o.calllist[n].callback) {
          var i = o.calllist[n].callback;
          if (-1 === o.calllist[n].viewIndex) i.call(o.app, r);else {
            var a = o.views[o.calllist[n].viewIndex];
            i.call(a, r);
          }
        } else console.log("Unexpected worker case:", e);
        n && delete o.calllist[n];
      };
    }

    return r(e, [{
      key: "initWorker",
      value: function value() {}
    }, {
      key: "updateUI",
      value: function value() {
        app.update;
      }
    }, {
      key: "register",
      value: function value(e) {
        return this.views.push(e) - 1;
      }
    }, {
      key: "send",
      value: function value(e, t, n, r) {
        if (-1 !== n && !(n in this.views)) return console.error("That view has not been registered yet!");
        this.calllist[this.ticketId] = {
          callback: r || this.noCallback,
          viewIndex: n
        }, this.worker.postMessage([e, this.ticketId, t]), this.ticketId++;
      }
    }]), e;
  }();
}, function (e, t, n) {
  "use strict";

  var r = window.URL || window.webkitURL;

  e.exports = function (e, t) {
    try {
      try {
        var n;

        try {
          (n = new (window.BlobBuilder || window.WebKitBlobBuilder || window.MozBlobBuilder || window.MSBlobBuilder)()).append(e), n = n.getBlob();
        } catch (t) {
          n = new Blob([e]);
        }

        return new Worker(r.createObjectURL(n));
      } catch (t) {
        return new Worker("data:application/javascript," + encodeURIComponent(e));
      }
    } catch (e) {
      if (!t) throw Error("Inline worker is not supported");
      return new Worker(t);
    }
  };
}, function (e, t, n) {
  "use strict";

  Object.defineProperty(t, "__esModule", {
    value: !0
  }), t.ResponsiveView = void 0;

  var r = function () {
    function e(e, t) {
      for (var n = 0; n < t.length; n++) {
        var r = t[n];
        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
      }
    }

    return function (t, n, r) {
      return n && e(t.prototype, n), r && e(t, r), t;
    };
  }(),
      i = function e(t, n, r) {
    null === t && (t = Function.prototype);
    var i = Object.getOwnPropertyDescriptor(t, n);

    if (void 0 === i) {
      var o = Object.getPrototypeOf(t);
      return null === o ? void 0 : e(o, n, r);
    }

    if ("value" in i) return i.value;
    var a = i.get;
    return void 0 !== a ? a.call(r) : void 0;
  },
      o = (n(5), n(1)),
      a = n(6);

  t.ResponsiveView = function (e) {
    function t(e, n, r) {
      !function (e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
      }(this, t);

      var i = function (e, t) {
        if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !t || "object" != _typeof(t) && "function" != typeof t ? e : t;
      }(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e, n, r));

      return i.ui.svgWrapper = (0, o.elt)("div", {
        class: "vrv-ui-svg-wrapper",
        style: "position: absolute"
      }), i.element.appendChild(i.ui.svgWrapper), i.updateDimensions(), i.deactivate(), i;
    }

    return function (e, t) {
      if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + _typeof(t));
      e.prototype = Object.create(t && t.prototype, {
        constructor: {
          value: e,
          enumerable: !1,
          writable: !0,
          configurable: !0
        }
      }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t);
    }(t, a.GenericView), r(t, [{
      key: "activate",
      value: function value() {
        i(t.prototype.__proto__ || Object.getPrototypeOf(t.prototype), "activate", this).call(this), this.controller.settings.breaks = "auto", this.controller.settings.noFooter = !0, this.controller.settings.adjustPageHeight = !0, this.controller.settings.scale = this.currentScale, this.controller.settings.pageHeight = this.element.clientHeight * (100 / this.controller.settings.scale), this.controller.settings.pageWidth = this.element.clientWidth * (100 / this.controller.settings.scale), this.controller.send("setOptions", {
          options: this.controller.settings
        }, this.viewIndex);
      }
    }, {
      key: "updateDimensions",
      value: function value() {
        i(t.prototype.__proto__ || Object.getPrototypeOf(t.prototype), "updateDimensions", this).call(this), this.ui && this.element && (this.controller.settings.scale = this.currentScale, this.controller.settings.pageHeight = this.element.clientHeight * (100 / this.controller.settings.scale), this.controller.settings.pageWidth = this.element.clientWidth * (100 / this.controller.settings.scale));
      }
    }, {
      key: "updateView",
      value: function value() {
        this.controller.app.endLoading(), this.controller.send("renderToSVG", {
          pageIndex: this.currentPage
        }, this.viewIndex, this.renderToSVGCallback);
      }
    }, {
      key: "updateZoom",
      value: function value() {
        i(t.prototype.__proto__ || Object.getPrototypeOf(t.prototype), "updateZoom", this).call(this), this.updateDimensions(), this.controller.send("setOptions", {
          options: this.controller.settings
        }, this.viewIndex), this.controller.pageCount > 0 && this.controller.send("redoLayout", {
          options: this.controller.settings
        }, this.viewIndex, this.redoLayoutCallback);
      }
    }, {
      key: "updatePage",
      value: function value() {
        this.controller.send("renderToSVG", {
          pageIndex: this.currentPage
        }, this.viewIndex, this.renderToSVGCallback);
      }
    }, {
      key: "onResize",
      value: function value() {
        i(t.prototype.__proto__ || Object.getPrototypeOf(t.prototype), "onResize", this).call(this), this.controller.send("setOptions", {
          options: this.controller.settings
        }, this.viewIndex), this.controller.pageCount > 0 && this.controller.send("redoLayout", {
          options: this.controller.settings
        }, this.viewIndex, this.redoLayoutCallback);
      }
    }, {
      key: "renderToSVGCallback",
      value: function value(e) {
        this.controller.app.endLoading(), this.ui.svgWrapper.innerHTML = e.svg;
      }
    }, {
      key: "redoLayoutCallback",
      value: function value(e) {
        this.controller.pageCount = e.pageCount, this.currentPage > this.controller.pageCount && (this.currentPage = this.controller.pageCount), this.controller.app.updateToolbar(), this.controller.send("renderToSVG", {
          pageIndex: this.currentPage
        }, this.viewIndex, this.renderToSVGCallback);
      }
    }, {
      key: "syncScroll",
      value: function value(e) {
        this.ui.svgWrapper.scrollTop = e.target.scrollTop, this.ui.svgWrapper.scrollLeft = e.target.scrollLeft;
      }
    }]), t;
  }();
}, function (e, t, n) {
  "use strict";

  Object.defineProperty(t, "__esModule", {
    value: !0
  }), t.Validator = void 0;

  var r = function () {
    function e(e, t) {
      for (var n = 0; n < t.length; n++) {
        var r = t[n];
        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
      }
    }

    return function (t, n, r) {
      return n && e(t.prototype, n), r && e(t, r), t;
    };
  }(),
      i = (n(4), n(7)),
      o = n(16),
      a = function (e) {
    return e && e.__esModule ? e : {
      default: e
    };
  }(n(17));

  t.Validator = function (e) {
    function t(e, n, r) {
      !function (e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
      }(this, t);

      var i = function (e, t) {
        if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !t || "object" != _typeof(t) && "function" != typeof t ? e : t;
      }(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e, n, r));

      return i.rng = new o.RNGLoader(i), i;
    }

    return function (e, t) {
      if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + _typeof(t));
      e.prototype = Object.create(t && t.prototype, {
        constructor: {
          value: e,
          enumerable: !1,
          writable: !0,
          configurable: !0
        }
      }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t);
    }(t, i.Messenger), r(t, [{
      key: "initWorker",
      value: function value() {
        this.worker = new a.default(), this.worker.onmessage = this.onmessage;
      }
    }, {
      key: "setRelaxNGSchemaURI",
      value: function value(e, t) {
        var n = this;
        fetch("https://music-encoding.org/schema/4.0.0/mei-all.rng").then(function (e) {
          return e.text();
        }).then(function (e) {
          return n.send("setRelaxNGSchema", {
            schema: e
          }, -1), e;
        }).then(function (e) {
          return new window.DOMParser().parseFromString(e, "text/xml");
        }).then(function (e) {
          n.rng.setRelaxNGSchema(e), t.call(n.app);
        }).catch(function (e) {
          console.log("Request failed", e);
        });
      }
    }]), t;
  }();
}, function (e, t, n) {
  !function (e) {
    "use strict";

    var t = e.Pos;

    function n(e, t) {
      return e.line - t.line || e.ch - t.ch;
    }

    var r = "A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD",
        i = new RegExp("<(/?)([" + r + "][" + r + "-:.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*)", "g");

    function o(e, t, n, r) {
      this.line = t, this.ch = n, this.cm = e, this.text = e.getLine(t), this.min = r ? Math.max(r.from, e.firstLine()) : e.firstLine(), this.max = r ? Math.min(r.to - 1, e.lastLine()) : e.lastLine();
    }

    function a(e, n) {
      var r = e.cm.getTokenTypeAt(t(e.line, n));
      return r && /\btag\b/.test(r);
    }

    function s(e) {
      if (!(e.line >= e.max)) return e.ch = 0, e.text = e.cm.getLine(++e.line), !0;
    }

    function l(e) {
      if (!(e.line <= e.min)) return e.text = e.cm.getLine(--e.line), e.ch = e.text.length, !0;
    }

    function u(e) {
      for (;;) {
        var t = e.text.indexOf(">", e.ch);

        if (-1 == t) {
          if (s(e)) continue;
          return;
        }

        if (a(e, t + 1)) {
          var n = e.text.lastIndexOf("/", t),
              r = n > -1 && !/\S/.test(e.text.slice(n + 1, t));
          return e.ch = t + 1, r ? "selfClose" : "regular";
        }

        e.ch = t + 1;
      }
    }

    function c(e) {
      for (;;) {
        var t = e.ch ? e.text.lastIndexOf("<", e.ch - 1) : -1;

        if (-1 == t) {
          if (l(e)) continue;
          return;
        }

        if (a(e, t + 1)) {
          i.lastIndex = t, e.ch = t;
          var n = i.exec(e.text);
          if (n && n.index == t) return n;
        } else e.ch = t;
      }
    }

    function h(e) {
      for (;;) {
        i.lastIndex = e.ch;
        var t = i.exec(e.text);

        if (!t) {
          if (s(e)) continue;
          return;
        }

        if (a(e, t.index + 1)) return e.ch = t.index + t[0].length, t;
        e.ch = t.index + 1;
      }
    }

    function d(e) {
      for (;;) {
        var t = e.ch ? e.text.lastIndexOf(">", e.ch - 1) : -1;

        if (-1 == t) {
          if (l(e)) continue;
          return;
        }

        if (a(e, t + 1)) {
          var n = e.text.lastIndexOf("/", t),
              r = n > -1 && !/\S/.test(e.text.slice(n + 1, t));
          return e.ch = t + 1, r ? "selfClose" : "regular";
        }

        e.ch = t;
      }
    }

    function f(e, n) {
      for (var r = [];;) {
        var i,
            o = h(e),
            a = e.line,
            s = e.ch - (o ? o[0].length : 0);
        if (!o || !(i = u(e))) return;
        if ("selfClose" != i) if (o[1]) {
          for (var l = r.length - 1; l >= 0; --l) {
            if (r[l] == o[2]) {
              r.length = l;
              break;
            }
          }

          if (l < 0 && (!n || n == o[2])) return {
            tag: o[2],
            from: t(a, s),
            to: t(e.line, e.ch)
          };
        } else r.push(o[2]);
      }
    }

    function p(e, n) {
      for (var r = [];;) {
        var i = d(e);
        if (!i) return;

        if ("selfClose" != i) {
          var o = e.line,
              a = e.ch,
              s = c(e);
          if (!s) return;
          if (s[1]) r.push(s[2]);else {
            for (var l = r.length - 1; l >= 0; --l) {
              if (r[l] == s[2]) {
                r.length = l;
                break;
              }
            }

            if (l < 0 && (!n || n == s[2])) return {
              tag: s[2],
              from: t(e.line, e.ch),
              to: t(o, a)
            };
          }
        } else c(e);
      }
    }

    e.registerHelper("fold", "xml", function (e, r) {
      for (var i = new o(e, r.line, 0);;) {
        var a = h(i);
        if (!a || i.line != r.line) return;
        var s = u(i);
        if (!s) return;

        if (!a[1] && "selfClose" != s) {
          var l = t(i.line, i.ch),
              c = f(i, a[2]);
          return c && n(c.from, l) > 0 ? {
            from: l,
            to: c.from
          } : null;
        }
      }
    }), e.findMatchingTag = function (e, r, i) {
      var a = new o(e, r.line, r.ch, i);

      if (-1 != a.text.indexOf(">") || -1 != a.text.indexOf("<")) {
        var s = u(a),
            l = s && t(a.line, a.ch),
            h = s && c(a);

        if (s && h && !(n(a, r) > 0)) {
          var d = {
            from: t(a.line, a.ch),
            to: l,
            tag: h[2]
          };
          return "selfClose" == s ? {
            open: d,
            close: null,
            at: "open"
          } : h[1] ? {
            open: p(a, h[2]),
            close: d,
            at: "close"
          } : (a = new o(e, l.line, l.ch, i), {
            open: d,
            close: f(a, h[2]),
            at: "open"
          });
        }
      }
    }, e.findEnclosingTag = function (e, t, n, r) {
      for (var i = new o(e, t.line, t.ch, n);;) {
        var a = p(i, r);
        if (!a) break;
        var s = new o(e, t.line, t.ch, n),
            l = f(s, a.tag);
        if (l) return {
          open: a,
          close: l
        };
      }
    }, e.scanForClosingTag = function (e, t, n, r) {
      var i = new o(e, t.line, t.ch, r ? {
        from: 0,
        to: r
      } : null);
      return f(i, n);
    };
  }(n(0));
}, function (e, t, n) {
  !function (e) {
    "use strict";

    function t(t, n, i, o) {
      if (i && i.call) {
        var a = i;
        i = null;
      } else var a = r(t, i, "rangeFinder");

      "number" == typeof n && (n = e.Pos(n, 0));
      var s = r(t, i, "minFoldSize");

      function l(e) {
        var r = a(t, n);
        if (!r || r.to.line - r.from.line < s) return null;

        for (var i = t.findMarksAt(r.from), l = 0; l < i.length; ++l) {
          if (i[l].__isFold && "fold" !== o) {
            if (!e) return null;
            r.cleared = !0, i[l].clear();
          }
        }

        return r;
      }

      var u = l(!0);
      if (r(t, i, "scanUp")) for (; !u && n.line > t.firstLine();) {
        n = e.Pos(n.line - 1, 0), u = l(!1);
      }

      if (u && !u.cleared && "unfold" !== o) {
        var c = function (e, t) {
          var n = r(e, t, "widget");

          if ("string" == typeof n) {
            var i = document.createTextNode(n);
            (n = document.createElement("span")).appendChild(i), n.className = "CodeMirror-foldmarker";
          } else n && (n = n.cloneNode(!0));

          return n;
        }(t, i);

        e.on(c, "mousedown", function (t) {
          h.clear(), e.e_preventDefault(t);
        });
        var h = t.markText(u.from, u.to, {
          replacedWith: c,
          clearOnEnter: r(t, i, "clearOnEnter"),
          __isFold: !0
        });
        h.on("clear", function (n, r) {
          e.signal(t, "unfold", t, n, r);
        }), e.signal(t, "fold", t, u.from, u.to);
      }
    }

    e.newFoldFunction = function (e, n) {
      return function (r, i) {
        t(r, i, {
          rangeFinder: e,
          widget: n
        });
      };
    }, e.defineExtension("foldCode", function (e, n, r) {
      t(this, e, n, r);
    }), e.defineExtension("isFolded", function (e) {
      for (var t = this.findMarksAt(e), n = 0; n < t.length; ++n) {
        if (t[n].__isFold) return !0;
      }
    }), e.commands.toggleFold = function (e) {
      e.foldCode(e.getCursor());
    }, e.commands.fold = function (e) {
      e.foldCode(e.getCursor(), null, "fold");
    }, e.commands.unfold = function (e) {
      e.foldCode(e.getCursor(), null, "unfold");
    }, e.commands.foldAll = function (t) {
      t.operation(function () {
        for (var n = t.firstLine(), r = t.lastLine(); n <= r; n++) {
          t.foldCode(e.Pos(n, 0), null, "fold");
        }
      });
    }, e.commands.unfoldAll = function (t) {
      t.operation(function () {
        for (var n = t.firstLine(), r = t.lastLine(); n <= r; n++) {
          t.foldCode(e.Pos(n, 0), null, "unfold");
        }
      });
    }, e.registerHelper("fold", "combine", function () {
      var e = Array.prototype.slice.call(arguments, 0);
      return function (t, n) {
        for (var r = 0; r < e.length; ++r) {
          var i = e[r](t, n);
          if (i) return i;
        }
      };
    }), e.registerHelper("fold", "auto", function (e, t) {
      for (var n = e.getHelpers(t, "fold"), r = 0; r < n.length; r++) {
        var i = n[r](e, t);
        if (i) return i;
      }
    });
    var n = {
      rangeFinder: e.fold.auto,
      widget: "↔",
      minFoldSize: 0,
      scanUp: !1,
      clearOnEnter: !0
    };

    function r(e, t, r) {
      if (t && void 0 !== t[r]) return t[r];
      var i = e.options.foldOptions;
      return i && void 0 !== i[r] ? i[r] : n[r];
    }

    e.defineOption("foldOptions", null), e.defineExtension("foldOption", function (e, t) {
      return r(this, e, t);
    });
  }(n(0));
}, function (e, t, n) {
  "use strict";

  e.exports = function () {
    return n(8)('!function(e){var o={};function t(r){if(o[r])return o[r].exports;var n=o[r]={i:r,l:!1,exports:{}};return e[r].call(n.exports,n,n.exports,t),n.l=!0,n.exports}t.m=e,t.c=o,t.d=function(e,o,r){t.o(e,o)||Object.defineProperty(e,o,{enumerable:!0,get:r})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,o){if(1&o&&(e=t(e)),8&o)return e;if(4&o&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(t.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&o&&"string"!=typeof e)for(var n in e)t.d(r,n,function(o){return e[o]}.bind(null,n));return r},t.n=function(e){var o=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(o,"a",o),o},t.o=function(e,o){return Object.prototype.hasOwnProperty.call(e,o)},t.p="",t(t.s=0)}([function(e,o){const t="https://www.verovio.org/javascript/develop";function r(e,o,t){postMessage([e,o,t])}self.Module={locateFile:function(e){return console.log(e),`${t}/${e}`},onRuntimeInitialized:function(){onLoad()}},self.importScripts(`${t}/verovio-toolkit-wasm.js`),self.onLoad=function(){self.vrvToolkit=new verovio.toolkit,console.log(`Verovio (WASM) ${self.vrvToolkit.getVersion()}`),r("loaded",!1,{})},self.vrvToolkit=null,self.addEventListener("message",function(e){var o=e.data[0],t=e.data[1],n=e.data[2];if(vrvToolkit)switch(o){case"edit":try{vrvToolkit.edit(n.action);vrvToolkit.redoPagePitchPosLayout();var a=vrvToolkit.renderToSVG(n.pageIndex);r("edit",t,{pageIndex:n.pageIndex,svg:a,createOverlay:!1})}catch(e){r("error",t,{error:"Edit failed:"+e})}break;case"getElementAttr":r(o+"-ok",t,{elementAttr:vrvToolkit.getElementAttr(n.id)});break;case"getMEI":r(o+"-ok",t,{mei:vrvToolkit.getMEI(-1,!0)});break;case"getOptions":r(o+"-ok",t,{options:vrvToolkit.getOptions(n.default)});break;case"getPageCount":r(o+"-ok",t,{pageCount:vrvToolkit.getPageCount()});break;case"getPageWithElement":r(o+"-ok",t,{pageWithElement:vrvToolkit.getPageWithElement(n.id),id:n.id});break;case"loadData":vrvToolkit.loadData(n.mei),r(o+"-ok",t,{pageCount:vrvToolkit.getPageCount()});break;case"redoLayout":vrvToolkit.redoLayout(),r(o+"-ok",t,{pageCount:vrvToolkit.getPageCount()});break;case"redoPagePitchPosLayout":vrvToolkit.redoPagePitchPosLayout();break;case"renderToSVG":try{a=vrvToolkit.renderToSVG(n.pageIndex);r(o+"-ok",t,{pageIndex:n.pageIndex,svg:a,createOverlay:void 0===n.forceOverlay||n.forceOverlay})}catch(e){r("error",t,{error:"Render of page "+n.pageIndex+" failed:"+e})}break;case"setOptions":vrvToolkit.setOptions(n.options);break;default:r("error",t,{error:"Did not recognize input"+e.data})}else r("error",t,{error:"The verovio-toolkit has not finished loading yet!"})},!1)}]);', n.p + "verovio-worker.js");
  };
}, function (e, t, n) {
  "use strict";

  Object.defineProperty(t, "__esModule", {
    value: !0
  }), t.DocumentView = void 0;

  var r = function () {
    function e(e, t) {
      for (var n = 0; n < t.length; n++) {
        var r = t[n];
        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
      }
    }

    return function (t, n, r) {
      return n && e(t.prototype, n), r && e(t, r), t;
    };
  }(),
      i = function e(t, n, r) {
    null === t && (t = Function.prototype);
    var i = Object.getOwnPropertyDescriptor(t, n);

    if (void 0 === i) {
      var o = Object.getPrototypeOf(t);
      return null === o ? void 0 : e(o, n, r);
    }

    if ("value" in i) return i.value;
    var a = i.get;
    return void 0 !== a ? a.call(r) : void 0;
  },
      o = (n(5), n(1)),
      a = n(6);

  t.DocumentView = function (e) {
    function t(e, n, r) {
      !function (e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
      }(this, t);

      var i = function (e, t) {
        if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !t || "object" != _typeof(t) && "function" != typeof t ? e : t;
      }(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e, n, r));

      i.ui.docWrapper = (0, o.elt)("div", {
        class: "vrv-ui-doc-wrapper",
        style: "position: absolute"
      }), i.element.appendChild(i.ui.docWrapper), i.updateDimensions(), i.observer;

      try {
        i.observer = new IntersectionObserver(i.handleObserver), i.observer.view = i, i.pruning = 0, i.observer.pruningMargin = 10, i.observer.view = i;
      } catch (e) {
        console.info("IntersectionObserver support is missing - loading all pages");
      }

      return i.deactivate(), i;
    }

    return function (e, t) {
      if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + _typeof(t));
      e.prototype = Object.create(t && t.prototype, {
        constructor: {
          value: e,
          enumerable: !1,
          writable: !0,
          configurable: !0
        }
      }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t);
    }(t, a.GenericView), r(t, [{
      key: "activate",
      value: function value() {
        i(t.prototype.__proto__ || Object.getPrototypeOf(t.prototype), "activate", this).call(this), this.controller.settings.breaks = "encoded", this.controller.settings.noFooter = !1, this.controller.settings.adjustPageHeight = !1, this.controller.settings.scale = 100, this.controller.settings.pageHeight = 2970, this.controller.settings.pageWidth = 2100, this.controller.send("setOptions", {
          options: this.controller.settings
        }, this.viewIndex);
      }
    }, {
      key: "updateDimensions",
      value: function value() {
        if (i(t.prototype.__proto__ || Object.getPrototypeOf(t.prototype), "updateDimensions", this).call(this), this.ui && this.ui.docWrapper) {
          this.ui.currentDocMargin = this.options.documentViewMargin * this.currentScale / 100, this.ui.currentPageWidth = this.controller.settings.pageWidth * this.currentScale / 100;
          var e = this.ui.currentPageWidth + 2 * this.ui.currentDocMargin + 2 * this.options.documentViewPageBorder,
              n = parseInt(this.element.parentElement.style.width, 10);
          this.ui.currentDocWidth = Math.max(n, e), this.ui.docWrapper.style.width = this.ui.currentDocWidth + "px", this.ui.currentPageHeight = this.controller.settings.pageHeight * this.currentScale / 100;
          var r = (this.ui.currentPageHeight + this.ui.currentDocMargin + 2 * this.options.documentViewPageBorder) * this.controller.pageCount + this.ui.currentDocMargin,
              o = parseInt(this.element.parentElement.style.height, 10);
          this.ui.currentDocHeight = Math.max(o, r), this.ui.docWrapper.style.height = this.ui.currentDocHeight + "px";
        }
      }
    }, {
      key: "updateView",
      value: function value() {
        for (; this.ui.docWrapper.firstChild;) {
          this.ui.docWrapper.firstChild.remove();
        }

        this.updateDimensions(), this.controller.app.endLoading(), this.observer && (this.observer.lastPageIn = 0);

        for (var e = 0; e < this.controller.pageCount; e++) {
          var t = (0, o.elt)("div", {
            class: "vrv-ui-page-wrapper"
          });

          if (this.ui.docWrapper.appendChild(t), !this.options.documentViewSVG) {
            var n = (0, o.elt)("canvas", {
              class: ""
            });
            t.appendChild(n);
          }

          t.style.height = this.ui.currentPageHeight + "px", t.style.width = this.ui.currentPageWidth + "px", t.style.marginTop = this.ui.currentDocMargin + "px", t.style.marginBottom = this.ui.currentDocMargin + "px", t.style.border = "solid " + this.options.documentViewPageBorder + "px lightgray", t.dataset.page = e + 1, this.observer ? this.observer.observe(t) : this.controller.send("renderToSVG", {
            pageIndex: e + 1
          }, this.viewIndex, this.renderToSVGCallback);
        }
      }
    }, {
      key: "updateZoom",
      value: function value() {
        if (i(t.prototype.__proto__ || Object.getPrototypeOf(t.prototype), "updateZoom", this).call(this), this.options.documentViewSVG) {
          this.updateDimensions();

          for (var e = 0; e < this.controller.pageCount; e++) {
            var n = this.ui.docWrapper.children[e];
            n.style.height = this.ui.currentPageHeight + "px", n.style.width = this.ui.currentPageWidth + "px", n.style.marginTop = this.ui.currentDocMargin + "px", n.style.marginBottom = this.ui.currentDocMargin + "px", n.firstChild && n.firstChild && (n.firstChild.setAttribute("height", this.ui.currentPageHeight + "px"), n.firstChild.setAttribute("width", this.ui.currentPageWidth + "px"));
          }
        } else this.updateView();
      }
    }, {
      key: "renderToSVGCallback",
      value: function value(e) {
        var t = this.ui.docWrapper.children[e.pageIndex - 1];

        if (this.options.documentViewSVG) {
          var n = this.parseAndScaleSVG(e.svg, this.ui.currentPageHeight, this.ui.currentPageWidth);
          this.ui.docWrapper.children[e.pageIndex - 1].appendChild(n), clearTimeout(this.pruning);
          var r = this;
          this.pruning = setTimeout(function () {
            r.pruneDocument();
          }, 200);
        } else {
          var i = t.firstElementChild,
              o = i.getContext("2d"),
              a = self.URL || self.webkitURL,
              s = new Image(),
              l = new Blob(["" + e.svg], {
            type: "image/svg+xml"
          }),
              u = a.createObjectURL(l),
              c = this.controller.settings.pageHeight,
              h = this.controller.settings.pageWidth;
          i.height = this.ui.currentPageHeight, i.width = this.ui.currentPageWidth, s.onload = function () {
            o.drawImage(s, 0, 0, h, c, 0, 0, i.width, i.height);
          }, s.src = u;
        }
      }
    }, {
      key: "handleObserver",
      value: function value(e, t) {
        var n = !0,
            r = !1,
            i = void 0;

        try {
          for (var o, a = e[Symbol.iterator](); !(n = (o = a.next()).done); n = !0) {
            var s = o.value;
            s.isIntersecting && (t.view.loadPage(s.target), t.view.loadPage(s.target.nextSibling), t.lastPageIn = parseInt(s.target.dataset.page));
          }
        } catch (e) {
          r = !0, i = e;
        } finally {
          try {
            !n && a.return && a.return();
          } finally {
            if (r) throw i;
          }
        }
      }
    }, {
      key: "loadPage",
      value: function value(e) {
        null !== e && (e.dataset.loaded || (e.dataset.loaded = !0, this.controller.send("renderToSVG", {
          pageIndex: e.dataset.page
        }, this.viewIndex, this.renderToSVGCallback)));
      }
    }, {
      key: "updateSettings",
      value: function value(e) {
        this.controller.send("setOptions", {
          options: this.controller.settings
        }, this.viewIndex), e && this.renderCurrentPage();
      }
    }, {
      key: "pruneDocument",
      value: function value() {
        for (var e = 0; e < this.controller.pageCount; e++) {
          var t = this.ui.docWrapper.children[e];
          e < this.observer.lastPageIn - this.observer.pruningMargin && (delete t.dataset.loaded, t.innerHTML = ""), e > this.observer.lastPageIn + this.observer.pruningMargin && (delete t.dataset.loaded, t.innerHTML = "");
        }
      }
    }]), t;
  }();
}, function (e, t, n) {
  "use strict";

  Object.defineProperty(t, "__esModule", {
    value: !0
  }), t.EditorView = void 0;

  var r = function () {
    function e(e, t) {
      for (var n = 0; n < t.length; n++) {
        var r = t[n];
        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
      }
    }

    return function (t, n, r) {
      return n && e(t.prototype, n), r && e(t, r), t;
    };
  }(),
      i = n(9),
      o = n(1);

  t.EditorView = function (e) {
    function t(e, n, r) {
      !function (e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
      }(this, t);

      var i = function (e, t) {
        if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !t || "object" != _typeof(t) && "function" != typeof t ? e : t;
      }(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e, n, r));

      return i.ui.svgOverlay = (0, o.elt)("div", {
        class: "vrv-ui-svg-overlay",
        style: "position: absolute"
      }), i.element.appendChild(i.ui.svgOverlay), i.eventManager.bind(i.ui.svgOverlay, "scroll", i.syncScroll), i.eventManager.bind(i.ui.svgOverlay, "click", i.objectClickListener), i.mouseMoveTimer = !1, i.draggingActive = !1, i.highlightedCache = [], i.dragInfo = {}, i.deactivate(), i;
    }

    return function (e, t) {
      if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + _typeof(t));
      e.prototype = Object.create(t && t.prototype, {
        constructor: {
          value: e,
          enumerable: !1,
          writable: !0,
          configurable: !0
        }
      }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t);
    }(t, i.ResponsiveView), r(t, [{
      key: "activate",
      value: function value() {
        (function e(t, n, r) {
          null === t && (t = Function.prototype);
          var i = Object.getOwnPropertyDescriptor(t, n);

          if (void 0 === i) {
            var o = Object.getPrototypeOf(t);
            return null === o ? void 0 : e(o, n, r);
          }

          if ("value" in i) return i.value;
          var a = i.get;
          return void 0 !== a ? a.call(r) : void 0;
        })(t.prototype.__proto__ || Object.getPrototypeOf(t.prototype), "activate", this).call(this);
      }
    }, {
      key: "renderToSVGCallback",
      value: function value(e) {
        this.controller.app.endLoading(), this.ui.svgWrapper.innerHTML = e.svg, e.createOverlay && this.createOverlay(), this.reapplyHighlights();
      }
    }, {
      key: "getMEICallback",
      value: function value(e) {
        this.controller.app.updateData(e.mei, this.controller);
      }
    }, {
      key: "getPageWithElementCallback",
      value: function value(e) {
        e.pageWithElement > 0 && e.pageWithElement != this.currentPage && (this.currentPage = e.pageWithElement, this.updatePage()), this.resetHighlights(), this.activateHighlight(e.id);
      }
    }, {
      key: "createOverlay",
      value: function value() {
        this.ui.svgOverlay.innerHTML = this.ui.svgWrapper.innerHTML;
        var e = !0,
            t = !1,
            n = void 0;

        try {
          for (var r, i = this.ui.svgOverlay.querySelectorAll("g")[Symbol.iterator](); !(e = (r = i.next()).done); e = !0) {
            var o = r.value;
            o.style.strokeOpacity = 0, o.style.fillOpacity = 0;
          }
        } catch (e) {
          t = !0, n = e;
        } finally {
          try {
            !e && i.return && i.return();
          } finally {
            if (t) throw n;
          }
        }

        var a = !0,
            s = !1,
            l = void 0;

        try {
          for (var u, c = this.ui.svgOverlay.querySelectorAll("path")[Symbol.iterator](); !(a = (u = c.next()).done); a = !0) {
            var h = u.value;
            h.style.strokeOpacity = 0, h.style.fillOpacity = 0;
          }
        } catch (e) {
          s = !0, l = e;
        } finally {
          try {
            !a && c.return && c.return();
          } finally {
            if (s) throw l;
          }
        }

        this.ui.svgOverlay.querySelectorAll("text");

        for (var d = this.ui.svgOverlay.querySelectorAll(".note"), f = 0; f < d.length; f++) {
          var p = d[f];
          this.eventManager.bind(p, "mousedown", this.mouseDownListener), this.eventManager.bind(p, "touchstart", this.mouseDownListener);
        }

        this.reapplyHighlights();
      }
    }, {
      key: "commitChanges",
      value: function value(e) {
        for (var t = 0; t < this.highlightedCache.length; t++) {
          var n = this.highlightedCache[t],
              r = this.ui.svgOverlay.querySelector("#" + n),
              i = this.dragInfo.svgY + (e - this.dragInfo.initY) * this.dragInfo.pixPerPix;
          r.style.transform = "translate(" + [0, i] + ")";
          var o = {
            action: "drag",
            param: {
              elementId: n,
              x: parseInt(this.dragInfo.x),
              y: parseInt(i)
            }
          };
          this.controller.send("edit", {
            action: o,
            pageIndex: this.currentPage
          }, this.viewIndex, this.renderToSVGCallback);
        }
      }
    }, {
      key: "activateHighlight",
      value: function value(e) {
        -1 === this.highlightedCache.indexOf(e) && this.highlightedCache.push(e), this.reapplyHighlights();
      }
    }, {
      key: "reapplyHighlights",
      value: function value() {
        for (var e = 0; e < this.highlightedCache.length; e++) {
          var t = this.highlightedCache[e];
          this.highlightWithColor(this.ui.svgWrapper.querySelector("#" + t), "#f00");
        }
      }
    }, {
      key: "removeHighlight",
      value: function value(e) {
        var t = this.highlightedCache.indexOf(e);
        -1 !== t && (this.highlightWithColor(this.ui.svgWrapper.querySelector("#" + e), ""), this.highlightedCache.splice(t, 1));
      }
    }, {
      key: "resetHighlights",
      value: function value() {
        for (; this.highlightedCache[0];) {
          this.removeHighlight(this.highlightedCache[0]);
        }
      }
    }, {
      key: "highlightWithColor",
      value: function value(e, t) {
        if (e) {
          e.style.fill = t, e.style.stroke = t;

          for (var n = 0; n < e.children.length; n++) {
            this.highlightWithColor(e.children[n], t);
          }
        }
      }
    }, {
      key: "objectClickListener",
      value: function value(e) {
        var t = e.target.closest(".measure");
        t && this.events.publish("ObjectClicked", [e.target, t]), e.stopPropagation();
      }
    }, {
      key: "mouseDownListener",
      value: function value(e) {
        var t = e.target;

        if (t.closest(".note")) {
          var n = t.closest(".note").attributes.id.value;
          this.controller.app.updateCurrent(n, this.controller), this.resetHighlights(), this.activateHighlight(n);
          var r = t.closest("svg"),
              i = r.parentNode.closest("svg"),
              o = r.getAttribute("viewBox").split(" "),
              a = parseInt(o[3]) / parseInt(i.getAttribute("height"));
          this.dragInfo.x = parseInt(t.getAttribute("x")), this.dragInfo.svgY = parseInt(t.getAttribute("y")), this.dragInfo.initY = e.pageY, this.dragInfo.pixPerPix = a, document.addEventListener("mousemove", this.boundMouseMove), document.addEventListener("mouseup", this.boundMouseUp), document.addEventListener("touchmove", this.boundMouseMove), document.addEventListener("touchend", this.boundMouseUp);
        } else console.log(".note not found");
      }
    }, {
      key: "mouseMoveListener",
      value: function value(e) {
        if (!this.mouseMoveTimer) {
          var t = this,
              n = e;
          this.mouseMoveTimer = !0, setTimeout(function () {
            t.mouseMoveTimer = !1;

            for (var r = (n.pageY - t.dragInfo.initY) * t.dragInfo.pixPerPix, i = 0; i < t.highlightedCache.length; i++) {
              t.ui.svgOverlay.querySelector("#" + t.highlightedCache[i]).setAttribute("transform", "translate(0, " + r + ")");
            }

            t.draggingActive = !0, t.commitChanges(e.pageY);
          }, 50);
        }

        e.preventDefault();
      }
    }, {
      key: "mouseUpListener",
      value: function value(e) {
        document.removeEventListener("mousemove", this.boundMouseMove), document.removeEventListener("mouseup", this.boundMouseUp), document.removeEventListener("touchmove", this.boundMouseMove), document.removeEventListener("touchend", this.boundMouseUp), !0 === this.draggingActive && (this.draggingActive = !1, this.resetHighlights(), this.controller.send("setOptions", {
          options: this.controller.settings
        }, this.viewIndex), this.controller.send("redoLayout", {
          options: this.controller.settings
        }, this.viewIndex, this.redoLayoutCallback), this.controller.send("getMEI", {
          options: this.controller.settings
        }, this.viewIndex, this.getMEICallback));
      }
    }]), t;
  }();
}, function (e, t, n) {
  "use strict";

  Object.defineProperty(t, "__esModule", {
    value: !0
  });

  var r = function () {
    function e(e, t) {
      for (var n = 0; n < t.length; n++) {
        var r = t[n];
        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
      }
    }

    return function (t, n, r) {
      return n && e(t.prototype, n), r && e(t, r), t;
    };
  }();

  t.RNGLoader = function () {
    function e() {
      !function (e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
      }(this, e), this.rngns = "http://relaxng.org/ns/structure/1.0", this.tags = {};
    }

    return r(e, [{
      key: "setRelaxNGSchema",
      value: function value(e) {
        var t = this,
            n = this.collectDefinitions(e),
            r = {};
        Object.keys(n).map(function (e) {
          n[e].map(function (e) {
            t.findElements(n, e, r);
          });
        }), r["!top"] = this.findAllTopLevelElements(n, [], e), this.tags = this.sortObject(r);
      }
    }, {
      key: "collectDefinitions",
      value: function value(e) {
        var t,
            n,
            r,
            i = {},
            o = e.getElementsByTagNameNS(this.rngns, "define");

        for (t = 0; t < o.length; t += 1) {
          (i[n = (r = o.item(t)).getAttribute("name")] = i[n] || []).push(r);
        }

        return i;
      }
    }, {
      key: "followReference",
      value: function value(e, t, n, r) {
        var i = n.getAttribute("name").trim();
        -1 === t.indexOf(i) && (t.push(i), e[i].map(r), t.pop());
      }
    }, {
      key: "recurseRng",
      value: function value(e, t, n, r) {
        var i;
        if (this.isRng(n, "ref")) this.followReference(e, t, n, function (e) {
          r(e);
        });else for (i = n.firstElementChild; i;) {
          r(i), i = i.nextElementSibling;
        }
      }
    }, {
      key: "getAttributeValues",
      value: function value(e, t, n, r) {
        var i;
        if (this.isRng(n, "value")) i = n.textContent.trim(), -1 === r.indexOf(i) && r.push(i);else {
          var o = this;
          this.recurseRng(e, t, n, function (n) {
            o.getAttributeValues(e, t, n, r);
          });
        }
      }
    }, {
      key: "getNamesRecurse",
      value: function value(e, t) {
        var n;
        if (this.isRng(e, "name")) t.push(e.textContent);else if (this.isRng(e, "choice")) for (n = e.firstElementChild; n;) {
          this.getNamesRecurse(n, t), n = n.nextElementSibling;
        }
      }
    }, {
      key: "getNames",
      value: function value(e) {
        if (e.hasAttribute("name")) return [e.getAttribute("name")];

        for (var t = [], n = e.firstElementChild; n;) {
          this.getNamesRecurse(n, t), n = n.nextElementSibling;
        }

        return t;
      }
    }, {
      key: "defineElement",
      value: function value(e, t, n, r) {
        var i,
            o = [];
        if (this.isRng(n, "element")) (i = this.getNames(n)).map(function (e) {
          -1 === r.children.indexOf(e) && r.children.push(e);
        });else if (this.isRng(n, "attribute")) this.getAttributeValues(e, t, n, o), i = this.getNames(n), 0 === o.length && (o = null), i.map(function (e) {
          r.attrs[e] ? r.attrs[e] = r.attrs[e].concat(o) : r.attrs[e] = o;
        });else if (this.isRng(n, "text")) r.text = !0;else {
          var a = this;
          this.recurseRng(e, t, n, function (n) {
            a.defineElement(e, t, n, r);
          });
        }
      }
    }, {
      key: "sortObject",
      value: function value(e) {
        var t = {},
            n = Object.keys(e);
        return n.sort(), n.map(function (n) {
          t[n] = e[n];
        }), t;
      }
    }, {
      key: "sortAttributeValues",
      value: function value(e) {
        Object.keys(e).map(function (t) {
          var n = e[t];
          n && n.sort();
        });
      }
    }, {
      key: "findElements",
      value: function value(e, t, n) {
        var r, i;

        if (this.isRng(t, "element")) {
          for (i = {
            attrs: {},
            children: []
          }, r = t.firstElementChild; r;) {
            this.defineElement(e, [], r, i), r = r.nextElementSibling;
          }

          i.children.sort(), i.attrs = this.sortObject(i.attrs), this.sortAttributeValues(i.attrs), this.getNames(t).map(function (e) {
            n[e] = i;
          });
        } else for (r = t.firstElementChild; r;) {
          this.findElements(e, r, n), r = r.nextElementSibling;
        }
      }
    }, {
      key: "findTopLevelElements",
      value: function value(e, t, n, r) {
        if ("element" === n.localName) n.hasAttribute("name") && r.push(n.getAttribute("name"));else {
          var i = this;
          this.recurseRng(e, t, n, function (n) {
            i.findTopLevelElements(e, t, n, r);
          });
        }
      }
    }, {
      key: "findAllTopLevelElements",
      value: function value(e, t, n) {
        var r,
            i,
            o = [],
            a = n.getElementsByTagNameNS(this.rngns, "start");

        for (i = 0; i < a.length; i += 1) {
          r = a.item(i), this.findTopLevelElements(e, t, r, o);
        }

        return o;
      }
    }, {
      key: "isRng",
      value: function value(e, t) {
        return e.namespaceURI === this.rngns && e.localName === t;
      }
    }]), e;
  }();
}, function (e, t, n) {
  "use strict";

  e.exports = function () {
    return n(8)('!function(e){var t={};function o(r){if(t[r])return t[r].exports;var n=t[r]={i:r,l:!1,exports:{}};return e[r].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=e,o.c=t,o.d=function(e,t,r){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(o.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)o.d(r,n,function(t){return e[t]}.bind(null,n));return r},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="",o(o.s=0)}([function(e,t){var o,r;function n(e,t,o){postMessage([e,t,o])}self.Module={locateFile:function(e){return console.log(e),`https://www.verovio.org/javascript/validator/${e}`},onRuntimeInitialized:function(){onLoad()}},self.importScripts("https://www.verovio.org/javascript/validator/xml-validator.js"),self.onLoad=function(){Module.cwrap("set_schema","bool",["string"]);Module.cwrap("validate","string",["string"]),o=Module.cwrap("set_relaxNG_schema","bool",["string"]),r=Module.cwrap("validate_NG","string",["string"]),self.initialized=!0,console.log("XML Validator (WASM) loaded"),n("loaded",!1,{})},self.initialized=!1,self.addEventListener("message",function(e){var t=e.data[0],a=e.data[1],i=e.data[2];if(initialized)switch(t){case"setRelaxNGSchema":o(i.schema),console.log("Schema loaded");break;case"validateNG":n(t+"-ok",a,{validation:r(i.xml),text:i.xml});break;default:n("error",a,{error:"Did not recognize input "+e.data})}else n("error",a,{error:"The validator has not finished loading yet!"})},!1)}]);', n.p + "verovio-worker.js");
  };
}, function (e, t, n) {
  "use strict";

  Object.defineProperty(t, "__esModule", {
    value: !0
  }), t.XMLEditor = void 0;

  var r = function () {
    function e(e, t) {
      for (var n = 0; n < t.length; n++) {
        var r = t[n];
        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
      }
    }

    return function (t, n, r) {
      return n && e(t.prototype, n), r && e(t, r), t;
    };
  }(),
      i = n(10),
      o = n(1);

  n(19), n(22), n(24), n(26), n(28), n(30), n(31), n(12), n(32), n(11), n(33), n(34), n(35), n(36), n(37);
  var a = n(0);

  t.XMLEditor = function () {
    function e(t, n, r) {
      if (function (e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
      }(this, e), !(t && t instanceof HTMLDivElement)) throw "All XMLEditor objects must be initialized with 'div' parameter that is a HTMLDivElement element.";
      if (this.element = t, !(n && n instanceof i.Validator)) throw "All XMLEditor objects must be initialized with a 'validator' parameter that is an instance of the Valitor class.";
      this.validator = n, this.options = r, this.viewIndex = this.validator.register(this), this.ui = {}, this.ui.xmlvalid = (0, o.elt)("div", {
        class: "vrv-ui-xmlvalid"
      }), this.element.appendChild(this.ui.xmlvalid), this.ui.xmleditor = (0, o.elt)("textarea", {
        class: "",
        style: ""
      }), this.element.appendChild(this.ui.xmleditor), this.updateLinting = null, this.currentId = "", this.loaded = !1;
      var c = this;
      this.CMeditor = a.fromTextArea(this.ui.xmleditor, {
        lineNumbers: !0,
        readOnly: !1,
        autoCloseTags: !0,
        indentUnit: 4,
        mode: "xml",
        foldGutter: !0,
        styleActiveLine: !0,
        hintOptions: {
          schemaInfo: this.validator.tags
        },
        extraKeys: {
          "'<'": s,
          "'/'": l,
          "' '": u,
          "'='": u
        },
        gutters: ["CodeMirror-lint-markers", "CodeMirror-foldgutter"],
        lint: {
          caller: c,
          getAnnotations: this.validate,
          async: !0
        }
      }), this.CMeditor.on("cursorActivity", function (e) {
        c.onCursorActivity(e);
      }), this.deactivate();
    }

    return r(e, [{
      key: "updateDimensions",
      value: function value() {
        this.CMeditor.setSize(this.element.style.width, this.element.style.height);
      }
    }, {
      key: "activate",
      value: function value() {
        this.element.style.display = "block";
      }
    }, {
      key: "deactivate",
      value: function value() {
        this.element.style.display = "none";
      }
    }, {
      key: "updateView",
      value: function value() {}
    }, {
      key: "onResize",
      value: function value() {
        this.updateDimensions();
      }
    }, {
      key: "validate",
      value: function value(e, t, n) {
        if (n && n.caller && e) {
          var r = n.caller;
          r.ui.xmlvalid && (r.ui.xmlvalid.style.display = "none"), r.updateLinting = t, r.validator.send("validateNG", {
            xml: e
          }, r.viewIndex, r.validateCallback);
        }
      }
    }, {
      key: "setData",
      value: function value(e) {
        this.loaded = !1, this.CMeditor.setValue(e);
      }
    }, {
      key: "setCurrent",
      value: function value(e) {
        var t = this.CMeditor.getSearchCursor('xml:id="' + e + '"');
        t.findNext(), t.atOccurrence && (this.CMeditor.scrollIntoView({
          line: t.pos.from.line,
          char: 0
        }, 60), this.CMeditor.setCursor(t.from()));
      }
    }, {
      key: "onCursorActivity",
      value: function value(e) {
        var t = e.getCursor(),
            n = e.getLine(t.line).match(/.*xml:id=\"([^"]*)\".*/);
        n && (this.currentId !== n[1] && this.validator.app.updateCurrent(n[1], this), this.currentId = n[1]);
      }
    }, {
      key: "validateCallback",
      value: function value(e) {
        var t,
            n,
            r = [],
            i = 0;

        try {
          t = e.text.split("\n"), n = JSON.parse(e.validation);
        } catch (e) {
          return void console.log("could not parse json:", e);
        }

        for (; i < n.length;) {
          var o = Math.max(n[i].line - 1, 0);
          r.push({
            from: new a.Pos(o, 0),
            to: new a.Pos(o, t[o].length),
            severity: "error",
            message: n[i].message
          }), i += 1;
        }

        this.updateLinting(this.CMeditor, r), 0 == r.length && (this.loaded && this.validator.app.updateData(e.text, this), this.ui.xmlvalid.style.display = "block"), this.loaded = !0;
      }
    }]), e;
  }();

  function s(e, t) {
    e.getCursor();
    return t && !t() || setTimeout(function () {
      e.state.completionActive || a.showHint(e, a.hint.xml, {
        schemaInfo: a.schemaInfo,
        completeSingle: !1
      });
    }, 100), a.Pass;
  }

  function l(e) {
    return s(e, function () {
      var t = e.getCursor();
      return "<" == e.getRange(a.Pos(t.line, t.ch - 1), t);
    });
  }

  function u(e) {
    return s(e, function () {
      var t = e.getTokenAt(e.getCursor());
      return !!("string" != t.type || /['"]/.test(t.string.charAt(t.string.length - 1)) && 1 != t.string.length) && a.innerMode(e.getMode(), t.state).state.tagName;
    });
  }
}, function (e, t, n) {
  var r = n(20);
  "string" == typeof r && (r = [[e.i, r, ""]]);
  var i = {
    hmr: !0,
    transform: void 0,
    insertInto: void 0
  };
  n(3)(r, i);
  r.locals && (e.exports = r.locals);
}, function (e, t, n) {
  (e.exports = n(2)(!1)).push([e.i, "/* BASICS */\n.CodeMirror {\n  /* Set height, width, borders, and global font properties here */\n  font-family: monospace;\n  height: 300px;\n  color: black;\n  direction: ltr; }\n\n/* PADDING */\n.CodeMirror-lines {\n  padding: 4px 0;\n  /* Vertical padding around content */ }\n\n.CodeMirror pre {\n  padding: 0 4px;\n  /* Horizontal padding of content */ }\n\n.CodeMirror-scrollbar-filler, .CodeMirror-gutter-filler {\n  background-color: white;\n  /* The little square between H and V scrollbars */ }\n\n/* GUTTER */\n.CodeMirror-gutters {\n  border-right: 1px solid #ddd;\n  background-color: #f7f7f7;\n  white-space: nowrap; }\n\n.CodeMirror-linenumber {\n  padding: 0 3px 0 5px;\n  min-width: 20px;\n  text-align: right;\n  color: #999;\n  white-space: nowrap; }\n\n.CodeMirror-guttermarker {\n  color: black; }\n\n.CodeMirror-guttermarker-subtle {\n  color: #999; }\n\n/* CURSOR */\n.CodeMirror-cursor {\n  border-left: 1px solid black;\n  border-right: none;\n  width: 0; }\n\n/* Shown when moving in bi-directional text */\n.CodeMirror div.CodeMirror-secondarycursor {\n  border-left: 1px solid silver; }\n\n.cm-fat-cursor .CodeMirror-cursor {\n  width: auto;\n  border: 0 !important;\n  background: #7e7; }\n\n.cm-fat-cursor div.CodeMirror-cursors {\n  z-index: 1; }\n\n.cm-fat-cursor-mark {\n  background-color: rgba(20, 255, 20, 0.5);\n  -webkit-animation: blink 1.06s steps(1) infinite;\n  animation: blink 1.06s steps(1) infinite; }\n\n.cm-animate-fat-cursor {\n  width: auto;\n  border: 0;\n  -webkit-animation: blink 1.06s steps(1) infinite;\n  animation: blink 1.06s steps(1) infinite;\n  background-color: #7e7; }\n\n@-webkit-keyframes blink {\n  0% { }\n  50% {\n    background-color: transparent; }\n  100% { } }\n\n@keyframes blink {\n  0% { }\n  50% {\n    background-color: transparent; }\n  100% { } }\n\n/* Can style cursor different in overwrite (non-insert) mode */\n.cm-tab {\n  display: inline-block;\n  text-decoration: inherit; }\n\n.CodeMirror-rulers {\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: -50px;\n  bottom: -20px;\n  overflow: hidden; }\n\n.CodeMirror-ruler {\n  border-left: 1px solid #ccc;\n  top: 0;\n  bottom: 0;\n  position: absolute; }\n\n/* DEFAULT THEME */\n.cm-s-default .cm-header {\n  color: blue; }\n\n.cm-s-default .cm-quote {\n  color: #090; }\n\n.cm-negative {\n  color: #d44; }\n\n.cm-positive {\n  color: #292; }\n\n.cm-header, .cm-strong {\n  font-weight: bold; }\n\n.cm-em {\n  font-style: italic; }\n\n.cm-link {\n  text-decoration: underline; }\n\n.cm-strikethrough {\n  text-decoration: line-through; }\n\n.cm-s-default .cm-keyword {\n  color: #708; }\n\n.cm-s-default .cm-atom {\n  color: #219; }\n\n.cm-s-default .cm-number {\n  color: #164; }\n\n.cm-s-default .cm-def {\n  color: #00f; }\n\n.cm-s-default .cm-variable-2 {\n  color: #05a; }\n\n.cm-s-default .cm-variable-3, .cm-s-default .cm-type {\n  color: #085; }\n\n.cm-s-default .cm-comment {\n  color: #a50; }\n\n.cm-s-default .cm-string {\n  color: #a11; }\n\n.cm-s-default .cm-string-2 {\n  color: #f50; }\n\n.cm-s-default .cm-meta {\n  color: #555; }\n\n.cm-s-default .cm-qualifier {\n  color: #555; }\n\n.cm-s-default .cm-builtin {\n  color: #30a; }\n\n.cm-s-default .cm-bracket {\n  color: #997; }\n\n.cm-s-default .cm-tag {\n  color: #170; }\n\n.cm-s-default .cm-attribute {\n  color: #00c; }\n\n.cm-s-default .cm-hr {\n  color: #999; }\n\n.cm-s-default .cm-link {\n  color: #00c; }\n\n.cm-s-default .cm-error {\n  color: #f00; }\n\n.cm-invalidchar {\n  color: #f00; }\n\n.CodeMirror-composing {\n  border-bottom: 2px solid; }\n\n/* Default styles for common addons */\ndiv.CodeMirror span.CodeMirror-matchingbracket {\n  color: #0b0; }\n\ndiv.CodeMirror span.CodeMirror-nonmatchingbracket {\n  color: #a22; }\n\n.CodeMirror-matchingtag {\n  background: rgba(255, 150, 0, 0.3); }\n\n.CodeMirror-activeline-background {\n  background: #e8f2ff; }\n\n/* STOP */\n/* The rest of this file contains styles related to the mechanics of\n   the editor. You probably shouldn't touch them. */\n.CodeMirror {\n  position: relative;\n  overflow: hidden;\n  background: white; }\n\n.CodeMirror-scroll {\n  overflow: scroll !important;\n  /* Things will break if this is overridden */\n  /* 30px is the magic margin used to hide the element's real scrollbars */\n  /* See overflow: hidden in .CodeMirror */\n  margin-bottom: -30px;\n  margin-right: -30px;\n  padding-bottom: 30px;\n  height: 100%;\n  outline: none;\n  /* Prevent dragging from highlighting the element */\n  position: relative; }\n\n.CodeMirror-sizer {\n  position: relative;\n  border-right: 30px solid transparent; }\n\n/* The fake, visible scrollbars. Used to force redraw during scrolling\n   before actual scrolling happens, thus preventing shaking and\n   flickering artifacts. */\n.CodeMirror-vscrollbar, .CodeMirror-hscrollbar, .CodeMirror-scrollbar-filler, .CodeMirror-gutter-filler {\n  position: absolute;\n  z-index: 6;\n  display: none; }\n\n.CodeMirror-vscrollbar {\n  right: 0;\n  top: 0;\n  overflow-x: hidden;\n  overflow-y: scroll; }\n\n.CodeMirror-hscrollbar {\n  bottom: 0;\n  left: 0;\n  overflow-y: hidden;\n  overflow-x: scroll; }\n\n.CodeMirror-scrollbar-filler {\n  right: 0;\n  bottom: 0; }\n\n.CodeMirror-gutter-filler {\n  left: 0;\n  bottom: 0; }\n\n.CodeMirror-gutters {\n  position: absolute;\n  left: 0;\n  top: 0;\n  min-height: 100%;\n  z-index: 3; }\n\n.CodeMirror-gutter {\n  white-space: normal;\n  height: 100%;\n  display: inline-block;\n  vertical-align: top;\n  margin-bottom: -30px; }\n\n.CodeMirror-gutter-wrapper {\n  position: absolute;\n  z-index: 4;\n  background: none !important;\n  border: none !important; }\n\n.CodeMirror-gutter-background {\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  z-index: 4; }\n\n.CodeMirror-gutter-elt {\n  position: absolute;\n  cursor: default;\n  z-index: 4; }\n\n.CodeMirror-gutter-wrapper ::-moz-selection {\n  background-color: transparent; }\n\n.CodeMirror-gutter-wrapper ::selection {\n  background-color: transparent; }\n\n.CodeMirror-gutter-wrapper ::-moz-selection {\n  background-color: transparent; }\n\n.CodeMirror-lines {\n  cursor: text;\n  min-height: 1px;\n  /* prevents collapsing before first draw */ }\n\n.CodeMirror pre {\n  /* Reset some styles that the rest of the page might have set */\n  border-radius: 0;\n  border-width: 0;\n  background: transparent;\n  font-family: inherit;\n  font-size: inherit;\n  margin: 0;\n  white-space: pre;\n  word-wrap: normal;\n  line-height: inherit;\n  color: inherit;\n  z-index: 2;\n  position: relative;\n  overflow: visible;\n  -webkit-tap-highlight-color: transparent;\n  -webkit-font-variant-ligatures: contextual;\n  -moz-font-variant-ligatures: contextual;\n  font-variant-ligatures: contextual; }\n\n.CodeMirror-wrap pre {\n  word-wrap: break-word;\n  white-space: pre-wrap;\n  word-break: normal; }\n\n.CodeMirror-linebackground {\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 0;\n  bottom: 0;\n  z-index: 0; }\n\n.CodeMirror-linewidget {\n  position: relative;\n  z-index: 2;\n  padding: 0.1px;\n  /* Force widget margins to stay inside of the container */ }\n\n.CodeMirror-rtl pre {\n  direction: rtl; }\n\n.CodeMirror-code {\n  outline: none; }\n\n/* Force content-box sizing for the elements where we expect it */\n.CodeMirror-scroll,\n.CodeMirror-sizer,\n.CodeMirror-gutter,\n.CodeMirror-gutters,\n.CodeMirror-linenumber {\n  box-sizing: content-box; }\n\n.CodeMirror-measure {\n  position: absolute;\n  width: 100%;\n  height: 0;\n  overflow: hidden;\n  visibility: hidden; }\n\n.CodeMirror-cursor {\n  position: absolute;\n  pointer-events: none; }\n\n.CodeMirror-measure pre {\n  position: static; }\n\ndiv.CodeMirror-cursors {\n  visibility: hidden;\n  position: relative;\n  z-index: 3; }\n\ndiv.CodeMirror-dragcursors {\n  visibility: visible; }\n\n.CodeMirror-focused div.CodeMirror-cursors {\n  visibility: visible; }\n\n.CodeMirror-selected {\n  background: #d9d9d9; }\n\n.CodeMirror-focused .CodeMirror-selected {\n  background: #d7d4f0; }\n\n.CodeMirror-crosshair {\n  cursor: crosshair; }\n\n.CodeMirror-line::-moz-selection, .CodeMirror-line > span::-moz-selection, .CodeMirror-line > span > span::-moz-selection {\n  background: #d7d4f0; }\n\n.CodeMirror-line::selection, .CodeMirror-line > span::selection, .CodeMirror-line > span > span::selection {\n  background: #d7d4f0; }\n\n.CodeMirror-line::-moz-selection, .CodeMirror-line > span::-moz-selection, .CodeMirror-line > span > span::-moz-selection {\n  background: #d7d4f0; }\n\n.cm-searching {\n  background-color: #ffa;\n  background-color: rgba(255, 255, 0, 0.4); }\n\n/* Used to force a border model for a node */\n.cm-force-border {\n  padding-right: .1px; }\n\n@media print {\n  /* Hide the cursor when printing */\n  .CodeMirror div.CodeMirror-cursors {\n    visibility: hidden; } }\n\n/* See issue #2901 */\n.cm-tab-wrap-hack:after {\n  content: ''; }\n\n/* Help users use markselection to safely style text background */\nspan.CodeMirror-selectedtext {\n  background: none; }\n", ""]);
}, function (e, t) {
  e.exports = function (e) {
    var t = "undefined" != typeof window && window.location;
    if (!t) throw new Error("fixUrls requires window.location");
    if (!e || "string" != typeof e) return e;
    var n = t.protocol + "//" + t.host,
        r = n + t.pathname.replace(/\/[^\/]*$/, "/");
    return e.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function (e, t) {
      var i,
          o = t.trim().replace(/^"(.*)"$/, function (e, t) {
        return t;
      }).replace(/^'(.*)'$/, function (e, t) {
        return t;
      });
      return /^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(o) ? e : (i = 0 === o.indexOf("//") ? o : 0 === o.indexOf("/") ? n + o : r + o.replace(/^\.\//, ""), "url(" + JSON.stringify(i) + ")");
    });
  };
}, function (e, t, n) {
  var r = n(23);
  "string" == typeof r && (r = [[e.i, r, ""]]);
  var i = {
    hmr: !0,
    transform: void 0,
    insertInto: void 0
  };
  n(3)(r, i);
  r.locals && (e.exports = r.locals);
}, function (e, t, n) {
  (e.exports = n(2)(!1)).push([e.i, '.CodeMirror-foldmarker {\n  color: blue;\n  text-shadow: #b9f 1px 1px 2px, #b9f -1px -1px 2px, #b9f 1px -1px 2px, #b9f -1px 1px 2px;\n  font-family: arial;\n  line-height: .3;\n  cursor: pointer; }\n\n.CodeMirror-foldgutter {\n  width: .7em; }\n\n.CodeMirror-foldgutter-open,\n.CodeMirror-foldgutter-folded {\n  cursor: pointer; }\n\n.CodeMirror-foldgutter-open:after {\n  content: "\\25BE"; }\n\n.CodeMirror-foldgutter-folded:after {\n  content: "\\25B8"; }\n', ""]);
}, function (e, t, n) {
  var r = n(25);
  "string" == typeof r && (r = [[e.i, r, ""]]);
  var i = {
    hmr: !0,
    transform: void 0,
    insertInto: void 0
  };
  n(3)(r, i);
  r.locals && (e.exports = r.locals);
}, function (e, t, n) {
  (e.exports = n(2)(!1)).push([e.i, '/* The lint marker gutter */\n.CodeMirror-lint-markers {\n  width: 16px; }\n\n.CodeMirror-lint-tooltip {\n  background-color: #ffd;\n  border: 1px solid black;\n  border-radius: 4px 4px 4px 4px;\n  color: black;\n  font-family: monospace;\n  font-size: 10pt;\n  overflow: hidden;\n  padding: 2px 5px;\n  position: fixed;\n  white-space: pre;\n  white-space: pre-wrap;\n  z-index: 100;\n  max-width: 600px;\n  opacity: 0;\n  transition: opacity .4s;\n  -moz-transition: opacity .4s;\n  -webkit-transition: opacity .4s;\n  -o-transition: opacity .4s;\n  -ms-transition: opacity .4s; }\n\n.CodeMirror-lint-mark-error, .CodeMirror-lint-mark-warning {\n  background-position: left bottom;\n  background-repeat: repeat-x; }\n\n.CodeMirror-lint-mark-error {\n  background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAADCAYAAAC09K7GAAAAAXNSR0IArs4c6QAAAAZiS0dEAP8A/wD/oL2nkwAAAAlwSFlzAAALEwAACxMBAJqcGAAAAAd0SU1FB9sJDw4cOCW1/KIAAAAZdEVYdENvbW1lbnQAQ3JlYXRlZCB3aXRoIEdJTVBXgQ4XAAAAHElEQVQI12NggIL/DAz/GdA5/xkY/qPKMDAwAADLZwf5rvm+LQAAAABJRU5ErkJggg=="); }\n\n.CodeMirror-lint-mark-warning {\n  background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAADCAYAAAC09K7GAAAAAXNSR0IArs4c6QAAAAZiS0dEAP8A/wD/oL2nkwAAAAlwSFlzAAALEwAACxMBAJqcGAAAAAd0SU1FB9sJFhQXEbhTg7YAAAAZdEVYdENvbW1lbnQAQ3JlYXRlZCB3aXRoIEdJTVBXgQ4XAAAAMklEQVQI12NkgIIvJ3QXMjAwdDN+OaEbysDA4MPAwNDNwMCwiOHLCd1zX07o6kBVGQEAKBANtobskNMAAAAASUVORK5CYII="); }\n\n.CodeMirror-lint-marker-error, .CodeMirror-lint-marker-warning {\n  background-position: center center;\n  background-repeat: no-repeat;\n  cursor: pointer;\n  display: inline-block;\n  height: 16px;\n  width: 16px;\n  vertical-align: middle;\n  position: relative; }\n\n.CodeMirror-lint-message-error, .CodeMirror-lint-message-warning {\n  padding-left: 18px;\n  background-position: top left;\n  background-repeat: no-repeat; }\n\n.CodeMirror-lint-marker-error, .CodeMirror-lint-message-error {\n  background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAMAAAAoLQ9TAAAAHlBMVEW7AAC7AACxAAC7AAC7AAAAAAC4AAC5AAD///+7AAAUdclpAAAABnRSTlMXnORSiwCK0ZKSAAAATUlEQVR42mWPOQ7AQAgDuQLx/z8csYRmPRIFIwRGnosRrpamvkKi0FTIiMASR3hhKW+hAN6/tIWhu9PDWiTGNEkTtIOucA5Oyr9ckPgAWm0GPBog6v4AAAAASUVORK5CYII="); }\n\n.CodeMirror-lint-marker-warning, .CodeMirror-lint-message-warning {\n  background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAMAAAAoLQ9TAAAANlBMVEX/uwDvrwD/uwD/uwD/uwD/uwD/uwD/uwD/uwD6twD/uwAAAADurwD2tQD7uAD+ugAAAAD/uwDhmeTRAAAADHRSTlMJ8mN1EYcbmiixgACm7WbuAAAAVklEQVR42n3PUQqAIBBFUU1LLc3u/jdbOJoW1P08DA9Gba8+YWJ6gNJoNYIBzAA2chBth5kLmG9YUoG0NHAUwFXwO9LuBQL1giCQb8gC9Oro2vp5rncCIY8L8uEx5ZkAAAAASUVORK5CYII="); }\n\n.CodeMirror-lint-marker-multiple {\n  background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAcAAAAHCAMAAADzjKfhAAAACVBMVEUAAAAAAAC/v7914kyHAAAAAXRSTlMAQObYZgAAACNJREFUeNo1ioEJAAAIwmz/H90iFFSGJgFMe3gaLZ0od+9/AQZ0ADosbYraAAAAAElFTkSuQmCC");\n  background-repeat: no-repeat;\n  background-position: right bottom;\n  width: 100%;\n  height: 100%; }\n', ""]);
}, function (e, t, n) {
  var r = n(27);
  "string" == typeof r && (r = [[e.i, r, ""]]);
  var i = {
    hmr: !0,
    transform: void 0,
    insertInto: void 0
  };
  n(3)(r, i);
  r.locals && (e.exports = r.locals);
}, function (e, t, n) {
  (e.exports = n(2)(!1)).push([e.i, ".CodeMirror-hints {\n  position: absolute;\n  z-index: 10;\n  overflow: hidden;\n  list-style: none;\n  margin: 0;\n  padding: 2px;\n  box-shadow: 2px 3px 5px rgba(0, 0, 0, 0.2);\n  border-radius: 3px;\n  border: 1px solid silver;\n  background: white;\n  font-size: 90%;\n  font-family: monospace;\n  max-height: 20em;\n  overflow-y: auto; }\n\n.CodeMirror-hint {\n  margin: 0;\n  padding: 0 4px;\n  border-radius: 2px;\n  white-space: pre;\n  color: black;\n  cursor: pointer; }\n\nli.CodeMirror-hint-active {\n  background: #08f;\n  color: white; }\n", ""]);
}, function (e, t, n) {
  var r = n(29);
  "string" == typeof r && (r = [[e.i, r, ""]]);
  var i = {
    hmr: !0,
    transform: void 0,
    insertInto: void 0
  };
  n(3)(r, i);
  r.locals && (e.exports = r.locals);
}, function (e, t, n) {
  (e.exports = n(2)(!1)).push([e.i, "/* Based on Sublime Text's Monokai theme */\n.cm-s-monokai.CodeMirror {\n  background: #272822;\n  color: #f8f8f2; }\n\n.cm-s-monokai div.CodeMirror-selected {\n  background: #49483E; }\n\n.cm-s-monokai .CodeMirror-line::-moz-selection, .cm-s-monokai .CodeMirror-line > span::-moz-selection, .cm-s-monokai .CodeMirror-line > span > span::-moz-selection {\n  background: rgba(73, 72, 62, 0.99); }\n\n.cm-s-monokai .CodeMirror-line::selection, .cm-s-monokai .CodeMirror-line > span::selection, .cm-s-monokai .CodeMirror-line > span > span::selection {\n  background: rgba(73, 72, 62, 0.99); }\n\n.cm-s-monokai .CodeMirror-line::-moz-selection, .cm-s-monokai .CodeMirror-line > span::-moz-selection, .cm-s-monokai .CodeMirror-line > span > span::-moz-selection {\n  background: rgba(73, 72, 62, 0.99); }\n\n.cm-s-monokai .CodeMirror-gutters {\n  background: #272822;\n  border-right: 0px; }\n\n.cm-s-monokai .CodeMirror-guttermarker {\n  color: white; }\n\n.cm-s-monokai .CodeMirror-guttermarker-subtle {\n  color: #d0d0d0; }\n\n.cm-s-monokai .CodeMirror-linenumber {\n  color: #d0d0d0; }\n\n.cm-s-monokai .CodeMirror-cursor {\n  border-left: 1px solid #f8f8f0; }\n\n.cm-s-monokai span.cm-comment {\n  color: #75715e; }\n\n.cm-s-monokai span.cm-atom {\n  color: #ae81ff; }\n\n.cm-s-monokai span.cm-number {\n  color: #ae81ff; }\n\n.cm-s-monokai span.cm-comment.cm-attribute {\n  color: #97b757; }\n\n.cm-s-monokai span.cm-comment.cm-def {\n  color: #bc9262; }\n\n.cm-s-monokai span.cm-comment.cm-tag {\n  color: #bc6283; }\n\n.cm-s-monokai span.cm-comment.cm-type {\n  color: #5998a6; }\n\n.cm-s-monokai span.cm-property, .cm-s-monokai span.cm-attribute {\n  color: #a6e22e; }\n\n.cm-s-monokai span.cm-keyword {\n  color: #f92672; }\n\n.cm-s-monokai span.cm-builtin {\n  color: #66d9ef; }\n\n.cm-s-monokai span.cm-string {\n  color: #e6db74; }\n\n.cm-s-monokai span.cm-variable {\n  color: #f8f8f2; }\n\n.cm-s-monokai span.cm-variable-2 {\n  color: #9effff; }\n\n.cm-s-monokai span.cm-variable-3, .cm-s-monokai span.cm-type {\n  color: #66d9ef; }\n\n.cm-s-monokai span.cm-def {\n  color: #fd971f; }\n\n.cm-s-monokai span.cm-bracket {\n  color: #f8f8f2; }\n\n.cm-s-monokai span.cm-tag {\n  color: #f92672; }\n\n.cm-s-monokai span.cm-header {\n  color: #ae81ff; }\n\n.cm-s-monokai span.cm-link {\n  color: #ae81ff; }\n\n.cm-s-monokai span.cm-error {\n  background: #f92672;\n  color: #f8f8f0; }\n\n.cm-s-monokai .CodeMirror-activeline-background {\n  background: #373831; }\n\n.cm-s-monokai .CodeMirror-matchingbracket {\n  text-decoration: underline;\n  color: white !important; }\n", ""]);
}, function (e, t, n) {
  !function (e) {
    "use strict";

    var t = {
      autoSelfClosers: {
        area: !0,
        base: !0,
        br: !0,
        col: !0,
        command: !0,
        embed: !0,
        frame: !0,
        hr: !0,
        img: !0,
        input: !0,
        keygen: !0,
        link: !0,
        meta: !0,
        param: !0,
        source: !0,
        track: !0,
        wbr: !0,
        menuitem: !0
      },
      implicitlyClosed: {
        dd: !0,
        li: !0,
        optgroup: !0,
        option: !0,
        p: !0,
        rp: !0,
        rt: !0,
        tbody: !0,
        td: !0,
        tfoot: !0,
        th: !0,
        tr: !0
      },
      contextGrabbers: {
        dd: {
          dd: !0,
          dt: !0
        },
        dt: {
          dd: !0,
          dt: !0
        },
        li: {
          li: !0
        },
        option: {
          option: !0,
          optgroup: !0
        },
        optgroup: {
          optgroup: !0
        },
        p: {
          address: !0,
          article: !0,
          aside: !0,
          blockquote: !0,
          dir: !0,
          div: !0,
          dl: !0,
          fieldset: !0,
          footer: !0,
          form: !0,
          h1: !0,
          h2: !0,
          h3: !0,
          h4: !0,
          h5: !0,
          h6: !0,
          header: !0,
          hgroup: !0,
          hr: !0,
          menu: !0,
          nav: !0,
          ol: !0,
          p: !0,
          pre: !0,
          section: !0,
          table: !0,
          ul: !0
        },
        rp: {
          rp: !0,
          rt: !0
        },
        rt: {
          rp: !0,
          rt: !0
        },
        tbody: {
          tbody: !0,
          tfoot: !0
        },
        td: {
          td: !0,
          th: !0
        },
        tfoot: {
          tbody: !0
        },
        th: {
          td: !0,
          th: !0
        },
        thead: {
          tbody: !0,
          tfoot: !0
        },
        tr: {
          tr: !0
        }
      },
      doNotIndent: {
        pre: !0
      },
      allowUnquoted: !0,
      allowMissing: !0,
      caseFold: !0
    },
        n = {
      autoSelfClosers: {},
      implicitlyClosed: {},
      contextGrabbers: {},
      doNotIndent: {},
      allowUnquoted: !1,
      allowMissing: !1,
      allowMissingTagName: !1,
      caseFold: !1
    };
    e.defineMode("xml", function (r, i) {
      var o,
          a,
          s = r.indentUnit,
          l = {},
          u = i.htmlMode ? t : n;

      for (var c in u) {
        l[c] = u[c];
      }

      for (var c in i) {
        l[c] = i[c];
      }

      function h(e, t) {
        function n(n) {
          return t.tokenize = n, n(e, t);
        }

        var r = e.next();
        return "<" == r ? e.eat("!") ? e.eat("[") ? e.match("CDATA[") ? n(f("atom", "]]>")) : null : e.match("--") ? n(f("comment", "--\x3e")) : e.match("DOCTYPE", !0, !0) ? (e.eatWhile(/[\w\._\-]/), n(function e(t) {
          return function (n, r) {
            for (var i; null != (i = n.next());) {
              if ("<" == i) return r.tokenize = e(t + 1), r.tokenize(n, r);

              if (">" == i) {
                if (1 == t) {
                  r.tokenize = h;
                  break;
                }

                return r.tokenize = e(t - 1), r.tokenize(n, r);
              }
            }

            return "meta";
          };
        }(1))) : null : e.eat("?") ? (e.eatWhile(/[\w\._\-]/), t.tokenize = f("meta", "?>"), "meta") : (o = e.eat("/") ? "closeTag" : "openTag", t.tokenize = d, "tag bracket") : "&" == r ? (e.eat("#") ? e.eat("x") ? e.eatWhile(/[a-fA-F\d]/) && e.eat(";") : e.eatWhile(/[\d]/) && e.eat(";") : e.eatWhile(/[\w\.\-:]/) && e.eat(";")) ? "atom" : "error" : (e.eatWhile(/[^&<]/), null);
      }

      function d(e, t) {
        var n = e.next();
        if (">" == n || "/" == n && e.eat(">")) return t.tokenize = h, o = ">" == n ? "endTag" : "selfcloseTag", "tag bracket";
        if ("=" == n) return o = "equals", null;

        if ("<" == n) {
          t.tokenize = h, t.state = v, t.tagName = t.tagStart = null;
          var r = t.tokenize(e, t);
          return r ? r + " tag error" : "tag error";
        }

        return /[\'\"]/.test(n) ? (t.tokenize = function (e) {
          var t = function t(_t3, n) {
            for (; !_t3.eol();) {
              if (_t3.next() == e) {
                n.tokenize = d;
                break;
              }
            }

            return "string";
          };

          return t.isInAttribute = !0, t;
        }(n), t.stringStartCol = e.column(), t.tokenize(e, t)) : (e.match(/^[^\s\u00a0=<>\"\']*[^\s\u00a0=<>\"\'\/]/), "word");
      }

      function f(e, t) {
        return function (n, r) {
          for (; !n.eol();) {
            if (n.match(t)) {
              r.tokenize = h;
              break;
            }

            n.next();
          }

          return e;
        };
      }

      function p(e) {
        e.context && (e.context = e.context.prev);
      }

      function g(e, t) {
        for (var n;;) {
          if (!e.context) return;
          if (n = e.context.tagName, !l.contextGrabbers.hasOwnProperty(n) || !l.contextGrabbers[n].hasOwnProperty(t)) return;
          p(e);
        }
      }

      function v(e, t, n) {
        return "openTag" == e ? (n.tagStart = t.column(), m) : "closeTag" == e ? b : v;
      }

      function m(e, t, n) {
        return "word" == e ? (n.tagName = t.current(), a = "tag", w) : l.allowMissingTagName && "endTag" == e ? (a = "tag bracket", w(e, 0, n)) : (a = "error", m);
      }

      function b(e, t, n) {
        if ("word" == e) {
          var r = t.current();
          return n.context && n.context.tagName != r && l.implicitlyClosed.hasOwnProperty(n.context.tagName) && p(n), n.context && n.context.tagName == r || !1 === l.matchClosing ? (a = "tag", y) : (a = "tag error", A);
        }

        return l.allowMissingTagName && "endTag" == e ? (a = "tag bracket", y(e, 0, n)) : (a = "error", A);
      }

      function y(e, t, n) {
        return "endTag" != e ? (a = "error", y) : (p(n), v);
      }

      function A(e, t, n) {
        return a = "error", y(e, 0, n);
      }

      function w(e, t, n) {
        if ("word" == e) return a = "attribute", C;

        if ("endTag" == e || "selfcloseTag" == e) {
          var r = n.tagName,
              i = n.tagStart;
          return n.tagName = n.tagStart = null, "selfcloseTag" == e || l.autoSelfClosers.hasOwnProperty(r) ? g(n, r) : (g(n, r), n.context = new function (e, t, n) {
            this.prev = e.context, this.tagName = t, this.indent = e.indented, this.startOfLine = n, (l.doNotIndent.hasOwnProperty(t) || e.context && e.context.noIndent) && (this.noIndent = !0);
          }(n, r, i == n.indented)), v;
        }

        return a = "error", w;
      }

      function C(e, t, n) {
        return "equals" == e ? x : (l.allowMissing || (a = "error"), w(e, 0, n));
      }

      function x(e, t, n) {
        return "string" == e ? k : "word" == e && l.allowUnquoted ? (a = "string", w) : (a = "error", w(e, 0, n));
      }

      function k(e, t, n) {
        return "string" == e ? k : w(e, 0, n);
      }

      return h.isInText = !0, {
        startState: function startState(e) {
          var t = {
            tokenize: h,
            state: v,
            indented: e || 0,
            tagName: null,
            tagStart: null,
            context: null
          };
          return null != e && (t.baseIndent = e), t;
        },
        token: function token(e, t) {
          if (!t.tagName && e.sol() && (t.indented = e.indentation()), e.eatSpace()) return null;
          o = null;
          var n = t.tokenize(e, t);
          return (n || o) && "comment" != n && (a = null, t.state = t.state(o || n, e, t), a && (n = "error" == a ? n + " error" : a)), n;
        },
        indent: function indent(t, n, r) {
          var i = t.context;
          if (t.tokenize.isInAttribute) return t.tagStart == t.indented ? t.stringStartCol + 1 : t.indented + s;
          if (i && i.noIndent) return e.Pass;
          if (t.tokenize != d && t.tokenize != h) return r ? r.match(/^(\s*)/)[0].length : 0;
          if (t.tagName) return !1 !== l.multilineTagIndentPastTag ? t.tagStart + t.tagName.length + 2 : t.tagStart + s * (l.multilineTagIndentFactor || 1);
          if (l.alignCDATA && /<!\[CDATA\[/.test(n)) return 0;
          var o = n && /^<(\/)?([\w_:\.-]*)/.exec(n);
          if (o && o[1]) for (; i;) {
            if (i.tagName == o[2]) {
              i = i.prev;
              break;
            }

            if (!l.implicitlyClosed.hasOwnProperty(i.tagName)) break;
            i = i.prev;
          } else if (o) for (; i;) {
            var a = l.contextGrabbers[i.tagName];
            if (!a || !a.hasOwnProperty(o[2])) break;
            i = i.prev;
          }

          for (; i && i.prev && !i.startOfLine;) {
            i = i.prev;
          }

          return i ? i.indent + s : t.baseIndent || 0;
        },
        electricInput: /<\/[\s\w:]+>$/,
        blockCommentStart: "\x3c!--",
        blockCommentEnd: "--\x3e",
        configuration: l.htmlMode ? "html" : "xml",
        helperType: l.htmlMode ? "html" : "xml",
        skipAttribute: function skipAttribute(e) {
          e.state == x && (e.state = w);
        }
      };
    }), e.defineMIME("text/xml", "xml"), e.defineMIME("application/xml", "xml"), e.mimeModes.hasOwnProperty("text/html") || e.defineMIME("text/html", {
      name: "xml",
      htmlMode: !0
    });
  }(n(0));
}, function (e, t, n) {
  !function (e) {
    e.defineOption("autoCloseTags", !1, function (a, s, l) {
      if (l != e.Init && l && a.removeKeyMap("autoCloseTags"), s) {
        var u = {
          name: "autoCloseTags"
        };
        ("object" != _typeof(s) || s.whenClosing) && (u["'/'"] = function (t) {
          return function (t) {
            return t.getOption("disableInput") ? e.Pass : r(t, !0);
          }(t);
        }), ("object" != _typeof(s) || s.whenOpening) && (u["'>'"] = function (r) {
          return function (r) {
            if (r.getOption("disableInput")) return e.Pass;

            for (var a = r.listSelections(), s = [], l = r.getOption("autoCloseTags"), u = 0; u < a.length; u++) {
              if (!a[u].empty()) return e.Pass;
              var c = a[u].head,
                  h = r.getTokenAt(c),
                  d = e.innerMode(r.getMode(), h.state),
                  f = d.state;
              if ("xml" != d.mode.name || !f.tagName) return e.Pass;
              var p = "html" == d.mode.configuration,
                  g = "object" == _typeof(l) && l.dontCloseTags || p && t,
                  v = "object" == _typeof(l) && l.indentTags || p && n,
                  m = f.tagName;
              h.end > c.ch && (m = m.slice(0, m.length - h.end + c.ch));
              var b = m.toLowerCase();
              if (!m || "string" == h.type && (h.end != c.ch || !/[\"\']/.test(h.string.charAt(h.string.length - 1)) || 1 == h.string.length) || "tag" == h.type && "closeTag" == f.type || h.string.indexOf("/") == h.string.length - 1 || g && i(g, b) > -1 || o(r, m, c, f, !0)) return e.Pass;
              var y = v && i(v, b) > -1;
              s[u] = {
                indent: y,
                text: ">" + (y ? "\n\n" : "") + "</" + m + ">",
                newPos: y ? e.Pos(c.line + 1, 0) : e.Pos(c.line, c.ch + 1)
              };
            }

            for (var A = "object" == _typeof(l) && l.dontIndentOnAutoClose, u = a.length - 1; u >= 0; u--) {
              var w = s[u];
              r.replaceRange(w.text, a[u].head, a[u].anchor, "+insert");
              var C = r.listSelections().slice(0);
              C[u] = {
                head: w.newPos,
                anchor: w.newPos
              }, r.setSelections(C), !A && w.indent && (r.indentLine(w.newPos.line, null, !0), r.indentLine(w.newPos.line + 1, null, !0));
            }
          }(r);
        }), a.addKeyMap(u);
      }
    });
    var t = ["area", "base", "br", "col", "command", "embed", "hr", "img", "input", "keygen", "link", "meta", "param", "source", "track", "wbr"],
        n = ["applet", "blockquote", "body", "button", "div", "dl", "fieldset", "form", "frameset", "h1", "h2", "h3", "h4", "h5", "h6", "head", "html", "iframe", "layer", "legend", "object", "ol", "p", "select", "table", "ul"];

    function r(t, n) {
      for (var r = t.listSelections(), i = [], a = n ? "/" : "</", s = t.getOption("autoCloseTags"), l = "object" == _typeof(s) && s.dontIndentOnSlash, u = 0; u < r.length; u++) {
        if (!r[u].empty()) return e.Pass;
        var c,
            h = r[u].head,
            d = t.getTokenAt(h),
            f = e.innerMode(t.getMode(), d.state),
            p = f.state;
        if (n && ("string" == d.type || "<" != d.string.charAt(0) || d.start != h.ch - 1)) return e.Pass;
        if ("xml" != f.mode.name) {
          if ("htmlmixed" == t.getMode().name && "javascript" == f.mode.name) c = a + "script";else {
            if ("htmlmixed" != t.getMode().name || "css" != f.mode.name) return e.Pass;
            c = a + "style";
          }
        } else {
          if (!p.context || !p.context.tagName || o(t, p.context.tagName, h, p)) return e.Pass;
          c = a + p.context.tagName;
        }
        ">" != t.getLine(h.line).charAt(d.end) && (c += ">"), i[u] = c;
      }

      if (t.replaceSelections(i), r = t.listSelections(), !l) for (var u = 0; u < r.length; u++) {
        (u == r.length - 1 || r[u].head.line < r[u + 1].head.line) && t.indentLine(r[u].head.line);
      }
    }

    function i(e, t) {
      if (e.indexOf) return e.indexOf(t);

      for (var n = 0, r = e.length; n < r; ++n) {
        if (e[n] == t) return n;
      }

      return -1;
    }

    function o(t, n, r, i, o) {
      if (!e.scanForClosingTag) return !1;
      var a = Math.min(t.lastLine() + 1, r.line + 500),
          s = e.scanForClosingTag(t, r, null, a);
      if (!s || s.tag != n) return !1;

      for (var l = i.context, u = o ? 1 : 0; l && l.tagName == n; l = l.prev) {
        ++u;
      }

      r = s.to;

      for (var c = 1; c < u; c++) {
        var h = e.scanForClosingTag(t, r, null, a);
        if (!h || h.tag != n) return !1;
        r = h.to;
      }

      return !0;
    }

    e.commands.closeTag = function (e) {
      return r(e);
    };
  }(n(0), n(11));
}, function (e, t, n) {
  !function (e) {
    "use strict";

    e.defineOption("foldGutter", !1, function (t, n, r) {
      r && r != e.Init && (t.clearGutter(t.state.foldGutter.options.gutter), t.state.foldGutter = null, t.off("gutterClick", a), t.off("change", s), t.off("viewportChange", l), t.off("fold", u), t.off("unfold", u), t.off("swapDoc", s)), n && (t.state.foldGutter = new function (e) {
        this.options = e, this.from = this.to = 0;
      }(function (e) {
        return !0 === e && (e = {}), null == e.gutter && (e.gutter = "CodeMirror-foldgutter"), null == e.indicatorOpen && (e.indicatorOpen = "CodeMirror-foldgutter-open"), null == e.indicatorFolded && (e.indicatorFolded = "CodeMirror-foldgutter-folded"), e;
      }(n)), o(t), t.on("gutterClick", a), t.on("change", s), t.on("viewportChange", l), t.on("fold", u), t.on("unfold", u), t.on("swapDoc", s));
    });
    var t = e.Pos;

    function n(e, n) {
      for (var r = e.findMarks(t(n, 0), t(n + 1, 0)), i = 0; i < r.length; ++i) {
        if (r[i].__isFold && r[i].find().from.line == n) return r[i];
      }
    }

    function r(e) {
      if ("string" == typeof e) {
        var t = document.createElement("div");
        return t.className = e + " CodeMirror-guttermarker-subtle", t;
      }

      return e.cloneNode(!0);
    }

    function i(e, i, o) {
      var a = e.state.foldGutter.options,
          s = i,
          l = e.foldOption(a, "minFoldSize"),
          u = e.foldOption(a, "rangeFinder");
      e.eachLine(i, o, function (i) {
        var o = null;
        if (n(e, s)) o = r(a.indicatorFolded);else {
          var c = t(s, 0),
              h = u && u(e, c);
          h && h.to.line - h.from.line >= l && (o = r(a.indicatorOpen));
        }
        e.setGutterMarker(i, a.gutter, o), ++s;
      });
    }

    function o(e) {
      var t = e.getViewport(),
          n = e.state.foldGutter;
      n && (e.operation(function () {
        i(e, t.from, t.to);
      }), n.from = t.from, n.to = t.to);
    }

    function a(e, r, i) {
      var o = e.state.foldGutter;

      if (o) {
        var a = o.options;

        if (i == a.gutter) {
          var s = n(e, r);
          s ? s.clear() : e.foldCode(t(r, 0), a.rangeFinder);
        }
      }
    }

    function s(e) {
      var t = e.state.foldGutter;

      if (t) {
        var n = t.options;
        t.from = t.to = 0, clearTimeout(t.changeUpdate), t.changeUpdate = setTimeout(function () {
          o(e);
        }, n.foldOnChangeTimeSpan || 600);
      }
    }

    function l(e) {
      var t = e.state.foldGutter;

      if (t) {
        var n = t.options;
        clearTimeout(t.changeUpdate), t.changeUpdate = setTimeout(function () {
          var n = e.getViewport();
          t.from == t.to || n.from - t.to > 20 || t.from - n.to > 20 ? o(e) : e.operation(function () {
            n.from < t.from && (i(e, n.from, t.from), t.from = n.from), n.to > t.to && (i(e, t.to, n.to), t.to = n.to);
          });
        }, n.updateViewportTimeSpan || 400);
      }
    }

    function u(e, t) {
      var n = e.state.foldGutter;

      if (n) {
        var r = t.line;
        r >= n.from && r < n.to && i(e, r, r + 1);
      }
    }
  }(n(0), n(12));
}, function (e, t, n) {
  !function (e) {
    "use strict";

    var t = "CodeMirror-hint",
        n = "CodeMirror-hint-active";

    function r(e, t) {
      this.cm = e, this.options = t, this.widget = null, this.debounce = 0, this.tick = 0, this.startPos = this.cm.getCursor("start"), this.startLen = this.cm.getLine(this.startPos.line).length - this.cm.getSelection().length;
      var n = this;
      e.on("cursorActivity", this.activityFunc = function () {
        n.cursorActivity();
      });
    }

    e.showHint = function (e, t, n) {
      if (!t) return e.showHint(n);
      n && n.async && (t.async = !0);
      var r = {
        hint: t
      };
      if (n) for (var i in n) {
        r[i] = n[i];
      }
      return e.showHint(r);
    }, e.defineExtension("showHint", function (t) {
      t = function (e, t, n) {
        var r = e.options.hintOptions,
            i = {};

        for (var o in c) {
          i[o] = c[o];
        }

        if (r) for (var o in r) {
          void 0 !== r[o] && (i[o] = r[o]);
        }
        if (n) for (var o in n) {
          void 0 !== n[o] && (i[o] = n[o]);
        }
        return i.hint.resolve && (i.hint = i.hint.resolve(e, t)), i;
      }(this, this.getCursor("start"), t);

      var n = this.listSelections();

      if (!(n.length > 1)) {
        if (this.somethingSelected()) {
          if (!t.hint.supportsSelection) return;

          for (var i = 0; i < n.length; i++) {
            if (n[i].head.line != n[i].anchor.line) return;
          }
        }

        this.state.completionActive && this.state.completionActive.close();
        var o = this.state.completionActive = new r(this, t);
        o.options.hint && (e.signal(this, "startCompletion", this), o.update(!0));
      }
    });

    var i = window.requestAnimationFrame || function (e) {
      return setTimeout(e, 1e3 / 60);
    },
        o = window.cancelAnimationFrame || clearTimeout;

    function a(e) {
      return "string" == typeof e ? e : e.text;
    }

    function s(e, t) {
      for (; t && t != e;) {
        if ("LI" === t.nodeName.toUpperCase() && t.parentNode == e) return t;
        t = t.parentNode;
      }
    }

    function l(r, i) {
      this.completion = r, this.data = i, this.picked = !1;
      var o = this,
          l = r.cm,
          u = l.getInputField().ownerDocument,
          c = u.defaultView || u.parentWindow,
          h = this.hints = u.createElement("ul"),
          d = r.cm.options.theme;
      h.className = "CodeMirror-hints " + d, this.selectedHint = i.selectedHint || 0;

      for (var f = i.list, p = 0; p < f.length; ++p) {
        var g = h.appendChild(u.createElement("li")),
            v = f[p],
            m = t + (p != this.selectedHint ? "" : " " + n);
        null != v.className && (m = v.className + " " + m), g.className = m, v.render ? v.render(g, i, v) : g.appendChild(u.createTextNode(v.displayText || a(v))), g.hintId = p;
      }

      var b = l.cursorCoords(r.options.alignWithWord ? i.from : null),
          y = b.left,
          A = b.bottom,
          w = !0;
      h.style.left = y + "px", h.style.top = A + "px";
      var C = c.innerWidth || Math.max(u.body.offsetWidth, u.documentElement.offsetWidth),
          x = c.innerHeight || Math.max(u.body.offsetHeight, u.documentElement.offsetHeight);
      (r.options.container || u.body).appendChild(h);
      var k = h.getBoundingClientRect(),
          I = k.bottom - x,
          M = h.scrollHeight > h.clientHeight + 1,
          S = l.getScrollInfo();

      if (I > 0) {
        var L = k.bottom - k.top,
            T = b.top - (b.bottom - k.top);
        if (T - L > 0) h.style.top = (A = b.top - L) + "px", w = !1;else if (L > x) {
          h.style.height = x - 5 + "px", h.style.top = (A = b.bottom - k.top) + "px";
          var O = l.getCursor();
          i.from.ch != O.ch && (b = l.cursorCoords(O), h.style.left = (y = b.left) + "px", k = h.getBoundingClientRect());
        }
      }

      var N,
          E = k.right - C;
      if (E > 0 && (k.right - k.left > C && (h.style.width = C - 5 + "px", E -= k.right - k.left - C), h.style.left = (y = b.left - E) + "px"), M) for (var D = h.firstChild; D; D = D.nextSibling) {
        D.style.paddingRight = l.display.nativeBarWidth + "px";
      }
      return l.addKeyMap(this.keyMap = function (e, t) {
        var n = {
          Up: function Up() {
            t.moveFocus(-1);
          },
          Down: function Down() {
            t.moveFocus(1);
          },
          PageUp: function PageUp() {
            t.moveFocus(1 - t.menuSize(), !0);
          },
          PageDown: function PageDown() {
            t.moveFocus(t.menuSize() - 1, !0);
          },
          Home: function Home() {
            t.setFocus(0);
          },
          End: function End() {
            t.setFocus(t.length - 1);
          },
          Enter: t.pick,
          Tab: t.pick,
          Esc: t.close
        },
            r = e.options.customKeys,
            i = r ? {} : n;

        function o(e, r) {
          var o;
          o = "string" != typeof r ? function (e) {
            return r(e, t);
          } : n.hasOwnProperty(r) ? n[r] : r, i[e] = o;
        }

        if (r) for (var a in r) {
          r.hasOwnProperty(a) && o(a, r[a]);
        }
        var s = e.options.extraKeys;
        if (s) for (var a in s) {
          s.hasOwnProperty(a) && o(a, s[a]);
        }
        return i;
      }(r, {
        moveFocus: function moveFocus(e, t) {
          o.changeActive(o.selectedHint + e, t);
        },
        setFocus: function setFocus(e) {
          o.changeActive(e);
        },
        menuSize: function menuSize() {
          return o.screenAmount();
        },
        length: f.length,
        close: function close() {
          r.close();
        },
        pick: function pick() {
          o.pick();
        },
        data: i
      })), r.options.closeOnUnfocus && (l.on("blur", this.onBlur = function () {
        N = setTimeout(function () {
          r.close();
        }, 100);
      }), l.on("focus", this.onFocus = function () {
        clearTimeout(N);
      })), l.on("scroll", this.onScroll = function () {
        var e = l.getScrollInfo(),
            t = l.getWrapperElement().getBoundingClientRect(),
            n = A + S.top - e.top,
            i = n - (c.pageYOffset || (u.documentElement || u.body).scrollTop);
        if (w || (i += h.offsetHeight), i <= t.top || i >= t.bottom) return r.close();
        h.style.top = n + "px", h.style.left = y + S.left - e.left + "px";
      }), e.on(h, "dblclick", function (e) {
        var t = s(h, e.target || e.srcElement);
        t && null != t.hintId && (o.changeActive(t.hintId), o.pick());
      }), e.on(h, "click", function (e) {
        var t = s(h, e.target || e.srcElement);
        t && null != t.hintId && (o.changeActive(t.hintId), r.options.completeOnSingleClick && o.pick());
      }), e.on(h, "mousedown", function () {
        setTimeout(function () {
          l.focus();
        }, 20);
      }), e.signal(i, "select", f[this.selectedHint], h.childNodes[this.selectedHint]), !0;
    }

    function u(e, t, n, r) {
      if (e.async) e(t, r, n);else {
        var i = e(t, n);
        i && i.then ? i.then(r) : r(i);
      }
    }

    r.prototype = {
      close: function close() {
        this.active() && (this.cm.state.completionActive = null, this.tick = null, this.cm.off("cursorActivity", this.activityFunc), this.widget && this.data && e.signal(this.data, "close"), this.widget && this.widget.close(), e.signal(this.cm, "endCompletion", this.cm));
      },
      active: function active() {
        return this.cm.state.completionActive == this;
      },
      pick: function pick(t, n) {
        var r = t.list[n];
        r.hint ? r.hint(this.cm, t, r) : this.cm.replaceRange(a(r), r.from || t.from, r.to || t.to, "complete"), e.signal(t, "pick", r), this.close();
      },
      cursorActivity: function cursorActivity() {
        this.debounce && (o(this.debounce), this.debounce = 0);
        var e = this.cm.getCursor(),
            t = this.cm.getLine(e.line);
        if (e.line != this.startPos.line || t.length - e.ch != this.startLen - this.startPos.ch || e.ch < this.startPos.ch || this.cm.somethingSelected() || !e.ch || this.options.closeCharacters.test(t.charAt(e.ch - 1))) this.close();else {
          var n = this;
          this.debounce = i(function () {
            n.update();
          }), this.widget && this.widget.disable();
        }
      },
      update: function update(e) {
        if (null != this.tick) {
          var t = this,
              n = ++this.tick;
          u(this.options.hint, this.cm, this.options, function (r) {
            t.tick == n && t.finishUpdate(r, e);
          });
        }
      },
      finishUpdate: function finishUpdate(t, n) {
        this.data && e.signal(this.data, "update");
        var r = this.widget && this.widget.picked || n && this.options.completeSingle;
        this.widget && this.widget.close(), this.data = t, t && t.list.length && (r && 1 == t.list.length ? this.pick(t, 0) : (this.widget = new l(this, t), e.signal(t, "shown")));
      }
    }, l.prototype = {
      close: function close() {
        if (this.completion.widget == this) {
          this.completion.widget = null, this.hints.parentNode.removeChild(this.hints), this.completion.cm.removeKeyMap(this.keyMap);
          var e = this.completion.cm;
          this.completion.options.closeOnUnfocus && (e.off("blur", this.onBlur), e.off("focus", this.onFocus)), e.off("scroll", this.onScroll);
        }
      },
      disable: function disable() {
        this.completion.cm.removeKeyMap(this.keyMap);
        var e = this;
        this.keyMap = {
          Enter: function Enter() {
            e.picked = !0;
          }
        }, this.completion.cm.addKeyMap(this.keyMap);
      },
      pick: function pick() {
        this.completion.pick(this.data, this.selectedHint);
      },
      changeActive: function changeActive(t, r) {
        if (t >= this.data.list.length ? t = r ? this.data.list.length - 1 : 0 : t < 0 && (t = r ? 0 : this.data.list.length - 1), this.selectedHint != t) {
          var i = this.hints.childNodes[this.selectedHint];
          i && (i.className = i.className.replace(" " + n, "")), (i = this.hints.childNodes[this.selectedHint = t]).className += " " + n, i.offsetTop < this.hints.scrollTop ? this.hints.scrollTop = i.offsetTop - 3 : i.offsetTop + i.offsetHeight > this.hints.scrollTop + this.hints.clientHeight && (this.hints.scrollTop = i.offsetTop + i.offsetHeight - this.hints.clientHeight + 3), e.signal(this.data, "select", this.data.list[this.selectedHint], i);
        }
      },
      screenAmount: function screenAmount() {
        return Math.floor(this.hints.clientHeight / this.hints.firstChild.offsetHeight) || 1;
      }
    }, e.registerHelper("hint", "auto", {
      resolve: function resolve(t, n) {
        var r,
            i = t.getHelpers(n, "hint");

        if (i.length) {
          var o = function o(e, t, n) {
            var r = function (e, t) {
              if (!e.somethingSelected()) return t;

              for (var n = [], r = 0; r < t.length; r++) {
                t[r].supportsSelection && n.push(t[r]);
              }

              return n;
            }(e, i);

            !function i(o) {
              if (o == r.length) return t(null);
              u(r[o], e, n, function (e) {
                e && e.list.length > 0 ? t(e) : i(o + 1);
              });
            }(0);
          };

          return o.async = !0, o.supportsSelection = !0, o;
        }

        return (r = t.getHelper(t.getCursor(), "hintWords")) ? function (t) {
          return e.hint.fromList(t, {
            words: r
          });
        } : e.hint.anyword ? function (t, n) {
          return e.hint.anyword(t, n);
        } : function () {};
      }
    }), e.registerHelper("hint", "fromList", function (t, n) {
      var r,
          i = t.getCursor(),
          o = t.getTokenAt(i),
          a = e.Pos(i.line, o.start),
          s = i;
      o.start < i.ch && /\w/.test(o.string.charAt(i.ch - o.start - 1)) ? r = o.string.substr(0, i.ch - o.start) : (r = "", a = i);

      for (var l = [], u = 0; u < n.words.length; u++) {
        var c = n.words[u];
        c.slice(0, r.length) == r && l.push(c);
      }

      if (l.length) return {
        list: l,
        from: a,
        to: s
      };
    }), e.commands.autocomplete = e.showHint;
    var c = {
      hint: e.hint.auto,
      completeSingle: !0,
      alignWithWord: !0,
      closeCharacters: /[\s()\[\]{};:>,]/,
      closeOnUnfocus: !0,
      completeOnSingleClick: !0,
      container: null,
      customKeys: null,
      extraKeys: null
    };
    e.defineOption("hintOptions", null);
  }(n(0));
}, function (e, t, n) {
  !function (e) {
    "use strict";

    var t = e.Pos;
    e.registerHelper("hint", "xml", function (n, r) {
      var i = r && r.schemaInfo,
          o = r && r.quoteChar || '"';

      if (i) {
        var a = n.getCursor(),
            s = n.getTokenAt(a);
        s.end > a.ch && (s.end = a.ch, s.string = s.string.slice(0, a.ch - s.start));
        var l = e.innerMode(n.getMode(), s.state);

        if ("xml" == l.mode.name) {
          var u,
              c,
              h = [],
              d = !1,
              f = /\btag\b/.test(s.type) && !/>$/.test(s.string),
              p = f && /^\w/.test(s.string);

          if (p) {
            var g = n.getLine(a.line).slice(Math.max(0, s.start - 2), s.start),
                v = /<\/$/.test(g) ? "close" : /<$/.test(g) ? "open" : null;
            v && (c = s.start - ("close" == v ? 2 : 1));
          } else f && "<" == s.string ? v = "open" : f && "</" == s.string && (v = "close");

          if (!f && !l.state.tagName || v) {
            p && (u = s.string), d = v;
            var m = l.state.context,
                b = m && i[m.tagName],
                y = m ? b && b.children : i["!top"];
            if (y && "close" != v) for (var A = 0; A < y.length; ++A) {
              u && 0 != y[A].lastIndexOf(u, 0) || h.push("<" + y[A]);
            } else if ("close" != v) for (var w in i) {
              !i.hasOwnProperty(w) || "!top" == w || "!attrs" == w || u && 0 != w.lastIndexOf(u, 0) || h.push("<" + w);
            }
            m && (!u || "close" == v && 0 == m.tagName.lastIndexOf(u, 0)) && h.push("</" + m.tagName + ">");
          } else {
            var b = i[l.state.tagName],
                C = b && b.attrs,
                x = i["!attrs"];
            if (!C && !x) return;

            if (C) {
              if (x) {
                var k = {};

                for (var I in x) {
                  x.hasOwnProperty(I) && (k[I] = x[I]);
                }

                for (var I in C) {
                  C.hasOwnProperty(I) && (k[I] = C[I]);
                }

                C = k;
              }
            } else C = x;

            if ("string" == s.type || "=" == s.string) {
              var M,
                  g = n.getRange(t(a.line, Math.max(0, a.ch - 60)), t(a.line, "string" == s.type ? s.start : s.end)),
                  S = g.match(/([^\s\u00a0=<>\"\']+)=$/);
              if (!S || !C.hasOwnProperty(S[1]) || !(M = C[S[1]])) return;

              if ("function" == typeof M && (M = M.call(this, n)), "string" == s.type) {
                u = s.string;
                var L = 0;
                /['"]/.test(s.string.charAt(0)) && (o = s.string.charAt(0), u = s.string.slice(1), L++);
                var T = s.string.length;
                /['"]/.test(s.string.charAt(T - 1)) && (o = s.string.charAt(T - 1), u = s.string.substr(L, T - 2)), d = !0;
              }

              for (var A = 0; A < M.length; ++A) {
                u && 0 != M[A].lastIndexOf(u, 0) || h.push(o + M[A] + o);
              }
            } else for (var O in "attribute" == s.type && (u = s.string, d = !0), C) {
              !C.hasOwnProperty(O) || u && 0 != O.lastIndexOf(u, 0) || h.push(O);
            }
          }

          return {
            list: h,
            from: d ? t(a.line, null == c ? s.start : c) : a,
            to: d ? t(a.line, s.end) : a
          };
        }
      }
    });
  }(n(0));
}, function (e, t, n) {
  !function (e) {
    "use strict";

    var t = "CodeMirror-lint-markers";

    function n(e) {
      e.parentNode && e.parentNode.removeChild(e);
    }

    function r(t, r, i) {
      var o = function (t, n) {
        var r = document.createElement("div");

        function i(t) {
          if (!r.parentNode) return e.off(document, "mousemove", i);
          r.style.top = Math.max(0, t.clientY - r.offsetHeight - 5) + "px", r.style.left = t.clientX + 5 + "px";
        }

        return r.className = "CodeMirror-lint-tooltip", r.appendChild(n.cloneNode(!0)), document.body.appendChild(r), e.on(document, "mousemove", i), i(t), null != r.style.opacity && (r.style.opacity = 1), r;
      }(t, r);

      function a() {
        e.off(i, "mouseout", a), o && (function (e) {
          e.parentNode && (null == e.style.opacity && n(e), e.style.opacity = 0, setTimeout(function () {
            n(e);
          }, 600));
        }(o), o = null);
      }

      var s = setInterval(function () {
        if (o) for (var e = i;; e = e.parentNode) {
          if (e && 11 == e.nodeType && (e = e.host), e == document.body) return;

          if (!e) {
            a();
            break;
          }
        }
        if (!o) return clearInterval(s);
      }, 400);
      e.on(i, "mouseout", a);
    }

    function i(e, t, n) {
      this.marked = [], this.options = t, this.timeout = null, this.hasGutter = n, this.onMouseOver = function (t) {
        !function (e, t) {
          var n = t.target || t.srcElement;

          if (/\bCodeMirror-lint-mark-/.test(n.className)) {
            for (var i = n.getBoundingClientRect(), o = (i.left + i.right) / 2, a = (i.top + i.bottom) / 2, s = e.findMarksAt(e.coordsChar({
              left: o,
              top: a
            }, "client")), u = [], c = 0; c < s.length; ++c) {
              var h = s[c].__annotation;
              h && u.push(h);
            }

            u.length && function (e, t) {
              for (var n = t.target || t.srcElement, i = document.createDocumentFragment(), o = 0; o < e.length; o++) {
                var a = e[o];
                i.appendChild(l(a));
              }

              r(t, i, n);
            }(u, t);
          }
        }(e, t);
      }, this.waitingFor = 0;
    }

    function o(e) {
      var n = e.state.lint;
      n.hasGutter && e.clearGutter(t);

      for (var r = 0; r < n.marked.length; ++r) {
        n.marked[r].clear();
      }

      n.marked.length = 0;
    }

    function a(t, n, i, o) {
      var a = document.createElement("div"),
          s = a;
      return a.className = "CodeMirror-lint-marker-" + n, i && ((s = a.appendChild(document.createElement("div"))).className = "CodeMirror-lint-marker-multiple"), 0 != o && e.on(s, "mouseover", function (e) {
        r(e, t, s);
      }), a;
    }

    function s(e, t) {
      return "error" == e ? e : t;
    }

    function l(e) {
      var t = e.severity;
      t || (t = "error");
      var n = document.createElement("div");
      return n.className = "CodeMirror-lint-message-" + t, void 0 !== e.messageHTML ? n.innerHTML = e.messageHTML : n.appendChild(document.createTextNode(e.message)), n;
    }

    function u(t) {
      var n = t.state.lint,
          r = n.options,
          i = r.options || r,
          o = r.getAnnotations || t.getHelper(e.Pos(0, 0), "lint");
      if (o) if (r.async || o.async) !function (t, n, r) {
        var i = t.state.lint,
            o = ++i.waitingFor;

        function a() {
          o = -1, t.off("change", a);
        }

        t.on("change", a), n(t.getValue(), function (n, r) {
          t.off("change", a), i.waitingFor == o && (r && n instanceof e && (n = r), t.operation(function () {
            c(t, n);
          }));
        }, r, t);
      }(t, o, i);else {
        var a = o(t.getValue(), i, t);
        if (!a) return;
        a.then ? a.then(function (e) {
          t.operation(function () {
            c(t, e);
          });
        }) : t.operation(function () {
          c(t, a);
        });
      }
    }

    function c(e, n) {
      o(e);

      for (var r = e.state.lint, i = r.options, u = function (e) {
        for (var t = [], n = 0; n < e.length; ++n) {
          var r = e[n],
              i = r.from.line;
          (t[i] || (t[i] = [])).push(r);
        }

        return t;
      }(n), c = 0; c < u.length; ++c) {
        var h = u[c];

        if (h) {
          for (var d = null, f = r.hasGutter && document.createDocumentFragment(), p = 0; p < h.length; ++p) {
            var g = h[p],
                v = g.severity;
            v || (v = "error"), d = s(d, v), i.formatAnnotation && (g = i.formatAnnotation(g)), r.hasGutter && f.appendChild(l(g)), g.to && r.marked.push(e.markText(g.from, g.to, {
              className: "CodeMirror-lint-mark-" + v,
              __annotation: g
            }));
          }

          r.hasGutter && e.setGutterMarker(c, t, a(f, d, h.length > 1, r.options.tooltips));
        }
      }

      i.onUpdateLinting && i.onUpdateLinting(n, u, e);
    }

    function h(e) {
      var t = e.state.lint;
      t && (clearTimeout(t.timeout), t.timeout = setTimeout(function () {
        u(e);
      }, t.options.delay || 500));
    }

    e.defineOption("lint", !1, function (n, r, a) {
      if (a && a != e.Init && (o(n), !1 !== n.state.lint.options.lintOnChange && n.off("change", h), e.off(n.getWrapperElement(), "mouseover", n.state.lint.onMouseOver), clearTimeout(n.state.lint.timeout), delete n.state.lint), r) {
        for (var s = n.getOption("gutters"), l = !1, c = 0; c < s.length; ++c) {
          s[c] == t && (l = !0);
        }

        var d = n.state.lint = new i(n, function (e, t) {
          return t instanceof Function ? {
            getAnnotations: t
          } : (t && !0 !== t || (t = {}), t);
        }(0, r), l);
        !1 !== d.options.lintOnChange && n.on("change", h), 0 != d.options.tooltips && "gutter" != d.options.tooltips && e.on(n.getWrapperElement(), "mouseover", d.onMouseOver), u(n);
      }
    }), e.defineExtension("performLint", function () {
      this.state.lint && u(this);
    });
  }(n(0));
}, function (e, t, n) {
  !function (e) {
    "use strict";

    var t,
        n,
        r = e.Pos;

    function i(e, t) {
      for (var n = function (e) {
        var t = e.flags;
        return null != t ? t : (e.ignoreCase ? "i" : "") + (e.global ? "g" : "") + (e.multiline ? "m" : "");
      }(e), r = n, i = 0; i < t.length; i++) {
        -1 == r.indexOf(t.charAt(i)) && (r += t.charAt(i));
      }

      return n == r ? e : new RegExp(e.source, r);
    }

    function o(e, t, n) {
      t = i(t, "g");

      for (var o = n.line, a = n.ch, s = e.lastLine(); o <= s; o++, a = 0) {
        t.lastIndex = a;
        var l = e.getLine(o),
            u = t.exec(l);
        if (u) return {
          from: r(o, u.index),
          to: r(o, u.index + u[0].length),
          match: u
        };
      }
    }

    function a(e, t) {
      for (var n, r = 0;;) {
        t.lastIndex = r;
        var i = t.exec(e);
        if (!i) return n;
        if ((r = (n = i).index + (n[0].length || 1)) == e.length) return n;
      }
    }

    function s(e, t, n, r) {
      if (e.length == t.length) return n;

      for (var i = 0, o = n + Math.max(0, e.length - t.length);;) {
        if (i == o) return i;
        var a = i + o >> 1,
            s = r(e.slice(0, a)).length;
        if (s == n) return a;
        s > n ? o = a : i = a + 1;
      }
    }

    function l(e, l, u, c) {
      var h;
      this.atOccurrence = !1, this.doc = e, u = u ? e.clipPos(u) : r(0, 0), this.pos = {
        from: u,
        to: u
      }, "object" == _typeof(c) ? h = c.caseFold : (h = c, c = null), "string" == typeof l ? (null == h && (h = !1), this.matches = function (i, o) {
        return (i ? function (e, i, o, a) {
          if (!i.length) return null;
          var l = a ? t : n,
              u = l(i).split(/\r|\n\r?/);

          e: for (var c = o.line, h = o.ch, d = e.firstLine() - 1 + u.length; c >= d; c--, h = -1) {
            var f = e.getLine(c);
            h > -1 && (f = f.slice(0, h));
            var p = l(f);

            if (1 == u.length) {
              var g = p.lastIndexOf(u[0]);
              if (-1 == g) continue e;
              return {
                from: r(c, s(f, p, g, l)),
                to: r(c, s(f, p, g + u[0].length, l))
              };
            }

            var v = u[u.length - 1];

            if (p.slice(0, v.length) == v) {
              for (var m = 1, o = c - u.length + 1; m < u.length - 1; m++) {
                if (l(e.getLine(o + m)) != u[m]) continue e;
              }

              var b = e.getLine(c + 1 - u.length),
                  y = l(b);
              if (y.slice(y.length - u[0].length) == u[0]) return {
                from: r(c + 1 - u.length, s(b, y, b.length - u[0].length, l)),
                to: r(c, s(f, p, v.length, l))
              };
            }
          }
        } : function (e, i, o, a) {
          if (!i.length) return null;
          var l = a ? t : n,
              u = l(i).split(/\r|\n\r?/);

          e: for (var c = o.line, h = o.ch, d = e.lastLine() + 1 - u.length; c <= d; c++, h = 0) {
            var f = e.getLine(c).slice(h),
                p = l(f);

            if (1 == u.length) {
              var g = p.indexOf(u[0]);
              if (-1 == g) continue e;
              var o = s(f, p, g, l) + h;
              return {
                from: r(c, s(f, p, g, l) + h),
                to: r(c, s(f, p, g + u[0].length, l) + h)
              };
            }

            var v = p.length - u[0].length;

            if (p.slice(v) == u[0]) {
              for (var m = 1; m < u.length - 1; m++) {
                if (l(e.getLine(c + m)) != u[m]) continue e;
              }

              var b = e.getLine(c + u.length - 1),
                  y = l(b),
                  A = u[u.length - 1];
              if (y.slice(0, A.length) == A) return {
                from: r(c, s(f, p, v, l) + h),
                to: r(c + u.length - 1, s(b, y, A.length, l))
              };
            }
          }
        })(e, l, o, h);
      }) : (l = i(l, "gm"), c && !1 === c.multiline ? this.matches = function (t, n) {
        return (t ? function (e, t, n) {
          t = i(t, "g");

          for (var o = n.line, s = n.ch, l = e.firstLine(); o >= l; o--, s = -1) {
            var u = e.getLine(o);
            s > -1 && (u = u.slice(0, s));
            var c = a(u, t);
            if (c) return {
              from: r(o, c.index),
              to: r(o, c.index + c[0].length),
              match: c
            };
          }
        } : o)(e, l, n);
      } : this.matches = function (t, n) {
        return (t ? function (e, t, n) {
          t = i(t, "gm");

          for (var o, s = 1, l = n.line, u = e.firstLine(); l >= u;) {
            for (var c = 0; c < s; c++) {
              var h = e.getLine(l--);
              o = null == o ? h.slice(0, n.ch) : h + "\n" + o;
            }

            s *= 2;
            var d = a(o, t);

            if (d) {
              var f = o.slice(0, d.index).split("\n"),
                  p = d[0].split("\n"),
                  g = l + f.length,
                  v = f[f.length - 1].length;
              return {
                from: r(g, v),
                to: r(g + p.length - 1, 1 == p.length ? v + p[0].length : p[p.length - 1].length),
                match: d
              };
            }
          }
        } : function (e, t, n) {
          if (!function (e) {
            return /\\s|\\n|\n|\\W|\\D|\[\^/.test(e.source);
          }(t)) return o(e, t, n);
          t = i(t, "gm");

          for (var a, s = 1, l = n.line, u = e.lastLine(); l <= u;) {
            for (var c = 0; c < s && !(l > u); c++) {
              var h = e.getLine(l++);
              a = null == a ? h : a + "\n" + h;
            }

            s *= 2, t.lastIndex = n.ch;
            var d = t.exec(a);

            if (d) {
              var f = a.slice(0, d.index).split("\n"),
                  p = d[0].split("\n"),
                  g = n.line + f.length - 1,
                  v = f[f.length - 1].length;
              return {
                from: r(g, v),
                to: r(g + p.length - 1, 1 == p.length ? v + p[0].length : p[p.length - 1].length),
                match: d
              };
            }
          }
        })(e, l, n);
      });
    }

    String.prototype.normalize ? (t = function t(e) {
      return e.normalize("NFD").toLowerCase();
    }, n = function n(e) {
      return e.normalize("NFD");
    }) : (t = function t(e) {
      return e.toLowerCase();
    }, n = function n(e) {
      return e;
    }), l.prototype = {
      findNext: function findNext() {
        return this.find(!1);
      },
      findPrevious: function findPrevious() {
        return this.find(!0);
      },
      find: function find(t) {
        for (var n = this.matches(t, this.doc.clipPos(t ? this.pos.from : this.pos.to)); n && 0 == e.cmpPos(n.from, n.to);) {
          t ? n.from.ch ? n.from = r(n.from.line, n.from.ch - 1) : n = n.from.line == this.doc.firstLine() ? null : this.matches(t, this.doc.clipPos(r(n.from.line - 1))) : n.to.ch < this.doc.getLine(n.to.line).length ? n.to = r(n.to.line, n.to.ch + 1) : n = n.to.line == this.doc.lastLine() ? null : this.matches(t, r(n.to.line + 1, 0));
        }

        if (n) return this.pos = n, this.atOccurrence = !0, this.pos.match || !0;
        var i = r(t ? this.doc.firstLine() : this.doc.lastLine() + 1, 0);
        return this.pos = {
          from: i,
          to: i
        }, this.atOccurrence = !1;
      },
      from: function from() {
        if (this.atOccurrence) return this.pos.from;
      },
      to: function to() {
        if (this.atOccurrence) return this.pos.to;
      },
      replace: function replace(t, n) {
        if (this.atOccurrence) {
          var i = e.splitLines(t);
          this.doc.replaceRange(i, this.pos.from, this.pos.to, n), this.pos.to = r(this.pos.from.line + i.length - 1, i[i.length - 1].length + (1 == i.length ? this.pos.from.ch : 0));
        }
      }
    }, e.defineExtension("getSearchCursor", function (e, t, n) {
      return new l(this.doc, e, t, n);
    }), e.defineDocExtension("getSearchCursor", function (e, t, n) {
      return new l(this, e, t, n);
    }), e.defineExtension("selectMatches", function (t, n) {
      for (var r = [], i = this.getSearchCursor(t, this.getCursor("from"), n); i.findNext() && !(e.cmpPos(i.to(), this.getCursor("to")) > 0);) {
        r.push({
          anchor: i.from(),
          head: i.to()
        });
      }

      r.length && this.setSelections(r, 0);
    });
  }(n(0));
}, function (e, t, n) {
  !function (e) {
    "use strict";

    var t = "CodeMirror-activeline",
        n = "CodeMirror-activeline-background",
        r = "CodeMirror-activeline-gutter";

    function i(e) {
      for (var i = 0; i < e.state.activeLines.length; i++) {
        e.removeLineClass(e.state.activeLines[i], "wrap", t), e.removeLineClass(e.state.activeLines[i], "background", n), e.removeLineClass(e.state.activeLines[i], "gutter", r);
      }
    }

    function o(e, o) {
      for (var a = [], s = 0; s < o.length; s++) {
        var l = o[s],
            u = e.getOption("styleActiveLine");

        if ("object" == _typeof(u) && u.nonEmpty ? l.anchor.line == l.head.line : l.empty()) {
          var c = e.getLineHandleVisualStart(l.head.line);
          a[a.length - 1] != c && a.push(c);
        }
      }

      (function (e, t) {
        if (e.length != t.length) return !1;

        for (var n = 0; n < e.length; n++) {
          if (e[n] != t[n]) return !1;
        }

        return !0;
      })(e.state.activeLines, a) || e.operation(function () {
        i(e);

        for (var o = 0; o < a.length; o++) {
          e.addLineClass(a[o], "wrap", t), e.addLineClass(a[o], "background", n), e.addLineClass(a[o], "gutter", r);
        }

        e.state.activeLines = a;
      });
    }

    function a(e, t) {
      o(e, t.ranges);
    }

    e.defineOption("styleActiveLine", !1, function (t, n, r) {
      var s = r != e.Init && r;
      n != s && (s && (t.off("beforeSelectionChange", a), i(t), delete t.state.activeLines), n && (t.state.activeLines = [], o(t, t.listSelections()), t.on("beforeSelectionChange", a)));
    });
  }(n(0));
}, function (e, t, n) {
  "use strict";

  var r = n(39);
  "string" == typeof r && (r = [[e.i, r, ""]]);
  var i = {
    hmr: !0,
    transform: void 0,
    insertInto: void 0
  };
  n(3)(r, i);
  r.locals && (e.exports = r.locals);
}, function (e, t, n) {
  var r = n(40);
  (e.exports = n(2)(!1)).push([e.i, ".vrv-ui-wrapper {\n  border: 0 none;\n  display: 'block';\n  font-weight: normal;\n  font-family: none;\n  font-style: normal;\n  font-size: initial;\n  line-height: initial;\n  margin: 0;\n  outline: 0;\n  overflow: hidden;\n  padding: 0;\n  text-align: initial;\n  vertical-align: baseline; }\n  .vrv-ui-wrapper *,\n  .vrv-ui-wrapper ::before,\n  .vrv-ui-wrapper ::after {\n    box-sizing: initial; }\n  .vrv-ui-wrapper .vrv-ui-views {\n    position: absolute;\n    overflow: scroll; }\n    .vrv-ui-wrapper .vrv-ui-views .vrv-ui-loading {\n      display: -webkit-flex;\n      display: flex;\n      -webkit-align-items: center;\n      align-items: center;\n      -webkit-justify-content: center;\n      justify-content: center;\n      height: 100%;\n      width: 100%; }\n      .vrv-ui-wrapper .vrv-ui-views .vrv-ui-loading .vrv-ui-loading-text {\n        text-align: center;\n        height: 100px; }\n        .vrv-ui-wrapper .vrv-ui-views .vrv-ui-loading .vrv-ui-loading-text:after {\n          margin-top: 20px;\n          display: block;\n          clear: both;\n          content: url(" + r(n(41)) + "); }\n    .vrv-ui-wrapper .vrv-ui-views .vrv-ui-view .vrv-ui-doc-wrapper {\n      background: whitesmoke;\n      margin: 0; }\n      .vrv-ui-wrapper .vrv-ui-views .vrv-ui-view .vrv-ui-doc-wrapper .vrv-ui-page-wrapper {\n        margin: auto auto;\n        background: white; }\n  .vrv-ui-wrapper .vrv-ui-xml {\n    position: absolute;\n    border-top: 2px solid lightgrey;\n    background: lightgray; }\n    .vrv-ui-wrapper .vrv-ui-xml .vrv-ui-xmlvalid {\n      display: none;\n      z-index: 5;\n      position: absolute;\n      min-height: 15px;\n      min-width: 15px;\n      background: green; }\n  .vrv-ui-wrapper svg {\n    display: block;\n    margin: 0 auto; }\n  .vrv-ui-wrapper .vrv-ui-toolbar {\n    width: 100%;\n    overflow: auto;\n    background: lightgrey;\n    min-height: 36px; }\n    .vrv-ui-wrapper .vrv-ui-toolbar .vrv-ui-separator {\n      float: left;\n      min-width: 1px;\n      height: 36px;\n      background-color: #bababa; }\n    .vrv-ui-wrapper .vrv-ui-toolbar .vrv-ui-btn, .vrv-ui-wrapper .vrv-ui-toolbar .vrv-ui-btn-icon-left, .vrv-ui-wrapper .vrv-ui-toolbar .vrv-ui-submenu .vrv-ui-btn-view-selector:before, .vrv-ui-wrapper .vrv-ui-toolbar .vrv-ui-btn-previous:before, .vrv-ui-wrapper .vrv-ui-toolbar .vrv-ui-submenu-content .vrv-ui-btn-view-document, .vrv-ui-wrapper .vrv-ui-toolbar .vrv-ui-submenu-content .vrv-ui-btn-view-responsive, .vrv-ui-wrapper .vrv-ui-toolbar .vrv-ui-submenu-content .vrv-ui-btn-view-editor, .vrv-ui-wrapper .vrv-ui-toolbar .vrv-ui-btn-icon, .vrv-ui-wrapper .vrv-ui-toolbar .vrv-ui-btn-next:before, .vrv-ui-wrapper .vrv-ui-toolbar .vrv-ui-btn-zoom-out:before, .vrv-ui-wrapper .vrv-ui-toolbar .vrv-ui-btn-zoom-in:before {\n      float: left;\n      padding: 9px 10px 0px 10px;\n      text-decoration: none;\n      height: 27px;\n      font-size: 16px; }\n    .vrv-ui-wrapper .vrv-ui-toolbar .vrv-ui-btn:hover, .vrv-ui-wrapper .vrv-ui-toolbar .vrv-ui-btn-icon-left:hover, .vrv-ui-wrapper .vrv-ui-toolbar .vrv-ui-submenu .vrv-ui-btn-view-selector:hover:before, .vrv-ui-wrapper .vrv-ui-toolbar .vrv-ui-btn-previous:hover:before, .vrv-ui-wrapper .vrv-ui-toolbar .vrv-ui-submenu-content .vrv-ui-btn-view-document:hover, .vrv-ui-wrapper .vrv-ui-toolbar .vrv-ui-submenu-content .vrv-ui-btn-view-responsive:hover, .vrv-ui-wrapper .vrv-ui-toolbar .vrv-ui-submenu-content .vrv-ui-btn-view-editor:hover, .vrv-ui-wrapper .vrv-ui-toolbar .vrv-ui-btn-icon:hover, .vrv-ui-wrapper .vrv-ui-toolbar .vrv-ui-btn-next:hover:before, .vrv-ui-wrapper .vrv-ui-toolbar .vrv-ui-btn-zoom-out:hover:before, .vrv-ui-wrapper .vrv-ui-toolbar .vrv-ui-btn-zoom-in:hover:before {\n      background-color: #bababa;\n      cursor: pointer; }\n    .vrv-ui-wrapper .vrv-ui-toolbar .vrv-ui-btn:active, .vrv-ui-wrapper .vrv-ui-toolbar .vrv-ui-btn-icon-left:active, .vrv-ui-wrapper .vrv-ui-toolbar .vrv-ui-submenu .vrv-ui-btn-view-selector:active:before, .vrv-ui-wrapper .vrv-ui-toolbar .vrv-ui-btn-previous:active:before, .vrv-ui-wrapper .vrv-ui-toolbar .vrv-ui-submenu-content .vrv-ui-btn-view-document:active, .vrv-ui-wrapper .vrv-ui-toolbar .vrv-ui-submenu-content .vrv-ui-btn-view-responsive:active, .vrv-ui-wrapper .vrv-ui-toolbar .vrv-ui-submenu-content .vrv-ui-btn-view-editor:active, .vrv-ui-wrapper .vrv-ui-toolbar .vrv-ui-btn-icon:active, .vrv-ui-wrapper .vrv-ui-toolbar .vrv-ui-btn-next:active:before, .vrv-ui-wrapper .vrv-ui-toolbar .vrv-ui-btn-zoom-out:active:before, .vrv-ui-wrapper .vrv-ui-toolbar .vrv-ui-btn-zoom-in:active:before {\n      background-color: #a0a0a0;\n      cursor: pointer; }\n    .vrv-ui-wrapper .vrv-ui-toolbar .vrv-ui-btn-disabled {\n      opacity: 0.2;\n      pointer-events: none; }\n    .vrv-ui-wrapper .vrv-ui-toolbar .vrv-ui-btn-icon-left, .vrv-ui-wrapper .vrv-ui-toolbar .vrv-ui-submenu .vrv-ui-btn-view-selector:before, .vrv-ui-wrapper .vrv-ui-toolbar .vrv-ui-btn-previous:before, .vrv-ui-wrapper .vrv-ui-toolbar .vrv-ui-submenu-content .vrv-ui-btn-view-document, .vrv-ui-wrapper .vrv-ui-toolbar .vrv-ui-submenu-content .vrv-ui-btn-view-responsive, .vrv-ui-wrapper .vrv-ui-toolbar .vrv-ui-submenu-content .vrv-ui-btn-view-editor {\n      padding-left: 30px;\n      background-repeat: no-repeat;\n      background-position: 8px center !important; }\n    .vrv-ui-wrapper .vrv-ui-toolbar .vrv-ui-btn-icon, .vrv-ui-wrapper .vrv-ui-toolbar .vrv-ui-btn-next:before, .vrv-ui-wrapper .vrv-ui-toolbar .vrv-ui-btn-zoom-out:before, .vrv-ui-wrapper .vrv-ui-toolbar .vrv-ui-btn-zoom-in:before {\n      padding-right: 30px;\n      background-repeat: no-repeat;\n      background-position: right 8px center !important; }\n    .vrv-ui-wrapper .vrv-ui-toolbar .vrv-ui-submenu .vrv-ui-btn-view-selector:before {\n      background: url(" + r(n(42)) + ") no-repeat;\n      content: 'View'; }\n    .vrv-ui-wrapper .vrv-ui-toolbar .vrv-ui-btn-previous:before {\n      background: url(" + r(n(43)) + ") no-repeat;\n      content: 'Previous'; }\n    .vrv-ui-wrapper .vrv-ui-toolbar .vrv-ui-btn-next:before {\n      background: url(" + r(n(44)) + ") no-repeat;\n      content: 'Next'; }\n    .vrv-ui-wrapper .vrv-ui-toolbar .vrv-ui-btn-zoom-out:before {\n      background: url(" + r(n(45)) + ") no-repeat;\n      content: 'Zoom out'; }\n    .vrv-ui-wrapper .vrv-ui-toolbar .vrv-ui-btn-zoom-in:before {\n      background: url(" + r(n(46)) + ") no-repeat;\n      content: 'Zoom in'; }\n    .vrv-ui-wrapper .vrv-ui-toolbar .vrv-ui-submenu-content {\n      display: none;\n      position: absolute;\n      margin-top: 36px;\n      background-color: #ededed;\n      z-index: 1;\n      -webkit-flex-direction: column;\n      flex-direction: column; }\n      .vrv-ui-wrapper .vrv-ui-toolbar .vrv-ui-submenu-content .vrv-ui-btn-checked:after {\n        content: url(" + r(n(47)) + ");\n        margin-left: 8px; }\n      .vrv-ui-wrapper .vrv-ui-toolbar .vrv-ui-submenu-content .vrv-ui-btn-view-document {\n        background: url(" + r(n(48)) + ") no-repeat; }\n      .vrv-ui-wrapper .vrv-ui-toolbar .vrv-ui-submenu-content .vrv-ui-btn-view-document:before {\n        content: 'Document'; }\n      .vrv-ui-wrapper .vrv-ui-toolbar .vrv-ui-submenu-content .vrv-ui-btn-view-responsive {\n        background: url(" + r(n(49)) + ") no-repeat; }\n      .vrv-ui-wrapper .vrv-ui-toolbar .vrv-ui-submenu-content .vrv-ui-btn-view-responsive:before {\n        content: 'Responsive'; }\n      .vrv-ui-wrapper .vrv-ui-toolbar .vrv-ui-submenu-content .vrv-ui-btn-view-editor {\n        background: url(" + r(n(50)) + ") no-repeat; }\n      .vrv-ui-wrapper .vrv-ui-toolbar .vrv-ui-submenu-content .vrv-ui-btn-view-editor:before {\n        content: 'Editor'; }\n    .vrv-ui-wrapper .vrv-ui-toolbar .vrv-ui-submenu:hover .vrv-ui-submenu-content {\n      display: -webkit-flex;\n      display: flex; }\n\n@media screen and (max-width: 600px) {\n  .vrv-ui-wrapper .vrv-ui-toolbar .vrv-ui-btn, .vrv-ui-wrapper .vrv-ui-toolbar .vrv-ui-btn-icon-left, .vrv-ui-wrapper .vrv-ui-toolbar .vrv-ui-submenu .vrv-ui-btn-view-selector:before, .vrv-ui-wrapper .vrv-ui-toolbar .vrv-ui-btn-previous:before, .vrv-ui-wrapper .vrv-ui-toolbar .vrv-ui-submenu-content .vrv-ui-btn-view-document, .vrv-ui-wrapper .vrv-ui-toolbar .vrv-ui-submenu-content .vrv-ui-btn-view-responsive, .vrv-ui-wrapper .vrv-ui-toolbar .vrv-ui-submenu-content .vrv-ui-btn-view-editor, .vrv-ui-wrapper .vrv-ui-toolbar .vrv-ui-btn-icon, .vrv-ui-wrapper .vrv-ui-toolbar .vrv-ui-btn-next:before, .vrv-ui-wrapper .vrv-ui-toolbar .vrv-ui-btn-zoom-out:before, .vrv-ui-wrapper .vrv-ui-toolbar .vrv-ui-btn-zoom-in:before {\n    content: ''; } }\n", ""]);
}, function (e, t) {
  e.exports = function (e) {
    return "string" != typeof e ? e : (/^['"].*['"]$/.test(e) && (e = e.slice(1, -1)), /["'() \t\n]/.test(e) ? '"' + e.replace(/"/g, '\\"').replace(/\n/g, "\\n") + '"' : e);
  };
}, function (e, t, n) {
  "use strict";

  e.exports = "data:image/svg+xml;base64,PCEtLSBCeSBTYW0gSGVyYmVydCAoQHNoZXJiKSwgZm9yIGV2ZXJ5b25lLiBNb3JlIEAgaHR0cDovL2dvby5nbC83QUp6YkwgLS0+Cjxzdmcgd2lkdGg9IjU4IiBoZWlnaHQ9IjU4IiB2aWV3Qm94PSIwIDAgNTggNTgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiAgICA8ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPgogICAgICAgIDxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKDIgMSkiIHN0cm9rZT0iIzQ0NCIgc3Ryb2tlLXdpZHRoPSIxLjUiPgogICAgICAgICAgICA8Y2lyY2xlIGN4PSI0Mi42MDEiIGN5PSIxMS40NjIiIHI9IjUiIGZpbGwtb3BhY2l0eT0iMSIgZmlsbD0iIzQ0NCI+CiAgICAgICAgICAgICAgICA8YW5pbWF0ZSBhdHRyaWJ1dGVOYW1lPSJmaWxsLW9wYWNpdHkiCiAgICAgICAgICAgICAgICAgICAgIGJlZ2luPSIwcyIgZHVyPSIxLjNzIgogICAgICAgICAgICAgICAgICAgICB2YWx1ZXM9IjE7MDswOzA7MDswOzA7MCIgY2FsY01vZGU9ImxpbmVhciIKICAgICAgICAgICAgICAgICAgICAgcmVwZWF0Q291bnQ9ImluZGVmaW5pdGUiIC8+CiAgICAgICAgICAgIDwvY2lyY2xlPgogICAgICAgICAgICA8Y2lyY2xlIGN4PSI0OS4wNjMiIGN5PSIyNy4wNjMiIHI9IjUiIGZpbGwtb3BhY2l0eT0iMCIgZmlsbD0iIzQ0NCI+CiAgICAgICAgICAgICAgICA8YW5pbWF0ZSBhdHRyaWJ1dGVOYW1lPSJmaWxsLW9wYWNpdHkiCiAgICAgICAgICAgICAgICAgICAgIGJlZ2luPSIwcyIgZHVyPSIxLjNzIgogICAgICAgICAgICAgICAgICAgICB2YWx1ZXM9IjA7MTswOzA7MDswOzA7MCIgY2FsY01vZGU9ImxpbmVhciIKICAgICAgICAgICAgICAgICAgICAgcmVwZWF0Q291bnQ9ImluZGVmaW5pdGUiIC8+CiAgICAgICAgICAgIDwvY2lyY2xlPgogICAgICAgICAgICA8Y2lyY2xlIGN4PSI0Mi42MDEiIGN5PSI0Mi42NjMiIHI9IjUiIGZpbGwtb3BhY2l0eT0iMCIgZmlsbD0iIzQ0NCI+CiAgICAgICAgICAgICAgICA8YW5pbWF0ZSBhdHRyaWJ1dGVOYW1lPSJmaWxsLW9wYWNpdHkiCiAgICAgICAgICAgICAgICAgICAgIGJlZ2luPSIwcyIgZHVyPSIxLjNzIgogICAgICAgICAgICAgICAgICAgICB2YWx1ZXM9IjA7MDsxOzA7MDswOzA7MCIgY2FsY01vZGU9ImxpbmVhciIKICAgICAgICAgICAgICAgICAgICAgcmVwZWF0Q291bnQ9ImluZGVmaW5pdGUiIC8+CiAgICAgICAgICAgIDwvY2lyY2xlPgogICAgICAgICAgICA8Y2lyY2xlIGN4PSIyNyIgY3k9IjQ5LjEyNSIgcj0iNSIgZmlsbC1vcGFjaXR5PSIwIiBmaWxsPSIjNDQ0Ij4KICAgICAgICAgICAgICAgIDxhbmltYXRlIGF0dHJpYnV0ZU5hbWU9ImZpbGwtb3BhY2l0eSIKICAgICAgICAgICAgICAgICAgICAgYmVnaW49IjBzIiBkdXI9IjEuM3MiCiAgICAgICAgICAgICAgICAgICAgIHZhbHVlcz0iMDswOzA7MTswOzA7MDswIiBjYWxjTW9kZT0ibGluZWFyIgogICAgICAgICAgICAgICAgICAgICByZXBlYXRDb3VudD0iaW5kZWZpbml0ZSIgLz4KICAgICAgICAgICAgPC9jaXJjbGU+CiAgICAgICAgICAgIDxjaXJjbGUgY3g9IjExLjM5OSIgY3k9IjQyLjY2MyIgcj0iNSIgZmlsbC1vcGFjaXR5PSIwIiBmaWxsPSIjNDQ0Ij4KICAgICAgICAgICAgICAgIDxhbmltYXRlIGF0dHJpYnV0ZU5hbWU9ImZpbGwtb3BhY2l0eSIKICAgICAgICAgICAgICAgICAgICAgYmVnaW49IjBzIiBkdXI9IjEuM3MiCiAgICAgICAgICAgICAgICAgICAgIHZhbHVlcz0iMDswOzA7MDsxOzA7MDswIiBjYWxjTW9kZT0ibGluZWFyIgogICAgICAgICAgICAgICAgICAgICByZXBlYXRDb3VudD0iaW5kZWZpbml0ZSIgLz4KICAgICAgICAgICAgPC9jaXJjbGU+CiAgICAgICAgICAgIDxjaXJjbGUgY3g9IjQuOTM4IiBjeT0iMjcuMDYzIiByPSI1IiBmaWxsLW9wYWNpdHk9IjAiIGZpbGw9IiM0NDQiPgogICAgICAgICAgICAgICAgPGFuaW1hdGUgYXR0cmlidXRlTmFtZT0iZmlsbC1vcGFjaXR5IgogICAgICAgICAgICAgICAgICAgICBiZWdpbj0iMHMiIGR1cj0iMS4zcyIKICAgICAgICAgICAgICAgICAgICAgdmFsdWVzPSIwOzA7MDswOzA7MTswOzAiIGNhbGNNb2RlPSJsaW5lYXIiCiAgICAgICAgICAgICAgICAgICAgIHJlcGVhdENvdW50PSJpbmRlZmluaXRlIiAvPgogICAgICAgICAgICA8L2NpcmNsZT4KICAgICAgICAgICAgPGNpcmNsZSBjeD0iMTEuMzk5IiBjeT0iMTEuNDYyIiByPSI1IiBmaWxsLW9wYWNpdHk9IjAiIGZpbGw9IiM0NDQiPgogICAgICAgICAgICAgICAgPGFuaW1hdGUgYXR0cmlidXRlTmFtZT0iZmlsbC1vcGFjaXR5IgogICAgICAgICAgICAgICAgICAgICBiZWdpbj0iMHMiIGR1cj0iMS4zcyIKICAgICAgICAgICAgICAgICAgICAgdmFsdWVzPSIwOzA7MDswOzA7MDsxOzAiIGNhbGNNb2RlPSJsaW5lYXIiCiAgICAgICAgICAgICAgICAgICAgIHJlcGVhdENvdW50PSJpbmRlZmluaXRlIiAvPgogICAgICAgICAgICA8L2NpcmNsZT4KICAgICAgICAgICAgPGNpcmNsZSBjeD0iMjciIGN5PSI1IiByPSI1IiBmaWxsLW9wYWNpdHk9IjAiIGZpbGw9IiM0NDQiPgogICAgICAgICAgICAgICAgPGFuaW1hdGUgYXR0cmlidXRlTmFtZT0iZmlsbC1vcGFjaXR5IgogICAgICAgICAgICAgICAgICAgICBiZWdpbj0iMHMiIGR1cj0iMS4zcyIKICAgICAgICAgICAgICAgICAgICAgdmFsdWVzPSIwOzA7MDswOzA7MDswOzEiIGNhbGNNb2RlPSJsaW5lYXIiCiAgICAgICAgICAgICAgICAgICAgIHJlcGVhdENvdW50PSJpbmRlZmluaXRlIiAvPgogICAgICAgICAgICA8L2NpcmNsZT4KICAgICAgICA8L2c+CiAgICA8L2c+Cjwvc3ZnPg==";
}, function (e, t, n) {
  "use strict";

  e.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAQAAAC1+jfqAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAAmJLR0QAAKqNIzIAAAAJcEhZcwAADdcAAA3XAUIom3gAAAAHdElNRQfiCxANHSx1/eULAAAASElEQVQoz2NgIAAYGQoYLPDIn2Bk+I/fBCaGk3jl8csSBRgZdBh08MhfYWT4yMCHR8EnJoqtoNwXDAwnGP7jgYSDmmBkEXQBACUPGkcARE4FAAAAJXRFWHRkYXRlOmNyZWF0ZQAyMDE4LTExLTE2VDEzOjI5OjQ0KzAxOjAw6Y0ySQAAACV0RVh0ZGF0ZTptb2RpZnkAMjAxOC0xMS0xNlQxMzoyOTo0NCswMTowMJjQivUAAAAZdEVYdFNvZnR3YXJlAHd3dy5pbmtzY2FwZS5vcmeb7jwaAAAAAElFTkSuQmCC";
}, function (e, t, n) {
  "use strict";

  e.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAQAAAC1+jfqAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAAmJLR0QAAKqNIzIAAAAJcEhZcwAADdcAAA3XAUIom3gAAAAHdElNRQfiCw8SIyFViSFPAAAAMUlEQVQoz2NgwAYKGPoZ8IAChv8M/xl68Ev/ZggZQtJMDEQDAlYMTiU9DAz4lMCjGwCHoTEUp7zHkwAAACV0RVh0ZGF0ZTpjcmVhdGUAMjAxOC0xMS0xNVQxODozNTozMyswMTowMDNcMcEAAAAldEVYdGRhdGU6bW9kaWZ5ADIwMTgtMTEtMTVUMTg6MzU6MzMrMDE6MDBCAYl9AAAAGXRFWHRTb2Z0d2FyZQB3d3cuaW5rc2NhcGUub3Jnm+48GgAAAABJRU5ErkJggg==";
}, function (e, t, n) {
  "use strict";

  e.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAQAAAC1+jfqAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAAmJLR0QAAKqNIzIAAAAJcEhZcwAADdcAAA3XAUIom3gAAAAHdElNRQfiCw8SJAEhppdAAAAAS0lEQVQoz2NmgIF+Bk2GEww4QQ/Df4b/DAW4FYQw/B7CSpgwFDAz4AXRDH/wWZHA8BefdArDP3zSmfil8xj+4/deBSHfMzC0Y5cGADxeMd4Zzt8wAAAAJXRFWHRkYXRlOmNyZWF0ZQAyMDE4LTExLTE1VDE4OjM2OjAxKzAxOjAwwXucCAAAACV0RVh0ZGF0ZTptb2RpZnkAMjAxOC0xMS0xNVQxODozNjowMSswMTowMLAmJLQAAAAZdEVYdFNvZnR3YXJlAHd3dy5pbmtzY2FwZS5vcmeb7jwaAAAAAElFTkSuQmCC";
}, function (e, t, n) {
  "use strict";

  e.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAQAAAC1+jfqAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAAmJLR0QAAKqNIzIAAAAJcEhZcwAADdcAAA3XAUIom3gAAAAHdElNRQfiCw8SIg7nQy1XAAAA1ElEQVQoz63Qr05CARTH8Q93EAjOgc0XoLjJrAQykc3CI/BKTJ6AwSiMQiFBcDCDjWSSQNFN5595DKL3XtxMnvY953vObztAomti685Ix686NRfCzoMQxirZcWIuTNVQULcUBlmhK0wzXLIW2mljItRykU2h/w0FW0UnzlzuO1d2Ht06/8KiF2UFz+73wquixFt6cCTUcxEtoZdiR1gq/fCxjdDIboyFtaayIy0bYZh/VMVACO8+hDD0ZKGal9r6blzraWAhrA6VbFWt/k2Z8Zcyc/EJCG9IgmOKZ2IAAAAldEVYdGRhdGU6Y3JlYXRlADIwMTgtMTEtMTVUMTg6MzQ6MTQrMDE6MDBbHGMMAAAAJXRFWHRkYXRlOm1vZGlmeQAyMDE4LTExLTE1VDE4OjM0OjE0KzAxOjAwKkHbsAAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAAASUVORK5CYII=";
}, function (e, t, n) {
  "use strict";

  e.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAQAAAC1+jfqAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAAmJLR0QAAKqNIzIAAAAJcEhZcwAADdcAAA3XAUIom3gAAAAHdElNRQfiCw8SHzKixBluAAAA3UlEQVQoz63QvUqCARQG4EfRoSFCg4Zoa3ARklYHWx2FFu8g76LriLwCUVzExcVJB1Ea2pyadHCopOiHTpP4WdDUWd8H3nMOkNbQs/Sgo+7XHBsKYeVJCF25ZJw2FPoKSCkZC60kaAh9UHSKrJlQ24KeUADXrkBFaG7ilKWMQ0WXLqxN3Fp5du9ss8GbrJRXC2uPFt5lpH1sKzpCaaeiKtxsQV0Yy+LEEQ7MhXLyjq4wU7FnX9VcaO8+KqclhE9fQmh7MZLfRTVNdyZulDESpj9JcvKm/0YG/EUGzr8BPXNPmo0EP88AAAAldEVYdGRhdGU6Y3JlYXRlADIwMTgtMTEtMTVUMTg6MzE6NTArMDE6MDDNMIKhAAAAJXRFWHRkYXRlOm1vZGlmeQAyMDE4LTExLTE1VDE4OjMxOjUwKzAxOjAwvG06HQAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAAASUVORK5CYII=";
}, function (e, t, n) {
  "use strict";

  e.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAMCAYAAABWdVznAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAACXBIWXMAAA3XAAAN1wFCKJt4AAABWWlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iWE1QIENvcmUgNS40LjAiPgogICA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPgogICAgICA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIgogICAgICAgICAgICB4bWxuczp0aWZmPSJodHRwOi8vbnMuYWRvYmUuY29tL3RpZmYvMS4wLyI+CiAgICAgICAgIDx0aWZmOk9yaWVudGF0aW9uPjE8L3RpZmY6T3JpZW50YXRpb24+CiAgICAgIDwvcmRmOkRlc2NyaXB0aW9uPgogICA8L3JkZjpSREY+CjwveDp4bXBtZXRhPgpMwidZAAAAxUlEQVQoFY2QsQ5BQRBFFxG/oNb7BZVERSLRKWn8ik6r8z0qiQ9Qi1aBgnveuyNvN5GY5L47c+fO7L5N6b9ohe2bhFAw/be1pfhW9LMSc9vKRszgmRoRNE8jj3qlHPNdGAtZhLFjlWtgfgkTa2mn5CD0LHTNCzFmMLVWLTpa3IvjGjNrmBkk4tTUV3ESaG6FufB0zZUIzLGsEgb6XgSGHua1mIj/qit946ih8qvAEM9IlK9Xq25QjITYTJ1dA6EZbIv4afwAUGQfW+i038kAAAAASUVORK5CYII=";
}, function (e, t, n) {
  "use strict";

  e.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAQAAAC1+jfqAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAAmJLR0QAAKqNIzIAAAAJcEhZcwAADdcAAA3XAUIom3gAAAAHdElNRQfiCw8TAiymZSImAAAA1UlEQVQoz4XRr0uDQRgA4Ef5wlgzKOJgWMRFMdjEtmBaMhhEw5YEk/+DwWC0GP0LBDGJGI1bGcxwzKJDZMiUtRnm58cdiu+F97h7eN/7QV3HxNgwGT27QFtN06U0FjwqkXmx6V0FzH/nvjcDI4tCpuXYhhHYcghO3OSFZsCaMzvWoxYPbjWE7Gehaj8C/WkqwKu7CAxTULYcgdI0zfonigqfQrQzTkFwDvZsg/sUFNcbgOe/QFf39zNw5CCiq67zhwqWzFlx5SIiNaf5tOnJxEfy5W31L56aPLv4cL4tAAAAJXRFWHRkYXRlOmNyZWF0ZQAyMDE4LTExLTE1VDE5OjAyOjQ0KzAxOjAwWpaiqwAAACV0RVh0ZGF0ZTptb2RpZnkAMjAxOC0xMS0xNVQxOTowMjo0NCswMTowMCvLGhcAAAAZdEVYdFNvZnR3YXJlAHd3dy5pbmtzY2FwZS5vcmeb7jwaAAAAAElFTkSuQmCC";
}, function (e, t, n) {
  "use strict";

  e.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAQAAAC1+jfqAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAAmJLR0QAAKqNIzIAAAAJcEhZcwAADdcAAA3XAUIom3gAAAAHdElNRQfiCw8TAxsHw7ZoAAAAfUlEQVQoz6XQvQ3CQAzF8d9FqYGSKnukoo2Y4CZggYxBgdjiJgEGYAHYgAmg4ENCGF2RvxvLfnryM1NJSFaW4fbiCKP7nypPXXk3EW04ndmag1MTCtY2oLOLHSAj6xsVpgtaRc9X0P0rPB2C92TDp78l+cf14GqwAOfaCXUeKG0ovNqfGMIAAAAldEVYdGRhdGU6Y3JlYXRlADIwMTgtMTEtMTVUMTk6MDM6MjcrMDE6MDBC09qPAAAAJXRFWHRkYXRlOm1vZGlmeQAyMDE4LTExLTE1VDE5OjAzOjI3KzAxOjAwM45iMwAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAAASUVORK5CYII=";
}, function (e, t, n) {
  "use strict";

  e.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAQAAAC1+jfqAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAAmJLR0QAAKqNIzIAAAAJcEhZcwAADdcAAA3XAUIom3gAAAAHdElNRQfiCw8TBBY2M1wSAAAAeUlEQVQoz5XQOxJAMBhF4WPMaLwqSruwNbVVZDFGh0ittJlf5ZEIxm2/U13wL6dHUzwoMQZBWPxJRIBCEAQd3jiho6KhpAZWl1NGBKElQGHI/bwnscvTwcJA9MYjic0Z2uLU5fnC0282F9YuY/FMdj/2g8/A+Jkv3gBdEVMf5F84UQAAACV0RVh0ZGF0ZTpjcmVhdGUAMjAxOC0xMS0xNVQxOTowNDoyMiswMTowMPI37lEAAAAldEVYdGRhdGU6bW9kaWZ5ADIwMTgtMTEtMTVUMTk6MDQ6MjIrMDE6MDCDalbtAAAAGXRFWHRTb2Z0d2FyZQB3d3cuaW5rc2NhcGUub3Jnm+48GgAAAABJRU5ErkJggg==";
}]);

},{}]},{},[1])(1)
});
