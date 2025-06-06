// pages/profile.js
import { useRouter } from "next/router";

export default function Profile() {
  const router = useRouter();

  const accountItems = [
    { title: "Profile information", subtitle: "Change number, email id", img: "/imgpro.png" },
    { title: "Preferences", subtitle: "Theme, travel preferences" , img: "/imgpro.png"},
    { title: "Payment methods", subtitle: "Saved cards, Paypal" , img: "/imgwallet.png"},
    { title: "Notifications", subtitle: "Push notifications", img: "/imgnotif.png" },
  ];

  const supportItems = [
    { title: "Privacy policy", subtitle: "Security notifications", img: "/imglock.png" },
    { title: "Terms & Conditions", subtitle: "Cancellation policy", img: "/imgpaper.png" },
    { title: "FAQ & Help", subtitle: "Get in touch with us", img: "/imgfaq.png" },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <main className="flex-1 p-6 pt-10">
        <h1 className="text-4xl  mt-5 text-black font-bold mb-8">Profile</h1>

        <div className="flex justify-between">
        <div className="flex items-center gap-4 border-b pb-4 mb-6">
          <div className="bg-black text-white w-12 h-12 flex items-center justify-center rounded-full text-lg font-bold">
            A
          </div>
          <div>
            <p className="text-xl text-black font-semibold">Alex</p>
            <p className="text-blue-500 text-xs">Show profile</p>
          </div>
        </div>
        <div className="mt-3"> <img src="/more.png"></img> </div>
        </div>

        <div className="mb-6">
          <h2 className="text-2xl font-semibold mb-3 text-gray-700">Account</h2>
          {accountItems.map((item, idx) => (
             <div key={idx} className="mb-3 items-center flex">
             <img className="mr-4 h-6" src={item.img}></img>
              <div><p className="font-medium text-black">{item.title}</p>
              <p className="text-sm text-gray-400">{item.subtitle}</p> </div>
            </div>
          ))}
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-3 text-gray-700">Help & Support</h2>
          {supportItems.map((item, idx) => (
             <div key={idx} className="mb-3 items-center flex">
             <img className="mr-4 h-6" src={item.img}></img>
              <div><p className="font-medium text-black">{item.title}</p>
              <p className="text-sm text-gray-400">{item.subtitle}</p> </div>
            </div>
          ))}
        </div>
      </main>

      <footer className="h-24 flex justify-around items-center [background-color:#bbcc96] text-sm">
        <div onClick={() => router.push("/biydaalt/page1")} className="text-center cursor-pointer">
          <img src="/greenhome.png" alt="Home" />
        </div>
        <div onClick={() => router.push("/biydaalt/oyu")}  className="text-center">
          <img src="/calendar.png" alt="Calendar" />
        </div>
        <div onClick={() => router.push("/biydaalt/wishlist")}  className="text-center">
          <img src="/like.png" alt="Favorites" />
        </div>
        <div  className="text-center">
          <img src="/whiteprofile.png" alt="Profile" />
        </div>
      </footer>
    </div>
  );
}
