import Image from "next/image";
import { FilmIcon, HomeIcon, InboxIcon } from "@heroicons/react/outline";
import { ShopingCartIcon, UserGroupIcon } from "@heroicons/react/solid";
import { useDispatch, useSelector } from "react-redux";

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
      <div className=" bg-yellow-300 sticky top-0 z-50  flex justify-center">
        <div className="w-[1400px]  flex justify-center  ">
          <div className=" w-full h-[70px] flex items-center justify-between mx-3 xl:justify-around ">
            <div className="flex justify-center xl:justify-start items-center py-3 xl:p-3">
              <Image src={"/assets/logo.png"} width={100} height={50}  />
            </div>
            <div className="hidden md:flex justify-center items-center">
              <div className="border-b-8 rounded-lg border-black p-[17px]">
                <HomeIcon className=" h-10 " />
              </div>
              <div className="flex">
                <UserGroupIcon className="navHover h-10 mx-5" />
                <FilmIcon className="navHover h-10 mx-5" />
                <InboxIcon className="navHover h-10 mx-5" />
              </div>
            </div>

            <div
              onClick={handleSignOut}
              className="
          bottom-24
       bg-opacity-1 rounded-full cursor-pointer
        xl:p-3 flex justify-center items-center   space-x-3"
            >
              <img
                className=" w-12 h-12 rounded-full border-black border-[2px]
            object-cover 
            "
                src={user.photoUrl || "/assets/default.jpg"}
              />
              <div className="hidden xl:inline">
                <h1 className="font-bold  whitespace-nowrap">{user.name}</h1>
                <h1 className="text-black">@{user.username}</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
