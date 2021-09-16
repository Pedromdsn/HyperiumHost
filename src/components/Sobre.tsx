const Sobre = ({ link }) => {
	return (
		<div
			ref={link}
			className="flex flex-col w-2/3 mx-auto cinzaClaro text-center rounded-3xl text-white p-5 py-10 gap-3 mb-20">
			<h1 className="text-5xl font-semibold">Sobre nós</h1>
			<p className="text-lg w-2/3 mx-auto md:w-full">
				A Coffe foi criada dia 15 de junho às 14:11 e até hoje está no mercado, hoje em dia a Coffe conta com
				mais de 15 clientes e 200 membros em seu servidor. A Coffe sempre foi um sonho distante mas com a ajuda
				de Carloz, Luck e Coco Blanco esse sonho está sendo realizado.
			</p>
		</div>
	)
}

export default Sobre
