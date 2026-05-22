import { useEffect } from "react";
import { supabase } from "./lib/supabase";
import AppRoutes from "./routes/AppRoutes";
import CursorGlow from "./components/CursorGlow";

function App() {

  useEffect(() => {
    console.log("SUPABASE CONNECTED:", supabase);
  }, []);

  return (
    <div className="relative min-h-screen bg-black text-white overflow-hidden">
      <AppRoutes />
      <CursorGlow />
    </div>
  );
}

export default App;