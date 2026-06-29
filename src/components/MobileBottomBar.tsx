import { Menu, Heart, Search, ShoppingCart, User, Download } from "lucide-react";
import { motion } from "motion/react";
import product from "@/data/product.json";

const { purchase } = product;

const navIcons = [
  { icon: Menu, label: "Menu" },
  { icon: Heart, label: "Wishlist" },
  { icon: ShoppingCart, label: "Cart" },
  { icon: User, label: "Account" },
];

export default function MobileBottomBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 lg:hidden">
      <div className="mx-2 mb-2 overflow-hidden rounded-2xl shadow-[0_4px_24px_rgba(0,0,0,0.18)]">
        {/* Compra */}
        <div className="flex items-center justify-between gap-3 bg-mist px-4 py-2.5">
          <div className="leading-tight">
            <p className="text-xs font-semibold text-ink/70">{purchase.edition}</p>
            <p className="text-lg font-semibold">${purchase.price}</p>
          </div>
          <motion.button
            type="button"
            whileTap={{ scale: 0.98 }}
            className="flex items-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-semibold text-white"
          >
            <Download className="size-5" strokeWidth={2.5} />
            {purchase.cta}
          </motion.button>
        </div>

        {/* Nav inferior */}
        <div className="relative flex items-center justify-between bg-white px-6 py-3">
          {/* primeros 2 iconos */}
          {navIcons.slice(0, 2).map(({ icon: Icon, label }) => (
            <button key={label} aria-label={label} className="text-ink">
              <Icon className="size-6" strokeWidth={2} />
            </button>
          ))}

          {/* Buscador central elevado */}
          <motion.button
            type="button"
            aria-label="Search"
            whileTap={{ scale: 0.92 }}
            className="-mt-8 flex size-14 items-center justify-center rounded-full bg-primary text-white shadow-md ring-4 ring-white"
          >
            <Search className="size-6" strokeWidth={2.5} />
          </motion.button>

          {/* últimos 2 iconos */}
          {navIcons.slice(2).map(({ icon: Icon, label }) => (
            <button key={label} aria-label={label} className="text-ink">
              <Icon className="size-6" strokeWidth={2} />
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
