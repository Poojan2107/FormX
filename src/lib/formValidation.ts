export function isEmail(v: unknown): boolean {
  return typeof v === "string" && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);
}

export function isValidPhone(v: string): boolean {
  return v.replace(/\D/g, "").length >= 8;
}

export type ContactErrors = Partial<
  Record<"name" | "email" | "phone" | "message", string>
>;

export function validateContact(input: {
  name: string;
  email: string;
  message: string;
  phone?: string;
}): ContactErrors {
  const errors: ContactErrors = {};
  if (input.name.length < 2) errors.name = "Please enter your full name.";
  if (!isEmail(input.email)) errors.email = "Enter a valid work email.";
  if (input.message.length < 10)
    errors.message = "Add a short note (at least 10 characters).";
  if (input.phone && !isValidPhone(input.phone))
    errors.phone = "Enter a valid phone number.";
  return errors;
}

export type VendorErrors = Partial<
  Record<"company" | "contact" | "email" | "phone", string>
>;

export function validateVendor(input: {
  company: string;
  contact: string;
  email: string;
  phone?: string;
}): VendorErrors {
  const errors: VendorErrors = {};
  if (input.company.length < 2)
    errors.company = "Please enter your company name.";
  if (input.contact.length < 2)
    errors.contact = "Please enter a contact person's name.";
  if (!isEmail(input.email)) errors.email = "Enter a valid email address.";
  if (input.phone && !isValidPhone(input.phone))
    errors.phone = "Enter a valid phone number.";
  return errors;
}

export function isContactValid(input: {
  name: string;
  email: string;
  message: string;
}): boolean {
  return input.name.length >= 2 && isEmail(input.email) && input.message.length >= 10;
}

export function isVendorValid(input: {
  company: string;
  contact: string;
  email: string;
}): boolean {
  return input.company.length >= 2 && input.contact.length >= 2 && isEmail(input.email);
}
