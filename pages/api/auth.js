import jwt from "jsonwebtoken";

export default function handler(req, res) {
	const { token } = req.body;
	try {
		const data = jwt.verify(token, "adsasdjadlansdlksadsda");
		res.send({ message: "ok", data });
	} catch (error) {
		res.send({ message: "not ok", data: error.message });
	}
}
