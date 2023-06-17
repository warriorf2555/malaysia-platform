export function getEnumObjectByCode<
  T extends {
    [key: string]: {
      code: number;
    };
  }
>(enumObject: T, code: number) {
  const result = Object.keys(enumObject).find(
    (key) => enumObject[key]?.code === code
  );

  return result
    ? enumObject[result] || { code: "", title: "" }
    : { code: "", title: "" };
}
