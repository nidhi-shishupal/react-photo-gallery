# React Photo Gallery App

A responsive photo gallery built using **React, Vite, and Tailwind CSS**.
The application fetches photos from the **Picsum Photos API**, displays them in a responsive grid, allows users to search by author name, and mark photos as favourites with persistence using **localStorage**.

---

## Features

* Fetch photos from the Picsum Photos API
* Display images in a responsive grid layout
* Search photos by author name in real time
* Mark photos as favourites
* Persist favourites using localStorage
* State management using **useReducer**
* Performance optimization with **useCallback** and **useMemo**
* Custom data fetching hook (**useFetchPhotos**)

---

## Tech Stack

* **React**
* **Vite**
* **Tailwind CSS**
* **JavaScript (ES6+)**
* **Picsum Photos API**

---

## Project Structure

```
src
│
├── components
│   ├── Gallery.jsx
│   ├── PhotoCard.jsx
│   └── SearchBar.jsx
│
├── hooks
│   └── useFetchPhotos.js
│
├── reducer
│   └── favouritesReducer.js
│
├── App.jsx
├── main.jsx
└── index.css
```

---

## Installation

Clone the repository and install dependencies.

```
git clone https://github.com/nidhi-shishupal/react-photo-gallery.git
cd react-photo-gallery
npm install
npm run dev
```

Then open the app in your browser:

```
http://localhost:5173
```

---

## API Used

Picsum Photos API

```
https://picsum.photos/v2/list?limit=30
```

---

## Key Concepts Used

* **Custom Hooks** for separating data fetching logic
* **useReducer** for managing favourites state
* **useMemo** for efficient filtering of photos
* **useCallback** for optimized search handler
* **localStorage** for persisting favourites

---

## Assignment Purpose

This project was developed as part of a **Frontend React Internship Pre-Screening Assignment** to demonstrate understanding of React hooks, state management, API integration, and responsive UI development.

---

## Author

**Nidhi Shishupal**

GitHub:
https://github.com/nidhi-shishupal
