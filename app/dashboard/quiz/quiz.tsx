import Image from "next/image";
import { quizzes } from "@/lib/constant/Quize";

function Quiz() {
  return (
    <div className="bg-white max-w-[850px] rounded-2xl p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-xl font-semibold text-indigo-600">Quizzes</h1>
        <span className="text-indigo-600 cursor-pointer">View all</span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {quizzes.map((quiz) => (
          <div
            key={quiz.id}
            className="relative rounded-2xl overflow-hidden shadow-md"
          >
            <Image
              src={quiz.image}
              alt={quiz.title}
              width={400}
              height={260}
              className="w-full h-[260px] object-cover"
            />

            <div
              className="
                absolute
                top-1/2 left-1/2
                -translate-x-1/2 -translate-y-1/2
                translate-y-6
                w-[85%]
                px-6 py-4
                bg-indigo-600/95
                text-white
                rounded-xl
              "
            >
              <h3 className="font-semibold text-lg">{quiz.title}</h3>
              <p className="text-sm opacity-90">{quiz.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Quiz;
