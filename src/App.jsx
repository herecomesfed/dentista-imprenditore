import { useState } from "react";
import Button from "./components/Button";
import Counter from "./components/Counter";
import Header from "./components/Header";
import MainContainer from "./components/MainContainer";
import Poll from "./components/Poll";
import PollContainer from "./components/PollContainer";
import Progress from "./components/Progress";

function App() {
  const [step, setStep] = useState(1);
  const MAXSTEP = 5;
  const handleIncreaseStep = (e) => {
    e.preventDefault();
    step < MAXSTEP && setStep((step) => step + 1);
  };

  const handleDecreaseStep = (e) => {
    e.preventDefault();
    step > 1 && setStep((step) => step - 1);
  };

  return (
    <MainContainer>
      <Header />
      <Progress progress={step} />
      <PollContainer>
        <Poll></Poll>
        <Counter currentStep={step} maxStep={MAXSTEP} />
      </PollContainer>
      <div className="mt-5 flex justify-between items-center">
        <Button
          type="outline"
          message="Indietro"
          onClick={handleDecreaseStep}
        />
        <Button message="Avanti" onClick={handleIncreaseStep} />
      </div>
    </MainContainer>
  );
}

export default App;
