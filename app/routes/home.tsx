import type { Route } from "./+types/home";
import StepBar from "~/components/step_bar/StepBar";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Trib" },
    { name: "description", content: "일본 다시 가고싶다 일본 다시 가고싶다 일본 다시 가고싶다" },
  ];
}

export default function Home() {
  return (
  <>
    <StepBar/>
  </>)
}
