import scss from "./Component2.module.scss";
import img from "../../assets/images/christopher-campbell-40367.svg";
const Component2 = () => {
	return (
		<div className={scss.Component2}>
			<div className="container">
				<div className={scss.content}>
					<div className={scss.cards}>
						<div className={scss.card}>
							<p className={scss.classfizs}>Why Thrive?</p>
							<div className={scss.cardText}>
								<p className={scss.textClass}>
									<span>
										Want to improve your well-being from the comfort of your own
										couch? Are you having trouble finding the right therapist?
									</span>
									Here at ThriveTalk, our licensed therapists provide the same
									quality care you would get in office from anywhere you can
									access your laptop or mobile phone. Become your best self with
									ThriveTalk. Start therapy now with a licensed therapist!
								</p>
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

export default Component2;
