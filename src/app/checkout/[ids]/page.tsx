import { Product } from "@/type/Product";
import { getProductsByIds } from "@/data";
import { createOrder } from "@/utils/klarna";

const Page = async (props: any) => {
  let ids = props.params.ids;
  const decodedIds = ids ? decodeURIComponent(ids) : "";
  const productIds = decodedIds.split(",").map(Number);
  const Product: Product[] = getProductsByIds(productIds);

  const htmlSnippet = (await createOrder(Product)).html_snippet;

  return (
    <div
      style={{ marginTop: 100 }}
      dangerouslySetInnerHTML={{ __html: htmlSnippet }}
    />
  );
};

export default Page;
