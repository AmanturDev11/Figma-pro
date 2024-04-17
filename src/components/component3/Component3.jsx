import scss from "./Component3.module.scss";

const Component3 = () => {
	return (
		<div className={scss.Component3}>
			<div className="container">
				<p className={scss.classP}>ABOUT US</p>
				<div className={scss.content}>
					<div className={scss.cards}>
						<div className={scss.cardText}>
							<p>
								We want to help you thrive! Whether you are just looking for
								someone to talk to, or are struggling with a mental wellness
								issue we’re here to help. Our highly talented therapists can
								help you with a range of issues including relationships, sex,
								PTSD, depression, social anxiety, or even just caring for
								yourself more.
							</p>
						</div>
						<div className={scss.card3}>
							<p>WE CAN HELP YOU WITH</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Component3;
