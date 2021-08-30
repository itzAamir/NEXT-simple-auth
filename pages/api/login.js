import jwt from "jsonwebtoken";
import { setCookie } from "nookies";
import { UserModel } from "../../models/UserModel";
import dbConnect from "../../libs/mongoConnect";

export default async function handler(req, res) {
	await dbConnect();
	const { username, password } = req.body;
	const user = await UserModel.findOne({ username });

	if (!user) return res.json({ message: "User not found" });

	if (user.password !== password)
		return res.json({ message: "Invalid password" });

	const token = jwt.sign(
		{ username, isAdmin: username === "Admin" ? true : false },
		"adsasdjadlansdlksadsda"
	);
	setCookie({ res }, "token", token, {
		httpOnly: false,
		path: "/",
		maxAge: 100000,
	});

	res.json({ message: "ok", token });
}
