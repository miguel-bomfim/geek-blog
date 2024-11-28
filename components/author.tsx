import Image from "next/image";

interface AuthorProps {
  name: string;
  photoUrl: string;
  bio: string;
}

export default function Author({ name, photoUrl, bio }: AuthorProps) {
  return (
    <div className="flex rounded-[16px] items-center space-x-4 p-4 bg-gray-200 rounded-lg">
      <div className="flex-shrink-0">
        <Image
          src={photoUrl}
          alt={`Photo of ${name}`}
          width={64}
          height={64}
          className="rounded-full"
        />
      </div>
      <div>
        <h2 className="text-xl font-semibold">{name}</h2>
        <p className="text-orange-500 font-medium mb-2">{bio}</p>
        <p className="text-sm text-gray-500 mt-2">
          Esse conteúdo foi escrito por {name}
        </p>
      </div>
    </div>
  );
}
