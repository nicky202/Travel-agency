// import type { Config } from "tailwindcss";

// const config: Config = {
//   content: [
//     "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
//     "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
//     "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
//   ],
//   // theme: {
//   //   extend: {
//   //     backgroundImage: {
//   //       "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
//   //       "gradient-conic":
//   //         "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
//   //     },
//   //   },
//   // },
//   daisyui: {
//     themes: [
//       {
//         lightTheme: {
//           primary: "#0ea5e9",

//           secondary: "#34d399",

//           accent: "#22d3ee",

//           neutral: "#0c0a0e",

//           "base-100": "#fefff9",

//           info: "#f472b6",

//           success: "#84cc16",

//           warning: "#f59e0b",

//           error: "#db2777",
//         },
//       },
//     ],
//   },
//   plugins: [require("daisyui")],
// };
// export default config;

module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  // theme: {
  //   extend: {
  //     backgroundImage: {
  //       "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
  //       "gradient-conic":
  //         "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
  //     },
  //   },
  // },
  daisyui: {
    themes: [
      {
        lightTheme: {
          primary: "#0ea5e9",

          secondary: "#34d399",

          accent: "#22d3ee",

          neutral: "#0c0a0e",

          "base-100": "#fefff9",

          info: "#f472b6",

          success: "#84cc16",

          warning: "#f59e0b",

          error: "#db2777",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
