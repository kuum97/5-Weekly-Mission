import { useEffect } from "react";
import { useRouter } from "next/router";
import { useStoreState } from "@/hooks/state";
import { useLink } from "@/hooks/api/useLink";
import FolderPageLayout from "@/components/FolderPageLayout";
import LinkCards from "@/components/LinkCards";

function Page() {
  const { user, folders } = useStoreState();
  const router = useRouter();
  const { folderId } = router.query;
  const id = Number(folderId);
  const { links } = useLink({
    user,
    folderId: id,
  });

  useEffect(() => {
    if (!user) {
      router.push("/signin");
    }
    if (!folders) {
      router.push("/folder");
    }
  }, [router, user, folders]);

  return (
    <FolderPageLayout>
      <LinkCards links={links} />
    </FolderPageLayout>
  );
}

export default Page;
