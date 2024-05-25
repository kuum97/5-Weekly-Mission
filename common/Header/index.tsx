import Image from "next/image";
import Avatar from "@/common/Avatar";
import styles from "./index.module.css";
import { useStoreState } from "@/hooks/state";
import Link from "next/link";

function Header() {
  const { user } = useStoreState();

  return (
    <header className={styles.container}>
      <Link href={"/"} className={styles.logo}>
        <Image
          fill
          src="/images/Linkbrary.png"
          alt="logo"
          style={{ objectFit: "cover" }}
          sizes="(max-width: 767px) 100px, 133px"
          priority
        />
      </Link>
      <div className={styles.profileContainer}>
        {user && (
          <>
            <Avatar size="small" src={user.image_source} />
            <span>{user.email}</span>
          </>
        )}
      </div>
    </header>
  );
}

export default Header;
