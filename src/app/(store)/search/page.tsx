export default async function Search() {
  await new Promise((resolver) => setTimeout(resolver, 2000));

  return <h1>Busque aqui</h1>;
}
