sri-lankan-tourism-client/
├── public/
│   ├── favicon.ico
│   └── index.html
├── src/
│   ├── api/
│   │   ├── apiClient.ts
│   │   ├── authApi.ts
│   │   ├── packagesApi.ts
│   │   └── destinationsApi.ts
│   ├── assets/
│   │   ├── images/
│   │   │   ├── logo.png
│   │   │   └── hero-banner.jpg
│   │   └── svgs/
│   │       └── vite.svg
│   ├── components/
│   │   ├── common/
│   │   │   ├── Button/
│   │   │   │   ├── Button.tsx
│   │   │   │   └── Button.module.css
│   │   │   ├── Input/
│   │   │   ├── Card/
│   │   │   ├── Modal/
│   │   │   └── Spinner/
│   │   └── layout/
│   │       ├── Header.tsx
│   │       ├── Footer.tsx
│   │       ├── Sidebar.tsx
│   │       └── MainLayout.tsx
│   ├── features/
│   │   ├── auth/
│   │   │   ├── components/
│   │   │   │   ├── LoginForm.tsx
│   │   │   │   └── RegistrationForm.tsx
│   │   │   ├── hooks/
│   │   │   │   └── useAuth.ts
│   │   │   └── services/
│   │   │       └── authService.ts
│   │   ├── packages/
│   │   │   ├── components/
│   │   │   │   ├── PackageCard.tsx
│   │   │   │   └── PackageFilter.tsx
│   │   │   ├── hooks/
│   │   │   │   └── usePackages.ts
│   │   │   └── types/
│   │   │       └── index.ts
│   │   ├── destinations/
│   │   ├── offers/
│   │   └── trip-planner/
│   ├── hooks/
│   │   ├── useDebounce.ts
│   │   └── useLocalStorage.ts
│   ├── pages/
│   │   ├── public/
│   │   │   ├── HomePage.tsx
│   │   │   ├── PackagesPage.tsx
│   │   │   ├── DestinationsPage.tsx
│   │   │   └── LoginPage.tsx
│   │   ├── admin/
│   │   │   └── AdminDashboardPage.tsx
│   │   ├── staff/
│   │   │   └── StaffDashboardPage.tsx
│   │   ├── driver/
│   │   │   └── DriverDashboardPage.tsx
│   │   ├── tourist/
│   │   │   └── TouristDashboardPage.tsx
│   │   └── NotFoundPage.tsx
│   ├── routes/
│   │   ├── AppRoutes.tsx
│   │   ├── PrivateRoute.tsx
│   │   └── RoleBasedRoute.tsx
│   ├── store/
│   │   ├── slices/
│   │   │   ├── authSlice.ts
│   │   │   └── packageSlice.ts
│   │   └── store.ts
│   ├── styles/
│   │   ├── _variables.css
│   │   ├── App.css
│   │   └── index.css
│   ├── types/
│   │   ├── index.ts
│   │   ├── roles.ts
│   │   └── user.ts
│   ├── utils/
│   │   ├── dateUtils.ts
│   │   └── formatters.ts
│   ├── App.tsx
│   ├── main.tsx
│   └── vite-env.d.ts
├── .gitignore
├── .eslintrc.cjs
├── package.json
├── README.md
├── tsconfig.json
├── tsconfig.node.json
└── vite.config.ts