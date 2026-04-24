// Stub: auth-client for report-generator
// This is a minimal stub to satisfy imports from the legacy AppSidebar

export const authClient = {
  useSession: () => ({
    data: {
      user: {
        name: "Admin",
        email: "admin@dino-ecommerce.com",
        image: "",
      },
    },
  }),
  signOut: (_opts?: any) => {},
  checkout: (_opts?: any) => {},
};
