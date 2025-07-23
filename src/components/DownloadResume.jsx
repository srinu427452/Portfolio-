import React from 'react';
import { Download } from 'lucide-react';

const DownloadResume = () => {
  //  const handleDownload = async () => {
  //   try {
  //     const response = await fetch('/srinuResume.pdf');
  //     if (!response.ok) {
  //       throw new Error('File not found');
  //     }
  //     const blob = await response.blob();
  //     const url = window.URL.createObjectURL(blob);
  //     const link = document.createElement('a');
  //     link.href = url;
  //     link.download = 'srinuResume.pdf';
  //     document.body.appendChild(link);
  //     link.click();
  //     document.body.removeChild(link);
  //     window.URL.revokeObjectURL(url);
  //   } catch (error) {
  //     console.error('Download failed:', error);
  //     alert('Resume file not found. Please contact the site administrator.');
  //   }
  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = '/srinuResume.pdf';
    link.download = 'srinuResume.pdf';
    link.target = '_blank';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="flex justify-center items-center p-4 h-100" id="Resume">
      <div className="button-bg rounded-full p-0.5 hover:scale-105 transition duration-300 active:scale-100">
        <button
          onClick={handleDownload}
          className="
            group relative overflow-hidden
            flex items-center gap-3 px-8 py-3
            text-white
            rounded-full font-medium text-lg
            transition-all duration-300 ease-out
            bg-sky-500 hover:bg-sky-700
            active:scale-95
            w-full
          "
        >
          <Download
            className="
              w-5 h-5 
              transition-transform duration-300 
              group-hover:translate-y-[-2px] group-hover:scale-110
            "
          />
          Download Resume

          {/* Inner shimmer effect */}
          <div
            className="
              absolute inset-0 
              bg-gradient-to-r from-transparent via-white/10 to-transparent 
              transform -translate-x-full
              group-hover:translate-x-full
              transition-transform duration-700 ease-out
              rounded-full
            "
          />
        </button>
      </div>
    </div>
  );
};

export default DownloadResume;
