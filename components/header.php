<header class="header <?php echo $args['class']; ?>">
    <div class="container">
        <?php if(is_front_page()): ?>
            <span class="header__logo logo">
               logo
            </span>
        <?php else: ?>
            <a href="<?php echo home_url(); ?>" class="header__logo logo">
               Logo link
            </a>
        <?php endif; ?>

        <button class="btn menu-btn js-menu-btn">
            Toggle menu
        </button>

        <nav class="menu">
            <?php 
                wp_nav_menu( [
                    'container'       => false,
                    'menu_class'      => 'js-menu menu__list',
                    'echo'            => true,
                ] ); 
            ?>
        </nav>
    </div>
</header>