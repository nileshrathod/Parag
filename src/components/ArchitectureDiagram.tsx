import {ArrowRight} from 'lucide-react';
import type {ArchitectureLayer} from '../data/solutions';

interface ArchitectureDiagramProps {
  layers: ArchitectureLayer[];
  label: string;
}

export function ArchitectureDiagram({layers, label}: ArchitectureDiagramProps) {
  return (
    <div aria-label={label} className="pt-2">
      <div className="mb-3 flex items-center justify-between gap-4 text-xs text-[#475467] dark:text-[#CBD5E1]">
        <span className="font-[var(--font-mono)] font-medium text-[#155EEF] dark:text-[#5B8CFF]">
          Conceptual Architecture Flow
        </span>
        <span>Illustrative Example</span>
      </div>

      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
        {layers.map((layer, index) => (
          <div
            key={`${layer.stage}-${layer.title}`}
            className="relative flex flex-col justify-between rounded-lg border border-[#E4E7EC] bg-[#F5F7FB] p-4 dark:border-[#263244] dark:bg-[#080B12]"
          >
            <div>
              <div className="mb-2 flex items-center justify-between gap-2">
                <span className="font-[var(--font-mono)] text-xs tabular-nums text-[#12B8A6] dark:text-[#2DD4BF]">
                  0{index + 1} · {layer.stage}
                </span>
                {index < layers.length - 1 && (
                  <ArrowRight
                    className="hidden h-3.5 w-3.5 text-[#475467] dark:text-[#94A3B8] lg:block"
                    aria-hidden="true"
                  />
                )}
              </div>
              <p className="font-[var(--font-display)] text-sm font-semibold text-[#101828] dark:text-[#FFFFFF]">
                {layer.title}
              </p>
              <p className="mt-1 text-xs leading-relaxed text-[#475467] dark:text-[#CBD5E1]">
                {layer.detail}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
