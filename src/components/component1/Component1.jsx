import scss from "./Component1.module.scss";
import img from "../../assets/images/Mask Group.svg";
// import imgFon from "../../assets/images/Rectangle 3.1.svg";

const Component1 = () => {
	return (
		<div className={scss.Component1}>
			<div className="container">
				<div className={scss.content}>
					<div className={scss.contentCards}>
						<div className={scss.card}>
							<p className={scss.classP}>Thrivetalk</p>
							<h1 className={scss.h1}>
								HELPING YOU THRIVE <br /> IN ALL AREAS OF LIFE
							</h1>
							<div className={scss.cardp}>
								<p className={scss.classP2}>
									Our highly talented therapists can help you with a range of
									issues including relationships, sex, PTSD, depression, social
									anxiety, or even just caring for yourself more.
								</p>
							</div>
							<div className={scss.cardButton}>
								<button>WHO AM I</button>
								<button>WHAT DO I DO</button>
							</div>
						</div>
						<div className={scss.card2}>
							<img src={img} alt="" />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Component1;
