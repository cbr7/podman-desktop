<script lang="ts">
import { onMount } from 'svelte';

import { AppearanceUtil } from '/@/lib/appearance/appearance-util';

export let color: string | { light: string; dark: string } = 'bg-[var(--pd-badge-gray)]';
export let label: string = '';

let customStyle: string = '';
let customClass: string = '';

onMount(async () => {
  const appearanceUtil = new AppearanceUtil();

  // get the color
  let singleColor = await appearanceUtil.getImage(color);
  singleColor ??= '';

  if (singleColor?.startsWith('#')) {
    customStyle = `background-color: ${singleColor};`;
  } else {
    customClass = singleColor ?? '';
  }
});
</script>

<div class="text-[var(--pd-badge-text)] text-xs me-2 px-1 py-0.5 rounded-sm select-none {customClass} {$$props.class}" style={customStyle} aria-label="badge-{label}">
  {label}
</div>
