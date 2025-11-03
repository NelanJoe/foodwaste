import { Link, useNavigate } from "react-router";
import { Icon } from "@iconify/react";
import { Button } from "@/components/ui/button";
import InventoryCard from "@/components/inventory-card";
import { useInventories } from "@/api/inventory/get-inventories";

export default function Inventory() {
  const navigate = useNavigate();

  const {
    data: inventories,
    isLoading,
    isSuccess,
    isError,
    error,
  } = useInventories();

  let inventoriesContent;

  if (isLoading) {
    inventoriesContent = <div>Loading...</div>;
  }

  if (isError) {
    inventoriesContent = (
      <div>
        <p>{error.message}</p>
      </div>
    );
  }

  if (isSuccess) {
    inventoriesContent = inventories?.map((inventory) => (
      <InventoryCard key={inventory.id} inventory={inventory} />
    ));
  }

  return (
    <section className="space-y-5 pb-10">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <Button
            variant="outline"
            size="icon"
            onClick={() => navigate("/", { preventScrollReset: true })}
          >
            <Icon icon="mynaui:arrow-left" />
          </Button>
          <p>Simpanan kamu</p>
        </div>
      </div>
      <div className="mt-10 space-y-5">
        <div>
          <p>Kamu memiliki {inventories?.length} barang</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Button
            variant="ghost"
            className="p-2 shadow-md rounded-md flex items-center justify-center border-2 border-dashed w-full h-full"
            asChild
          >
            <Link
              to="/inventory/new"
              className="w-full inline-flex items-center justify-center space-x-2"
            >
              <Icon icon="mynaui:plus" />
              <p>Tambah barang</p>
            </Link>
          </Button>
          {inventoriesContent}
        </div>
      </div>
    </section>
  );
}
