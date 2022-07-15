import Image from "next/image";
import Link from "next/link";

const Logo = () => {
  return (
    <Link href="/">
      <a>
        <Image src="/images/joe-logo.svg" width={123} height={113} alt="logo" />
      </a>
    </Link>
  );
};

export default Logo;
