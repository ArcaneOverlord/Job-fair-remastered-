function Submit({ id, classinput, value }) {
  return (
    <div>
      <button
        type="submit"
        id={id}
        className={`
          cursor-pointer 
          bg-[#06B6D4] dark:bg-[#0B7B8C] w-35 min-h-10 rounded-2xl text-black dark:text-white mt-2 ${classinput}`}
      >
        {value}
      </button>
    </div>
  );
}

export default Submit;