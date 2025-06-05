import NotFound from "@/app/not-found";
import NoDataFound from "@/components/NoDataFound";
import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";

export const prefetchQuery = async (queryClient, queryData) => {
  await queryClient.prefetchQuery({
    queryKey: [queryData?.key],
    queryFn: queryData?.func,
  });

  const data = queryClient.getQueryData([queryData.key]);
  return { data };
};

const useServerQuery = async (queryData, props = {}) => {
  const queryClient = new QueryClient();
  const { data, isError } = await prefetchQuery(queryClient, queryData);

  if (!data || isError) {
    if (props?.notFound) {
      return <NotFound />;
    }
    if (props?.hideSection) {
      return <></>;
    } else {
      return <NoDataFound />;
    }
  }

  if (props?.data) {
    // console.log("server query", data);
    return {
      data: data,
      component: (
        <HydrationBoundary state={dehydrate(queryClient)}>
          {/* {console.log("data if==>", data)} */}
          <queryData.component data={data} className={props.className} />
        </HydrationBoundary>
      ),
    };
  } else {
    return (
      <HydrationBoundary state={dehydrate(queryClient)}>
        {/* {console.log("data else==>", data)} */}
        <queryData.component data={data} className={props.className} />
      </HydrationBoundary>
    );
  }
};

export default useServerQuery;
