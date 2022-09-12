# Webb21-cms: Headless CMS with Wordpress.com and Next.js Frontend

## 1. Import the project's repository into your own GitHub repository
1. Create a new repository in your GitHub profile.
    - Give the new repository a name (doesn't matter what name)
    - You can choose to keep it Public or Private (doesn't matter)
    - Click the ***Create repository** button
    ![Create github repository](/readme-images/1-1.jpg)
2. In the next screen, click the ***Import code*** button
![Import project to Github repository](/readme-images/1-2.jpg)
3. Paste the url of the project's repository: https://github.com/panosjapan7/headless-cms-wordpress and click the button ***Begin import*** .
![Import project to Github repository](/readme-images/1-3.jpg)
4. After the import is complete, click the url at the bottom to navigate to your new repository, (which now contains all the code from the https://github.com/panosjapan7/headless-cms-wordpress repository)
![Import project to Github repository](/readme-images/1-4.jpg)
** **
## 2. Clone your GitHub repository to your local drive
1. Click the button ***Code*** and from the dropdown content, click the ***copy icon*** to copy the url of your repository.
![Import project to Github repository](/readme-images/2-1.jpg)
2. Open the terminal in your computer, navigate to the folder you want to download your GitHub repository into and ***Run:*** `git clone your-GitHub-repository-url`
![Import project to Github repository](/readme-images/2-2.jpg)
3. Open the project you just cloned with your IDE.
![Import project to Github repository](/readme-images/2-3.jpg)
4. Open the terminal (you can open the terminal in your IDE too) and make sure you navigate inside the folder of your project. Then **Run:** `npm install`
    ![Import project to Github repository](/readme-images/2-4.jpg)
    *(You should see the folder **node_modules** created after installation completes)*
    ![Import project to Github repository](/readme-images/2-4b.jpg)
** **
## 3. Create and set up the environment variable
1. Create a **.env.local** file <ins>at the root of the project<ins>.
2.  In **.env.local**, create a variable called **NEXT_PUBLIC_API_URL** and give it the value "https://public-api.wordpress.com/rest/v1.1/sites/**your-wordpress-com-website-url"** (see **.env-example** file).
    ![Import project to Github repository](/readme-images/3-2.jpg)
    - *The .env.local file will **not** be uploaded to your GitHub repository for security reasons.*
    - *We don't need to add any other variables to the* **.env.local** *file because the rest of our sensitive data (ie login credentials) is stored in the Wordpress.com server.*
** **
## 4. Run your local Next.js project
1. In your terminal (*while inside the root of your project folder*), ***Run:*** `npm run build` 
![Import project to Github repository](/readme-images/4-1.jpg)
2. After `npm run bild` finishes successfully, **Run:** `npm run dev`
![Import project to Github repository](/readme-images/4-2.jpg)
3. You should now be able to see your WordPress.com content displayed on the ***local url***
![Import project to Github repository](/readme-images/4-3.jpg)
** **
## 5. Update the project's data
1. As an example, open the file ***pages > about.js*** and add your name to the text of the **p tag**
![Import project to Github repository](/readme-images/5-1.jpg)
2. Check your local Next.js project's ***About*** page and see the change you just made.
![Import project to Github repository](/readme-images/5-2.jpg)
** **
## 6. Push the updated file(s) to your GitHub repository
1. In your terminal (*while inside the root of your project folder*):
    - ***Run:*** `git add .`
    - ***Run:*** `git commit -m "description of what the code this commit does"`
    - ***Run:*** `git push`
    ![Import project to Github repository](/readme-images/6-1.jpg)
2. The updated file(s) of your local Next.js project should have been pushed to your GitHub repository now.
![Import project to Github repository](/readme-images/6-2.jpg)
** **
## 7. Deploy your GitHub Next.js project to Vercel
1. Create an account on [Vercel.com](https://vercel.com) (it's free) and log in.
2. Connect your GitHub account to Vercel so you can access your GitHub repositories from Vercel. 
3. In [Vercel's Overview page](https://vercel.com/dashboard), click the ***Add New...*** button and choose ***Project***.
4. In the ***Import Git Repository*** section in the next screen, find the project's GitHub repository and click ***import***.
![Import project to Github repository](/readme-images/7-4.jpg)
5. In the ***Configure Project*** section in the next screen, toggle the ***Environment Variables*** to open and create an environment variable by adding **NEXT_PUBLIC_API_URL** in the ***NAME*** field and the url ( https://public-api.wordpress.com/rest/v1.1/sites/**your-wordpress-com-website-url** ) in the ***VALUE*** field, creating this way an environment variable of the same name and value as the one in your Next.js project.
![Import project to Github repository](/readme-images/7-5.jpg)
6. Click the ***Deploy*** button.
7. Your Next.js website should now be deployed online, showing the contents of your WordPress.com website.
![Import project to Github repository](/readme-images/7-7.jpg)
** **
## 8. Creating and adding new posts to your deployed project 
1. If you want to create a new post, simply go to your WordPress.com website and create it by using the WordPress.com editor. The new post will appear on your Next.js app.
2. If you want to make changes to your Next.js app, make the changes in your local Next.js app project and push them to your GitHub repository the way you did in **steps 5 and 6** . Vercel will automatically update the deployed Next.js app with the new changes.
