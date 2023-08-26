const Button = ({ styles }) => {
  return (
    <button
      type="button"
      className={`bg-blue-gradient py-4 px-6 font-poppins rounded-sm text-primary text-[18px] outline-none
     ${styles} `}
    >
      Get Started
    </button>
  );
};

export default Button;
