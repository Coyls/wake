import View from "@/pages/view";
import { FC } from "react";
import { Locale } from "../../../i18n-config";

type Params = {
  lang: Locale;
};

type Props = {
  params: Params;
};

export const Page: FC<Props> = ({ params }) => {
  return <View params={params} />;
};

export default Page;
