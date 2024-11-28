import StarRating from "@/components/starRating";

import Image from "next/image"

export default function MovieReview() {
const movieRating = 4.5


  return (
    <div className="max-w-2xl mx-auto px-4 py-8 bg-gray-50 min-h-screen">
      <article className="space-y-6">
        <h1 className="text-4xl font-bold text-center text-[#1B263B]">
          Guardiões da Galaxia Vol. 3: Um Adeus Emocionante e Hilário
        </h1>
        
        <div className="relative w-full h-64 overflow-hidden rounded-lg shadow-lg">
          <Image
            src=""
            alt="Guardians of the Galaxy Vol. 3 Poster"
            layout="fill"
            objectFit="cover"
            className="transition-transform duration-300 hover:scale-105"
          />
        </div>

        <div className="flex justify-center">
          <StarRating rating={movieRating} />
        </div>
        
        <p className="text-lg leading-relaxed text-gray-700">
          James Gunn entrega uma conclusão emocionante e hilariante para sua trilogia dos Guardiões da Galáxia. O filme equilibra perfeitamente o humor característico da série com momentos de profunda emoção, explorando o passado de Rocket e proporcionando um encerramento satisfatório para cada personagem.
        </p>
        
        <p className="text-lg leading-relaxed text-gray-700">
          As performances do elenco são excepcionais, com destaque para Bradley Cooper como Rocket e Chukwudi Iwuji como o Alto Evolucionário. Os efeitos visuais são deslumbrantes, criando mundos alienígenas fascinantes e sequências de ação empolgantes.
        </p>
        
        <p className="text-lg leading-relaxed text-gray-700">
          Embora o ritmo possa ser um pouco irregular em alguns momentos, Guardiões da Galáxia Vol. 3 é uma despedida emocionante e satisfatória para esses amados personagens. É uma montanha-russa de emoções que fará você rir, chorar e torcer pelos nossos heróis imperfeitos favoritos.
        </p>
        
        <div className="text-center">
          <span className="inline-block bg-[#1B263B] text-white text-xl font-bold px-4 py-2 rounded-full transform hover:scale-110 transition-transform duration-200">
            Nota Final: {movieRating}/5
          </span>
        </div>
      </article>
    </div>
  )
}

