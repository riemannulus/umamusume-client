module.exports = {
  webpack: {
    rules: [
      {
        test: /\.tsx$/,
        exclude: [/\.stories.tsx$/],
      },
    ],
  },
};
