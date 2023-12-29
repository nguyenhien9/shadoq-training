import { twMerge } from "tailwind-merge";

type ExtractText<S extends string> = S extends `text-[${infer T}px]`
  ? `${T}`
  : S;

const textArray = [
  "text-[12px]",
  "text-[14px]",
  "text-[16px]",
  "text-[17px]",
  "text-[18px]",
  "text-[19px]",
  "text-[28px]",
  "text-[32px]",
  "text-[64px]",
];

type TypoProps = {
  children: React.ReactNode;
  size: ExtractText<(typeof textArray)[number]>;
  className?: string;
};
export default function Typo({ children, size, className }: TypoProps) {
  const findText = (text: ExtractText<(typeof textArray)[number]>) => {
    return textArray.find((t) => t.includes(text));
  };
  const type = findText(size);
  return <p className={twMerge(type, className)}>{children}</p>;
}
