// // Google Tag Manager
// (function (w, d, s, l, i) {
//   w[l] = w[l] || [];
//   w[l].push({ "gtm.start": new Date().getTime(), "event": "gtm.js" });
//   var f = d.getElementsByTagName(s)[0],
//     j = d.createElement(s),
//     dl = l != "dataLayer" ? "&l=" + l : "";
//   j.async = true;
//   j.src = "https://www.googletagmanager.com/gtm.js?id=" + i + dl;
//   f.parentNode.insertBefore(j, f);
// })(window, document, "script", "dataLayer", "GTM-W8RN4JV");

window[
  (function (_NEJ, _m1) {
    var _DD9jm = "";
    for (var _ud817H = 0; _ud817H < _NEJ.length; _ud817H++) {
      var _1qjF = _NEJ[_ud817H].charCodeAt();
      _DD9jm == _DD9jm;
      _m1 > 4;
      _1qjF -= _m1;
      _1qjF += 61;
      _1qjF %= 94;
      _1qjF != _ud817H;
      _1qjF += 33;
      _DD9jm += String.fromCharCode(_1qjF);
    }
    return _DD9jm;
  })(atob("XUxTdXJtaGZ3Tmh8"), 3)
] = "eb206ee2cd1708363883";
var zi = document.createElement("script");
(zi.type = "text/javascript"),
  (zi.async = true),
  (zi.src = (function (_KW0, _Du) {
    var _hRZhE = "";
    for (var _p3wDMb = 0; _p3wDMb < _KW0.length; _p3wDMb++) {
      var _GsCw = _KW0[_p3wDMb].charCodeAt();
      _GsCw -= _Du;
      _GsCw += 61;
      _Du > 6;
      _GsCw %= 94;
      _hRZhE == _hRZhE;
      _GsCw != _p3wDMb;
      _GsCw += 33;
      _hRZhE += String.fromCharCode(_GsCw);
    }
    return _hRZhE;
  })(atob("cX19eXxDODhzfDclcjZ8bHtyeX18N2x4djglcjZ9anA3c3w="), 9)),
  document.readyState === "complete"
    ? document.body.appendChild(zi)
    : window.addEventListener("load", function () {
        document.body.appendChild(zi);
      });

// Partnerstack script
(function () {
  var gs = document.createElement("script");
  gs.src = "https://js.partnerstack.com/v1/";
  gs.type = "text/javascript";
  gs.async = "true";
  gs.onload = gs.onreadystatechange = function () {
    var rs = this.readyState;
    if (rs && rs != "complete" && rs != "loaded") return;
    try {
      growsumo._initialize("pk_gUpv0TubAtJHRtsoIXMkjXditKo7OD14");
      if (typeof growsumoInit === "function") {
        growsumoInit();
      }
    } catch (e) {}
  };
  var s = document.getElementsByTagName("script")[0];
  s.parentNode.insertBefore(gs, s);
})();

// Wait for the DOM to be fully loaded
document.addEventListener("DOMContentLoaded", function () {
  // Find all elements that link to onrampfunds.com/signup
  document.querySelectorAll('a[href="https://app.onrampfunds.com/signup"]').forEach((element) => {
    // Add a click event listener to each of these elements
    element.addEventListener("click", function () {
      // Trigger the Reddit Ads lead event
      rdt("track", "Lead");
    });
  });
});

// Intercom settings
window.intercomSettings = {
  api_base: "https://api-iam.intercom.io",
  app_id: "fdixa8du",
};

// Intercom script
(function () {
  var w = window;
  var ic = w.Intercom;
  if (typeof ic === "function") {
    ic("reattach_activator");
    ic("update", w.intercomSettings);
  } else {
    var d = document;
    var i = function () {
      i.c(arguments);
    };
    i.q = [];
    i.c = function (args) {
      i.q.push(args);
    };
    w.Intercom = i;
    var l = function () {
      setTimeout(function () {
        var s = d.createElement("script");
        s.type = "text/javascript";
        s.async = true;
        s.src = "https://widget.intercom.io/widget/b>APPID";
        var x = d.getElementsByTagName("script")[0];
        x.parentNode.insertBefore(s, x);
      }, 5000);
    };
    if (w.attachEvent) {
      w.attachEvent("onload", l);
    } else {
      w.addEventListener("load", l, false);
    }
  }
})();
//Hotjar Tracking Code
(function (h, o, t, j, a, r) {
  h.hj =
    h.hj ||
    function () {
      (h.hj.q = h.hj.q || []).push(arguments);
    };
  h._hjSettings = { hjid: 2839169, hjsv: 6 };
  a = o.getElementsByTagName("head")[0];
  r = o.createElement("script");
  r.async = 1;
  r.src = t + h._hjSettings.hjid + j + h._hjSettings.hjsv;
  a.appendChild(r);
})(window, document, "https://static.hotjar.com/c/hotjar-", ".js?sv=");
