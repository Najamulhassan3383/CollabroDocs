import { Button } from "@/components/ui/button";

import { CardTitle, CardDescription } from "@/components/ui/card";

import CardDashboard from "./CardDashboard";
import { useParams, useLocation } from "react-router-dom";
import { useGetDocumentsQuery } from "@/slices/documentsSlice";
import { useState } from "react";
import ColboratorModal from "./ColaboratorModal";
import AddDocument from "./AddDocument";

const MainDashboard = () => {
  const { id } = useParams();
  let location = useLocation();

  const project = location.state.project;
  const {
    data: documentsData,
    error: documentsError,
    isLoading: documentsIsLoading,
  } = useGetDocumentsQuery(id);
  const [isModalOpen, setIsModalOpen] = useState(false); // Add a state variable for the modal
  const [adddocumentmodal, setAddDocumentModal] = useState(false); // Add a state variable for the modal
  const handleEditClick = () => {
    setIsModalOpen(true); // Open the modal when the Edit button is clicked
  };
  const handleAddDocumentClick = () => {
    setAddDocumentModal(true); // Open the modal when the Edit button is clicked
  };
  const handleCancelDocumentClick = () => {
    setAddDocumentModal(false); // Open the modal when the Edit button is clicked
  };

  const handleModalClose = () => {
    setIsModalOpen(false); // Close the modal
  };

  return (
    <>
      {!documentsIsLoading && !documentsError ? (
        <>
          <div className="flex items-center gap-4">
            <div className="grid gap-1">
              <CardTitle>{project?.name}</CardTitle>
              <CardDescription>{project?.description}</CardDescription>
            </div>
            <Button className="ml-auto" onClick={handleEditClick} size="sm">
              Edit
            </Button>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 max-w-8xl w-full mx-auto">
            {documentsData.data.map((document) => (
              <CardDashboard key={document._id} document={document} />
            ))}
            <Button
              className="fixed bottom-4 right-4"
              onClick={handleAddDocumentClick}
            >
              Add Document
            </Button>
          </div>
          {/* add a + button for adding new documents */}
          {adddocumentmodal && (
            <Modal onClose={handleCancelDocumentClick}>
              <AddDocument onClose={setAddDocumentModal} />
            </Modal>
          )}

          {isModalOpen && (
            <Modal onClose={handleModalClose}>
              <ColboratorModal onClose={handleModalClose} place={"Project"} />
            </Modal>
          )}
        </>
      ) : (
        <p>Loading...</p>
      )}
    </>
  );
};

export default MainDashboard;

export const Modal = ({ onClose, children }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="absolute inset-0 bg-black opacity-50" onClick={onClose} />
      <div className="bg-white p-6 rounded shadow-lg z-10">{children}</div>
    </div>
  );
};
