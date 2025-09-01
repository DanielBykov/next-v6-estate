// listFiles.js
const fs = require('fs');
const path = require('path');

const folderPath = './pixels-photo-manual'; // Change to your folder path

fs.readdir(folderPath, (err, files) => {
  if (err) {
    console.error('Error reading folder:', err);
    return;
  }
  // Filter out directories, only include files
  const fileNames = files.filter(file =>
    fs.statSync(path.join(folderPath, file)).isFile()
  );
  console.log('[' + fileNames.map(f => `"${f}"`).join(', ') + ']');
});
