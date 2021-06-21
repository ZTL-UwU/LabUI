<script>
    export let name = "";

    $: classes = `ti ti-${name}`;
</script>

<i class={ classes }></i>