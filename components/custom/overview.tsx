import { motion } from 'framer-motion';
import lottie from 'lottie-web';
import { useEffect, useRef } from 'react';

import { MessageIcon, BrainstormIcon } from './icons';

export const Overview = () => {
  const animationContainer = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (animationContainer.current) {
      lottie.loadAnimation({
        container: animationContainer.current,
        renderer: 'svg',
        loop: true,
        autoplay: true,
        path: 'https://gcore.jsdelivr.net/gh/AI-QL/chat-ui/lottie.json',
      });
    }
  }, []);

  return (
    <motion.div
      key="overview"
      className="max-w-3xl mx-auto md:mt-20"
      initial={{ opacity: 0, scale: 0.98 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.98 }}
      transition={{ delay: 0.5 }}
    >
      <div 
        className="rounded-xl p-6 flex flex-col gap-2 leading-relaxed text-center max-w-xl "
        
      >
        <p className="flex flex-row justify-center gap-4 items-center">
          <BrainstormIcon />
          <span>+</span>
          <MessageIcon size={32} />
        </p>
        <div className="p-2">
  <h1 className="text-xl sm:text-2xl font-bold mb-1">
    🌟{' '}
    <span className="text-gradient-2">
      Welcome to Our NLP Chatbot!
    </span>{' '}
    🌟
  </h1>
  <p className="text-sm sm:text-base text-muted-foreground mb-2">
    Engage in a conversation about various NLP tasks, including{' '}
    <span className="font-semibold">Sentiment Analysis</span>,{' '}
    <span className="font-semibold">Named Entity Recognition</span>, and{' '}
    <span className="font-semibold">Question Answering</span>! 🤖💬
  </p>
  <div id="lottie" ref={animationContainer}></div>
</div>

      </div>
    </motion.div>
  );
};
