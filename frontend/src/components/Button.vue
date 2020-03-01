<template>
	<button @click="onClick()">
		<slot/>
	</button>
</template>

<script lang="ts">
	import { Component, Vue } from "vue-property-decorator";

	@Component({})
	export default class Button extends Vue
	{
		onClick()
		{
			this.$emit("click");
		}
	}
</script>

<style lang="scss" scoped>
	.button-primary {
		@extend .button;
		padding: 6px 20px 6px 20px;
		background-color: $color-pop;
		color: $color-text-primary;

		&:active {
			background-color: $color-pop-active;
		}
	}

	.button-secondary {
		@extend .button;
		padding: 6px 20px 6px 20px;
		background-color: $color-background-primary;
		color: $color-text-primary;

		&:active {
			background-color: $color-pop-active;
		}
	}
</style>
