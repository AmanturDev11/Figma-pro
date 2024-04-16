import scss from "./Component7.module.scss";
import img from "../../assets/images/linkedin-sales-navigator-402831.svg";

const Component7 = () => {
	return (
		<div className={scss.Component7}>
			<div className="container">
				<div className={scss.content}>
					<div className={scss.cards}>
						<div className={scss.contentImg}>
							<img src={img} alt="" />
						</div>
						<div className={scss.box}>
							<div className={scss.cardContent}>
								<p>YOU SHOULD ALSO KNOW</p>
							</div>
							<div className={scss.card}>
								<p>
									MDD affects more than 16.1 million American adults, or about
									6.7%of the U.S. population age 18 and older in a given year.
									We at
									<span>ThriveTalk</span> can help you.
								</p>
							</div>
							<h2>GET HELP NOW </h2>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Component7;
