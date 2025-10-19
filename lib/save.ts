
import { promises as fs } from "fs";
import path from "path";

export async function saveJSONL(kind: string, record: any) {
  const root = process.cwd();
  const dir = path.join(root, "data", "submissions", kind);
  await fs.mkdir(dir, { recursive: true });

  const date = new Date();
  const yyyy = date.getFullYear();
  const mm = String(date.getMonth() + 1).padStart(2, "0");
  const dd = String(date.getDate()).padStart(2, "0");
  const file = path.join(dir, `${yyyy}-${mm}-${dd}.jsonl`);

  const row = JSON.stringify({ _ts: date.toISOString(), ...record });
  await fs.appendFile(file, row + "\n", "utf8");
}
