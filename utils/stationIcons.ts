import type { DivIcon } from "leaflet";

export async function createStationIcon(
  color: string | string[],
  isBRT: boolean,
  isActive: boolean = true
): Promise<DivIcon> {
  const L = await import("leaflet");

  const generateBackgroundStyle = (colors: string | string[]) => {
    if (typeof colors === "string") {
      return `background-color: ${colors};`;
    }

    const colorStops = colors
      .map(
        (color, index) =>
          `${color} ${(index / colors.length) * 100}%, ${color} ${
            ((index + 1) / colors.length) * 100
          }%`
      )
      .join(", ");

    return `
      background: conic-gradient(${colorStops});
      animation: spin 25s linear infinite;
    `;
  };

  const backgroundStyle = generateBackgroundStyle(color);

  const html = `
    <div class="station-icon ${
      isActive ? "" : "disabled"
    }"> <!-- Apply 'disabled' class -->
      <div class="background-layer" style="${backgroundStyle}"></div>
      <div class="content-layer">
        ${
          isBRT
            ? '<svg xmlns="http://www.w3.org/2000/svg" class="h-3 w-3" viewBox="0 0 20 20" fill="currentColor"><path d="M8 16H6V8h2v8zm6 0h-2V8h2v8zm3-12H3c-1.1 0-2 .9-2 2v8c0 1.1.9 2 2 2h1v1c0 .55.45 1 1 1s1-.45 1-1v-1h8v1c0 .55.45 1 1 1s1-.45 1-1v-1h1c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 10H3V6h14v8z"/></svg>'
            : // '<svg style="scale: .8" viewBox="0 -0.5 17 17" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>998</title> <defs> </defs> <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"> <g transform="translate(2.000000, 0.000000)" fill="aliceblue"> <path d="M3,15.979 L2.021,15.979 L3.021,11.979 L4,11.979 L3,15.979 Z" class="si-glyph-fill"> </path> <path d="M11,15.979 L10.021,15.979 L9.021,11.979 L10,11.979 L11,15.979 Z" class="si-glyph-fill"> </path> <rect x="3" y="14" width="6.90025" height="0.926" class="si-glyph-fill"> </rect> <path d="M9.98774831,0.038 L3.09525936,0.038 C0.853185102,0.038 0.041,0.725809406 0.041,2.81337129 L0.041,10.5974833 C0.041,12.4447141 0.854192776,13.038 3.02472219,13.038 L10.7495497,13.038 C12.3235362,13.038 13.041,12.435664 13.041,10.5974833 L13.041,2.81337129 C13.041,0.725809406 12.2318379,0.038 9.98774831,0.038 L9.98774831,0.038 Z M4.21289062,1 L8.78710938,1 C8.90429688,1 9,1.22644771 9,1.49956785 C9,1.77268799 8.90429688,2 8.78710938,2 L4.21289062,2 C4.09570312,2 4,1.77268799 4,1.49956785 C4,1.22644771 4.09570312,1 4.21289062,1 L4.21289062,1 Z M4.016,11.016 L1.969,11.016 L1.969,8.985 L4.016,8.985 L4.016,11.016 L4.016,11.016 Z M11.016,11.016 L8.969,11.016 L8.969,8.985 L11.016,8.985 L11.016,11.016 L11.016,11.016 Z M11.053,5.781 C11.053,6.845 10.887,7.038 9.925,7.038 L3.091,7.038 C2.127,7.038 1.964,6.892 1.964,5.828 L1.964,4.156 C1.964,3.094 2.127,2.958 3.091,2.958 L9.925,2.958 C10.887,2.958 11.053,3.156 11.053,4.219 L11.053,5.781 L11.053,5.781 Z" class="si-glyph-fill"> </path> </g> </g> </g></svg>'

              '<img style=" -webkit-filter: invert(100%);filter: invert(100%); padding-right: 1px;" src="/subway.webp" />'
        }
      </div>
    </div>
  `;

  return L.divIcon({
    html,
    className: "",
    iconSize: [24, 24],
    iconAnchor: [12, 12],
  });
}
