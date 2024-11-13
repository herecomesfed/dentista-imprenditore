function Progress({ progress = 1 }) {
  return (
    <div className="w-full bg-gray-200 rounded-full h-2.5 mt-5">
      <div
        className="bg-blue-600 h-2.5 rounded-full transition-all"
        style={{ width: `${progress * 20}%` }}
      ></div>
    </div>
  );
}

export default Progress;
