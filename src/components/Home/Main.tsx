import Image from "next/image";
import Link from "next/link";
import pigman from "public/img/pigman.png";

const Sobre = () => {
  return (
    <div className="Sobre mx-auto mt-40 flex justify-center md:mt-32">
      <div className="flex  h-72 w-[90vw] max-w-[1150px] items-center justify-around overflow-hidden rounded-2xl bg-cinza-100 p-5 text-center xl:h-auto">
        <div className="flex flex-col justify-center gap-5 xl:w-full">
          <h1 className="mb-3 px-4 font-Montserrat text-2xl font-black uppercase">
            A melhor hospedagem de minecraft
          </h1>
          <div className="text-left text-lg text-gray-400">
            <h2>Crie seu servidor agora mesmo com quem entende do assunto!</h2>
            <h2>Qualidade e confiança, é na Hyperium.</h2>
          </div>
          <div className="mt-5 flex flex-row gap-5 text-lg text-gray-300 sm:text-base">
            <Link href="/minecraft" passHref>
              <a className="rounded-xl bg-cinza-400 py-2 px-5 transition-all duration-200 hover:brightness-110">
                Ver Plano
              </a>
            </Link>
            <Link href="/minecraft" passHref>
              <a className="rounded-xl bg-cinza-400 py-2 px-5 transition-all duration-200 hover:brightness-110">
                Sobre A Empresa
              </a>
            </Link>
          </div>
        </div>
        <div className="xl:hidden">
          <Image src={pigman} alt="Erro" priority quality={50} />
        </div>
      </div>
    </div>
  );
};

export default Sobre;
