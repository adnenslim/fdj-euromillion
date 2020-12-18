export const range = (start: number, end: number): ReadonlyArray<number> => {
  const inc = (end - start) / Math.abs(end - start);

  return Array.from(
    Array(Math.abs(end - start) + 1),
    (_, i) => start + i * inc
  );
};
