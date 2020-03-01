<template>
	<div class="container flex-fill d-flex flex-column overflow-hidden">
		<div class="login-form">
			<h1 class="color-text-primary text-center mt-4 mb-5">
				Login
			</h1>
			<div class="row d-flex flex-row justify-content-center">
				<Input v-model="email" title="Email" placeholder-text="example@gmail.com" class="w-33"/>
			</div>
			<div class="row d-flex flex-row justify-content-center mt-4">
				<Input v-model="password" title="Password" placeholder-text="********"
					type="password" class="w-33"/>
			</div>
		</div>
		<div class="bottom-container d-flex flex-column justify-content-end">
			<div class="d-flex flex-row justify-content-center">
				<div>
					<Button class="button-primary w-100 mb-3" @click="doLogin()">
						Login
					</Button>
					<div>
						<router-link to="fizbang">
							Forgot Password
						</router-link>
						|
						<router-link to="foobar">
							Sign up
						</router-link>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script lang="ts">
	import { Component, Vue } from "vue-property-decorator";
	import Input from "@/components/Input.vue";
	import Button from "@/components/Button.vue";

	@Component({
		components: {
			Input,
			Button,
		}
	})
	export default class Login extends Vue
	{
		private email:string = "";
		private password:string = "";

		doLogin()
		{
			//TODO real login.
			this.$router.push({name: "dashboard"});
		}
	}
</script>

<style lang="scss" scoped>
	.login-form {
		z-index: 1;
		@keyframes login-form-slide {
			0% {
				transform: translateY(-150px);
			}
			100% {
				transform: translateY(0px);
			}
		}
		//animation: 1s ease-out 0s 1 login-form-slide;
	}

	.bottom-container {
		flex: 0.6 0 auto;

		@keyframes login-slide {
			0% {
				transform: translateY(250px);
			}
			100% {
				transform: translateY(0px);
			}
		}

		animation: 1s ease-out 0s 1 login-slide;
	}
</style>
