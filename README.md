## Step by step to install store-data library of mfe
- setup config with .npmrc file
```
registry=https://mfe-portfollio-704970334544.d.codeartifact.ap-southeast-1.amazonaws.com/npm/npm-store/
//mfe-portfollio-704970334544.d.codeartifact.ap-southeast-1.amazonaws.com/npm/npm-store/:always-auth=true
//mfe-portfollio-704970334544.d.codeartifact.ap-southeast-1.amazonaws.com/npm/npm-store/:_authToken={aws_artifact_auth_token}
```
- config iam account, be like "aws configured"
+  note: if that command returned error : you should used npm login to login in repository codeArtifact
  ```
  - npm login -> login with aws iam account (user name and secret key with that IAM account)
  - login success -> using this command to get token:

  aws codeartifact login  --tool npm --domain mfe-portfollio --domain-owner 704970334544  --repository npm-store --region ap-southeast-1
  aws codeartifact get-authorization-token --domain mfe-portfollio --domain-owner 704970334544 --query authorizationToken --output text
  ```
- get token -> copy token to .npmrc auth token variable
- install {aws_library} in your codeArtifact library from domain (example: npm install @ng-mf/store-data@0.0.1)
