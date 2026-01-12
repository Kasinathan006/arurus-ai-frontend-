# 🐳 Docker Setup for AURAS AI Frontend

This document guides you through running the AURAS AI Frontend using Docker and Docker Compose.

## **Prerequisites**
- Docker Desktop installed and running.

## **Files Created**
- `Dockerfile`: Multi-stage build (Node.js -> Nginx) for production-optimize image.
- `nginx.conf`: Nginx configuration for single-page application (SPA) routing and API proxying.
- `docker-compose.yml`: Orchestration file to run the frontend and mock backend services.

## **Quick Start**

### **1. Build and Run**
Run the following command in the `frontend` directory:

```bash
docker-compose up --build
```

### **2. Access the Application**
Open your browser and navigate to:
- **Frontend:** http://localhost:5173
- **Port Mapping:** The frontend container runs on Port 80, mapped to Host Port 5173.

## **Configuration Details**

### **Dockerfile**
- **Stage 1 (Build):** Uses `node:20-alpine` to install dependencies and run `npm run build`.
- **Stage 2 (Serve):** Uses `nginx:alpine` to serve the static files from `dist/`.

### **Environment Variables**
- `VITE_API_URL`: Points to the Nginx Gateway (default: `http://gateway:80`).
- Unlike local dev where `.env` is used, Docker uses the `environment` block in `docker-compose.yml`.

### **Networking**
- All services join the `auras-network` bridge network.
- Frontend communicates with backend services via service names (e.g., `http://gateway`).
