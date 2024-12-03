export const SelectAllergen = ({ options, value, onChange }) => {
    return (
    <select
        value={value}
        onChange={onChange}
        className="px-4 py-2 rounded-md border border-gray-300"
    >
        {options.map((option, index) => (
        <option key={index} value={option}>
            {option}
        </option>
        ))}
    </select>
    );
};