import React, { useRef } from 'react';
import { toPng } from 'html-to-image';

const ExportPage = () => {
  const exportRef = useRef(null);

  const handleExport = () => {
    if (exportRef.current) {
      toPng(exportRef.current)
        .then((dataUrl) => {
          const link = document.createElement('a');
          link.download = 'witness-wave-map.png';
          link.href = dataUrl;
          link.click();
        })
        .catch((err) => {
          console.error('Export failed:', err);
        });
    }
  };

  return (
    <div>
      <div ref={exportRef} style={{ height: '500px', width: '100%', background: 'gray' }}>
        {/* Put the map or stats here */}
        Exportable Map/Stats Preview
      </div>
      <button onClick={handleExport}>Export as PNG</button>
    </div>
  );
};

export default ExportPage;
