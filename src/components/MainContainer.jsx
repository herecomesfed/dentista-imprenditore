function MainContainer({ children }) {
  return (
    <div className="container max-w-5xl mx-auto h-screen flex flex-col justify-center">
      {children}
    </div>
  );
}

export default MainContainer;
