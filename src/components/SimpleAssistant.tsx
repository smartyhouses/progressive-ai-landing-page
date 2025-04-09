"use client";

import { AgentMultibandAudioVisualizer } from "@/components/visualization/AgentMultibandAudioVisualizer";
import { useMultibandTrackVolume } from "@/hooks/useTrackVolume";
import {
  useConnectionState,
  useLocalParticipant,
  useTracks,
  useVoiceAssistant,
  AgentState,
} from "@livekit/components-react";
import { motion } from "framer-motion";
import { ConnectionState, LocalParticipant, Track } from "livekit-client";
import { useEffect, useState } from "react";
import { MicrophoneButton } from "./MicrophoneButton";
import { LoadingSVG } from "./button/LoadingSVG";

export interface SimpleAssistantProps {
  onConnect: (connect: boolean) => void;
}

const barCount = 5;
const defaultVolumes = Array.from({ length: barCount }, () => [0.0]);

export const SimpleAssistant = ({ onConnect }: SimpleAssistantProps) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);
  const { localParticipant } = useLocalParticipant();
  const {
    agent: agentParticipant,
    audioTrack: agentAudioTrack,
  } = useVoiceAssistant();
  const roomState = useConnectionState();
  const tracks = useTracks();

  useEffect(() => {
    if (roomState === ConnectionState.Connected) {
      localParticipant.setMicrophoneEnabled(true);
    }
  }, [localParticipant, roomState]);

  const subscribedVolumes = useMultibandTrackVolume(
    agentAudioTrack?.publication.track,
    barCount
  );

  const localTracks = tracks.filter(
    ({ participant }) => participant instanceof LocalParticipant
  );
  const localMicTrack = localTracks.find(
    ({ source }) => source === Track.Source.Microphone
  );

  const localMultibandVolume = useMultibandTrackVolume(
    localMicTrack?.publication.track,
    barCount
  );

  return (
    <div className="flex flex-col w-full h-full">
      {/* Loading indicator */}
      {roomState === ConnectionState.Connecting && (
        <div className="absolute inset-0 flex items-center justify-center bg-black/50 backdrop-blur-sm z-10">
          <LoadingSVG diameter={32} strokeWidth={2} />
        </div>
      )}

      {/* Main content container */}
      <div className="flex flex-col items-center justify-between gap-6 md:gap-8 py-4">
        {/* Voice bars */}
        <div className="flex items-center justify-center w-full h-[100px] md:h-[120px]">
          <AgentMultibandAudioVisualizer
            state={agentParticipant ? 'thinking' : 'disconnected' as AgentState}
            frequencies={subscribedVolumes || defaultVolumes}
            barWidth={isMobile ? 12 : 16}
            minBarHeight={isMobile ? 30 : 40}
            maxBarHeight={isMobile ? 100 : 120}
            gap={isMobile ? 6 : 8}
          />
        </div>

        {/* Audio controls */}
        <div className="flex items-center justify-center gap-4">
          {/* Mic button with input selector */}
          <MicrophoneButton localMultibandVolume={localMultibandVolume || defaultVolumes} />

          {/* Close button */}
          <motion.button
            onClick={() => onConnect(false)}
            className="flex items-center justify-center w-12 h-12 rounded-full bg-red-500 hover:bg-red-600 transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </motion.button>
        </div>
      </div>
    </div>
  );
};
