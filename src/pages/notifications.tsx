import { useNavigate } from "react-router";
import { Icon } from "@iconify/react";
import { InfoIcon } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Notification() {
  const navigate = useNavigate();

  return (
    <section className="space-y-5">
      <div className="flex items-center space-x-3">
        <Button variant="outline" size="icon" onClick={() => navigate("/")}>
          <Icon icon="mynaui:arrow-left" />
        </Button>
        <p>Notifikasi</p>
      </div>
      <div className="mt-10">
        <div className="space-y-4">
          {[
            {
              title: "Makanan kamu akan expired dalam 5 hari !",
              desc: "Segera masak makanan kamu atau lebih baik kasih ke tetangga aja biar tidak mubazir.",
            },
            {
              title: "Makanan kamu akan expired dalam 3 hari !",
              desc: "Segera masak makanan kamu atau lebih baik kasih ke tetangga aja biar tidak mubazir.",
            },
            {
              title: "Makanan kamu akan expired dalam 1 hari !",
              desc: "Segera masak makanan kamu atau lebih baik kasih ke tetangga aja biar tidak mubazir.",
            },
            {
              title: "Yah !, makanan kamu udah expired",
              desc: "Segera masak makanan kamu atau lebih baik kasih ke tetangga aja biar tidak mubazir.",
            },
          ].map((item, index) => (
            <div key={index} className="border-b border-gray-200/80 pb-4">
              <div className="flex items-start gap-4">
                <div className="shrink-0 mt-1 text-gray-500">
                  <InfoIcon className="size-5.5" />
                </div>
                <div className="space-y-2">
                  <p className="font-semibold text-gray-800">{item.title}</p>
                  <p className="text-xs text-gray-600">{item.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
