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



## my portfollio mfe architecture 


![alt text](https://github.com/ducknem2086/mfe-nx-angular/blob/master/apps/dashboard/public/img.png "mfe.img")





# error when implemented lib store - how to fix : 
```
  apps_remote_1_src_ap…ntry_routes_ts.js:1 ERROR Error: The injectable 'Di' needs to be compiled using the JIT compiler, but '@angular/compiler' is not available.
  
  The injectable is part of a library that has been partially compiled.
  However, the Angular Linker has not processed the library such that JIT compilation is used as fallback.
  
  Ideally, the library is processed using the Angular Linker to become fully AOT compiled.
  Alternatively, the JIT compiler should be loaded by bootstrapping using '@angular/platform-browser-dynamic' or '@angular/platform-server',
  or manually provide the compiler with 'import "@angular/compiler";' before bootstrapping.
      at 2318 (page1.ts:6:25)
```
-> lỗi này là có thể do 2 case sau :
- import thư viện nhưng thư viện không đọc được
- import thư viện nhưng trỏ sai path
