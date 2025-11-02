import { useNavigate, useParams } from "react-router";
import { Icon } from "@iconify/react";
import { EditIcon, Loader2Icon, Trash2Icon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ButtonGroup } from "@/components/ui/button-group";
import { useInventory } from "@/api/inventory/get-inventories";
import { useDeleteInventory } from "@/api/inventory/delete-inventory";

export default function InventoryId() {
  const navigate = useNavigate();

  const params = useParams<{ inventoryId: string }>();

  const { data: inventory } = useInventory(Number(params.inventoryId));
  const { deleteInventory, isPending } = useDeleteInventory();

  return (
    <section className="space-y-5 pb-5">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <Button
            variant="outline"
            size="icon"
            onClick={() => navigate("/inventory", { preventScrollReset: true })}
          >
            <Icon icon="mynaui:arrow-left" />
          </Button>
          <p className="capitalize">{inventory && inventory.name}</p>
        </div>
        <ButtonGroup aria-label="action button">
          <Button variant="outline">
            <EditIcon className="size-3 text-teal-500" />
          </Button>
          <Button
            variant="outline"
            onClick={
              inventory
                ? () => deleteInventory(Number(params.inventoryId))
                : undefined
            }
            disabled={isPending}
          >
            {isPending ? (
              <Loader2Icon className="size-3 animate-spin" />
            ) : (
              <Trash2Icon className="size-3 text-red-500" />
            )}
          </Button>
        </ButtonGroup>
      </div>
      <div className="mt-10 space-y-5">
        {inventory && (
          <div className="space-y-4">
            <div>
              <img
                src={inventory.photo}
                alt={inventory.name}
                className="rounded-md"
              />
            </div>
            <div className="flex items-center justify-between">
              <h2 className="capitalize font-semibold text-xl">
                {inventory.name}
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
              <div className="space-y-2 shadow p-2 rounded-md w-full">
                <Icon icon="mynaui:hash-square" />
                <p className="text-xs">
                  {inventory.weight} {inventory.unit}
                </p>
              </div>
              <div className="space-y-2 shadow p-2 rounded-md w-full">
                <Icon icon="mynaui:store" />
                <p className="text-xs">Stored at: {inventory.store_at}</p>
              </div>
              <div className="space-y-2 shadow p-2 rounded-md w-full">
                <Icon icon="mynaui:clock-eleven" />
                <p className="text-xs">{inventory.expired_at}</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
