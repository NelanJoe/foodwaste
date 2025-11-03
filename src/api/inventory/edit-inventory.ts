import { useNavigate } from "react-router";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import type { Inventory } from "@/types/inventory";

const BASE_URL = "http://fajarseptianto.my.id/api/items";

export const editInventory = ({
  inventoryId,
  data,
}: {
  inventoryId: number;
  data: Omit<Inventory, "id" | "created_at" | "updated_at">;
}) => {
  try {
    const updated_at = new Date().toISOString();

    const res = fetch(`${BASE_URL}/inventory/${inventoryId}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        ...data,
        updated_at,
      }),
    });
    return res;
  } catch (error) {
    console.error(error);
  }
};

export const useEditInventory = () => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const { mutate, isPending } = useMutation({
    mutationKey: ["edit-inventory"],
    mutationFn: async ({
      inventoryId,
      data,
    }: {
      inventoryId: number;
      data: Omit<Inventory, "id" | "created_at" | "updated_at">;
    }) => await editInventory({ inventoryId, data }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["inventories"] });
      toast.success("Inventory edited successfully");
      navigate("/inventory", { replace: true });
    },
    onError: () => {
      toast.error("Failed to edit inventory");
    },
  });

  return {
    editInventory: mutate,
    isPending,
  };
};
