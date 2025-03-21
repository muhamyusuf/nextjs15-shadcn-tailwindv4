import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen text-center mx-auto overflow-hidden">
      <header className="flex items-center justify-center h-20">
        <h1 className="text-2xl font-bold">Welcome to your Next.js 15 app!</h1>
      </header>
      <section className="flex-1 p-6">
        <p className="text-lg">
          Get started by editing <code>src/app/page.tsx</code>
      </p>
      </section>
      <Button>Click me</Button>
    </main>
  );
}
