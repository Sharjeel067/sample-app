echo "Starting Next.js development server..."

# Check if node_modules exists, if not, run npm install
if [ ! -d "node_modules" ]; then
  echo "node_modules directory not found. Running npm install..."
  npm install
  if [ $? -ne 0 ]; then
    echo "npm install failed. Please check for errors and try again."
    exit 1
  fi
fi

# Run the Next.js development server
npm run dev


echo "Next.js development server started. You can access it at http://localhost:3000"

exit 0