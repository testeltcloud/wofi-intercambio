import Image from "next/image";

type LogoProps = { dark?: boolean; priority?: boolean };

export function Logo({ dark, priority }: LogoProps) {
  return (
    <Image
      src="/images/woofi-logo.png"
      alt="Woofi"
      width={384}
      height={67}
      priority={priority}
      sizes="160px"
      // No rodapé (fundo grafite) o logo preto é invertido para branco
      className={`h-7 w-auto ${dark ? "brightness-0 invert" : ""}`}
    />
  );
}
