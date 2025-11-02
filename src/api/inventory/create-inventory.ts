import { useNavigate } from "react-router";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import type { Inventory } from "@/types/inventory";

const BASE_URL = "http://fajarseptianto.my.id/api/items";

export const createInventory = async (
  inventory: Omit<Inventory, "id" | "created_at" | "updated_at">
) => {
  try {
    const res = await fetch(`${BASE_URL}/inventory`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(inventory),
    });
    const data = await res.json();
    return data;
  } catch (error) {
    console.error(error);
  }
};

export const useCreateInventory = () => {
  const queryClient = useQueryClient();

  const navigate = useNavigate();

  const { mutate, isPending } = useMutation({
    mutationKey: ["create-inventory"],
    mutationFn: (
      inventory: Omit<Inventory, "id" | "created_at" | "updated_at">
    ) => createInventory(inventory),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["inventories"] });
      toast.success("Inventory created successfully");
      navigate("/inventory", { replace: true });
    },
  });

  return {
    createInventory: mutate,
    isPending,
  };
};
