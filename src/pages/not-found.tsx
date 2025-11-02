import { Icon } from "@iconify/react";
import { useNavigate } from "react-router";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  const navigate = useNavigate();

  return (
    <section className="min-h-96 grid place-content-center">
      <div className="flex flex-col items-center space-y-4">
        <h2>Page Not Found</h2>
        <Button onClick={() => navigate("/", { preventScrollReset: true })}>
          <Icon icon="mynaui:arrow-left" /> Back
        </Button>
      </div>
    </section>
  );
}
