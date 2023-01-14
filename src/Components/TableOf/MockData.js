const generateMockData = () => {
    const mockData = [];
    for (let i = 0; i < 10; i++) {
      mockData.push({
        name: `User ${i + 1}`,
        email: `user${i + 1}@example.com`,
        phone: `555-555-555${i}`
      });
    }
    return mockData;
  }

  export default generateMockData;
