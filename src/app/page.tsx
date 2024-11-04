import { redirect } from "next/navigation";

const RootPage = () => {
  redirect("/");
};

export default RootPage;
/**********************
 * Note:
 * to make the first page automatically go to a [local] folder and continue from there
 **********************/
