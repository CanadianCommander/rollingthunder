import VueRouter from "vue-router";
import dashboardRoutes from "@/routes/dashboardRoutes";
import releasePlanRoutes from "@/routes/releasePlanRoutes";
import releaseHistoryRoutes from "@/routes/releaseHistoryRoutes";
import fleetManagementRoutes from "@/routes/fleetManagementRoutes";
import monitorRoutes from "@/routes/monitorRoutes";
import accountSettingsRoutes from "@/routes/accountSettingsRoutes";
import authRoutes from "@/routes/authRoutes";

const routes = [
	...dashboardRoutes,
	...releasePlanRoutes,
	...releaseHistoryRoutes,
	...fleetManagementRoutes,
	...monitorRoutes,
	...accountSettingsRoutes,
	...authRoutes,
];

export const vueRouter = new VueRouter({routes});
