import React, { useState } from "react";
import Modal from "react-modal";
import Layout from "../../components/Layout";
import { Document, Page } from "react-pdf";
import { pdfjs } from "react-pdf";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

const Resume = ({ user }) => {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
    // document.getElementById("root").style.filter = "blur(10px)";
  }

  const [modalIsOpen, setIsOpen] = React.useState(true);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);

    document.getElementById("root").style.opacity = 1;
    document.body.style.backgroundColor = "#000000";
  }

  return (
    <div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
        shouldCloseOnOverlayClick={false}
      >
        <Document
          file="https://ipfs.io/ipfs/QmbRPqtwSJ8stVCyecSbcig83wS5sAC1FwqZj3F4KNzPwn"
          onLoadSuccess={onDocumentLoadSuccess}
        >
          <Page pageNumber={pageNumber} />
        </Document>
      </Modal>
    </div>
  );
};

export default Resume;
