import MD5 from "crypto-js/md5";

export function EnCryptInput(input: string) {
  if (!input) return;
  return MD5(input).toString();
}
