import SearchBar from "@/common/SearchBar";
import CardsPageLayout from "@/components/CardsPageLayout";
import FoldersNavigation from "@/components/FoldersNavigation";
import LinkAddForm from "@/components/LinkAddForm";
import LinkCards from "@/components/LinkCards";
import { LOCAL_ACCESSTOKEN } from "@/constants";
import { useFolder } from "@/hooks/api/useFolder";
import { useLink } from "@/hooks/api/useLink";
import { useUser } from "@/hooks/api/useUser";

function FolderPage() {
  const { data: user } = useUser({ localAccessToken: LOCAL_ACCESSTOKEN });
  const {
    data: folders,
    isLoading: isLoadingFolders,
    isError: isErrorFolders,
  } = useFolder({ user });
  const {
    data: links,
    isLoading: isLoadingLinks,
    isError: isErrorLinks,
  } = useLink({ user });

  if (isLoadingFolders || isLoadingLinks) {
    return <div>Loading...</div>;
  }

  if (isErrorFolders || isErrorLinks) {
    return <div>Error!!</div>;
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
