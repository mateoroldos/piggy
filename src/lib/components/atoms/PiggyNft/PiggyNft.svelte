<script lang="ts">
  export let width = '300px';
  export let name = "Mateo";
  export let description = "buy a new camera";
  export let file: File | undefined = undefined;
  export let type: "common" | "golden" = "common";
  export let image = "/placeholder.jpg"

  let imageElement: HTMLImageElement;

	const displayThumbnail = (file: File) => {
    const reader = new FileReader();
		reader.readAsDataURL(file); // base 64 format

    reader.onload = () => {
      image = reader.result as string;
    }
	};

  $: file && displayThumbnail(file);
</script>

<div class={`main-wrapper shadow-3 ${type}`} style={`width: ${width}`}>
  <img src={image} alt="Collaboration representation">
  {#if type === "common"}
    <p class="title-medium">I helped <strong>{name}</strong> to <strong>{description.toLowerCase()}</strong></p>
    <p class="label-small">Official <strong>Piggy NFT</strong></p>
  {:else if type === "golden"}
    <p class="title-medium">I broke <strong>{name}'s</strong> Piggy to <strong>{description.toLowerCase()}</strong></p>
    <p class="label-small">Official <strong><span class="gold">Golden</span> Piggy NFT</strong></p>
  {/if}
</div>

<style lang="scss">
  .main-wrapper {
    display: flex;
    flex-direction: column;
    gap: 14px;
    background-color: var(--md-sys-color-secondary);
    border-radius: 30px;
    padding: 30px;

    &.common {
      background-color: var(--md-sys-color-secondary);
    }

    &.golden {
      background-color: #FBAB7E;
      background-image: linear-gradient(62deg, var(--md-sys-color-primary) 0%, #F7CE68 100%);

      img {
        filter: hue-rotate(40deg);
        border: 1px solid var(--md-sys-color-primary);
      }

      p {
        color: var(--md-sys-color-on-primary);
      }
    }

    img {
      width: 100%;
      aspect-ratio: 6/7;
      object-fit: cover;
      border-radius: 100px 0 100px 0;
      filter: hue-rotate(3deg) saturate(0.4);
    }

    p {
      color: var(--md-sys-color-on-secondary);
    }

    .label-small {
      margin-top: 10px;
      font-size: 0.6rem;

      .gold {
        color: #ecdcad;
      }
    }
  }
</style>