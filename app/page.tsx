import styles from "./page.module.css";
import Image from "next/image";
import { getNewsList } from "./_libs/microcms";
import { TOP_NEWS_LIMIT } from "./_constants";
import NewsList from "./_components/NewsList";
import ButtonLink from "./_components/ButtonLink";

export default async function Home() {

  //JavaScriptの定数や式を書くことができる
  const name = "世界";
  const data = await getNewsList({
    limit: TOP_NEWS_LIMIT,
  });
  console.log("NEWS DATA:", data);
  console.log("NEWS CONTENTS:", data.contents);

  return (
    <>
      <section className={styles.top}>
        <div>
          <h1 className={styles.title}>テクノロジーで{name}を変える</h1>
          <p className={styles.description}>
            私たちは市場をリードしているグローバルテックカンパニーです
          </p>
        </div>
        <Image
          className={styles.bgimg}
          src="/img-mv.jpg"
          alt=""
          width={4000}
          height={1200}  
        />
      </section>
      <section className={styles.news}>
        <h2 className={styles.newsTitles}>News</h2>
        <NewsList news={data.contents} />
        <div className={styles.newsLink}>
          <ButtonLink href="/news">もっと見る</ButtonLink>
        </div>
      </section>
    </>
  );
}
