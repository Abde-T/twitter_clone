import LoginModal from "./modals/LoginModal";
import SignupModal from "./modals/SignupModal";

export default function BottomBanner() {
  return (
    <div className="flex xl:space-x-[200px] justify-center items-center fixed w-full h-[80px] border border-slate-100 border-l-0 border-r-0 border-b-0 bg-[#2e5070] bottom-0">
      <div className="hidden xl:inline text-slate-100">
        <h1 className="text-2xl font-bold">Don't miss what's happening</h1>
        <span className="text-[18px] font-normal">
          People on Twitter are the first to know.
        </span>
      </div>

      <div className="space-x-3">
            <LoginModal/>
            <SignupModal/>
      </div>
    </div>
  );
}