import { faker } from "@faker-js/faker";

export const generateLondontriData = (): triData => {
  // Generate random weather data
  const generatetriData = {
    dayOne: faker.number.int({ min: -15, max: 30 }),
    dayTwo: faker.number.int({ min: 79, max: 86 }),
    dayThree: faker.number.int({ min: 2, max: 78 }),
  };

  // Return weather data
  return generatetriData;
};

export const generatetriData = (): triData => {
    // Generate random weather data
    const generatetriData = {
        dayOne: faker.number.int({ min: -15, max: 30 }),
        dayTwo: faker.number.int({ min: 79, max: 86 }),
        dayThree: faker.number.int({ min: 2, max: 78 }),
      };
    // Return weather data
    return generatetriData;
  };