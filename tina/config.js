import { defineConfig } from "tinacms";
import { home } from "./custom_schemas/home/home";
import { licenses } from "./custom_schemas/licenses/licenses";
import { community } from "./custom_schemas/community/community";
import { resources } from "./custom_schemas/resources/resources";
import { contact } from "./custom_schemas/contact/contact";
import { company } from "./custom_schemas/company/company";
import { equipment } from "./custom_schemas/equipment/equipment";
import { cart } from "./custom_schemas/cart/cart";
import { checkout } from "./custom_schemas/checkout/checkout";
// import { ruhome } from "./custom_schemas/home/ru/ruhome";

// Your hosting provider likely exposes this as an environment variable
const branch = process.env.HEAD || process.env.VERCEL_GIT_COMMIT_REF || "main";

export default defineConfig({
  branch,
  clientId: "b2767bec-ce2c-49a5-8587-3a520cb10541", // Get this from tina.io
  token: "368d07817cbece110a51ff6caf35150fec11207f", // Get this from tina.io

  build: {
    outputFolder: "admin",
    publicFolder: "public",
  },
  media: {
    // If you wanted cloudinary do this
    // loadCustomStore: async () => {
    //   const pack = await import("next-tinacms-cloudinary");
    //   return pack.TinaCloudCloudinaryMediaStore;
    // },
    // this is the config for the tina cloud media store
    tina: {
      publicFolder: "public",
      mediaRoot: "assets/images",
    },
  },
  schema: {
    collections: [
      home,
      licenses,
      equipment,
      resources,
      community,
      company,
      contact,
      cart,
      checkout
    ],
  },
});
