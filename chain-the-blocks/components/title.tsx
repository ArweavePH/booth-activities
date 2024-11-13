import { FC } from "react";

interface ITitle {
  className?: string;
  children: React.ReactNode;
}

export const Title: FC<ITitle> = ({ className = "", children }) => {
  return (
    <h1
      className={`text-center text-6xl font-roboto font-bold text-yellow-400 ${className}`}
      style={{
        textShadow: `-3px 3px 0 #000,
                  -1px -1px 0 #000,  
                   1px -1px 0 #000,
                  -1px 1px 0 #000,
                   1px 1px 0 #000,
                  -1px 0 0 #000,
                   1px 0 0 #000,
                   0 -1px 0 #000,
                   0 1px 0 #000`,
      }}
    >
      {children}
    </h1>
  );
};
