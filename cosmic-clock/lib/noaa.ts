export interface NOAAKpData {
  kpIndex: number;
  label: string;
  color: string;
  timeTag: string;
}

export async function fetchLiveNOAAData(): Promise<NOAAKpData> {
  try {
    const res = await fetch("https://services.swpc.noaa.gov/json/planetary_k_index_1m.json");
    const data = await res.json();
    const latest = data[data.length - 1];
    const kp = latest ? latest.kp_index : 2.1;

    let label = "GEOMAGNETIC QUIET";
    let color = "text-emerald-400";

    if (kp >= 4) {
      label = "GEOMAGNETIC UNREST";
      color = "text-amber-400";
    }
    if (kp >= 6) {
      label = "GEOMAGNETIC STORM";
      color = "text-red-400";
    }

    return { kpIndex: kp, label, color, timeTag: latest?.time_tag || "" };
  } catch {
    return { kpIndex: 2.1, label: "QUIET (FALLBACK)", color: "text-emerald-400", timeTag: "" };
  }
}
