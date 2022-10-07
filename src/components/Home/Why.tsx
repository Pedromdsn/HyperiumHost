import {
  AiFillClockCircle,
  AiFillCreditCard,
  AiFillSmile,
} from "react-icons/ai";
import { RiGitRepositoryPrivateFill } from "react-icons/ri";
import { FaUser } from "react-icons/fa";

export default function Why() {
  return (
    <div className="Why mt-20 flex justify-center ">
      <div className="w-[85vw] max-w-[1150px]">
        <h1 className="text-5xl font-bold">Porque escolher a Hyperium?</h1>
        <h2 className="mt-5 font-medium">
          Somos uma hospedagem que sempre preza pela qualidade, custo benefício
          e satisfação total de nossos clientes. Temos diversos benefícios
          exclusivos para você ;)
        </h2>
        <div className="mt-10 mb-20 flex flex-wrap justify-around gap-3 ">
          <WhyCard
            Icon={AiFillClockCircle}
            title="Tempo de ativação"
            subTitle="Nosso prazo para ativação de serviços é de 5 minutos!"
          />
          <WhyCard
            Icon={AiFillCreditCard}
            title="Sobre o reembolso"
            subTitle="Prazo de 7 dias para a solicitação do reembolso!"
          />
          <WhyCard
            Icon={FaUser}
            title="Suporte ao cliente"
            subTitle="Nosso suporte está disponível 24/7 para você"
          />
          <WhyCard
            Icon={RiGitRepositoryPrivateFill}
            title="Proteção de dados"
            subTitle="Seus dados são criptografados com segurança!"
          />
        </div>
      </div>
    </div>
  );
}

type WhyCardProps = {
  Icon: any;
  title: string;
  subTitle: string;
};

export function WhyCard({ title, subTitle, Icon }: WhyCardProps) {
  return (
    <div className="flex w-[255px] flex-col items-center rounded-lg bg-cinza-200 px-3 py-5 text-center transition-all duration-300 hover:-translate-y-1">
      <Icon size={64} />
      <h1 className="mt-3 mb-4 text-xl font-semibold">{title}</h1>
      <h2 className="font-medium text-gray-400">{subTitle}</h2>
    </div>
  );
}
