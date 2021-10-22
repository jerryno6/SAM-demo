# SAM-demo

- You need to have an account on aws.
- You need to create a S3 bucket manually on aws named: vuleartifacts-for-lambda

```
git clone 

cd ./src/sam-library-lambda

sam package -t sam-template.yaml --s3-bucket vuleartifacts-for-lambda --output-template-file sam-output-template.yaml

sam deploy -t sam-output-template.yaml --stack-name vule-sam-demo --capabilities CAPABILITY_IAM