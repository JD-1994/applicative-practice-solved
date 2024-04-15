/**
 * SPACE DATA EXERCISE 18
 * Return the year with the greatest number of Asteroids discoveries
 * Return example: 1902
 */

export function getGreatestDiscoveryYear(data) {
  // Initialize an object to store the count of discoveries for each year
  const discoveryYears = {};

  // Iterate over the array of asteroids
  data.asteroids.forEach(asteroid => {
    // Extract the discovery year of the asteroid
    const year = asteroid.discoveryYear;
    
    // If the year is already in the object, increment its count, otherwise set it to 1
    discoveryYears[year] = (discoveryYears[year] || 0) + 1;
  });

  // Find the year with the maximum count of discoveries
  let maxYear = null;
  let maxCount = 0;
  for (const year in discoveryYears) {
    if (discoveryYears[year] > maxCount) {
      maxYear = parseInt(year);
      maxCount = discoveryYears[year];
    }
  }

  // Return the year with the greatest number of discoveries
  return maxYear;
}


// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-18"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
