import { setFailed } from "@actions/core";

import { pull } from "./pull";
import { push } from "./push";

(async () => {
    try {
        await pull();
        await push();
    } catch (e: any) {
        setFailed(JSON.stringify(e.message || e));
    }
})();
