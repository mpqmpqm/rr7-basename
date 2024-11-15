import { Form, type ActionFunction, type LoaderFunction } from "react-router";

export const action: ActionFunction = async () => null;
export const loader: LoaderFunction = async () => null;

export default function Route() {
  return (
    <div className="flex flex-col gap-2">
      <h1>About</h1>
      <Form method="post">
        <button type="submit" className="border px-2 py-1 rounded-md">
          Submit Action
        </button>
      </Form>
    </div>
  );
}
