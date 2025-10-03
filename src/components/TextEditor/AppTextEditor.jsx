import TextEditor from "./textEditor";
import { useState, useMemo } from "react";
function AppTextEditor() {
  const [desc, setDesc] = useState(null); 

  return (
    <>
      <TextEditor setDesc={setDesc} />
    </>
  );
}

export default AppTextEditor;