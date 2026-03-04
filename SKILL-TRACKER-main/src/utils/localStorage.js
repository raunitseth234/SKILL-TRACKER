// LocalStorage utility functions for persistent state management

const STORAGE_KEYS = {
  SKILLS: 'skillScoreTracker_skills',
  USER_NAME: 'skillScoreTracker_userName',
  THEME: 'skillScoreTracker_theme'
};

/**
 * Get skills from localStorage
 * @returns {Array} Array of skill objects
 */
export const getSkillsFromStorage = () => {
  try {
    const skills = localStorage.getItem(STORAGE_KEYS.SKILLS);
    return skills ? JSON.parse(skills) : [];
  } catch (error) {
    console.error('Error reading skills from localStorage:', error);
    return [];
  }
};

/**
 * Save skills to localStorage
 * @param {Array} skills - Array of skill objects
 */
export const saveSkillsToStorage = (skills) => {
  try {
    localStorage.setItem(STORAGE_KEYS.SKILLS, JSON.stringify(skills));
  } catch (error) {
    console.error('Error saving skills to localStorage:', error);
  }
};

/**
 * Get user name from localStorage
 * @returns {string} User name
 */
export const getUserNameFromStorage = () => {
  try {
    return localStorage.getItem(STORAGE_KEYS.USER_NAME) || '';
  } catch (error) {
    console.error('Error reading user name from localStorage:', error);
    return '';
  }
};

/**
 * Save user name to localStorage
 * @param {string} userName - User name
 */
export const saveUserNameToStorage = (userName) => {
  try {
    localStorage.setItem(STORAGE_KEYS.USER_NAME, userName);
  } catch (error) {
    console.error('Error saving user name to localStorage:', error);
  }
};

/**
 * Get theme from localStorage
 * @returns {string} Theme ('light' or 'dark')
 */
export const getThemeFromStorage = () => {
  try {
    return localStorage.getItem(STORAGE_KEYS.THEME) || 'light';
  } catch (error) {
    console.error('Error reading theme from localStorage:', error);
    return 'light';
  }
};

/**
 * Save theme to localStorage
 * @param {string} theme - Theme ('light' or 'dark')
 */
export const saveThemeToStorage = (theme) => {
  try {
    localStorage.setItem(STORAGE_KEYS.THEME, theme);
  } catch (error) {
    console.error('Error saving theme to localStorage:', error);
  }
}; 