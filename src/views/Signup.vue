<template>
	<div class="row my-5">
		<div class="col-md-8 offset-md-3">
			<div class="card">
				<div class="card-body">
					<h3 class="text-center my-4">Sign Up</h3>
					<div class="form-group">
						<input v-model="name" type="text" placeholder="Name" class="form-control">
					</div>
					<div class="form-group">
						<input v-model="email" type="text" placeholder="Email" class="form-control">
					</div>
					<div class="form-group">
						<input v-model="password" type="password" placeholder="Password" class="form-control">
					</div>
					<div class="form-group text-center">
						<button @click="registerUser()" class="btn form-control btn-success">Signup</button>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
import Axios from "axios";
export default {
	data() {
		return {
			name: "",
			email: "",
			password: ""
		};
	},
	methods: {
		registerUser() {
			const _that = this;
			Axios.get(`http://localhost:3000/users?email=${this.email}`)
				.then(function(response) {
					// handle success
					const array = response.data;
					if (array.length > 0) {
						console.log("user already exists");
						return false;
					}

					_that.createUser();
				})
				.catch(function(error) {
					// handle error
					console.log(error);
				});

			console.log(this.name, this.email, this.password);
		},

		createUser() {
			Axios.post("http://localhost:3000/users", {
				name: this.name,
				email: this.email,
				password: this.password,
				id: Date.now()
			})
				.then(response => {
					this.$root.auth = response.data.data;
				})
				.catch(({ response }) => {
					console.log(response);
				});
		}
	}
};
</script>