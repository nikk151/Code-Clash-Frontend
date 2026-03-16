import React from 'react';
import BackgroundEffects from '../components/match/BackgroundEffects';
import MatchResultCard from '../components/match/MatchResultCard';

function PostMatch() {
  const winnerData = {
    type: 'victory',
    playerName: 'CodeNinja',
    oldRating: '1450',
    newRating: '1485',
    ratingChange: '+35',
    avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuASyFDX0AJwF0JYKSxdqVXE0TdA_z7uPRuVUtruKszT2OpMSZwYRkb3izBBDFlQsnzcwIVvC6IHU9WHZSInxXXv5MuV7W0z5_V5k1QA2uBtvMIh94YJGQx_-3a9upUcG5LJLSdsceXQcc4adOKXYFSRBeGPxN54dKGZOEjANBOyR-BRdpKU4t-w_uNFoTMxmq5mlCCvG_0F167YT2EHCarvbWHgNgX_LA4g8cWC-XBNTjfttRAp1rmjgx_zv8ngUSNFYkDC8pFx6fE'
  };

  const loserData = {
    type: 'defeat',
    playerName: 'PixelPusher',
    oldRating: '1450',
    newRating: '1435',
    ratingChange: '-15',
    avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDtLnJTqVjW9NUkETX1s63HkIm8yf2SgUQ7IZh2I3Zy2LCslX8m98iAEhMHNg5fYqir8x1va0WCI3XxxA0SHOX3z12Ld5XPWnUf0hdicynTJV7AWbQvH6HKcc3ThGyknzB6HCBap1Q7IF3AWiJKzlNV5si5R6CPi_LvsIwVbXgfm4HOMwgsNWBWInbaSD1qyT3b0O4djg4TfAEvXOoHy0JT89vPKMre0Yz60U2WxYqQmsQX0coUZJyG9BBHBDDF_EJFbkW6UPW8hmk'
  };

  return (
    <div className="bg-background-light dark:bg-background-dark font-display text-slate-900 dark:text-slate-100 min-h-screen relative overflow-x-hidden">
      <BackgroundEffects>
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 backdrop-blur-md bg-background-dark/60">
          <div className="max-w-5xl w-full grid md:grid-cols-2 gap-6">
            <MatchResultCard {...winnerData} />
            <MatchResultCard {...loserData} />
          </div>
        </div>
      </BackgroundEffects>
    </div>
  );
}

export default PostMatch;
