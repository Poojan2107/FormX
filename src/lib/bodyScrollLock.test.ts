import { afterEach, describe, expect, it } from "vitest";
import { lockBodyScroll, unlockBodyScroll } from "./bodyScrollLock";

afterEach(() => {
  unlockBodyScroll();
  unlockBodyScroll();
  document.body.removeAttribute("style");
  document.documentElement.className = "";
  document.body.className = "";
});

describe("bodyScrollLock", () => {
  it("fixes the body while locked and clears it after unlock", () => {
    lockBodyScroll();

    expect(document.body.style.position).toBe("fixed");
    expect(document.body.classList.contains("scroll-locked")).toBe(true);

    unlockBodyScroll();

    expect(document.body.style.position).toBe("");
    expect(document.body.classList.contains("scroll-locked")).toBe(false);
  });

  it("nests locks without unlocking early", () => {
    lockBodyScroll();
    lockBodyScroll();
    unlockBodyScroll();
    expect(document.body.style.position).toBe("fixed");
    unlockBodyScroll();
    expect(document.body.style.position).toBe("");
  });
});
