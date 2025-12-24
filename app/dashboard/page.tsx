import UserProfileCard from "./profilecard/UserProfileCard";
import Quiz from "./quiz/quiz";
export default function DashboardPage() {
  return (
    <div className="bg-[#f3f4f6] flex justify-center flex-col gap-20  ">
      <UserProfileCard />
      <Quiz />
    </div>
  );
}
