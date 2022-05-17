import { useState } from "react";
import { useRouter } from "next/router";
import Head from "next/head";
import MyIsacaMain from "../../components/MyIsacaMain";

import { loadUser, loadUserSummary } from "../../lib/fetch-MyISACA";
import { useEffect } from "react";

// export const getStaticPaths: GetStaticPaths = async (context) => {
//   const paths = coffeStoresData.map((el) => {
//     return {
//       params: {
//         id: el.id.toString(),
//       },
//     };
//   });
//   return {
//     paths: [
//       {
//         params: {
//           id: 'membership-status',
//         },
//       },
//     ],
//     fallback: false,
//   };
// };

const Page = (props) => {
  const [header, setHeader] = useState("MyISACA");

  const router = useRouter();
  const { id } = router.query;

  return (
    <>
      <Head>
        <title>{header}</title>
      </Head>
      <MyIsacaMain
        id={id}
        user={props.user}
        userSummary={props.userSummary}
        setHeader={setHeader}
      />
    </>
  );
};

export const getStaticProps = async (context) => {
  const user = await loadUser();
  const userSummary = await loadUserSummary();

  return {
    props: {
      user,
      userSummary,
    },
    // Next.js will attempt to re-generate the page:
    // - When a request comes in
    // - At most once every 5 seconds
    // revalidate: 5, // In seconds
  };
};

export const getStaticPaths = async (context) => {
  return {
    paths: [
      {
        params: {
          id: "header",
        },
      },
    ],
    fallback: false,
  };
};

export default Page;
