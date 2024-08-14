interface Args<T = any> {
  data: T[],
  columns: number
}
export function convertToMasonryFormat<T = any>({
  data,
  columns
}: Args<T>): Array<Array<T>> {
  const itemsPerColumn = Math.ceil(data.length / columns);
  let toReturnArr = [];

  for (let i = 0; i < columns; i++) {
    toReturnArr.push([...data.slice(i * itemsPerColumn, i * itemsPerColumn + itemsPerColumn)]);
  }
  return toReturnArr
}