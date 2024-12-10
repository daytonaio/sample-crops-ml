<!-- This repository contains a README file sample for Daytona Samples and the MIT License.

It can be used as a template to create sample repositories that can be added into [Daytona](https://github.com/daytonaio/daytona).

Once you finish your sample and it gets merged, you can open a PR in the Daytona repo and submit the sample into the [index file](https://github.com/daytonaio/daytona/blob/main/hack/samples/index.json). -->

# <p align="center">TerraGrow: Grow Smart, Plant Right</p>

## Sample Machine Learning for Crop Growth 

## Overview
TerraGrow is an intelligent web app that uses a Random Forest model for crop recommendations and the Llama3-8b-8192 model from Groq to suggest yield improvement strategies. By analyzing factors like nitrogen (N), phosphorus (P), potassium (K), temperature, humidity, and pH, it provides data-driven insights to help farmers optimize planting decisions and achieve higher yields.


# Dataset 
[Crop Recommendation Dataset](https://www.kaggle.com/datasets/atharvaingle/crop-recommendation-dataset) is being used for this project. You can get this dataset from kaggle.

## ✨ Features  

<!-- List of sample features (e.g. realtime chat app, standardized development environment with devcontainers) -->
- **Smart Crop Recommendations**  
  Utilizes Random Forest models to suggest the best crops based on environmental data like NPK levels, temperature, humidity, and pH.

- **Yield Improvement Suggestions**  
  Powered by the Llama3-8b-8192 model from Groq, it provides actionable strategies to boost crop yield, such as nutrient adjustments and irrigation optimization.

- **User-Friendly Interface**  
  Offers an intuitive platform for inputting data and accessing tailored recommendations effortlessly.

- **Precision Agriculture Made Simple**  
  Enhance efficiency and sustainability by aligning crop choices and yield strategies with specific conditions.

## Demo
<video src="https://github.com/user-attachments/assets/9c0cd84e-a9d7-4786-8ed4-a6ad8abd4f90"></video>

## 🚀 Getting Started  

### Open Using Daytona  

1. **Install Daytona**: Follow the [Daytona installation guide](https://www.daytona.io/docs/installation/installation/).  
2. **Create the Workspace**:  
   ```bash  
   daytona create https://github.com/Subash-Lamichhane/TerraGrow-daytona
   ```  

3. **Add 3000 as forwarded ports.**
3. **Set up the environment variables by creating a ```.env``` file in the backend directory and add given details:**: 
   ```bash  
   PORT=3000
   GROQ_API_KEY=<YOUR_GROQ_API_KEY>
   ```  

4. **Start the Application**:  
   Navigate to backend folder 
      ```bash  
      npm start
      ```  
   Navigate to frontend folder 
      ```bash  
      npm run dev
      ```  



## Screenshots

Landing Page:
![Landing1](https://github.com/user-attachments/assets/9d3c0da3-c14a-4c71-8af9-c40c8aa71f6b)

Home Page:
![Usage](https://github.com/user-attachments/assets/22574a79-71ca-4eed-af90-d2a46475ff7c)

## Technologies Used

- **Daytona**: Development environment manager.  
- **React**: Frontend library for building user interfaces.  
- **Vite**: Fast frontend build tool.  
- **Tailwind CSS**: Utility-first CSS framework.  
- **Express**: Backend framework for APIs.  
- **Groq API**: Fast AI interface.
- **python-shell**: Run Python scripts from Node.js.  
- **Scikit-learn**: Machine learning library for Python.  

