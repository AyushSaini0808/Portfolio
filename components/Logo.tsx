"use client";
import React from "react";
import Image from "next/image";
import {BackgroundGradient} from "@/components/ui/background-gradient";

export function BackgroundGradientDemo() {
    return (
        <div className="flex flex-col items-start gap-4 mt-2">
            <BackgroundGradient className="rounded-[22px] max-w-sm p-1 bg-white dark:bg-zinc-900">
                <Image
                    src={`/logo.jpeg`}
                    alt="jordans"
                    height="60"
                    width="60"
                    className="h-[60px] w-[60px] object-cover rounded-[20px]"
                />
            </BackgroundGradient>
        </div>
    );
}
