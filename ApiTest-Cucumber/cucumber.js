export default {
    default: {
      require: ['features/step-definitions/**/*.js'], // Path to step definitions
      format: ['progress', 'json:results.json'],     // Reporting formats
      paths: ['features/**/*.feature'],             // Path to feature files
    },
  };