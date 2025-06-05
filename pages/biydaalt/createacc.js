import Image from "next/image";
import { useState } from "react";

export default function Signup() {
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");

  const isFormValid = phone && password && confirm && password === confirm;

  return (
    <div className="min-h-screen bg-white flex flex-col items-center px-6 pt-4 text-gray-800">
     
      <div className="flex justify-between w-full max-w-sm mt-4 mb-10">
        <div className="flex items-center gap-2 w-1/2 justify-center py-2 rounded-xl bg-gray-100">
          <Image src="/mongolia.png" alt="Mongolia" width={24} height={16} />
          <span className="text-sm">Mongolia</span>
        </div>
        <div className="flex items-center gap-2 w-1/2 justify-center py-2 rounded-xl bg-gray-200">
          <Image src="/usa.png" alt="English" width={24} height={16} />
          <span className="text-sm">English</span>
        </div>
      </div>

      <div className="w-full max-w-sm">
        <p className="text-center text-sm mb-4">Enter your phone number to sign up</p>

        <div className="flex items-center border border-gray-300 rounded-md px-3 py-2 mb-4">
          <Image src="/mongolia.png" alt="Flag" width={20} height={14} />
          <span className="ml-2 text-sm">+976</span>
          <span className="mx-2 text-gray-300">|</span>
          <input
            type="tel"
            placeholder="Phone number"
            className="flex-1 text-sm outline-none bg-transparent"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
        </div>

        <input
          type="password"
          placeholder="Password"
          className="w-full border border-gray-300 rounded-md px-3 py-2 mb-4 text-sm"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <input
          type="password"
          placeholder="Confirm Password"
          className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm"
          value={confirm}
          onChange={(e) => setConfirm(e.target.value)}
        />
        <p className="text-xs text-gray-400 mt-1 mb-6">Must match the previous entry</p>

        <button
          className={`w-full py-2 rounded-md text-sm font-medium ${
            isFormValid ? "bg-red-500 text-white" : "bg-red-200 text-white"
          }`}
          disabled={!isFormValid}
        >
          Create new account
        </button>

        <p className="text-center text-sm text-gray-500 mt-6">
          Already have existing account?
        </p>
      </div>
    </div>
  );
}
