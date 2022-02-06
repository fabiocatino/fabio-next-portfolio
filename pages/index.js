import { projectAtom, userAtom } from "../src/store/atoms";

import About from "../src/components/About";
import Contact from "../src/components/Contact";
import Intro from "../src/components/Intro";
import Jobs from "../src/components/Jobs";
import LeftSidebar from "../src/components/Layout/LeftSidebar";
import Project from "../src/models/projectModel";
import Projects from "../src/components/Layout/Projects";
import RightSidebar from "../src/components/RightSidebar";
import User from "../src/models/userModel";
import dbConnect from "../src/lib/dbConnect";
import { useEffect } from "react";
import { useSetRecoilState } from "recoil";

function Home({
  sortedData,
  sortedJobs,
  description,
  title,
  projects,
  filteredList,
  unfilteredList,
  socials,
}) {
  const setSkills = useSetRecoilState(userAtom);
  const setProjects = useSetRecoilState(projectAtom);
  useEffect(() => {
    setSkills({ skills: sortedData, description, title, jobs: sortedJobs });
    setProjects(projects);
  }, [
    description,
    setSkills,
    sortedData,
    setProjects,
    title,
    projects,
    sortedJobs,
  ]);

  return (
    <div>
      <div className="fixed left-10 w-10 bottom-0 right-auto animate-fadedown">
        <LeftSidebar socials={socials} />
      </div>

      <div className="fixed right-10 w-10 bottom-0 left-auto animate-fadedown">
        <RightSidebar />
      </div>

      <Intro title={title} />

      <About description={description} />

      <Jobs sortedJobs={sortedJobs} />

      <Projects filteredList={filteredList} unfilteredList={unfilteredList} />

      <Contact />
    </div>
  );
}

export default Home;

export async function getStaticProps() {
  await dbConnect();

  const user = await User.findOne({ email: process.env.EMAIL_USERNAME });
  const projects = await Project.find({});

  const { description, socials, title, skills, jobs } = user;
  const sortedData = skills.sort((a, b) => (a.level < b.level ? 1 : -1));
  const sortedJobs = jobs.sort((a, b) => (a.addedAt < b.addedAt ? 1 : -1));

  let filteredList = [];
  let unfilteredList = [];

  for (let i in projects) {
    filteredList.push(projects[i]);
    unfilteredList.push(projects[i]);
  }
  filteredList = filteredList.filter((item) => item.isFeatured);
  unfilteredList = unfilteredList.filter((item) => !item.isFeatured);

  if (!user || !projects) {
    return {
      notFound: true,
    };
  }
  return {
    props: {
      sortedData: JSON.parse(JSON.stringify(sortedData)),
      sortedJobs: JSON.parse(JSON.stringify(sortedJobs)),
      description,
      filteredList: JSON.parse(JSON.stringify(filteredList)),
      unfilteredList: JSON.parse(JSON.stringify(unfilteredList)),
      socials: JSON.parse(JSON.stringify(socials)),
      title: title ?? "",
      projects: JSON.parse(JSON.stringify(projects)),
    },
    revalidate: 60,
  };
}
