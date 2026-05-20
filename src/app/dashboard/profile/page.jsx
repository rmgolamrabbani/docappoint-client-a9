"use client";

import { authClient } from "@/lib/auth-client";
import { Camera, Mail, User, X } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import toast from "react-hot-toast";

export default function ProfilePage() {
  const { data: session, refetch } = authClient.useSession();

  const user = session?.user;

  const [isOpen, setIsOpen] = useState(false);

  const [name, setName] = useState(user?.name || "");
  const [image, setImage] = useState(user?.image || "");

  const handleUpdateProfile = async (e) => {
    e.preventDefault();

    try {
      const res = await authClient.updateUser({
        name,
        image,
      });

      if (res?.data) {
        await refetch();

        toast.success("Profile updated successfully!");

        setIsOpen(false);
      }
    } catch (error) {
      console.log(error);

      toast.error("Failed to update profile!");
    }
  };

  return (
    <>
      {/* Profile Card */}
      <div className="flex min-h-[500px] items-center justify-center rounded-3xl border border-cyan-100 bg-gradient-to-br from-white to-cyan-50 p-6">

        <div className="w-full max-w-md rounded-[30px] border border-cyan-100 bg-white p-8 shadow-xl">

          {/* Image */}
          <div className="flex flex-col items-center">

            <div className="relative">

              <Image
  src={
    user?.image ||
    "https://i.ibb.co/4pDNDk1/avatar.png"
  }
  alt="profile"
  width={96}
  height={96}
  className="h-24 w-24 rounded-full border-4 border-cyan-100 object-cover shadow-lg"
/>

              <div className="absolute bottom-0 right-0 flex h-8 w-8 items-center justify-center rounded-full bg-cyan-500 text-white shadow-md">
                <Camera size={16} />
              </div>
            </div>

            {/* Name */}
            <h2 className="mt-5 text-2xl font-bold text-slate-800">
              {user?.name || "User"}
            </h2>

            {/* Email */}
            <div className="mt-2 flex items-center gap-2 text-slate-500">
              <Mail size={16} />
              <p className="text-sm">
                {user?.email}
              </p>
            </div>
          </div>

          {/* Button */}
          <button
            onClick={() => {
              setName(user?.name || "");
              setImage(user?.image || "");
              setIsOpen(true);
            }}
            className="mt-8 w-full rounded-2xl bg-gradient-to-r from-cyan-600 to-sky-500 py-3 font-semibold text-white shadow-lg transition-all duration-300 hover:scale-[1.01]"
          >
            Update Profile
          </button>
        </div>
      </div>

      {/* Modal */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4 backdrop-blur-sm">

          <div className="relative w-full max-w-md rounded-[28px] bg-white p-6 shadow-2xl">

            {/* Close */}
            <button
              onClick={() => setIsOpen(false)}
              className="absolute right-5 top-5 text-slate-500 transition hover:text-red-500"
            >
              <X size={20} />
            </button>

            {/* Header */}
            <div className="mb-6">

              <h2 className="text-2xl font-bold text-slate-800">
                Update Profile
              </h2>

              <p className="mt-1 text-sm text-slate-500">
                Update your information
              </p>
            </div>

            {/* Form */}
            <form
              onSubmit={handleUpdateProfile}
              className="space-y-5"
            >

              {/* Name */}
              <div>

                <label className="mb-2 block text-sm font-semibold text-slate-700">
                  Name
                </label>

                <div className="relative">

                  <User
                    size={18}
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
                  />

                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                    placeholder="Your Name"
                    className="w-full rounded-xl border border-cyan-200 py-3 pl-11 pr-4 outline-none transition-all focus:border-cyan-500 focus:ring-2 focus:ring-cyan-100"
                  />
                </div>
              </div>

              {/* Photo URL */}
              <div>

                <label className="mb-2 block text-sm font-semibold text-slate-700">
                  Photo URL
                </label>

                <input
                  type="text"
                  value={image}
                  onChange={(e) => setImage(e.target.value)}
                  required
                  placeholder="https://example.com/photo.jpg"
                  className="w-full rounded-xl border border-cyan-200 px-4 py-3 outline-none transition-all focus:border-cyan-500 focus:ring-2 focus:ring-cyan-100"
                />
              </div>

              {/* Preview */}
              <div className="flex justify-center">

                <img
                  src={
                    image ||
                    "https://i.ibb.co/4pDNDk1/avatar.png"
                  }
                  alt="preview"
                  className="h-24 w-24 rounded-full border-4 border-cyan-100 object-cover shadow-md"
                />
              </div>

              {/* Button */}
              <button
                type="submit"
                className="w-full rounded-2xl bg-gradient-to-r from-cyan-600 to-sky-500 py-3 font-semibold text-white shadow-lg transition-all duration-300 hover:scale-[1.01]"
              >
                Save Changes
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
}