# LLM Harms Analysis Platform

This repository contains the source code for the **LLM Harms Analysis Platform**, a web application that evaluates the impact of large language models (LLMs) on the propagation of harmful speech in online forums. The platform allows users to compare LLM-generated content against real-world forum messages, analyzing attributes like toxicity, identity attacks, and extremism.

### Live Demo
[LLM Harms Analysis Platform](https://llm-harms.vercel.app/)

---

## Table of Contents

* [Overview](#overview)
* [Features](#features)
* [Tech Stack](#tech-stack)
* [License](#license)

---

## Overview

The **LLM Harms Analysis Platform** allows users to:
* Compare original forum messages with LLM-generated responses based on key attributes such as **toxicity**, **identity attack**, **threat**, and **profanity**.
* Experiment with different prompts (neutral, context-sensitive, and escalating) to understand how LLMs can respond to real-world hate speech.
* Visualize comparative scores to understand how LLM-generated content amplifies or mitigates harmful speech.

This platform analyzes the outputs of multiple LLMs, including **Mistral-7B**, **Mixtral**, **Gemma-7B**, and **Qwen-1.5**, among others.

---

## Features

* **Toxicity Analysis**: Compare original and LLM-generated messages based on Perspective API scoring attributes.
* **Prompt Engineering**: Test different prompt types (neutral, context-sensitive, and escalating) to see how they affect LLM behavior.
* **LLM Support**: Multiple models, including open-source LLMs, are integrated for diverse experimentation.

---

## Tech Stack

### Frontend:
* **Next.js**: A React-based framework for server-side rendering and static site generation.
* **Tailwind CSS**: A utility-first CSS framework for building responsive and modern UI components.

### Backend:
* **FastAPI**: A modern, fast (high-performance) web framework for building APIs with Python 3.7+ based on standard Python type hints.
* **Together AI**: The ML backend that provides the LLM models for generating responses.

### Deployment:
* **Vercel**: Frontend deployment for Next.js.
* **Koyeb**: Backend deployment for FastAPI services.

---

## Frontend Setup

1. **Install Dependencies:**

   Navigate to the `frontend` directory and install the required dependencies using `npm`:

   ```bash
   cd frontend
   npm install
   ```

2. **Configure Environment Variables:**

   Create a `.env.local` file in the `frontend` directory and add the necessary API keys and configurations (e.g., for Vercel deployment, external services, etc.).

3. **Run Locally:**

   Start the Next.js development server:

   ```bash
   npm run dev
   ```

   The application will be running on `http://localhost:3000`.

---

## Backend Setup

1. **Install Dependencies:**

   Navigate to the `backend` directory and install the dependencies using `pip`:

   ```bash
   cd backend
   pip install -r requirements.txt
   ```

2. **Run the Backend Locally:**

   Start the FastAPI server locally:

   ```bash
   uvicorn api.main:app --reload
   ```

   The API will be running on `http://localhost:8000`.

3. **Set Up ML Models:**

   Ensure the required models are set up with **Together AI** or your preferred backend for LLM inference. Update the `backend/models` configuration files to point to the appropriate models.

---

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
