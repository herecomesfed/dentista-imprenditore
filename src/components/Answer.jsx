function Answer({ text, id }) {
  return (
    <label className="flex gap-1 items-center my-2 p-2 hover:bg-slate-100 transition-all duration-300 cursor-pointer">
      <input type="radio" name="question-1" id={id} />
      <p>{text}</p>
    </label>
  );
}

export default Answer;
