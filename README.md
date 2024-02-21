# Profile BE

## Testing

```bash
npm test
```

## Local Run

```bash
npm install && npm start
```

## Deployment

For Serverless deployment via AWS Lambda checkout branch - serverless-deployment

```bash
//Install serverless framework
npm install -g serverless

//configure serverless framework setup, select Express-API, configure AWS credentials with IAM access key and secret
serverless 

//update the mongodb connection in .env and deploy
serverless deploy
```
