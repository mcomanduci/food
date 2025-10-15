export default function MealsLoadingPage() {
  return (
    <p
      className="text-center"
      style={{ animation: "loading 1.2s ease-in-ou infinite" }}
    >
      Fetching meals...
    </p>
  );
}
