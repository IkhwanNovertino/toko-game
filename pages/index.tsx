import type { NextPage } from 'next';
import { useEffect } from 'react';
import Head from 'next/head';
import AOS from "aos";
import Navbar from '../components/organism/navbar';
import MainBanner from '../components/organism/main-banner';
import TransactionStep from '../components/organism/transaction-step';
import FeatureGame from '../components/organism/feature-game';
import Reached from '../components/organism/reached';
import Story from '../components/organism/story';
import Footer from '../components/organism/footer';

const Home: NextPage = function () {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <Head>
        <title>StoreGG - Get a New Experience in Gaming</title>
        <meta name="description" content="Kami menyediakan jutaan cara untuk membantu players menjadi pemenang sejati" />
        <meta property="og:title" content="StoreGG - Get a New Experience in Gaming" />
        <meta property="og:description" content="Kami menyediakan jutaan cara untuk membantu players menjadi pemenang sejati" />
      </Head>
      <Navbar />
      <MainBanner />
      <TransactionStep />
      <FeatureGame />
      <Reached />
      <Story />
      <Footer />
    </>
  );
};

export default Home;
