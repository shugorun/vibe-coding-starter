import { useState } from "react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function App() {
  const [name, setName] = useState("");

  return (
    <main className="bg-background text-foreground flex min-h-svh items-center justify-center p-6">
      <Card className="w-full max-w-sm">
        <CardHeader>
          <CardTitle>Scaffold 動作確認</CardTitle>
          <CardDescription>
            Vite + React + TypeScript + Tailwind + shadcn/ui +
            Vitest（スタイルはトークン層経由）
          </CardDescription>
        </CardHeader>
        <CardContent className="grid gap-2">
          <Label htmlFor="name">名前</Label>
          <Input
            id="name"
            placeholder="名前を入力"
            value={name}
            onChange={(event) => setName(event.target.value)}
          />
        </CardContent>
        <CardFooter>
          <Dialog>
            <DialogTrigger asChild>
              <Button>挨拶する</Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>こんにちは、{name || "名無し"} さん</DialogTitle>
                <DialogDescription>
                  shadcn/ui の Dialog が src/styles/tokens.css
                  のトークン経由で描画されています。
                </DialogDescription>
              </DialogHeader>
            </DialogContent>
          </Dialog>
        </CardFooter>
      </Card>
    </main>
  );
}
