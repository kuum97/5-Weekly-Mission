import CardsPageLayout from "@/components/CardsPageLayout";
import FoldersNavigation from "@/components/FoldersNavigation";
import LinkAddForm from "@/components/LinkAddForm";
import LinkCards from "@/components/LinkCards";
import { CODEIT_BASE_URL, LOCAL_ACCESSTOKEN } from "@/constants";
import { useFolder } from "@/hooks/api/useFolder";
import { useUser } from "@/hooks/api/useUser";
import { useQuery } from "@tanstack/react-query";
import { useRouter } from "next/router";
import SearchBar from "@/common/SearchBar";

function Page() {
  const { data: user } = useUser({ localAccessToken: LOCAL_ACCESSTOKEN });
  const { query } = useRouter();
  const { folderId } = query;
  const id = Number(folderId);
  const { data: folders } = useFolder({ user });
  const { data: links } = useQuery({
    queryKey: ["folderId", id],
    queryFn: async () => {
      if (!user && !folderId) return;
      const response = await fetch(
        `${CODEIT_BASE_URL}/users/${user.id}/links?folderId=${folderId}`
      );
      const { data } = await response.json();
      return data;
    },
    enabled: !!folderId,
  });

  const handleSearchByKeyword = (keyword: string) => {
    if (!links) return console.log("링크가 존재하지 않습니다!");
    const searchedLink = links?.filter((link) => link.title?.includes(keyword));
    if (!searchedLink) return console.log("해당 링크가 존재하지 않습니다!");
  };

  return (
    <CardsPageLayout>
      <LinkAddForm />
      <SearchBar onSearch={handleSearchByKeyword} />
      <FoldersNavigation folders={folders} />
      <LinkCards links={links} />
    </CardsPageLayout>
  );
}

export default Page;
