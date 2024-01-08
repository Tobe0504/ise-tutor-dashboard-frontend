import classes from "./SupportVisitOurCommunity.module.css";

const SupportVisitOurCommunity = () => {
  const visitOurCommunity = [
    {
      title: "Discussion forum",
      description:
        "Engage in peer-to-peer conversations become an integral part of the vibrant iṣẹ́ EdTech discussion forums.",
      route: "/",
    },

    {
      title: "Visit our blog",
      description:
        "Explore tech developments and trends. Gain knowledge, grow your skills with our well-curated tech blogs.",
      route: "/",
    },
    {
      title: "See our Tiktok",
      description:
        "Cultivate your tech skills while having a blast. Join us on TikTok for a dose of hilarious memes and in-house tech jokes.",
      route: "/",
    },
  ];
  return (
    <section className={classes.container}>
      <h4>Visit our community</h4>
      <div className={classes.options}>
        {visitOurCommunity.map((data, i) => {
          return (
            <div key={i} className={classes.option}>
              <p>{data.title}</p>
              <p>{data.description}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default SupportVisitOurCommunity;
