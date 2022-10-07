import Link from "next/link";
import { AiOutlineCopyrightCircle } from "react-icons/ai";
import { HiCode } from "react-icons/hi";

export default function EndFootBar() {
  return (
    <div className="flex justify-center bg-cinza-100">
      <div className="w-[80vw] max-w-[1500px]">
        <div className="mt-20 mb-12 flex flex-wrap justify-around text-center md:gap-8">
          <div className="flex w-1/3 min-w-fit flex-col">
            <h1 className="mb-2 text-xl font-bold">PRODUTOS</h1>
            <Link href="/minecraft" passHref>
              <a href="#" className="cursor-pointer text-[#c0c0c0]">
                Hospedagem de Minecraft
              </a>
            </Link>
          </div>
          <div className="flex w-1/3 min-w-fit flex-col">
            <h1 className="mb-2 text-xl font-bold">SUPORTE</h1>
            <a href="#" className="cursor-pointer text-[#c0c0c0]">
              Base de conhecimento
            </a>
            <a href="#" className="cursor-pointer text-[#c0c0c0]">
              Chat de atendimento
            </a>
          </div>
          <div className="flex w-1/3 min-w-fit flex-col">
            <h1 className="mb-2 text-xl font-bold">A EMPRESA</h1>
            <a href="#" className="cursor-pointer text-[#c0c0c0]">
              Status da rede
            </a>
            <a href="#" className="cursor-pointer text-[#c0c0c0]">
              Trabalhe connosco
            </a>
          </div>
        </div>
        <div className="my-10 flex flex-col items-center justify-center gap-5 text-center font-medium">
          <h2 className="flex flex-wrap items-center justify-center">
            <HiCode size={20} />
            <span>&#160; Desenvolvido por&#160;</span>
            <a
              href="https://pedromdsn.com"
              target="_blank"
              className="font-bold"
              rel="noreferrer"
            >
              Pedromdsn
            </a>
          </h2>
          <div>
            <h2 className="flex flex-wrap items-center justify-center md:mt-4">
              <span>2020 - 2022 &#160;</span>
              <AiOutlineCopyrightCircle size={20} />
              <span>&#160; Pedromdsn Team</span>
            </h2>
            <span>Todos direitos reservados.</span>
          </div>
        </div>
      </div>
    </div>
  );
}
