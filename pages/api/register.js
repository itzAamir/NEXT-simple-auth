import dbConnect from "../../libs/mongoConnect";
import { UserModel } from "../../models/UserModel";

export default async (req, res) => {
	await dbConnect();
	const { username, password } = req.body;
	const results = await UserModel.create({
		username,
		password,
	});
	res.json({ user: results });
};
