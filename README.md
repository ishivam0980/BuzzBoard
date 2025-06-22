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
- **Infinite Scroll**: Seamless browsing experience with automatic content loading as you scroll
- **Pagination Support**: Alternative navigation with Previous/Next buttons (configurable)
- **Top Loading Bar**: Visual feedback during API requests with customizable loading indicator
- **Sticky Navigation**: Fixed navbar that stays visible while scrolling for easy access
- **Dynamic Page Titles**: Browser tab titles update based on the current category
- **Clean User Interface**: Modern and minimalist UI for easy news consumption

## 📸 Screenshots

<div align="center">
  <img src="public/images/SS (1).png" alt="Screenshot 1" width="800px">
</div>

<div align="center">
  <img src="public/images/SS (2).png" alt="Screenshot 2" width="800px">
</div>

<div align="center">
  <img src="public/images/SS (3).png" alt="Screenshot 3" width="800px">
</div>

<div align="center">
  <img src="public/images/SS (4).png" alt="Screenshot 4" width="800px">
</div>

<div align="center">
  <img src="public/images/SS (5).png" alt="Screenshot 5" width="800px">
</div>

<div align="center">
  <img src="public/images/SS (6).png" alt="Screenshot 6" width="800px">
</div>

<div align="center">
  <img src="public/images/SS (7).png" alt="Screenshot 7" width="800px">
</div>

<div align="center">
  <img src="public/images/SS (8).png" alt="Screenshot 8" width="800px">
</div>

<div align="center">
  <img src="public/images/SS (9).png" alt="Screenshot 9" width="800px">
</div>

<div align="center">
  <img src="public/images/SS (10).png" alt="Screenshot 10" width="800px">
</div>

<div align="center">
  <img src="public/images/SS (11).png" alt="Screenshot 11" width="800px">
</div>

<div align="center">
  <img src="public/images/SS (12).png" alt="Screenshot 12" width="800px">
</div>

<div align="center">
  <img src="public/images/SS (13).png" alt="Screenshot 13" width="800px">
</div>

<div align="center">
  <img src="public/images/SS (14).png" alt="Screenshot 14" width="800px">
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

## ⚙️ Navigation Features

### Infinite Scroll (Default)
The application uses infinite scroll by default for a smooth browsing experience. New content loads automatically as you scroll down.

### Alternative: Pagination
If you prefer traditional pagination with Previous/Next buttons:

**To switch from Infinite Scroll to Pagination:**
1. In `Home.js` and `Category.js`, comment out the "Current implementation using infinite scroll" section
2. Uncomment the pagination code section  
3. Uncomment the `handlePrevClick` and `handleNextClick` functions

Both navigation methods are fully implemented and can be switched easily by commenting/uncommenting the relevant code sections.

### Loading Indicators
The app uses a top loading bar for API requests. If you prefer the traditional loading animation:
- Uncomment the loading image sections in `Home.js` and `Category.js`
- Comment out the top loading bar calls in the API functions

## 🔮 Future Enhancements

- Search functionality to find specific news articles
- User authentication for personalized news feed
- Save/bookmark favorite articles
- Dark mode toggle
- Share articles directly to social media platforms
