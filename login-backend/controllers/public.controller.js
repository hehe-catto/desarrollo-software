export const getPublicMessage = (req, res) => {
    res.json({
      message:
        "Hello from a public endpoint! You don't need to be authenticated to see this.",
    });
  };
  