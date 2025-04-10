import {
  TrackToggle,
  useLocalParticipant,
  useMaybeRoomContext,
} from "@livekit/components-react";
import { Track } from "livekit-client";
import { useEffect, useState } from "react";
import { Button } from "./button/Button";
import { DeviceSelector } from "./DeviceSelector";
import { MicrophoneOffSVG, MicrophoneOnSVG } from "./ui/icons";
import { AgentMultibandAudioVisualizer } from "./visualization/AgentMultibandAudioVisualizer";

type MicrophoneButtonProps = {
  localMultibandVolume: Float32Array[];
};
export const MicrophoneButton = ({
  localMultibandVolume,
}: MicrophoneButtonProps) => {
  const room = useMaybeRoomContext();
  const localParticipant = useLocalParticipant();
  const [isMuted, setIsMuted] = useState(localParticipant.isMicrophoneEnabled);
  useEffect(() => {
    setIsMuted(localParticipant.isMicrophoneEnabled === false);
  }, [localParticipant.isMicrophoneEnabled]);

  return (
    <Button
      state="secondary"
      size="small"
      className="flex items-center justify-center gap-1 h-10 w-10 rounded-full p-0 overflow-hidden"
      onClick={() => {}}
    >
      <TrackToggle
        source={Track.Source.Microphone}
        className={
          "flex items-center justify-center w-full h-full " +
          (isMuted ? "opacity-50" : "")
        }
        showIcon={false}
      >
        <div className="w-5 h-5">
          {isMuted ? <MicrophoneOffSVG /> : <MicrophoneOnSVG />}
        </div>
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <AgentMultibandAudioVisualizer
            state="speaking"
            barWidth={2}
            minBarHeight={1}
            maxBarHeight={8}
            frequencies={localMultibandVolume}
            gap={1}
          />
        </div>
      </TrackToggle>
    </Button>
  );
};
