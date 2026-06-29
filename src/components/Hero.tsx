import { ChevronRight, CircleCheck } from "lucide-react";
import product from "@/data/product.json";
import Gallery from "@/components/Gallery";
import PurchasePanel from "@/components/PurchasePanel";

const { breadcrumb, esrb, switch2Compatibility } = product;

export default function Hero() {
  return (
    <section className="bg-sky">
      <div className="mx-auto max-w-[1240px] translate-y-[0em] lg:translate-y-[2em]">
        <div className="rounded-2xl bg-white shadow-lg p-12 md:p-12">
          {/* Breadcrumb */}
          <nav className="mb-5 flex items-center gap-1.5 text-sm font-medium text-ink/70">
            {breadcrumb.map((crumb, i) => (
              <span key={crumb} className="flex items-center gap-1.5">
                {i > 0 && <ChevronRight className="size-3.5 text-ink/40" />}
                <a
                  href="#"
                  className={
                    i === breadcrumb.length - 1
                      ? "text-ink"
                      : "hover:text-primary"
                  }
                >
                  {crumb}
                </a>
              </span>
            ))}
          </nav>

          {/* Dos columnas */}
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-12">
            {/* Izquierda: galería + ESRB + compat */}
            <div className="flex flex-col gap-5">
              <Gallery />

              {/* ESRB */}
              <div className="flex items-start gap-3 max-w-[412px]">
                <img src="/assets/ESRB.svg" alt="" />
                <div className="text-xs text-ink/80">
                  <p className="border-b pb-2">{esrb.descriptors.join(", ")}</p>
                  <p className="pt-1">{esrb.interactive}</p>
                </div>
              </div>

              {/* Caja compatibilidad Switch 2 */}
              <div className="flex items-start gap-3 rounded-lg bg-mist/50 p-4">
                <CircleCheck className="mt-0.5 size-5 shrink-0 text-navy" />
                <div className="text-sm">
                  <p className="font-semibold">{switch2Compatibility.title}</p>
                  <p className="text-ink/80">{switch2Compatibility.text}</p>
                </div>
              </div>
            </div>

            {/* Derecha: card de compra */}
            <PurchasePanel />
          </div>
        </div>
      </div>
    </section>
  );
}
