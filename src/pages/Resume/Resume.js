import React from "react";
import Modal from "react-modal";
import { Document, Page } from "react-pdf";
import { pdfjs } from "react-pdf";
import maxResume from "./maxresume.pdf";

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
  pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

  return (
    <div>
      <Modal
        isOpen={true}
        style={customStyles}
        contentLabel="Example Modal"
        shouldCloseOnOverlayClick={false}
      >
        <Document file={maxResume}>
          <Page pageNumber={1} />
        </Document>
      </Modal>
    </div>
  );
};

export default Resume;
