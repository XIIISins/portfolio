import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { render, screen } from "@testing-library/react";

describe("Card", () => {
  it("renders card with all subcomponents", () => {
    render(
      <Card>
        <CardHeader>
          <CardTitle>Test Title</CardTitle>
          <CardDescription>Test Description</CardDescription>
        </CardHeader>
        <CardContent>Test Content</CardContent>
      </Card>
    );

    expect(screen.getByText("Test Title")).toBeInTheDocument();
    expect(screen.getByText("Test Description")).toBeInTheDocument();
    expect(screen.getByText("Test Content")).toBeInTheDocument();
  });

  it("applies custom className to card", () => {
    render(<Card className="custom-card">Test Card</Card>);
    const card = screen.getByText("Test Card").closest("div");
    expect(card).toHaveClass("custom-card");
  });

  it("renders card header with proper structure", () => {
    render(
      <CardHeader>
        <CardTitle>Header Title</CardTitle>
        <CardDescription>Header Description</CardDescription>
      </CardHeader>
    );

    const header = screen.getByText("Header Title").closest("div");
    expect(header).toHaveClass("flex", "flex-col", "space-y-1.5");
  });

  it("renders card content with proper structure", () => {
    render(<CardContent>Content Text</CardContent>);
    const content = screen.getByText("Content Text");
    expect(content).toHaveClass("pt-0");
  });

  it("renders card title with proper styling", () => {
    render(<CardTitle>Title Text</CardTitle>);
    const title = screen.getByText("Title Text");
    expect(title).toHaveClass("text-lg", "font-semibold", "tracking-tight");
  });

  it("renders card description with proper styling", () => {
    render(<CardDescription>Description Text</CardDescription>);
    const description = screen.getByText("Description Text");
    expect(description).toHaveClass("text-sm", "text-slate-300/80");
  });
});
