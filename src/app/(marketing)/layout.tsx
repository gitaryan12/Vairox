import React from "react";
import { Footer, Navbar } from "@/components";
import { ReactLenis } from "@/utils/lenis";

interface Props {
  children: React.ReactNode;
}

const MarketingLayout = ({ children }: Props) => {
  return (
    <ReactLenis root>
      <>
        <head>
          <title>Vairox - AI Agents & Lead Gen</title>
          <meta
            name="description"
            content="Effortlessly streamline your business management with Vairox AI."
          />
          <meta property="og:title" content="Vairox - AI Agents" />
          <meta
            property="og:description"
            content="Effortlessly streamline your business management with Vairox AI."
          />
          <meta
            property="og:image"
            content="/assets/Screenshot 2025-05-15 021506.png"
          />
          <meta property="og:url" content="https://vairox.vercel.app" />
          <meta name="twitter:card" content="summary_large_image" />
        </head>

        <div
          id="home"
          className="absolute inset-0 bg-[linear-gradient(to_right,rgba(23,23,23,0.4)_1px,transparent_1px),linear-gradient(to_bottom,rgba(23,23,23,0.4)_1px,transparent_1px)] bg-[size:3rem_3rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)] h-full mt-[63px]"
        ></div>
        <Navbar />
        <main className="mt-20 mx-auto w-full z-0 relative">
          {children}
          {/* <Spotlight /> */}
        </main>
        <Footer />
      </>
    </ReactLenis>
  );
};

export default MarketingLayout;
