"use client";

import React from "react";
import Image from "next/image";
import { WobbleCard } from "@/components/ui/wobble-card";

export function WobbleCardDemo() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mx-auto w-full">
      <WobbleCard
        containerClassName="col-span-1 lg:col-span-3 bg-blue-900 min-h-[640px] md:min-h-[560px] lg:min-h-[520px] xl:min-h-[500px]"
        className="py-20 sm:py-20"
      >
        <div className="max-w-4xl md:pr-[40%] lg:pr-[45%] xl:pr-[50%]">
          <h3 className="text-left text-balance text-2xl md:text-3xl font-semibold tracking-[-0.015em] text-white">
            Beatsify — Music discovery web app
          </h3>
          <p className="mt-4 text-left text-lg text-neutral-200">
            Uses the Spotify Web API to search, recommend, and create playlists. Heuristics: artist similarity, keyword matching, album diversity.
          </p>
          <p className="mt-3 text-left text-sm text-white/80">
            Tech: Next.js, Node.js, TypeScript, PostgreSQL / Supabase, Vercel
          </p>
          <p className="mt-2 text-left text-sm text-amber-300/90">
            Note: Spotify developer authorization required; demo needs API credentials.
          </p>
          <div className="mt-6 flex gap-4">
            <a
              href="https://beatsify.shreya.dev"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-cyan-300 hover:text-cyan-200 font-semibold text-lg hover:underline"
            >
              Live demo
            </a>
          </div>
        </div>
        <Image
          src="https://seq6ecbqjukmvbmg.public.blob.vercel-storage.com/beatsify-SClyWgPS8VVYVfANn4mFhHxb03kRnS"
          alt="Beatsify – search results and recommended tracks"
          width={1200}
          height={750}
          className="absolute bottom-6 sm:bottom-8 md:bottom-10 right-[-6%] sm:right-[-8%] md:right-[-12%] lg:right-[-16%] xl:right-[-20%] object-contain rounded-2xl w-[260px] sm:w-[380px] md:w-[510px] lg:w-[660px] h-auto pointer-events-none"
          priority
        />
      </WobbleCard>
    </div>
  );
}


