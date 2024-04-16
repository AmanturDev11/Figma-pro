export const Button = ({cekault}) => {
	return (
		<div>
			<button
				style={{
					width: "150px",
					height: "50px",
					borderRadius: "50px",
					fontSize: "14px",
					color: "#FFFFFF",
					backgroundColor: " #62D0DF",
					// position:'absolute',
					// zIndex:'99999999',
				}}>
          {cekault}
			</button>
		</div>
	);
};
