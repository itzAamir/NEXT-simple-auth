import styles from "../styles/Navbar.module.css";
import Link from "next/link";
import { useRouter } from "next/router";

const Navbar = () => {
	const router = useRouter();

	return (
		<nav className={styles.nav}>
			<ul>
				<Link href="/">
					<li className={router.pathname == "/" ? "activeNav" : ""}>HOME</li>
				</Link>
				<Link href="/login">
					<li className={router.pathname == "/login" ? "activeNav" : ""}>
						LOGIN
					</li>
				</Link>
				<Link href="/register">
					<li className={router.pathname == "/register" ? "activeNav" : ""}>
						REGISTER
					</li>
				</Link>
			</ul>
		</nav>
	);
};

export default Navbar;
