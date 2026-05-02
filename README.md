# Landing Page Project

## Overview

This project is a responsive landing page built with React, Vite and Tailwind CSS.  
The content is managed through a headless CMS (Contentful), which provides dynamic data for the page.

---

## Tech Stack

- **React** 
- **Vite**
- **Tailwind CSS**
- **Contentful**

---

## Getting Started

### 1. Clone the repository

    git clone https://github.com/marharita08/byteex.git
    cd byteex

---

### 2. Install dependencies

    npm install

---

### 3. Environment variables

Create a `.env` file in the root of the project and add the following variables:

    VITE_CONTENTFUL_SPACE_ID=your_space_id
    VITE_CONTENTFUL_ACCESS_TOKEN=your_delivery_token

> ⚠️ Use **Content Delivery API token** from Contentful (not Management token)

---

### 4. Run the development server

    npm run dev

The app will be available at:

    http://localhost:5173

---
