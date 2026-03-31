import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft, Monitor } from 'lucide-react';

export const metadata: Metadata = {
  title: 'PC Graphics Settings Explained: The Ultimate Guide | SoloTax',
  description: 'Cut through acronyms like DLSS, TAA, and AO with a practical guide to balancing visuals and performance: resolution, textures, anti‑aliasing, shadows, ray tracing, upscaling, sync, HDR.',
  alternates: { canonical: 'https://freelance-tax.vercel.app/blog/pc-graphics-settings-explained' },
  keywords: ['dlss explained', 'taa vs msaa', 'ambient occlusion hbao+', 'render scale performance', 'ray tracing fps impact'],
};

export default function PostPage() {
  return (
    <main className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto mb-10">
        <Link href="/blog" className="inline-flex items-center text-sm text-gray-500 hover:text-gray-700 mb-6 transition-colors">
          <ArrowLeft className="w-4 h-4 mr-1" />
          Back to Blog
        </Link>
        <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 tracking-tight mb-3">
          PC Graphics Settings Explained: The Ultimate Guide to Visuals vs Performance
        </h1>
        <p className="text-gray-600">Understand what each setting does so you can build presets that look great and run smoothly.</p>
      </div>

      <article className="max-w-3xl mx-auto bg-white rounded-2xl shadow-sm border border-gray-100 p-6 md:p-8 prose prose-blue">
        <h3>1) Resolution & Render Scale</h3>
        <p>Resolution is pixel count (1080p, 1440p, 4K). More pixels means more GPU work. Render Scale lets the game render at a lower internal resolution and upscale to your monitor—dropping to 90–95% can rescue FPS with minimal quality loss.</p>
        <h3>2) Textures & Memory</h3>
        <p>Textures wrap 3D objects. High settings need VRAM; 8GB usually handles High. If you exceed VRAM, you’ll see texture pop‑in. Anisotropic Filtering sharpens textures at angles and is nearly free—set it to 16x.</p>
        <h3>3) Anti‑Aliasing (AA)</h3>
        <ul>
          <li>FXAA: Fast and light; slightly blurry.</li>
          <li>MSAA: Crisp edges; heavy performance cost.</li>
          <li>TAA: Modern standard; smooths edges using prior frames. May cause slight ghosting—pair with sharpening.</li>
        </ul>
        <h3>4) Lighting & Shadows</h3>
        <p>Shadows impact performance almost as much as resolution. Medium shadows preserve natural look. Ambient Occlusion adds micro‑shadows in crevices; HBAO+ is a great quality/performance balance.</p>
        <h3>5) Ray Tracing & Upscaling</h3>
        <p>Ray tracing simulates real light—gorgeous but expensive (30–50% fps hit). Upscaling helps: DLSS (Nvidia) and FSR (AMD) render at lower res and reconstruct detail; use Quality mode. Frame Generation can synthesize in‑between frames to boost FPS.</p>
        <h3>6) Sync & HDR</h3>
        <p>V‑Sync fixes tearing but adds input lag; prefer G‑Sync/FreeSync if available. HDR needs a capable panel (600–1000 nits) to shine; otherwise, SDR is fine.</p>
        <h3>7) Style Settings</h3>
        <p>Disable Chromatic Aberration and Film Grain for sharpness. Motion Blur: consider per‑object blur; disable camera blur for competitive play. Bloom adds glow—use moderately.</p>
        <h3>Practical Preset</h3>
        <ul>
          <li>Performance: Shadows Medium, DLSS/FSR Quality, Render Scale 100% (95% if needed), AF 16x.</li>
          <li>Visuals: High textures (check VRAM), HBAO+, High shadows, DLSS Quality, selective RT (reflections only).</li>
        </ul>
        <div className="not-prose bg-gray-50 rounded-xl border border-gray-200 p-4 my-6 flex items-center gap-2">
          <Monitor className="w-5 h-5 text-gray-700" />
          <p className="text-sm text-gray-700">Tweak one slider at a time, run a quick benchmark, and save two presets: “Competitive” and “Cinematic”.</p>
        </div>
      </article>
    </main>
  );
}
