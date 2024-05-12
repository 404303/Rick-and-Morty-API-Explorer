export async function fetchOne(input: string) {
  const res = await fetch(`https://rickandmortyapi.com/api/character/${input}`);
  const data = await res.json();
  return data;
}
export async function fetchAll(input: number) {
  const res = await fetch(
    `https://rickandmortyapi.com/api/character/?page=${input}`
  );
  const data = await res.json();
  return data.results;
}
