function Counter({ currentStep = 1, maxStep = 5 }) {
  return (
    <div className="absolute right-5 top-5 bg-black text-white px-2 py-1 font-semibold">
      <span>{currentStep}</span> / <span>{maxStep}</span>
    </div>
  );
}

export default Counter;
