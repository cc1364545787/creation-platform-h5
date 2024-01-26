(self.webpackChunktomp = self.webpackChunktomp || []).push([
  [0],
  {
    70215: function (a, d, n) {
      "use strict";
      n.r(d);
      var t = n(85893),
        _ = function () {
          var e,
            i,
            r =
              ((e = window) === null ||
              e === void 0 ||
              (i = e.__PRODUCTION__TOMP__CONF__) === null ||
              i === void 0
                ? void 0
                : i.SERVICE_GARAFANA_URL) || SERVICE_GARAFANA_URL;
          return (0, t.jsx)("div", {
            width: "100%",
            style: { height: "100%" },
            children: (0, t.jsx)("iframe", {
              id: "divContent",
              vspace: "0",
              hspace: "0",
              "margin-width": "0",
              "margin-height": "0",
              framespacing: "0",
              width: "100%",
              height: "622px",
              style: { border: "0", height: "100%" },
              src: r,
            }),
          });
        };
      d.default = _;
    },
  },
]);
