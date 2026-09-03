"use client";

import { useRef } from "react";
import { SiteProvider } from "@/components/SiteContext";
import AudioElement from "@/components/AudioElement";
import Opening from "@/components/Opening";
import Navigation from "@/components/Navigation";
import MusicPlayer from "@/components/MusicPlayer";
import Hero from "@/components/Hero";
import Letter from "@/components/Letter";
import MoreThanEnglish from "@/components/MoreThanEnglish";
import Classroom from "@/components/Classroom";
import Awards from "@/components/Awards";
import PaperWall from "@/components/PaperWall";
import BookCover from "@/components/BookCover";
import FinalPage from "@/components/FinalPage";
import EasterEgg from "@/components/EasterEgg";

export default function Page() {
  const finalPageRef = useRef<HTMLElement>(null);

  return (
    <SiteProvider>
      <AudioElement />
      <Opening />
      <Navigation />
      <MusicPlayer />

      <main>
        <Hero />
        <Letter />
        <MoreThanEnglish />
        <Classroom />
        <Awards />
        <PaperWall
          onFindFinalPage={() =>
            finalPageRef.current?.scrollIntoView({ behavior: "smooth" })
          }
        />
        <BookCover />
        <FinalPage ref={finalPageRef} />
        <EasterEgg />
      </main>
    </SiteProvider>
  );
}
