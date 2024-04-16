import scss from "./Component8.module.scss";
import img from "../../assets/images/charles-etoroma-390119.svg";

const Component8 = () => {
	return (
		<div className={scss.Component8}>
			<div className="container">
				<div className={scss.content}>
					<p>CONTACT US</p>
					<div className={scss.cards}>
						<div>
							<h2>Ready. Set. Smile</h2>
							<p>
								Take the free online assessment to see if you are a candidate
								and get started on your journey.
							</p>
							<div>
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
