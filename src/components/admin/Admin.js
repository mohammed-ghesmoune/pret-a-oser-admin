import { HydraAdmin, ResourceGuesser } from "@api-platform/admin";
import authProvider from "./utils/authProvider";
import images from "./images";
import prestations from "./prestations";
import categories from "./categories";
import testimonials from "./testimonials";
import logos from "./logos";
import users from "./users";
import pages from "./pages";
import entrypoint from "./utils/entrypoint";
import dataProvider from "./utils/dataProvider";
import { Layout } from "./AdminMenu/Layout";

const Admin = () => (
  <HydraAdmin layout={Layout} entrypoint={entrypoint} dataProvider={dataProvider} authProvider={authProvider}>
    <ResourceGuesser name="categories" {...categories} />
    <ResourceGuesser name="prestations"  {...prestations} />
    <ResourceGuesser name="testimonials" {...testimonials} />
    <ResourceGuesser name="images" {...images} />
    <ResourceGuesser name="logos" {...logos} />
    <ResourceGuesser name="pages" {...pages} />
    <ResourceGuesser name="users" {...users} />
  </HydraAdmin>
);

export default Admin;