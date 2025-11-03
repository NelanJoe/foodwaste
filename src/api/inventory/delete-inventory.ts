import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router";
import toast from "react-hot-toast";

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
  const queryClient = useQueryClient();

  const navigate = useNavigate();

  const { mutate, isPending } = useMutation({
    mutationKey: ["delete-inventory"],
    mutationFn: (inventoryId: number) => deleteInventory(inventoryId),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["inventories"] });
      toast.success("Inventory deleted successfully");
      navigate("/inventory", { replace: true });
    },
    onError: () => {
      toast.error("Failed to delete inventory");
    },
  });

  return {
    deleteInventory: mutate,
    isPending,
  };
};
