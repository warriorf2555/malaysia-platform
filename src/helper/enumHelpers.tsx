export function getEnumObjectByCode<
  T extends {
    [key: string]: {
      code: number;
      title: string;
      [k: string]: unknown;
    };
  }
>(enumObject: T, code: number) {
  const result = Object.keys(enumObject).find(
    (key) => enumObject[key]?.code === code
  );

  return result
    ? enumObject[result] || { code: "", title: "This object is unavailable" }
    : { code: "", title: "This object is unavailable" };
}

export function getEnumArray<
  T extends {
    [key: string]: {
      code: number;
      title: string;
      [k: string]: unknown;
    };
  }
>(enumObject: T) {
  const enumSet = [];

  for (const key in enumObject) {
    enumSet.push(enumObject[key]);
  }

  // enumSet.forEach((set1) => {
  //   console.log(set1);
  // });

  return enumSet;
}
