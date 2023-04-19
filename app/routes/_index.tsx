import type { V2_MetaFunction } from "@remix-run/react";

export const meta: V2_MetaFunction = () => {
  return [{ title: "Document title" }];
};

export default function Index() {
  return (
    <div className="h-screen grid place-content-center bg-teal-300">
      <h1 className="text-4xl font-bold  mb-6 text-center">Remix + UnoCSS 💿</h1>
    </div>
  );
}
