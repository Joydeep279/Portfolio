const EmailComponent = () => {
  return (
    <div className="pt-10 flex flex-col items-end justify-center gap-5 mx-auto">
      <div className="flex gap-5">
        <span className="text-white text-4xl font-bebas-neue text-right">
          EMAIL:{" "}
        </span>
        <input
            placeholder="joydeepnath279@gmail.com"
          type="email"
          className="bg-[#CEB7FF] opacity-30 w-96 h-10 font-medium text-black focus:opacity-100"></input>
      </div>
      <div className="flex gap-5">
        <span className="text-white text-4xl font-bebas-neue text-right">
          SUBJECT:{" "}
        </span>
        <input
        placeholder="Type Your Subject"
          type="text"
          className="bg-[#CEB7FF] opacity-30 w-96 h-10 font-medium text-black focus:opacity-100"></input>
      </div>
      <div className="flex gap-5">
        <span className="text-white text-4xl font-bebas-neue text-right">
          CONTENT:{" "}
        </span>
        <textarea
          placeholder="Type your message!"
          type="text"
          className="bg-[#CEB7FF] opacity-30 w-96 h-40 font-medium text-black focus:opacity-100"></textarea>
      </div>
    </div>
  );
};
export default EmailComponent;
