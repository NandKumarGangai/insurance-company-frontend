# insurance-company-frontend

### This react app is deployed on github pages.
Live: https://nandkumargangai.github.io/insurance-company-frontend/.

The corresponding backend project code is available at https://github.com/NandKumarGangai/insurance-company-backend.
 

## STEPS TO RUN PROJECT LOCALLY
1. Clone a project using `git clone https://github.com/NandKumarGangai/insurance-company-frontend.git`.
2. Navigate to `client` directory.
3. Run `npm install` in server directory.
4. To run project in development mode run `npm run start`.
5. To run project in production mode run `npm run build` and then `npm run start`.
6. App will run on `http:localhost:3000`.

#### Note: If you run the project as it is, the API calls will be called to node server which is deployed on heroku.
#### If you want to run the project using local node server then follow below steps
1. navigate to `client\src\ServiceCalls\index.js`.
2. Update variable `HOST` to `http://localhost:4000/api/v1`.
