import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const AboutPage = () => {
  return (
    <div className="flex flex-col min-h-[100dvh] bg-background justify-between">
      <Navbar />
      <main className="container mx-auto px-4 py-12 md:px-24 lg:py-20 my-14">
        <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
          <div>
            <h1 className="text-2xl font-bold tracking-tighter text-foreground sm:text-4xl md:text-5xl">
              Grow Smarter, Farm Better with TerraGrow
            </h1>
            <p className="mt-4 text-muted-foreground md:text-lg">
              TerraGrow is your trusted companion for precision farming and gardening. By leveraging cutting-edge AI, 
              we empower farmers and gardeners to unlock their soil’s full potential and maximize their yield with 
              data-driven recommendations tailored to your unique environment.
            </p>
          </div>
          <div className="grid gap-6">
            <div className="grid gap-2">
              <h2 className="text-lg font-semibold text-foreground">Analyze Your Soil</h2>
              <p className="text-muted-foreground">
                Provide key details like nutrient levels, pH, and other soil characteristics to get insights into 
                what crops will thrive best in your environment.
              </p>
            </div>
            <div className="grid gap-2">
              <h2 className="text-lg font-semibold text-foreground">Adapt to Your Climate</h2>
              <p className="text-muted-foreground">
                Take into account climate factors such as temperature, humidity, and rainfall to ensure your crops 
                are perfectly suited for your region.
              </p>
            </div>
            <div className="grid gap-2">
              <h2 className="text-lg font-semibold text-foreground">Personalized Crop Suggestions</h2>
              <p className="text-muted-foreground">
                Our AI-powered recommendations help you choose the ideal crops for your land, ensuring higher yields 
                and sustainable farming practices.
              </p>
            </div>
          </div>
        </div>
        <div className="mt-12 grid gap-6 md:mt-16 lg:mt-20">
          <div className="grid gap-2">
            <h2 className="text-xl font-bold tracking-tighter text-foreground">
              Maximize Your Yield with Precision Insights
            </h2>
            <p className="text-muted-foreground md:text-xl">
              From soil analysis to yield improvement tips, TerraGrow provides you with actionable insights to enhance 
              your farming practices. Optimize your land’s productivity with recommendations you can trust.
            </p>
          </div>
          <div className="grid gap-2">
            <h2 className="text-xl font-bold tracking-tighter text-foreground">Empowered by Cutting-Edge AI</h2>
            <p className="text-muted-foreground md:text-xl">
              Our AI models, trained on diverse datasets, deliver accurate crop predictions and yield improvement 
              suggestions. Trust TerraGrow to guide you toward a flourishing and eco-friendly farming journey.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default AboutPage;
