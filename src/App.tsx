import { useEffect } from "react";
import { supabase } from "./lib/supabase";
import AppRoutes from "./routes/AppRoutes";

function App() {

  useEffect(() => {
    console.log("SUPABASE CONNECTED:", supabase);
  }, []);

  return (
    <div className="relative min-h-screen bg-black text-white overflow-hidden">
      <div className="absolute top-0 left-0 w-72 h-72 bg-purple-500/20 rounded-full blur-3xl" />

      <div className="absolute bottom-0 right-0 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl" />

      <AppRoutes />
    </div>
  );
}

export default App;