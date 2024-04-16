import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-20">
      <div className="container mx-auto flex flex-col lg:flex-row justify-between items-center">
        <div className="mb-4 lg:mb-0">
          <h2 className="text-xl font-bold mb-2">Connect with Us</h2>
          <div className="flex space-x-4">
            <a href="#" className="text-gray-400 hover:text-white">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 0C5.372 0 0 5.373 0 12c0 5.974 4.387 10.923 10.125 11.861-.122-1.053-.256-2.652.047-3.794.265-1.141 1.721-7.255 1.721-7.255s-.44-.886-.44-2.196c0-2.057 1.193-3.598 2.675-3.598.992 0 1.473.745 1.473 1.637 0 1.001-.064 2.52-.097 3.806-.032.32.646.629.964.293.564-.707.975-1.632.975-2.752 0-2.311-1.338-4.022-3.248-4.022-1.719 0-2.74 1.286-2.74 3.106 0 1.938 1.391 3.477 3.435 3.477 2.065 0 3.292-1.373 3.292-2.82 0-.57-.183-1.161-.416-1.571-1.459-.001-2.992-.229-2.992-2.565 0-.568.203-1.031.536-1.393-.054-.145-.231-.69.051-1.438 0 0 .457-.146 1.495.558A5.18 5.18 0 0 1 12 5.789c1.45 0 2.777.489 3.842 1.476 1.184-.23 2.242-.646 3.22-1.224.971-.579 1.808-1.364 2.503-2.323-.293.945-.907 1.736-1.715 2.24.786-.095 1.528-.303 2.221-.608-.516.786-1.172 1.479-1.927 2.042z"/>
              </svg>
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 0a12 12 0 0 1 12 12c0 6.627-5.373 12-12 12S0 18.627 0 12 5.373 0 12 0zm1.273 17.362v-5.02h2.585l.387-3.084h-2.972V7.367c0-.89.248-1.498 1.527-1.498H16v-3.05a20.58 20.58 0 0 0-2.255-.113c-2.231 0-3.749 1.361-3.749 3.855v2.15H8.362v3.085h2.585v5.02h2.326z"/>
              </svg>
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 0C5.373 0 0 5.373 0 12c0 6.627 5.373 12 12 12s12-5.373 12-12c0-6.627-5.373-12-12-12zm4.61 9.987c-.106-1.637-.595-2.755-1.446-3.583a4.694 4.694 0 0 0-1.95-1.188c-.945-.4-1.9-.596-2.88-.596-1.187 0-2.268.323-3.227.955-.992.7-1.718 1.705-2.154 3.059-.148.432-.24.953-.24 1.57v1.854h-2.37v3.722h2.37v8.56h3.92v-8.56h2.446l.356-3.722h-2.8v-2.28c0-.847.12-1.415.372-1.847.227-.423.548-.634.955-.634.278 0 .53.085.755.25.203.148.372.355.503.616.136.273.196.6.196.98v2.28h2.83l-.1.956z"/>
              </svg>
            </a>
          </div>
        </div>
        <div>
          <h2 className="text-xl font-bold mb-2">Contact Us</h2>
          <p className="text-gray-400">Phone: 123-456-7890</p>
          <p className="text-gray-400">Email: info@blooddonation.com</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
