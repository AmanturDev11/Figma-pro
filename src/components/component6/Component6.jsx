import scss from "./Component6.module.scss";

const data = [
	{
		name: "Nutritional Plans",
		title:
			"Nutritional Facts on some shitty things that you don’t care about and even we don’t , I need to replace this copy.",
	},
	{
		name: "Weight Loss",
		title:
			"Nutritional Facts on some shitty things that you don’t care about and even we don’t , I need to replace this copy.",
	},
	{
		name: "Mental Peace",
		title:
			"Nutritional Facts on some shitty things that you don’t care about and even we don’t , I need to replace this copy.",
	},
	{
		name: "Home Training",
		title:
			"Nutritional Facts on some shitty things that you don’t care about and even we don’t , I need to replace this copy.",
	},
	{
		name: "Work/Life Balance",
		title:
			"Nutritional Facts on some shitty things that you don’t care about and even we don’t , I need to replace this copy.",
	},
	{
		name: "Cardio",
		title:
			"Nutritional Facts on some shitty things that you don’t care about and even we don’t , I need to replace this copy.",
	},
];
const Component6 = () => {
	return (
		<div className={scss.Component6}>
			<div className="container">
				<div className={scss.content}>
					<div className={scss.cardsContent}>
						{data.map((item, index) => (
							<div className={scss.cards} key={index}>
								<h2>{item.name}</h2>
								<div className={scss.card}>
									<p>{item.title}</p>
								</div>
							</div>
						))}
					</div>
				</div>
			</div>
		</div>
	);
};

export default Component6;
