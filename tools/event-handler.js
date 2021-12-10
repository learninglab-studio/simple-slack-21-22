exports.file = async ({ event, client}) => {
    try {
      console.log(`\nhere's the event:\n\n${JSON.stringify(event, null, 4)}`)
      const result = await client.files.info({
        file: event.file_id,
      });
      console.log(`\nhere's the event:\n\n${JSON.stringify(event, null, 4)}`)
      console.log(`\nhere's the result:\n\n${JSON.stringify(result, null, 4)}`)
    }
    catch (error) {
      console.error(error);
    }
}
