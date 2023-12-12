import { useEffect,useRef } from 'react';
import videojs from 'video.js';
import 'video.js/dist/video-js.css';

export const VideoJS = (props: any) => {
    const videoRef = useRef(null);
    const playerRef = useRef(null);
    const {options, onReady} = props;

    useEffect(() => {

        if (!playerRef.current) {
        const videoElement = document.createElement("video-js");
        videoElement.classList.add('vjs-big-play-centered');
        // @ts-ignore
        videoRef.current.appendChild(videoElement);
        // @ts-ignore
        const player = playerRef.current = videojs(videoElement, options, () => {
            videojs.log('player is ready');
            onReady && onReady(player);
        });
        } else {
        const player = playerRef.current;
        // @ts-ignore
        player.autoplay(options.autoplay);
        // @ts-ignore
        player.src(options.sources);
        }
    }, [options, videoRef]);

    useEffect(() => {
        const player = playerRef.current;

        return () => {
        // @ts-ignore
        if (player && !player.isDisposed()) {
            // @ts-ignore
            player.dispose();
            playerRef.current = null;
        }
        };
    }, [playerRef]);

    return (
        <div data-vjs-player>
            <div ref={videoRef} />
        </div>
    );
}

export default VideoJS;