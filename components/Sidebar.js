import { auth } from "@/firebase";
import { closeLoginModal, closeSignupModal } from "@/redux/modalSlice";
import { signOutUser } from "@/redux/userSlice";
import {
  HomeIcon,
  HashtagIcon,
  InboxIcon,
  BookmarkIcon,
  BellIcon,
  UserIcon,
  DotsCircleHorizontalIcon,
  DotsHorizontalIcon,
} from "@heroicons/react/outline";
import { signOut } from "firebase/auth";
import Image from "next/image";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";

export default function Sidebar() {
  const dispatch = useDispatch();

  const user = useSelector(state => state.user)

  async function handleSignOut() {
    await signOut(auth);
    dispatch(signOutUser());
    dispatch(closeSignupModal())
    dispatch(closeLoginModal())
  }
  return (
    <div className="h-full hidden sm:flex flex-col fixed xl:ml-24 ">
      <nav className="h-full relative xl:space-y-1.5 mt-2">
      <Link href={"/"}>
        <SidebarLink Icon={HomeIcon} text={"Home"} />
      </Link>
        <SidebarLink Icon={HashtagIcon} text={"Explore"} />
        <SidebarLink Icon={BellIcon} text={"Notifications"} />
        <SidebarLink Icon={InboxIcon} text={"Messages"} />
        <SidebarLink Icon={BookmarkIcon} text={"Bookmarks"} />
        <SidebarLink Icon={UserIcon} text={"Profile"} />
        <SidebarLink Icon={DotsCircleHorizontalIcon} text={"More"} />
        <button
          className="hidden xl:inline bg-slate-100 text-[#242424]
        rounded-full h-[52px] mt-2 w-[200px] text-lg font-bold
        "
        >
          Post
        </button>
      </nav>
      {user.username ?(
        <div
        onClick={handleSignOut}
        className="
        relative bottom-20
        hover:bg-white hover:bg-opacity-10 rounded-full cursor-pointer
        xl:p-3 flex justify-center items-center  space-x-3"
        >
          <img
            className="w-10 h-10 rounded-full
            object-cover 
            "
            src={user.photoUrl || "/assets/default.jpg" } 
            />
          <div className="hidden xl:inline">
            <h1 className="font-bold  whitespace-nowrap">{user.name}</h1>
            <h1 className="text-slate-100">@{user.username}</h1>
          </div>
          <DotsHorizontalIcon className="h-5 hidden xl:inline text-slate-100" />
        </div>)
          : null
        }
    </div>
  );
}

function SidebarLink({ text, Icon }) {
  return (
    <li className="hoverAnimation flex mb-3 xl:justify-start justify-center items-center text-xl space-x-3">
      <Icon className="h-7  text-white" />
      <span className="hidden xl:inline">{text}</span>
    </li>
  );
}