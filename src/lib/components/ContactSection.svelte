<script>
    import {Button, Form, Input} from "spaper";
    import IoMdSend from 'svelte-icons/io/IoMdSend.svelte'
</script>

<div class="flex flex-col py-16 px-4 scroll-mt-[40px] md:scroll-mt-[64px]" id="contact">
    <Form class="max-w-xl w-full mx-auto flex flex-col gap-8 paper border border-2" netlify method="POST" data-netlify="true"
          name="feedbackForm">
        <h1 class="font-bold text-3xl text-center">Get in touch</h1>
        <Input type="email" name="email" placeholder="Your email" required/>

        <Input type="textarea" name="message" placeholder="Your message" required/>
        <Button type="secondary" class="flex items-center">
            <div class="w-6 h-6 mr-1">
                <IoMdSend/>
            </div>
            Send</Button>
    </Form>

</div>
