import { useState } from "react";

export default function FileUpload() {
  const [files, setFiles] = useState([]);

  const handleDrop = (e) => {
    e.preventDefault();
    setFiles([...e.dataTransfer.files]);
  };

  const handleFileChange = (e) => {
    setFiles([...e.target.files]);
  };

  return (
    <div
      onClick={() => document.getElementById("fileInput").click()}
      onDragOver={(e) => e.preventDefault()}
      onDrop={handleDrop}
      className="flex flex-col items-center justify-center w-full h-48 border-2 border-dashed border-gray-400 rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100"
    >
      <input
        id="fileInput"
        type="file"
        multiple
        className="hidden"
        onChange={handleFileChange}
      />
      <svg
        className="w-10 h-10 text-gray-400 mb-2"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M7 16a4 4 0 01-.88-7.9 5 5 0 019.9-2A4 4 0 1117 16H7z"
        />
      </svg>
      <p className="text-gray-600">
        Drag & drop files here, or{" "}
        <span className="text-blue-500 underline">browse</span>
      </p>
      {files.length > 0 && (
        <ul className="mt-3 text-sm text-gray-700">
          {files.map((file, i) => (
            <li key={i}>{file.name}</li>
          ))}
        </ul>
      )}
    </div>
  );
}
