exports.handler = async (event) => {
  try {
    const data = JSON.parse(event.body);

    return {
      statusCode: 200,
      body: JSON.stringify({
        success: true,
        message: "Plan working",
        data
      })
    };
  } catch (err) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: err.message })
    };
  }
};