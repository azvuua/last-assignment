import React from "react";

export default function Home() {
  React.useEffect(() => {
    document.querySelectorAll("[data-scroll-to]").forEach((item) => {
      item.addEventListener("click", () => {
        const targetId = item.getAttribute("data-scroll-to");
        const targetElement = document.querySelector(targetId);

        if (targetElement) {
          targetElement.scrollIntoView({ behavior: "smooth" });
        } else {
          console.error(`Element with ID ${targetId} not found`);
        }
      });
    });
  }, []);

  return (
    <div id="ehlel" className="w-full pt-0 bg-white">
      <div className="flex flex-col sm:flex-row w-full h-24 p-4 fixed top-0 left-0 bg-white z-50 shadow items-center justify-between sm:justify-start">
        <img
          data-scroll-to="#ehlel"
          className="h-12 ml-0 sm:ml-64"
          src="https://www.toki.mn/wp-content/uploads/2022/08/Asset-1@3x.png"
          alt="Logo"
        />
        <div className="flex flex-wrap justify-center sm:ml-auto sm:mr-10">
          <button className="p-2 text-gray-900" data-scroll-to="#section1">Үйлчилгээ</button>
          <button className="p-2 text-gray-900" data-scroll-to="#section2">Давуу тал</button>
          <button className="p-2 text-gray-900" data-scroll-to="#section3">Мэдээ</button>
          <button className="p-2 text-gray-900" data-scroll-to="#section4">Хамтран ажиллах</button>
        </div>
      </div>

      <div className="min-h-screen flex flex-col justify-center items-center pt-28 bg-yellow-100 text-center px-4">
        <p className="text-gray-500 text-2xl sm:text-[30px]">
          ХЭРЭГЦЭЭТ ҮЙЛЧИЛГЭЭГ НЭГ ДОРООС...
        </p>
        <img
          src="https://www.toki.mn/wp-content/uploads/2020/06/Artboard-1-2.png"
          alt="Hero"
          className="w-full max-w-md"
        />
        <div className="flex mt-4 space-x-5">
          <img className="h-14" src="https://www.toki.mn/wp-content/uploads/2021/01/apple.png" alt="Apple Store" />
          <img className="h-14" src="https://www.toki.mn/wp-content/uploads/2021/01/android.png" alt="Google Play" />
        </div>
      </div>

      {/* Toki Service */}
      <div id="section1" className="flex flex-col-reverse sm:flex-row items-center justify-center bg-white mt-20 px-4">
        <div className="sm:ml-20 w-full sm:w-1/2">
          <img className="w-full max-h-[500px] object-contain" src="/lab.jpeg" alt="Toki Service" />
        </div>
        <div className="mt-10 sm:mt-0 w-full sm:w-1/2 text-center sm:text-left">
          <p className="text-yellow-500 text-3xl font-bold mb-4">Toki Service</p>
          <p className="text-black text-lg font-medium">
            Та такси дуудах, кофе, хоол захиалах, нэгж дата авах, хэрэглээний төлбөрүүдээ төлөх, тоглоом тоглох,
            цэнэглэх гэх мэт өдөр бүрд хэрэгтэй үйлчилгээнүүдээ нэг дороос хялбар, хурдан авах боломжтой.
          </p>
        </div>
      </div>

      {/* Toki Pay */}
      <div id="section3" className="flex flex-col sm:flex-row items-center justify-center bg-white mt-20 px-4">
        <div className="w-full sm:w-1/2 text-center sm:text-left">
          <p className="text-yellow-500 text-3xl font-bold mb-4">Toki Pay</p>
          <p className="text-black text-lg font-medium">
            Toki Pay нь таны бодит хэтэвчийг цахимжуулсан цоо шинэ дижитал хэтэвч юм. Бүх банкны картаа холбож
            төлбөрөө төлөөд, лояалти карт болон бичиг баримтуудаа нэг дор хадгалаарай.
          </p>
        </div>
        <div className="sm:ml-10 w-full sm:w-1/2 mt-10 sm:mt-0">
          <img className="w-full max-h-[500px] object-contain" src="/labinOhin.jpeg" alt="Toki Service" />
        </div>
      </div>

      {/* Toki Shop */}
      <div id="section2" className="flex flex-col sm:flex-row items-center justify-center bg-white mt-20 px-4">
        <div className="sm:ml-20 w-full sm:w-1/2">
          <img className="w-full max-h-[500px] object-contain" src="/labinOhin2.jpeg" alt="Toki Shop" />
        </div>
        <div className="mt-10 sm:mt-0 w-full sm:w-1/2 text-center sm:text-left">
          <p className="text-yellow-500 text-3xl font-bold mb-4">Toki Shop</p>
          <p className="text-black text-lg font-medium">
            Та өөрийн хүссэн бараагаа албан ёсны дэлгүүрүүдээс сонголт хийж, нэг дороос шууд захиалах боломжтой.
          </p>
        </div>
      </div>

      {/* Final message */}
      <div className="flex flex-col w-full items-center justify-center text-center px-4 mt-40">
        <p className="text-yellow-500 text-3xl font-bold mb-4">Toki апп өдөр бүр танд тусална</p>
        <p className="text-black text-lg font-medium mt-10">
          Toki апп бол хүн бүрийн өдөр тутамд хэрэгтэй бүх үйлчилгээг нэг дор багтаасан таны цаг хугацааг хэмнэх
          хялбар, хэрэгтэй аппликейшн юм.
        </p>
      </div>

      <div className="w-full mt-40 h-40 bg-yellow-100 flex justify-center items-center">
        <button className="rounded-full text-white bg-yellow-400 px-8 py-3">Давуу тал</button>
      </div>

      <div
        id="section4"
        className="bg-gray-900 py-10 flex flex-col sm:flex-row justify-center items-center text-gray-400 px-4 text-center sm:text-left"
      >
        <img
          className="h-10 mb-4 sm:mb-0"
          src="https://www.toki.mn/wp-content/uploads/2022/08/Asset-1@3x.png"
          alt="Footer Logo"
        />
        <div className="sm:ml-40">
          <p className="p-1">Түгээмэл асуулт</p>
          <p className="p-1">Сүхбаатар дүүрэг, 8-р хороо, Сэнтрал Тауэр, 8-р давхар</p>
          <p className="p-1">77074477, 4477 nfo@toki.mn</p>
          <p className="p-1">Copyright © 2022 | Toki.mn</p>
        </div>
        <div className="sm:ml-40 mt-4 sm:mt-0">Нууцлал</div>
      </div>
    </div>
  );
}