# BuzzBoard - Your News Hub

A modern React-based news aggregator application that provides the latest news from various categories. BuzzBoard fetches real-time news data from the NewsData.io API and presents it in a clean, user-friendly interface.

## 📋 Features

- **Live News Updates**: Get the latest news from around the world
- **Category-based News**: Browse news by different categories:
  - Entertainment 🎬
  - Sports 🏅
  - Technology 💻
  - Politics 🏛️
  - World 🌎
  - Other 📌
- **Responsive Design**: Fully responsive layout that works on desktop and mobile devices
- **Clean User Interface**: Modern and minimalist UI for easy news consumption

## 📸 Screenshots

<div align="center">
  <p><strong>Homepage View</strong></p>
  <img src="public/images/ss (1).png" alt="Homepage View" width="800px">
</div>

<div align="center">
  <img src="public/images/ss (2).png" alt="ss" width="800px">
</div>

<div align="center">
  <img src="public/images/ss (3).png" alt="ss" width="800px">
</div>

<div align="center">
  <img src="public/images/ss (4).png" alt="ss" width="800px">
</div>

<div align="center">
  <img src="public/images/ss (5).png" alt="ss" width="800px">
</div>

<div align="center">
  <img src="public/images/ss (6).png"  width="800px">
</div>

<div align="center">
  <img src="public/images/ss (7).png" alt="Mobile Responsive View" width="400px">
</div>

## 🛠️ Technologies Used

- React.js
- React Router for navigation
- Axios for API requests
- NewsData.io API for news content
- CSS for styling
- Bootstrap components

## 🚀 Getting Started

### Prerequisites

- Node.js (v14 or above)
- npm or yarn
- NewsData.io API key

### Installation

1. Clone the repository

```bash
git clone https://github.com/ishivam0980/BuzzBoard.git
cd BuzzBoard
```

2. Install dependencies

```bash
npm install
```

3. Create a `.env` file in the root directory and add your NewsData.io API key

```
REACT_APP_NEWS_API_KEY=your_api_key_here
```

4. Start the development server

```bash
npm start
```

The application will be available at `http://localhost:3000`

## 📝 Project Structure

```
src/
  ├── components/
  │   ├── Category.js       # Category-specific news view
  │   ├── Home.js           # Homepage with latest news
  │   ├── Navbar.js         # Navigation component
  │   ├── NewsItem.js       # Individual news card component
  │   └── ...
  ├── App.js                # Main application component
  ├── index.js              # Entry point
  └── ...
```

## 🔮 Future Enhancements

- Search functionality to find specific news articles
- User authentication for personalized news feed
- Save/bookmark favorite articles
- Dark mode toggle
- Share articles directly to social media platforms
