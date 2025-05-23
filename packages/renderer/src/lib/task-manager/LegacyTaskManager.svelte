<script lang="ts">
import { faCheck, faChevronDown, faCircle } from '@fortawesome/free-solid-svg-icons';
import { Button } from '@podman-desktop/ui-svelte';
import Fa from 'svelte-fa';

import { clearNotifications, tasksInfo } from '/@/stores/tasks';

import TaskIcon from '../images/TaskIcon.svelte';
import LegacyTaskManagerEmptyScreen from './LegacyTaskManagerEmptyScreen.svelte';
import LegacyTaskManagerGroup from './LegacyTaskManagerGroup.svelte';

// display or not the tasks manager (defaut is false)
export let showTaskManager = false;
let outsideWindow: HTMLDivElement;

$: runningTasks = $tasksInfo.filter(task => task.state === 'running');
$: completedTasks = $tasksInfo.filter(task => task.state !== 'running');

// hide the task manager
function hide(): void {
  showTaskManager = false;
}

// If we hit ESC while the menu is open, close it
function handleEscape({ key }: KeyboardEvent): void {
  // if the task manager is not open, do not check any keys
  if (!showTaskManager) {
    return;
  }
  if (key === 'Escape') {
    showTaskManager = false;
  }
}

// listen to the event "toggle-legacy-task-manager" to toggle the task manager
window.events?.receive('toggle-legacy-task-manager', () => {
  showTaskManager = !showTaskManager;
});

function onWindowClick(e: MouseEvent): void {
  const target = e.target as HTMLElement;
  // Listen to anything **but** the button that has "data-task-button" attribute with a value of "Help"
  // Ignore if task manager not visible
  if (showTaskManager && target && target.getAttribute('data-task-button') !== 'Tasks') {
    showTaskManager = outsideWindow?.contains(target);
  }
}
</script>

<!-- track keys like "ESC" -->
<svelte:window on:keyup={handleEscape} on:click={onWindowClick}/>

{#if showTaskManager}
  <div title="Tasks manager" class="fixed bottom-9 right-4 bg-[var(--pd-modal-bg)] h-96 w-80 z-40" bind:this={outsideWindow}>
    <!-- Draw the arrow below the box-->
    <div
      class="absolute bottom-0 z-50 right-[17px] transform -translate-x-1/2 translate-y-1/2 rotate-45 w-4 h-4 {$tasksInfo.length >
      0
        ? 'bg-[var(--pd-modal-bg)]'
        : 'bg-[var(--pd-invert-content-card-bg)]'} border-r border-b border-[var(--pd-modal-border)]">
    </div>

    <div title="" class="flex flex-col h-full w-full border border-[var(--pd-modal-border)]">
      <!-- header of the task manager -->
      <div class="flex flex-row w-full">
        <!-- title of bars-->
        <div class="p-2 flex flex-row items-center w-full text-[var(--pd-invert-content-header-text)]">
          <TaskIcon size="15" />
          <div class="text-xs uppercase ml-2">tasks</div>
          <div class="flex-1"></div>
          <button
            on:click={hide}
            title="Hide (Escape)"
            class="cursor-pointer hover:bg-[var(--pd-invert-content-card-bg)] p-1 ml-1">
            <Fa icon={faChevronDown} size="0.9x" />
          </button>
        </div>
      </div>

      {#if $tasksInfo.length > 0}
        <div class="flex flex-col grow h-[100px] overflow-y-auto">
          <!-- running tasks-->
          {#if runningTasks.length > 0}
            <div class="flex bg-[var(--pd-content-bg)] px-4">
              <LegacyTaskManagerGroup
                lineColor="bg-[var(--pd-invert-content-card-bg)]"
                icon={faCircle}
                tasks={runningTasks}
                title="running tasks" />
            </div>
          {/if}

          <!-- completed tasks-->
          {#if completedTasks.length > 0}
            <div class="flex bg-[var(--pd-invert-content-card-bg)] pt-1 px-4">
              <LegacyTaskManagerGroup
                lineColor="bg-[var(--pd-invert-content-bg)]"
                icon={faCheck}
                tasks={completedTasks}
                title="completed" />
            </div>
          {/if}
        </div>
      {/if}

      <!-- footer of the task manager -->
      <!-- only if there are tasks-->
      {#if completedTasks.length > 0}
        <div class="flex flex-row w-full">
          <div class="p-2 flex flex-row space-x-2 w-full">
            <Button on:click={clearNotifications}>Clear</Button>
            <!--<Button>View task history</Button>-->
          </div>
        </div>
      {/if}
      <!-- display the empty screen -->
      {#if $tasksInfo.length === 0}
        <LegacyTaskManagerEmptyScreen />
      {/if}
    </div>
  </div>
{/if}
