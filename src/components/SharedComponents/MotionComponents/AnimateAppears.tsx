import { AnimatePresence, motion } from "framer-motion";

const AnimateAppears = ({ children }: any) => {
  const variants = {
    enter: {
      x: -100,
      opacity: 0,
    },
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: {
      zIndex: 0,
      x: 100,
      opacity: 0,
    },
  };
  return (
    <AnimatePresence>
      <div>
        <motion.div
          variants={variants}
          className="w-full"
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            x: { type: "spring", stiffness: 300, damping: 30 },
            opacity: { duration: 0.2 },
          }}
        >
          {children}
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

export default AnimateAppears;
