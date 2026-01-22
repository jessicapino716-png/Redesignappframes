import React, { useState } from 'react';
import { Home, Grid3x3, ChevronLeft, ChevronRight, Settings } from 'lucide-react';
import { HomePage } from './components/HomePage';
import { SignUpPage } from './components/SignUpPage';
import { ContactsPage } from './components/ContactsPage';
import { SpeakPage } from './components/SpeakPage';
import { ScanCardPage } from './components/ScanCardPage';
import { ScanQRPage } from './components/ScanQRPage';
import { UploadCardPage } from './components/UploadCardPage';
import { CreateContactPage } from './components/CreateContactPage';
import { ContactProfilePage } from './components/ContactProfilePage';
import { EditProfilePage } from './components/EditProfilePage';
import { SearchContactPage } from './components/SearchContactPage';
import { UpgradePage } from './components/UpgradePage';
import { SignInPage } from './components/SignInPage';
import { WelcomePage } from './components/WelcomePage';
import { SettingsPage } from './components/SettingsPage';

function App() {
  const [activeTab, setActiveTab] = useState<'home' | 'grid'>('home');
  const [currentPage, setCurrentPage] = useState<'home' | 'signup' | 'contacts' | 'speak' | 'scan' | 'qr' | 'upload' | 'create' | 'profile' | 'editprofile' | 'search' | 'upgrade' | 'signin' | 'welcome' | 'settings'>('home');

  return (
    <div className="min-h-screen bg-[#e8e8e8] flex items-center justify-center p-8">
      {/* Page Toggle Button - Outside Frame */}
      <button
        onClick={() => {
          if (currentPage === 'home') {
            setCurrentPage('signup');
          } else if (currentPage === 'signup') {
            setCurrentPage('contacts');
          } else if (currentPage === 'contacts') {
            setCurrentPage('speak');
          } else if (currentPage === 'speak') {
            setCurrentPage('scan');
          } else if (currentPage === 'scan') {
            setCurrentPage('qr');
          } else if (currentPage === 'qr') {
            setCurrentPage('upload');
          } else if (currentPage === 'upload') {
            setCurrentPage('create');
          } else if (currentPage === 'create') {
            setCurrentPage('profile');
          } else if (currentPage === 'profile') {
            setCurrentPage('editprofile');
          } else if (currentPage === 'editprofile') {
            setCurrentPage('search');
          } else if (currentPage === 'search') {
            setCurrentPage('upgrade');
          } else if (currentPage === 'upgrade') {
            setCurrentPage('signin');
          } else if (currentPage === 'signin') {
            setCurrentPage('welcome');
          } else if (currentPage === 'welcome') {
            setCurrentPage('settings');
          } else {
            setCurrentPage('home');
          }
        }}
        className="absolute top-8 right-8 bg-[#1a1a1a] hover:bg-[#2a2a2a] text-white px-5 py-2.5 rounded-lg text-[13px] tracking-tight flex items-center gap-2 transition-all duration-300 shadow-lg z-50"
        style={{ fontWeight: 700 }}
      >
        {currentPage === 'home' ? (
          <>
            Sign Up
            <ChevronRight className="w-3.5 h-3.5" />
          </>
        ) : currentPage === 'signup' ? (
          <>
            Contacts
            <ChevronRight className="w-3.5 h-3.5" />
          </>
        ) : currentPage === 'contacts' ? (
          <>
            Speak
            <ChevronRight className="w-3.5 h-3.5" />
          </>
        ) : currentPage === 'speak' ? (
          <>
            Scan
            <ChevronRight className="w-3.5 h-3.5" />
          </>
        ) : currentPage === 'scan' ? (
          <>
            QR
            <ChevronRight className="w-3.5 h-3.5" />
          </>
        ) : currentPage === 'qr' ? (
          <>
            Upload
            <ChevronRight className="w-3.5 h-3.5" />
          </>
        ) : currentPage === 'upload' ? (
          <>
            Create
            <ChevronRight className="w-3.5 h-3.5" />
          </>
        ) : currentPage === 'create' ? (
          <>
            Profile
            <ChevronRight className="w-3.5 h-3.5" />
          </>
        ) : currentPage === 'profile' ? (
          <>
            Edit Profile
            <ChevronRight className="w-3.5 h-3.5" />
          </>
        ) : currentPage === 'editprofile' ? (
          <>
            Search
            <ChevronRight className="w-3.5 h-3.5" />
          </>
        ) : currentPage === 'search' ? (
          <>
            Upgrade
            <ChevronRight className="w-3.5 h-3.5" />
          </>
        ) : currentPage === 'upgrade' ? (
          <>
            Sign In
            <ChevronRight className="w-3.5 h-3.5" />
          </>
        ) : currentPage === 'signin' ? (
          <>
            Welcome
            <ChevronRight className="w-3.5 h-3.5" />
          </>
        ) : currentPage === 'welcome' ? (
          <>
            Settings
            <ChevronRight className="w-3.5 h-3.5" />
          </>
        ) : (
          <>
            <ChevronLeft className="w-3.5 h-3.5" />
            Home
          </>
        )}
      </button>

      {/* Mobile Frame */}
      <div className="w-full max-w-[390px] h-[844px] rounded-[40px] shadow-[0_20px_60px_rgba(0,0,0,0.3)] overflow-hidden flex flex-col relative bg-[#E8E3D5]">
        
        {/* Status Bar */}
        <div className="relative z-10 px-7 pt-3 pb-2">
          <div className="flex items-center justify-between text-[13px] text-[#1a1a1a]/90" style={{ fontWeight: 600 }}>
            <span>9:41</span>
            <div className="flex items-center gap-1.5">
              <div className="w-4 h-2.5 bg-[#1a1a1a]/90 rounded-sm"></div>
              <div className="w-4 h-2.5 bg-[#1a1a1a]/90 rounded-sm"></div>
              <div className="w-4 h-3 border-2 border-[#1a1a1a]/90 rounded-sm relative">
                <div className="absolute right-[-3px] top-1/2 -translate-y-1/2 w-[2px] h-2 bg-[#1a1a1a]/90 rounded-r"></div>
                <div className="absolute inset-0.5 bg-[#1a1a1a]/90 rounded-[1px]"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Render Current Page */}
        {currentPage === 'home' && <HomePage onNavigateToContacts={() => setCurrentPage('contacts')} />}
        {currentPage === 'signup' && <SignUpPage />}
        {currentPage === 'contacts' && <ContactsPage onBack={() => setCurrentPage('home')} />}
        {currentPage === 'speak' && <SpeakPage onBack={() => setCurrentPage('home')} />}
        {currentPage === 'scan' && <ScanCardPage onBack={() => setCurrentPage('home')} />}
        {currentPage === 'qr' && <ScanQRPage onBack={() => setCurrentPage('home')} />}
        {currentPage === 'upload' && <UploadCardPage onBack={() => setCurrentPage('home')} />}
        {currentPage === 'create' && <CreateContactPage onBack={() => setCurrentPage('home')} />}
        {currentPage === 'profile' && <ContactProfilePage onBack={() => setCurrentPage('home')} />}
        {currentPage === 'editprofile' && <EditProfilePage onBack={() => setCurrentPage('home')} />}
        {currentPage === 'search' && <SearchContactPage onBack={() => setCurrentPage('home')} />}
        {currentPage === 'upgrade' && <UpgradePage onBack={() => setCurrentPage('home')} />}
        {currentPage === 'signin' && <SignInPage onBack={() => setCurrentPage('home')} />}
        {currentPage === 'welcome' && <WelcomePage onBack={() => setCurrentPage('home')} />}
        {currentPage === 'settings' && <SettingsPage onBack={() => setCurrentPage('home')} />}
        
        {/* Bottom Navigation - Removed */}
      </div>
    </div>
  );
}

export default App;