import {
  parsePhoneNumberFromString,
  AsYouType,
  isValidNumberForRegion,
} from "libphonenumber-js";
let COUNTRY = "US";
let asYouType = new AsYouType(COUNTRY);

export function setFormatterCountry(string) {
  COUNTRY = string;
  asYouType = new AsYouType(COUNTRY);
}

export function phoneFormatter(value) {
  asYouType.reset();
  return asYouType.input(value || "");
}

export function phoneParser(value) {
  const phoneNumber = parsePhoneNumberFromString(value, COUNTRY);
  return phoneNumber ? phoneNumber.formatInternational() : "";
}

export function phoneValidator(value) {
  return isValidNumberForRegion(value, COUNTRY);
}

export function phoneFilter(value) {
  asYouType.reset();
  let onlyDigits = ("" + value).replace(/\D/g, "");
  if (onlyDigits.length >= 10) {
    return asYouType.input(onlyDigits.slice(0, 10));
  }

  return onlyDigits;
}
