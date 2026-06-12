import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import App from "./App";

describe("App（scaffold サンプルテスト）", () => {
  it("カードとフォームが描画される", () => {
    render(<App />);
    expect(screen.getByText("Scaffold 動作確認")).toBeInTheDocument();
    expect(screen.getByLabelText("名前")).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: "挨拶する" }),
    ).toBeInTheDocument();
  });

  it("入力した名前で Dialog が開く", async () => {
    const user = userEvent.setup();
    render(<App />);
    await user.type(screen.getByLabelText("名前"), "Shugo");
    await user.click(screen.getByRole("button", { name: "挨拶する" }));
    expect(await screen.findByRole("dialog")).toBeInTheDocument();
    expect(screen.getByText("こんにちは、Shugo さん")).toBeInTheDocument();
  });
});
