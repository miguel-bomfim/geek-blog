import Menu from "@/components/menu";
import Footer from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import SearchInput from "@/components/searchInput";
import Reviews from "@/components/reviews";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-[#1a1a1a] text-white">
      <Menu />

      <main className="flex-grow">
        <section className="bg-[#1B263B] text-white py-12">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl font-bold mb-4">
              Bem-vindo ao Perfil Nerd
            </h1>
            <p className="text-xl mb-8">Conectando você ao universo nerd!</p>
          </div>
          <SearchInput className="hidden md:visible md:flex" />
        </section>

        <section className="py-12 bg-[#F2F2F2]">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 text-black">
              Artigos em Destaque
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[1, 2, 3, 4, 5].map((i) => (
                <Card
                  key={i}
                  className={`relative overflow-hidden group ${
                    i === 1 ? "md:col-span-2 md:row-span-2" : ""
                  }`}
                >
                  <img
                    src={`https://picsum.photos/seed/${i}/${
                      i === 1 ? "1200/800" : "800/600"
                    }`}
                    alt={`Imagem do Artigo ${i}`}
                    className={`w-full object-cover transition-transform duration-300 group-hover:scale-110 ${
                      i === 1 ? "h-[600px] md:h-[800px]" : "h-80"
                    }`}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-70"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3
                      className={`font-bold mb-2 text-white ${
                        i === 1 ? "text-4xl" : "text-2xl"
                      }`}
                    >
                      Artigo {i}
                    </h3>
                    <p
                      className={`text-gray-200 ${
                        i === 1 ? "text-xl" : "text-base"
                      }`}
                    >
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua.
                      {i === 1 &&
                        " Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."}
                    </p>
                    <Button
                      className={`mt-4 bg-[#d7263d] hover:bg-[#b51d31] transition-colors ${
                        i === 1 ? "text-lg px-6 py-3" : ""
                      }`}
                    >
                      Ler mais
                    </Button>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-[#1A1A1A]">
          <Reviews />
        </section>

        <section className="bg-[#1B263B] py-12">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 text-center">
              Contribua com o lado nerd da força!
            </h2>
            <form className="max-w-md mx-auto flex flex-col gap-4">
              <Input
                type="email"
                placeholder="Seu e-mail"
                className="bg-white text-[#1a1a1a]"
              />
              <Textarea
                placeholder="Sua mensagem, sugestão, critica ou ideia aqui:"
                className="bg-white text-[#1a1a1a]"
              />
              <Button
                type="submit"
                className="bg-[#d7263d] hover:bg-[#b51d31] transition-colors"
              >
                Contribuir
              </Button>
            </form>
          </div>
        </section>

        <Footer />
      </main>
    </div>
  );
}
