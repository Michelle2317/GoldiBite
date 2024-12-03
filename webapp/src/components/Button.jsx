export const Button = ({ label, onClick, isActive }) => {
    return (
    <button
        className={`px-4 py-2 rounded-md cursor-pointer ${isActive ? "bg-amber-400 text-black" : "bg-amber-200"}`}
        onClick={onClick}
    >
        {label}
    </button>
    );
};