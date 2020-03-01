<template>
	<div :value="value">
		<label :for="inputUUID">{{ title }}</label>
		<input :id="inputUUID" :value="value" :type="type"
			:placeholder="placeholderText"
			class="w-100"
			@input="emitInputEvent($event)">
	</div>
</template>

<script lang="ts">
	import { Component, Prop, Vue } from "vue-property-decorator";
	import uuid, { v4 as uuidv4} from "uuid";

	@Component({})
	export default class Input extends Vue
	{
		@Prop()
		title!:string;
		@Prop({default: "text"})
		type!:string;
		@Prop()
		placeholderText!:string;
		@Prop()
		value!:string;

		private inputUUID = uuidv4();

		emitInputEvent(event:Event)
		{
			this.$emit("input", (event.currentTarget as HTMLInputElement).value);
		}

	}
</script>

<style lang="scss" scoped>

	input {
		background-color: $color-input-background;
		border-style: none;
		border-radius: 5px;
		padding: 6px;
	}

	label {
		display: block;
		@include subheader-primary();
	}
</style>
