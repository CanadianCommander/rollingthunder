<template>
	<div class="row">
		<div v-if="screenWidth > 1100" class="col-md-12 d-flex flex-wrap flex-row tab-row">
			<div v-for="label in labels" :key="label.label" :class="{'active-tab': activeTab === label}" class="tab-item flex-shrink-1"
				@click="doRoute(label)">
				<h2>{{ label.label }}</h2>
			</div>
		</div>
		<div v-else class="col-12 tab-row">
			<div class="row">
				<div class="tab-item col-8 flex-shrink-0">
					<h2>{{ activeTab.label }}</h2>
				</div>
				<div class="col-4">
					<h2>menu icon</h2>
				</div>
			</div>
		</div>
	</div>
</template>

<script lang="ts">
	import { Vue, Prop, Component } from "vue-property-decorator";
	import RouteLabel from "../lib/model/RouteLabel";
	import { deviceInfoService, DEVICE_INFO_EVENTS } from "@/lib/service/DeviceInfoService";
	import { eventService } from "@/lib/service/EventService";

	@Component({})
	export default class BasicTabBar extends Vue
	{
		@Prop()
		labels!: RouteLabel[];
		@Prop()
		defaultTab!: number;

		private screenWidth: number = deviceInfoService.screenWidth;
		private activeTab: RouteLabel | null = null;

		created()
		{
			if (this.labels.length > 0)
			{
				this.activeTab = this.labels[this.defaultTab ? this.defaultTab : 0];
			}

			eventService.listen(DEVICE_INFO_EVENTS.WINDOW_RESIZE, this.onScreenSizeChange);
		}

		doRoute(label: any)
		{
			this.activeTab = label;
			if (this.$router.currentRoute.name != label.routeName)
			{
				this.$router.push({name: label.routeName});
			}
		}

		onScreenSizeChange(data?: any)
		{
			this.screenWidth = data.width;
		}
	}
</script>

<style lang="scss" scoped>
	h2 {
		@include subheader-secondary();
		margin-bottom: 0;
	}

	.tab-row {
		background-color: $color-background-transition;
	}

	.tab-item {
		padding: 10px 40px 10px 40px;
		text-align: center;
		cursor: pointer;

		&.active-tab {
			background-color: $color-background-primary;
			h2 {
				color: $color-text-primary;
			}
		}
	}

</style>
