interface Props {
  children: React.ReactNode;
}

export const Button = ({ children }: Props) => {
  return (
    <button className="bg-my-gradient text-white text-[14px] font-bold py-2 px-[34px] rounded-[22px] h-[44px]">
      {children}
    </button>
  );
};
