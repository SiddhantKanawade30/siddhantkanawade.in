import { StaticImageData } from "next/image"
import Blogito from "@public/Blogito.png"
import OnTrack from "@public/onTrack.webp"
import SecureVault from "@public/securevault.webp"
import TestimonialsLo from "@public/testimonialslo.webp"
import FitKaka from "@public/fitkaka.webp"
import Syncoo from "@public/syncoo.webp"
import CanvasBoard from "@public/canvas.webp"
import Radix from "@public/radix.webp"
import SuperteamUK from "@public/superteamUK.webp"
import InterviewPrepAgent from "@public/interview-prep-agent.png"

export const projectImages: Record<string, StaticImageData> = {
  "interview-prep-agent.png": InterviewPrepAgent,
  "testimonialslo.webp": TestimonialsLo,
  "Blogito.png": Blogito,
  "onTrack.webp": OnTrack,
  "securevault.webp": SecureVault,
  "fitkaka.webp": FitKaka,
  "syncoo.webp": Syncoo,
  "canvas.webp": CanvasBoard,
  "radix.webp": Radix,
  "superteamUK.webp": SuperteamUK,
}
