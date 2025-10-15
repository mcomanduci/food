"use client";

import Image from "next/image";
import { useRef, useState } from "react";

export default function ImagePicker({
  label,
  name,
}: {
  label: string;
  name: string;
}) {
  const [pickedImage, setPickedImage] = useState<string | null>(null);
  const imageInput = useRef<HTMLInputElement>(null);

  function handlePickImage() {
    imageInput.current?.click();
  }

  function handleImageChange(event: React.ChangeEvent<HTMLInputElement>) {
    const file = event.target.files?.[0];
    if (!file) {
      setPickedImage(null);
      return;
    }

    const fileReader = new FileReader();
    fileReader.onload = () => {
      setPickedImage(fileReader.result as string);
    };
    fileReader.readAsDataURL(file);
  }

  return (
    <div className="">
      <label
        htmlFor={name}
        className="block mb-2 font-montserrat uppercase text-[#b3aea5] font-bold"
      >
        {label}
      </label>
      <div className="flex items-start gap-6 mb-4">
        <div className="w-40 h-40 border-2 border-solid border-[#a4abb9] flex justify-center items-center text-center text-[#a4abb9] relative">
          {!pickedImage && (
            <p className="m-0 p-4 leading-[1.25]">No image picked yet.</p>
          )}
          {pickedImage && (
            <Image
              src={pickedImage}
              alt="The image selected by the user"
              className="w-full h-full object-cover"
              fill
            />
          )}
        </div>
        <input
          type="file"
          id={name}
          accept="image/png, image/jpeg"
          name={name}
          className="hidden"
          ref={imageInput}
          onChange={handleImageChange}
          required
        />
        <button
          className="border-0 py-2 px-6 bg-[#a4abb9] rounded-xs cursor-pointer hover:bg-[#b3b9c6] text-black leading-[1.25]"
          type="button"
          onClick={handlePickImage}
        >
          Pick an Image
        </button>
      </div>
    </div>
  );
}
