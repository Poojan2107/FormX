import { describe, it, expect } from "vitest";
import {
  isEmail,
  isValidPhone,
  validateContact,
  validateVendor,
  isContactValid,
  isVendorValid,
} from "./formValidation";

describe("isEmail", () => {
  it("accepts valid email addresses", () => {
    expect(isEmail("a@b.com")).toBe(true);
    expect(isEmail("first.last+tag@sub.domain.co")).toBe(true);
  });

  it("rejects invalid inputs", () => {
    expect(isEmail("")).toBe(false);
    expect(isEmail("plain")).toBe(false);
    expect(isEmail("a@b")).toBe(false);
    expect(isEmail("a b@c.com")).toBe(false);
    expect(isEmail(null)).toBe(false);
    expect(isEmail(123)).toBe(false);
    expect(isEmail(undefined)).toBe(false);
  });
});

describe("isValidPhone", () => {
  it("accepts numbers with 8+ digits", () => {
    expect(isValidPhone("+91 98765 43210")).toBe(true);
    expect(isValidPhone("12345678")).toBe(true);
  });

  it("rejects short numbers", () => {
    expect(isValidPhone("1234567")).toBe(false);
    expect(isValidPhone("")).toBe(false);
  });
});

describe("validateContact", () => {
  it("returns no errors for a valid submission", () => {
    expect(
      validateContact({ name: "Jane Doe", email: "jane@x.com", message: "A sufficiently long enquiry message." }),
    ).toEqual({});
  });

  it("flags a short name, invalid email, and short message", () => {
    const errors = validateContact({ name: "J", email: "bad", message: "short" });
    expect(errors.name).toBeDefined();
    expect(errors.email).toBeDefined();
    expect(errors.message).toBeDefined();
  });

  it("only validates phone when provided", () => {
    expect(
      validateContact({ name: "A B", email: "a@b.com", message: "Enough message content", phone: "123" }).phone,
    ).toBeDefined();
    expect(
      validateContact({ name: "A B", email: "a@b.com", message: "Enough message content" }).phone,
    ).toBeUndefined();
  });
});

describe("validateVendor", () => {
  it("returns no errors for a valid registration", () => {
    expect(validateVendor({ company: "ACME Steel", contact: "Ravi", email: "ravi@acme.com" })).toEqual({});
  });

  it("flags missing company and contact", () => {
    const errors = validateVendor({ company: "", contact: "", email: "ravi@acme.com" });
    expect(errors.company).toBeDefined();
    expect(errors.contact).toBeDefined();
  });
});

describe("server-side validity checks", () => {
  it("isContactValid enforces name/email/message rules", () => {
    expect(isContactValid({ name: "Jane Doe", email: "jane@x.com", message: "long enough" })).toBe(true);
    expect(isContactValid({ name: "J", email: "jane@x.com", message: "long enough" })).toBe(false);
  });

  it("isVendorValid enforces company/contact/email rules", () => {
    expect(isVendorValid({ company: "ACME", contact: "Ravi", email: "r@x.com" })).toBe(true);
    expect(isVendorValid({ company: "ACME", contact: "", email: "r@x.com" })).toBe(false);
  });
});
