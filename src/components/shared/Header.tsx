import Container from "../ui/Container";

export default function Header(): JSX.Element {
  return (
    <header className="py-8">
      <Container>
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900">
            Miovox Studio
          </h1>
          <p className="mt-4 text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            Premium Technology Solutions for Modern Innovation
          </p>
        </div>
      </Container>
    </header>
  );
}