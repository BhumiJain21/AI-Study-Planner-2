exports.handler = async (event) => {
  try {
    const body = JSON.parse(event.body || "{}");

    return {
      statusCode: 200,
      body: JSON.stringify({
        success: true,
        message: "Plan generated successfully",
        input: body
      })
    };
  } catch (err) {
    return {
      statusCode: 500,
      body: JSON.stringify({
        success: false,
        error: err.message
      })
    };
  }
};