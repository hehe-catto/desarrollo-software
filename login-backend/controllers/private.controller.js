export const getPrivateMessage = (req, res) => {
    res.json({
      message:
        "Hello from a private endpoint! You need to be authenticated to see this.",
    });
  };