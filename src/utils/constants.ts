interface NavLinks {
  title: string;
  icon: string;
  commingSoon?: boolean;
}
interface LinkType {
  title: string;
  subTitle: string;
}

interface Product {
  title: string;
  price: string;
}

interface Addons {
  title: string;
}

interface options {
  title: string;
}

export const sideNavLinks: Array<NavLinks> = [
  {
    title: "Home",
    icon: "/icons/Checkout/home.svg",
  },
  {
    title: "Payments",
    icon: "/icons/Checkout/payments.svg",
  },
  {
    title: "Payment links",
    icon: "/icons/Checkout/paymentsLink.svg",
  },
  {
    title: "Billing",
    icon: "/icons/Checkout/billing.svg",
    commingSoon: true,
  },
  {
    title: "Invoices",
    icon: "/icons/Checkout/invoices.svg",
    commingSoon: true,
  },
  {
    title: "Developer",
    icon: "/icons/Checkout/developer.svg",
  },
  {
    title: "Settings",
    icon: "/icons/Checkout/settings.svg",
  },
];

export const linkType: Array<LinkType> = [
  {
    title: "Products or Subscriptions",
    subTitle: "Best for e-commerce or Software-as-a-Service",
  },

  {
    title: "Customers choose what to pay",
    subTitle: "Best for tipping, donations or pay-what-you-want.",
  },
];
export const products: Array<Product> = [
  { title: "Landing Page", price: "$499.00" },
  {
    title: "UX Consultancy",
    price: "$900.00",
  },
];

export const addons: Array<Addons> = [
  { title: "Options" },
  { title: "Advanced" },
];

export const options: Array<options> = [
  { title: "Collect name" },
  { title: "Collect email" },
  { title: "Collect customer address" },
  { title: "Add a custom field" },
];
