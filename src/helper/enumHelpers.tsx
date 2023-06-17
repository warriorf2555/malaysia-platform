/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-return */

export function getEnumObjectByCode(enumObject: any, code: number) {
  const result = Object.keys(enumObject).find(
    (key) => enumObject[key].code === code
  );

  return result;
}
