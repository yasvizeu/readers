function createNavebar(){
    const element = document.getElementById('navbar-local')
    const navbar = ` 
    <nav class="nav-top">
        <ul>
            <li><a href="index.html">Inicio</a></li>
            <li><a href="index.html#cards">Galeria</a></li>
            <li><a href="index.html#agenda">Agenda</a></li>
            <li><a href="index.html#contato">Contato</a></li>
            <li><a href="login.html">Entrar</a></li>
        </ul>
    </nav>
    `
    element.innerHTML = navbar
}

createNavebar()