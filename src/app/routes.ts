import { createBrowserRouter } from "react-router";
import { Layout } from "./components/Layout";
import { Dashboard } from "./components/Dashboard";
import { MenuManagement } from "./components/MenuManagement";
import { InventoryManagement } from "./components/InventoryManagement";
import { TaxSettings } from "./components/TaxSettings";
import { SalesRevenue } from "./components/SalesRevenue";
import { Orders } from "./components/Orders";
import { Reports } from "./components/Reports";
import { StaffManagement } from "./components/StaffManagement";
import { Settings } from "./components/Settings";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      { index: true, Component: Dashboard },
      { path: "menu", Component: MenuManagement },
      { path: "inventory", Component: InventoryManagement },
      { path: "tax", Component: TaxSettings },
      { path: "sales", Component: SalesRevenue },
      { path: "orders", Component: Orders },
      { path: "reports", Component: Reports },
      { path: "staff", Component: StaffManagement },
      { path: "settings", Component: Settings },
    ],
  },
]);
