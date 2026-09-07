import React from "react";
import { MapPin } from "lucide-react";

function AddressButton ()  {


  return (
    <button
      variant="ghost"
      size="sm"
      className="flex items-center gap-2 rounded-full bg-orange-50 px-4 py-3 text-sm text-orange-500 hover:bg-orange-100 transition-colors"
    >
      <MapPin size={18} />
      <span>{"انتخاب آدرس"}</span>
    </button>
  );
};

export default AddressButton;