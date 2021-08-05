import "../styles/globals.scss"
import "tailwindcss/tailwind.css"
import Head from "next/head"

function MyApp({ Component, pageProps }) {
	return (
		<>
			<Head>
				<title>A melhor hospedagem é aqui!</title>
				<link rel="icon" type="image/png" sizes="16x16" href="/favicon.png" />
				<meta name="description" content="Free Web tutorials" />
				<meta name="author" content="Coco Blanco" />
			</Head>
			<Component {...pageProps} />
		</>
	)
}

export default MyApp
