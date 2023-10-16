import { usePostsList } from "../../model/services/postApi.ts";

export const PostList = () => {
  const { data } = usePostsList(7);
  console.log(data);
  return <div></div>;
};
