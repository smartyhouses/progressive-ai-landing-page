import { AnimatePresence, motion } from "framer-motion";
import Head from "next/head";
import { useState, useEffect } from "react";

import { HeroSection } from "@/components/sections/HeroSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { FeaturesSection } from "@/components/sections/FeaturesSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { PlaygroundToast, ToastType } from "@/components/toast/PlaygroundToast";
import { ConnectionProvider, useConnection } from "@/hooks/useConnection";

export default function Home() {
  return (
    <ConnectionProvider>
      <HomeInner />
    </ConnectionProvider>
  );
}

export function HomeInner() {
  const [toastMessage, setToastMessage] = useState<{
    message: string;
    type: ToastType;
  } | null>(null);
  const { wsUrl, token, connect } = useConnection();

  useEffect(() => {
    connect().catch((e) => {
      setToastMessage({ message: e.message, type: "error" });
      console.error(e);
    });
  }, [connect]);

  const title = "Progressive AI - Voice Agents for Business";
  const description =
    "Transform your business communication with intelligent AI voice agents. Experience natural conversations and seamless integration.";

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="og:title" content={title} />
        <meta name="og:description" content={description} />
        <meta property="og:image" content="/og.png" />
        <meta name="twitter:site" content="@ProgressiveAI" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta property="twitter:image" content="/og.png" />
        <meta property="twitter:image:width" content="1600" />
        <meta property="twitter:image:height" content="836" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no"
        />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black" />
        <meta property="og:image:width" content="1600" />
        <meta property="og:image:height" content="836" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="min-h-screen bg-brand-deeperBlue text-white">
        <AnimatePresence>
          {toastMessage && (
            <motion.div
              className="fixed left-0 right-0 top-0 z-50"
              initial={{ opacity: 0, translateY: -50 }}
              animate={{ opacity: 1, translateY: 0 }}
              exit={{ opacity: 0, translateY: -50 }}
            >
              <PlaygroundToast
                message={toastMessage.message}
                type={toastMessage.type}
                onDismiss={() => setToastMessage(null)}
              />
            </motion.div>
          )}
        </AnimatePresence>

        {wsUrl && token ? (
          <>
            <HeroSection
              wsUrl={wsUrl}
              token={token}
              onError={(e: Error) => {
                setToastMessage({ message: e.message, type: "error" });
                console.error(e);
              }}
            />
            <ServicesSection />
            <FeaturesSection />
            <ContactSection />
          </>
        ) : null}
      </div>
    </>
  );
}
