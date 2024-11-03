import React, { useState } from "react";
import Matchmaking from "./components/Matchmaking/Matchmaking";
import Chat from "./components/Chat/Chat";
import Discovery from "./components/Discovery/Discovery";
import Search from "./components/Search/Search";
import Favorites from "./components/Favorites/Favorites";
import ShareProfile from "./components/ShareProfile/ShareProfile";
import DailyRecommendations from "./components/DailyRecommendations/DailyRecommendations";
import Notifications from "./components/Notifications/Notifications";
import ResourceLibrary from "./components/ResourceLibrary/ResourceLibrary";
import CommunityForums from "./components/CommunityForums/CommunityForums";
import AnalyticsDashboard from "./components/AnalyticsDashboard/AnalyticsDashboard";
import CustomizationOptions from "./components/CustomizationOptions/CustomizationOptions";
import HelpAndSupport from "./components/HelpAndSupport/HelpAndSupport";
import './App.css'; // Ensure this CSS is imported

function App() {
  const [activeComponent, setActiveComponent] = useState('Find Matches');

  const renderComponent = () => {
    switch (activeComponent) {
      case 'Find Matches':
        return <Matchmaking />;
      case 'Chat with Others':
        return <Chat />;
      case 'Discover New Connections':
        return <Discovery />;
      case 'Search Profiles':
        return <Search />;
      case 'Your Favorites':
        return <Favorites />;
      case 'Share Your Profile':
        return <ShareProfile />;
      case 'Daily Recommendations':
        return <DailyRecommendations />;
      case 'Notifications':
        return <Notifications />;
      case 'Resource Library':
        return <ResourceLibrary />;
      case 'Community Forums':
        return <CommunityForums />;
      case 'Analytics Dashboard':
        return <AnalyticsDashboard />;
      case 'Customize Settings':
        return <CustomizationOptions />;
      case 'Help & Support':
        return <HelpAndSupport />;
      default:
        return <Matchmaking />;
    }
  };

  return (
    <div className="App">
      <header className="app-header">
        <h1>Welcome to Coffee Meets Bagel Dating App</h1>
        <nav className="app-nav">
          <button onClick={() => setActiveComponent('Find Matches')}>Find Matches</button>
          <button onClick={() => setActiveComponent('Chat with Others')}>Chat with Others</button>
          <button onClick={() => setActiveComponent('Discover New Connections')}>Discover</button>
          <button onClick={() => setActiveComponent('Search Profiles')}>Search Profiles</button>
          <button onClick={() => setActiveComponent('Your Favorites')}>Favorites</button>
          <button onClick={() => setActiveComponent('Share Your Profile')}>Share Profile</button>
          <button onClick={() => setActiveComponent('Daily Recommendations')}>Recommendations</button>
          <button onClick={() => setActiveComponent('Notifications')}>Notifications</button>
          <button onClick={() => setActiveComponent('Resource Library')}>Resource Library</button>
          <button onClick={() => setActiveComponent('Community Forums')}>Forums</button>
          <button onClick={() => setActiveComponent('Analytics Dashboard')}>Analytics</button>
          <button onClick={() => setActiveComponent('Customize Settings')}>Settings</button>
          <button onClick={() => setActiveComponent('Help & Support')}>Help & Support</button>
        </nav>
      </header>
      <main className="app-content">
        <div className="component-container">
          {renderComponent()}
        </div>
      </main>
    </div>
  );
}

export default App;
