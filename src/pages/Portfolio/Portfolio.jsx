import { useState } from "react";
import img1 from "../../assets/poert1.png";
import img2 from "../../assets/port2.png";
import img3 from "../../assets/port3.png";

export default function Portfolio() {
  const [selectedImage, setSelectedImage] = useState(null); 

  const openImage = (image) => {
    setSelectedImage(image);
  };

  const closeImage = () => {
    setSelectedImage(null); 
  };

  return (
    <>
      <div className="py-10">
        <div className="container">
          <h1 className="text-secondary-50 text-4xl text-center uppercase font-bold">
            portfolio section
          </h1>
          <div className="flex justify-center items-center gap-3 py-2">
            <div className="w-20 bg-secondary-50 p-0.5"></div>
            <div>
              <i className="fa-solid fa-star text-secondary-50 "></i>
            </div>
            <div className="w-20 bg-secondary-50 p-0.5"></div>
          </div>

          <div className="p-10">
            <div className="grid grid-cols-3 gap-5 py-5">
              {[img1, img2, img3, img1, img2, img3].map((image, index) => (
                <div
                  key={index}
                  className="relative group cursor-pointer"
                  onClick={() => openImage(image)}
                >
                  <img src={image} alt={`Image ${index + 1}`} className="rounded-lg" />
                  <div className="absolute inset-0 bg-primary bg-opacity-80 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <i className="fa-solid fa-plus text-white text-8xl "></i>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

 
      {selectedImage && (
        <div
          className="fixed inset-0 bg-primary bg-opacity-50 flex items-center justify-center"
          onClick={closeImage}
        >
          <div
            className="relative"
            onClick={(e) => e.stopPropagation()} 
          >
            <button
              className="absolute top-2 right-2 text-red-500 text-xl"
              onClick={closeImage}
            >
              ✕
            </button>
            <img
              src={selectedImage}
              alt="Selected"
              className="max-w-full max-h-[80vh] rounded-lg"
            />
          </div>
        </div>
      )}
    </>
  );
}
