import LatestRepos from "../components/latestRepos";
import Link from "../components/link";
import Head from "next/head";
import { LazyLoadImage } from "react-lazy-load-image-component";

export default () => (
  <>
    <Head>
      <title>Fredrik Forsmo</title>
      <meta
        name="description"
        content="Full-stack developer, tech maker and open source ninja."
      />
      <meta property="og:title" content="Fredrik Forsmo" />
      <meta
        property="og:description"
        content="Full-stack developer, tech maker and open source ninja."
      />
      <meta property="og:image" content="https://frozzare.com/frozzare.jpg" />
      <meta name="twitter:title" content="Fredrik Forsmo" />
      <meta
        name="twitter:description"
        content="Full-stack developer, tech maker and open source ninja."
      />
      <meta name="twitter:image" content="https://frozzare.com/frozzare.jpg" />
      <meta name="twitter:card" content="summary" />
    </Head>
    <div className="container mx-auto">
      <div className="bg-f-blue text-white">
        <div className="flex flex-wrap content-center min-h-screen">
          <div className="lg:w-6/12 w-10/12 m-auto">
            <h1 className="text-4xl mb-5 text-left">
              Hello! <span class="hello">👋</span>
            </h1>
            <p className="text-2xl mb-5">
              I'm Fredrik Forsmo, full-stack developer, tech maker and open
              source ninja and focusing on JavaScript and Go from Stockholm,
              Sweden 🇸🇪.
            </p>
            <p className="text-2xl">
              You can find me on{" "}
              <Link to="https://github.com/frozzare">GitHub</Link>,{" "}
              <Link to="https://twitter.com/frozzare">Twitter</Link> or{" "}
              <Link to="https://www.linkedin.com/in/frozzare/">LinkedIn</Link>. Feel
              free to contact me on social media or send me a email at{" "}
              <Link to="mailto:hello@frozzare.com">hello@frozzare.com</Link>.
            </p>
          </div>
        </div>
      </div>
    </div>
  </>
);
