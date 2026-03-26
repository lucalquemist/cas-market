'use client';

import { FaqListItem } from "./FaqListItem";

interface SeedFAQ {
    id: number;
    pregunta: string;
    respuesta: string;
}

interface Props {
  faqs: SeedFAQ[];
}

export const FaqList = ({ faqs }:Props) => {
  return (
    <div>
        {
            faqs.map(faq => (
                <FaqListItem
                    key={faq.id}
                    faq={faq}
                />
            ))
        }
    </div>
  )
}

