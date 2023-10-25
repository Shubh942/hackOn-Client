# \*Delta

## Problem Statement

In the rapidly evolving landscape of streaming entertainment, Amazon's Fire TV is faced with a multifaceted challenge: ensuring an optimal user experience amidst an abundance of content. This challenge encompasses several critical issues:

- Content Overload: Fire TV users often find themselves overwhelmed by the sheer volume of content choices available, leading to decision fatigue and difficulty in choosing what to watch.

- Relevance: Users frequently encounter content recommendations that don't align with their preferences, resulting in a disjointed viewing experience.

- Location Sensitivity: Content availability and relevance vary by location, necessitating tailored recommendations that cater to different user locales.

- Family-Friendly Viewing: Families require filtering options to access age-appropriate content, ensuring a safe and enjoyable experience for all members.

- Monetization: Amazon seeks to boost revenue through subscriptions and partnerships, requiring effective content recommendations that not only engage users but also drive revenue.

## Solution Implemented

We've developed a comprehensive set of features within the Delta system to address these challenges and enhance the Fire TV content discovery experience:

- [x] Watch History: Users can easily keep track of their viewing history, reducing content overload by providing quick access to previously watched content.

- [x] Recommendations Based on User History: Delta leverages user watch history to offer personalized content recommendations, ensuring that users discover content that aligns with their preferences.

- [x] Recommendations Based on Cart Contents: For users who shop on Amazon, Delta uses items added to the cart to suggest relevant movies and shows, enhancing the content discovery process.

- [x] Watch Parties: Delta enables users to stream movies and videos with friends and family by creating virtual rooms, enhancing the social aspect of entertainment.

With these features, Delta not only addresses the core problems of content overload, relevance, location sensitivity, and family-friendliness but also contributes to Amazon's monetization goals by enhancing content discovery and user engagement.

## Technology used

- Javascript
- CSS
- SCSS
- React.js
- Flask
- PyTorch
- SKlearn

## Scalability

- Backend Scalability: Node.js, Flask, and Django are known for their scalability. They can handle increased user loads and traffic with appropriate server and database optimization.

- Containerization: Docker and Kubernetes provide containerization and orchestration capabilities, enabling easy horizontal scaling to handle higher user demand.

- Machine Learning: Scalability in machine learning depends on model architecture and training infrastructure. Distributed training with TensorFlow and PyTorch can enhance scalability.

- Database Scaling: MySQL and MongoDB can scale, but it's important to design the database schema and queries for efficient scaling as the dataset grows.

## Architecture Diagram
![image](https://github.com/rajutkarsh07/hackOn-Client/assets/49344502/55718333-96e2-4720-bc0a-b104fe2c8ef5)

## Flow Chart
![image](https://github.com/rajutkarsh07/hackOn-Client/assets/49344502/77a17ced-77ca-43d0-90fe-a942e6257095)

## Futute Scope
- [ ]  AI Advancements: Leveraging advanced AI for even more precise content recommendations.

- [ ]  Expanded Device Compatibility: Extending the solution to work on various devices beyond Fire TV.

- [ ]  Global Expansion: Expanding the platform to serve a global audience with localized content and features.

- [ ]  VR and AR Integration: Incorporating virtual and augmented reality for immersive content experiences.

- [ ]  AI Chatbots: Implementing AI chatbots for user assistance and engagement.

- [ ]  User-Generated Content: Allowing users to contribute and share their own content recommendations.

### Installation

To install the project, first make sure you have Node.js and npm installed on your system. Then, clone the repository and run the following command:

first Fork this repo or directly clone this repo
```
git clone https://github.com/<username>/hackOn-Client.git
```

go to the project repository
```
cd hackOn-Client
```

Install all the required dependencies.
```
npm i 
```

### Usage

To run the project, use the following command:

```
npm run dev
```

This will start a development server, and you will be able to view the website on your browser at http://localhost:5173.

### Installation of ML Model
First go to https://github.com/soham2312/recommendation

clone this repo using the command

```
git clone https://github.com/<username>/recommendation.git
```

go to the project repository
```
cd recommendation
```

install all the dependencies
```
pip install -r .\requirements.txt
pip install flask_cors
pip install scikit-learn
```

Now go to each of the directories and run the python file in each directory
```
cd Average Weights
python average_weighting.py
```

```
cd Cart Recommendation
python cart_recommendation.py
```

```
cd Collaborative Filtering
python collaborative_filtering.py
```

Now the ML model is ready for use
