import { useRouter } from "next/router";

export default function Arkhangai() {
  const router = useRouter();

  const dayPLan = [
    {
      title: 'Morning',
      items: [
        { activity: 'BREAKFAST', time: '(8:00–9:30 am)' },
        { activity: 'TRANSFER TO AIRPORT', time: '(10:00–10:30 am)' },
        { activity: 'FLIGHT TO ARKHANGAI', time: '(12:00–2:00 pm)' },
      ],
    },
    {
      title: 'Afternoon',
      items: [
        { activity: 'LUNCH', time: '(2:30–3:30 pm)' },
        { activity: 'CHECK-IN TO GER CAMP', time: '(4:00–4:30 pm)' },
        { activity: 'HORSE RIDING', time: '(5:00–6:30 pm)' },
      ],
    },
    {
      title: 'Evening',
      items: [
        { activity: 'DINNER', time: '(7:00–8:00 pm)' },
        { activity: 'CAMPFIRE & STORYTELLING', time: '(8:30–10:00 pm)' },
        { activity: 'REST', time: '(10:00 pm onwards)' },
      ],
    },
  ];

  return (
    <div className="h-screen flex flex-col bg-gray-100">
      <div className="relative w-full h-60" onClick={() => router.push("/biydaalt/oyu1")}>
        <img
          src="https://farandawayadventures.com/wp-content/uploads/2020/12/mongolia-introduction.png"
          className="w-full h-full object-cover rounded-b-3xl"
        />
        <div className="absolute bottom-6 left-6 text-white">
          <p className="text-sm">Countryside</p>
          <h1 className="text-3xl font-bold">Arkhangai</h1>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto p-4">
        {dayPLan.map((block, index) => (
          <div key={index} className="mb-6">
            <h2 className="text-green-700 font-semibold text-lg mb-2 flex items-center">
              <span className="w-2 h-2 rounded-full bg-green-700 mr-2"></span>
              {block.title.toUpperCase()}
            </h2>
            <div className="border border-green-200 rounded-lg p-4 space-y-2">
              {block.items.map((item, i) => (
                <div key={i} className="text-green-900">
                  <p className="font-medium">{i + 1}. {item.activity}</p>
                  <p className="text-xs text-gray-500 ml-4">{item.time}</p>
                </div>
              ))}
            </div>
          </div>      
        ))}
      </div>
    </div>
  );
}
