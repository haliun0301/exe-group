import React from "react";
import en from '../locales/en';
import jp from '../locales/jp';
import { useRouter } from "next/router";
import MainLayout from "../layout/MainLayout";
import Head from "next/head";
const project1 = () => {
  const router = useRouter();
  const { locale } = router;
  const t = locale === 'jp' ? jp : en;
  return (
    <>
    <Head>
      <title>{t.news}</title>
    </Head>
    <MainLayout>
      <div
        className="relative overflow-hidden bg-cover bg-no-repeat h-[16rem] md:h-[20rem] lg:h-[28rem]"
        style={{
          backgroundPosition: "50%",
          backgroundImage: 'url("/assets/img/japan.jpg")',
        }}
      >
        <div
          className="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-fixed"
          style={{ backgroundColor: "rgba(0, 0, 0, 0)" }}
        >
          <div className="flex h-full items-center justify-center text-center text-white">
            <h1 className="mb-6 text-2xl md:text-4xl font-bold">
            {t.news}
            </h1>
          </div>
        </div>
      </div>
      <div className="max-w-[1200px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 bg-white md:py-16 md:pr-6">
          <div className="flex justify-center pt-4 col-span-2">
            <div className="sm:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 -mt-4">
              <div>
                <img
                  src="/assets/img/img2.jpg"
                  loading="lazy"
                  className="h-auto w-auto mt-2 md:ml-8"
                  alt="1"
                />
              </div>
              <div className="md:px-10 px-4">
                <div className="w-full md:mx-8 py-4">
                  <h2 className=" text-2xl md:text-3xl text-gray-700 font-bold">
                    {/* ▶不動産流動化事業 */}
                    {t.ProjectsPage.title1}
                  </h2>
                  <p className="font-normal mt-4 font-sans text-gray-500 text-justify">
                    {t.ProjectsPage.text1}
                  </p>
                </div>
              </div>{" "}
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
    </>
    
  );
};

export default project1;
