"use client";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { toast } from "@/components/ui/use-toast";

const schema = z.object({
  username: z
    .string()
    .min(5, { message: "Username must be at least 5 characters." }),
  password: z
    .string()
    .min(6, { message: "Password must be at least 6 characters." }),
});

const ValidateWithTooltip = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
  });

  function onSubmit(data) {
    toast({
      title: "You submitted the following values:",
      description: (
        <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
          <code className="text-primary-foreground">{JSON.stringify(data, null, 2)}</code>
        </pre>
      ),
    });
  }
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <div className="flex flex-col gap-2">
        <Label
          htmlFor="username"
          className={cn("", {
            "text-destructive": errors.username,
          })}
        >
          Username
        </Label>
        <Input
          type="text"
          {...register("username")}
          placeholder="Enter Username"
          className={cn("", {
            "border-destructive focus:border-destructive": errors.username,
          })}
        />
        {errors.username && (
          <div className="mt-1">
            <span className="text-xs bg-destructive text-primary-foreground px-2 py-1 rounded-sm">
              {errors.username.message}
            </span>
          </div>
        )}
      </div>
      <div className="flex flex-col gap-2">
        <Label
          htmlFor="password"
          className={cn("", {
            "text-destructive": errors.password,
          })}
        >
          Password
        </Label>
        <Input
          type="password"
          placeholder="Enter password"
          {...register("password")}
          className={cn("", {
            "border-destructive focus:border-destructive": errors.password,
          })}
        />

        {errors.password && (
          <div className="mt-1">
            <span className="text-xs bg-destructive text-primary-foreground px-2 py-1 rounded-sm">
              {errors.password.message}
            </span>
          </div>
        )}
      </div>
      <div className="mt-2">
        <Button type="submit">Submit</Button>
      </div>
    </form>
  );
};

export default ValidateWithTooltip;
