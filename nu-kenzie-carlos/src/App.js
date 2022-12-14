import { FinancePage } from "./components/financePage/financePage/financePage";
import { InitialPage } from "./components/initialPage/brandSide/initialPage";
import { useState } from "react";
function App() {
  const [page, setPage] = useState(true);
  return (
    <>
      {page ? <InitialPage page={setPage} /> : <FinancePage page={setPage} />}
    </>
  );
}
export default App;
