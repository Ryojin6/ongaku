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
          title: 'Will there be a whitelist?',
          description: `Yes, there will be a whitelist. We will make sure that people 
          can guarantee their mint spot by showing their love and conviction for the project.
`,
        },
        {
          title: 'What is the supply?',
          description: `The supply is TBA but will not be too much and not too little :).`,
        },
        {
          title: 'Where can I find more information about Ongaku?',
          description: `You can find more information on our twitter 
          <a href=" https://twitter.com/OngakuOfficial" target="_blank"> 
          https://twitter.com/OngakuOfficial</a>
           or you can checkout the discord 
          that we will be making ( TBA )
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
