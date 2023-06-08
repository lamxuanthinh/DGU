(() => {
  "use strict";
  var e = {
      134: (e, n, t) => {
        t.d(n, { Z: () => a });
        var o = function (e, n, t) {
          if (t || 2 === arguments.length)
            for (var o, a = 0, r = n.length; a < r; a++)
              (!o && a in n) ||
                (o || (o = Array.prototype.slice.call(n, 0, a)), (o[a] = n[a]));
          return e.concat(o || Array.prototype.slice.call(n));
        };
        function a() {
          var e = {};
          return {
            on: function (n, t) {
              return (
                e[n] ? e[n].push(t) : (e[n] = [t]),
                function () {
                  var o = e[n].indexOf(t);
                  o > -1 && e[n].splice(o, 1);
                }
              );
            },
            emit: function (n) {
              for (var t = [], a = 1; a < arguments.length; a++)
                t[a - 1] = arguments[a];
              var r = e[n],
                i = e["*"];
              r &&
                o([], r, !0).forEach(function (e) {
                  return e.apply(void 0, t);
                }),
                i &&
                  o([], i, !0).forEach(function (e) {
                    return e.apply(void 0, o([n], t, !0));
                  });
            },
          };
        }
      },
    },
    n = {};
  function t(o) {
    var a = n[o];
    if (void 0 !== a) return a.exports;
    var r = (n[o] = { exports: {} });
    return e[o](r, r.exports, t), r.exports;
  }
  (t.d = (e, n) => {
    for (var o in n)
      t.o(n, o) &&
        !t.o(e, o) &&
        Object.defineProperty(e, o, { enumerable: !0, get: n[o] });
  }),
    (t.o = (e, n) => Object.prototype.hasOwnProperty.call(e, n)),
    (() => {
      var e = function (e, n, t) {
          if (t || 2 === arguments.length)
            for (var o, a = 0, r = n.length; a < r; a++)
              (!o && a in n) ||
                (o || (o = Array.prototype.slice.call(n, 0, a)), (o[a] = n[a]));
          return e.concat(o || Array.prototype.slice.call(n));
        },
        n = [],
        o = Object.getOwnPropertyNames(HTMLVideoElement.prototype),
        a = Object.getOwnPropertyNames(HTMLMediaElement.prototype);
      function r(e) {
        var t = {};
        return (
          n.forEach(function (n) {
            var o,
              a = e[n];
            (o = a) !== Object(o)
              ? (t[n] = a)
              : (t["$$" + n] = (function (e) {
                  if ("TimeRanges" === e.constructor.name) {
                    for (var n = [], t = 0; t < e.length; t++)
                      n.push([e.start(t), e.end(t)]);
                    return {
                      type: "TimeRanges",
                      argument: { length: e.length, data: n },
                    };
                  }
                  return "$$@todo" + e.constructor.name;
                })(a));
          }),
          t
        );
      }
      e(e([], o, !0), a, !0).forEach(function (e) {
        try {
          "function" != typeof HTMLVideoElement.prototype[e] && n.push(e);
        } catch (t) {
          n.push(e);
        }
      });
      var i = [
          "loadstart",
          "progress",
          "suspend",
          "abort",
          "error",
          "emptied",
          "stalled",
          "loadedmetadata",
          "loadeddata",
          "canplay",
          "canplaythrough",
          "playing",
          "waiting",
          "seeking",
          "seeked",
          "ended",
          "durationchange",
          "timeupdate",
          "play",
          "pause",
          "ratechange",
          "resize",
          "volumechange",
        ],
        u = [
          "loadstart",
          "loadedmetadata",
          "loadeddata",
          "canplay",
          "emptied",
          "canplaythrough",
        ],
        s = function (e) {
          try {
            return JSON.parse(e);
          } catch (e) {
            return { payload: {} };
          }
        };
      function d() {
        var e = ((46656 * Math.random()) | 0).toString(36),
          n = ((46656 * Math.random()) | 0).toString(36);
        return ("000" + e).slice(-3) + ("000" + n).slice(-3);
      }
      var c = function (e) {
          return "PRINCIPAL" === e ? "AGENT" : "PRINCIPAL";
        },
        l = "@vdo/PR-via-custom-event-",
        v = function () {
          return (
            (v =
              Object.assign ||
              function (e) {
                for (var n, t = 1, o = arguments.length; t < o; t++)
                  for (var a in (n = arguments[t]))
                    Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
                return e;
              }),
            v.apply(this, arguments)
          );
        },
        f = "@vdo/MT-via-custom-event-";
      var p = function () {
        return (
          (p =
            Object.assign ||
            function (e) {
              for (var n, t = 1, o = arguments.length; t < o; t++)
                for (var a in (n = arguments[t]))
                  Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
              return e;
            }),
          p.apply(this, arguments)
        );
      };
      function m(e) {
        return "iframe" === e.type
          ? (function (e) {
              var n = e.element,
                t = e.operatingMode,
                o = {
                  isActive: !1,
                  source: null,
                  origin: "*",
                  onConnected: null,
                  onReady: null,
                  onStateUpdate: null,
                },
                a = (function (e) {
                  var n = {};
                  return (
                    e.addEventListener("message", function (e) {
                      var t = e.data,
                        o = s(t),
                        a = o.token,
                        r = o.type,
                        i = o.status,
                        u = void 0 === i || i,
                        d = o.payload;
                      "@vdo/promiseResolver" === r &&
                        a &&
                        a in n &&
                        (u ? n[a][0](d) : n[a][1](d), delete n[a]);
                    }),
                    {
                      bindPromise: function (e, t) {
                        var o = d();
                        return (n[o] = [e, t]), o;
                      },
                      settlePromise: function (e, n, t, o) {
                        void 0 === t && (t = !0),
                          null == e ||
                            e.postMessage(
                              JSON.stringify({
                                type: "@vdo/promiseResolver",
                                token: n,
                                status: t,
                                payload: o,
                              }),
                              "*"
                            );
                      },
                    }
                  );
                })(window),
                r = a.bindPromise,
                i = a.settlePromise,
                u = (function (e) {
                  var n = {};
                  return {
                    add: function (e, t) {
                      n[e] ? n[e].push(t) : (n[e] = [t]);
                    },
                    onMessage: function (t, o, a, r) {
                      n[t] &&
                        n[t].forEach(function (n) {
                          var t = n(o);
                          "function" == typeof (null == t ? void 0 : t.then)
                            ? t
                                .then(function (n) {
                                  a && r && e(r, a, !0, n);
                                })
                                .catch(function (n) {
                                  a && r && e(r, a, !1, n);
                                })
                            : a && r && e(r, a, !0, t);
                        });
                    },
                  };
                })(i),
                c = [],
                l = function (e, n) {
                  return (
                    o.isActive || c.push([e, n]),
                    new Promise(function (t, a) {
                      var i,
                        u = r(t, a);
                      null === (i = o.source) ||
                        void 0 === i ||
                        i.postMessage(
                          JSON.stringify({ type: e, token: u, payload: n }),
                          "*"
                        );
                    })
                  );
                };
              window.addEventListener("message", function (e) {
                var n = e.data,
                  t = e.source,
                  a = s(n),
                  r = a.type,
                  d = a.payload,
                  c = void 0 === d ? {} : d,
                  v = a.token;
                if (r)
                  return (
                    c.videoState &&
                      o.onStateUpdate &&
                      o.onStateUpdate(c.videoState),
                    "@vdo/handshakeSuccessful" === r && o.onConnected
                      ? o.onConnected()
                      : "@vdo/handshake" === r && t && c.origin && v
                      ? (function (e, n, t) {
                          (o.source = e),
                            (o.isActive = !0),
                            (o.origin = n),
                            o.onConnected && o.onConnected(),
                            l("@vdo/handshakeSuccessful", { origin: n }),
                            t && i(e, t, !0);
                        })(t, origin, v)
                      : "@vdo/readyToHandshake" === r && o.onReady
                      ? o.onReady()
                      : void u.onMessage(r, c, v, t)
                  );
              });
              var v = {
                send: l,
                onStateUpdate: function (e) {
                  return (o.onStateUpdate = e);
                },
                on: u.add,
                isConnected: function () {
                  return o.isActive;
                },
              };
              return p(
                p({}, v),
                "PRINCIPAL" === t
                  ? {
                      operatingMode: "PRINCIPAL",
                      handshake: {
                        onSuccess: function (e) {
                          return (o.onConnected = e);
                        },
                        onReady: function (e) {
                          return (o.onReady = e);
                        },
                        ready: function () {
                          window.parent.postMessage(
                            JSON.stringify({ type: "@vdo/readyToHandshake" }),
                            "*"
                          );
                        },
                      },
                    }
                  : {
                      operatingMode: "AGENT",
                      handshake: {
                        onSuccess: function (e) {
                          return (o.onConnected = e);
                        },
                        onReady: function (e) {
                          return (o.onReady = e);
                        },
                        request: function () {
                          return new Promise(function (e, t) {
                            var a;
                            if (n instanceof HTMLIFrameElement) {
                              o.source = n.contentWindow;
                              var i = r(e, t);
                              null === (a = n.contentWindow) ||
                                void 0 === a ||
                                a.postMessage(
                                  JSON.stringify({
                                    type: "@vdo/handshake",
                                    token: i,
                                    payload: { origin: window.location.origin },
                                  }),
                                  "*"
                                );
                            }
                          });
                        },
                      },
                    }
              );
            })(e)
          : (function (e) {
              var n = e.element,
                t = e.operatingMode,
                o = f + t,
                a = f + c(t),
                r = {
                  isActive: !1,
                  element: n,
                  onConnected: null,
                  onReady: null,
                  onStateUpdate: null,
                },
                i = (function (e, n) {
                  var t = l + n,
                    o = l + c(n),
                    a = {};
                  return (
                    e.addEventListener(t, function (e) {
                      var n = s(e.detail),
                        t = n.token,
                        o = n.status,
                        r = void 0 === o || o,
                        i = n.payload;
                      t && t in a && (r ? a[t][0](i) : a[t][1](i), delete a[t]);
                    }),
                    {
                      bindPromise: function (e, n) {
                        var t = d();
                        return (a[t] = [e, n]), t;
                      },
                      settlePromise: function (n, t, a) {
                        void 0 === t && (t = !0),
                          e.dispatchEvent(
                            new CustomEvent(o, {
                              detail: JSON.stringify({
                                token: n,
                                status: t,
                                payload: a,
                              }),
                            })
                          );
                      },
                    }
                  );
                })(n, t),
                u = i.bindPromise,
                p = i.settlePromise,
                m = (function (e) {
                  var n = {};
                  return {
                    add: function (e, t) {
                      n[e] ? n[e].push(t) : (n[e] = [t]);
                    },
                    onMessage: function (t, o, a) {
                      n[t] &&
                        n[t].forEach(function (n) {
                          var t = n(o);
                          "function" == typeof (null == t ? void 0 : t.then)
                            ? t
                                .then(function (n) {
                                  a && e(a, !0, n);
                                })
                                .catch(function (n) {
                                  a && e(a, !1, n);
                                })
                            : a && e(a, !0, t);
                        });
                    },
                  };
                })(p),
                h = [],
                y = function (e, t) {
                  return (
                    r.isActive || h.push([e, t]),
                    new Promise(function (o, r) {
                      var i = u(o, r),
                        s = JSON.stringify({ type: e, token: i, payload: t });
                      n.dispatchEvent(new CustomEvent(a, { detail: s }));
                    })
                  );
                };
              n.addEventListener(o, function (e) {
                var n = e.detail,
                  t = s(n),
                  o = t.type,
                  a = t.payload,
                  i = void 0 === a ? {} : a,
                  u = t.token;
                if (o)
                  return (
                    i.videoState &&
                      r.onStateUpdate &&
                      r.onStateUpdate(i.videoState),
                    "@vdo/handshakeSuccessful" === o && r.onConnected
                      ? r.onConnected()
                      : "@vdo/handshake" === o && i.origin && u
                      ? (function (e) {
                          (r.isActive = !0),
                            r.onConnected && r.onConnected(),
                            y("@vdo/handshakeSuccessful", { origin }),
                            e && p(e, !0);
                        })(u)
                      : "@vdo/readyToHandshake" === o && r.onReady
                      ? r.onReady()
                      : void m.onMessage(o, i, u)
                  );
              });
              var g = {
                send: y,
                onStateUpdate: function (e) {
                  return (r.onStateUpdate = e);
                },
                on: m.add,
                isConnected: function () {
                  return r.isActive;
                },
              };
              return v(
                v({}, g),
                "PRINCIPAL" === t
                  ? {
                      operatingMode: "PRINCIPAL",
                      handshake: {
                        onSuccess: function (e) {
                          return (r.onConnected = e);
                        },
                        onReady: function (e) {
                          return (r.onReady = e);
                        },
                        ready: function () {
                          var e = JSON.stringify({
                            type: "@vdo/readyToHandshake",
                          });
                          n.dispatchEvent(
                            new CustomEvent("@vdo/MT-via-custom-event-AGENT", {
                              detail: e,
                            })
                          );
                        },
                      },
                    }
                  : {
                      operatingMode: "AGENT",
                      handshake: {
                        onSuccess: function (e) {
                          return (r.onConnected = e);
                        },
                        onReady: function (e) {
                          return (r.onReady = e);
                        },
                        request: function () {
                          return new Promise(function (e, t) {
                            var o = u(e, t),
                              a = JSON.stringify({
                                type: "@vdo/handshake",
                                token: o,
                                payload: { origin: window.location.origin },
                              });
                            n.dispatchEvent(
                              new CustomEvent(
                                "@vdo/MT-via-custom-event-PRINCIPAL",
                                { detail: a }
                              )
                            );
                          });
                        },
                      },
                    }
              );
            })(e);
      }
      var h = t(134);
      function y(e) {
        (this.__store = e || []), (this.length = this.__store.length);
      }
      function g() {
        var e = {};
        return {
          update: function (n) {
            return (
              (t = n),
              Object.keys(t)
                .filter(function (e) {
                  return e.startsWith("$$");
                })
                .forEach(function (e) {
                  var n = t[e];
                  if ("string" == typeof n)
                    return (
                      (t[e.slice(2)] = "NOT_AVAILABLE_ON_API"), delete t[e]
                    );
                  if ("string" != typeof n) {
                    var o = n,
                      a = o.type,
                      r = o.argument;
                    if ("TimeRanges" === a)
                      return (t[e.slice(2)] = new y(r.data)), delete t[e];
                  }
                  return (t[e.slice(2)] = "NOT_AVAILABLE_ON_API"), delete t[e];
                }),
              (e = t)
            );
            var t;
          },
          getAll: function () {
            return e;
          },
          get: function (n) {
            return e[n];
          },
        };
      }
      (y.prototype.start = function (e) {
        return this.__store[e][0];
      }),
        (y.prototype.end = function (e) {
          return this.__store[e][1];
        });
      var E = function () {
        return (
          (E =
            Object.assign ||
            function (e) {
              for (var n, t = 1, o = arguments.length; t < o; t++)
                for (var a in (n = arguments[t]))
                  Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
              return e;
            }),
          E.apply(this, arguments)
        );
      };
      function C(e, n, t) {
        var o = {
            totalPlayed: 0,
            abrStatus: !0,
            totalCovered: 0,
            captionVisibility: !1,
            totalCoveredArray: [],
            _totalPlayedCountLastPos: 0,
            availableQualities: [],
            availableCaptions: [],
            metaData: void 0,
          },
          a = [
            "fullscreenChange",
            "videoAdaptivenessChange",
            "videoQualityChange",
            "statusChange",
            "captionVisibilityChange",
            "captionLanguageChange",
          ];
        return (
          (function (e, n) {
            e.addEventListener("timeupdate", function () {
              var t = Math.floor(e.currentTime);
              t === n._totalPlayedCountLastPos + 1
                ? (n.totalPlayed++,
                  (n._totalPlayedCountLastPos = t),
                  n.totalCoveredArray[t]
                    ? n.totalCoveredArray[t]++
                    : (n.totalCovered++, (n.totalCoveredArray[t] = 1)))
                : t !== n._totalPlayedCountLastPos &&
                  (n._totalPlayedCountLastPos = t);
            });
          })(e, o),
          (function (e, n) {
            e.on("availableCaptionsWithActiveStatus", function (e) {
              n.availableCaptions = e[0];
            }),
              e.on("captionLanguageChange", function (e) {
                n.availableCaptions = n.availableCaptions.map(function (n, t) {
                  return E(E({}, n), { active: String(t) === e[0] });
                });
              }),
              e.on("availableQualities", function (e) {
                n.availableQualities = e[0];
              }),
              e.on("_metaDataLoadSuccess", function (e) {
                n.metaData = e[0];
              }),
              e.on("abrStatusChange", function (e) {
                n.abrStatus = !!e[0];
              }),
              e.on("captionVisibilityChange", function (e) {
                n.captionVisibility = e[0];
              }),
              e.on("abrStatusChange", function (n) {
                e.emit("videoAdaptivenessChange", n);
              }),
              e.on("setActiveQuality", function (n) {
                e.emit("qualityChange", n);
              }),
              e.on("qualityChange", function (t) {
                e.emit("videoQualityChange", t),
                  n.availableQualities.forEach(function (e, n) {
                    e.active = n === t[0];
                  });
              });
          })(n, o),
          {
            getTotalPlayed: function () {
              return Promise.resolve(o.totalPlayed);
            },
            getMetaData: function () {
              return new Promise(function (e) {
                if (o.metaData) return e(o.metaData);
                n.on("_metaDataLoadSuccess", function (n) {
                  return e(n[0]);
                });
              });
            },
            getTotalCovered: function () {
              return Promise.resolve(o.totalCovered);
            },
            getTotalCoveredArray: function () {
              return Promise.resolve(o.totalCoveredArray);
            },
            setFullscreen: function (e) {
              return t("@vdo/eventBus", {
                eventBusEvent: {
                  eventName: "requestFullscreenChange",
                  value: e,
                },
              });
            },
            updatePlayerConfig: function (e) {
              return t("@vdo/eventBus", {
                eventBusEvent: { eventName: "updatePlayerConfig", value: e },
              });
            },
            hideCaptions: function () {
              return t("@vdo/eventBus", {
                eventBusEvent: { eventName: "setCaptionVisibility", value: !1 },
              });
            },
            setCaptionLanguage: function (e) {
              return t("@vdo/eventBus", {
                eventBusEvent: { eventName: "setCaptionLang", value: e },
              });
            },
            getCaptionLanguages: function () {
              return Promise.resolve({
                visible: o.captionVisibility,
                languages: o.availableCaptions,
              });
            },
            enableAdaptiveVideo: function () {
              return t("@vdo/eventBus", {
                eventBusEvent: { eventName: "selectQualityTrack", value: -1 },
              });
            },
            getVideoQualities: function () {
              return Promise.resolve({
                adaptive: o.abrStatus,
                qualities: o.availableQualities,
              });
            },
            setVideoQuality: function (e) {
              return o.availableQualities.find(function (n) {
                var t = n.id;
                return e === t;
              })
                ? t("@vdo/eventBus", {
                    eventBusEvent: {
                      eventName: "selectQualityTrack",
                      value: e,
                    },
                  })
                : Promise.reject(
                    new Error(
                      "[Vdocipher] (API) no desired video track found with trackId " +
                        e
                    )
                  );
            },
            addEventListener: function (e, t) {
              if ("function" != typeof t)
                throw new Error(
                  "[Vdocipher] (API) handler must be type of function, but passed ".concat(
                    typeof t
                  )
                );
              if (!a.includes(e))
                throw new Error(
                  '[Vdocipher] (API) provided event is not supported by the method\n if it\'s HTML5 Video Element dom event please use "player.video.addEventListener"'
                );
              return n.on(e, function (e) {
                return Array.isArray(e) ? t(e[0]) : t(e);
              });
            },
            loadVideo: function (e) {
              var n = e.otp,
                o = e.playbackInfo;
              return t("@vdo/eventBus", {
                eventBusEvent: {
                  eventName: "loadVideo",
                  value: { otp: n, playbackInfo: o },
                },
              });
            },
            _setChapters: function (n) {
              return t("@vdo/eventBus", {
                eventBusEvent: {
                  eventName: "setChapters",
                  value: [n, e.duration],
                },
              });
            },
          }
        );
      }
      var P = function () {
        return (
          (P =
            Object.assign ||
            function (e) {
              for (var n, t = 1, o = arguments.length; t < o; t++)
                for (var a in (n = arguments[t]))
                  Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
              return e;
            }),
          P.apply(this, arguments)
        );
      };
      function w(e) {
        var n = new g(),
          t = new h.Z(),
          o = document.createElement("video"),
          a = { isHandshakeCompleted: !1, sendMessageBuffer: [] };
        !(function (e, n) {
          var t;
          ((t = document.createElement("style")).type = "text/css"),
            (t.id = "style-element"),
            (t.innerHTML =
              "\n    Iframe.vdo-semi-fullscreen{\n        position: fixed !important;\n        top: 0 !important;\n        left: 0 !important;\n        width: 100vw !important;\n        height: 100vh !important;\n        max-width: none !important;\n        max-height: none !important;\n        z-index: 9999 !important;\n    }\n    "),
            document.head.appendChild(t),
            n.on("setSemiFullscreen", function (n) {
              n[0]
                ? e.classList.add("vdo-semi-fullscreen")
                : e.classList.remove("vdo-semi-fullscreen");
            });
        })(e, t);
        var r = (function (e) {
            return e instanceof HTMLIFrameElement
              ? { operatingMode: "AGENT", element: e, type: "iframe" }
              : { operatingMode: "AGENT", element: e, type: "webcomponent" };
          })(e),
          i = m(r);
        i.handshake.onSuccess(function () {
          (a.isHandshakeCompleted = !0),
            a.sendMessageBuffer.forEach(function (e) {
              return i.send.apply(i, e);
            });
        }),
          i.handshake.onReady(function () {
            return i.handshake.request();
          }),
          i.handshake.request(),
          i.on("@vdo/element/event", function (e) {
            o.dispatchEvent(new CustomEvent(e.elementEventName));
          }),
          i.on("@vdo/updateState", function (e) {
            n.update(e.videoState);
          }),
          i.onStateUpdate(n.update),
          i.on("@vdo/eventBus", function (e) {
            e.eventBusEvent &&
              t.emit(e.eventBusEvent.eventName, e.eventBusEvent.value);
          });
        var u = (function (e) {
          var n = e.videoEl,
            t = e.videoState,
            o = e.sendMessage,
            a = ["addEventListener", "removeEventListener"];
          return new Proxy(n, {
            get: function (e, r) {
              if ("target" === r) return e;
              var i = n[r];
              if (i instanceof Function)
                return function () {
                  for (var e = [], t = 0; t < arguments.length; t++)
                    e[t] = arguments[t];
                  return a.includes(r)
                    ? (i.apply(n, e),
                      o("@vdo/element/event", { elementEventName: r }))
                    : o("@vdo/element/method", {
                        elementMethod: { methodName: r, args: e },
                      });
                };
              var u = t.get(r);
              return void 0 === u ? i : u;
            },
            set: function (e, t, a) {
              return (
                o("@vdo/element/property", {
                  elementProperty: { name: t, value: a },
                }),
                (n[t] = a),
                !0
              );
            },
          });
        })({ videoEl: o, videoState: n, sendMessage: i.send });
        return { video: u, api: P({}, new C(u, t, i.send)) };
      }
      var A = new Map();
      function S(e) {
        if (A.has(e))
          throw new Error(
            "[VdoCipher] (API) Cannot create multiple instances from the same Iframe\n use VdoPlayer.getInstance method to get the instance of already initiated iframe"
          );
        return S.getInstance(e);
      }
      (S.getInstance = function (e) {
        if (
          !(function (e) {
            return e && "IFRAME" === e.nodeName;
          })(e) &&
          !(function (e) {
            return e && "VDOCIPHER-PLAYER" === e.nodeName;
          })(e)
        )
          throw new Error(
            "[VdoCipher] (API) element as HTMLIframeElement/Vdocipher-player is a required parameter"
          );
        if (A.has(e)) return A.get(e);
        var n = new w(e);
        return A.set(e, n), n;
      }),
        "function" == typeof window.onVdoPlayerV2APIReady &&
          window.onVdoPlayerV2APIReady(),
        (S.attachAPI = function (e, n, t) {
          if (null !== window.parent) {
            var o = [],
              a = [],
              s = m(t);
            n.on("*", function (e) {
              for (var n = [], t = 1; t < arguments.length; t++)
                n[t - 1] = arguments[t];
              a.push({ eventBusEvent: { name: e, arg: n } }),
                s.isConnected() &&
                  s.send("@vdo/eventBus", {
                    eventBusEvent: { eventName: e, value: n },
                  });
            });
            var d = function () {
                return s.send("@vdo/updateState", { videoState: r(e) });
              },
              c = function (e) {
                s.send("@vdo/element/event", { elementEventName: e });
              };
            !(function (e, n) {
              i.forEach(function (t) {
                e.addEventListener(t, n);
              });
            })(e, function (e) {
              var n = e.type;
              u.includes(n) && o.push(n), s.isConnected() && (d(), c(n));
            }),
              s.handshake.ready(),
              s.handshake.onSuccess(function () {
                n.emit("apiConnected", !0),
                  d().then(function () {
                    o.forEach(c),
                      a.forEach(function (e) {
                        var n = e.eventBusEvent,
                          t = n.name,
                          o = n.arg;
                        return s.send("@vdo/eventBus", {
                          eventBusEvent: { eventName: t, value: o },
                        });
                      });
                  });
              }),
              s.on("@vdo/getState", function () {
                return d();
              }),
              s.on("@vdo/element/event", function (n) {
                i.includes(n.elementEventName) ||
                  e.addEventListener(n.elementEventName, function () {
                    d(),
                      s.send("@vdo/element/event", {
                        elementEventName: n.elementEventName,
                      });
                  });
              }),
              s.on("@vdo/element/method", function (n) {
                var t;
                if (
                  n.elementMethod &&
                  n.elementMethod.methodName in HTMLMediaElement.prototype
                ) {
                  var o = e[n.elementMethod.methodName];
                  return Promise.resolve(
                    o.call.apply(
                      o,
                      (function (e, n, t) {
                        if (t || 2 === arguments.length)
                          for (var o, a = 0, r = n.length; a < r; a++)
                            (!o && a in n) ||
                              (o || (o = Array.prototype.slice.call(n, 0, a)),
                              (o[a] = n[a]));
                        return e.concat(o || Array.prototype.slice.call(n));
                      })(
                        [e],
                        null === (t = n.elementMethod) || void 0 === t
                          ? void 0
                          : t.args,
                        !1
                      )
                    )
                  );
                }
              }),
              s.on("@vdo/element/property", function (n) {
                var t;
                (null === (t = n.elementProperty) || void 0 === t
                  ? void 0
                  : t.name) &&
                  n.elementProperty.name in HTMLMediaElement.prototype &&
                  (e[n.elementProperty.name] = n.elementProperty.value);
              }),
              s.on("@vdo/eventBus", function (e) {
                (null == e ? void 0 : e.eventBusEvent) &&
                  n.emit(e.eventBusEvent.eventName, e.eventBusEvent.value);
              });
          }
        }),
        (window.VdoPlayer = S);
    })();
})();
