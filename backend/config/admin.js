module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'c7b485a0ec60369670430d5555fe5011'),
  },
});
