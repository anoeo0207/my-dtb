import React, { useState } from "react";

function ImagePreviewer() {
    const [file, setFile] = useState<string | null>(null);
    const [error, setError] = useState<string | null>(null);

    function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
        const selectedFile = e.target.files?.[0]; 

        if (selectedFile) {
            // Kiểm tra định dạng file
            const validImageTypes = ['image/jpeg', 'image/png', 'image/gif', 'image/webp'];
            if (!validImageTypes.includes(selectedFile.type)) {
                setError("Please select a valid image file (JPEG, PNG, GIF, or WEBP).");
                setFile(null); // Đặt lại file nếu không hợp lệ
            } else {
                const fileURL = URL.createObjectURL(selectedFile);
                setFile(fileURL);
                setError(null); // Xóa lỗi nếu file hợp lệ
            }
        }
    }

    return (
        <div className="App">
            {error && <p className="text-red-500">{error}</p>} {/* Hiển thị thông báo lỗi */}
            {file && <img src={file} alt="Selected" className="w-80 h-80 rounded-full object-cover border border-black" />} 
            <div className="flex justify-center">
                <input type="file" onChange={handleChange} className="pt-4" />
            </div>
        </div>
    );
}

export default ImagePreviewer;
