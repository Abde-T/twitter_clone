import { BadgeCheckIcon, DotsHorizontalIcon, SearchIcon } from "@heroicons/react/outline";

export default function Trending() {
  return (
    <div className="hidden lg:flex flex-col ml-7 mt-4">
      <div className="flex space-x-3 bg-black bg-opacity-10 w-[300px] h-[44px] p-3 rounded-3xl ">
        <SearchIcon className="w-6 text-yellow-100" />
        <input
          className="bg-transparent focus:outline-none placeholder:text-gray-600"
          placeholder="Search Twitter"
        />
      </div>
      <div className="w-[300px] h-[500px] bg-black bg-opacity-[10%] backdrop-blur-xl rounded-3xl mt-3">
        <h1 className="font-bold text-xl p-3">What's happening</h1>
        <div className="p-3 relative">
          <DotsHorizontalIcon className="w-5 right-4 text-gray-600 absolute" />
          <p className="text-xs text-gray-500">Trending in US</p>
          <h1 className="text-[15px] font-bold">China</h1>
          <p className="text-xs text-gray-500">340K Tweets</p>
        </div>
        <div className="p-3 relative">
          <DotsHorizontalIcon className="w-5 right-4 text-gray-600 absolute" />
          <p className="text-xs text-gray-500">Trending in US</p>
          <h1 className="text-[15px] font-bold">UK</h1>
          <p className="text-xs text-gray-500">300K Tweets</p>
        </div>
        <div className="p-3 relative">
          <DotsHorizontalIcon className="w-5 right-4 text-gray-600 absolute" />
          <p className="text-xs text-gray-500">Trending in US</p>
          <h1 className="text-[15px] font-bold">Canada</h1>
          <p className="text-xs text-gray-500">540K Tweets</p>
        </div>
        <div className="p-3 relative">
          <DotsHorizontalIcon className="w-5 right-4 text-gray-600 absolute" />
          <p className="text-xs text-gray-500">Trending in US</p>
          <h1 className="text-[15px] font-bold">Africa</h1>
          <p className="text-xs text-gray-500">200K Tweets</p>
        </div>
        <div className="p-3 relative">
          <DotsHorizontalIcon className="w-5 right-4 text-gray-600 absolute" />
          <p className="text-xs text-gray-500">Trending in US</p>
          <h1 className="text-[15px] font-bold">EU</h1>
          <p className="text-xs text-gray-500">250K Tweets</p>
        </div>
      </div>
      <div className="w-[300px] h-[300px] bg-black bg-opacity-10 rounded-3xl mt-3">
        <h1 className="font-bold text-xl p-3">Who to follow</h1>

        <div className="flex justify-between p-3">
          <div className="flex space-x-3">
            <img
              className="w-11 h-11 object-cover rounded-full"
              src="/assets/profilePictures/pfp1.png"
            />
            <div>
              <div className="flex space-x-1">
                <h1 className="font-bold">Theron Lax</h1>
                <BadgeCheckIcon className="w-[18px] text-blue-400" />
              </div>
              <h1 className="text-[12px] mt-1 text-gray-500">@TheronLax</h1>
            </div>
          </div>

          <button
            className="bg-yellow-300 text-black text-sm w-20 
          rounded-3xl font-bold
          h-8"
          >
            Follow
          </button>
        </div>
        <div className="flex justify-between p-3">
          <div className="flex space-x-3">
            <img
              className="w-11 h-11 object-cover rounded-full"
              src="/assets/profilePictures/pfp5.png"
            />
            <div>
              <div className="flex space-x-1">
                <h1 className="font-bold">Storm Durga</h1>
                <BadgeCheckIcon className="w-[18px] text-blue-400" />
              </div>
              <h1 className="text-[12px] mt-1 text-gray-500">@StormDurga</h1>
            </div>
          </div>

          <button
            className="bg-yellow-300 text-black text-sm w-20 
          rounded-3xl font-bold
          h-8"
          >
            Follow
          </button>
        </div>
        <div className="flex justify-between p-3">
          <div className="flex space-x-3">
            <img
              className="w-11 h-11 object-cover rounded-full"
              src="/assets/profilePictures/pfp4.png"
            />
            <div>
              <div className="flex space-x-1">
                <h1 className="font-bold">Lishan Matios</h1>
                <BadgeCheckIcon className="w-[18px] text-blue-400" />
              </div>
              <h1 className="text-[12px] mt-1 text-gray-500">@LishanMatios</h1>
            </div>
          </div>

          <button
            className="bg-yellow-300 text-black text-sm w-20 
          rounded-3xl font-bold
          h-8"
          >
            Follow
          </button>
        </div>

        
      
      </div>
    </div>
  );
}
