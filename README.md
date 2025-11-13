
#  Node.js Web App Deployment on Kubernetes (Minikube)

This project demonstrates how to **containerize a Node.js web application** using **Docker** and deploy it on a **Kubernetes cluster (Minikube)**.  
At the end, you can access the deployed app.

---

##  Project Structure

```
NODE-JS-WEB-APP/
│
├── app/
│   ├── package.json
│   └── server.js
│
├── k8s/
│   ├── deployment.yaml
│   ├── service.yaml
│   └── ingress.yaml
│
├── Dockerfile
└── README.md
```

---

##  Prerequisites

Before you begin, ensure the following are installed:

- [Node.js](https://nodejs.org/en/download/)
- [Docker Desktop](https://www.docker.com/products/docker-desktop/)
- [Minikube](https://minikube.sigs.k8s.io/docs/start/)
- [Kubectl](https://kubernetes.io/docs/tasks/tools/)
- [Visual Studio Code](https://code.visualstudio.com/)

---

##  Step 1: Application Code
**File:** `app/server.js`
**File:** `app/package.json`


---

##  Step 2: Dockerfile
**File:** `Dockerfile`

### 🔹 Build the Docker Image

```bash
docker build -t node-js-webapp:latest .
```

### 🔹 Test Locally

```bash
docker run -d -p 8080:8080 node-js-webapp:latest
```

Visit [http://localhost:8080](http://localhost:8080)

---

##  Step 3: Deploy to Minikube

### 1️⃣ Start Minikube
```bash
minikube start
```

### 2️⃣ Build Docker Image inside Minikube
```bash
minikube -p minikube docker-env --shell powershell | Invoke-Expression
docker build -t node-js-webapp:latest .
```

### 3️⃣ Load Image into Minikube
```bash
minikube image load node-js-webapp:latest
```

---

##  Step 4: Kubernetes Deployment Files

**File:** `k8s/deployment.yaml`


### Deploy to Kubernetes

```bash
kubectl apply -f k8s/deployment.yaml
kubectl apply -f k8s/service.yaml
```

### Verify Deployment

```bash
kubectl get pods
kubectl get svc
```

### Access Your App

```bash
minikube service node-js-webapp-svc
```

Your app will open in a browser.  
**Example:** [http://127.0.0.1:55777](http://127.0.0.1:55777)

---

## 🌐 Clickable Deployment Link

✅ **Live Deployment (Local Minikube)** → [http://127.0.0.1:55777](http://127.0.0.1:55777)

![Deployed](deployment%20website.jpg)

---

## 🧾 Summary

| Step | Description |
|------|--------------|
| 1️⃣ | Write Node.js App |
| 2️⃣ | Create Dockerfile |
| 3️⃣ | Build Docker Image |
| 4️⃣ | Deploy to Kubernetes |
| 5️⃣ | Access App via Minikube |

---

## 👩‍💻 Author

**Sefali Sharon Sabnam**
