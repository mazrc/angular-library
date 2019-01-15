# Angular Library
1. Create Angular Workspace
ng new objexlib --createApplication=false

Pick defaults when asked 

2. Generate Library inside the workspace
ng generate library objex-lib --prefix=objex

This adds a projects directory containing a objex-lib directory for our newly generated objex-lib Angular Library.

## Generating a library module
ng generate component login --project=objex-lib

It will add new component to projects → objet-lib → src → lib → login

Add new component to objet-lib.module.ts exports

Adding the component to the entry file
projects\objex-lib\src\public_api.ts
Add new line:
export * from './lib/login/login.component';

3. Tester application
ng generate application objex-tester

Generates the test application

4. Builds library
ng build objex-lib OR
ng build objex-lib --watch <- to increment lib version

5. Build tester app
ng build objex-tester --prod
ng serve objex-tester

6. Testing
## Library
ng test objex-lib

## Use new library component
a. Generate a new component in our library.
b. Add the component to our library module’s exports.
c. Add the component to our entry file.
d. Rebuild our library after we make changes to it.
e. Use the new component in our application