import Link from "next/link";

async function getDatas() {
  const products = await fetch("https://dummyjson.com/products?limit=5");
  return products.json();
}

export default async function Layout({ children }) {
  const { products } = await getDatas();
  return (
    <div>
      {products.map((e, i) => (
        <div key={i} style={{ marginBottom: "1rem" }}>
          <b>
            No.{i++} - {e.title}
          </b>
          <p>{e.description}</p>
          <Link href={`/post/${e.id}`}>Detail</Link>
        </div>
      ))}
      <div>{children}</div>
    </div>
  );
}
