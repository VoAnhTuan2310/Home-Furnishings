import { UserPlus, Search, Heart, ShoppingCart } from 'lucide-react';

export default function Actions() {
  return (
    <div className="flex gap-[45px] items-center"> {/* Thêm items-center để căn giữa theo chiều dọc */}
      <button aria-label="Account" className="hover:text-primary transition-colors">
        <UserPlus size={20} /> 
      </button>
      <button aria-label="Search" className="hover:text-primary transition-colors">
        <Search size={20} />
      </button>
      <button aria-label="Favorites" className="hover:text-primary transition-colors">
        <Heart size={20} />
      </button>
      <button aria-label="Cart" className="hover:text-primary transition-colors">
        <ShoppingCart size={20} />
      </button>
    </div>
  );
}