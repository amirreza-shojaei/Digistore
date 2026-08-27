import { Bell, User } from "lucide-react";
import CartBadge from "./cartBadge";
const HeaderActions = () => {

  return (
    <div className="flex items-center gap-4">
      {/* Notification Bell */}
      <Bell className="cursor-pointer text-gray-600 hover:text-red-500 transition-colors" />

      {/* Auth Button */}
      <button
        variant="outline"
        size="sm"
        className="flex items-center gap-2 rounded-lg border px-4 py-2 hover:bg-gray-100"
      >
        <User size={18} />
        ورود | ثبت‌نام
      </button>

      {/* Divider */}
      <span className="w-px h-6 bg-gray-300" />

      {/* Cart */}
     <CartBadge/>
    </div>
  );
};

export default HeaderActions;