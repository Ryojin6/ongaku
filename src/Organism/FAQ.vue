<template>
  <AtomSection
    v-aos
    tp="large"
    bp="large"
    class="relative transition-all duration-1000 ease-in-out"
    aos-from=" bg-white"
    aos-to="bg-n-green text-white"
  >
    <AtomInner>
      <AtomAnimate>
        <MoleculeTitle
          title="Lorem ipsum dolor sit amet consectetur adipisicing elit.
           Tempora placeat porro possimus  dolor sit amet consectetur adipisicing elit.
           Tempora placeat porro "
          subtitle="Lorem ipsum"
        />
      </AtomAnimate>
      <AtomAnimate class="my-10">
        <MoleculeAccordionCard
          v-for="item in faq"
          :key="item.id"
          :title="item.title"
          :description="item.description"
        />
      </AtomAnimate>
    </AtomInner>
  </AtomSection>
</template>

<script>
export default {
  data() {
    return {
      faq: [
        {
          title: 'Inspiration',
          description: `The vision of Ongaku was to create an environment which not only 
          brings artists of Asia together, but also provide a space where holders can 
          explore their creative mind`,
        },
        {
          title: 'Music',
          description: `Each NFT will have music behind the animation which will be 
          customizable to holders. In an effort to diversify the sound of Ongaku we've 
          reached out to artists all over Asia each with their own unique style. Ranging 
          from K-Pop music to Techno music.*`,
        },
        {
          title: 'Customization',
          description: `
          <p>*Each Ongaku can be hand tailored to each holder and their preferences, 
          allowing each holder to have something unique to themselves and truly represents.
           To acheive this goal we've implemented the following systems.</p>

          <p>1. Gender Swap - Each Ongaku NFT will have the option to switch 
          between male or female.</p>

          <p>2. Music Creation - The music behind every Ongaku can be customized and created by the 
          holder using our websites built-in system which will update the metadata of NFT 
          and change the song your Ongaku listens to.</p>
`,
        },
        {
          title:
            'How do I get in touch for partnerships for the Ongaku collection?',
          description: `Thank you for your interest! Make sure to DM us on twitter and we
           will get back to you as soon as possible. `,
        },
        {
          title: 'Will there be a discord?',
          description: `Yes, we will be making a discord prior to the mint date. 
          The exact date will be announced on our twitter.`,
        },
        {
          title: 'What blockchain we Ongaku be deployed on?',
          description: `Ongaku will be a Ethereum based project. We will be working 
          with a ERC - 721A contract.`,
        },
      ],
    };
  },
};
</script>
