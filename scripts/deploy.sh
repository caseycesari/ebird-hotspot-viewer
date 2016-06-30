#!/bin/bash

# Deploy the app to S3

set -e
set -x

AWS_ACCESS_KEY_ID=$AWS_ACCESS_KEY_ID \
AWS_SECRET_ACCESS_KEY=$AWS_SECRET_ACCESS_KEY \
aws s3 sync ./dist s3://ebird-hotspot-viewer --acl public-read
