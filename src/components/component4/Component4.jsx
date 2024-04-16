import scss from "./Component4.module.scss";

const Component4 = () => {
	return (
		<div className={scss.Component4}>
			<div className="container">
				<div className={scss.content}>
					<div className={scss.card}>
						{/* <div className={scss.cardhr}> */}

						{/* </div> */}
						<div className={scss.tocka} />
						<div>
							<hr />
							<p>Weight Lifting</p>
						</div>
					</div>
					<div className={scss.card2}>
						<div className={scss.tocka} />
						<div>
							<hr />
							<p>
								Running & <br /> Spinning
							</p>
						</div>
					</div>
					<div className={scss.card3}>
						<div className={scss.tocka} />
						<div>
							<hr />
							<p>Pumping Iron</p>
						</div>
					</div>
					<div className={scss.card4}>
						<div className={scss.tocka} />
						<div>
							<hr />
							<p>Pumping Iron</p>
						</div>
					</div>
					{/* {data.map((item, index) => (
						<div key={index}>
							<p>{item.name}</p>
						</div>
					))} */}
				</div>
			</div>
		</div>
	);
};

export default Component4;

import scss1 from "./Component5.module.scss";

// const data = [
// 	{
// 		name: "Physical Health",
// 	},
// 	{
// 		name: "Mental Health",
// 	},
// 	{
// 		name: "Nutrition",
// 	},
// 	{
// 		name: "Gymnastics",
// 	},
// 	{
// 		name: "Crossfit",
// 	},
// 	{
// 		name: "Aerobics",
// 	},
// ];

export function Component5() {
	return (
		<div className={scss1.Component5}>
			<div className="container">
				<div className={scss1.content}>
					{/* {data.map((item, index) => (
						<div key={index}>
							<hr />
							<p>{item.name}</p>
						</div>
					))} */}
					<div className={scss1.card}>
						<div className={scss1.borderRad} />
						<div>
							{/* <hr /> */}
							<p>Physical <br /> Health</p>
						</div>
					</div>
					<div className={scss1.card2}>
						<div className={scss1.borderRad} />
						<div>
							{/* <hr /> */}
							<p>Mental <br /> Health</p>
						</div>
					</div>
					<div className={scss1.card3}>
						<div className={scss1.borderRad} />
						<div>
							<hr />
							<p>Nutrition</p>
						</div>
					</div>
					<div className={scss1.card4}>
						<div className={scss1.borderRad} />
						<div>
							{/* <hr /> */}
							<p>Gymnastics</p>
						</div>
					</div>
					<div className={scss1.card5}>
						<div className={scss1.borderRad} />
						<div>
							{/* <hr /> */}
							<p>Crossfit</p>
						</div>
					</div>
					<div className={scss1.card6}>
						<div className={scss1.borderRad} />
						<div>
							{/* <hr /> */}
							<p>Aerobics</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
