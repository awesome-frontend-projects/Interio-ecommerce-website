# Interio - Premium Furniture E-Commerce Store

A modern, full-featured e-commerce platform built with Next.js 15, featuring Stripe payments, Clerk authentication, and Sanity CMS integration.

## Features

- 🛍️ **Full E-Commerce Functionality**
  - Product browsing with grid/list views
  - Advanced filtering by category
  - Real-time search
  - Sorting options (price, name)
  - Shopping cart with quantity management
- 💳 **Stripe Integration**
  - Secure checkout process
  - Dynamic price creation
  - Success/error handling
- 🔐 **Authentication with Clerk**
  - User sign-in/sign-up
  - Protected cart and checkout
  - User profile management
- 📱 **Responsive Design**
  - Mobile-first approach
  - Smooth animations and transitions
  - Toast notifications for user feedback
- 🎨 **Modern UI/UX**
  - Clean, professional design
  - Intuitive navigation
  - Loading states and error handling

## Tech Stack

- **Framework:** Next.js 15 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Authentication:** Clerk
- **Payments:** Stripe
- **CMS:** Sanity
- **State Management:** use-shopping-cart
- **Notifications:** react-hot-toast
- **Icons:** Remix Icons

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager
- Stripe account
- Clerk account
- Sanity project

### Installation

1. Clone the repository:

```bash
git clone <your-repo-url>
cd e-commerce-website
```

2. Install dependencies:

```bash
npm install
```

3. Set up environment variables:

Create a `.env` file in the root directory:

```env
# Stripe Keys
NEXT_PUBLIC_STRIPE_KEY=pk_test_your_publishable_key
STRIPE_SECRET_KEY=sk_test_your_secret_key

# Clerk Keys
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=pk_test_your_clerk_key
CLERK_SECRET_KEY=sk_test_your_clerk_secret

# Sanity (if needed)
NEXT_PUBLIC_SANITY_PROJECT_ID=your_project_id
NEXT_PUBLIC_SANITY_DATASET=production
```

4. Run the development server:

```bash
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
├── app/
│   ├── api/
│   │   └── checkout/          # Stripe checkout API route
│   ├── cart/                  # Shopping cart page
│   ├── shop/                  # Products listing page
│   ├── success/               # Payment success page
│   ├── error/                 # Payment error page
│   └── layout.tsx             # Root layout
├── components/
│   ├── AddToCart.tsx          # Add to cart button
│   ├── CartProvider.tsx       # Shopping cart context
│   ├── Checkout.tsx           # Checkout button
│   ├── Header.tsx             # Navigation header
│   ├── Footer.tsx             # Site footer
│   ├── ProductCard.tsx        # Product display card
│   └── ...
├── types/
│   └── types.ts               # TypeScript interfaces
└── sanity/
    └── client.ts              # Sanity client config
```

## Key Features Explained

### Authentication Flow

- Users must be logged in to add items to cart or checkout
- Toast notifications guide users to sign in when needed
- Clerk handles all authentication UI and logic

### Shopping Cart

- Persistent cart using local storage
- Real-time quantity updates
- Automatic price calculations with tax
- Mobile-responsive design

### Checkout Process

1. User adds items to cart
2. Reviews cart with quantity adjustments
3. Clicks checkout (requires authentication)
4. Redirects to Stripe hosted checkout
5. Returns to success/error page based on payment result

### Product Filtering

- Search by product name
- Filter by category
- Sort by price or name
- Toggle between grid and list views

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import project in Vercel
3. Add environment variables
4. Deploy

### Environment Variables for Production

Make sure to add all environment variables in your deployment platform:

- Stripe keys (use live keys for production)
- Clerk keys
- Sanity credentials

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is open source and available under the MIT License.
