import github from "../assets/img/github.svg";
import instagram from "../assets/img/instagram.svg";
import linkedin from "../assets/img/linkedin.svg";
import leetCode from "../assets/img/leetcodeIcon.png";
import { motion } from "framer-motion";

const EmailComponent = () => {
  return (
    <motion.div
      className="pt-6 sm:pt-10 flex flex-col items-center sm:items-end justify-center gap-4 sm:gap-5 mx-auto w-full sm:w-auto"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      <motion.div className="flex flex-col sm:flex-row gap-1 sm:gap-5 w-full sm:w-auto" >
        <span className="text-white text-2xl sm:text-3xl md:text-4xl font-bebas-neue text-left sm:text-right sm:w-28">
          EMAIL:{" "}
        </span>
        <motion.input
          placeholder="Type Your Email"
          type="email"
          className="p-2 bg-[#CEB7FF] opacity-30 w-full sm:w-80 md:w-96 h-10 font-medium text-black focus:opacity-60"
          whileFocus={{ opacity: 1, boxShadow: "0 0 20px rgba(206, 183, 255, 0.5)" }}
          transition={{ duration: 0.3 }}
        />
      </motion.div>
      <motion.div className="flex flex-col sm:flex-row gap-1 sm:gap-5 w-full sm:w-auto" >
        <span className="text-white text-2xl sm:text-3xl md:text-4xl font-bebas-neue text-left sm:text-right sm:w-28">
          SUBJECT:{" "}
        </span>
        <motion.input
          placeholder="Type Your Subject"
          type="text"
          className="p-2 bg-[#CEB7FF] opacity-30 w-full sm:w-80 md:w-96 h-10 font-medium text-black focus:opacity-60"
          whileFocus={{ opacity: 1, boxShadow: "0 0 20px rgba(206, 183, 255, 0.5)" }}
          transition={{ duration: 0.3 }}
        />
      </motion.div>
      <motion.div className="flex flex-col sm:flex-row gap-1 sm:gap-5 w-full sm:w-auto" >
        <span className="text-white text-2xl sm:text-3xl md:text-4xl font-bebas-neue text-left sm:text-right sm:w-28">
          CONTENT:{" "}
        </span>
        <motion.textarea
          placeholder="Type your message!"
          type="text"
          className="p-2.5 bg-[#CEB7FF] opacity-30 w-full sm:w-80 md:w-96 h-32 sm:h-40 font-medium text-black focus:opacity-60 resize-none"
          whileFocus={{ opacity: 1, boxShadow: "0 0 20px rgba(206, 183, 255, 0.5)" }}
          transition={{ duration: 0.3 }}
        />
      </motion.div>
      <motion.div
        className="flex flex-row gap-6 sm:gap-8 justify-center self-center w-full sm:w-auto mt-4 sm:mt-2 z-[100]"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <motion.a
          className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8"
          href="https://github.com/Joydeep279"
          target="blank"
          whileHover={{ scale: 1.3, filter: "drop-shadow(0 0 12px rgba(206, 183, 255, 0.8))" }}
          whileTap={{ scale: 0.9 }}
        >
          <img src={github} />
        </motion.a>
        <motion.a
          className="w-6 h-6 sm:w-8 sm:h-8 md:w-9 md:h-9"
          href="https://leetcode.com/u/joydeep279/"
          target="blank"

          whileHover={{ scale: 1.3, filter: "drop-shadow(0 0 12px rgba(206, 183, 255, 0.8))" }}
          whileTap={{ scale: 0.9 }}
        >
          <img src={leetCode} />
        </motion.a>
        <motion.a
          className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8"
          href=""

          whileHover={{ scale: 1.3, filter: "drop-shadow(0 0 12px rgba(206, 183, 255, 0.8))" }}
          whileTap={{ scale: 0.9 }}
        >
          <img src={instagram} />
        </motion.a>
        <motion.a
          className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8"
          href="https://www.linkedin.com/in/joydeep-nath007"
          target="blank"

          whileHover={{ scale: 1.3, filter: "drop-shadow(0 0 12px rgba(206, 183, 255, 0.8))" }}
          whileTap={{ scale: 0.9 }}
        >
          <img src={linkedin} />
        </motion.a>

      </motion.div>
    </motion.div>
  );
};
export default EmailComponent;
