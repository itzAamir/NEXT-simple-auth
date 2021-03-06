import styles from "../styles/Login.module.css";
import Head from "next/head";
import { useRouter } from "next/dist/client/router";
import { useState } from "react";

const Login = () => {
	const router = useRouter();
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
	const [errorMessage, setErrorMessage] = useState("");

	const handleSubmit = (e) => {
		e.preventDefault();
		const data = { username, password };
		fetch("/api/login", {
			method: "POST",
			headers: {
				"content-type": "application/json",
			},
			body: JSON.stringify(data),
		})
			.then((res) => res.json())
			.then((data) => {
				if (data.message !== "ok") {
					setErrorMessage(data.message);
					setTimeout(() => {
						setErrorMessage("");
					}, 2000);
				} else {
					router.push("/");
				}
			})
			.catch((err) => console.error(err));
	};

	return (
		<div className={styles.container}>
			<Head>
				<title>Simple Auth - Login</title>
				<meta name="description" content="Generated by create next app" />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			{errorMessage}
			<form className={styles.form} onSubmit={handleSubmit}>
				<h2>Login</h2>
				<input
					type="text"
					name="username"
					placeholder="Username"
					value={username}
					onChange={(e) => setUsername(e.target.value)}
				/>
				<input
					type="password"
					name="username"
					placeholder="Password"
					value={password}
					onChange={(e) => setPassword(e.target.value)}
				/>
				<button type="submit">Login</button>
			</form>
		</div>
	);
};

export default Login;
