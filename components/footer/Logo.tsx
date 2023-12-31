import type { Image as LiveImage } from "deco-sites/std/components/types.ts";

export interface Props {
  logo?: {
    image: LiveImage;
    description?: string;
  };
}

export default function Logo({ logo }: Props) {
  return (
    <>
      {logo?.image && (
        <div class="flex flex-col gap-3 max-w-[250px]">
          <div class="w-28 max-h-16">
            <img
              src={logo?.image}
              alt={logo?.description}
              width={200}
              height={200}
            />
          </div>
          <div class="">
            {logo?.description}
          </div>
        </div>
      )}
    </>
  );
}
