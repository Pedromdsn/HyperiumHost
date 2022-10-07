import Document, {
  DocumentContext,
  Html,
  Head,
  Main,
  NextScript,
} from "next/document";

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initalProps = await Document.getInitialProps(ctx);
    return initalProps;
  }

  render() {
    return (
      <Html lang="pt">
        <Head>
          <link rel="icon" href="favicon.ico" type="image/x-icon" />
          <meta
            name="description"
            content="Minecraft host a um preço super gostoso."
          />
          <meta name="author" content="Pedromdsn <me@pedromdsn.com>" />
          <link
            href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600;700;800;900&family=Poppins:wght@400;600;700;900&display=swap"
            rel="stylesheet"
          />
        </Head>
        <body className="font-Main">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
