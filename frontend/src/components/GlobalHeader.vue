<template>
	<div>
		<div class="row header-top">
			<div class="col-sm-11">
				<h1>Rolling Thunder</h1>
				<h2>Releasing software simplified!</h2>
			</div>
			<div class="col-sm-1 d-flex align-items-center justify-content-center">
				<a href="https://github.com/CanadianCommander/rollingthunder" title="Source on GitHub">
					<img class="github-img" src="@/assets/img/GitHub-Mark-Light-64px.png">
				</a>
			</div>
		</div>
		<div class="col-md-12">

		</div>
	</div>
</template>

<script lang="ts">
	import Vue from "vue";
	import Component from "vue-class-component";

	@Component({})
	export default class GlobalHeader extends Vue
	{

	}
</script>

<style lang="scss" scoped>
	.header-top {
		background-color: $color-background-secondary;

		h2 {
			@include subheader-secondary();
			display: inline-block;
			margin: 10px 0 10px 0;
		}
		h1 {
			display: inline-block;
			margin: 10px 20px 10px 20px;
		}

		.github-img {
			width: 32px;
			height: 32px;
		}
	}
</style>
