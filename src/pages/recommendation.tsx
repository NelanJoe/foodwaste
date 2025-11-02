import { useNavigate } from "react-router";
import { Icon } from "@iconify/react";
import { Button } from "@/components/ui/button";

export default function Recommendation() {
  const navigate = useNavigate();

  return (
    <section className="space-y-5">
      <div className="flex items-center space-x-3">
        <Button
          variant="outline"
          size="icon"
          onClick={() => navigate("/", { preventScrollReset: true })}
        >
          <Icon icon="mynaui:arrow-left" />
        </Button>
        <p>Rekomendasi menu</p>
      </div>
      <div className="mt-10">
        <h1>Rekomendasi Menu Pilihan</h1>
      </div>
    </section>
  );
}
