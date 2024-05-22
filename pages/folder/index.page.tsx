import LinkAddForm from "@/components/LinkAddForm";
import FoldersController from "@/components/FolderController";
import { SAMPLE_USER_ID } from "@/constants";
import CardListPagesLayout from "@/components/CardListPagesLayout";
import { ReactElement } from "react";

function FolderPage() {
  return (
    <>
      <LinkAddForm />
      <FoldersController folders={foldersData} userId={SAMPLE_USER_ID} />
    </>
  );
}

FolderPage.getLayout = function getLayout(page: ReactElement) {
  return <CardListPagesLayout>{page}</CardListPagesLayout>;
};

export default FolderPage;
