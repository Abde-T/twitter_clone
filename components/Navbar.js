import Image from "next/image";
import { FilmIcon, HomeIcon, InboxIcon } from "@heroicons/react/outline";
import { ShopingCartIcon, UserGroupIcon } from "@heroicons/react/solid";
import { useDispatch, useSelector } from "react-redux";
import { signOut } from "firebase/auth";
import { signOutUser } from "@/redux/userSlice";
import { auth } from "@/firebase";
import { closeLoginModal, closeSignupModal } from "@/redux/modalSlice";

export default function Navbar() {
  const dispatch = useDispatch();

  const user = useSelector((state) => state.user);

  async function handleSignOut() {
    await signOut(auth);
    dispatch(signOutUser());
    dispatch(closeSignupModal());
    dispatch(closeLoginModal());
  }

  return (
    <>
      <div className="bg-[#2e5070] border border-slate-100 border-t-0 border-x-0 sticky top-0 z-50  flex justify-center">
        <div className="w-[1520px]  flex justify-center  ">
          <div className=" w-full h-[70px] flex items-center justify-between mx-3 xl:justify-around ">
            <div className="flex justify-center xl:justify-start items-center py-3 xl:p-3">
              <Image src={"/assets/logo.png"} width={50} height={50} alt="logo" />
            </div>
            <div className="hidden md:flex justify-center items-center">
              <div className="border-b-8 rounded-lg border-slate-100 p-[19px]">
                <HomeIcon className=" h-10 text-slate-100" />
              </div>
              <div className="flex">
                <UserGroupIcon className="navHover h-10 mx-5 text-slate-100" />
                <FilmIcon className="navHover h-10 mx-5 text-slate-100" />
                <InboxIcon className="navHover h-10 mx-5 text-slate-100" />
              </div>
            </div>
            {user.username ? (
            <div
            onClick={handleSignOut}
            className="
            bottom-24
            bg-opacity-1 rounded-full cursor-pointer
            xl:p-3 flex justify-center items-center space-x-3"
            >
              <img
                className=" w-12 h-12 rounded-full border-slate-100 border-[2px]
                object-cover 
                "
                src={user.photoUrl || "/assets/default.jpg"}
              />
              <div className="hidden xl:inline">
                <h1 className="font-bold  whitespace-nowrap text-slate-100">{user.name}</h1>
                <h1 className="text-slate-100">@{user.username}</h1>
              </div>
            </div>
            ):  <div className=" w-28 h-2 "></div>
            }
          </div>
        </div>
      </div>
    </>
  );
}
