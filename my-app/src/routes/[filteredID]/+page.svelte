<script context="module">
  // @ts-ignore
  export async function load({ data }) {
    // You can access the passed state like this:
    return {
      props: {
        searchResults: data.data || [],
      },
    };
  }
  /**
   * @type {any[]}
   */
  export let searchResults = [];
</script>

<!-- Now use filteredSpots to display your data -->
{#each searchResults as spot}
  <div class="spot">
    <h2>{spot.name}</h2>
    <!-- ... display other properties of 'spot' as needed -->
    
  </div>
{/each}
