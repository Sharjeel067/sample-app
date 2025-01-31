export GOOGLE_CLOUD_PROJECT="rabbito-dev"

gcloud config set project $GOOGLE_CLOUD_PROJECT
gcloud config set run/region us-south1

# Build the application using Buildpacks
gcloud builds submit --pack image=gcr.io/$GOOGLE_CLOUD_PROJECT/rabbito-web-dev-test

# Deploy the built image to Cloud Run
gcloud run deploy rabbito-web-dev-test \
--image gcr.io/$GOOGLE_CLOUD_PROJECT/rabbito-web-dev-test \
--service-account=deployment@rabbito-dev.iam.gserviceaccount.com \
--region=us-south1 \
--platform=managed \
--allow-unauthenticated \
--cpu=1 \
--memory=512Mi