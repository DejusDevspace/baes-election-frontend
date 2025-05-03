import React from "react";
import { Navigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import { useVoting } from "../../context/VotingContext";

/**
 * Wraps protected routes and redirects unauthenticated users
 * @param {ReactNode} children - Component to render if authenticated
 */
const ProtectedRoute = ({ children }) => {
  const { student, loading } = useContext(AuthContext);
  const { hasVoted } = useVoting();
  const votingDeadline = new Date("2025-05-03T22:00:00");
  const now = new Date();

  if (loading) return <p>Loading...</p>;

  if (!student) return <Navigate to="/login" replace />;

  if (now > votingDeadline) return <Navigate to="/voting-closed" replace />;

  if (hasVoted) return <Navigate to="/response-recorded" replace />;

  return children;
};

export default ProtectedRoute;
