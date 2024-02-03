import { useState } from 'react';

export default function FileUploadPreview() {
    const [previewSrc, setPreviewSrc] = useState<string>('');
    const [isPDF, setIsPDF] = useState<boolean>(false);

    const handleFileChange = (event: any) => {
        const file = event.target.files?.[0];
        if (!file) {
            console.log("No file selected.");
            return;
        }

        setIsPDF(file.type === 'application/pdf');

        const reader = new FileReader();
        reader.onload = (e: ProgressEvent<FileReader>) => {
            if (e.target?.result) {
                setPreviewSrc(e.target.result as string);
            }
        };

        reader.onerror = (e) => {
            console.error("Error reading file", e);
        };

        reader.readAsDataURL(file);
    };

    return (
        <div className="text-left">
            <input 
                type="file" 
                accept="image/*,application/pdf" 
                onChange={handleFileChange} 
                className="" 
            />
            {previewSrc && (
                isPDF ? 
                <iframe src={previewSrc} className="mt-4 w-full h-96" title="PDF Preview"></iframe> : 
                <img src={previewSrc} alt="Preview" className="mt-4" />
            )}
        </div>
    )
};


