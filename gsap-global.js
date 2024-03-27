window.addEventListener("load", () => {
  const elements = document.querySelectorAll('[data-loadin="true"]');
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          gsap.to(entry.target, { opacity: 1, y: 0, scale: 1, duration: 0.7 });
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1 }
  );

  gsap.set(elements, { opacity: 0, y: 50, scale: 0.95 });
  elements.forEach((element) => observer.observe(element));
});

document.addEventListener("DOMContentLoaded", () => {
  let lastScrollTop = 0;
  const nav = document.querySelector(".navouterwrap");
  const updateNavPosition = (direction) => {
    const y = direction === "down" ? "-100%" : "0%";
    gsap.to(nav, { duration: 0.3, y, ease: "power1.out" });
  };

  window.addEventListener("scroll", () => {
    const viewportWidth = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
    if (viewportWidth <= 991) return;

    let scrollTop = Math.max(window.pageYOffset, document.documentElement.scrollTop, 0);
    const direction = scrollTop > lastScrollTop ? "down" : "up";
    if (!gsap.isTweening(nav)) updateNavPosition(direction);
    lastScrollTop = scrollTop;
  });
});
// Function to get cookie
function getCookie(name) {
  var nameEQ = name + "=";
  var ca = document.cookie.split(";");
  for (var i = 0; i < ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == " ") c = c.substring(1, c.length);
    if (c.indexOf(nameEQ) == 0) return JSON.parse(c.substring(nameEQ.length, c.length));
  }
  return null;
}

// Function to get UTM parameters from the URL
function getUTMParameters() {
  var utms = {};
  var utm_keys = ["utm_source", "utm_medium", "utm_campaign", "utm_term", "utm_content"];
  var url = window.location.href;
  url.replace(/[?&]+([^=&]+)=([^&]*)/gi, function (m, key, value) {
    if (utm_keys.includes(key)) {
      utms[key] = value;
    }
  });
  return utms;
}

// Function to set cookie
function setCookie(name, value) {
  document.cookie = name + "=" + JSON.stringify(value) + "; path=/; domain=.onrampfunds.com";
}

// Function to check and update or persist UTM parameters in cookie
function updateOrPersistUTMCookie(cookieName) {
  var existingUTMs = getCookie(cookieName);
  var currentUTMs = getUTMParameters();

  // Only update or set the cookie if there are UTM parameters in the URL or the cookie does not already exist
  if (Object.keys(currentUTMs).length !== 0 || !existingUTMs) {
    // If there are no UTMs in the URL but the cookie exists, do nothing (persist the cookie)
    if (Object.keys(currentUTMs).length === 0 && existingUTMs) {
      return;
    }
    // Update or set the cookie with new UTM parameters
    setCookie(cookieName, currentUTMs);
  }
}
//PPC Param Handling
// On page load, handle UTM cookie persistence or update
window.onload = function () {
  updateOrPersistUTMCookie("PPC Attribution Tracker");
  // Function to delete a cookie
  function deleteCookie(name) {
    document.cookie = name + "=; path=/; domain=.onrampfunds.com; expires=Thu, 01 Jan 1970 00:00:01 GMT;";
  }

  // Handle 'gsxid' and 'gspk' parameters independently of UTMs
  var params = new URLSearchParams(window.location.search);
  var hasGSPK = params.has("gspk");
  var hasGSXID = params.has("gsxid");

  if (hasGSPK) {
    setCookie("gspk", params.get("gspk")); // Set as a session cookie
  } else {
    deleteCookie("gspk");
  }

  if (hasGSXID) {
    setCookie("gsxid", params.get("gsxid")); // Set as a session cookie
  } else {
    deleteCookie("gsxid");
  }
};
