const PDF_FILE = "assets/Anshul_Deep_Bajpai_Resume.pdf";
const EMAIL = "anshuldeepbajpai@gmail.com";

/* ---------- helpers ---------- */
const $ = (selector) => document.querySelector(selector);

function showToast(message) {
  const toast = $("#toast");
  toast.textContent = message;
  toast.classList.add("show");
  clearTimeout(showToast.timer);
  showToast.timer = setTimeout(() => toast.classList.remove("show"), 1800);
}

function safeStorage(action, key, value) {
  try {
    return action === "get" ? localStorage.getItem(key) : localStorage.setItem(key, value);
  } catch (error) {
    return null; // storage can be blocked, the page still works
  }
}

/* ---------- theme (remembers the visitor's choice) ---------- */
const root = document.documentElement;
const saved = safeStorage("get", "resume-theme");
const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
root.dataset.theme = saved || (prefersDark ? "dark" : "light");

$("#themeBtn").addEventListener("click", () => {
  const next = root.dataset.theme === "dark" ? "light" : "dark";
  root.dataset.theme = next;
  safeStorage("set", "resume-theme", next);
});

/* ---------- print / save as PDF ---------- */
$("#printBtn").addEventListener("click", () => window.print());

/* ---------- optional ready-made PDF ---------- */
const pdfLink = $("#pdfLink");
if (PDF_FILE) {
  pdfLink.href = PDF_FILE;
  pdfLink.hidden = false;
}

/* ---------- copy email ---------- */
$("#copyEmail").addEventListener("click", async () => {
  try {
    await navigator.clipboard.writeText(EMAIL);
    showToast("Email copied");
  } catch (error) {
    showToast(EMAIL); // clipboard blocked: just show it
  }
});

/* ---------- photo fallback ---------- */
const photo = $("#photo");
photo.addEventListener("error", () => {
  const fallback = document.createElement("div");
  fallback.className = "initials";
  fallback.textContent = "AB";
  fallback.setAttribute("role", "img");
  fallback.setAttribute("aria-label", "Anshul Deep Bajpai");
  photo.replaceWith(fallback);
});
