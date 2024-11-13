function Button({
  message,
  component = "button",
  type = "filled",
  link = null,
  onClick = null,
}) {
  const classNames = `px-5 py-1 border-sky-500 border-2 ${
    type === "filled" ? "bg-sky-500 text-white" : ""
  }`;
  return component === "button" ? (
    <button className={classNames} onClick={onClick}>
      {message}
    </button>
  ) : (
    <a href={link}>{message}</a>
  );
}

export default Button;
