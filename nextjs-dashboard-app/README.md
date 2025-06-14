# Next.js Dashboard App

This project is a Next.js application built with TypeScript and styled using Tailwind CSS. It serves as a basic dashboard displaying random sales data for the years 2022, 2023, and 2024. The data is sourced from a CSV file located in the `public/data` directory.

## Project Structure

```
nextjs-dashboard-app
├── public
│   └── data
│       └── sales_data.csv
├── src
│   ├── components
│   │   ├── atoms
│   │   │   └── ChartTitle.tsx
│   │   ├── molecules
│   │   │   └── ChartCard.tsx
│   │   ├── organisms
│   │   │   └── SalesChart.tsx
│   │   └── templates
│   │       └── DashboardLayout.tsx
│   ├── pages
│   │   ├── _app.tsx
│   │   ├── index.tsx
│   │   └── dashboard.tsx
│   ├── styles
│   │   └── globals.css
│   ├── types
│   │   └── sales.ts
│   └── utils
│       └── parseCSV.ts
├── .gitignore
├── next-env.d.ts
├── next.config.js
├── package.json
├── postcss.config.js
├── tailwind.config.js
├── tsconfig.json
└── README.md
```

## Setup Instructions

1. **Clone the Repository**
   ```bash
   git clone https://github.com/yourusername/nextjs-dashboard-app.git
   cd nextjs-dashboard-app
   ```

2. **Install Dependencies**
   Make sure you have Node.js installed. Then run:
   ```bash
   npm install
   ```

3. **Run the Development Server**
   Start the Next.js development server:
   ```bash
   npm run dev
   ```
   Open your browser and navigate to `http://localhost:3000` to view the application.

## Implementation Details

- **Components**: The application follows the atomic design principle, organizing components into atoms, molecules, organisms, and templates.
  - **Atoms**: Simple components like `ChartTitle` that display static content.
  - **Molecules**: Components like `ChartCard` that combine atoms and provide a structure for displaying charts.
  - **Organisms**: More complex components like `SalesChart` that handle data visualization.
  - **Templates**: Layout components like `DashboardLayout` that define the overall structure of the dashboard page.

- **Data Handling**: The sales data is stored in a CSV file located at `public/data/sales_data.csv`. The `parseCSV` utility function reads and parses this file to make the data available for the charts.

- **Styling**: Tailwind CSS is used for styling the components, providing a utility-first approach to design.

## Usage

- Navigate to the dashboard page by clicking on the link in the navigation bar.
- The dashboard displays various charts representing sales data for the years 2022, 2023, and 2024.

## License

This project is licensed under the MIT License. See the LICENSE file for more details.

## Acknowledgments

- Data sourced from Kaggle.
- Built with Next.js, TypeScript, and Tailwind CSS.