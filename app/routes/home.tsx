import {
  Form,
  type ActionFunction,
  type LoaderFunction,
  type MetaFunction,
} from "react-router";

export const action: ActionFunction = async () => null;
export const loader: LoaderFunction = async () => null;

export const meta: MetaFunction = () => {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
};

export default function Home() {
  return (
    <div className="flex flex-col gap-2">
      <h1>Home (root._index)</h1>
      <Form method="post">
        <button type="submit" className="border px-2 py-1 rounded-md">
          Submit Action
        </button>
      </Form>
    </div>
  );
}
