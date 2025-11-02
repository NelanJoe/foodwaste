import type { Inventory } from "@/types/inventory";
import { useQuery } from "@tanstack/react-query";

const BASE_URL = "http://fajarseptianto.my.id/api/items";

export const fetchInventories = async () => {
  try {
    const res = await fetch(`${BASE_URL}/inventory`);
    const data: { data: Inventory[] } = await res.json();
    const inventories = data.data || [];
    return inventories;
  } catch (error) {
    console.error(error);
  }
};

export const fetchInventory = async (id: number) => {
  try {
    const res = await fetch(`${BASE_URL}/inventory/${id}`);
    const data: { data: Inventory } = await res.json();
    const inventory = data.data || {};
    return inventory;
  } catch (error) {
    console.error(error);
  }
};

export const useInventories = () => {
  return useQuery({
    queryKey: ["inventories"],
    queryFn: fetchInventories,
  });
};

export const useInventory = (id: number) => {
  return useQuery({
    queryKey: ["inventory", id],
    queryFn: () => fetchInventory(id),
    enabled: !!id,
  });
};
