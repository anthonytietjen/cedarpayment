import Image from "next/image";

export default function Header() {
  return (
    <header
      className="flex h-[81px] p-4 border-b border-borderGray bg-white"
      role="banner"
    >
      <Image
        src="/assets/images/abc-health-system-logo.svg"
        alt="ABC Health System Logo"
        width={153}
        height={40}
        priority
      />
    </header>
  );
}
