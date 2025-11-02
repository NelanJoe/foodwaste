import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { useNavigate } from "react-router";

const BASE_URL = "http://fajarseptianto.my.id/api/items";

export const deleteInventory = async (inventoryId: number) => {
  try {
    const res = await fetch(`${BASE_URL}/inventory/${inventoryId}`, {
      method: "DELETE",
    });

    if (res.ok) {
      return res.json();
    }
  } catch (error) {
    console.error(error);
  }
};

export const useDeleteInventory = () => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const { mutate, isPending } = useMutation({
    mutationKey: ["delete-inventory"],
    mutationFn: (inventoryId: number) => deleteInventory(inventoryId),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["inventories"] });
      toast.success("Inventory created successfully");
      navigate("/inventory");
    },
  });

  return {
    deleteInventory: mutate,
    isPending,
  };
};
