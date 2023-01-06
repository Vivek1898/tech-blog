import Document, { Html, Head, Main, NextScript } from 'next/document';
import getConfig from 'next/config';
const { publicRuntimeConfig } = getConfig();

class MyDocument extends Document {
  setGoogleTags() {
    if (publicRuntimeConfig.PRODUCTION) {
      return {
        __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-4MXJTG1279');
        `
      };


      
    }
  }

  render() {
    return (
      <Html lang="en">
        <Head>
          <meta charSet="UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <link
            rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.3.1/css/bootstrap.min.css"
          />
          {/*<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/react-quill/0.4.1/quill.snow.css"/>*/}
          <link rel="stylesheet" href="/static/css/styles.css" />
          <script async src="https://www.googletagmanager.com/gtag/js?id=G-4MXJTG1279"></script>
          <script dangerouslySetInnerHTML={this.setGoogleTags()} />
          <script src="https://accounts.google.com/gsi/client" async defer></script>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
