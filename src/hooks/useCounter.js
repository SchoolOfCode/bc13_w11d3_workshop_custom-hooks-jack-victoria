// Extract the common logic in the BasicCounter and the SheepCounter components into a custom hook called useCounter. Write your hook in src/hooks/useCounter.js and then import and use it within both components.

// Will we use state or state logic?
// The hook needs to take in:
// and return: 
import { useState } from "react";

export function useBasicCounter(){

    // "using state logic" as opposed to creating a single state(?) This state isn't common to all components where this hook is used, it creates a new one for each calling instance. A bespoke state!

    // THESE FUNCTIONS ARE HOW THIS COUNT IS CHANGED!! Much like state/setState
    
    const [count, setCount] = useState(0);
    
    function increment() {
        setCount((count) => count + 1);
    }
    function decrement() {
        setCount((count) => Math.max(0, count - 1));
    }

return [count, increment, decrement]

}