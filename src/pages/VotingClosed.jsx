import React from "react";
import { Link } from "react-router-dom";
import { HiOutlineEmojiSad } from "react-icons/hi";

const VotingClosed = () => {
  return (
    <div className="flex flex-col justify-center items-center text-center px-4">
      <HiOutlineEmojiSad size={80} className="mb-4 text-red-500" />
      <h1 className="text-5xl font-bold mb-4">Voting Has Ended</h1>
      <p className="text-lg mb-8">
        The voting period is over. Thank you for participating in the election.
      </p>
      <Link
        to="/"
        className="px-6 py-3 bg-white text-primary font-semibold  bg-gradient-to-r from-pink-500 to-purple-600 rounded-lg hover:scale-105 transition"
      >
        Return to Home
      </Link>
    </div>
  );
};

export default VotingClosed;
