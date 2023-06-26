import View from "@/components/view";
import { Locale } from "../../../i18n-config";
import { getDictionary } from "../../locales/dictionaries";

type Params = {
  lang: Locale;
};

type Props = {
  params: Params;
};

const Page = async (props: Props) => {
  const { lang } = props.params;
  const dict = await getDictionary(lang);
  return <View dict={dict} />;
};

export default Page;
