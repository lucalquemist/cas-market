
interface SeedFAQ {
    id: number;
    pregunta: string;
    respuesta: string;
}

interface Props {
    faq: SeedFAQ;
}

export const FaqListItem = ({ faq }:Props) => {

  return (
    <div>
        <p>{ faq.pregunta }</p>
        <p>{ faq.respuesta }</p>
        <br />
    </div>
  )
}
