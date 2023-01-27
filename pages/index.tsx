import type { NextPage } from 'next';
import { useEffect } from 'react';
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
