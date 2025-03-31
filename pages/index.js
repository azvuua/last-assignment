import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();

  return (
    <div className="min-h-screen flex items-center justify-center bg-white">
      <div className="flex flex-wrap justify-center gap-6">
        <button
          className="px-6 py-3 bg-white rounded-md shadow-lg text-purple-800 transition-transform hover:scale-105"
          onClick={() => router.push("/biyd4")}
        >
          Week1
        </button>
        <button
          className="px-6 py-3 bg-white rounded-md shadow-lg text-purple-800 transition-transform hover:scale-105"
          onClick={() => router.push("/biyd2")}
        >
          Week2
        </button>
        <button
          className="px-6 py-3 bg-white rounded-md shadow-lg text-purple-800 transition-transform hover:scale-105"
          onClick={() => router.push("/biyd3")}
        >
          Week3
        </button>
        <button
          className="px-6 py-3 bg-white rounded-md shadow-lg text-purple-800 transition-transform hover:scale-105"
          onClick={() => router.push("/biyd1")}
        >
          Week4
        </button>
      </div>
    </div>
  );
}
