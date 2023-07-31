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

import abinitio from "../public/resources/abinitio.jpg";
import abinitio2 from "../public/resources/abinitio2.jpg";
import brainfreeze2 from "../public/resources/brainfreeze2.jpg";
import reacticon from "../public/resources/reacticon.svg";
import cppicon from "../public/resources/cppicon.svg";
import cssicon from "../public/resources/cssicon.svg";
import html5icon from "../public/resources/html5icon.svg";
import jsicon from "../public/resources/jsicon.svg";
import mongodbicon from "../public/resources/mongodbicon.svg";
import javaicon from "../public/resources/javaicon.svg";
import firebaseicon from "../public/resources/firebaseicon.svg";
import nodejsicon from "../public/resources/nodejsicon.svg";
import cicon from "../public/resources/cicon.svg";
import pythonicon from "../public/resources/pythonicon.svg";
import dbicon from "../public/resources/dbicon2.png";
import myworkicon from "../public/resources/myworkicon.png";
import usericon from "../public/resources/usericon.png";
import educationicon from "../public/resources/educationicon.png";
import achievementicon from "../public/resources/achievementicon.png";
import skillsicon from "../public/resources/skillsicon.png";
import platformicon from "../public/resources/platformicon2.png";
import certificateicon from "../public/resources/certificateicon.png";

import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
      <Head>
        <title>Portfolio</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="./hicon.png" />
      </Head>
      <div className="nav">
        <a className="nav_item" href="#aboutme">
          <Image src={usericon} height={25} width={25} alt="alt" />
        </a>
        <a className="nav_item" href="#mywork">
          <Image src={myworkicon} height={25} width={25} alt="alt" />
        </a>
        <a className="nav_item" href="#education">
          <Image src={educationicon} height={25} width={25} alt="alt" />
        </a>
        <a className="nav_item" href="#achievements">
          <Image src={achievementicon} height={25} width={25} alt="alt" />
        </a>
        <a className="nav_item" href="#skills">
          <Image src={skillsicon} height={25} width={25} alt="alt" />
        </a>
        <a className="nav_item" href="#platformlinks">
          <Image src={platformicon} height={25} width={25} alt="alt" />
        </a>
        <a className="nav_item" href="#certifications">
          <Image src={certificateicon} height={25} width={25} alt="alt" />
        </a>
      </div>

      <main>
        <div className="md:p-5 flex flex-col items-center justify-center background ">
          <div className="p-5 pb-10 max-w-[1000px] rounded-xl ">
            <div className="mt-1 flex items-center justify-center text-5xl md:text-7xl p-1 md:tracking-[15px] ">
              HRUSHIKESH PATEL
            </div>

            <div
              className=" mt-[4rem] rounded-xl p-5 border stylize"
              id="aboutme"
            >
              <h className="text-4xl ">About me</h>
              <p className="mt-5 tracking-[1px]">Hi,</p>
              <p className="mt-2 tracking-[1px]">
                I am an software developer with a record of delivering
                innovative solutions. With good experience in libraries like
                ReactJs and NextJs, I am also proficient in several other
                programming languages such as C++, C, Python.
              </p>
            </div>

            <div
              className=" mt-[4rem] rounded-xl p-5 border stylize"
              id="mywork"
            >
              <h className="text-4xl ">My work</h>
              <div className="grid md:grid-cols-[repeat(_auto-fit,minmax(250px,1fr)_)] gap-5 mt-5 ">
                <Card
                  title="Amazon Clone"
                  content="I have building this clone site to practice redux. It is a multi page React application that uses MUI for a few of its key components. It demonstrates the uses of react router and redux toolkit"
                  link="https://github.com/hrushikesh-02/AmazonClone"
                />
                <Card
                  title="Ecomm-Store"
                  content="The E-commerce store is a simple display of a Multi-page application made using NextJs (v13) with redux and redux-toolkit. The site uses the fakestore API for fetching products and its details."
                  link="https://ecommreduxtoolkit.netlify.app/"
                />
                <Card
                  title="Resumifi"
                  content="Resumifi is a resume building site made using ReactJs. Resumifi allows one to create a simple resume with ease."
                  link="https://hrushikesh-02.github.io/resumifi/"
                />
                <Card
                  title="GPA Calculator"
                  content="GPA Calculator is used to calculate the CPA based on grade and credit. The app has been used over 65K by user from our university!"
                  link="https://gpacal.live/"
                />
                <Card
                  title="Weather App"
                  content="Weather app is aesthetic responsive web app for checking the weather of any city. It uses Open-weather API for fetching input related data."
                  link="https://hrushikesh-02.github.io/weatherapp/"
                />
                <Card
                  title="Task Manager"
                  content="This app uses framer motion to give life to the site. It uses firebase as backend and allows a user to sync data using their G-Mail account."
                  link="https://taskmanager-356a9.web.app/"
                />
                <Card
                  title="Todo App"
                  content="It is a basic version of task manager which has basic animation and only local storage for its data storage."
                  link="https://hrushikesh-02.github.io/todoApp/"
                />
                <Card
                  title="Portfolio (old)"
                  content="This was one of my first attempts to build a portfolio site while learning HTML, CSS and Javascript. It is responsive too!"
                  link="https://hrushikesh-02.github.io/Portfolio/"
                />
                <Card
                  title="Gnossis (old)"
                  content="This is a replica of site which i recreated using HTML, CSS."
                  link="https://hrushikesh-02.github.io/Gnosis/"
                />
              </div>
            </div>

            <div
              data-aos="fade-in"
              data-aos-duration="1000"
              className=" mt-[4rem]  rounded-xl p-5 border stylize"
              id="education"
            >
              <h className="text-4xl">Education</h>
              <ol className="ml-2 relative border-l border-black dark:border-gray-700 mt-5">
                <Timeline
                  date="2024"
                  title="SRM University"
                  description="B.Tech CSE  - (9.4 CGPA)"
                />
                <Timeline
                  date="2020"
                  title="Hillwoods School"
                  description="Senior High School  - (74%)"
                />
                <Timeline
                  date="2017"
                  title="New Horizon Gurukul"
                  description="High School - (82%)"
                />
              </ol>
            </div>

            <div
              data-aos="fade-in"
              data-aos-duration="1000"
              className=" mt-[4rem] rounded-xl p-5 border stylize"
              id="achievements"
            >
              <h className="text-4xl">Achievements</h>
              <AchievementCard
                img={
                  <Image
                    src={abinitio}
                    alt="image nahi mil rahi hai"
                    width={400}
                    height={500}
                    className="rounded-xl object-cover"
                  />
                }
                title="Abinitio"
                link="https://www.linkedin.com/feed/update/urn:li:activity:6981989980457906176/"
                content="During this hackathon we made a model for predicting disease using symptoms. Our model had score an accuracy of around 80-90%. We were placed first in this hackathon!"
              />
              <AchievementCard
                img={
                  <Image
                    src={abinitio2}
                    alt="image nahi mil rahi hai"
                    width={400}
                    height={500}
                    className="rounded-xl object-cover"
                  />
                }
                title="Abinitio 2.0"
                link="https://www.linkedin.com/feed/update/urn:li:activity:7043950725416046592/"
                content="In this hackathon we build a model to predict students grade based on their backgrounds. We managed to score a accuracy of 80.6%. We were placed first in this hackathon!"
              />
              <AchievementCard
                img={
                  <Image
                    src={brainfreeze2}
                    alt="image nahi mil rahi hai"
                    width={400}
                    height={500}
                    className="rounded-xl object-cover"
                  />
                }
                title="BrainFreeze 2.0"
                link="https://www.linkedin.com/feed/update/urn:li:activity:7045773520437477376/"
                content="This was one of the more intersting hackathons with more than 30 teams participating. We had to use our SQL knowledge to solve a murder mystery and also had to clear a rapid-fire quiz round. We placed first as a team and won a voucher of 1500RS!"
              />
            </div>

            <div
              data-aos="fade-in"
              data-aos-duration="1000"
              className=" mt-[4rem] rounded-xl p-5 border stylize"
              id="skills"
            >
              <h className="text-4xl">Skills</h>
              <div className="flex flex-col md:grid grid-container gap-5 mt-5">
                <div className="sk1">
                  <SkillTile
                    icon={
                      <Image
                        src={reacticon}
                        width={69}
                        height={69}
                        alt="alt shit"
                      />
                    }
                    title="ReactJs"
                  />
                </div>
                <div className="sk2">
                  <SkillTile
                    icon={
                      <Image height={69} src={cssicon} width={69} alt="alt" />
                    }
                    title="CSS (Tailwind, Bootstrap)"
                  />
                </div>
                <div className="sk3">
                  <SkillTile
                    icon={
                      <Image src={html5icon} height={69} width={69} alt="alt" />
                    }
                    title="HTML5"
                  />
                </div>
                <div className="sk4">
                  <SkillTile
                    icon={
                      <Image height={69} src={jsicon} width={69} alt="alt" />
                    }
                    title="JavaScript"
                  />
                </div>
                {/* <div className="sk5">
                  <SkillTile
                    icon={
                      <Image
                        height={69}
                        src={mongodbicon}
                        width={69}
                        alt="alt"
                      />
                    }
                    title="MongoDB"
                  />
                </div> */}
                <div className="sk6">
                  <SkillTile
                    icon={
                      <Image height={69} src={cppicon} width={69} alt="alt" />
                    }
                    title="C++"
                  />
                </div>
                <div className="sk7">
                  <SkillTile
                    icon={
                      <Image height={69} src={javaicon} width={69} alt="alt" />
                    }
                    title="Java (Basic)"
                  />
                </div>
                <div className="sk8">
                  <SkillTile
                    icon={
                      <Image
                        height={69}
                        src={firebaseicon}
                        width={69}
                        alt="alt"
                      />
                    }
                    title="Firebase"
                  />
                </div>
                <div className="sk9">
                  <SkillTile
                    icon={
                      <Image
                        height={69}
                        src={nodejsicon}
                        width={69}
                        alt="alt"
                      />
                    }
                    title="NodeJs (NPM)"
                  />
                </div>
                <div className="sk10">
                  <SkillTile
                    icon={
                      <Image height={69} src={cicon} width={69} alt="alt" />
                    }
                    title="C"
                  />
                </div>
                <div className="sk11">
                  <SkillTile
                    icon={
                      <Image
                        height={69}
                        src={pythonicon}
                        width={69}
                        alt="alt"
                      />
                    }
                    title="Python"
                  />
                </div>
                <div className="sk12">
                  <SkillTile
                    icon={
                      <Image height={69} src={dbicon} width={69} alt="alt" />
                    }
                    title="SQL"
                  />
                </div>
              </div>
            </div>

            <div
              data-aos="fade-in"
              data-aos-duration="1000"
              className=" mt-[4rem] rounded-xl p-5 border stylize"
              id="platformlinks"
            >
              <h className="text-4xl">Platform Links</h>
              <div className="grid grid-cols-[repeat(_auto-fit,minmax(100px,1fr)_)] gap-5 mt-5 ">
                <Tile
                  icon={<GitHubIcon />}
                  title="Github"
                  link="https://github.com/hrushikesh-02"
                />
                <Tile
                  icon={<BarChartIcon />}
                  title="Codeforces"
                  link="https://codeforces.com/profile/lil_hrushi"
                />
                <Tile
                  icon={<ClosedCaptionIcon />}
                  title="CodeChef"
                  link="https://www.codechef.com/users/lil_hrushi"
                />
                <Tile
                  icon={<HMobiledataIcon />}
                  title="HackerRank"
                  link="https://www.hackerrank.com/lil_hrushi"
                />
                <Tile
                  icon={<CodeIcon />}
                  title="LeetCode"
                  link="https://leetcode.com/lil_hrushi/"
                />
              </div>
            </div>

            <div
              data-aos="fade-in"
              data-aos-duration="1000"
              className=" mt-[4rem] rounded-xl p-5 border stylize"
              id="certifications"
            >
              <h className="text-4xl">Certifications</h>
              <div className="grid grid-cols-[repeat(_auto-fit,minmax(200px,1fr)_)] gap-5 mt-5">
                <Card
                  title="Machine Learning Onramp"
                  link="https://matlabacademy.mathworks.com/progress/share/certificate.html?id=cba61f0c-9e40-439c-baed-bdaf41eede47&"
                />
                <Card
                  title="Process Automation Bootcamp"
                  link="https://www.credly.com/badges/4d77bb5d-322c-4a05-91e8-9633bf089ca0/public_url"
                />
                <Card
                  title="Getting started with storage"
                  link="https://www.credly.com/badges/12a64739-b2d4-4614-adc0-b49e45a24b45/public_url"
                />
              </div>
            </div>
          </div>
        </div>
        <footer className=" w-[100%] flex flex-col items-center text-neutral-500 bg-yellow-200 ">
          <div className="w-[100%] p-5 flex flex-col items-center stylize2">
            <div className="p3  flex flex-col items-center">
              <div className="flex items-center mt-2 gap-1">
                <a
                  href="mailto:hrushikesh592002@gmail.com"
                  className="underline"
                >
                  hrushikesh592002@gmail.com
                </a>
              </div>
              <div
                className="flex items-center mt-2 gap-1"
                onClick={() => {
                  window.open("https://www.linkedin.com/in/hrushikesh02/");
                }}
              >
                <div className="underline"> Lets Connect!</div>
              </div>
            </div>
            <div className="p3 text-sm mt-2">COPYRIGHT © Hrushikesh Patel</div>
          </div>
        </footer>
      </main>
    </>
  );
}
