/* eslint-disable @next/next/no-page-custom-font */
import "../styles/globals.scss"
import "tailwindcss/tailwind.css"
import Head from "next/head"

function MyApp({ Component, pageProps }) {
	return (
		<>
			<Head>
				<title>A melhor hospedagem é aqui!</title>
				<link rel="icon" type="image/png" sizes="16x16" href="/favicon.png" />
				<meta name="description" content="Minecraft host a um preço super gostoso." />
				<meta name="author" content="Coco Blanco" />
				<link rel="preconnect" href="https://fonts.googleapis.com" />
				<link rel="preconnect" href="https://fonts.gstatic.com" />
				<link
					href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600;700;800;900&family=Poppins:wght@400;600;700;900&display=swap"
					rel="stylesheet"
				/>
			</Head>
			<Component {...pageProps} />
		</>
	)
}

export default MyApp
