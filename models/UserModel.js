import mongoose from "mongoose";

const userSchema = mongoose.Schema({
	username: {
		type: String,
		required: true,
	},
	password: {
		type: String,
		required: true,
	},
});

export const UserModel =
	mongoose.models.User || mongoose.model("User", userSchema);
