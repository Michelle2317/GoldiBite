export const Button = ({ label, onClick, isActive, type }) => {
	const getButtonStyles = () => {
		switch (type) {
			case 'All':
				return isActive
					? 'bg-[#ffcb63] text-black'
					: 'bg-[#fce4b6] text-gray-500';
			case 'NoAllergen':
				return isActive
					? 'bg-[#3d852f] text-white'
					: 'bg-[#9dc297] text-white';
			case 'MayContain':
				return isActive
					? 'bg-[#ff4342] text-white'
					: 'bg-[#fea0a0] text-white';
			case 'SpecificAllergens':
				return isActive
					? 'bg-[#00C9A2] text-black'
					: 'bg-[#BFEDDD] text-gray-500';
			default:
				return isActive
					? 'bg-amber-400 text-black'
					: 'bg-amber-200 text-black';
		}
	};

	return (
		<button
			className={`px-4 py-2 rounded-md cursor-pointer ${getButtonStyles()}`}
			onClick={onClick}
		>
			{label}
		</button>
	);
};
