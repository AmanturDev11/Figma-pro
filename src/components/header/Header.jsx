import { Button } from "../UI/button/Button";
import scss from "./Header.module.scss";

const Header = () => {
	return (
		<header className={scss.Header}>
			<div className="container">
				<div className={scss.content}>
					<div className={scss.left}>
						<p className={scss.classP}>Thrivetalk</p>
						<nav className={scss.nav}>
							<ul>
								<li>Home</li>
								<li>About</li>
								<li>Services</li>
								<li>Blog</li>
							</ul>
						</nav>
					</div>
					<Button className={scss.buttonClass} cekault="CONTACT US" />
				</div>
			</div>
		</header>
	);
};

export default Header;
