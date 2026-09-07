import { Bell } from "lucide-react";
import CartBadge from "./cartBadge";
import UserMenu from "./userMenu";
function HeaderActions  () {

  return (
    <div className="flex items-center gap-4">
      {/* Notification Bell */}
      <Bell className="cursor-pointer text-gray-600 hover:text-red-500 transition-colors" />

      {/* Auth Button */}
      <UserMenu/>

      {/* Divider */}
      <span className="w-px h-6 bg-gray-300" />

      {/* Cart */}
     <CartBadge/>
    </div>
  );
};

export default HeaderActions;