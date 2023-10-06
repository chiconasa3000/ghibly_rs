import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return [
    { title: "Ghibli Movies"},
    { name: "description", content: "Ghibli movies recommender" },
  ];
};

export default function Index() {
  return (
    <div className="text-red-500">
      <h1>Welcome to Remix</h1>
    </div>
  );
}
