import scss from "./Component9.module.scss";
import img from "../../assets/images/autumn-goodman-242825.svg";

const Component9 = () => {
	return (
		<div className={scss.Component9}>
			<div className="container">
				<div className={scss.content}>
					<div className={scss.cards}>
						<div>
							<img src={img} alt="" />
						</div>
						<div className={scss.cardContent}>
							<div className={scss.card1}>
								<div className={scss.contentBox}>
									<p className={scss.contenth3}>SOME INFO</p>
								</div>
								<div className={scss.contentText}>
									<p>
										Lorem ipsum dolor sit amet, <br /> consectetuer adipiscing
										elit. <br />
										Aenean commodo ligula.
									</p>
								</div>
							</div>
							<div className={scss.card1}>
								<div className={scss.contentBox}>
									<p className={scss.contenth3}>ENFOLD HEALTH</p>
								</div>
								<div className={scss.contentText}>
									<p>Main Street 1, Olcott Buffalo, United States</p>
									<div className={scss.cardTop}>
										<p>+555 283 784 333</p>
										<a href="#">office@enfold-health.com</a>
									</div>
								</div>
							</div>
							<div className={scss.card1}>
								<div className={scss.contentBox}>
									<p className={scss.contenth3}>OFFICE HOURS</p>
								</div>
								<div className={scss.contentText}>
									<p>
										Mo-Fr: 8:00-19:00 <br /> Sa: 8:00-14:00 <br /> Su: closed
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Component9;
