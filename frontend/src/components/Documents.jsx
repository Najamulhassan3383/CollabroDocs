import { useGetDocumentsQuery } from "../slices/documentsSlice";
import DocumentTable from "./DocumentTable";
import { useParams } from "react-router-dom";

const Documents = () => {
  const { id } = useParams();
  const {
    data: documentsData,
    error: documentsError,
    isLoading: documentsIsLoading,
  } = useGetDocumentsQuery(id);
  console.log(id);
  return (
    <>
      <h1 className="text-xl font-bold tracking-tight text-gray-900 px-4 py-6 sm:px-6 lg:px-8">
        Documents
      </h1>
      {documentsIsLoading ? (
        <div>Loading...</div>
      ) : (
        <DocumentTable documents={documentsData.data} />
      )}
    </>
  );
};

export default Documents;
