#!/bin/bash

# Colors for output
GREEN='\033[0;32m'
BLUE='\033[0;34m'
RED='\033[0;31m'
NC='\033[0m' # No Color

echo -e "${BLUE}Starting deployment process...${NC}"

# Check if Firebase CLI is installed
if ! command -v firebase &> /dev/null; then
    echo -e "${RED}Firebase CLI is not installed. Installing...${NC}"
    npm install -g firebase-tools
fi

# Build the Next.js application
echo -e "${BLUE}Building the Next.js application...${NC}"
npm run build

if [ $? -ne 0 ]; then
    echo -e "${RED}Build failed${NC}"
    exit 1
fi

# Login to Firebase (if not already logged in)
echo -e "${BLUE}Checking Firebase login status...${NC}"
firebase login

# Deploy to Firebase
echo -e "${BLUE}Deploying to Firebase...${NC}"
firebase deploy --only hosting

if [ $? -ne 0 ]; then
    echo -e "${RED}Deployment failed${NC}"
    exit 1
fi

echo -e "${GREEN}Deployment completed successfully!${NC}"