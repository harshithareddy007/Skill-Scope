import { useEffect } from "react";
import { supabase } from "./lib/supabase";
import AppRoutes from "./routes/AppRoutes";

function App() {

  useEffect(() => {
    console.log("SUPABASE CONNECTED:", supabase);
  }, []);

  return (
    <div className="relative min-h-screen bg-black text-white overflow-hidden">
      
      <AppRoutes />
    </div>
  );
}

export default App;