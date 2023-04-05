import Head from "next/head";
import Image from "next/image";
import Card from "@/components/Card";
import Tile from "@/components/Tile";
import GitHubIcon from "@mui/icons-material/GitHub";
import BarChartIcon from "@mui/icons-material/BarChart";
import ClosedCaptionIcon from "@mui/icons-material/ClosedCaption";
import HMobiledataIcon from "@mui/icons-material/HMobiledata";
import CodeIcon from "@mui/icons-material/Code";
import Timeline from "@/components/Timeline";
import AchievementCard from "@/components/AchievementCard";
import SkillTile from "@/components/SkillTile";

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <div className="bg-[color:var(--clr0)] md:p-5 flex items-center justify-center text-[color:var(--txtclr1)]">
          <div className="p-5 max-w-[1000px] rounded-xl shadow-2xl flex-col bg-[color:var(--clr1)]">
            <div className="mt-1 flex items-center text-5xl md:text-7xl border-b-2 border-r-emerald-100 p-1">
              HRUSHIKESH PATEL
            </div>
            <div className=" mt-7 flex flex-col md:flex-row relative">
              <div className="bg-[color:var(--clr2)] flex items-center justify-center md:w-[50%] rounded-xl overflow-hidden shadow-2xl">
                <Image
                  className="object-cover w-full h-96"
                  src="/desktopimg.jpeg"
                  alt="Picture of the author"
                  width={300}
                  height={200}
                />
              </div>
              <div className="overflow-y-scroll p-5 shadow-lg md:h-[80%] bg-[color:var(--clr2)] flex-col items-center justify-center mt-5 md:mt-0 md:w-[50%] rounded-xl md:absolute md:right-[30px] md:top-[10%]">
                <h className="text-4xl">About Me</h>
                <p>
                  lorem pipcsum lorem loremlorem pipcsum lorem loremlorem
                  pipcsum lorem loremlorem pipcsum lorem loremlorem pipcsum
                  lorem loremlorem pipcsum lorem loremlorem pipcsum lorem
                  loremlorem pipcsum lorem loremlorem pipcsum lorem loremlorem
                  pipcsum lorem loremlorem pipcsum lorem loremlorem pipcsum
                  lorem loremlorem pipcsum lorem loremlorem pipcsum lorem
                  loremlorem pipcsum lorem loremlorem pipcsum lorem loremlorem
                </p>
              </div>
            </div>
            <div className="bg-[color:var(--clr2)]  mt-7 rounded-xl p-5 ">
              <h className="text-4xl ">My work</h>
              <div className="grid md:grid-cols-[repeat(_auto-fit,minmax(250px,1fr)_)] gap-5 mt-5">
                <Card
                  title="title"
                  content="this is the content being passed to card"
                />
                <Card
                  title="title"
                  content="this is the content being passed to card"
                />
                <Card
                  title="title"
                  content="this is the content being passed to card"
                />
                <Card
                  title="title"
                  content="this is the content being passed to card"
                />
              </div>
            </div>

            <div className="bg-[color:var(--clr2)] mt-7  rounded-xl p-5 shadow-lg">
              <h className="text-4xl">Education</h>
              <ol className="ml-2 relative border-l border-black dark:border-gray-700 mt-5">
                <Timeline
                  date="2017"
                  title="New Horizon Gurukul"
                  description="High School - (82%)"
                />
                <Timeline
                  date="2020"
                  title="Hillwoods School"
                  description="Senior High School  - (74%)"
                />
                <Timeline
                  date="2024"
                  title="SRM University"
                  description="B.Tech CSE  - (9.0 CGPA)"
                />
              </ol>
            </div>
            <div className="bg-[color:var(--clr2)] mt-5 rounded-xl p-5 shadow-lg">
              <h className="text-4xl">Achievements</h>
              <AchievementCard title="Abinitio" />
              <AchievementCard title="Abinitio" />
            </div>
            <div className="bg-[color:var(--clr2)] mt-7 rounded-xl p-5 shadow-lg">
              <h className="text-4xl">Skills</h>
              <div className="flex flex-col md:grid grid-container gap-5 mt-5">
                <div className="sk1">
                  <SkillTile
                    icon={
                      <Image src="./reacticon.svg" width={69} height={69} />
                    }
                    title="ReactJs"
                  />
                </div>
                <div className="sk2">
                  <SkillTile
                    icon={<Image height={69} src="./cssicon.svg" width={69} />}
                    title="CSS"
                  />
                </div>
                <div className="sk3">
                  <SkillTile
                    icon={
                      <Image height={69} src="./html5icon.svg" width={69} />
                    }
                    title="HTML5"
                  />
                </div>
                <div className="sk4">
                  <SkillTile
                    icon={<Image height={69} src="./jsicon.svg" width={69} />}
                    title="JavaScript"
                  />
                </div>
                <div className="sk5">
                  <SkillTile
                    icon={
                      <Image height={69} src="./mongodbicon.svg" width={69} />
                    }
                    title="MongoDB"
                  />
                </div>
                <div className="sk6">
                  <SkillTile
                    icon={<Image height={69} src="./cppicon.svg" width={69} />}
                    title="C++"
                  />
                </div>
                <div className="sk7">
                  <SkillTile
                    icon={<Image height={69} src="./javaicon.svg" width={69} />}
                    title="Java"
                  />
                </div>
                <div className="sk8">
                  <SkillTile
                    icon={
                      <Image height={69} src="./firebaseicon.svg" width={69} />
                    }
                    title="Firebase"
                  />
                </div>
                <div className="sk9">
                  <SkillTile
                    icon={
                      <Image height={69} src="./nodejsicon.svg" width={69} />
                    }
                    title="NodeJs"
                  />
                </div>
                <div className="sk10">
                  <SkillTile
                    icon={<Image height={69} src="./cicon.svg" width={69} />}
                    title="NodeJs"
                  />
                </div>
                <div className="sk11">
                  <SkillTile
                    icon={
                      <Image height={69} src="./pythonicon.svg" width={69} />
                    }
                    title="Python"
                  />
                </div>
                <div className="sk11">
                  <SkillTile
                    icon={
                      <Image height={69} src="./pythonicon.svg" width={69} />
                    }
                    title="Python"
                  />
                </div>
              </div>
            </div>
            <div className="bg-[color:var(--clr2)] mt-7 rounded-xl p-5 shadow-lg">
              <h className="text-4xl">Related Links</h>
              <div className="grid grid-cols-[repeat(_auto-fit,minmax(100px,1fr)_)] gap-5 mt-5 ">
                <Tile icon={<GitHubIcon />} title="Github" />
                <Tile icon={<BarChartIcon />} title="Codeforce" />
                <Tile icon={<ClosedCaptionIcon />} title="CodeChef" />
                <Tile icon={<HMobiledataIcon />} title="HackerRank" />
                <Tile icon={<CodeIcon />} title="LeetCode" />
              </div>
            </div>
            <div className="bg-[color:var(--clr2)] mt-7 rounded-xl p-5 shadow-lg">
              <h className="text-4xl">Completed Courses</h>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
