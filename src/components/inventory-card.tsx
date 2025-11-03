import { Link } from "react-router";
import { useQueryClient } from "@tanstack/react-query";
import { Icon } from "@iconify/react";
import { fetchInventory } from "@/api/inventory/get-inventories";
import type { Inventory } from "@/types/inventory";

export default function InventoryCard({ inventory }: { inventory: Inventory }) {
  const queryClient = useQueryClient();

  return (
    <Link
      to={`/inventory/${inventory.id}`}
      onMouseEnter={async () => {
        await queryClient.prefetchQuery({
          queryKey: ["inventory", inventory.id],
          queryFn: () => fetchInventory(Number(inventory.id)),
          staleTime: 10 * 100,
        });
      }}
    >
      <div className="shadow rounded-md space-y-3.5">
        <div>
          <img
            src={inventory.photo}
            alt={inventory.name}
            loading="lazy"
            decoding="async"
            width={120}
            height={120}
            className="rounded-t-lg w-full h-[120px] object-cover"
          />
        </div>
        <div className="space-y-2 p-3.5">
          <div>
            <h2 className="capitalize font-semibold text-lg leading-relaxed">
              {inventory.name}
            </h2>
          </div>
          <div className="flex gap-2">
            <Icon icon="mynaui:hash-square" />
            <p className="text-sm">
              {inventory.weight} {inventory.unit}
            </p>
          </div>
          <div className="flex gap-2">
            <Icon icon="mynaui:store" />
            <p className="text-sm">Stored at: {inventory.store_at}</p>
          </div>
          <div className="flex gap-2">
            <Icon icon="mynaui:clock-eleven" />
            <p className="text-sm">{inventory.expired_at}</p>
          </div>
        </div>
      </div>
    </Link>
  );
}
