<script>
    let {data} = $props();
    const persons = data.persons;
</script>

{#each persons as person}
    {person.name} <br>
{/each}
<h1>test</h1>
<p>it workssss</p>

<style>

</style>
