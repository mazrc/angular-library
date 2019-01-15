# Adding a component to reusable library
a. Generate a new component in our library.
b. Add the component to our library module’s exports.
c. Add the component to our entry file.
d. Rebuild our library after we make changes to it.

# Steps to Create a Library Project
1. Create Angular Workspace
ng new objexlib --createApplication=false
Pick defaults when asked 

2. Generate Library inside the workspace
ng generate library objex-lib --prefix=objex
This adds a projects directory containing a objex-lib directory for our newly generated objex-lib Angular Library.

## Generating a library module
ng generate component login --project=objex-lib
It will add new component to projects → objet-lib → src → lib → login
Include new component to objet-lib.module.ts exports

Add the new component to the entry file
projects\objex-lib\src\public_api.ts
Add new line:
export * from './lib/login/login.component';

3. Tester application
ng generate application objex-tester
Generates the test application

4. Library and tester app package scripts
    "build_lib": "ng build objex-lib",
    "npm_pack": "cd dist/objex-lib && npm pack",
    "package": "npm run build_lib && npm run npm_pack"

5. Testing
ng test objex-lib

6. Publish to npm 
a. Signup with npm
b. npm login <- use your credentials
c. npm publish ./dist/objex-lib/objex-lib-<version>.tgz