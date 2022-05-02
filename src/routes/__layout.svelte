<script>
    import '../app.css';
    import Footer from "$lib/components/Footer.svelte";
    import 'papercss/dist/paper.min.css'
    import {Navbar} from "spaper";
</script>

<div class="drawer">
    <input id="my-drawer-3" type="checkbox" class="drawer-toggle">
    <div class="drawer-content flex flex-col">
        <!-- Navbar -->
        <Navbar class="bg-base-300 items-center toolbar" fixed>
            <h3 class="flex items-center flex-1 px-2 mx-2 links" slot="brand">
                <img src="https://fanedcjcmuamcxodipoz.supabase.co/storage/v1/object/public/images/cv.svg" alt=""
                     class="w-8 h-8 mr-2">
                <span class=" font-bold">AltF4 <span class="uppercase text-indigo-600">Profile page</span></span>
            </h3>
            <ul class="inline font-[500] text-[16px] uppercase flex-none">
                <!-- Navbar menu content here -->
                <li class="links"><a href="#works">

                    Works</a></li>
                <li class="links"><a href="#companies">

                    Companies</a></li>
                <li class="links"><a href="#techs">

                    Techs</a></li>
                <li class="links"><a href="#contact">

                    Contact</a></li>
            </ul>
        </Navbar>
        <!-- Page content here -->
        <main class="bg-gray-100">
            <slot/>
        </main>
        <Footer/>
    </div>
    <div class="drawer-side">
        <label for="my-drawer-3" class="drawer-overlay"></label>
        <ul class="menu p-4 overflow-y-auto w-80 bg-base-100">
            <!-- Sidebar content here -->
            <li class="links"><a href="#works">

                Works</a></li>
            <li class="links"><a href="#companies">

                Companies</a></li>
            <li class="links"><a href="#techs">

                Techs</a></li>
            <li class="links"><a href="#contact">

                Contact</a></li>

        </ul>

    </div>
</div>