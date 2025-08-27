export default function FileUpload({ className, classLabel, label, value, onChange }) {
  const handleDrop = (e) => {
    e.preventDefault();
    if (e.dataTransfer.files.length > 0) {
      onChange(e.dataTransfer.files[0]); // send file to parent
    }
  };

  const handleFileChange = (e) => {
    if (e.target.files.length > 0) {
      onChange(e.target.files[0]); // send file to parent
    }
  };

  return (
    <div>
      <label htmlFor="fileInput" className={classLabel}>{label}</label>
      <div
        onClick={() => document.getElementById("fileInput").click()}
        onDragOver={(e) => e.preventDefault()}
        onDrop={handleDrop}
        className={className}
      >
        <input
          id="fileInput"
          type="file"
          accept=".pdf"   // ✅ only allow PDF
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

        {/* ✅ Show selected file from parent */}
        {value && (
          <p className="mt-3 text-sm text-gray-700">{value.name}</p>
        )}
      </div>
    </div>
  );
}
