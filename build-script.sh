
#!/bin/bash
echo "build starting"
npm install
cd frontend
npm install
npm run build
echo "build done"