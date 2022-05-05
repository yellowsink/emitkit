import { parseSync, printSync } from "@swc/core";

export interface SwcApi {
  parseSync: typeof parseSync;
  printSync: typeof printSync;
}
