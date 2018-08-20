$(document).ready(function(){
    if(window.location.href.indexOf('index') > -1){
        //SLIDER
        $(".galeria").bxSlider({
            auto: true,
            autoControls: false,
            autoHover: true,
            stopAutoOnClick: true,
            pager:true,
            mode: "fade",
            captions: false,
            slideWidth:1200,
            responsive:true
        });
        //POST
        var posts = [
            {
                title: 'Probando Titulo 1',
                date: 'Publicado el día '+moment().date()+' de '+moment().locale('es').format('MMMM')+' del '+moment().format('YYYY'),
                content: 'Vivamus vel orci sit amet sem sollicitudin suscipit et et diam. Donec rhoncus tincidunt mauris luctus luctus. In pellentesque nisi et pharetra vehicula. Aenean libero dui, efficitur non lobortis a, tincidunt sit amet augue. Aenean id luctus dolor. Nullam sollicitudin ultrices fermentum. Mauris commodo diam eu metus ultricies viverra. Aenean et odio vehicula, pretium nibh sed, mattis magna. Phasellus ullamcorper, diam nec bibendum venenatis, enim mi iaculis neque, luctus porttitor augue dolor sit amet sem. Vivamus sagittis, dui eget suscipit malesuada, elit massa bibendum ante, vel consectetur ligula ex a purus. In eu lacinia magna. Praesent sollicitudin, velit eget porta hendrerit, mi mauris efficitur lectus, non euismod metus tortor non risus. Donec euismod cursus ipsum. Praesent gravida pretium elementum.'
            },
            {
                title: 'Probando Titulo 2',
                date: 'Publicado el día '+moment().date()+' de '+moment().locale('es').format('MMMM')+' del '+moment().format('YYYY'),
                content: 'Vivamus vel orci sit amet sem sollicitudin suscipit et et diam. Donec rhoncus tincidunt mauris luctus luctus. In pellentesque nisi et pharetra vehicula. Aenean libero dui, efficitur non lobortis a, tincidunt sit amet augue. Aenean id luctus dolor. Nullam sollicitudin ultrices fermentum. Mauris commodo diam eu metus ultricies viverra. Aenean et odio vehicula, pretium nibh sed, mattis magna. Phasellus ullamcorper, diam nec bibendum venenatis, enim mi iaculis neque, luctus porttitor augue dolor sit amet sem. Vivamus sagittis, dui eget suscipit malesuada, elit massa bibendum ante, vel consectetur ligula ex a purus. In eu lacinia magna. Praesent sollicitudin, velit eget porta hendrerit, mi mauris efficitur lectus, non euismod metus tortor non risus. Donec euismod cursus ipsum. Praesent gravida pretium elementum.'
            },
            {
                title: 'Probando Titulo 3',
                date: 'Publicado el día '+moment().date()+' de '+moment().locale('es').format('MMMM')+' del '+moment().format('YYYY'),
                content: 'Vivamus vel orci sit amet sem sollicitudin suscipit et et diam. Donec rhoncus tincidunt mauris luctus luctus. In pellentesque nisi et pharetra vehicula. Aenean libero dui, efficitur non lobortis a, tincidunt sit amet augue. Aenean id luctus dolor. Nullam sollicitudin ultrices fermentum. Mauris commodo diam eu metus ultricies viverra. Aenean et odio vehicula, pretium nibh sed, mattis magna. Phasellus ullamcorper, diam nec bibendum venenatis, enim mi iaculis neque, luctus porttitor augue dolor sit amet sem. Vivamus sagittis, dui eget suscipit malesuada, elit massa bibendum ante, vel consectetur ligula ex a purus. In eu lacinia magna. Praesent sollicitudin, velit eget porta hendrerit, mi mauris efficitur lectus, non euismod metus tortor non risus. Donec euismod cursus ipsum. Praesent gravida pretium elementum.'
            },
            {
                title: 'Probando Titulo 4',
                date: 'Publicado el día '+moment().date()+' de '+moment().locale('es').format('MMMM')+' del '+moment().format('YYYY'),
                content: 'Vivamus vel orci sit amet sem sollicitudin suscipit et et diam. Donec rhoncus tincidunt mauris luctus luctus. In pellentesque nisi et pharetra vehicula. Aenean libero dui, efficitur non lobortis a, tincidunt sit amet augue. Aenean id luctus dolor. Nullam sollicitudin ultrices fermentum. Mauris commodo diam eu metus ultricies viverra. Aenean et odio vehicula, pretium nibh sed, mattis magna. Phasellus ullamcorper, diam nec bibendum venenatis, enim mi iaculis neque, luctus porttitor augue dolor sit amet sem. Vivamus sagittis, dui eget suscipit malesuada, elit massa bibendum ante, vel consectetur ligula ex a purus. In eu lacinia magna. Praesent sollicitudin, velit eget porta hendrerit, mi mauris efficitur lectus, non euismod metus tortor non risus. Donec euismod cursus ipsum. Praesent gravida pretium elementum.'
            },
        ];
        posts.forEach((item, index) =>{
            var post =`
                <article class="post">
                <h2>${item.title}</h2>
                <span class="date">${item.date}</span>
                <p>
                    ${item.content}
                </p>
                <a href="#" class="button-more">leer mas...</a>
                </article>
            `;
            $('#posts').append(post);
        });
            //selector de tema

        var theme = $('#theme');
        $('#to-green').click(function(){
            theme.attr('href','css/green.css');
        });
        $('#to-red').click(function(){
            theme.attr('href','css/red.css');
        });
        $('#to-blue').click(function(){
            theme.attr('href','css/blue.css');
        });
    }else{
        var theme = $('#theme');
        $('#to-green').click(function(){
            theme.attr('href','../css/green.css');
        });
        $('#to-red').click(function(){
            theme.attr('href','../css/red.css');
        });
        $('#to-blue').click(function(){
            theme.attr('href','../css/blue.css');
        });
    };

    //SCROLL arriba del sitio
    $('.subir').click(function(e){
        e.preventDefault();
        $('html, body').animate({
            scrollTop:0
        }, 555);
        return false;
    })

    //login falso
    $('#login form').submit(function(){
        var form_name = $('#form_name').val();
        localStorage.setItem('form_name',form_name);
    })
    var form_name = localStorage.getItem('form_name');
    if(form_name != null && form_name != undefined){
        var about_parrafo = $('#about p');
        about_parrafo.html('<strong>Bienvenido, '+form_name+'</strong>');
        about_parrafo.append('<a href="#" id="logOut">Cerrar sesión</a>');
        $('#login').hide();
        $('#logOut').click(function(){
            localStorage.clear();
            location.reload();
        });
    };
});