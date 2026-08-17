export function ConvertNumbers(
  value: number | string,
  type: "toPersian" | "toEnglish" = "toPersian"
) {
  const num = Number(value);

  if (type === "toPersian") {
    return new Intl.NumberFormat("fa-IR").format(num);
  }

  // اگر حالت انگلیسی هم لازم داری
  return new Intl.NumberFormat("en-US").format(num);
}