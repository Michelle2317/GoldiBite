'use client';

import { useEffect, useState } from 'react';
import supabase from '../../utils/supabaseClient';
import { Button } from '../components/Button';
import { SelectAllergen } from '../components/SelectAllergen';

const allergensList = [
	'Eggs',
	'Milk',
	'Mustard',
	'Peanuts',
	'Crustaceans and Molluscs',
	'Fish',
	'Sesame Seeds',
	'Soy',
	'Sulphites',
	'Tree Nuts',
	'Wheat and Triticale',
];

const DishesPage = () => {
	const [dishes, setDishes] = useState([]);
	const [menuFilter, setMenuFilter] = useState('All');
	const [selectedAllergen, setSelectedAllergen] = useState('');
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);

	useEffect(() => {
		const fetchDishes = async () => {
			const { data, error } = await supabase
				.from('dishes')
				.select('*').order("created_at", {ascending: false}).limit(25);

			if (error) {
				setError(error.message);
			} else {
				console.log('Fetched dishes:', data);
				setDishes(data);
			}

			setLoading(false);
		};

		fetchDishes();
	}, []);

	const menuFilterFunction = (item) => {
		if (menuFilter === 'All') return true;

		if (
			menuFilter === 'No Allergen' &&
			(!item.allergens || item.allergens.length === 0)
		) {
			return true;
		}

		if (
			menuFilter === 'May Contain Allergens' &&
			item.allergens &&
			item.allergens.length > 0
		) {
			return true;
		}

		if (
			menuFilter === 'Contains Specific Allergens' &&
			item.allergens
		) {
			const normalizedAllergens = item.allergens.map(
				(allergen) => allergen.toLowerCase()
			);
			return normalizedAllergens.includes(
				selectedAllergen.toLowerCase()
			);
		}

		return false;
	};

	if (loading) return <div>Loading...</div>;
	if (error) return <div>Error: No dishes found.</div>;

	return (
		<div className='container mx-auto px-4 py-8'>
			<h1 className='text-3xl font-bold mb-6 flex flex-row items-center gap-10'>
				<img
					src='/goldibiteLogo.png'
					alt='Logo'
					className='w-32 h-auto'
				/>
				Recently Scanned Dishes From Menus
			</h1>

			<div className='flex gap-4 mb-6'>
				{[
					{ label: 'All', type: 'All' },
					{
						label: 'No Allergen',
						type: 'NoAllergen',
					},
					{
						label: 'May Contain Allergens',
						type: 'MayContain',
					},
					{
						label: 'Contains Specific Allergens',
						type: 'SpecificAllergens',
					},
				].map(({ label, type }) => (
					<Button
						key={type}
						label={label}
						type={type}
						isActive={menuFilter === label}
						onClick={() => {
							setMenuFilter(label);
							if (
								label !==
								'Contains Specific Allergens'
							)
								setSelectedAllergen(
									''
								);
						}}
					/>
				))}
			</div>

			{menuFilter === 'Contains Specific Allergens' && (
				<div className='mb-6'>
					<label
						htmlFor='specificAllergen'
						className='block mb-2'
					>
						Select an allergen:
					</label>
					<SelectAllergen
						options={allergensList}
						value={selectedAllergen}
						onChange={(e) =>
							setSelectedAllergen(
								e.target.value
							)
						}
					/>
				</div>
			)}

			{dishes.length > 0 ? (
				<ul className='space-y-4'>
					{dishes
						.filter(menuFilterFunction)
						.map((dish) => (
							<li
								key={dish.id}
								className='p-4 border border-amber-300 rounded-md bg-amber-50'
							>
								<h3 className='text-xl font-semibold'>
									{
										dish.name
									}
								</h3>
								<h4 className='text-lg text-gray-800'>
									{
										dish.originalName
									}
								</h4>
								<p className='mt-2'>
									<strong>
										Ingredients:
									</strong>{' '}
									{dish.description
										? dish.description.join(
												', '
										  )
										: 'None'}
								</p>
								<p>
									<strong>
										Allergens:
									</strong>{' '}
									{dish.allergens
										? dish.allergens.join(
												', '
										  )
										: 'None'}
								</p>
							</li>
						))}
				</ul>
			) : (
				<p>No dishes found.</p>
			)}
		</div>
	);
};

export default DishesPage;
