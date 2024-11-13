import Answer from "./Answer";
import Question from "./Question";

function Poll() {
  return (
    <>
      <Question text="Qual è il tuo approccio al marketing odontoiatrico?" />
      <Answer id="1" text="Nessuno, mi concentro solo sulla parte clinica." />
      <Answer
        id="2"
        text="Ho il sito web e una pagina social, dove ogni tanto pubblichiamo un contenuto"
      />
      <Answer
        id="3"
        text="Ho una presenza digitale ben definita, ma non faccio campagne pubblicitarie. Gestisco in casa attraverso le competenze mie e/o del mio staff"
      />
      <Answer
        id="4"
        text="Sono seguito da un'agenzia o da un singolo
professionista. Sono abbastanza soddisfatto ed in
controllo dei miei flussi digitali."
      />
      <Answer
        id="5"
        text="Ho un ecosistema di marketing molto curato che mi porta molti nuovi pazienti"
      />
    </>
  );
}

export default Poll;
