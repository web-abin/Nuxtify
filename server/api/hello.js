export default defineEventHandler((event) => {
  const query = getQuery(event);
  const name = query.name || 'World';
  return {
    message: `Hello, ${name}!`,
  };
});
