import { useNavigate } from "react-router";
import { Icon } from "@iconify/react";
import { Button } from "@/components/ui/button";
import SalesCard from "@/components/sales-card";

export default function Sales() {
  const navigate = useNavigate();

  return (
    <section className="space-y-5 pb-5">
      <div className="flex items-center space-x-3">
        <Button
          variant="outline"
          size="icon"
          onClick={() => navigate("/", { preventScrollReset: true })}
        >
          <Icon icon="mynaui:arrow-left" />
        </Button>
        <p>Belanja mingguan</p>
      </div>
      <div className="mt-10 space-y-5">
        <p className="text-slate-500 text-sm">
          Mastiin nggak lupa daftar yang mau dibeli
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <SalesCard />
          <SalesCard />
          <SalesCard />
          <SalesCard />
          <SalesCard />
          <SalesCard />
        </div>
      </div>
    </section>
  );
}
