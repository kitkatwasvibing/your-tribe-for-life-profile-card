<script>
    let {data} = $props();
    const person = data.person;
</script>

<h1>{person.name}'s Page!</h1>

<article>
<h2>Whats all this then?</h2>
</article>

<main>
<h2>Be informed about me</h2>
</main>

<article>
<h2>My fav webbed sites</h2>
</article>

<style>
    article{
        border: 5px solid darkblue;
        border-radius: 30px;
    }

    main{
        border: 30px dotted cadetblue;
    }
</style>