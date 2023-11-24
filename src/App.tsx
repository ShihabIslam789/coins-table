import { useState } from "react";
import AmountInput from "./AmountInput";
import ResultRow from "./ResultRow";
import {sortBy} from 'lodash';

type CachedResult = {
  provider:string;
  btc:string;
}

function App() {
  const [prevAmount,setPrevAmount] = useState(defaultAmount);
  const [amount,setAmount] = useState(defaultAmount);
  const [cachedResults,setCachedResults] = useState<CachedResult[]>([]);
  const [offerResults,setOfferResults] = useState<OfferResults>({});
  const [loading,setLoading] = useState(true);
  useEffect(() => {
    axios.get('https://rds54favbg.us.aircode.run/cachedValues')
      .then(res => {
        setCachedResults(res.data);
        setLoading(false);
      });
  }, []);

  const sortedCache = sortBy(cachedResults, 'btc').reverse();

  return (
    <main className="max-w-2xl mx-auto px-4 py-8">
      <h1 className="uppercase text-6xl text-center font-bold
       bg-gradient-to-br from-purple-600 to-sky-400 bg-clip-text
       text-transparent from-30%">Find cheapest BTC</h1>
       <div className="flex justify-center mt-4">
          <AmountInput 
          value = {amount} 
          onChange={e => setAmount(e.target.value)}
          />
      </div>
      <div className="mt-6">
        { loading && (
          <>
        <ResultRow loading={true}  />
        <ResultRow loading={true}   />
        <ResultRow loading={true}   />
        <ResultRow loading={true}   />
        </>
        )}
        {!loading && sortedCache.map((result:CachedResult) =>  (
            <ResultRow 
            providerName={result.provider} 
            btc = {result.btc}
            />
        ))}
      </div>
    </main>
     
  )
}

export default App
