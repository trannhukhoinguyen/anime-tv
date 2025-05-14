<script context="module" lang="ts">
  import {colors} from "../../lib/colors";

  export interface Episode {
    id: string;
    title: string;
  }

  export interface Playlist {
    id: string;
    title: string;
    color?: (typeof colors)[keyof typeof colors];
    cover?: string;
    author?: string;
    episodes?: Episode[];
  }

  export let playlist: Playlist;

  let expanded = false;
</script>

<div class="flex flex-col">
  <button
          class="playlist-item flex group relative p-2 overflow-hidden items-center gap-5 rounded-md shadow-lg hover:shadow-xl outline-none hover:bg-zinc-500/10 focus:bg-zinc-500/50 w-full text-left"
          on:click={() => (expanded = !expanded)}
          data-color={playlist?.color?.dark}
  >
    <div class="h-12 w-12 flex-none">
      <img
              src={playlist?.cover}
              alt={playlist?.title}
              class="object-cover rounded h-full w-full shadow-[5px_0_30px_0px_rgba(0,0,0,0.3)]"
      />
    </div>
    <div class="flex flex-auto flex-col truncate">
      <div class="font-semibold w-full flex-none truncate">
        {playlist?.title}
      </div>
      <div class="text-gray-400 text-sm truncate flex-1">
        {playlist?.author}
      </div>
    </div>
  </button>

  {#if expanded}
    <ul class="ml-16 mt-2 flex flex-col gap-1">
      {#each playlist?.episodes as ep}
        <li>
          <a
                  href={`/playlist/${playlist?.id}/episode/${ep?.id}`}
                  class="block text-sm text-zinc-300 hover:underline truncate"
          >
            {ep?.title}
          </a>
        </li>
      {/each}
    </ul>
  {/if}
</div>
