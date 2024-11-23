import { useState } from "react";

export default function AnimatedInputs() {
  const [focusedInputs, setFocusedInputs] = useState({});

  const handleFocus = (name) => {
    setFocusedInputs((prev) => ({ ...prev, [name]: true }));
  };

  const handleBlur = (name, value) => {
    if (!value) {
      setFocusedInputs((prev) => ({ ...prev, [name]: false }));
    }
  };

  return (
    <div className="py-12">
      <div className="container mx-auto max-w-md">
        <h1 className="text-4xl text-center uppercase font-bold mb-10">Contact Section</h1>

        <form className="space-y-8">
          {[
            { name: "userName", type: "text", label: "User Name" },
            { name: "userAge", type: "text", label: "User Age" },
            { name: "userEmail", type: "email", label: "User Email" },
            { name: "userPassword", type: "password", label: "User Password" },
          ].map((field) => (
            <div key={field.name} className="relative w-full">

              <label
                htmlFor={field.name}
                className={`absolute left-3 transition-all duration-300 ease-in-out ${
                  focusedInputs[field.name]
                    ? "top-[-25px] text-sm text-primary opacity-100"
                    : "top-3 text-base text-gray-500 opacity-0"
                }`}
              >
                {field.label}
              </label>
         
              <input
                type={field.type}
                id={field.name}
                placeholder={field.label}
                className="form-control w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary"
                onFocus={() => handleFocus(field.name)}
                onBlur={(e) => handleBlur(field.name, e.target.value)}
                autoComplete="off"
              />
            </div>
          ))}

          <button className="bg-primary w-full p-2 rounded-md text-sm font-semibold text-white uppercase hover:bg-secondary-50 transition duration-300">
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}
