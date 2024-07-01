import React from "react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const Index = () => {
  const navigate = useNavigate();

  return (
    <div className="h-screen w-screen flex items-center justify-center">
      <div>
        <h1 className="text-4xl text-center">Welcome to the Live Podcasting Communities Management System</h1>
        <p className="text-center">
          Integrate and sync your live podcast shows across multiple social media platforms.
        </p>
        <div className="flex justify-center mt-4 space-x-2">
          <Button variant="outline" onClick={() => navigate("/about")}>About</Button>
          <Button variant="outline" onClick={() => navigate("/contact")}>Contact</Button>
        </div>
      </div>
    </div>
  );
};

export default Index;