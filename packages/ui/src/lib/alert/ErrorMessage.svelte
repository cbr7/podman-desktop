<script lang="ts">
import { faExclamationCircle } from '@fortawesome/free-solid-svg-icons';
import { onMount } from 'svelte';

import Icon from '../icons/Icon.svelte';
import Tooltip from '../tooltip/Tooltip.svelte';

interface Props {
  error: string;
  icon?: boolean;
  wrapMessage?: boolean;
  class?: string;
  'aria-label'?: string;
}

let { error, icon = false, wrapMessage = false, class: className, 'aria-label': ariaLabel }: Props = $props();

let customClassWidth = $state('');
let left = $state(false);
let top = $state(false);

onMount(() => {
  if (wrapMessage) {
    customClassWidth = 'w-max max-w-[650px] overflow-hidden text-ellipsis text-wrap';
    left = true;
  } else {
    top = true;
  }
});
</script>

{#if icon}
  {#if error !== undefined && error !== ''}
    <Tooltip left={left} top={top} tip={error} class={customClassWidth}>
      <Icon icon={faExclamationCircle} size='1.1x' class={`cursor-pointer text-[var(--pd-state-error)] ${className}`} />
    </Tooltip>
  {/if}
{:else}
  <div
    class="text-[var(--pd-state-error)] p-1 flex flex-row items-center {className}"
    class:opacity-0={error === undefined || error === ''}>
    <Icon icon={faExclamationCircle} size='1.1x' class="cursor-pointer text-[var(--pd-state-error)]" />
    <div role="alert" aria-label={ariaLabel ?? 'Error Message Content'} class="ml-2">{error}</div>
  </div>
{/if}
