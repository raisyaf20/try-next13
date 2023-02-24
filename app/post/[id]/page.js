import Link from "next/link";

async function getDetail(id) {
  const detail = await fetch(`https://dummyjson.com/products/${id}`);
  return detail.json();
}

export default async function PageDetail({ params }) {
  const data = await getDetail(params.id);
  return (
    <div>
      <p>{data.title}</p>
      <p>{data.description}</p>
      <p>$ {data.price}</p>
      <img src={data.thumbnail} alt={data.title} />
    </div>
  );
}
