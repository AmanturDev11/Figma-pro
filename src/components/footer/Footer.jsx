import scss from "./Footer.module.scss";
import img from "../../assets/images/©.svg";
const Footer = () => {
	return (
		<footer className={scss.Footer}>
			<div className="container">
				<div className={scss.content}>
					<div className={scss.cards}>
						<img src={img} alt="" />
						<div>
							<p> Copyright - ThriveTalk 2017</p>
						</div>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
