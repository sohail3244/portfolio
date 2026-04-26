'use client';

import dynamic from 'next/dynamic';
import { EncryptedText } from "@/components/ui/encrypted-text";
import React from "react";

const Lanyard = dynamic(() => import('@/components/common/Lanyard'), {
  ssr: false,
});

export default function Page() {
  return (
    <div className="relative w-full h-screen overflow-visible">

      {/* Background */}
      <div className="absolute inset-0 flex justify-end pr-20">
  <Lanyard position={[5, 0, 20]} />
</div>
    </div>
  );
}