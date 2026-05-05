import { motion } from "framer-motion";

const containerVars = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.6 },
  },
};

const rowVars = {
  hidden: { opacity: 0, x: 60 },
  visible: {
    opacity: 1, x: 0,
    transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] },
  },
};

const EmailComponent = () => {
  return (
    <motion.div
      className="pt-10 flex flex-col items-end justify-center gap-5 mx-auto"
      variants={containerVars}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      <motion.div className="flex gap-5" variants={rowVars}>
        <span className="text-white text-4xl font-bebas-neue text-right">
          EMAIL:{" "}
        </span>
        <motion.input
          placeholder="Type Your Email"
          type="email"
          className="p-2 bg-[#CEB7FF] opacity-30 w-96 h-10 font-medium text-black focus:opacity-60"
          whileFocus={{ opacity: 1, boxShadow: "0 0 20px rgba(206, 183, 255, 0.5)" }}
          transition={{ duration: 0.3 }}
        />
      </motion.div>
      <motion.div className="flex gap-5" variants={rowVars}>
        <span className="text-white text-4xl font-bebas-neue text-right">
          SUBJECT:{" "}
        </span>
        <motion.input
          placeholder="Type Your Subject"
          type="text"
          className="p-2 bg-[#CEB7FF] opacity-30 w-96 h-10 font-medium text-black focus:opacity-60"
          whileFocus={{ opacity: 1, boxShadow: "0 0 20px rgba(206, 183, 255, 0.5)" }}
          transition={{ duration: 0.3 }}
        />
      </motion.div>
      <motion.div className="flex gap-5" variants={rowVars}>
        <span className="text-white text-4xl font-bebas-neue text-right">
          CONTENT:{" "}
        </span>
        <motion.textarea
          placeholder="Type your message!"
          type="text"
          className="p-2.5 bg-[#CEB7FF] opacity-30 w-96 h-40 font-medium text-black focus:opacity-60"
          whileFocus={{ opacity: 1, boxShadow: "0 0 20px rgba(206, 183, 255, 0.5)" }}
          transition={{ duration: 0.3 }}
        />
      </motion.div>
    </motion.div>
  );
};
export default EmailComponent;
