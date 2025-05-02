import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import LivePoll from "../components/common/LivePoll";
import { useSwipeable } from "react-swipeable";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";

const candidateImages = [
  "olayemi-godwin.jpeg",
  "ajayi-babajide.jpeg",
  "babalola-simisola.jpeg",
  "nwozor-ifeanyichukwu.jpeg",
  "ogoke-chibueze.jpeg",
  "akerele-toluwalope.jpeg",
  "collins-asiwe.jpeg",
  "iseoluwa-korede.jpeg",
  "oni-ebenezer.jpeg",
  "nwani-emmanuel.jpeg",
  "eloke-chibuikem.jpeg",
  "oseni-kehinde.jpeg",
  "iroko-joseph.jpeg",
  "ikpo-david.jpeg",
  "chioma-osueke.jpeg",
  "adeyanju-peter.jpeg",
  "awokson-gracious.jpeg",
  "chinazom-chieme-chimkarila.jpeg",
  "jamal-shehu.jpeg",
  "folasire-folarin.jpeg",
  "folorunso-enoch.jpeg",
  "adebayo-toluwanimi.jpeg",
  "nwabueze-christabel.jpeg",
  "david-okusanya.jpeg",
  "ajiyobiojo-abdulhakeem.jpeg",
  "chidiogo-nwabuike.jpeg",
  "ajetunmobi-victor.jpeg",
  "ajuwon-oreoluwa.jpeg",
  "fagbayide-oluwapelumi.jpeg",
  "olurotimi-oreoluwa.jpeg",
  "olupinla-michael.jpeg",
  "faminu-oluwademilade.jpeg",
];

const Home = () => {
  const { student } = useContext(AuthContext);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Auto-slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % candidateImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  // Swipe handlers
  const swipeHandlers = useSwipeable({
    onSwipedLeft: () =>
      setCurrentImageIndex((prev) => (prev + 1) % candidateImages.length),
    onSwipedRight: () =>
      setCurrentImageIndex((prev) =>
        prev === 0 ? candidateImages.length - 1 : prev - 1
      ),
    trackMouse: true,
  });

  const goNext = () => {
    setCurrentImageIndex((prev) => (prev + 1) % candidateImages.length);
  };

  const goPrev = () => {
    setCurrentImageIndex((prev) =>
      prev === 0 ? candidateImages.length - 1 : prev - 1
    );
  };

  const LandingContent = () => {
    return (
      <div className="container mx-auto overflow-hidden">
        <div className="flex min-h-[90vh] flex-col lg:flex-row gap-12 justify-center items-center py-12 px-4">
          {/* Left content */}
          <div className="flex flex-col gap-4 items-center text-center lg:items-start lg:text-left">
            <h1 className="text-6xl lg:text-8xl leading-none">
              BAES <br /> Executive Election
            </h1>
            <p>Choose your next senate representatives!</p>
            <button
              className="bg-gradient-to-b from-[var(--color-special)] to-[var(--color-accent)] 
              w-fit p-4 rounded-lg"
            >
              <a href="/login">Log In</a>
            </button>
          </div>

          {/* Image carousel */}
          <div
            className="relative w-full h-[550px] lg:w-[550px] lg:h-[700px] flex justify-center items-center rounded-lg overflow-hidden"
            {...swipeHandlers}
          >
            <img
              src={`/candidates/${candidateImages[currentImageIndex]}`}
              alt="Candidate"
              className="w-full h-full object-cover transition duration-1000 ease-in-out"
            />

            {/* Left Button */}
            <button
              onClick={goPrev}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/40 text-white p-2 rounded-full hover:bg-black/60"
            >
              <HiChevronLeft size={28} />
            </button>

            {/* Right Button */}
            <button
              onClick={goNext}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/40 text-white p-2 rounded-full hover:bg-black/60"
            >
              <HiChevronRight size={28} />
            </button>
          </div>
        </div>
      </div>
    );
  };

  return student ? <LivePoll /> : <LandingContent />;
};

export default Home;
