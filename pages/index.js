import Head from "next/head";
import Header from "@components/Header";
import Footer from "@components/Footer";
import FeedbackForm from "@components/FeedbackForm";
import JokeBlock from "@components/JokeBlock";

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Next.js Toolbox</title>
        <link href="https://i.ibb.co/Xk0jyxQ/IMG-20220515-204730.jpg" rel="icon">
      </Head>

      <main>
        
        <FeedbackForm />
        <JokeBlock />
      </main>
      <Footer />
    </div>
  );
}
