import Meta from '@/components/Meta';
import { FullSizeCenteredFlexBox, CenteredFlexBox } from '@/components/styled';

import spotifyFullLogoGreen from './logos/Full_Logo_Green_CMYK.svg';
import youTubeFullLogoDark from './logos/yt_logo_rgb_dark.png';
import youTubeFullLogoLight from './logos/yt_logo_rgb_light.png';
import musicLogo from './logos/undraw_happy_music_g6wc.svg';
import { Image } from './styled';
import { useIsDark } from '@/store/theme';
import useOrientation from '@/hooks/useOrientation';
import { Button } from '@mui/material';

function Welcome() {
  const [isDark] = useIsDark();

  const isPortrait = useOrientation();

  return (
    <>
      <Meta title="Welcome" />
      <FullSizeCenteredFlexBox flexDirection="column">
        <Image alt="react" src={musicLogo} sx={{ my: 4 }} />
        <CenteredFlexBox flexDirection={isPortrait ? 'column' : 'row'} sx={{ my: 4 }}>
          <Image alt="react" src={spotifyFullLogoGreen} />
          <Image alt="react" src={isDark ? youTubeFullLogoDark : youTubeFullLogoLight} />
        </CenteredFlexBox>
        Convert your favourite playlist into your favourite music streaming service from anywhere
        🎶🎻
        <Button onClick={() => {}} sx={{ my: 3 }}>
          Start
        </Button>
      </FullSizeCenteredFlexBox>
    </>
  );
}

export default Welcome;
