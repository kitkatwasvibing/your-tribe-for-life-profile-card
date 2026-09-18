<script>
    let {data} = $props();
    const person = data.person;
</script>
<div>
    <h1>{person.name}'s Page!</h1>

    <article>
    <h2>Whats all this then?</h2>
    <p>This is a website! its not good because i lowkey forgot to work on it, but its a website made with svelte!</p>
    </article>

    <main>
        <h2>Be informed about me!</h2>
        <p>(really, i'm dangerous. be informed.)</p>
        <img src={`https://fdnd.directus.app/assets/${person.mugshot_year2}`} alt="this is what i look like" width="200" height="auto">
    <ul>
        <li>birthdate: {person.birthdate}</li>
        <li>Github: <a href="https://github.com/Kitkatwasvibing">{person.github_handle}</a></li>
        <li>{person.bio}</li>
    </ul>
    </main>

    <article>
    <h2>My fav webbed sites</h2>
    <ul>   
        <li><a href="https://frutigeraeroarchive.org/">Fruitiger aero archive</a></li>
        <li><a href="https://tamanotchi.world/">Tamanotchi</a></li>
    </ul>
    </article>
</div>

<style>
    div{
        text-align: center;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 10px;
        overflow-x: hidden;
    }
    article{
        border: 5px solid darkblue;
        border-radius: 30px;
        width: 90vw;
    }

    main{
        border: 30px dotted cadetblue;
        width: fit-content;
    }

    ul{
        list-style: none;
    }
</style>