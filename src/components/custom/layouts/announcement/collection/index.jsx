import AnnouncementBody from "../body";
import WallPaper from "../wallpaper";
import styles from "./style.module.css";
import ps5 from "../../../../../assets/ps-5.png";

const Collection = () => {
  return (
    <div className={`${styles[`flex-template`]} flex flex-wrap gap-8`}>
      <WallPaper className={`relative ${styles[`grid-one`]} flex-1`}>
        <AnnouncementBody
          link={`link`}
          logoStyle={`logo-none`}
          title={`PlayStation 5`}
          titleStyle={`title`}
          describe={`Black and White version of the PS5 coming out on sale.`}
          describeStyle={`15px`}
          describeWeight={`400`}
          classNameImg={styles[`wall-img`]}
          classWall={styles[`text-section`]}
          src={ps5}
        />
      </WallPaper>
      <div className="flex flex-col gap-8 flex-1">
        <WallPaper className={`relative ${styles[`grid-two`]}`}>
          <AnnouncementBody
            link={`link`}
            logoStyle={`logo-none`}
            title={`PlayStation 5`}
            titleStyle={`title`}
            describe={`Black and White version of the PS5 coming out on sale.`}
            describeStyle={`15px`}
            describeWeight={`400`}
            classNameImg={styles[`wall-img`]}
            classWall={styles[`text-section`]}
            src={ps5}
          />
        </WallPaper>
        <div className="flex flex-row gap-8">
          <WallPaper className={`relative ${styles[`grid-three`]}`}>
            <AnnouncementBody
              link={`link`}
              logoStyle={`logo-none`}
              title={`PlayStation 5`}
              titleStyle={`title`}
              describe={`Black and White version of the PS5 coming out on sale.`}
              describeStyle={`15px`}
              describeWeight={`400`}
              classNameImg={styles[`wall-img`]}
              classWall={styles[`text-section`]}
              src={ps5}
            />
          </WallPaper>
          <WallPaper className={`relative ${styles[`grid-three`]}`}>
            <AnnouncementBody
              link={`link`}
              logoStyle={`logo-none`}
              title={`PlayStation 5`}
              titleStyle={`title`}
              describe={`Black and White version of the PS5 coming out on sale.`}
              describeStyle={`15px`}
              describeWeight={`400`}
              classNameImg={styles[`wall-img`]}
              classWall={styles[`text-section`]}
              src={ps5}
            />
          </WallPaper>
        </div>
      </div>
      
    </div>
  );
};

export default Collection;
