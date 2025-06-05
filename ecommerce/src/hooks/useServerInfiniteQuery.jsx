import NotFound from "@/app/not-found";
import NoDataFound from "@/components/NoDataFound";
import { HydrationBoundary, QueryClient, dehydrate } from "@tanstack/react-query";

export const prefetchInfiniteQuery = async (queryClient, data) => {
  console.log("Query Key: ", data.key);
  await queryClient.prefetchInfiniteQuery({
    queryKey: [data.key],
    queryFn: data.func,
    initialPageParam: data.initialPageParam,
    getNextPageParam: (lastPage, allPages) => {
      const nextPage = lastPage?.length ? allPages?.length + 1 : null;
      return nextPage;
    },
  });

  const initialData = queryClient.getQueryData([data.key]);
  console.log("Fetched Initial Data: ", initialData);

  return { initialData };
};

export default async function useServerInfiniteQuery(data, props) {
  const queryClient = new QueryClient();
  const { initialData } = await prefetchInfiniteQuery(queryClient, data);

  const hasValidPages = initialData?.pages?.some((page) => page != null || page != undefined);

  if (!hasValidPages && props?.listNotFound) {
    return <NotFound />;
  }

  if (!hasValidPages) {
    return <NoDataFound />;
  }
  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <data.component initialData={initialData} backupKey={data.key} func={data.func.toString()} />
    </HydrationBoundary>
  );
}
