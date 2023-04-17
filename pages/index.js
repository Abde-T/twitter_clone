import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "@/styles/Home.module.css";
import Sidebar from "@/components/Sidebar";
import PostFeed from "@/components/PostFeed";
import Trending from "@/components/Trending";
import BottomBanner from "@/components/BottomBanner";
import CommentModal from "@/components/modals/CommentModal";

import { useSelector } from "react-redux";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const username = useSelector((state) => state.user.username);
  return (
    <div>
      <div className=" flex bg-black min-h-screen text-[#E7E9EA] max-w-[1400px] mx-auto ">
        <Sidebar />
        <PostFeed />
        <Trending />
      </div>
      <CommentModal/>
      {!username && <BottomBanner />}
    </div>
  );
}
