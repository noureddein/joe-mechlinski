import Button from "../../Button";

const BUTTONS = [
  { name: "Apple Podcasts" },
  { name: "Google Play" },
  { name: "Spotify" },
];
const BuyPodcasts = () => {
  return (
    <>
      <div className="flex justify-center py-8">
        {BUTTONS.map((btn, idx) => {
          return (
            <Button
              key={idx}
              name={btn.name}
              style="mx-4 px-4 py-2 rounded-sm"
            />
          );
        })}
      </div>
    </>
  );
};

export default BuyPodcasts;
