<script lang="ts">
import dateStuff from '../dates'

export let value;

</script>

<time datetime={dateStuff(value, "iso")}>{dateStuff(value, "fancy")}</time>
