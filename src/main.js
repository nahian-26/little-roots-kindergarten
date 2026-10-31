import './styles/main.css';
import './data/contentData.js';
import './pages/publicPages.js';
import './pages/interactivePages.js';
import './pages/wizardsAndAdmin.js';
import './pages/parentAndUtilityPages.js';
import './store/appController.js';

// Initialize the Little Roots Kindergarten application when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => {
    window.app.init();
  });
} else {
  window.app.init();
}
