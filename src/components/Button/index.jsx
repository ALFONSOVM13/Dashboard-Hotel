export default function Button({ children, className, action }) {
  return (
    <button
      className={`justify-center px-5 py-3.5 rounded shadow-sm ${className}`}
      onClick={action}
    >
      {" "}
      {children}{" "}
    </button>
  );
}
