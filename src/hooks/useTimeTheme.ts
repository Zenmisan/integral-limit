import { useEffect } from 'react';

// Define the time window for Light Mode in GMT+1 (WAT/CET)
// 7:00 to 17:00 (10 hours of light)
const LIGHT_MODE_START_HOUR = 7;
const LIGHT_MODE_END_HOUR = 17;

/**
 * Manages light/dark mode based on the hour in the user's local time zone (approximating GMT+1/WAT).
 * It applies the 'dark' class to the root HTML element.
 */
export function useTimeTheme() {
  useEffect(() => {
    const applyTheme = () => {
      // Get current local time and hour
      const now = new Date();
      const localHour = now.getHours();

      // Check if the current hour is within the Light Mode window
      const isLightTime = localHour >= LIGHT_MODE_START_HOUR && localHour < LIGHT_MODE_END_HOUR;

      const htmlElement = document.documentElement;

      if (isLightTime) {
        // Light Mode (7:00 - 17:00)
        htmlElement.classList.remove('dark');
      } else {
        // Dark Mode (17:00 - 6:59)
        htmlElement.classList.add('dark');
      }
    };

    // Apply theme immediately
    applyTheme();

    // Set up an interval to check the time periodically
    const intervalId = setInterval(applyTheme, 5 * 60 * 1000);

    return () => clearInterval(intervalId);
  }, []);
}