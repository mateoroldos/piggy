<script lang="ts">
	import { piggyGeneratorData } from "$lib/stores/generator/piggyGeneratorData";
	import StepButtons from "../atoms/StepButtons.svelte";
	import Container from "../atoms/Container.svelte";
	import PiggyNft from "$lib/components/atoms/PiggyNft/PiggyNft.svelte";
</script>

<Container>
  <span>My name is</span>
  <input type="text" name="name" id="name" placeholder="Mateo" bind:value={$piggyGeneratorData.name}>
  <span>and I need</span>
  <input type="number" name="goal" id="goal" placeholder="500" min="0" bind:value={$piggyGeneratorData.goal}>
  <span>to</span>
  <textarea name="description" id="description" cols="30" rows="3" maxlength="90" bind:value={$piggyGeneratorData.description} placeholder="Buy a new camera"/>
  <StepButtons nextText="Create Piggy"/>
</Container>
<Container>
  <span class="display-medium">
    The funniest way to recieve donations.
  </span>
  <span class="title-large">
    Create your Piggy and share the link with your friends. All donators will get an NFT.
  </span>
  <span class="title-large">
    The donator who the dollar that reaches your Piggy's goal get's a super special NFT and 10% of the money!
  </span>
  <span class="label-large">
    Powered by the <strong>Flow Blockchain</strong>
  </span>
</Container>

<style lang="scss">
  textarea {
    min-width: 100%;
    max-width: 100%;
  }

  .display-medium, .title-large {
    margin-bottom: 45px;
    color: var(--md-sys-color-on-primary-container);
  }

  .label-large {
    margin-top: 30px;
    color: var(--md-sys-color-on-primary-container);
  }
</style>
