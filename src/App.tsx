import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import AppSidebar from './components/AppSidebar';
import RegistrationModal from './components/RegistrationModal';
import ExecutionHealth from './components/widgets/ExecutionHealth';
import DiscussionLoops from './components/widgets/DiscussionLoops';
import GhostActions from './components/widgets/GhostActions';
import MeetingHub from './components/widgets/MeetingHub';
import AtlasView from './components/pages/AtlasView';
import MyTasks from './components/pages/MyTasks';
import TeamView from './components/pages/TeamView';
import Meetings from './components/pages/Meetings';
import Automation from './components/pages/Automation';
import KnowledgeBase from './components/pages/KnowledgeBase';
import Integrations from './components/pages/Integrations';
import Settings from './components/pages/Settings';
import LandingPage from './components/pages/LandingPage';
import LoginView from './components/pages/LoginView';
import LiaisonAgent from './components/pages/LiaisonAgent';
import './index.css';

type View = 'landing' | 'login' | 'dashboard' | 'atlas' | 'automation' | 'liaison' | 'teams' | 'tasks' | 'meetings' | 'knowledge' | 'integrations' | 'settings';

function App() {
  const [currentView, setCurrentView] = useState<View>('landing');
  const [isRegistrationOpen, setIsRegistrationOpen] = useState(false);

  const handleNavigate = (view: string) => {
    setCurrentView(view as View);
  };

  const handleRequestAccess = () => {
    setIsRegistrationOpen(true);
  };

  const handleRegistrationComplete = () => {
    setIsRegistrationOpen(false);
    setCurrentView('dashboard');
  };

  const handleLogin = () => {
    setCurrentView('login');
  };

  const handleLoginSuccess = () => {
    setCurrentView('dashboard');
  };

  const isPublicPage = currentView === 'landing' || currentView === 'login';

  // Get dynamic title based on view
  const getViewTitle = () => {
    switch (currentView) {
      case 'dashboard':
        return 'Welcome to Liaison';
      case 'atlas':
        return 'ATLAS - Execution Mapped';
      case 'automation':
        return 'Automation Layer';
      case 'liaison':
        return 'LIAISON - AI Agent';
      case 'tasks':
        return 'My Tasks';
      case 'teams':
        return 'Team View';
      case 'meetings':
        return 'Meetings';
      case 'integrations':
        return 'Integrations';
      case 'settings':
        return 'Settings';
      default:
        return 'Dashboard';
    }
  };

  const renderView = () => {
    switch (currentView) {
      case 'landing':
        return <LandingPage onRequestAccess={handleRequestAccess} onLogin={handleLogin} />;

      case 'login':
        return <LoginView onLoginSuccess={handleLoginSuccess} onRequestAccess={handleRequestAccess} />;

      case 'dashboard':
        return (
          <motion.div
            key="dashboard"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.3 }}
            className="w-full"
          >
            {/* 2x2 Grid of Intelligence Widgets */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <ExecutionHealth />
              <DiscussionLoops />
              <GhostActions />
              <MeetingHub />
            </div>
          </motion.div>
        );

      case 'atlas':
        return (
          <motion.div
            key="atlas"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.3 }}
            className="w-full"
          >
            <AtlasView />
          </motion.div>
        );

      case 'automation':
        return <motion.div key="automation"><Automation /></motion.div>;

      case 'liaison':
        return (
          <motion.div
            key="liaison"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.3 }}
            className="w-full h-full"
          >
            <LiaisonAgent />
          </motion.div>
        );

      case 'tasks':
        return <motion.div key="tasks"><MyTasks /></motion.div>;

      case 'teams':
        return <motion.div key="teams"><TeamView /></motion.div>;

      case 'meetings':
        return <motion.div key="meetings"><Meetings /></motion.div>;

      case 'knowledge':
        return <motion.div key="knowledge"><KnowledgeBase /></motion.div>;

      case 'integrations':
        return <motion.div key="integrations"><Integrations /></motion.div>;

      case 'settings':
        return <motion.div key="settings"><Settings /></motion.div>;

      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-[#050505]">
      {/* Registration Modal */}
      <RegistrationModal
        isOpen={isRegistrationOpen}
        onClose={() => setIsRegistrationOpen(false)}
        onComplete={handleRegistrationComplete}
      />

      {!isPublicPage && (
        <>
          {/* Sidebar */}
          <AppSidebar currentView={currentView} onNavigate={handleNavigate} />

          {/* Top Header */}
          <header className="fixed top-0 left-64 right-0 h-16 glass-card border-b border-white/5 z-30">
            <div className="h-full px-8 flex items-center justify-between">
              {/* Title */}
              <h1 className="text-xl font-bold text-white">{getViewTitle()}</h1>

              {/* Stats Row - Fixed (No Hover) with FORWARD SLASHES */}
              <div className="flex items-center gap-6">
                <div className="flex items-center gap-2">
                  <span className="text-sm text-gray-500">Sprint Velocity:</span>
                  <span className="text-sm font-mono font-bold text-cyan-400">87%</span>
                </div>

                <span className="text-gray-600">/</span>

                <div className="flex items-center gap-2">
                  <span className="text-sm text-gray-500">Burnout Risk:</span>
                  <span className="text-sm font-mono font-bold text-green-400">Low</span>
                </div>

                <span className="text-gray-600">/</span>

                <div className="flex items-center gap-2">
                  <span className="text-sm text-gray-500">Active Agents:</span>
                  <span className="text-sm font-mono font-bold text-cyan-400">12</span>
                </div>
              </div>
            </div>
          </header>
        </>
      )}

      {/* Main Content */}
      <main className={!isPublicPage ? "ml-64 pt-16 p-8 min-h-screen" : ""}>
        <AnimatePresence mode="wait">
          {renderView()}
        </AnimatePresence>
      </main>
    </div>
  );
}

export default App;
