import { Routes, Route } from "react-router";

import Providers from "@/providers";
import BaseLayout from "@/layouts/base-layout";
import Dashboard from "@/pages/dashboard";
import Recommendation from "@/pages/recommendation";
import Sales from "@/pages/sales";
import Inventory from "@/pages/inventory";
import InventoryNew from "@/pages/inventory-new";
import InventoryId from "@/pages/inventory-id";
import Notifications from "@/pages/notifications";
import NotFound from "@/pages/not-found";

export default function App() {
  return (
    <Providers>
      <Routes>
        <Route element={<BaseLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="recommendation" element={<Recommendation />} />
          <Route path="sales" element={<Sales />} />
          <Route path="inventory">
            <Route index element={<Inventory />} />
            <Route path="new" element={<InventoryNew />} />
            <Route path=":inventoryId" element={<InventoryId />} />
          </Route>
          <Route path="notifications" element={<Notifications />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </Providers>
  );
}
