import React, { useCallback } from 'react';
import { useDropzone } from 'react-dropzone'

const DropZone = () => {
  const maxSize = 1048576;

  const onDrop = useCallback(acceptedFiles => {
    console.log(acceptedFiles);
  }, []);

  const { isDragActive, getRootProps, getInputProps, isDragReject, acceptedFiles, rejectedFiles } = useDropzone({
    onDrop,
    accept: 'image/png',
    minSize: 0,
    maxSize,
  });

  const isFileTooLarge = rejectedFiles?.length > 0 && rejectedFiles[0]?.size > maxSize;

 return (
  <div className="container text-center mt-5">
    {/* Основная зона для drag-and-drop */}
    <div {...getRootProps()} className="dropzone">
      <input {...getInputProps()} />
      {!isDragActive && 'Click here or drop a file to upload!'}
      {isDragActive && !isDragReject && "Drop it like it's hot!"}
      {isDragReject && "File type not accepted, sorry!"}
    </div>
    
    {/* Вывод ошибок ВНЕ зоны dropzone */}
    {isFileTooLarge && (
      <div className="text-danger mt-2">
        File is too large.
      </div>
    )}
  </div>
);
};

export default DropZone;