import scss from "./Component8.module.scss";
import img from "../../assets/images/charles-etoroma-390119.svg";

const Component8 = () => {
	return (
		<div className={scss.Component8}>
			<div className="container">
				<div className={scss.content}>
					<div className={scss.cards}>
						<div className={scss.contentH2}>
							<div className={scss.box}>
								<p className={scss.classP}>CONTACT US</p>
							</div>
							<h2>Ready. Set. Smile</h2>
							<div className={scss.contentText}>
								<p>
									Take the free online assessment to <br /> see if you are a
									candidate and get <br /> started on your journey.
								</p>
							</div>
							<div className={scss.card}>
								<p>GET HELP NOW</p>
							</div>
						</div>
						<div>
							<img src={img} alt="" />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Component8;
