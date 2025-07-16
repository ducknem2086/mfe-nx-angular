## Step by step to install store library of mfe
- setup config with .npmrc file
```
registry=https://mfe-portfollio-704970334544.d.codeartifact.ap-southeast-1.amazonaws.com/npm/npm-store/
//mfe-portfollio-704970334544.d.codeartifact.ap-southeast-1.amazonaws.com/npm/npm-store/:always-auth=true
//mfe-portfollio-704970334544.d.codeartifact.ap-southeast-1.amazonaws.com/npm/npm-store/:_authToken={aws_artifact_auth_token}
```
- config iam account, be like "aws configured"
- login aws code artifact with your aws iam, then get token
```
aws codeartifact get-repository-endpoint 
--domain my_domain
--domain-owner 111122223333
--repository my_repo --format npm
```
- get token -> copy token to .npmrc auth token variable
- install {aws_library} in your codeArtifact library from domain (example: npm install @ng-mf/store-data@0.0.1)
