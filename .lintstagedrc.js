module.exports = {
  'src/**/*.{ts,tsx}': [
    'prettier --write -l', 
    'git add'
  ],
};
