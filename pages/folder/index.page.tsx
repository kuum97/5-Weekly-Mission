import {
  getFoldersByUserId,
  getLinksByUserIdAndFolderId,
  getUserById,
} from "@/api";
import SearchBar from "@/common/SearchBar";
import CardsPageLayout from "@/components/CardsPageLayout";
import FoldersNavigation from "@/components/FoldersNavigation";
import LinkAddForm from "@/components/LinkAddForm";
import LinkCards from "@/components/LinkCards";
import { SAMPLE_USER_ID } from "@/constants";
import { useUserState } from "@/hooks/useUserState";
import { UserData } from "@/types/user";
import { useQuery } from "@tanstack/react-query";

export async function getServerSideProps() {
  const user = await getUserById({ userId: SAMPLE_USER_ID });

  if (!user) return;

  return {
    props: {
      user,
    },
  };
}

interface FolderPageProps {
  user: UserData;
}

function FolderPage({ user }: FolderPageProps) {
  const setUser = useUserState((state) => state.setUser);

  if (user) {
    setUser(user);
  }

  const {
    data: folders,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["folders", user?.id],
    queryFn: async () => {
      if (!user) return;
      const data = await getFoldersByUserId({ userId: user.id });
      return data;
    },
  });
  const {
    data: links,
    isLoading: isLoadingLinks,
    isError: isErrorLinks,
  } = useQuery({
    queryKey: ["links", user?.id],
    queryFn: async () => {
      if (!user) return;
      const data = await getLinksByUserIdAndFolderId({ userId: user.id });
      return data;
    },
  });

  if (isLoading || isLoadingLinks) {
    <div>Loading...</div>;
  }

  if (isError || isErrorLinks) {
    <div>Error!!</div>;
  }

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

export default FolderPage;
