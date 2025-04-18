import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();

  return (
    <div className="w-full h-[4400px] pt-0 bg-white">
      <div className="flex w-full h-20 p-4 fixed top-0 left-0 bg-white z-50 shadow">
        <img
          className="h-12 ml-64"
          src="https://www.toki.mn/wp-content/uploads/2022/08/Asset-1@3x.png"
          alt="Logo"
        />
        <p className="p-3 text-gray-900 ml-[500px]">Үйлчилгээ</p>
        <p className="p-3 text-gray-900">Давуу тал</p>
        <p className="p-3 text-gray-900">Мэдээ</p>
        <p className="p-3 text-gray-900">Хамтран ажиллах</p>
      </div>

      <div className="h-[1000px] flex flex-col justify-center items-center pt-4 bg-yellow-100 mt-20">
        <p className="text-gray-500 text-[30px]">
          ХЭРЭГЦЭЭТ ҮЙЛЧИЛГЭЭГ НЭГ ДОРООС...
        </p>
        <img
          src="https://www.toki.mn/wp-content/uploads/2020/06/Artboard-1-2.png"
          alt="Hero"
        />
        <div className="flex mt-4">
          <img
            className="h-14"
            src="https://www.toki.mn/wp-content/uploads/2021/01/apple.png"
            alt="Apple Store"
          />
          <img
            className="h-14 ml-5"
            src="https://www.toki.mn/wp-content/uploads/2021/01/android.png"
            alt="Google Play"
          />
        </div>
      </div>



      <div className="h-[800px] flex flex-row p-10 bg-white mt-20">
        <div className="ml-20">
          <img
            className="h-[700px]"
            src="/lab.jpeg"
            alt="Toki Service"
          />
        </div>

        <div className="ml-10 w-[600px]  right-20 flex flex-col justify-start mt-52">
          <p className="text-yellow-500  text-3xl font-bold mb-4">Toki Service</p>
          <p className="text-black text-lg font-medium ">
            Та такси дуудах, кофе, хоол захиалах, нэгж дата авах, хэрэглээний
            төлбөрүүдээ төлөх, тоглоом тоглох, цэнэглэх гэх мэт өдөр бүрд хэрэгтэй
            үйлчилгээнүүдээ нэг дороос хялбар, хурдан авах боломжтой.
          </p>
        </div>
      </div>

      <div className="h-[800px] flex flex-row p-10 bg-white mt-20">
        

        <div className="ml-40 w-[500px]  right-20 flex flex-col justify-start mt-52">
          <p className="text-yellow-500  text-3xl font-bold mb-4">Toki Pay</p>
          <p className="text-black text-lg font-medium ">
          Toki Pay нь таны бодит хэтэвчийг цахимжуулсан цоо шинэ дижитал хэтэвч юм. Бүх банкны картаа холбож төлбөрөө төлөөд, лояалти карт болон бичиг баримтуудаа нэг дор хадгалаарай.

          </p>
        </div>
        
        <div className="ml-10">
          <img
            className="h-[700px]"
            src="/labinOhin.jpeg"
            alt="Toki Service"
          />
        </div>
      </div>



      <div className="h-[800px] flex flex-row p-10 bg-white mt-20">
        <div className="ml-52">
          <img
            className="h-[700px]"
            src="/labinOhin2.jpeg"
            alt="Toki Shop"
          />
        </div>

        <div className="ml-10 w-[500px]  right-20 flex flex-col justify-start mt-60">
          <p className="text-yellow-500  text-3xl font-bold mb-4">Toki Service</p>
          <p className="text-black text-lg font-medium ">
          Та өөрийн хүссэн бараагаа албан ёсны дэлгүүрүүдээс сонголт хийж, нэг дороос шууд захиалах боломжтой.
          </p>
        </div>
      </div>


      <div className="ml-10 flex flex-col w-full right-20 items-center justify-center">
          <p className="text-yellow-500  text-3xl font-bold mb-4">Toki апп өдөр бүр танд тусална</p>
          <p className="text-black text-lg font-medium mt-10 ">
          Toki апп бол хүн бүрийн өдөр тутамд хэрэгтэй бүх үйлчилгээг нэг дор багтаасан таны цаг хугацааг хэмнэх хялбар, хэрэгтэй аппликейшн юм.
          </p>
        </div>

        <div className="w-full mt-40 h-40 bg-yellow-100 flex justify-center items-center">
          <button className="rounded-full text-white bg-yellow-400 p-3 pl-16 pr-16">Давуу тал</button>
        </div>
        <div className="bg-gray-900 h-[350px] flex justify-center items-center text-gray-400 ">
            <img className="h-10 " src="https://www.toki.mn/wp-content/uploads/2022/08/Asset-1@3x.png"></img>
            <div className="ml-40">
              <p className="h-2 p-3">Түгээмэл асуулт</p>
              <p className="h-2 p-3">Сүхбаатар дүүрэг, 8-р хороо, Сэнтрал Тауэр, 8-р давхар</p>
              <p className="h-2 p-3">77074477, 4477   nfo@toki.mn</p>
              <p className="h-2 p-3">Copyright © 2022 | Toki.mn</p>
            </div>
            <div className="ml-40">Нууцлал</div>
        </div>
    </div>
  );
}
