import React, { useRef, useState, useEffect } from "react";

export default function UseRefHook() {
  // eg1
  const inputRef = useRef();

  const focusInput = () => {
    inputRef.current.focus();
  };
  //   eg2
  const [sec, setSec] = useState(0);
  const intervalRef = useRef();

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setSec((prev) => prev + 1);
    }, 1000);
    return () => clearInterval(intervalRef.current);
  }, []);

  //eg3

  const [newImage, setNewImage] = useState(true);
  const [imgURL, setImgURL] = useState("");
  const imgRef = useRef(0);

  const handleImage = (e) => {
    const file = e.target.files[0];
    if (file) {
      const preview = URL.createObjectURL(file);
      setImgURL(preview);
      setNewImage(false);
    }
  };

  return (
    <div>
      {/* eg2 */}
      <div>
        <input type="text" placeholder="Enter your name" ref={inputRef} />
        <button onClick={focusInput}>Focus input</button>
      </div>
      {/* eg2 */}
      <div>
        <p>Timer:{sec}</p>
        <button onClick={() => clearInterval(intervalRef.current)}>Stop</button>
      </div>
      {/* eg3 */}

      <input
        type="file"
        ref={imgRef}
        hidden
        accept="image/*"
        onClick={handleImage}
      />
      {newImage ? (
        <div className="img-container" onClick={() => imgRef.current.click()}>
          upload image
        </div>
      ) : (
        <img className="Image-container" src={imgURL} />
      )}
    </div>
  );
}
