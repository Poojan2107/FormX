/** iOS-safe scroll lock. overflow:hidden on html after scroll freezes Safari. */

let lockCount = 0;
let savedY = 0;

export function lockBodyScroll() {
  if (typeof document === "undefined") return;
  if (lockCount === 0) {
    savedY = window.scrollY;
    const { body, documentElement: root } = document;
    body.style.position = "fixed";
    body.style.top = `-${savedY}px`;
    body.style.left = "0";
    body.style.right = "0";
    body.style.width = "100%";
    root.classList.add("scroll-locked");
    body.classList.add("scroll-locked");
    window.dispatchEvent(
      new CustomEvent("formx:scroll-lock", { detail: { locked: true } }),
    );
  }
  lockCount += 1;
}

export function unlockBodyScroll() {
  if (typeof document === "undefined") return;
  if (lockCount === 0) return;
  lockCount -= 1;
  if (lockCount > 0) return;

  const { body, documentElement: root } = document;
  body.style.position = "";
  body.style.top = "";
  body.style.left = "";
  body.style.right = "";
  body.style.width = "";
  body.style.overflow = "";
  body.style.paddingRight = "";
  root.style.overflow = "";
  root.classList.remove("scroll-locked");
  body.classList.remove("scroll-locked");
  window.scrollTo(0, savedY);
  window.dispatchEvent(
    new CustomEvent("formx:scroll-lock", { detail: { locked: false } }),
  );
}
